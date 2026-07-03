import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LangContext'
import { Target, Eye, Zap, Network, Globe2, Award, CheckCircle2, TrendingUp, Handshake, Briefcase, HeartPulse } from 'lucide-react'

const TimelineItem = ({ year, title, active }) => (
  <div style={{ position: 'relative', paddingBottom: 40, paddingInlineStart: 28 }}>
    <div style={{
      position: 'absolute', top: 0, insetInlineStart: 0, width: 2, height: '100%',
      background: active ? 'var(--gold)' : 'var(--gray-200)', opacity: active ? 1 : 0.3
    }} />
    <div style={{
      position: 'absolute', top: 0, insetInlineStart: -6, width: 14, height: 14,
      borderRadius: '50%', background: active ? 'var(--gold)' : 'white',
      border: `3px solid ${active ? 'var(--gold-light)' : 'var(--gray-200)'}`, transition: 'all 0.3s'
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

const PartnerCard = ({ year, title, desc, icon: Icon }) => {
  const { lang } = useLang()
  return (
    <div className="card-hover" style={{ padding: 24, background: 'white', borderRadius: 16, border: '1px solid var(--gray-100)', display: 'flex', gap: 20 }}>
      <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 12, background: 'rgba(26, 79, 160, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--royal)' }}>
        <Icon size={24} />
      </div>
      <div>
        <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: 14, marginBottom: 4, fontFamily: 'Poppins' }}>{year}</div>
        <h4 style={{ fontSize: 18, fontWeight: 700, color: 'var(--navy)', marginBottom: 8, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>{title}</h4>
        <p style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.7, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>{desc}</p>
      </div>
    </div>
  )
}

export default function About() {
  const ref = useScrollReveal()
  const { t, dir, lang } = useLang()

  return (
    <section id="about" dir={dir} className="section-pad" style={{ background: 'white' }}>
      <div className="container">
        <div ref={ref} className="section-reveal">
          
          {/* Header */}
          <div className="text-center" style={{ marginBottom: 64 }}>
            <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>{t('about_subtitle')}</p>
              <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>{t('about_subtitle_2')}</p>
              <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center', fontWeight: 600, color: 'var(--royal)' }}>{t('about_subtitle_3')}</p>
            </div>
          </div>

          {/* Story & Name */}
          <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 80 }}>
            <div>
              <img 
                src="/images/about.png" 
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
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 16 }}>
                {t('name_idea_desc2')}
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-body)', fontWeight: 500 }}>
                {t('name_idea_desc3')}
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

          {/* Methodology & Goals */}
          <div className="about-method-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 80 }}>
            <div style={{ background: 'white', borderRadius: 24, padding: 40, border: '1px solid var(--gray-100)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 32 }}>{t('methodology_title')}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[1, 2, 3, 4, 5].map(num => (
                  <li key={num} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ color: 'var(--gold)', marginTop: 2 }}>
                      <CheckCircle2 size={20} />
                    </div>
                    <span style={{ fontSize: 15, color: 'var(--text-body)', lineHeight: 1.6 }}>{t(`methodology_${num}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ background: 'var(--navy)', borderRadius: 24, padding: 40, color: 'white', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -80, right: -80, width: 240, height: 240, background: 'radial-gradient(circle, rgba(201,162,39,0.15), transparent)', borderRadius: '50%' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: 'white', marginBottom: 32 }}>{t('goals_title')}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[1, 2, 3, 4, 5].map(num => (
                    <li key={num} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ color: 'var(--gold)', marginTop: 2 }}>
                        <Target size={20} />
                      </div>
                      <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>{t(`goals_${num}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div style={{ marginBottom: 80 }}>
            <div className="text-center" style={{ marginBottom: 40 }}>
              <h3 style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 16 }}>{t('partners_title')}</h3>
              <p style={{ fontSize: 15, color: 'var(--gray-600)', maxWidth: 800, margin: '0 auto', lineHeight: 1.8, marginBottom: 12 }}>{t('partners_desc')}</p>
              <p style={{ fontSize: 15, color: 'var(--gray-600)', maxWidth: 800, margin: '0 auto', lineHeight: 1.8 }}>{t('partners_desc_2')}</p>
            </div>
            
            <div style={{ display: 'grid', gap: 20 }}>
              <PartnerCard year="2023" title={t('partner_1_title')} desc={t('partner_1_desc')} icon={Handshake} />
              <PartnerCard year="2024" title={t('partner_2_title')} desc={t('partner_2_desc')} icon={Globe2} />
              <PartnerCard year="2025" title={t('partner_3_title')} desc={t('partner_3_desc')} icon={Network} />
              <PartnerCard year="2024" title={t('partner_4_title')} desc={t('partner_4_desc')} icon={Zap} />
              <PartnerCard year="2025" title={t('partner_5_title')} desc={t('partner_5_desc')} icon={HeartPulse} />
            </div>
          </div>

          {/* Medical Expansion */}
          <div style={{ background: 'var(--off-white)', borderRadius: 24, padding: '48px 44px', marginBottom: 80 }}>
            <div className="about-v2030-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 20 }}>{t('medical_title')}</h3>
                <p style={{ color: 'var(--text-body)', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>{t('medical_desc')}</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[1, 2, 3, 4].map(num => (
                  <div key={num} style={{ background: 'white', padding: 20, borderRadius: 16, border: '1px solid var(--gray-100)', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ color: 'var(--green)', flexShrink: 0 }}>
                      <CheckCircle2 size={20} />
                    </div>
                    <div style={{ color: 'var(--navy)', fontWeight: 600, fontSize: 13 }}>{t(`medical_point_${num}`)}</div>
                  </div>
                ))}
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: <Globe2 size={20}/>, label: t('v2030_point_1') },
                  { icon: <Zap size={20}/>, label: t('v2030_point_2') },
                  { icon: <HeartPulse size={20}/>, label: t('v2030_point_3') },
                  { icon: <Handshake size={20}/>, label: t('v2030_point_4') },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.08)', padding: '16px 20px', borderRadius: 16, backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ color: 'var(--gold)' }}>{item.icon}</div>
                    <div style={{ color: 'white', fontWeight: 600, fontSize: 14 }}>{item.label}</div>
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
          .about-method-grid { grid-template-columns: 1fr !important; }
          .about-v2030-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
