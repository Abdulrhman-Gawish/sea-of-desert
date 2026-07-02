import { useLang } from '../context/LangContext'
import { Globe, ArrowUp } from 'lucide-react'

export default function Footer() {
  const { t, toggleLang, lang, dir } = useLang()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const links = {
    company: [
      { en: 'About Us', ar: 'من نحن', href: '#about' },
      { en: 'Our Services', ar: 'خدماتنا', href: '#services' },
      { en: 'Products', ar: 'منتجاتنا', href: '#products' },
      { en: 'Partners', ar: 'شركاؤنا', href: '#partners' },
      { en: 'Vision 2030', ar: 'رؤية 2030', href: '#vision' },
    ],
    services: [
      { en: 'International Trade', ar: 'التجارة الدولية', href: '#services' },
      { en: 'Logistics & Shipping', ar: 'اللوجستيات والشحن', href: '#services' },
      { en: 'Technology Solutions', ar: 'الحلول التقنية', href: '#services' },
      { en: 'Digital Marketing', ar: 'التسويق الرقمي', href: '#services' },
      { en: 'Medical Products', ar: 'المنتجات الطبية', href: '#services' },
    ],
  }

  return (
    <footer dir={dir} style={{ background: '#060e1c', color: 'rgba(255,255,255,0.7)', position: 'relative', overflow: 'hidden' }}>
      {/* Top decoration */}
      <div style={{ height: 4, background: 'linear-gradient(90deg, var(--royal), var(--green), var(--gold))' }} />

      {/* Scroll to top */}
      <button
        onClick={scrollTop}
        style={{
          position: 'absolute',
          top: 24,
          right: dir === 'rtl' ? 'auto' : 24,
          left: dir === 'rtl' ? 24 : 'auto',
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
      >
        <ArrowUp size={18} />
      </button>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}
          className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #1a4fa0, #c9a227)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 800,
                color: 'white',
                fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
              }}>
                {lang === 'ar' ? 'بح' : 'SD'}
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: 16, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                  {t('Sea of Desert', 'بحر الصحراء')}
                </div>
                <div style={{ color: 'rgba(201,162,39,0.8)', fontSize: 11, fontWeight: 500 }}>
                  {t('International Trade & Solutions', 'حلول التجارة الدولية')}
                </div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 300, marginBottom: 24, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t(
                'Connecting local vision to global opportunities through integrated trade, logistics, technology, and healthcare solutions.',
                'نربط الرؤية المحلية بالفرص العالمية من خلال حلول متكاملة في التجارة واللوجستيات والتكنولوجيا والرعاية الصحية.'
              )}
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: 'in', label: 'LinkedIn' },
                { icon: 'tw', label: 'Twitter' },
                { icon: 'ig', label: 'Instagram' },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget).style.background = 'rgba(26,79,160,0.4)'
                    ;(e.currentTarget).style.color = 'white'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget).style.background = 'rgba(255,255,255,0.07)'
                    ;(e.currentTarget).style.color = 'rgba(255,255,255,0.7)'
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 700 }}>{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: 15, marginBottom: 20, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('Company', 'الشركة')}
            </h4>
            {links.company.map((l, i) => (
              <a key={i} href={l.href} style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 14, marginBottom: 10, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                {t(l.en, l.ar)}
              </a>
            ))}
          </div>

          {/* Services Links */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: 15, marginBottom: 20, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('Services', 'الخدمات')}
            </h4>
            {links.services.map((l, i) => (
              <a key={i} href={l.href} style={{ display: 'block', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 14, marginBottom: 10, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                {t(l.en, l.ar)}
              </a>
            ))}
          </div>

          {/* Language + Contact */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: 15, marginBottom: 20, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('Language', 'اللغة')}
            </h4>
            <button
              onClick={toggleLang}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'white',
                padding: '10px 18px',
                borderRadius: 10,
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 600,
                fontFamily: 'Poppins',
                marginBottom: 24,
              }}
            >
              <Globe size={15} />
              {lang === 'en' ? 'العربية' : 'English'}
            </button>

            <a href="#contact" className="btn-gold" style={{ textDecoration: 'none', fontSize: 14, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('Contact Us', 'اتصل بنا')}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 13, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
            {t(
              '© 2025 Sea of Desert. All rights reserved.',
              '© 2025 شركة بحر الصحراء. جميع الحقوق محفوظة.'
            )}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['🇸🇦', '🇨🇳', '🇹🇷', '🇪🇬'].map((f, i) => (
              <span key={i} style={{ fontSize: 18 }}>{f}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
