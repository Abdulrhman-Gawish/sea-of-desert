import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LangContext'
import {
  Globe, Package, Ship, ShoppingCart, Monitor,
  Megaphone, Calculator, Settings, HeartPulse, ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: <Globe size={28} />,
    en: 'International Trade',
    ar: 'التجارة الدولية',
    desc: { en: 'Comprehensive import/export solutions connecting Saudi businesses with global markets.', ar: 'حلول شاملة للاستيراد والتصدير تربط الشركات السعودية بالأسواق العالمية.' },
    color: '#1a4fa0',
    bg: '#eef4ff',
  },
  {
    icon: <Package size={28} />,
    en: 'Import & Export',
    ar: 'الاستيراد والتصدير',
    desc: { en: 'Sourcing from Asia (China, Turkey) and Europe with full regulatory compliance.', ar: 'مصادر التوريد من آسيا (الصين وتركيا) وأوروبا مع الامتثال التنظيمي الكامل.' },
    color: '#006b3e',
    bg: '#edfaf3',
  },
  {
    icon: <Ship size={28} />,
    en: 'Logistics & Shipping',
    ar: 'اللوجستيات والشحن',
    desc: { en: 'Sea freight, cargo management, and end-to-end supply chain solutions.', ar: 'الشحن البحري وإدارة البضائع وحلول سلسلة التوريد الشاملة.' },
    color: '#0d1f3c',
    bg: '#eef1f8',
  },
  {
    icon: <ShoppingCart size={28} />,
    en: 'E-Commerce',
    ar: 'التجارة الإلكترونية',
    desc: { en: 'Full-service e-commerce solutions from platform setup to cross-border fulfillment.', ar: 'حلول التجارة الإلكترونية الشاملة من إعداد المنصة إلى التوصيل عبر الحدود.' },
    color: '#c9a227',
    bg: '#fdf8ec',
  },
  {
    icon: <Monitor size={28} />,
    en: 'Technology Solutions',
    ar: 'الحلول التقنية',
    desc: { en: 'Custom web development, digital platforms, and tech infrastructure for businesses.', ar: 'تطوير مواقع مخصص ومنصات رقمية وبنية تحتية تقنية للشركات.' },
    color: '#1a4fa0',
    bg: '#eef4ff',
  },
  {
    icon: <Megaphone size={28} />,
    en: 'Digital Marketing',
    ar: 'التسويق الرقمي',
    desc: { en: 'Strategic digital marketing campaigns to grow your brand in regional and global markets.', ar: 'حملات تسويق رقمي استراتيجية لتنمية علامتك التجارية في الأسواق الإقليمية والعالمية.' },
    color: '#006b3e',
    bg: '#edfaf3',
  },
  {
    icon: <Calculator size={28} />,
    en: 'Accounting Services',
    ar: 'الخدمات المحاسبية',
    desc: { en: 'Remote accounting and financial reporting services tailored for growing businesses.', ar: 'خدمات محاسبة عن بعد وتقارير مالية مصممة للشركات المتنامية.' },
    color: '#0d1f3c',
    bg: '#eef1f8',
  },
  {
    icon: <Settings size={28} />,
    en: 'Business Administration',
    ar: 'إدارة الأعمال',
    desc: { en: 'Remote administrative and operational support to streamline your business processes.', ar: 'دعم إداري وتشغيلي عن بعد لتبسيط عمليات أعمالك.' },
    color: '#c9a227',
    bg: '#fdf8ec',
  },
  {
    icon: <HeartPulse size={28} />,
    en: 'Medical Products',
    ar: 'المنتجات الطبية',
    desc: { en: 'Distribution of high-quality medical and pharmaceutical products across Saudi Arabia.', ar: 'توزيع المنتجات الطبية والصيدلانية عالية الجودة في المملكة العربية السعودية.' },
    color: '#c0392b',
    bg: '#fdf0ef',
  },
]

export default function Services() {
  const ref = useScrollReveal()
  const { t, dir, lang } = useLang()

  return (
    <section id="services" dir={dir} style={{ background: 'var(--off-white)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref} className="section-reveal">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="pill-label" style={{ justifyContent: 'center', marginBottom: 16 }}>
              {t('What We Offer', 'ما نقدمه')}
            </div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 16 }}>
              {t('Our Services', 'خدماتنا')}
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
              {t(
                'Comprehensive business solutions across trade, logistics, technology, and healthcare — all under one strategic partnership.',
                'حلول أعمال شاملة في التجارة واللوجستيات والتكنولوجيا والرعاية الصحية — تحت شراكة استراتيجية واحدة.'
              )}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
            className="services-grid">
            {services.map((s, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: 'white',
                  borderRadius: 18,
                  padding: 32,
                  border: '1px solid var(--gray-100)',
                  boxShadow: '0 2px 16px rgba(10,22,40,0.05)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget).style.borderColor = s.color + '40'
                }}
                onMouseLeave={e => {
                  (e.currentTarget).style.borderColor = 'var(--gray-100)'
                }}
              >
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: 14,
                  background: s.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: s.color,
                  marginBottom: 20,
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: 'var(--navy)', marginBottom: 10, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                  {t(s.en, s.ar)}
                </h3>
                <p style={{ color: 'var(--gray-600)', fontSize: 14, lineHeight: 1.7, marginBottom: 20, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                  {t(s.desc.en, s.desc.ar)}
                </p>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: s.color,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 600,
                  padding: 0,
                  fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
                }}>
                  {t('Learn More', 'اعرف المزيد')}
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
