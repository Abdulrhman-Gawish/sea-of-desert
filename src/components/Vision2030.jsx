import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LangContext'
import { Globe2, Smartphone, HeartPulse, TrendingUp, Lightbulb, DollarSign } from 'lucide-react'

const pillars = [
  { icon: <Globe2 size={24} />, en: 'International Trade', ar: 'التجارة الدولية', desc: { en: 'Connecting Saudi businesses to global markets, supporting trade diversification.', ar: 'ربط الشركات السعودية بالأسواق العالمية ودعم تنويع التجارة.' } },
  { icon: <Smartphone size={24} />, en: 'Digital Transformation', ar: 'التحول الرقمي', desc: { en: 'Enabling businesses through web platforms, digital marketing, and tech solutions.', ar: 'تمكين الشركات من خلال منصات الويب والتسويق الرقمي والحلول التقنية.' } },
  { icon: <HeartPulse size={24} />, en: 'Healthcare', ar: 'الرعاية الصحية', desc: { en: 'Expanding the medical sector through quality pharmaceutical products.', ar: 'توسيع القطاع الطبي من خلال منتجات صيدلانية عالية الجودة.' } },
  { icon: <TrendingUp size={24} />, en: 'Investment', ar: 'الاستثمار', desc: { en: 'Facilitating international investment and cross-border business partnerships.', ar: 'تيسير الاستثمار الدولي والشراكات التجارية عابرة الحدود.' } },
  { icon: <Lightbulb size={24} />, en: 'Innovation', ar: 'الابتكار', desc: { en: 'Driving innovation through technology adoption and creative business models.', ar: 'دفع الابتكار من خلال اعتماد التكنولوجيا ونماذج الأعمال الإبداعية.' } },
  { icon: <DollarSign size={24} />, en: 'Economic Growth', ar: 'النمو الاقتصادي', desc: { en: 'Contributing to GDP growth through diverse sectors and job creation.', ar: 'المساهمة في نمو الناتج المحلي الإجمالي من خلال قطاعات متنوعة وخلق فرص العمل.' } },
]

export default function Vision2030() {
  const ref = useScrollReveal()
  const { t, dir, lang } = useLang()

  return (
    <section id="vision" dir={dir} style={{ padding: '100px 24px', background: 'white', position: 'relative', overflow: 'hidden' }}>
      {/* Saudi Green background block */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '50%',
        background: 'linear-gradient(135deg, #004d2d, #006b3e)',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div ref={ref} className="section-reveal">
          {/* Header — on green */}
          <div style={{ textAlign: 'center', marginBottom: 64, paddingBottom: 40 }}>
            <div className="pill-label" style={{ justifyContent: 'center', marginBottom: 16, color: 'rgba(255,255,255,0.9)', background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.2)' }}>
              {t('Supporting the Kingdom', 'دعم المملكة')}
            </div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: 'white', marginBottom: 16, textAlign: 'center', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('Aligned with Saudi Vision 2030', 'متوافقون مع رؤية السعودية 2030')}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, lineHeight: 1.7, maxWidth: 600, margin: '0 auto', textAlign: 'center', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t(
                'Sea of Desert actively supports Saudi Vision 2030 by driving international trade, digital transformation, healthcare expansion, and economic diversification.',
                'تدعم شركة بحر الصحراء بنشاط رؤية السعودية 2030 من خلال دفع التجارة الدولية والتحول الرقمي والتوسع في الرعاية الصحية وتنويع الاقتصاد.'
              )}
            </p>
          </div>

          {/* Cards grid — sits across the boundary */}
          <div style={{
            background: 'white',
            borderRadius: 28,
            boxShadow: '0 20px 60px rgba(0,107,62,0.15)',
            padding: 40,
            border: '1px solid rgba(0,107,62,0.1)',
          }}>
            {/* Vision 2030 emblem area */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40, paddingBottom: 32, borderBottom: '1px solid var(--gray-100)' }}
              className="vision-header">
              <div style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: 'linear-gradient(135deg, #004d2d, #006b3e)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontSize: 28 }}>🇸🇦</span>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 22, color: 'var(--navy)', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                  {t('Vision 2030', 'رؤية 2030')}
                </div>
                <div style={{ color: 'var(--green)', fontWeight: 600, fontSize: 14, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                  {t('Kingdom of Saudi Arabia', 'المملكة العربية السعودية')}
                </div>
              </div>
              <div style={{ marginInlineStart: 'auto', textAlign: dir === 'rtl' ? 'left' : 'right' }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--navy)', fontFamily: 'Poppins' }}>100%</div>
                <div style={{ color: 'var(--gray-600)', fontSize: 13, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                  {t('Committed', 'ملتزمون')}
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
              className="vision-grid">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="card-hover"
                  style={{
                    background: 'linear-gradient(135deg, #f0faf5, #e6f7ee)',
                    borderRadius: 16,
                    padding: 24,
                    border: '1px solid rgba(0,107,62,0.1)',
                  }}
                >
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: 'linear-gradient(135deg, #006b3e, #00854d)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    marginBottom: 14,
                  }}>
                    {p.icon}
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: 15, color: 'var(--navy)', marginBottom: 8, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t(p.en, p.ar)}
                  </h4>
                  <p style={{ color: 'var(--gray-600)', fontSize: 13, lineHeight: 1.6, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t(p.desc.en, p.desc.ar)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .vision-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .vision-grid { grid-template-columns: 1fr !important; }
          .vision-header { flex-direction: column; }
        }
      `}</style>
    </section>
  )
}
