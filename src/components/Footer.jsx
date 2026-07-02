import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const { t, lang, dir } = useLang()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const links = {
    company: [
      { label: 'nav_about', to: '/#about' },
      { label: 'nav_business', to: '/business-solutions' },
      { label: 'nav_supply', to: '/supply-chain' },
      { label: 'nav_contact', to: '#contact' },
    ],
    services: [
      { label: 'srv_trade_title', to: '/supply-chain' },
      { label: 'srv_logistics_title', to: '/supply-chain' },
      { label: 'srv_tech_title', to: '/business-solutions' },
      { label: 'srv_marketing_title', to: '/business-solutions' },
      { label: 'srv_medical_title', to: '/supply-chain' },
    ],
  }

  const getHref = (to) => {
    if (to.startsWith('#')) return `/${to}`
    return to
  }

  return (
    <footer dir={dir} style={{ background: '#0a1628', color: 'rgba(255,255,255,0.7)', position: 'relative', overflow: 'hidden' }}>
      {/* Top decoration */}
      <div style={{ height: 4, background: 'linear-gradient(90deg, var(--royal), var(--green), var(--gold))' }} />

      {/* Scroll to top */}
      <button
        onClick={scrollTop}
        style={{
          position: 'absolute',
          top: 32,
          right: dir === 'rtl' ? 'auto' : 32,
          left: dir === 'rtl' ? 32 : 'auto',
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          cursor: 'pointer',
          transition: 'all 0.3s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'var(--royal)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
      >
        <ArrowUp size={20} />
      </button>

      <div className="container" style={{ paddingTop: 80, paddingBottom: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}
          className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{
                background: 'white',
                padding: '8px 12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <picture>
                  <source srcSet="/1.png" media="(max-width: 768px)" />
                  <img 
                    src="/3.png" 
                    alt="Sea of Desert Logo" 
                    style={{ 
                      height: 36, 
                      width: 'auto',
                      objectFit: 'contain',
                    }} 
                  />
                </picture>
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 800, fontSize: 18, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                  {lang === 'en' ? 'Sea of Desert' : 'بحر الصحراء'}
                </div>
                <div style={{ color: 'var(--gold)', fontSize: 11, fontWeight: 600 }}>
                  {t('stat_sectors')}
                </div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 320, marginBottom: 32, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', color: 'rgba(255,255,255,0.6)' }}>
              {t('hero_desc')}
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: 'in', label: 'LinkedIn', color: '#0a66c2' },
                { icon: 'tw', label: 'Twitter', color: '#1da1f2' },
                { icon: 'ig', label: 'Instagram', color: '#e1306c' },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = s.color
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.borderColor = s.color
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 700 }}>{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 24, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('company')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {links.company.map((l, i) => (
                <a key={i} href={getHref(l.to)} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 14, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                  {t(l.label)}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 24, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('services')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {links.services.map((l, i) => (
                <Link key={i} to={l.to} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none', fontSize: 14, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                  {t(l.label)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: 16, marginBottom: 24, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('nav_contact')}
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6, marginBottom: 20, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('contact_subtitle')}
            </p>
            <a href="/#contact" className="btn-gold" style={{ fontSize: 14, padding: '10px 24px', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('btn_contact')}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
            {t('copyright')}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {['🇸🇦', '🇨🇳', '🇹🇷', '🇪🇬'].map((f, i) => (
              <span key={i} style={{ fontSize: 20 }}>{f}</span>
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
