import { useLang } from '../context/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CheckCircle2, ImageIcon } from 'lucide-react'

const products = [
  {
    id: 'sedo',
    name: { en: 'Sedo Spray', ar: 'سيدو بخاخ' },
    category: { en: 'Delay Performance Spray', ar: 'بخاخ تأخير الأداء' },
    // Place actual images at /public/images/products/sedo.png
    image: '/images/products/sedo.png',
    desc: {
      en: 'Advanced delay spray designed to help manage premature ejaculation while maintaining natural sensation. Offers a balanced formula that enhances performance, supports blood circulation, and improves overall experience without complete numbing.',
      ar: 'منتج متطور مصمم للمساعدة في تأخير القذف مع الحفاظ على الإحساس الطبيعي. تركيبة متوازنة تعمل على تحسين الأداء وتنشيط الدورة الدموية، وتوفير تحكم أفضل دون فقدان كامل للإحساس.'
    },
    benefits: {
      en: ['Extends duration naturally', 'Balanced stimulation & control', 'Natural-based formula', 'Fast-acting'],
      ar: ['يطيل مدة العلاقة بدون فقدان الإحساس', 'تأثير مزدوج: تنشيط وتحكم', 'تركيبة طبيعية ومتوازنة', 'سريع المفعول']
    },
    color: '#1a4fa0'
  },
  {
    id: 'sanzi',
    name: { en: 'SANZI Cleanser', ar: 'سانزي جل منظف' },
    category: { en: 'Multi-Purpose Cleaning Gel', ar: 'جل منظف متعدد الاستخدامات' },
    // Place actual images at /public/images/products/sanzi.png
    image: '/images/products/sanzi.png',
    desc: {
      en: 'Multi-purpose cleaning gel developed using 100% natural ingredients to deliver powerful cleaning, disinfection, and protection for everyday use. Comes in specialized variants for kitchenware, baby care, and food cleaning.',
      ar: 'جل منظف متعدد الاستخدامات تم تطويره باستخدام مكونات طبيعية 100% ليقدم تنظيفاً قوياً، وتعقيماً فعالاً، وحماية متكاملة للاستخدام اليومي لجميع احتياجات المنزل.'
    },
    benefits: {
      en: ['100% natural and safe formula', 'Powerful antibacterial action', 'Safe for babies & sensitive use', '3-in-1 product line'],
      ar: ['مكونات طبيعية وآمنة 100%', 'قوة تنظيف وتعقيم عالية', 'آمن للأطفال والرضع', 'منتجات تغطي كل احتياجات المنزل']
    },
    color: '#006b3e'
  },
  {
    id: 'eze',
    name: { en: 'EZE Effervescent', ar: 'إيزي فوار' },
    category: { en: 'Digestive Relief Formula', ar: 'حبيبات فوار لراحة المعدة والهضم' },
    // Place actual images at /public/images/products/eze.png
    image: '/images/products/eze.png',
    desc: {
      en: 'Fast-acting digestive formula designed to relieve acidity, heartburn, and bloating while supporting overall digestive health. Formulated with natural extracts, antacid minerals, and digestive enzymes.',
      ar: 'منتج سريع المفعول يساعد في علاج الحموضة، الحرقان، والانتفاخ، مع دعم صحة الجهاز الهضمي بشكل متكامل بتركيبة تجمع بين المعادن والمستخلصات الطبيعية.'
    },
    benefits: {
      en: ['Fast relief from acidity', 'Reduces bloating', 'Natural extracts + enzymes', 'Pleasant orange flavor'],
      ar: ['يخفف الحموضة والحرقان بسرعة', 'يقلل الانتفاخ ويحسن الهضم', 'تركيبة طبيعية مدعمة بإنزيمات', 'طعم برتقالي مستساغ']
    },
    color: '#c9a227'
  }
]

export default function ProductsPortfolio() {
  const { lang, dir } = useLang()
  const ref = useScrollReveal()

  return (
    <section className="section-pad" dir={dir} style={{ background: 'white' }}>
      <div className="container">
        <div ref={ref} className="section-reveal">
          
          <div className="text-center" style={{ marginBottom: 56 }}>
            <div className="pill-label" style={{ marginBottom: 14, color: 'var(--green)', background: 'rgba(0,107,62,0.06)', borderColor: 'rgba(0,107,62,0.12)' }}>
              {lang === 'en' ? 'Our Products' : 'منتجاتنا'}
            </div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 14 }}>
              {lang === 'en' ? 'Products Portfolio' : 'محفظة المنتجات'}
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
              {lang === 'en' 
                ? 'Discover our premium, high-demand products engineered for health, hygiene, and performance.' 
                : 'اكتشف منتجاتنا المتميزة وعالية الطلب المصممة للصحة والنظافة والأداء.'}
            </p>
          </div>

          <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {products.map((p, i) => (
              <div 
                key={i} 
                className="card-hover" 
                style={{ 
                  borderRadius: 24, 
                  border: '1px solid var(--gray-100)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {/* Product Image Placeholder */}
                <div style={{
                  height: 200,
                  background: `linear-gradient(135deg, ${p.color}08, ${p.color}15)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid var(--gray-100)',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Try loading the actual product image; show placeholder icon if missing */}
                  <img 
                    src={p.image} 
                    alt={p.name[lang]}
                    style={{
                      maxHeight: '80%',
                      maxWidth: '80%',
                      objectFit: 'contain',
                    }}
                    onError={(e) => {
                      // Hide the broken image and show the placeholder
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div style={{
                    display: 'none', // shown via onError above
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                    color: p.color,
                    opacity: 0.4,
                    position: 'absolute',
                    inset: 0,
                    justifyContent: 'center',
                  }}>
                    <ImageIcon size={40} />
                    <span style={{ fontSize: 12, fontWeight: 600, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                      {lang === 'en' ? 'Image coming soon' : 'الصورة قريباً'}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ color: p.color, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {p.category[lang]}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 12, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {p.name[lang]}
                  </h3>
                  <p style={{ color: 'var(--gray-600)', fontSize: 14, lineHeight: 1.7, marginBottom: 24, flexGrow: 1, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {p.desc[lang]}
                  </p>

                  <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: 20 }}>
                    {p.benefits[lang].map((benefit, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                        <CheckCircle2 size={16} color={p.color} style={{ flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: 13, color: 'var(--text-body)', fontWeight: 500, lineHeight: 1.5, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
