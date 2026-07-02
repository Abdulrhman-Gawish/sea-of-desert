import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Briefcase, Ship } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function BusinessAreaCards() {
  const { t, dir, lang } = useLang()
  
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section className="section-pad" style={{ background: 'var(--off-white)', paddingTop: 0 }}>
      <div className="container">
        
        <div className="ba-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 32 }}>
          
          {/* Card 1: Business Solutions */}
          <Link to="/business-solutions" style={{ textDecoration: 'none' }}>
            <div className="card-hover" style={{
              background: 'white',
              borderRadius: 24,
              padding: 36,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--gray-100)'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                right: dir === 'rtl' ? 'auto' : 0,
                left: dir === 'rtl' ? 0 : 'auto',
                width: 160,
                height: 160,
                background: 'radial-gradient(circle, rgba(26,79,160,0.06), transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(30%, -30%)'
              }} />
              
              <div style={{ width: 52, height: 52, borderRadius: 16, background: 'var(--gray-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--royal)', marginBottom: 24, border: '1px solid var(--gray-100)' }}>
                <Briefcase size={26} />
              </div>
              
              <h3 style={{ fontSize: 24, fontWeight: 800, color: 'var(--navy)', marginBottom: 12, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                {t('card_business_title')}
              </h3>
              
              <p style={{ color: 'var(--gray-600)', fontSize: 15, lineHeight: 1.7, marginBottom: 32, flexGrow: 1 }}>
                {t('card_business_desc')}
              </p>
              
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: 'var(--royal)',
                fontWeight: 600,
                fontSize: 14,
                marginTop: 'auto'
              }}>
                {t('btn_explore')}
                <Arrow size={16} />
              </div>
            </div>
          </Link>

          {/* Card 2: Supply Chain & Trading */}
          <Link to="/supply-chain" style={{ textDecoration: 'none' }}>
            <div className="card-hover" style={{
              background: 'var(--navy)',
              borderRadius: 24,
              padding: 36,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: dir === 'rtl' ? 'auto' : 0,
                right: dir === 'rtl' ? 0 : 'auto',
                width: 240,
                height: 240,
                background: 'radial-gradient(circle, rgba(0,107,62,0.15), transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(-20%, 20%)'
              }} />
              
              <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-light)', marginBottom: 24, border: '1px solid rgba(255,255,255,0.08)' }}>
                <Ship size={26} />
              </div>
              
              <h3 style={{ fontSize: 24, fontWeight: 800, color: 'white', marginBottom: 12, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                {t('card_supply_title')}
              </h3>
              
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.7, marginBottom: 32, flexGrow: 1 }}>
                {t('card_supply_desc')}
              </p>
              
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: 'var(--gold)',
                fontWeight: 600,
                fontSize: 14,
                marginTop: 'auto'
              }}>
                {t('btn_explore')}
                <Arrow size={16} />
              </div>
            </div>
          </Link>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ba-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
