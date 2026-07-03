import { useEffect, useState } from 'react'
import { ArrowRight, Globe, Globe2, Truck, ShieldCheck } from 'lucide-react'
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
        paddingTop: '80px',
        paddingBottom: '40px'
      }}
    >
      {/* Background Logo Watermark — completely hidden on desktop 1280px+ via CSS class */}
      <div className="hero-watermark" style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        transition: 'opacity 0.5s ease',
      }}>
        <img 
          src="/2.png" 
          alt="" 
          aria-hidden="true"
          style={{
            width: 'min(70vw, 560px)',
            height: 'auto',
            userSelect: 'none',
          }}
        />
      </div>

      {/* Subtle grid overlay - reduced opacity */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Floating Blobs (Premium Glows) */}
      <div className="animate-pulse-slow" style={{
        position: 'absolute',
        top: '15%',
        right: dir === 'rtl' ? 'auto' : '10%',
        left: dir === 'rtl' ? '10%' : 'auto',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,79,160,0.15) 0%, transparent 60%)',
      }} />
      <div className="animate-pulse-slow" style={{
        position: 'absolute',
        bottom: '5%',
        left: dir === 'rtl' ? 'auto' : '15%',
        right: dir === 'rtl' ? '15%' : 'auto',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 65%)',
        animationDelay: '-4s',
      }} />

      <div className="container relative" style={{ zIndex: 10, width: '100%' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '5.5fr 4.5fr', gap: 64, alignItems: 'center' }}>
          
          {/* Text Content */}
          <div className={visible ? "animate-fade-up" : ""} style={{ opacity: 0 }}>
            <div className="pill-label" style={{ marginBottom: 32, color: 'var(--gold)', background: 'rgba(201,162,39,0.1)', borderColor: 'rgba(201,162,39,0.2)' }}>
              <Globe size={14} />
              {t('hero_pill')}
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              lineHeight: 1.15,
              marginBottom: 24,
              fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
              letterSpacing: lang === 'en' ? '-0.02em' : 'normal'
            }}>
              {lang === 'en' ? (
                <>
                  <span style={{ fontWeight: 700, background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block', marginBottom: 8 }}>Connecting Local Vision</span>
                  <span style={{ fontWeight: 900, color: 'white' }}>to Global Opportunities</span>
                </>
              ) : (
                <>
                  <span style={{ fontWeight: 700, background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block', marginBottom: 8 }}>نربط الرؤية المحلية</span>
                  <span style={{ fontWeight: 900, color: 'white' }}>بالفرص العالمية</span>
                </>
              )}
            </h1>

            <p style={{
              fontSize: 'clamp(15px, 1.4vw, 17px)',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              marginBottom: 48,
              fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
              maxWidth: 520,
            }}>
              {t('hero_desc')}
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
              <a href="#contact" className="btn-gold" style={{ fontSize: 15, padding: '14px 32px', boxShadow: '0 8px 24px rgba(201,162,39,0.25)' }}>
                {t('btn_contact')}
                <ArrowRight size={18} />
              </a>
              <a href="#about" className="btn-secondary" style={{ fontSize: 15, padding: '14px 32px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {t('btn_explore')}
              </a>
            </div>

            {/* Trust Features (Desktop only) */}
            <div className="hero-features" style={{ display: 'flex', gap: 24, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32 }}>
              {[
                { icon: <Globe2 size={18} />, title: t('Global Partnerships', 'Global Partnerships', 'شراكات عالمية') },
                { icon: <Truck size={18} />, title: t('Integrated Logistics', 'Integrated Logistics', 'خدمات لوجستية') },
                { icon: <ShieldCheck size={18} />, title: t('Trusted Trade', 'Trusted Trade', 'تجارة موثوقة') }
              ].map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 600, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual — Logo card + floating stats */}
          <div 
            className={`hero-visual ${visible ? 'animate-fade-left' : ''}`}
            style={{ opacity: 0, position: 'relative' }}
          >
            {/* The Main Card */}
            <div className="glass-premium animate-float-subtle" style={{ 
              borderRadius: 32, 
              padding: '60px 40px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
              transform: 'scale(1.15)',
              transformOrigin: dir === 'rtl' ? 'left center' : 'right center'
            }}>
              <img 
                src="/3.png" 
                alt="Sea of Desert Logo" 
                style={{ width: '85%', height: 'auto', filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.12))' }} 
              />
            </div>
            
            {/* Floating stat cards with connection lines */}
            
            {/* Stat 1: Business Volume */}
            <div className={`glass animate-scale-fade`} style={{
              position: 'absolute',
              bottom: -40,
              left: dir === 'rtl' ? 'auto' : -30,
              right: dir === 'rtl' ? -30 : 'auto',
              borderRadius: 20,
              padding: '20px 28px',
              animationDelay: '1.2s',
              opacity: 0,
              zIndex: 3,
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255,255,255,0.15)'
            }}>
              <div style={{ color: 'var(--gold)', fontSize: 12, fontWeight: 600, marginBottom: 6, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {t('stat_growth', 'Business Volume', 'حجم الأعمال')}
              </div>
              <div style={{ color: 'white', fontSize: 32, fontWeight: 800, fontFamily: 'Poppins', lineHeight: 1 }}>
                1M+ <span style={{ fontSize: 14, fontWeight: 600 }}>SAR</span>
              </div>
              {/* Connection Line */}
              <svg width="40" height="40" style={{ position: 'absolute', top: -30, right: dir === 'rtl' ? 'auto' : -20, left: dir === 'rtl' ? -20 : 'auto', zIndex: -1, pointerEvents: 'none' }}>
                <path d={dir === 'rtl' ? "M 0 40 Q 20 20 40 0" : "M 40 40 Q 20 20 0 0"} fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Stat 2: Strategic Partners */}
            <div className={`glass animate-scale-fade`} style={{
              position: 'absolute',
              top: -30,
              right: dir === 'rtl' ? 'auto' : -20,
              left: dir === 'rtl' ? -20 : 'auto',
              borderRadius: 20,
              padding: '16px 24px',
              animationDelay: '0.9s',
              opacity: 0,
              zIndex: 3,
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255,255,255,0.15)'
            }}>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: 600, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', marginBottom: 8 }}>
                {t('stat_partners', 'Strategic Partners', 'شركاء استراتيجيون')}
              </div>
              <div style={{ display: 'flex', gap: 6, fontSize: 22 }}>
                🇸🇦 🇨🇳
              </div>
              {/* Connection Line */}
              <svg width="40" height="40" style={{ position: 'absolute', bottom: -30, left: dir === 'rtl' ? 'auto' : -20, right: dir === 'rtl' ? -20 : 'auto', zIndex: -1, pointerEvents: 'none' }}>
                <path d={dir === 'rtl' ? "M 40 0 Q 20 20 0 40" : "M 0 0 Q 20 20 40 40"} fill="transparent" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Stat 3: Countries Served */}
            <div className={`glass animate-scale-fade`} style={{
              position: 'absolute',
              bottom: 40,
              right: dir === 'rtl' ? 'auto' : -40,
              left: dir === 'rtl' ? -40 : 'auto',
              borderRadius: 20,
              padding: '16px 24px',
              animationDelay: '1.5s',
              opacity: 0,
              zIndex: 1,
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 500, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', marginBottom: 4 }}>
                {t('Countries Served', 'Countries Served', 'دول نخدمها')}
              </div>
              <div style={{ display: 'flex', gap: 6, fontSize: 18 }}>
                🇹🇷 🇪🇬
              </div>
              {/* Connection Line */}
              <svg width="40" height="20" style={{ position: 'absolute', top: 20, left: dir === 'rtl' ? 'auto' : -30, right: dir === 'rtl' ? -30 : 'auto', zIndex: -1, pointerEvents: 'none' }}>
                <path d={dir === 'rtl' ? "M 40 10 L 0 10" : "M 0 10 L 40 10"} fill="transparent" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1279px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-features { display: none !important; }
        }
        @media (max-width: 1024px) {
          .hero-grid { text-align: center; }
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
