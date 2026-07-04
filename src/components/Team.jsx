import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LangContext'
import { User } from 'lucide-react'

const teamMembers = [
  { nameKey: 'team_1_name', positionKey: 'team_1_position', image: '/images/salem.png' },
  { nameKey: 'team_2_name', positionKey: 'team_2_position', image: '/images/ali.png' },
  { nameKey: 'team_3_name', positionKey: 'team_3_position', image: '/images/mohamed.png' },
]

function TeamCard({ nameKey, positionKey, image, index }) {
  const { t, lang } = useLang()

  return (
    <div
      className="team-card"
      style={{
        background: 'white',
        borderRadius: 24,
        overflow: 'hidden',
        border: '1px solid var(--gray-100)',
        animationDelay: `${index * 0.12}s`,
      }}
    >
      {/* Image or Placeholder */}
      <div style={{
        width: '100%',
        aspectRatio: '1 / 1',
        background: 'linear-gradient(135deg, var(--gray-50), var(--gray-100))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {image ? (
          <img 
            src={image} 
            alt={t(nameKey)} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 30% 40%, rgba(26,79,160,0.04), transparent 60%)',
            }} />
            <div style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'rgba(26, 79, 160, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gray-400)',
            }}>
              <User size={36} strokeWidth={1.5} />
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '24px 28px 28px', textAlign: 'center' }}>
        <h4 style={{
          fontSize: 18,
          fontWeight: 700,
          color: 'var(--navy)',
          marginBottom: 6,
          fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
          lineHeight: 1.3,
        }}>
          {t(nameKey)}
        </h4>
        <p style={{
          fontSize: 14,
          fontWeight: 500,
          color: 'var(--royal)',
          fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
          lineHeight: 1.5,
        }}>
          {t(positionKey)}
        </p>
      </div>
    </div>
  )
}

export default function Team() {
  const ref = useScrollReveal()
  const { t, dir } = useLang()

  return (
    <section dir={dir} className="section-pad" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div ref={ref} className="section-reveal">

          {/* Header */}
          <div className="text-center" style={{ marginBottom: 64 }}>
            <div className="pill-label" style={{ marginBottom: 14 }}>{t('team_pill')}</div>
            <h2 className="section-title" style={{ marginBottom: 14, textAlign: 'center' }}>{t('team_title')}</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>{t('team_subtitle')}</p>
          </div>

          {/* Team Grid */}
          <div className="team-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 28,
            maxWidth: 960,
            margin: '0 auto',
          }}>
            {teamMembers.map((member, i) => (
              <TeamCard key={i} {...member} index={i} />
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .team-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(10, 22, 40, 0.10), 0 0 0 1px rgba(26, 79, 160, 0.06);
        }
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: 1fr !important; max-width: 360px !important; }
        }
      `}</style>
    </section>
  )
}
