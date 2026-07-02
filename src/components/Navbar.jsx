import { useState, useEffect } from 'react'
import { Menu, X, Globe, ChevronRight } from 'lucide-react'
import { useLang } from '../context/LangContext'

const navItems = [
  { en: 'Home', ar: 'الرئيسية', href: '#home' },
  { en: 'About', ar: 'من نحن', href: '#about' },
  { en: 'Services', ar: 'خدماتنا', href: '#services' },
  { en: 'Products', ar: 'منتجاتنا', href: '#products' },
  { en: 'Partners', ar: 'شركاؤنا', href: '#partners' },
  { en: 'Vision', ar: 'رؤية 2030', href: '#vision' },
  { en: 'Contact', ar: 'اتصل بنا', href: '#contact' },
]

export default function Navbar() {
  const { lang, toggleLang, t, dir } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      dir={dir}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(10,22,40,0.96)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #1a4fa0, #c9a227)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              fontWeight: 800,
              color: 'white',
              fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
              flexShrink: 0,
            }}>
              {lang === 'ar' ? 'بح' : 'SD'}
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: 16, lineHeight: 1.2, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                {t('Sea of Desert', 'بحر الصحراء')}
              </div>
              <div style={{ color: 'rgba(201,162,39,0.9)', fontSize: 11, fontWeight: 500, letterSpacing: '0.05em' }}>
                {t('International Trade & Solutions', 'حلول التجارة الدولية')}
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
            {navItems.map(item => (
              <a
                key={item.en}
                href={item.href}
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  padding: '8px 14px',
                  borderRadius: 6,
                  transition: 'all 0.2s',
                  fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
                }}
                onMouseEnter={e => {
                  (e.target).style.color = 'white'
                  ;(e.target).style.background = 'rgba(255,255,255,0.08)'
                }}
                onMouseLeave={e => {
                  (e.target).style.color = 'rgba(255,255,255,0.85)'
                  ;(e.target).style.background = 'transparent'
                }}
              >
                {t(item.en, item.ar)}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={toggleLang}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                color: 'white',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '7px 14px',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 600,
                transition: 'all 0.2s',
                fontFamily: 'Poppins',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            >
              <Globe size={14} />
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <a
              href="#contact"
              className="btn-gold hidden-mobile"
              style={{ textDecoration: 'none', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}
            >
              {t('Get Started', 'ابدأ الآن')}
              <ChevronRight size={15} />
            </a>
            <button
              onClick={() => setOpen(!open)}
              style={{ display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 4 }}
              className="mobile-menu-btn"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingBottom: 16,
            background: 'rgba(10,22,40,0.98)',
          }}>
            {navItems.map(item => (
              <a
                key={item.en}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 500,
                  padding: '12px 16px',
                  borderRadius: 6,
                  fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
                }}
              >
                {t(item.en, item.ar)}
              </a>
            ))}
            <div style={{ padding: '8px 16px' }}>
              <a href="#contact" className="btn-gold" style={{ textDecoration: 'none', width: '100%', justifyContent: 'center' }}>
                {t('Get Started', 'ابدأ الآن')}
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
