import { useLang } from '../context/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Contact from '../components/Contact'
import ProductsPortfolio from '../components/ProductsPortfolio'
import { ArrowRightLeft, Globe, Ship, Package, ShoppingCart, Box, FileText, HeartPulse, PieChart } from 'lucide-react'

const services = [
  { id: 'srv_import', icon: <ArrowRightLeft size={22} /> },
  { id: 'srv_trade', icon: <Globe size={22} /> },
  { id: 'srv_ocean', icon: <Ship size={22} /> },
  { id: 'srv_logistics', icon: <Package size={22} /> },
  { id: 'srv_procurement', icon: <ShoppingCart size={22} /> },
  { id: 'srv_warehousing', icon: <Box size={22} /> },
  { id: 'srv_contracting', icon: <FileText size={22} /> },
  { id: 'srv_medical', icon: <HeartPulse size={22} /> },
  { id: 'srv_sc_consulting', icon: <PieChart size={22} /> },
]

export default function SupplyChainPage() {
  const { t, lang, dir } = useLang()
  const ref = useScrollReveal()
  const projectsRef = useScrollReveal()

  return (
    <main dir={dir} style={{ background: 'var(--off-white)' }}>
      {/* Hero */}
      <section style={{
        paddingTop: 140,
        paddingBottom: 80,
        background: 'linear-gradient(135deg, var(--navy), #004d2d)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -80, left: -80, width: 350, height: 350, background: 'radial-gradient(circle, rgba(0,107,62,0.35), transparent)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -60, right: -60, width: 250, height: 250, background: 'radial-gradient(circle, rgba(201,162,39,0.12), transparent)', borderRadius: '50%' }} />
        <div className="container relative z-10 text-center">
          <div className="animate-fade-up">
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, marginBottom: 20, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('sc_hero_title')}
            </h1>
            <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.75)', maxWidth: 640, margin: '0 auto', lineHeight: 1.7, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('sc_hero_subtitle')}
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
            
            <div className="sc-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
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
                    background: 'rgba(0, 107, 62, 0.07)',
                    color: 'var(--green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 18,
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
          </div>
        </div>
      </section>

      {/* Products Portfolio — moved here from Home */}
      <ProductsPortfolio />

      {/* Previous Work */}
      <section className="section-pad" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div ref={projectsRef} className="section-reveal">
            <h2 className="section-title text-center" style={{ marginBottom: 48 }}>
              {t('prev_work_title')}
            </h2>

            <div className="sc-projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {/* Project 1 */}
              <div className="card-hover" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--gray-100)', background: 'white' }}>
                <div style={{ height: 220, background: 'var(--gray-100)', position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?w=600&q=80" alt="Logistics" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 32 }}>
                  <div style={{ color: 'var(--green)', fontSize: 11, fontWeight: 700, marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{lang === 'en' ? 'GOVERNMENT SUPPLY' : 'توريد حكومي'}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 10, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {lang === 'en' ? 'Eastern Province Supply Contracts' : 'عقود توريد المنطقة الشرقية'}
                  </h3>
                  <p style={{ color: 'var(--gray-600)', marginBottom: 20, lineHeight: 1.65, fontSize: 14, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {lang === 'en' ? 'Executed large-scale procurement and supply operations for government facilities in Dammam, ensuring timely delivery and strict quality compliance.' : 'تنفيذ عمليات توريد ومشتريات واسعة النطاق للمرافق الحكومية في الدمام، مع ضمان التسليم في الوقت المناسب والامتثال الصارم للجودة.'}
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, paddingTop: 16, borderTop: '1px solid var(--gray-100)' }}>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--gray-400)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lang === 'en' ? 'Location' : 'الموقع'}</div>
                      <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: 14 }}>{lang === 'en' ? 'Dammam, KSA' : 'الدمام، السعودية'}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--gray-400)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lang === 'en' ? 'Impact' : 'الأثر'}</div>
                      <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: 14 }}>{lang === 'en' ? '100% on-time delivery' : 'تسليم في الموعد 100٪'}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="card-hover" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--gray-100)', background: 'white' }}>
                <div style={{ height: 220, background: 'var(--gray-100)', position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" alt="Medical Products" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 32 }}>
                  <div style={{ color: 'var(--royal)', fontSize: 11, fontWeight: 700, marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{lang === 'en' ? 'MEDICAL PRODUCTS' : 'منتجات طبية'}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 10, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {lang === 'en' ? 'Malo Pharma Distribution' : 'توزيع منتجات مالو فارما'}
                  </h3>
                  <p style={{ color: 'var(--gray-600)', marginBottom: 20, lineHeight: 1.65, fontSize: 14, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {lang === 'en' ? 'Exclusive distribution of premium pharmaceutical products (EZE, Sanzi, Seedo) across the Saudi market, establishing a robust healthcare supply chain.' : 'التوزيع الحصري للمنتجات الصيدلانية المتميزة في جميع أنحاء السوق السعودي، وتأسيس سلسلة توريد قوية للرعاية الصحية.'}
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, paddingTop: 16, borderTop: '1px solid var(--gray-100)' }}>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--gray-400)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lang === 'en' ? 'Partners' : 'الشركاء'}</div>
                      <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: 14 }}>{lang === 'en' ? 'KSA & Egypt' : 'السعودية ومصر'}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--gray-400)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lang === 'en' ? 'Result' : 'النتيجة'}</div>
                      <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: 14 }}>{lang === 'en' ? 'Successful market launch' : 'إطلاق ناجح في السوق'}</div>
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
          .sc-services-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .sc-services-grid { grid-template-columns: 1fr !important; }
          .sc-projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
