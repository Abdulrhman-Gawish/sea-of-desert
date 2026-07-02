import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LangContext'
import { Target, Eye, Heart, Zap } from 'lucide-react'

const values = [
  {
    icon: <Target size={22} />,
    en: 'Mission',
    ar: 'المهمة',
    desc: {
      en: 'Connecting local businesses with global opportunities through integrated trade and technology solutions.',
      ar: 'ربط الشركات المحلية بالفرص العالمية من خلال حلول تجارية وتكنولوجية متكاملة.',
    },
    color: '#1a4fa0',
  },
  {
    icon: <Eye size={22} />,
    en: 'Vision',
    ar: 'الرؤية',
    desc: {
      en: 'To become a leading platform in international trade, logistics, and technology across the Middle East and Asia.',
      ar: 'أن نصبح منصة رائدة في التجارة الدولية واللوجستيات والتكنولوجيا في الشرق الأوسط وآسيا.',
    },
    color: '#006b3e',
  },
  {
    icon: <Heart size={22} />,
    en: 'Values',
    ar: 'القيم',
    desc: {
      en: 'Integrity, excellence, and long-term partnership. We build trust through transparency and commitment.',
      ar: 'النزاهة والتميز والشراكة طويلة الأمد. نبني الثقة من خلال الشفافية والالتزام.',
    },
    color: '#c9a227',
  },
  {
    icon: <Zap size={22} />,
    en: 'Innovation',
    ar: 'الابتكار',
    desc: {
      en: 'Leveraging cutting-edge technology to deliver smarter business solutions and digital transformation.',
      ar: 'الاستفادة من أحدث التقنيات لتقديم حلول أعمال أذكى وتحقيق التحول الرقمي.',
    },
    color: '#1a4fa0',
  },
]

const timeline = [
  { year: '2022', en: 'Company Founded with SAR 100,000 capital', ar: 'تأسست الشركة برأس مال 100,000 ريال' },
  { year: '2023', en: 'Dana Al Mazoon partnership — government supply contracts in Eastern Province', ar: 'شراكة دانة المزون — عقود توريد حكومية في المنطقة الشرقية' },
  { year: '2024', en: 'Surpassed SAR 1M in growth. Magic Land & Ultimate Egypt partnerships', ar: 'تجاوز المليون ريال. شراكات Magic Land و Ultimate Egypt' },
  { year: '2025', en: 'Medical expansion via Malo Pharma. You Wang Zhou logistics partnership', ar: 'التوسع الطبي عبر Malo Pharma. شراكة You Wang Zhou اللوجستية' },
]

export default function About() {
  const ref = useScrollReveal()
  const { t, dir, lang } = useLang()

  return (
    <section id="about" dir={dir} style={{ background: 'white', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref} className="section-reveal">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="pill-label" style={{ justifyContent: 'center', marginBottom: 16 }}>
              {t('Our Story', 'قصتنا')}
            </div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 16 }}>
              {t('Who We Are', 'من نحن')}
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
              {t(
                'Founded in 2022 with ambition and purpose — to bridge the Arab world with global markets through trade, technology, and strategic partnerships.',
                'تأسست عام 2022 بطموح وهدف — لربط العالم العربي بالأسواق العالمية من خلال التجارة والتكنولوجيا والشراكات الاستراتيجية.'
              )}
            </p>
          </div>

          {/* Two-column: Image + Text */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 80 }}
            className="about-grid">
            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&h=480&fit=crop&auto=format"
                alt="Modern business building in Saudi Arabia"
                style={{ width: '100%', borderRadius: 20, boxShadow: '0 20px 60px rgba(10,22,40,0.12)' }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginBottom: 20, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                {t('The Idea Behind the Name', 'الفكرة وراء الاسم')}
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 16, fontSize: 15, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                {t(
                  'The Desert represents our Arab roots and identity — deeply connected to the region we serve. The Sea represents openness to the world, global markets, and endless opportunities.',
                  'الصحراء تمثل جذورنا العربية وهويتنا — عميقة الارتباط بالمنطقة التي نخدمها. البحر يمثل الانفتاح على العالم والأسواق العالمية والفرص اللامحدودة.'
                )}
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.8, fontSize: 15, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                {t(
                  'Sea of Desert emerged from a vision to bridge local markets with international ones — offering a full ecosystem of trade, logistics, digital services, and healthcare solutions.',
                  'نشأت شركة بحر الصحراء من رؤية لربط الأسواق المحلية بالدولية — وتقديم منظومة متكاملة من التجارة والخدمات اللوجستية والرقمية والصحية.'
                )}
              </p>
            </div>
          </div>

          {/* Values Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 80 }}
            className="values-grid">
            {values.map((v, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: 'white',
                  borderRadius: 16,
                  padding: 28,
                  boxShadow: '0 4px 20px rgba(10,22,40,0.07)',
                  border: '1px solid var(--gray-100)',
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `${v.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: v.color,
                  marginBottom: 16,
                }}>
                  {v.icon}
                </div>
                <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 10, fontSize: 17, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                  {t(v.en, v.ar)}
                </h4>
                <p style={{ color: 'var(--gray-600)', fontSize: 14, lineHeight: 1.7, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                  {t(v.desc.en, v.desc.ar)}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div style={{ background: 'var(--navy)', borderRadius: 24, padding: '48px 48px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: 300, height: 300, background: 'radial-gradient(circle, rgba(26,79,160,0.3), transparent)', borderRadius: '50%' }} />
            <h3 style={{ color: 'white', fontSize: 26, fontWeight: 700, marginBottom: 40, textAlign: 'center', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
              {t('Our Journey', 'رحلتنا')}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}
              className="timeline-grid">
              {/* Connecting line */}
              <div style={{ position: 'absolute', top: 20, left: '12.5%', right: '12.5%', height: 2, background: 'rgba(201,162,39,0.3)', zIndex: 0 }} />
              {timeline.map((item, i) => (
                <div key={i} style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    fontWeight: 800,
                    fontSize: 13,
                    color: 'var(--navy)',
                    fontFamily: 'Poppins',
                  }}>
                    {item.year.slice(2)}
                  </div>
                  <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: 16, marginBottom: 8, fontFamily: 'Poppins' }}>{item.year}</div>
                  <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, lineHeight: 1.6, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t(item.en, item.ar)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .timeline-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .timeline-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
