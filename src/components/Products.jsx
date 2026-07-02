import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LangContext'
import { Shield, Leaf, Zap, ArrowRight, Check } from 'lucide-react'

const products = [
  {
    name: 'Sedo Spray',
    tagline: { en: 'Delay Performance Spray', ar: 'بخاخ تأخير الأداء' },
    desc: {
      en: 'Advanced delay spray with a balanced formula combining stimulation and mild numbing. Natural ingredients for enhanced performance without loss of sensation.',
      ar: 'بخاخ تأخير متطور بتركيبة متوازنة تجمع بين التنشيط والتخدير الخفيف. مكونات طبيعية لتحسين الأداء دون فقدان الإحساس.',
    },
    features: {
      en: ['Extends performance duration', 'Natural-based formula', 'Fast-acting application', 'Pharmacy grade quality'],
      ar: ['يطيل مدة الأداء', 'تركيبة طبيعية', 'سريع المفعول', 'جودة صيدلانية'],
    },
    gradient: 'linear-gradient(135deg, #1a4fa0, #2563eb)',
    accentColor: '#60a5fa',
    category: { en: 'Medical · Pharmacy', ar: 'طبي · صيدلية' },
    icon: <Shield size={24} />,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&auto=format',
  },
  {
    name: 'SANZI Cleanser',
    tagline: { en: 'Multi-Purpose Natural Cleaning Gel', ar: 'جل تنظيف طبيعي متعدد الاستخدامات' },
    desc: {
      en: '100% natural cleaning gel in 3 variants: Kitchen, Baby Care, and Food & Vegetables. Powerful antibacterial action, safe for the whole family.',
      ar: 'جل تنظيف طبيعي 100% في 3 أنواع: المطبخ، العناية بالأطفال، والخضروات والفواكه. قوة تعقيم عالية وآمن للجميع.',
    },
    features: {
      en: ['3 specialized variants', '100% natural & safe', 'Kills bacteria effectively', 'Safe for infants'],
      ar: ['3 أنواع متخصصة', '100% طبيعي وآمن', 'يقضي على البكتيريا', 'آمن للرضع'],
    },
    gradient: 'linear-gradient(135deg, #006b3e, #00a86b)',
    accentColor: '#34d399',
    category: { en: 'Household · Baby Care', ar: 'منزلي · عناية بالأطفال' },
    icon: <Leaf size={24} />,
    image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=400&h=300&fit=crop&auto=format',
  },
  {
    name: 'EZE Sachets',
    tagline: { en: 'Effervescent Digestive Relief', ar: 'أكياس فوارة لراحة المعدة' },
    desc: {
      en: 'Fast-acting effervescent formula for acidity, heartburn, and bloating relief. Natural extracts + digestive enzymes + antacid minerals. Pleasant orange flavor.',
      ar: 'تركيبة فوارة سريعة المفعول لتخفيف الحموضة والحرقان والانتفاخ. مستخلصات طبيعية + إنزيمات هاضمة + معادن مضادة للحموضة. بنكهة البرتقال.',
    },
    features: {
      en: ['Triple action formula', 'Safe from 1 year old', 'Orange flavored', 'After-meal relief'],
      ar: ['تأثير ثالثي', 'آمن من سنة', 'بنكهة البرتقال', 'راحة بعد الأكل'],
    },
    gradient: 'linear-gradient(135deg, #c9a227, #e5b93a)',
    accentColor: '#fcd34d',
    category: { en: 'Medical · Digestive Health', ar: 'طبي · صحة الجهاز الهضمي' },
    icon: <Zap size={24} />,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&auto=format',
  },
]

export default function Products() {
  const ref = useScrollReveal()
  const { t, dir, lang } = useLang()

  return (
    <section id="products" dir={dir} style={{ background: 'white', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref} className="section-reveal">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="pill-label" style={{ justifyContent: 'center', marginBottom: 16 }}>
              {t('Product Portfolio', 'محفظة المنتجات')}
            </div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 16 }}>
              {t('Our Products', 'منتجاتنا')}
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
              {t(
                'Premium medical and household products distributed across the Saudi market in partnership with Malo Pharma.',
                'منتجات طبية ومنزلية متميزة موزعة في السوق السعودي بالشراكة مع Malo Pharma.'
              )}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {products.map((p, i) => (
              <div
                key={i}
                className="card-hover product-card-grid"
                style={{
                  borderRadius: 24,
                  overflow: 'hidden',
                  boxShadow: '0 4px 30px rgba(10,22,40,0.08)',
                  border: '1px solid var(--gray-100)',
                  display: 'grid',
                  gridTemplateColumns: i % 2 === 0 ? '1fr 2fr' : '2fr 1fr',
                }}
              >
                {/* Image Panel */}
                <div style={{
                  background: p.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 40,
                  minHeight: 280,
                  order: dir === 'rtl' ? (i % 2 === 0 ? 1 : 0) : 0,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
                  <div style={{ position: 'absolute', bottom: -20, left: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      color: 'white',
                      fontSize: 32,
                      animation: 'float 4s ease-in-out infinite',
                    }}>
                      {p.icon}
                    </div>
                    <div style={{ color: 'white', fontSize: 28, fontWeight: 800, fontFamily: 'Poppins', marginBottom: 6 }}>{p.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, fontWeight: 500, letterSpacing: '0.05em', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                      {t(p.category.en, p.category.ar)}
                    </div>
                  </div>
                </div>

                {/* Content Panel */}
                <div style={{ background: 'white', padding: 40 }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 8, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t(p.tagline.en, p.tagline.ar)}
                  </h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: 15, lineHeight: 1.7, marginBottom: 24, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t(p.desc.en, p.desc.ar)}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 28 }}>
                    {(lang === 'ar' ? p.features.ar : p.features.en).map((f, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--text-body)', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                        <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(0,107,62,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#006b3e', flexShrink: 0 }}>
                          <Check size={12} />
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>
                  <button
                    className="btn-primary"
                    style={{ background: p.gradient, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}
                  >
                    {t('Learn More', 'اعرف المزيد')}
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .product-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
