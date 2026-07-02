import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function FloatingCTA() {
  const { t, lang } = useLang()
  const [show, setShow] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 32,
      right: 32,
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 12,
    }}>
      {expanded && (
        <div className="glass-white" style={{
          borderRadius: 16,
          padding: 20,
          boxShadow: '0 8px 30px rgba(10,22,40,0.15)',
          maxWidth: 220,
          animation: 'fadeUp 0.3s ease forwards',
        }}>
          <p style={{ fontSize: 14, color: 'var(--navy)', fontWeight: 600, marginBottom: 12, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
            {t('Ready to grow globally?', 'مستعد للنمو عالمياً؟')}
          </p>
          <a
            href="#contact"
            onClick={() => setExpanded(false)}
            className="btn-primary"
            style={{ textDecoration: 'none', fontSize: 13, padding: '9px 18px', width: '100%', justifyContent: 'center', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}
          >
            {t("Let's Talk", 'تحدث معنا')}
          </a>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25d366, #128c7e)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          transition: 'transform 0.2s',
          animation: 'float 3s ease-in-out infinite',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        aria-label="WhatsApp"
      >
        {expanded ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  )
}
