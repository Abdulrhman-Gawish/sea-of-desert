import { useEffect, useState } from 'react'
import { ArrowRight, Globe, Users, TrendingUp, Globe2 } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function Hero() {
  const { t, dir, lang } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      dir={dir}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 40%, #0f2a50 70%, #162845 100%)',
        position: 'relative',
        overflow: 'visible',
        display: 'flex',
        alignItems: 'center',
      }}
    >

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Floating Blobs */}
      <div style={{
        position: 'absolute',
        top: '8%',
        right: dir === 'rtl' ? 'auto' : '8%',
        left: dir === 'rtl' ? '8%' : 'auto',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,79,160,0.25) 0%, transparent 70%)',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-8%',
        left: dir === 'rtl' ? 'auto' : '5%',
        right: dir === 'rtl' ? '5%' : 'auto',
        width: 350,
        height: 350,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,162,39,0.15) 0%, transparent 70%)',
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      <div className="container relative" style={{ paddingTop: 100, paddingBottom: 80, zIndex: 10 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          
          {/* Text Content */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <div className="pill-label" style={{ marginBottom: 28, color: 'var(--gold)', background: 'rgba(201,162,39,0.1)', borderColor: 'rgba(201,162,39,0.2)' }}>
              <Globe size={14} />
              {t('hero_pill')}
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.15,
              marginBottom: 20,
              fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
              letterSpacing: lang === 'en' ? '-0.02em' : 'normal'
            }}>
              {lang === 'en' ? (
                <>Connecting <span style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Local Vision</span><br/>to Global Opportunities</>
              ) : (
                <><span style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>نربط الرؤية المحلية</span><br/>بالفرص العالمية</>
              )}
            </h1>

            <p style={{
              fontSize: 'clamp(15px, 1.4vw, 17px)',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.8,
              marginBottom: 40,
              fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
              maxWidth: 500,
            }}>
              {t('hero_desc')}
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-gold" style={{ fontSize: 14, padding: '12px 28px' }}>
                {t('btn_contact')}
                <ArrowRight size={16} />
              </a>
              <a href="#about" className="btn-secondary" style={{ fontSize: 14, padding: '12px 28px' }}>
                {t('btn_explore')}
              </a>
            </div>
          </div>



        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:first-child { display: flex; flex-direction: column; align-items: center; }
          .hero-visual { display: none; }
        }
        @media (max-width: 600px) {
          .hero-grid > div:first-child p { max-width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
