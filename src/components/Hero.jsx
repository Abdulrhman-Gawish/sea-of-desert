import { useEffect, useState } from 'react'
import { ArrowRight, Globe } from 'lucide-react'
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
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background Logo Watermark — centered, large, very subtle */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <img 
          src="/2.png" 
          alt="" 
          aria-hidden="true"
          style={{
            width: 'min(70vw, 560px)',
            height: 'auto',
            opacity: 0.08,
            userSelect: 'none',
          }}
        />
      </div>

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

          {/* Right Visual — Logo card + floating stats */}
          <div 
            className="hero-visual"
            style={{ 
              opacity: visible ? 1 : 0, 
              transform: visible ? 'translateY(0)' : 'translateY(30px)', 
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
              position: 'relative' 
            }}
          >
            <div className="glass-white" style={{ 
              borderRadius: 28, 
              padding: 40, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
              position: 'relative',
            }}>
              <img 
                src="/3.png" 
                alt="Sea of Desert Logo" 
                style={{ width: '85%', height: 'auto', filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.08))' }} 
              />
            </div>
            
            {/* Floating stat cards */}
            <div className="glass animate-float" style={{
              position: 'absolute',
              bottom: -24,
              left: dir === 'rtl' ? 'auto' : -24,
              right: dir === 'rtl' ? -24 : 'auto',
              borderRadius: 16,
              padding: '18px 24px',
              animationDelay: '1s',
            }}>
              <div style={{ color: 'var(--gold)', fontSize: 12, fontWeight: 600, marginBottom: 6, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {t('stat_growth')}
              </div>
              <div style={{ color: 'white', fontSize: 28, fontWeight: 800, fontFamily: 'Poppins', lineHeight: 1 }}>
                1M+ <span style={{ fontSize: 14, fontWeight: 600 }}>SAR</span>
              </div>
            </div>

            <div className="glass animate-float" style={{
              position: 'absolute',
              top: -16,
              right: dir === 'rtl' ? 'auto' : -16,
              left: dir === 'rtl' ? -16 : 'auto',
              borderRadius: 16,
              padding: '14px 20px',
              animationDelay: '0s',
              animationDuration: '5s'
            }}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 500, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', marginBottom: 8 }}>
                {t('stat_partners')}
              </div>
              <div style={{ display: 'flex', gap: 4, fontSize: 20 }}>
                🇸🇦 🇨🇳 🇹🇷 🇪🇬
              </div>
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
