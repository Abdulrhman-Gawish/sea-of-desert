import { useLang } from '../context/LangContext'
import Contact from '../components/Contact'

export default function ContactPage() {
  const { t, dir, lang } = useLang()

  const socials = [
    { icon: 'in', label: 'LinkedIn', color: '#0a66c2', href: '#' },
    { icon: 'tw', label: 'Twitter / X', color: '#1da1f2', href: '#' },
    { icon: 'ig', label: 'Instagram', color: '#e1306c', href: '#' },
  ]

  return (
    <main dir={dir}>
      {/* Page Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 50%, var(--royal) 100%)',
        paddingTop: 140,
        paddingBottom: 80,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute', top: -100, left: -100,
          width: 360, height: 360, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,107,62,0.15), transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: -60, right: -60,
          width: 280, height: 280, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,162,39,0.12), transparent 70%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="pill-label" style={{
            color: 'white',
            background: 'rgba(255,255,255,0.08)',
            borderColor: 'rgba(255,255,255,0.15)',
            marginBottom: 20,
            display: 'inline-flex',
          }}>
            {t('contact_pill')}
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            color: 'white',
            marginBottom: 16,
            fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
            lineHeight: 1.15,
          }}>
            {t('contact_hero_title')}
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
          }}>
            {t('contact_hero_subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content (existing component) */}
      <Contact />

    </main>
  )
}
