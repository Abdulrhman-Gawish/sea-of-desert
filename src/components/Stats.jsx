import { useEffect, useRef, useState } from 'react'
import { useLang } from '../context/LangContext'

function useCountUp(target, duration = 2000, active) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration, active])
  return value
}

const statData = [
  { value: 2022, suffix: '', label: { en: 'Year Founded', ar: 'سنة التأسيس' } },
  { value: 1, suffix: 'M+ SAR', label: { en: 'Annual Growth', ar: 'نمو سنوي' } },
  { value: 5, suffix: '+', label: { en: 'Global Partners', ar: 'شركاء عالميون' } },
  { value: 6, suffix: '', label: { en: 'Business Fields', ar: 'مجالات أعمال' } },
  { value: 100, suffix: '%', label: { en: 'Client Commitment', ar: 'التزام بالعملاء' } },
]

function StatCard({ stat, active, lang }) {
  const { t } = useLang()
  const count = useCountUp(stat.value, 2000, active)

  return (
    <div style={{
      textAlign: 'center',
      padding: '32px 24px',
      opacity: active ? 1 : 0,
      transform: active ? 'scale(1)' : 'scale(0.85)',
      transition: 'all 0.7s ease',
    }}>
      <div style={{
        fontSize: 'clamp(36px, 5vw, 56px)',
        fontWeight: 900,
        fontFamily: 'Poppins',
        color: 'white',
        lineHeight: 1,
        marginBottom: 8,
      }}>
        {count}{stat.suffix}
      </div>
      <div style={{
        color: 'rgba(255,255,255,0.65)',
        fontSize: 14,
        fontWeight: 500,
        fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
      }}>
        {t(stat.label.en, stat.label.ar)}
      </div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const { t, dir, lang } = useLang()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setActive(true)
        obs.unobserve(el)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section dir={dir} style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-mid))', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(26,79,160,0.2)' }} />
      <div style={{ position: 'absolute', bottom: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(201,162,39,0.15)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(24px,3vw,38px)', fontWeight: 800, color: 'white', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
            {t('Sea of Desert by the Numbers', 'بحر الصحراء بالأرقام')}
          </h2>
        </div>

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,0.1)', borderLeft: '1px solid rgba(255,255,255,0.1)' }}
          className="stats-row">
          {statData.map((s, i) => (
            <div key={i} style={{ borderRight: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <StatCard stat={s} active={active} lang={lang} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-row { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
