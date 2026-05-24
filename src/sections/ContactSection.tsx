import React from 'react';
import type { Lang } from '../types';
import { SectionHeader } from '../components/SharedCards';
import building from '../assets/incubator-building.jpg';

/* ─── CONTACT SECTION ─── */
const ContactSection: React.FC<{ lang: Lang }> = ({ lang }) => {
  const isRTL = lang === 'AR';
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', faculty: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const [focused, setFocused] = React.useState<string | null>(null);

  const t = {
    EN: {
      label: 'Get in Touch',
      title: 'Apply or ask us anything.',
      sub: 'All faculties welcome. We respond to every message within 3 business days.',
      fName: 'Full Name', fEmail: 'Email Address', fFac: 'Faculty', fMsg: 'Tell us about your startup idea',
      fSubject: 'Subject',
      selectSubject: 'Select a subject',
      subjects: ['Incubation Application','Resolution 1275 Query','Label Tagging Info','Patent / INAPI Support','Partnership','General Enquiry'],
      submit: 'Send Message',
      thanks: "Message sent — we'll be in touch within 3 days.",
      facs: ['Science','Technology','Humanities & Social Sciences','Economics, Business & Management','Mathematics & Informatics','Law & Political Science','Physical & Sporting Activities','Other'],
      selectFac: 'Select faculty',
      infoTitle: 'Visit or write to us',
      addressTitle: 'Campus',
      address: 'Université Mohamed Boudiaf\nRoute Ichbilia, M\'Sila 28000, Algeria',
      emailTitle: 'Email',
      hoursTitle: 'Hours',
      hours: 'Sun – Thu · 8:30 – 17:00',
    },
    FR: {
      label: 'Nous contacter',
      title: 'Candidatez ou posez-nous vos questions.',
      sub: 'Toutes facultés bienvenues. Nous répondons sous 3 jours ouvrés.',
      fName: 'Nom complet', fEmail: 'Adresse email', fFac: 'Faculté', fMsg: 'Parlez-nous de votre idée',
      fSubject: 'Sujet',
      selectSubject: 'Choisir un sujet',
      subjects: ['Candidature à l\'incubation','Question Résolution 1275','Info Label Tagging','Support brevets / INAPI','Partenariat','Demande générale'],
      submit: 'Envoyer le message',
      thanks: 'Message envoyé — nous reviendrons vers vous sous 3 jours.',
      facs: ['Sciences','Technologie','Sciences humaines & sociales','Économie, commerce & gestion','Mathématiques & informatique','Droit & sciences politiques','Activités physiques & sportives','Autre'],
      selectFac: 'Choisir une faculté',
      infoTitle: 'Venez nous voir, écrivez-nous',
      addressTitle: 'Campus',
      address: 'Université Mohamed Boudiaf\nRoute Ichbilia, M\'Sila 28000, Algérie',
      emailTitle: 'Email',
      hoursTitle: 'Horaires',
      hours: 'Dim – Jeu · 8h30 – 17h00',
    },
    AR: {
      label: 'تواصل معنا',
      title: 'تقدّم أو اسألنا عن أي شيء.',
      sub: 'جميع الكليات مرحب بها. نرد على كل رسالة خلال 3 أيام عمل.',
      fName: 'الاسم الكامل', fEmail: 'البريد الإلكتروني', fFac: 'الكلية', fMsg: 'أخبرنا عن فكرة شركتك الناشئة',
      fSubject: 'الموضوع',
      selectSubject: 'اختر الموضوع',
      subjects: ['طلب حضانة','استفسار حول القرار 1275','معلومات عن الوسم (Label)','دعم براءات الاختراع / INAPI','شراكة','استفسار عام'],
      submit: 'إرسال الرسالة',
      thanks: 'تم إرسال الرسالة — سنتواصل معك خلال 3 أيام.',
      facs: ['العلوم','التكنولوجيا','العلوم الإنسانية والاجتماعية','الاقتصاد والتجارة والتسيير','الرياضيات والإعلام الآلي','الحقوق والعلوم السياسية','النشاطات البدنية والرياضية','أخرى'],
      selectFac: 'اختر الكلية',
      infoTitle: 'زرنا أو راسلنا',
      addressTitle: 'الحرم الجامعي',
      address: 'جامعة محمد بوضياف\nطريق إشبيلية، المسيلة 28000، الجزائر',
      emailTitle: 'البريد',
      hoursTitle: 'ساعات العمل',
      hours: 'الأحد – الخميس · 8:30 – 17:00',
    },
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSent(true);
  };

  const inputBase: React.CSSProperties = {
    width: '100%', padding: '12px 16px',
    background: '#fff',
    border: '1px solid #E4E6EF', borderRadius: 12,
    fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: '#121420',
    outline: 'none', transition: 'all 0.2s ease',
  };

  const inputStyle = (key: string): React.CSSProperties => ({
    ...inputBase,
    borderColor: focused === key ? '#1B4FBB' : '#E4E6EF',
    boxShadow: focused === key ? '0 0 0 4px rgba(27,79,187,0.10)' : 'none',
  });

  return (
    <section id="contact" data-screen-label="Contact" style={{
      padding: '6rem 2rem', background: '#F7F8FC',
      direction: isRTL ? 'rtl' : 'ltr',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader label={t.label} title={t.title} subtitle={t.sub} center />

        <div data-contact-frame style={{
          background: '#fff',
          borderRadius: 28,
          border: '1px solid #E4E6EF',
          boxShadow: '0 20px 60px rgba(13,45,114,0.10), 0 4px 16px rgba(27,79,187,0.04)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          alignItems: 'stretch',
        }}>
          {/* Form */}
          <div style={{
            padding: 44,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: '#EBF5D8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <svg width="32" height="32" fill="none" stroke="#5A8A22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <div style={{
                  fontFamily: "'Syne',sans-serif", fontSize: '1.3rem',
                  fontWeight: 700, color: '#121420', marginBottom: 8,
                }}>{t.thanks}</div>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', faculty: '', message: '' }); }} style={{
                  marginTop: 16, padding: '8px 18px',
                  background: 'transparent', border: '1px solid #E4E6EF',
                  borderRadius: 9999, fontSize: 13, color: '#6B7089',
                  cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
                }}>{ { EN: 'Send another', FR: 'Envoyer un autre', AR: 'إرسال أخرى' }[lang] }</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div data-contact-name-email style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                  {([
                    { key: 'name' as const, label: t.fName, type: 'text', ph: { EN: 'Ahmed Benchabane', FR: 'Ahmed Benchabane', AR: 'أحمد بن شعبان' }[lang] },
                    { key: 'email' as const, label: t.fEmail, type: 'email', ph: 'you@univ-msila.dz' },
                  ]).map(f => (
                    <div key={f.key}>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#383D58', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{f.label}</label>
                      <input
                        type={f.type} value={form[f.key]} placeholder={f.ph}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        onFocus={() => setFocused(f.key)} onBlur={() => setFocused(null)}
                        style={inputStyle(f.key)}
                      />
                    </div>
                  ))}
                </div>
                <div data-contact-name-email style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#383D58', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.fSubject}</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle('subject'),
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7089' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: (isRTL ? 'left' : 'right') + ' 14px center',
                        paddingInlineEnd: 36,
                        appearance: 'none', WebkitAppearance: 'none',
                      }}
                    >
                      <option value="">{t.selectSubject}</option>
                      {t.subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#383D58', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.fFac}</label>
                    <select
                      value={form.faculty}
                      onChange={e => setForm({ ...form, faculty: e.target.value })}
                      onFocus={() => setFocused('faculty')} onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle('faculty'),
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7089' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: (isRTL ? 'left' : 'right') + ' 14px center',
                        paddingInlineEnd: 36,
                        appearance: 'none', WebkitAppearance: 'none',
                      }}
                    >
                      <option value="">{t.selectFac}</option>
                      {t.facs.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: 22 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#383D58', marginBottom: 7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.fMsg}</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle('message'), height: 130, resize: 'none', lineHeight: 1.5 }}
                  />
                </div>
                <button type="submit" style={{
                  width: '100%', height: 52, background: '#1B4FBB', color: '#fff',
                  border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 600,
                  cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
                  boxShadow: '0 4px 16px rgba(27,79,187,0.25)',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#2762D8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1B4FBB'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {t.submit}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={isRTL ? 'M19 12H5M11 5l-7 7 7 7' : 'M5 12h14M13 5l7 7-7 7'}/>
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Info panel — merged into the same frame */}
          <div style={{
            background: `linear-gradient(135deg, rgba(13,45,114,0.92) 0%, rgba(27,79,187,0.78) 100%), url(${building}) center/cover no-repeat`,
            padding: 44, color: '#fff',
            position: 'relative', overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              position: 'absolute', bottom: -80, right: -80,
              width: 240, height: 240, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(125,184,58,0.35) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', top: -90, left: -90,
              width: 200, height: 200, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              fontFamily: "'Syne',sans-serif", fontSize: '1.4rem',
              fontWeight: 700, marginBottom: 6, letterSpacing: '-0.01em',
              position: 'relative',
            }}>{t.infoTitle}</div>
            <div style={{
              fontSize: 13, color: 'rgba(255,255,255,0.7)',
              marginBottom: 24, lineHeight: 1.55,
              position: 'relative',
            }}>{ { EN: "We're on campus and happy to meet in person.", FR: "Nous sommes sur le campus, ravis de vous rencontrer.", AR: "نحن في الحرم الجامعي ويسعدنا لقاؤك." }[lang] }</div>

            <div style={{ position: 'relative', flex: 1 }}>
              {[
                {
                  title: t.addressTitle,
                  value: t.address,
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4E390" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                },
                {
                  title: t.emailTitle,
                  value: 'incubateur@univ-msila.dz',
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4E390" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                },
                {
                  title: t.hoursTitle,
                  value: t.hours,
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4E390" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                  padding: '18px 0',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: 'rgba(125,184,58,0.18)',
                    border: '1px solid rgba(125,184,58,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ paddingTop: 5 }}>
                    <div style={{
                      fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.55)',
                      textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4,
                    }}>{item.title}</div>
                    <div style={{
                      fontSize: 14, color: '#fff', lineHeight: 1.55,
                      whiteSpace: 'pre-line',
                    }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
