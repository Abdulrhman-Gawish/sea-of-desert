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
      color: 'var(--royal)',
    },
    {
      icon: <Mail size={20} />,
      label: { en: 'Email', ar: 'البريد الإلكتروني' },
      value: { en: 'info@seaofdesert.sa', ar: 'info@seaofdesert.sa' },
      color: 'var(--green)',
    },
    {
      icon: <Phone size={20} />,
      label: { en: 'Phone', ar: 'الهاتف' },
      value: { en: '+966 5X XXX XXXX', ar: '966+ 5X XXX XXXX' },
      color: 'var(--gold)',
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
      color: 'var(--navy-mid)',
    },
  ]

  return (
    <section id="contact" dir={dir} className="section-pad" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div ref={ref} className="section-reveal">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="pill-label" style={{ justifyContent: 'center', marginBottom: 16 }}>
              {t('contact_pill')}
            </div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 16 }}>
              {t('contact_title')}
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
              {t('contact_subtitle')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 40, alignItems: 'start' }} className="contact-grid">
            {/* Left: Contact Info */}
            <div>
              <div style={{
                background: 'var(--navy)',
                borderRadius: 24,
                padding: 36,
                marginBottom: 24,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(26,79,160,0.3)' }} />
                <h3 style={{ color: 'white', fontSize: 20, fontWeight: 700, marginBottom: 8, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', position: 'relative' }}>
                  {t('Contact Information', 'Contact Information', 'معلومات التواصل')}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, marginBottom: 28, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins', position: 'relative' }}>
                  {t("We're ready to assist you.", "We're ready to assist you.", 'نحن هنا لمساعدتك.')}
                </p>

                {contactInfo.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, position: 'relative' }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: c.color === '#25d366' ? c.color : 'rgba(255,255,255,0.9)',
                      flexShrink: 0,
                    }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                        {lang === 'en' ? c.label.en : c.label.ar}
                      </div>
                      <div style={{ color: 'white', fontSize: 14, fontWeight: 500, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                        {lang === 'en' ? c.value.en : c.value.ar}
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
                <MapPin size={32} color="var(--royal)" />
                <span style={{ color: 'var(--royal)', fontWeight: 600, fontSize: 14, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                  {t('Saudi Arabia', 'Saudi Arabia', 'المملكة العربية السعودية')}
                </span>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div style={{
              background: 'white',
              borderRadius: 24,
              padding: 40,
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--gray-100)',
            }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '60px 40px', animation: 'fadeIn 0.5s ease' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#edfaf3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--green)' }}>
                    <CheckCircle size={36} />
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--navy)', marginBottom: 12, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t('Message Sent!', 'Message Sent!', 'تم إرسال الرسالة!')}
                  </h3>
                  <p style={{ color: 'var(--gray-600)', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t("We'll be in touch within 24 hours.", "We'll be in touch within 24 hours.", 'سنتواصل معك خلال 24 ساعة.')}
                  </p>
                  <button className="btn-secondary" style={{ marginTop: 24, color: 'var(--royal)', borderColor: 'var(--royal)', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }} onClick={() => setSent(false)}>
                    {t('Send Another', 'Send Another', 'إرسال رسالة أخرى')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ animation: 'fadeIn 0.5s ease' }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--navy)', marginBottom: 28, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    {t('Send Us a Message', 'Send Us a Message', 'أرسل لنا رسالة')}
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="form-row">
                    {[
                      { field: 'name', label: { en: 'Full Name', ar: 'الاسم الكامل' }, placeholder: { en: 'Your name', ar: 'اسمك' } },
                      { field: 'company', label: { en: 'Company', ar: 'الشركة' }, placeholder: { en: 'Company name', ar: 'اسم الشركة' } },
                    ].map(({ field, label, placeholder }) => (
                      <div key={field}>
                        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--navy)', marginBottom: 6, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                          {lang === 'en' ? label.en : label.ar}
                        </label>
                        <input
                          type="text"
                          placeholder={lang === 'en' ? placeholder.en : placeholder.ar}
                          value={form[field]}
                          onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: 12,
                            border: '1.5px solid var(--gray-200)',
                            fontSize: 14,
                            outline: 'none',
                            fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
                            transition: 'border-color 0.2s',
                            boxSizing: 'border-box',
                            background: 'var(--gray-50)'
                          }}
                          onFocus={e => (e.target.style.borderColor = 'var(--royal)')}
                          onBlur={e => (e.target.style.borderColor = 'var(--gray-200)')}
                          required
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="form-row">
                    {[
                      { field: 'email', label: { en: 'Email', ar: 'البريد الإلكتروني' }, placeholder: { en: 'your@email.com', ar: 'بريدك@مثال.com' }, type: 'email' },
                      { field: 'phone', label: { en: 'Phone', ar: 'الهاتف' }, placeholder: { en: '+966 5X XXX XXXX', ar: '966+ 5X XXX XXXX' }, type: 'tel' },
                    ].map(({ field, label, placeholder, type }) => (
                      <div key={field}>
                        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--navy)', marginBottom: 6, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                          {lang === 'en' ? label.en : label.ar}
                        </label>
                        <input
                          type={type}
                          placeholder={lang === 'en' ? placeholder.en : placeholder.ar}
                          value={form[field]}
                          onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: 12,
                            border: '1.5px solid var(--gray-200)',
                            fontSize: 14,
                            outline: 'none',
                            fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
                            transition: 'border-color 0.2s',
                            boxSizing: 'border-box',
                            background: 'var(--gray-50)'
                          }}
                          onFocus={e => (e.target.style.borderColor = 'var(--royal)')}
                          onBlur={e => (e.target.style.borderColor = 'var(--gray-200)')}
                          required
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--navy)', marginBottom: 6, fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                      {t('Message', 'Message', 'الرسالة')}
                    </label>
                    <textarea
                      placeholder={t('Tell us about your business needs...', 'Tell us about your business needs...', 'أخبرنا عن احتياجاتك التجارية...')}
                      rows={4}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: 12,
                        border: '1.5px solid var(--gray-200)',
                        fontSize: 14,
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins',
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                        background: 'var(--gray-50)'
                      }}
                      onFocus={e => (e.target.style.borderColor = 'var(--royal)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--gray-200)')}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '16px', fontFamily: lang === 'ar' ? 'Cairo' : 'Poppins' }}>
                    <Send size={16} />
                    {t('Send Message', 'Send Message', 'إرسال الرسالة')}
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
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
