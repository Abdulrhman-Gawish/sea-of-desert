import { useEffect, useState } from 'react'
import { ArrowRight, TrendingUp, Users, Globe, Briefcase } from 'lucide-react'
import { useLang } from '../context/LangContext'

const stats = [
  { icon: <TrendingUp size={20} />, value: '2022', label: { en: 'Founded', ar: 'تأسست' } },
  { icon: <TrendingUp size={20} />, value: '1M+', label: { en: 'SAR Growth', ar: 'ريال نمو' } },
  { icon: <Users size={20} />, value: '5', label: { en: 'Strategic Partners', ar: 'شركاء استراتيجيون' } },
  { icon: <Briefcase size={20} />, value: '6', label: { en: 'Business Sectors', ar: 'قطاعات أعمال' } },
]

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
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background world map SVG overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cpath fill='%23ffffff' d='M200 150 Q250 120 300 150 Q350 130 380 160 Q420 145 450 165 L460 200 Q440 210 410 200 Q380 215 350 200 Q320 215 280 205 Q240 215 210 200 Z M500 120 Q540 100 580 120 Q620 105 660 125 Q700 110 730 130 L740 165 Q715 175 685 165 Q655 178 625 168 Q595 180 565 170 Q535 182 505 170 Z M100 250 Q140 235 180 255 Q220 240 255 260 L260 290 Q235 300 200 290 Q165 305 135 292 Q110 302 100 285 Z M750 200 Q790 182 830 200 Q870 185 910 205 Q950 190 980 210 L990 245 Q965 258 930 245 Q895 260 860 248 Q825 262 795 250 Q765 264 750 250 Z'/%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      {/* Floating geometric shapes */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: dir === 'rtl' ? 'auto' : '8%',
        left: dir === 'rtl' ? '8%' : 'auto',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,79,160,0.3) 0%, transparent 70%)',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: dir === 'rtl' ? 'auto' : '5%',
        right: dir === 'rtl' ? '5%' : 'auto',
        width: 250,
        height: 250,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,162,39,0.2) 0%, transparent 70%)',
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '120px 24px 80px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
          className="hero-grid">

          {/* Left Content */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s ease' }}>
            <div className="pill-label" style={{ marginBottom: 24, color: 'var(--gold)', background: 'rgba(201,162,39,0.12)', borderColor: 'rgba(201,162,39,0.25)' }}>
              <Globe size={12} />
              {t('Saudi Arabia · Global Reach', 'المملكة العربية السعودية · وصول عالمي')}
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 4.5vw, 58px)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.15,
              marginBottom: 24,
              fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
            }}>
              {lang === 'en' ? (
                <>Connecting <span style={{ color: 'var(--gold)' }}>Local Vision</span> to Global Opportunities</>
              ) : (
                <><span style={{ color: 'var(--gold)' }}>نربط الرؤية المحلية</span> بالفرص العالمية</>
              )}
            </h1>

            <p style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              marginBottom: 40,
              fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
              maxWidth: 520,
            }}>
              {t(
                'Sea of Desert provides integrated business solutions in international trade, logistics, digital transformation, healthcare products, and technology.',
                'شركة بحر الصحراء تقدم حلولاً متكاملة في التجارة الدولية والخدمات اللوجستية والتحول الرقمي والمنتجات الصحية والتكنولوجيا.'
              )}
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-gold" style={{ textDecoration: 'none', fontSize: 15 }}>
                {t('Contact Us', 'اتصل بنا')}
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-secondary" style={{ textDecoration: 'none', fontSize: 15 }}>
                {t('Explore Services', 'استكشف خدماتنا')}
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.1)' }}
              className="stats-grid">
              {stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease ${0.2 + i * 0.1}s`,
                  }}
                >
                  <div style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: 'white', fontFamily: 'Poppins' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 4, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t(s.label.en, s.label.ar)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease 0.3s',
              position: 'relative',
            }}
            className="hero-visual"
          >
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
              position: 'relative',
            }}>
              <img
                src="/logo.png"
                alt="Bahr Al Sahara Logo"
                style={{ width: '100%', height: 420, objectFit: 'contain', display: 'block', padding: '24px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,22,40,0.6) 0%, transparent 60%)',
              }} />
            </div>

            {/* Floating cards */}
            <div className="glass" style={{
              position: 'absolute',
              bottom: -24,
              left: dir === 'rtl' ? 'auto' : -24,
              right: dir === 'rtl' ? -24 : 'auto',
              borderRadius: 16,
              padding: '16px 20px',
              animation: 'float 5s ease-in-out infinite',
            }}>
              <div style={{ color: 'var(--gold)', fontSize: 12, fontWeight: 600, marginBottom: 4, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                {t('Growth 2022–2025', 'النمو 2022–2025')}
              </div>
              <div style={{ color: 'white', fontSize: 22, fontWeight: 800, fontFamily: 'Poppins' }}>1M+ SAR</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                {t('in one year', 'في عام واحد')}
              </div>
            </div>

            <div className="glass" style={{
              position: 'absolute',
              top: -20,
              right: dir === 'rtl' ? 'auto' : -20,
              left: dir === 'rtl' ? -20 : 'auto',
              borderRadius: 16,
              padding: '12px 18px',
              animation: 'float 7s ease-in-out infinite reverse',
            }}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                {t('Active Partners', 'الشركاء الفعالون')}
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 6 }}>
                {['🇸🇦','🇨🇳','🇹🇷','🇪🇬'].map((flag, i) => (
                  <span key={i} style={{ fontSize: 20 }}>{flag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        opacity: 0.5,
        animation: 'float 2s ease-in-out infinite',
      }}>
        <div style={{ width: 24, height: 40, border: '2px solid rgba(255,255,255,0.4)', borderRadius: 12, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 6 }}>
          <div style={{ width: 4, height: 8, borderRadius: 2, background: 'white', animation: 'float 1.5s ease-in-out infinite' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
