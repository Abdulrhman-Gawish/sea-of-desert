import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LangContext'
import { Network, Globe2, Users2, Cpu, HeartPulse, Ship, Smartphone, Award } from 'lucide-react'

const reasons = [
  { icon: <Network size={26} />, en: 'Strategic Partnerships', ar: 'شراكات استراتيجية', desc: { en: 'Backed by 5 international partners across 4 countries.', ar: 'مدعوم بـ 5 شركاء دوليين في 4 دول.' }, color: '#1a4fa0' },
  { icon: <Globe2 size={26} />, en: 'Global Network', ar: 'شبكة عالمية', desc: { en: 'Active presence in Saudi Arabia, China, Turkey, and Egypt.', ar: 'حضور فعال في المملكة العربية السعودية والصين وتركيا ومصر.' }, color: '#006b3e' },
  { icon: <Users2 size={26} />, en: 'Professional Team', ar: 'فريق محترف', desc: { en: 'Experienced professionals in trade, logistics, and technology.', ar: 'محترفون ذوو خبرة في التجارة واللوجستيات والتكنولوجيا.' }, color: '#c9a227' },
  { icon: <Cpu size={26} />, en: 'Technology Driven', ar: 'مدفوع بالتكنولوجيا', desc: { en: 'Digital-first approach leveraging modern platforms and tools.', ar: 'نهج رقمي أولاً يستفيد من المنصات والأدوات الحديثة.' }, color: '#1a4fa0' },
  { icon: <HeartPulse size={26} />, en: 'Medical Sector', ar: 'القطاع الطبي', desc: { en: 'Premium pharmaceutical products distributed across Saudi Arabia.', ar: 'منتجات صيدلانية متميزة موزعة في المملكة العربية السعودية.' }, color: '#c0392b' },
  { icon: <Ship size={26} />, en: 'Logistics Expertise', ar: 'خبرة لوجستية', desc: { en: 'Sea freight and supply chain management at international standards.', ar: 'شحن بحري وإدارة سلسلة التوريد وفق معايير دولية.' }, color: '#006b3e' },
  { icon: <Smartphone size={26} />, en: 'Digital Transformation', ar: 'التحول الرقمي', desc: { en: 'Helping businesses digitize operations and reach new markets online.', ar: 'مساعدة الشركات على رقمنة العمليات والوصول إلى أسواق جديدة عبر الإنترنت.' }, color: '#c9a227' },
  { icon: <Award size={26} />, en: 'Quality Commitment', ar: 'الالتزام بالجودة', desc: { en: '100% client commitment with transparent processes and measurable results.', ar: '100% التزام بالعملاء مع عمليات شفافة ونتائج قابلة للقياس.' }, color: '#1a4fa0' },
]

export default function WhyUs() {
  const ref = useScrollReveal()
  const { t, dir, lang } = useLang()

  return (
    <section dir={dir} style={{ background: 'var(--off-white)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref} className="section-reveal">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
            className="whyus-grid">
            <div>
              <div className="pill-label" style={{ marginBottom: 16 }}>
                {t('Why Choose Us', 'لماذا تختارنا')}
              </div>
              <h2 className="section-title" style={{ marginBottom: 20 }}>
                {t('Your Trusted Business Partner', 'شريكك التجاري الموثوق')}
              </h2>
              <p className="section-subtitle" style={{ marginBottom: 32 }}>
                {t(
                  'We combine global reach with local expertise — delivering integrated solutions that help businesses grow across borders.',
                  'نجمع بين الوصول العالمي والخبرة المحلية — لنقدم حلولاً متكاملة تساعد الشركات على النمو عبر الحدود.'
                )}
              </p>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=580&h=380&fit=crop&auto=format"
                alt="Business team meeting"
                style={{ width: '100%', borderRadius: 18, boxShadow: '0 20px 50px rgba(10,22,40,0.1)' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {reasons.map((r, i) => (
                <div
                  key={i}
                  className="card-hover"
                  style={{
                    background: 'white',
                    borderRadius: 16,
                    padding: 24,
                    border: '1px solid var(--gray-100)',
                    boxShadow: '0 2px 12px rgba(10,22,40,0.04)',
                  }}
                >
                  <div style={{
                    width: 50,
                    height: 50,
                    borderRadius: 12,
                    background: `${r.color}12`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: r.color,
                    marginBottom: 14,
                  }}>
                    {r.icon}
                  </div>
                  <h4 style={{ fontWeight: 700, fontSize: 15, color: 'var(--navy)', marginBottom: 8, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t(r.en, r.ar)}
                  </h4>
                  <p style={{ color: 'var(--gray-600)', fontSize: 13, lineHeight: 1.6, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t(r.desc.en, r.desc.ar)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .whyus-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
