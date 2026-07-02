import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LangContext'
import { MapPin, Mail, Phone, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const ref = useScrollReveal()
  const { t, dir, lang } = useLang()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      label: { en: 'Location', ar: 'الموقع' },
      value: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
      color: '#1a4fa0',
    },
    {
      icon: <Mail size={20} />,
      label: { en: 'Email', ar: 'البريد الإلكتروني' },
      value: { en: 'info@seaofdesert.sa', ar: 'info@seaofdesert.sa' },
      color: '#006b3e',
    },
    {
      icon: <Phone size={20} />,
      label: { en: 'Phone', ar: 'الهاتف' },
      value: { en: '+966 5X XXX XXXX', ar: '966+ 5X XXX XXXX' },
      color: '#c9a227',
    },
    {
      icon: <MessageCircle size={20} />,
      label: { en: 'WhatsApp', ar: 'واتساب' },
      value: { en: 'Available on WhatsApp', ar: 'متاح على واتساب' },
      color: '#25d366',
    },
    {
      icon: <Clock size={20} />,
      label: { en: 'Business Hours', ar: 'ساعات العمل' },
      value: { en: 'Sun–Thu: 9 AM – 6 PM', ar: 'الأحد–الخميس: 9 ص – 6 م' },
      color: '#0d1f3c',
    },
  ]

  return (
    <section id="contact" dir={dir} style={{ background: 'var(--off-white)', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={ref} className="section-reveal">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="pill-label" style={{ justifyContent: 'center', marginBottom: 16 }}>
              {t("Let's Connect", 'تواصل معنا')}
            </div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 16 }}>
              {t('Get in Touch', 'اتصل بنا')}
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
              {t(
                'Ready to explore business opportunities? Our team is here to help you grow.',
                'هل أنت مستعد لاستكشاف فرص العمل؟ فريقنا هنا لمساعدتك على النمو.'
              )}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 40, alignItems: 'start' }}
            className="contact-grid">
            {/* Left: Contact Info */}
            <div>
              <div style={{
                background: 'var(--navy)',
                borderRadius: 24,
                padding: 36,
                marginBottom: 24,
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(26,79,160,0.3)' }} />
                <h3 style={{ color: 'white', fontSize: 20, fontWeight: 700, marginBottom: 8, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', position: 'relative' }}>
                  {t('Contact Information', 'معلومات التواصل')}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 28, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', position: 'relative' }}>
                  {t("We're ready to assist you.", 'نحن هنا لمساعدتك.')}
                </p>

                {contactInfo.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, position: 'relative' }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: `${c.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: c.color === '#25d366' ? c.color : 'rgba(255,255,255,0.8)',
                      flexShrink: 0,
                    }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                        {t(c.label.en, c.label.ar)}
                      </div>
                      <div style={{ color: 'white', fontSize: 14, fontWeight: 500, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                        {t(c.value.en, c.value.ar)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div style={{
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid var(--gray-200)',
                height: 200,
                background: 'linear-gradient(135deg, #eef4ff, #dbeafe)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 8,
              }}>
                <MapPin size={32} color="#1a4fa0" />
                <span style={{ color: 'var(--royal)', fontWeight: 600, fontSize: 14, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                  {t('Saudi Arabia', 'المملكة العربية السعودية')}
                </span>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div style={{
              background: 'white',
              borderRadius: 24,
              padding: 40,
              boxShadow: '0 4px 30px rgba(10,22,40,0.07)',
              border: '1px solid var(--gray-100)',
            }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '60px 40px' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#edfaf3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#006b3e' }}>
                    <CheckCircle size={36} />
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 12, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t('Message Sent!', 'تم إرسال الرسالة!')}
                  </h3>
                  <p style={{ color: 'var(--gray-600)', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t("We'll be in touch within 24 hours.", 'سنتواصل معك خلال 24 ساعة.')}
                  </p>
                  <button className="btn-primary" style={{ marginTop: 24, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }} onClick={() => setSent(false)}>
                    {t('Send Another', 'إرسال رسالة أخرى')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--navy)', marginBottom: 28, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t('Send Us a Message', 'أرسل لنا رسالة')}
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    {[
                      { field: 'name', label: { en: 'Full Name', ar: 'الاسم الكامل' }, placeholder: { en: 'Your name', ar: 'اسمك' } },
                      { field: 'company', label: { en: 'Company', ar: 'الشركة' }, placeholder: { en: 'Company name', ar: 'اسم الشركة' } },
                    ].map(({ field, label, placeholder }) => (
                      <div key={field}>
                        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--navy)', marginBottom: 6, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                          {t(label.en, label.ar)}
                        </label>
                        <input
                          type="text"
                          placeholder={t(placeholder.en, placeholder.ar)}
                          value={form[field]}
                          onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                          style={{
                            width: '100%',
                            padding: '11px 14px',
                            borderRadius: 10,
                            border: '1.5px solid var(--gray-200)',
                            fontSize: 14,
                            outline: 'none',
                            fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
                            transition: 'border-color 0.2s',
                            boxSizing: 'border-box',
                          }}
                          onFocus={e => (e.target.style.borderColor = 'var(--royal)')}
                          onBlur={e => (e.target.style.borderColor = 'var(--gray-200)')}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    {[
                      { field: 'email', label: { en: 'Email', ar: 'البريد الإلكتروني' }, placeholder: { en: 'your@email.com', ar: 'بريدك@مثال.com' }, type: 'email' },
                      { field: 'phone', label: { en: 'Phone', ar: 'الهاتف' }, placeholder: { en: '+966 5X XXX XXXX', ar: '966+ 5X XXX XXXX' }, type: 'tel' },
                    ].map(({ field, label, placeholder, type }) => (
                      <div key={field}>
                        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--navy)', marginBottom: 6, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                          {t(label.en, label.ar)}
                        </label>
                        <input
                          type={type}
                          placeholder={t(placeholder.en, placeholder.ar)}
                          value={form[field]}
                          onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                          style={{
                            width: '100%',
                            padding: '11px 14px',
                            borderRadius: 10,
                            border: '1.5px solid var(--gray-200)',
                            fontSize: 14,
                            outline: 'none',
                            fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
                            transition: 'border-color 0.2s',
                            boxSizing: 'border-box',
                          }}
                          onFocus={e => (e.target.style.borderColor = 'var(--royal)')}
                          onBlur={e => (e.target.style.borderColor = 'var(--gray-200)')}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--navy)', marginBottom: 6, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                      {t('Message', 'الرسالة')}
                    </label>
                    <textarea
                      placeholder={t('Tell us about your business needs...', 'أخبرنا عن احتياجاتك التجارية...')}
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: 10,
                        border: '1.5px solid var(--gray-200)',
                        fontSize: 14,
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'var(--royal)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--gray-200)')}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '14px 28px', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    <Send size={16} />
                    {t('Send Message', 'إرسال الرسالة')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
