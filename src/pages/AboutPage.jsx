import { useLang } from '../context/LangContext'
import About from '../components/About'
import Team from '../components/Team'

export default function AboutPage() {
  const { t, dir, lang } = useLang()

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
          position: 'absolute', top: -120, right: -120,
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,162,39,0.12), transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -80,
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,79,160,0.2), transparent 70%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="pill-label" style={{
            color: 'white',
            background: 'rgba(255,255,255,0.08)',
            borderColor: 'rgba(255,255,255,0.15)',
            marginBottom: 20,
            display: 'inline-flex',
          }}>
            {t('about_pill')}
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            color: 'white',
            marginBottom: 16,
            fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
            lineHeight: 1.15,
          }}>
            {t('about_hero_title')}
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
          }}>
            {t('about_hero_subtitle')}
          </p>
        </div>
      </section>

      {/* About Content (existing component) */}
      <About />

      {/* Team Section */}
      <Team />
    </main>
  )
}
