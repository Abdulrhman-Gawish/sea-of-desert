import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LangContext'
import { Target, Eye, Zap, Network, Globe2, Award } from 'lucide-react'

const TimelineItem = ({ year, title, active }) => (
  <div style={{ position: 'relative', paddingBottom: 40, paddingInlineStart: 28 }}>
    <div style={{
      position: 'absolute',
      top: 0,
      insetInlineStart: 0,
      width: 2,
      height: '100%',
      background: active ? 'var(--gold)' : 'var(--gray-200)',
      opacity: active ? 1 : 0.3
    }} />
    <div style={{
      position: 'absolute',
      top: 0,
      insetInlineStart: -6,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: active ? 'var(--gold)' : 'white',
      border: `3px solid ${active ? 'var(--gold-light)' : 'var(--gray-200)'}`,
      transition: 'all 0.3s'
    }} />
    <div style={{ color: 'var(--gold)', fontWeight: 800, fontSize: 20, fontFamily: 'Poppins', lineHeight: 1, marginBottom: 6 }}>
      {year}
    </div>
    <div style={{ color: 'var(--text-body)', fontSize: 14, lineHeight: 1.6 }}>
      {title}
    </div>
  </div>
)

const StatBlock = ({ value, label, suffix = '' }) => (
  <div className="text-center">
    <div style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: 'var(--royal)', fontFamily: 'Poppins', lineHeight: 1, marginBottom: 6 }}>
      {value}<span style={{ color: 'var(--gold)' }}>{suffix}</span>
    </div>
    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--gray-600)' }}>
      {label}
    </div>
  </div>
)

export default function About() {
  const ref = useScrollReveal()
  const { t, dir, lang } = useLang()

  return (
    <section id="about" dir={dir} className="section-pad" style={{ background: 'white' }}>
      <div className="container">
        <div ref={ref} className="section-reveal">
          
          {/* Header */}
          <div className="text-center" style={{ marginBottom: 64 }}>
            <div className="pill-label" style={{ marginBottom: 14 }}>{t('about_pill')}</div>
            <h2 className="section-title" style={{ marginBottom: 14, textAlign: 'center' }}>{t('about_title')}</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>{t('about_subtitle')}</p>
          </div>

          {/* Story & Name */}
          <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 80 }}>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                alt="Modern corporate building" 
                style={{ width: '100%', borderRadius: 20, boxShadow: 'var(--shadow-md)' }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 20, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                {t('name_idea_title')}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 16 }}>
                {t('name_idea_desc1')}
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-body)', fontWeight: 500 }}>
                {t('name_idea_desc2')}
              </p>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="about-vm-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 80 }}>
            <div className="card-hover" style={{ padding: 32, borderRadius: 20, border: '1px solid var(--gray-100)', background: 'var(--gray-50)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(26, 79, 160, 0.08)', color: 'var(--royal)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Eye size={26} />
              </div>
              <h4 style={{ fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>{t('val_vision')}</h4>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--gray-600)' }}>{t('val_vision_desc')}</p>
            </div>
            
            <div className="card-hover" style={{ padding: 32, borderRadius: 20, border: '1px solid var(--gray-100)', background: 'var(--gray-50)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(0, 107, 62, 0.08)', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Target size={26} />
              </div>
              <h4 style={{ fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>{t('val_mission')}</h4>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--gray-600)' }}>{t('val_mission_desc')}</p>
            </div>
          </div>

          {/* Timeline & Stats */}
          <div className="about-timeline-grid" style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 40, marginBottom: 80 }}>
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 32 }}>{t('timeline_title')}</h3>
              <div>
                <TimelineItem year="2022" title={t('time_2022')} active={true} />
                <TimelineItem year="2023" title={t('time_2023')} active={true} />
                <TimelineItem year="2024" title={t('time_2024')} active={true} />
                <TimelineItem year="2025" title={t('time_2025')} active={true} />
              </div>
            </div>
            
            <div>
              <div style={{ background: 'var(--navy)', borderRadius: 24, padding: 40, color: 'white', position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', top: -80, right: -80, width: 240, height: 240, background: 'radial-gradient(circle, rgba(201,162,39,0.15), transparent)', borderRadius: '50%' }} />
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 24px', position: 'relative', zIndex: 1 }}>
                  <StatBlock value="1" suffix="M+" label={t('stat_growth')} />
                  <StatBlock value="5" suffix="+" label={t('stat_partners')} />
                  <StatBlock value="6" suffix="" label={t('stat_sectors')} />
                  <StatBlock value="100" suffix="%" label={t('val_values')} />
                </div>
              </div>
            </div>
          </div>

          {/* Vision 2030 */}
          <div style={{ background: 'linear-gradient(135deg, #004d2d, #006b3e)', borderRadius: 24, padding: '48px 44px', position: 'relative', overflow: 'hidden' }}>
            <div className="about-v2030-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', position: 'relative', zIndex: 1 }}>
              <div>
                <div className="pill-label" style={{ color: 'white', background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', marginBottom: 20 }}>
                  {t('v2030_pill')}
                </div>
                <h3 style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 800, color: 'white', marginBottom: 20, lineHeight: 1.2 }}>
                  {t('v2030_title')}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.8 }}>
                  {t('v2030_desc')}
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { icon: <Network size={22}/>, label: t('val_innovation') },
                  { icon: <Globe2 size={22}/>, label: t('stat_partners') },
                  { icon: <Award size={22}/>, label: t('val_values') },
                  { icon: <Zap size={22}/>, label: t('stat_sectors') },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.08)', padding: 20, borderRadius: 16, backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ color: 'var(--gold)', marginBottom: 10 }}>{item.icon}</div>
                    <div style={{ color: 'white', fontWeight: 600, fontSize: 13 }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-story-grid { grid-template-columns: 1fr !important; }
          .about-vm-grid { grid-template-columns: 1fr !important; }
          .about-timeline-grid { grid-template-columns: 1fr !important; }
          .about-v2030-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
