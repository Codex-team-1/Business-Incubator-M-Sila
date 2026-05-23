import type { Lang } from '../types';
import { SectionHeader, ProgramCard } from '../components/SharedCards';

/* ─── PROGRAMS & TRAINING ─── */
const ProgramsSection: React.FC<{ lang: Lang; onNav: (id: string) => void }> = ({ lang, onNav }) => {
  const isRTL = lang === 'AR';
  const t = {
    EN: {
      label: 'Programs & Training',
      title: 'Structured pathways to launch.',
      sub: "Whether you have an idea or a prototype, there's a program designed for your stage. All cohorts welcome students from every faculty.",
      curriculumLabel: 'Annual Training Curriculum',
      curriculumTitle: '85+ hours across 6 modules.',
      curriculumSub: 'Our structured annual program covers everything from ideation to investor pitch — taught by university faculty and visiting industry experts.',
      apply: 'Apply for a Program',
    },
    FR: {
      label: 'Programmes & Formation',
      title: 'Des parcours structurés vers le lancement.',
      sub: "Que vous ayez une idée ou un prototype, un programme est conçu pour votre étape. Toutes les cohortes accueillent des étudiants de toutes les facultés.",
      curriculumLabel: 'Curriculum annuel',
      curriculumTitle: '85+ heures sur 6 modules.',
      curriculumSub: "Notre programme annuel structuré couvre tout, de l'idée au pitch investisseur — enseigné par des enseignants universitaires et des experts industriels.",
      apply: 'Candidater à un programme',
    },
    AR: {
      label: 'البرامج والتكوين',
      title: 'مسارات منظمة للإطلاق.',
      sub: 'سواء كان لديك فكرة أو نموذج أولي، هناك برنامج مصمم لمرحلتك. جميع المجموعات ترحب بالطلاب من جميع الكليات.',
      curriculumLabel: 'منهج التكوين السنوي',
      curriculumTitle: '+85 ساعة عبر 6 وحدات.',
      curriculumSub: 'يغطي برنامجنا السنوي المنظم كل شيء من توليد الأفكار إلى عرض المستثمرين — يدرّسه أساتذة جامعيون وخبراء صناعيون.',
      apply: 'التقدم لبرنامج',
    },
  }[lang];

  const programs: {
    hours: string; accent: 'blue' | 'green';
    tag: Record<Lang, string>; title: Record<Lang, string>; desc: Record<Lang, string>; duration: Record<Lang, string>;
  }[] = [
    { hours: '12mo', accent: 'blue', tag: { EN: 'Competitive', FR: 'Compétitif', AR: 'تنافسي' }, title: { EN: 'Incubation Program', FR: "Programme d'incubation", AR: 'برنامج الحضانة' }, desc: { EN: '12-month intensive program with workspace, mentorship, and access to funding networks.', FR: 'Programme intensif de 12 mois : espace, mentorat, accès au réseau de financement.', AR: 'برنامج مكثف لمدة 12 شهراً مع مساحة عمل وإرشاد ووصول إلى شبكات التمويل.' }, duration: { EN: '12 months · All faculties welcome', FR: '12 mois · Toutes facultés bienvenues', AR: '12 شهراً · جميع الكليات مرحب بها' } },
    { hours: '3mo', accent: 'green', tag: { EN: 'Open Enrollment', FR: 'Inscription ouverte', AR: 'تسجيل مفتوح' }, title: { EN: 'Pre-incubation', FR: 'Pré-incubation', AR: 'ما قبل الحضانة' }, desc: { EN: 'Idea validation, market research, and business model development for early-stage founders.', FR: "Validation d'idée, étude de marché et développement du modèle économique.", AR: 'التحقق من الفكرة وبحث السوق وتطوير نموذج الأعمال للمؤسسين في المراحل الأولى.' }, duration: { EN: '3 months · Rolling intake', FR: '3 mois · Entrée continue', AR: '3 أشهر · قبول متواصل' } },
    { hours: '85h', accent: 'blue', tag: { EN: 'Annual', FR: 'Annuel', AR: 'سنوي' }, title: { EN: 'Startup Training Bootcamp', FR: 'Bootcamp de formation startup', AR: 'مخيم تدريب الشركات الناشئة' }, desc: { EN: '85+ hours of structured workshops on AI, law, fundraising, and product launch strategy.', FR: "85+ heures d'ateliers sur l'IA, le droit, la levée de fonds et la stratégie de lancement.", AR: '+85 ساعة من ورش العمل المنظمة حول الذكاء الاصطناعي والقانون والتمويل والإطلاق.' }, duration: { EN: '6 weeks · Annual cycle', FR: '6 semaines · Cycle annuel', AR: '6 أسابيع · دورة سنوية' } },
    { hours: '∞', accent: 'green', tag: { EN: 'Partner Program', FR: 'Programme partenaire', AR: 'برنامج الشراكة' }, title: { EN: 'National Competition Support', FR: 'Soutien aux concours nationaux', AR: 'دعم المسابقات الوطنية' }, desc: { EN: 'Preparation and coaching for ENACTUS, Startup Weekend, and national innovation prizes.', FR: "Préparation et coaching pour ENACTUS, Startup Weekend et prix d'innovation nationaux.", AR: 'التحضير والتدريب لـ ENACTUS وStartup Weekend وجوائز الابتكار الوطنية.' }, duration: { EN: 'Event-based', FR: 'Basé sur les événements', AR: 'قائم على الأحداث' } },
  ];

  const modules: { n: string; h: string; t: Record<Lang, string> }[] = [
    { n: '01', h: '14h', t: { EN: 'AI & Emerging Tech', FR: 'IA & Technologies émergentes', AR: 'الذكاء الاصطناعي والتقنيات الناشئة' } },
    { n: '02', h: '16h', t: { EN: 'Business Modeling', FR: "Modélisation d'affaires", AR: 'نمذجة الأعمال' } },
    { n: '03', h: '14h', t: { EN: 'Fundraising & Pitch', FR: 'Levée de fonds & pitch', AR: 'جمع التمويل والعرض' } },
    { n: '04', h: '12h', t: { EN: 'Legal & IP', FR: 'Droit & PI', AR: 'القانون والملكية الفكرية' } },
    { n: '05', h: '14h', t: { EN: 'Marketing & Brand', FR: 'Marketing & marque', AR: 'التسويق والعلامة' } },
    { n: '06', h: '15h', t: { EN: 'Communication & Sales', FR: 'Communication & ventes', AR: 'الاتصال والمبيعات' } },
  ];

  return (
    <section id="programs" data-screen-label="Programs" style={{
      padding: '6rem 2rem', background: '#F7F8FC',
      direction: isRTL ? 'rtl' : 'ltr',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader label={t.label} title={t.title} subtitle={t.sub} center />

        <div data-programs-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: '4rem' }}>
          {programs.map((p, i) => (
            <ProgramCard
              key={i}
              tag={p.tag[lang]}
              title={p.title[lang]}
              desc={p.desc[lang]}
              duration={p.duration[lang]}
              hours={p.hours}
              accent={p.accent}
            />
          ))}
        </div>

        {/* Curriculum modules */}
        <div style={{
          background: 'linear-gradient(135deg, #0D2D72 0%, #1B4FBB 60%, #2762D8 100%)',
          borderRadius: 28, padding: '3rem',
          color: '#fff', position: 'relative', overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(13,45,114,0.18)',
        }}>
          <div style={{
            position: 'absolute', top: -100, right: -100,
            width: 360, height: 360, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(125,184,58,0.25) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div data-curriculum-grid style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start' }}>
            <div>
              <span style={{
                display: 'inline-block', padding: '5px 14px', borderRadius: 100,
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                background: 'rgba(125,184,58,0.18)', color: '#C4E390', marginBottom: 16,
              }}>{t.curriculumLabel}</span>
              <div style={{
                fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.6rem, 2.4vw, 2rem)',
                fontWeight: 700, lineHeight: 1.2, marginBottom: 14, letterSpacing: '-0.01em',
              }}>{t.curriculumTitle}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>{t.curriculumSub}</div>
              <button onClick={() => onNav('contact')} style={{
                marginTop: 22, padding: '0 24px', height: 46,
                background: '#7DB83A', color: '#fff', border: 'none', borderRadius: 12,
                fontSize: 14, fontWeight: 600, cursor: 'pointer',
                fontFamily: "'DM Sans',sans-serif",
                boxShadow: '0 6px 20px rgba(125,184,58,0.35)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#5A8A22'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#7DB83A'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >{t.apply}</button>
            </div>
            <div data-modules-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
              {modules.map((m, i) => (
                <div key={i} style={{
                  padding: 18,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 14,
                  backdropFilter: 'blur(10px)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{
                      fontFamily: "'Syne',sans-serif", fontSize: 12, fontWeight: 700,
                      color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em',
                    }}>{m.n}</span>
                    <span style={{
                      fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 800,
                      color: '#C4E390', letterSpacing: '-0.01em',
                    }}>{m.h}</span>
                  </div>
                  <div style={{
                    fontSize: 14, fontWeight: 600, color: '#fff',
                    lineHeight: 1.35, fontFamily: "'DM Sans',sans-serif",
                  }}>{m.t[lang]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
