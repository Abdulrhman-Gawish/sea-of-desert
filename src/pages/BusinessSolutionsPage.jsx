import { useLang } from '../context/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Contact from '../components/Contact'
import { Monitor, Smartphone, Database, Megaphone, PenTool, Layout, Briefcase, Calculator, Users, Settings, Bot, Cpu, LineChart, Zap } from 'lucide-react'

const services = [
  { id: 'srv_web', icon: <Monitor size={22} /> },
  { id: 'srv_app', icon: <Smartphone size={22} /> },
  { id: 'srv_erp', icon: <Database size={22} /> },
  { id: 'srv_marketing', icon: <Megaphone size={22} /> },
  { id: 'srv_branding', icon: <PenTool size={22} /> },
  { id: 'srv_ui', icon: <Layout size={22} /> },
  { id: 'srv_consulting', icon: <Briefcase size={22} /> },
  { id: 'srv_accounting', icon: <Calculator size={22} /> },
  { id: 'srv_admin', icon: <Users size={22} /> },
  { id: 'srv_tech', icon: <Settings size={22} /> },
]

const aiServices = [
  { id: 'srv_ai_chat', icon: <Bot size={22} /> },
  { id: 'srv_ai_auto', icon: <Cpu size={22} /> },
  { id: 'srv_ai_data', icon: <LineChart size={22} /> },
  { id: 'srv_ai_integ', icon: <Zap size={22} /> },
]

export default function BusinessSolutionsPage() {
  const { t, lang, dir } = useLang()
  const ref = useScrollReveal()
  const projectsRef = useScrollReveal()

  return (
    <main dir={dir} style={{ background: 'var(--off-white)' }}>
      {/* Hero */}
      <section style={{
        paddingTop: 140,
        paddingBottom: 80,
        background: 'linear-gradient(135deg, var(--navy), var(--royal))',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 350, height: 350, background: 'radial-gradient(circle, rgba(255,255,255,0.08), transparent)', borderRadius: '50%' }} />
        <div className="container relative z-10 text-center">
          <div className="animate-fade-up">
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, marginBottom: 20, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('bs_hero_title')}
            </h1>
            <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.75)', maxWidth: 640, margin: '0 auto', lineHeight: 1.7, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('bs_hero_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad">
        <div className="container">
          <div ref={ref} className="section-reveal">
            <h2 className="section-title text-center" style={{ marginBottom: 48 }}>
              {t('bs_services_title')}
            </h2>
            
            <div className="bs-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {services.map((s, i) => (
                <div key={i} className="card-hover" style={{
                  padding: 28,
                  borderRadius: 20,
                  border: '1px solid var(--gray-100)',
                  boxShadow: 'var(--shadow-sm)',
                  background: 'white',
                }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: 'rgba(26, 79, 160, 0.07)',
                    color: 'var(--royal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 18
                  }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--navy)', marginBottom: 8, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t(`${s.id}_title`)}
                  </h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: 14, lineHeight: 1.65, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t(`${s.id}_desc`)}
                  </p>
                </div>
              ))}
            </div>

            {/* AI Services */}
            <h3 className="section-title text-center" style={{ marginBottom: 48, marginTop: 80 }}>
              {t('bs_ai_services_title')}
            </h3>
            
            <div className="bs-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              {aiServices.map((s, i) => (
                <div key={`ai-${i}`} className="card-hover" style={{
                  padding: 28,
                  borderRadius: 20,
                  border: '1px solid var(--gray-100)',
                  boxShadow: 'var(--shadow-sm)',
                  background: 'white',
                }}>
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: 'rgba(26, 79, 160, 0.07)',
                    color: 'var(--royal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 18
                  }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--navy)', marginBottom: 12, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t(`${s.id}_title`)}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {Array.isArray(t(`${s.id}_features`)) && t(`${s.id}_features`).map((feature, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--royal)', flexShrink: 0 }} />
                        <span style={{ color: 'var(--gray-600)', fontSize: 14, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Previous Work */}
      <section className="section-pad" style={{ background: 'white' }}>
        <div className="container">
          <div ref={projectsRef} className="section-reveal">
            <h2 className="section-title text-center" style={{ marginBottom: 48 }}>
              {t('prev_work_title')}
            </h2>

            <div className="bs-projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {/* Project 1 */}
              <div className="card-hover" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--gray-100)' }}>
                <div style={{ height: 200, background: 'var(--gray-100)', position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="E-Commerce Platform" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 28 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--navy)', marginBottom: 10, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {lang === 'en' ? 'B2B E-Commerce Platform' : 'منصة تجارة إلكترونية B2B'}
                  </h3>
                  <p style={{ color: 'var(--gray-600)', marginBottom: 16, lineHeight: 1.6, fontSize: 14, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {lang === 'en' ? 'A comprehensive B2B platform connecting wholesale suppliers with retailers across the region.' : 'منصة B2B متكاملة تربط موردي الجملة بتجار التجزئة في جميع أنحاء المنطقة.'}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {['React', 'Node.js', 'PostgreSQL'].map(tech => (
                      <span key={tech} style={{ padding: '3px 10px', background: 'var(--gray-50)', borderRadius: 100, fontSize: 11, fontWeight: 500, border: '1px solid var(--gray-100)' }}>{tech}</span>
                    ))}
                  </div>
                  <div style={{ padding: 14, background: 'rgba(26,79,160,0.04)', borderRadius: 12 }}>
                    <div style={{ color: 'var(--royal)', fontWeight: 700, fontSize: 12, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lang === 'en' ? 'Impact' : 'الأثر'}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-body)', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                      {lang === 'en' ? '200% increase in order processing efficiency.' : 'زيادة بنسبة 200٪ في كفاءة معالجة الطلبات.'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="card-hover" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--gray-100)' }}>
                <div style={{ height: 200, background: 'var(--gray-100)', position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="ERP Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 28 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--navy)', marginBottom: 10, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {lang === 'en' ? 'Logistics ERP System' : 'نظام تخطيط موارد المؤسسات للوجستيات'}
                  </h3>
                  <p style={{ color: 'var(--gray-600)', marginBottom: 16, lineHeight: 1.6, fontSize: 14, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {lang === 'en' ? 'Custom ERP solution for fleet management, inventory tracking, and automated financial reporting.' : 'حل ERP مخصص لإدارة الأساطيل وتتبع المخزون والتقارير المالية المؤتمتة.'}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {['Vue.js', 'Python', 'AWS'].map(tech => (
                      <span key={tech} style={{ padding: '3px 10px', background: 'var(--gray-50)', borderRadius: 100, fontSize: 11, fontWeight: 500, border: '1px solid var(--gray-100)' }}>{tech}</span>
                    ))}
                  </div>
                  <div style={{ padding: 14, background: 'rgba(26,79,160,0.04)', borderRadius: 12 }}>
                    <div style={{ color: 'var(--royal)', fontWeight: 700, fontSize: 12, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lang === 'en' ? 'Impact' : 'الأثر'}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-body)', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                      {lang === 'en' ? 'Reduced operational costs by 35% in the first year.' : 'خفض تكاليف التشغيل بنسبة 35٪ في السنة الأولى.'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <style>{`
        @media (max-width: 1024px) {
          .bs-services-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .bs-services-grid { grid-template-columns: 1fr !important; }
          .bs-projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
