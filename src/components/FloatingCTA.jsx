import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function FloatingCTA() {
  const { t, lang, dir } = useLang()
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
      right: dir === 'rtl' ? 'auto' : 32,
      left: dir === 'rtl' ? 32 : 'auto',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: dir === 'rtl' ? 'flex-start' : 'flex-end',
      gap: 12,
    }}>
      {expanded && (
        <div className="glass-white" style={{
          borderRadius: 16,
          padding: 20,
          boxShadow: 'var(--shadow-lg)',
          maxWidth: 240,
          animation: 'fadeUp 0.3s ease forwards',
        }}>
          <p style={{ fontSize: 14, color: 'var(--navy)', fontWeight: 600, marginBottom: 12, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
            {t('Ready to grow globally?', 'Ready to grow globally?', 'مستعد للنمو عالمياً؟')}
          </p>
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noreferrer"
            onClick={() => setExpanded(false)}
            style={{
              background: '#25d366',
              color: 'white',
              textDecoration: 'none',
              fontSize: 14,
              padding: '10px 18px',
              borderRadius: 8,
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 600,
              fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
              boxShadow: '0 4px 12px rgba(37,211,102,0.3)',
            }}
          >
            {t("Let's Talk", "Let's Talk", 'تحدث معنا')}
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
          boxShadow: '0 8px 24px rgba(37,211,102,0.4)',
          transition: 'transform 0.2s',
          animation: expanded ? 'none' : 'float 3s ease-in-out infinite',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        aria-label="WhatsApp"
      >
        {expanded ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
