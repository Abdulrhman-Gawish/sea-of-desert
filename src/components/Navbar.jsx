import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { translations } from '../data/translations'

export default function Navbar() {
  const { lang, toggleLang, dir } = useLang()
  const { pathname, hash } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // t helper
  const t = (key) => {
    return translations[key]?.[lang] || key
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on navigation
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname, hash])

  const links = [
    { label: 'nav_home', to: '/' },
    { label: 'nav_about', to: '/#about' },
    { label: 'nav_business', to: '/business-solutions' },
    { label: 'nav_supply', to: '/supply-chain' },
    { label: 'nav_contact', to: '/#contact' },
  ]



  const isHome = pathname === '/'
  const isDarkBg = isHome && !scrolled && !menuOpen
  
  return (
    <>
      <nav 
        dir={dir}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.4s ease',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.97)' : (menuOpen ? '#fff' : 'transparent'),
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 1px 12px rgba(10,22,40,0.06)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.04)' : '1px solid transparent'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? '64px' : '80px', transition: 'height 0.4s ease' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              background: 'white',
              padding: '8px 12px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: scrolled ? 'none' : '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.2)'
            }}>
              <picture>
                <source srcSet="/1.png" media="(max-width: 768px)" />
                <img 
                  src="/3.png" 
                  alt="Sea of Desert" 
                  style={{ 
                    height: scrolled ? 40 : 48, 
                    width: 'auto',
                    maxWidth: 180,
                    objectFit: 'contain',
                    transition: 'all 0.3s ease',
                  }} 
                />
              </picture>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="desktop-links" style={{ display: 'none', alignItems: 'center', gap: 28 }}>
            {links.map((link, i) => (
              <Link 
                key={i} 
                to={link.to} 
                style={{ 
                  color: isDarkBg ? 'rgba(255,255,255,0.85)' : 'var(--text-body)',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => e.currentTarget.style.color = isDarkBg ? 'white' : 'var(--royal)'}
                onMouseLeave={e => e.currentTarget.style.color = isDarkBg ? 'rgba(255,255,255,0.85)' : 'var(--text-body)'}
              >
                {t(link.label)}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button 
              onClick={toggleLang}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: isDarkBg ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)',
                color: isDarkBg ? 'white' : 'var(--navy)',
                border: 'none',
                padding: '7px 14px',
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: lang === 'en' ? 'Cairo' : 'Poppins' // Reverse for switcher
              }}
              onMouseEnter={e => e.currentTarget.style.background = isDarkBg ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = isDarkBg ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)'}
            >
              <Globe size={15} />
              {t('lang_switch')}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-btn"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                color: isDarkBg ? 'white' : 'var(--navy)',
                cursor: 'pointer',
                padding: 4,
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        dir={dir}
        style={{
          position: 'fixed',
          top: menuOpen ? '64px' : '-100%',
          left: 0,
          right: 0,
          background: 'white',
          padding: '16px 24px 24px',
          boxShadow: 'var(--shadow-md)',
          transition: 'top 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
        className="mobile-drawer"
      >
        {links.map((link, i) => (
          <Link 
            key={i} 
            to={link.to} 
            style={{ 
              color: 'var(--navy)',
              textDecoration: 'none',
              fontSize: 16,
              fontWeight: 600,
              padding: '12px 0',
              borderBottom: '1px solid var(--gray-100)'
            }}
          >
            {t(link.label)}
          </Link>
        ))}
        <Link 
          to="/#contact" 
          className="btn-primary" 
          style={{ justifyContent: 'center', marginTop: 16, fontSize: 14, padding: '12px 24px' }}
        >
          {t('btn_contact')}
        </Link>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .desktop-links { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .mobile-drawer { display: none !important; }
        }
        @media (max-width: 991px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
