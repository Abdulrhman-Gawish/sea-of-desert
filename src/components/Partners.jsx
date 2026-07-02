import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LangContext'
import { MapPin, Calendar } from 'lucide-react'

const partners = [
  {
    name: 'Dana Al Mazoon',
    nameAr: 'دانة المزون',
    country: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
    flag: '🇸🇦',
    year: 2023,
    desc: {
      en: 'Import/export from China & Turkey. Government supply contracts in Eastern Province (Dammam).',
      ar: 'استيراد وتصدير من الصين وتركيا. عقود توريد حكومية في المنطقة الشرقية (الدمام).',
    },
    sectors: { en: ['Import & Export', 'Government Supply'], ar: ['استيراد وتصدير', 'توريد حكومي'] },
    color: '#1a4fa0',
    gradient: 'linear-gradient(135deg, #eef4ff, #dbeafe)',
  },
  {
    name: 'Magic Land',
    nameAr: 'ماجيك لاند',
    country: { en: 'China', ar: 'الصين' },
    flag: '🇨🇳',
    year: 2024,
    desc: {
      en: 'Strategic partnership covering import/export, contracting, e-commerce, and maritime logistics.',
      ar: 'شراكة استراتيجية تغطي الاستيراد والتصدير والمقاولات والتجارة الإلكترونية واللوجستيات البحرية.',
    },
    sectors: { en: ['E-Commerce', 'Sea Freight', 'Contracting'], ar: ['تجارة إلكترونية', 'شحن بحري', 'مقاولات'] },
    color: '#c9a227',
    gradient: 'linear-gradient(135deg, #fdf8ec, #fef3c7)',
  },
  {
    name: 'You Wang Zhou',
    nameAr: 'يو وانج ژو',
    country: { en: 'China', ar: 'الصين' },
    flag: '🇨🇳',
    year: 2025,
    desc: {
      en: 'Specialized logistics and trade partnership enhancing our maritime freight and supply chain capabilities.',
      ar: 'شراكة لوجستية وتجارية متخصصة تعزز قدراتنا في الشحن البحري وسلسلة التوريد.',
    },
    sectors: { en: ['Logistics', 'Import & Export'], ar: ['لوجستيات', 'استيراد وتصدير'] },
    color: '#0d1f3c',
    gradient: 'linear-gradient(135deg, #eef1f8, #e2e8f0)',
  },
  {
    name: 'Ultimate Egypt',
    nameAr: 'أولتيميت مصر',
    country: { en: 'Egypt', ar: 'مصر' },
    flag: '🇪🇬',
    year: 2024,
    desc: {
      en: 'Technology & digital services: web development, digital marketing, remote accounting, and business administration.',
      ar: 'التكنولوجيا والخدمات الرقمية: تطوير الويب والتسويق الرقمي والمحاسبة عن بعد وإدارة الأعمال.',
    },
    sectors: { en: ['Web Development', 'Digital Marketing', 'Accounting'], ar: ['تطوير الويب', 'تسويق رقمي', 'محاسبة'] },
    color: '#006b3e',
    gradient: 'linear-gradient(135deg, #edfaf3, #d1fae5)',
  },
  {
    name: 'Malo Pharma',
    nameAr: 'مالو فارما',
    country: { en: 'Egypt', ar: 'مصر' },
    flag: '🇪🇬',
    year: 2025,
    desc: {
      en: 'Medical products manufacturing partnership. Products launched in Saudi market in October 2025.',
      ar: 'شراكة تصنيع المنتجات الطبية. تم إطلاق المنتجات في السوق السعودي في أكتوبر 2025.',
    },
    sectors: { en: ['Medical Products', 'Pharmaceuticals', 'Healthcare'], ar: ['منتجات طبية', 'أدوية', 'رعاية صحية'] },
    color: '#c0392b',
    gradient: 'linear-gradient(135deg, #fdf0ef, #fee2e2)',
  },
]

export default function Partners() {
  const ref = useScrollReveal()
  const { t, dir, lang } = useLang()

  return (
    <section id="partners" dir={dir} style={{ background: 'var(--navy)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref} className="section-reveal">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="pill-label" style={{ justifyContent: 'center', marginBottom: 16, color: 'var(--gold)', background: 'rgba(201,162,39,0.12)', borderColor: 'rgba(201,162,39,0.25)' }}>
              {t('Strategic Network', 'الشبكة الاستراتيجية')}
            </div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 16, color: 'white' }}>
              {t('Our Partners', 'شركاؤنا')}
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto', color: 'rgba(255,255,255,0.65)' }}>
              {t(
                'Strategic alliances across Saudi Arabia, China, Turkey, and Egypt — building a global network powered by trust.',
                'تحالفات استراتيجية في المملكة العربية السعودية والصين وتركيا ومصر — بناء شبكة عالمية مدعومة بالثقة.'
              )}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
            className="partners-grid">
            {partners.map((p, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 20,
                  padding: 28,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget).style.background = 'rgba(255,255,255,0.1)'
                  ;(e.currentTarget).style.borderColor = 'rgba(201,162,39,0.4)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget).style.background = 'rgba(255,255,255,0.05)'
                  ;(e.currentTarget).style.borderColor = 'rgba(255,255,255,0.1)'
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{p.flag}</div>
                    <h3 style={{ color: 'white', fontWeight: 700, fontSize: 18, fontFamily: 'Poppins', marginBottom: 2 }}>
                      {p.name}
                    </h3>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                      {lang === 'ar' ? p.nameAr : p.name}
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    background: 'rgba(201,162,39,0.15)',
                    color: 'var(--gold)',
                    padding: '4px 10px',
                    borderRadius: 100,
                    fontSize: 12,
                    fontWeight: 600,
                    fontFamily: 'Poppins',
                  }}>
                    <Calendar size={11} />
                    {p.year}
                  </div>
                </div>

                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.7, marginBottom: 20, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                  {t(p.desc.en, p.desc.ar)}
                </p>

                {/* Sectors */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {(lang === 'ar' ? p.sectors.ar : p.sectors.en).map((s, j) => (
                    <span key={j} style={{
                      background: 'rgba(255,255,255,0.07)',
                      color: 'rgba(255,255,255,0.75)',
                      padding: '4px 10px',
                      borderRadius: 100,
                      fontSize: 12,
                      fontWeight: 500,
                      border: '1px solid rgba(255,255,255,0.12)',
                      fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
                    }}>
                      {s}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 16, color: 'rgba(255,255,255,0.4)', fontSize: 12, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                  <MapPin size={12} />
                  {t(p.country.en, p.country.ar)}
                </div>
              </div>
            ))}
          </div>

          {/* Partnership statement */}
          <div style={{
            marginTop: 60,
            padding: '40px 48px',
            background: 'rgba(201,162,39,0.08)',
            border: '1px solid rgba(201,162,39,0.2)',
            borderRadius: 20,
            textAlign: 'center',
          }}>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, lineHeight: 1.8, maxWidth: 700, margin: '0 auto', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t(
                '"Our partnerships are not just commercial agreements — they are the foundation of our growth, driving knowledge transfer, technology adoption, and market expansion across borders."',
                '"شراكاتنا ليست مجرد اتفاقيات تجارية — بل هي أساس نمونا، تدفع نقل المعرفة واعتماد التكنولوجيا والتوسع في الأسواق عبر الحدود."'
              )}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .partners-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .partners-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
