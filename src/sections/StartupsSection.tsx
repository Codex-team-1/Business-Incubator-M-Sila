import type { Lang } from '../types';
import { SectionHeader, StartupCard } from '../components/SharedCards';
import sign from '../assets/incubator-sign.jpg';

/* ─── STARTUP SPACE / PORTFOLIO ─── */
const StartupsSection: React.FC<{ lang: Lang; onNav: (id: string) => void }> = ({ lang, onNav }) => {
  const isRTL = lang === 'AR';
  const t = {
    EN: {
      label: 'Project / Startup Space',
      title: 'Inside the M\'Sila startup space.',
      sub: "A dedicated co-working hub on the Boudiaf campus — and 120+ alumni startups built within these walls.",
      spaceTitle: 'The co-working hub',
      spaceSub: 'Open access for incubated teams — equipped studios, meeting rooms, and a quiet zone for deep work.',
      portfolioLabel: 'Recent Cohort',
      portfolioTitle: 'Startups we\'ve helped launch.',
      portfolioSub: 'From agriculture to health tech — our cohorts represent every faculty in M\'Sila.',
      cta: 'Your startup could be next.',
      ctaBtn: 'Apply Now',
      features: [
        'Open-access workstations & meeting rooms',
        'High-speed fibre internet & power backup',
        'On-campus, 5 minutes from any faculty',
        'Free for incubated startups, 24/7 access',
      ],
    },
    FR: {
      label: 'Espace projets / Startups',
      title: 'À l\'intérieur de l\'espace startup de M\'Sila.',
      sub: "Un hub co-working dédié sur le campus Boudiaf — et 120+ startups alumni construites entre ces murs.",
      spaceTitle: 'Le hub co-working',
      spaceSub: 'Accès libre pour les équipes incubées — studios équipés, salles de réunion, zone calme.',
      portfolioLabel: 'Cohorte récente',
      portfolioTitle: 'Les startups que nous avons aidé à lancer.',
      portfolioSub: 'De l\'agriculture à la santé numérique — nos cohortes représentent toutes les facultés.',
      cta: 'Votre startup pourrait être la prochaine.',
      ctaBtn: 'Candidater maintenant',
      features: [
        'Postes de travail et salles de réunion en libre accès',
        'Internet fibre haut débit & onduleur',
        'Sur le campus, à 5 min de toute faculté',
        'Gratuit pour startups incubées, accès 24/7',
      ],
    },
    AR: {
      label: 'فضاء المشاريع / الشركات الناشئة',
      title: 'داخل فضاء الشركات الناشئة في مسيلة.',
      sub: 'مركز عمل مشترك مخصص في حرم بوضياف — و+120 شركة ناشئة خريجة بُنيت بين هذه الجدران.',
      spaceTitle: 'مركز العمل المشترك',
      spaceSub: 'وصول مفتوح للفرق المحتضنة — استوديوهات مجهزة وغرف اجتماعات ومنطقة هادئة.',
      portfolioLabel: 'الدفعة الأخيرة',
      portfolioTitle: 'الشركات الناشئة التي ساعدنا في إطلاقها.',
      portfolioSub: 'من الزراعة إلى التقنية الصحية — تمثل مجموعاتنا جميع كليات مسيلة.',
      cta: 'قد تكون شركتك الناشئة التالية.',
      ctaBtn: 'تقدّم الآن',
      features: [
        'محطات عمل وغرف اجتماعات بوصول مفتوح',
        'إنترنت ألياف عالي السرعة ومولّد احتياطي',
        'داخل الحرم الجامعي، 5 دقائق من أي كلية',
        'مجاني للشركات المحتضنة، وصول 24/7',
      ],
    },
  }[lang];

  const startups: {
    tag: string; name: string; year: string; desc: Record<Lang, string>; faculty: Record<Lang, string>;
  }[] = [
    { tag: 'AgriTech', name: "AgroTech M'Sila", year: '2023', desc: { EN: 'Precision agriculture solutions for the Hauts Plateaux region.', FR: "Solutions d'agriculture de précision pour les Hauts Plateaux.", AR: 'حلول الزراعة الدقيقة لمنطقة الهضاب العليا.' }, faculty: { EN: 'Sciences & Tech', FR: 'Sciences & Tech', AR: 'العلوم والتكنولوجيا' } },
    { tag: 'EdTech', name: 'StudyLink DZ', year: '2023', desc: { EN: 'Online tutoring platform connecting university students with peers.', FR: 'Plateforme de tutorat en ligne entre étudiants.', AR: 'منصة تدريس عبر الإنترنت تربط الطلاب الجامعيين.' }, faculty: { EN: 'Computer Science', FR: 'Informatique', AR: 'علوم الحاسوب' } },
    { tag: 'HealthTech', name: 'MediBridge', year: '2022', desc: { EN: 'Digital health records and telemedicine for rural Algerian clinics.', FR: 'Dossiers de santé numériques et télémédecine.', AR: 'السجلات الصحية الرقمية والطب عن بُعد.' }, faculty: { EN: 'Medicine', FR: 'Médecine', AR: 'الطب' } },
    { tag: 'LegalTech', name: 'JuriDZ', year: '2023', desc: { EN: 'Automated startup legal documentation for early-stage founders.', FR: 'Documentation juridique automatisée pour entrepreneurs.', AR: 'توثيق قانوني آلي للمؤسسين الجدد.' }, faculty: { EN: 'Law', FR: 'Droit', AR: 'الحقوق' } },
    { tag: 'CleanTech', name: 'SolarStep', year: '2022', desc: { EN: 'Affordable solar micro-grid kits for off-grid M\'Sila communities.', FR: 'Kits micro-réseau solaire abordables.', AR: 'أطقم شبكة طاقة شمسية ميكروية.' }, faculty: { EN: 'Engineering', FR: 'Ingénierie', AR: 'الهندسة' } },
    { tag: 'FoodTech', name: 'Zitouna Pack', year: '2023', desc: { EN: "Sustainable olive oil packaging and e-commerce export platform.", FR: 'Emballage huile d\'olive durable & export.', AR: 'تغليف زيت الزيتون المستدام ومنصة التصدير.' }, faculty: { EN: 'Economics', FR: 'Économie', AR: 'الاقتصاد' } },
  ];

  return (
    <section id="startups" data-screen-label="Startups" style={{
      background: '#fff', direction: isRTL ? 'rtl' : 'ltr',
    }}>
      {/* Space hero block */}
      <div style={{ padding: '6rem 2rem 3rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeader label={t.label} title={t.title} subtitle={t.sub} center />

          <div data-startups-hero style={{
            display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '3rem',
            alignItems: 'stretch', marginBottom: '4rem',
          }}>
            {/* Photo block — the actual incubator entrance */}
            <div style={{
              borderRadius: 24, overflow: 'hidden', position: 'relative',
              minHeight: 420,
              backgroundImage: `url(${sign})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              boxShadow: '0 20px 60px rgba(13,45,114,0.18)',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(13,45,114,0.0) 0%, rgba(13,45,114,0.05) 45%, rgba(13,45,114,0.88) 100%)',
              }} />
              <div style={{
                position: 'absolute', bottom: 28, left: 28, right: 28,
                color: '#fff',
              }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '6px 12px', borderRadius: 9999,
                  background: 'rgba(125,184,58,0.25)',
                  border: '1px solid rgba(125,184,58,0.45)',
                  fontSize: 11, fontWeight: 700, color: '#C4E390',
                  textTransform: 'uppercase', letterSpacing: '0.07em',
                  marginBottom: 14, fontFamily: "'DM Sans',sans-serif",
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7DB83A' }} />
                  Open now
                </span>
                <div style={{
                  fontFamily: "'Syne',sans-serif", fontSize: '1.6rem',
                  fontWeight: 700, marginBottom: 8, letterSpacing: '-0.01em',
                  lineHeight: 1.15,
                }}>{t.spaceTitle}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.88)', lineHeight: 1.6, maxWidth: 380 }}>{t.spaceSub}</div>
              </div>
            </div>

            {/* Features list */}
            <div style={{
              background: '#F7F8FC', border: '1px solid #E4E6EF',
              borderRadius: 24, padding: 32,
              display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18,
            }}>
              {t.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: '#EBF5D8', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A8A22" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <div style={{ fontSize: 15, color: '#383D58', lineHeight: 1.55, paddingTop: 3 }}>{f}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio */}
          <div style={{ marginBottom: 32, textAlign: 'center' }}>
            <span style={{
              display: 'inline-block', padding: '5px 14px', borderRadius: 100,
              fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
              background: '#EBF5D8', color: '#5A8A22', marginBottom: 14,
            }}>{t.portfolioLabel}</span>
            <div style={{
              fontFamily: "'Syne',sans-serif", fontSize: '1.6rem',
              fontWeight: 700, color: '#121420', marginBottom: 10, letterSpacing: '-0.01em',
            }}>{t.portfolioTitle}</div>
            <div style={{ fontSize: 15, color: '#6B7089', maxWidth: 560, margin: '0 auto' }}>{t.portfolioSub}</div>
          </div>

          <div data-startups-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {startups.map((s, i) => (
              <StartupCard
                key={i}
                tag={s.tag}
                name={s.name}
                year={s.year}
                desc={s.desc[lang]}
                faculty={s.faculty[lang]}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA banner */}
      <div style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          background: 'linear-gradient(135deg, #5A8A22 0%, #7DB83A 100%)',
          borderRadius: 28, padding: '3rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, flexWrap: 'wrap',
          boxShadow: '0 20px 60px rgba(90,138,34,0.22)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -80, right: -80,
            width: 280, height: 280, borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
          }} />
          <div style={{ position: 'relative', maxWidth: 520 }}>
            <div style={{
              fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)',
              fontWeight: 700, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.01em',
            }}>{t.cta}</div>
          </div>
          <button onClick={() => onNav('contact')} style={{
            padding: '0 30px', height: 54, background: '#fff', color: '#5A8A22',
            border: 'none', borderRadius: 14, fontSize: 15, fontWeight: 700,
            cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            transition: 'all 0.2s ease', position: 'relative',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {t.ctaBtn}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A8A22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={isRTL ? 'M19 12H5M11 5l-7 7 7 7' : 'M5 12h14M13 5l7 7-7 7'}/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartupsSection;
