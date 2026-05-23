import React from 'react';
import type { Lang, Milestone } from '../types';
import { SectionHeader, JourneyTimeline } from '../components/SharedCards';

/* ─── INTRO / ABOUT SECTION ─── */
const IntroSection: React.FC<{ lang: Lang }> = ({ lang }) => {
  const isRTL = lang === 'AR';
  const t = {
    EN: {
      label: 'About the Incubator',
      title: "Algeria's pioneering\nuniversity incubator.",
      body1: "Founded at Université Mohamed Boudiaf, the Incubateur M'Sila is Algeria's first and highest-ranked university-based business incubator. Our mandate: transform student innovation into viable, scalable startups that drive the country's future.",
      body2: "Recognized as Algeria's #1 university incubator at Science Day 2023, we support founders from every faculty — sciences, engineering, law, medicine, economics, and beyond.",
      pillarLabel: 'What we stand for',
      pillars: [
        { t: 'Innovation', d: 'Forward-leaning thinking, tech-forward language, modern methods.' },
        { t: 'Credibility', d: 'University-backed, institutional rigour at every stage.' },
        { t: 'Accessibility', d: 'Multilingual, all-faculty welcome, inclusive by design.' },
        { t: 'Growth', d: 'Real partnerships with ANSEJ, CNAC, and private investors.' },
      ],
      quote: "Our mission is to turn the ideas of M'Sila's students into the businesses that drive Algeria's future.",
      director: 'Prof. Ahmed Benchabane',
      directorRole: 'Director, Incubateur Université de M\'Sila',
      journeyLabel: 'Our Journey',
      journeyTitle: 'Six years of\nbuilding the future.',
      journeySub: 'From a single founding mandate to Algeria\'s top-ranked university incubator — here\'s how we got here.',
      milestones: [
        { year: '2019', accent: 'blue',  tag: 'Founding', title: 'Established at Université Mohamed Boudiaf', desc: 'The incubator opens its doors as the first university-based business incubator in Algeria, anchored at the M\'Sila campus.' },
        { year: '2020', accent: 'green', tag: 'First Cohort', title: 'Inaugural incubation cohort launched', desc: 'Twelve student-led startups enter the program across science, computer science, and economics faculties.', stat: { n: '12', l: 'startups · first cohort' } },
        { year: '2021', accent: 'blue',  tag: 'Partnerships', title: 'ANSEJ & CNAC funding partnerships signed', desc: 'Formal agreements unlock state-backed funding rails for incubated teams, alongside private investor introductions.' },
        { year: '2022', accent: 'green', tag: 'Curriculum', title: 'Structured 85+ hour annual program launched', desc: 'Six-module curriculum rolls out — AI, business modeling, fundraising, legal/IP, marketing, and communications.', stat: { n: '85+', l: 'training hours / year' } },
        { year: '2023', accent: 'blue',  tag: 'Recognition', title: 'Ranked #1 University Incubator in Algeria', desc: 'Honored at the national Science Day ceremony for excellence in entrepreneurial training and startup outcomes.', stat: { n: '#1', l: 'in Algeria · Science Day' } },
        { year: '2024', accent: 'green', tag: 'Impact', title: '120+ startups supported across all faculties', desc: 'Alumni network expands to every faculty, with twelve active partner organizations and a thriving on-campus hub.', stat: { n: '120+', l: 'startups launched' } },
        { year: 'Now', ongoing: true, accent: 'blue', tag: 'The journey continues', title: 'And we\'re just getting started.', desc: 'New cohorts in progress, deeper international partnerships, and a renewed push to make M\'Sila a regional hub for student entrepreneurship.' },
      ] as Milestone[],
    },
    FR: {
      label: "À propos de l'incubateur",
      title: "L'incubateur universitaire\npionnier d'Algérie.",
      body1: "Fondé à l'Université Mohamed Boudiaf, l'Incubateur M'Sila est le premier et meilleur incubateur d'entreprises universitaire d'Algérie. Notre mandat : transformer l'innovation étudiante en startups viables et scalables qui façonnent l'avenir du pays.",
      body2: "Reconnu comme incubateur universitaire #1 d'Algérie à la Journée de la Science 2023, nous accompagnons des fondateurs de toutes les facultés — sciences, ingénierie, droit, médecine, économie, et au-delà.",
      pillarLabel: 'Nos valeurs',
      pillars: [
        { t: 'Innovation', d: 'Pensée avant-gardiste, méthodes modernes, langage tech-forward.' },
        { t: 'Crédibilité', d: 'Adossé à l\'université, rigueur institutionnelle à chaque étape.' },
        { t: 'Accessibilité', d: 'Multilingue, toutes facultés bienvenues, inclusif par design.' },
        { t: 'Croissance', d: 'Partenariats réels avec ANSEJ, CNAC et investisseurs privés.' },
      ],
      quote: "Notre mission est de transformer les idées des étudiants de M'Sila en entreprises qui façonnent l'avenir de l'Algérie.",
      director: 'Prof. Ahmed Benchabane',
      directorRole: "Directeur, Incubateur Université de M'Sila",
      journeyLabel: 'Notre Parcours',
      journeyTitle: 'Six années à\nbâtir l\'avenir.',
      journeySub: 'D\'un mandat fondateur à l\'incubateur universitaire #1 d\'Algérie — voici comment.',
      milestones: [
        { year: '2019', accent: 'blue',  tag: 'Fondation', title: 'Création à l\'Université Mohamed Boudiaf', desc: 'L\'incubateur ouvre comme le premier incubateur universitaire en Algérie, sur le campus de M\'Sila.' },
        { year: '2020', accent: 'green', tag: 'Première Cohorte', title: 'Lancement de la cohorte inaugurale', desc: 'Douze startups étudiantes entrent dans le programme à travers sciences, informatique et économie.', stat: { n: '12', l: 'startups · 1ʳᵉ cohorte' } },
        { year: '2021', accent: 'blue',  tag: 'Partenariats', title: 'Partenariats ANSEJ & CNAC signés', desc: 'Accords formels qui ouvrent l\'accès aux financements publics et aux investisseurs privés.' },
        { year: '2022', accent: 'green', tag: 'Curriculum', title: 'Programme annuel structuré 85+ heures', desc: 'Six modules : IA, modèle économique, levée de fonds, juridique, marketing, communication.', stat: { n: '85+', l: 'heures de formation / an' } },
        { year: '2023', accent: 'blue',  tag: 'Reconnaissance', title: 'Classé #1 incubateur universitaire en Algérie', desc: 'Distinction nationale à la Journée de la Science pour l\'excellence du programme et de ses résultats.', stat: { n: '#1', l: 'en Algérie · Journée Science' } },
        { year: '2024', accent: 'green', tag: 'Impact', title: '120+ startups accompagnées', desc: 'Le réseau alumni s\'étend à toutes les facultés, avec douze partenaires actifs et un hub sur campus.', stat: { n: '120+', l: 'startups lancées' } },
        { year: 'Now', ongoing: true, accent: 'blue', tag: 'L\'aventure continue', title: 'Et ce n\'est que le début.', desc: 'De nouvelles cohortes en cours, des partenariats internationaux plus profonds, et un nouvel élan pour faire de M\'Sila un pôle régional de l\'entrepreneuriat étudiant.' },
      ] as Milestone[],
    },
    AR: {
      label: 'حول الحاضنة',
      title: 'حاضنة الجامعة\nالرائدة في الجزائر.',
      body1: 'تأسست حاضنة جامعة مسيلة في جامعة محمد بوضياف بوصفها أول وأعلى حاضنة أعمال جامعية في الجزائر. مهمتنا تحويل ابتكار الطلاب إلى شركات ناشئة قابلة للنمو تقود مستقبل البلاد.',
      body2: 'معترف بها كحاضنة جامعية #1 في الجزائر في يوم العلم 2023، ندعم المؤسسين من جميع الكليات — العلوم والهندسة والقانون والطب والاقتصاد وغيرها.',
      pillarLabel: 'ما نؤمن به',
      pillars: [
        { t: 'الابتكار', d: 'تفكير تطلعي، أساليب حديثة، لغة تقنية متقدمة.' },
        { t: 'المصداقية', d: 'مدعومة جامعياً، صرامة مؤسسية في كل مرحلة.' },
        { t: 'الوصول', d: 'متعددة اللغات، جميع الكليات مرحب بها، شاملة بالتصميم.' },
        { t: 'النمو', d: 'شراكات حقيقية مع ANSEJ وCNAC والمستثمرين الخاصين.' },
      ],
      quote: 'مهمتنا تحويل أفكار طلاب مسيلة إلى أعمال تقود مستقبل الجزائر.',
      director: 'الأستاذ أحمد بن شعبان',
      directorRole: 'مدير، حاضنة جامعة مسيلة',
      journeyLabel: 'مسيرتنا',
      journeyTitle: 'ست سنوات من\nبناء المستقبل.',
      journeySub: 'من تكليف تأسيسي إلى الحاضنة الجامعية #1 في الجزائر — إليكم كيف وصلنا.',
      milestones: [
        { year: '2019', accent: 'blue',  tag: 'التأسيس', title: 'التأسيس في جامعة محمد بوضياف', desc: 'تفتح الحاضنة أبوابها كأول حاضنة أعمال جامعية في الجزائر، في حرم مسيلة.' },
        { year: '2020', accent: 'green', tag: 'الدفعة الأولى', title: 'انطلاق الدفعة التأسيسية', desc: 'اثنتا عشرة شركة ناشئة طلابية تدخل البرنامج عبر كليات العلوم والحاسوب والاقتصاد.', stat: { n: '12', l: 'شركة · الدفعة الأولى' } },
        { year: '2021', accent: 'blue',  tag: 'الشراكات', title: 'توقيع شراكات ANSEJ وCNAC', desc: 'اتفاقيات رسمية تفتح قنوات التمويل الحكومي والمستثمرين الخاصين.' },
        { year: '2022', accent: 'green', tag: 'المنهج', title: 'إطلاق البرنامج السنوي المنظم +85 ساعة', desc: 'ست وحدات: الذكاء الاصطناعي، نمذجة الأعمال، التمويل، القانون، التسويق، الاتصال.', stat: { n: '+85', l: 'ساعة تكوين / سنوياً' } },
        { year: '2023', accent: 'blue',  tag: 'التقدير', title: 'مصنفة #1 حاضنة جامعية في الجزائر', desc: 'تكريم وطني في يوم العلم لتميز البرنامج ونتائجه.', stat: { n: '#1', l: 'في الجزائر · يوم العلم' } },
        { year: '2024', accent: 'green', tag: 'الأثر', title: '+120 شركة ناشئة مدعومة', desc: 'شبكة الخريجين تمتد إلى جميع الكليات مع اثنتي عشرة منظمة شريكة نشطة.', stat: { n: '+120', l: 'شركة ناشئة' } },
        { year: 'Now', ongoing: true, accent: 'blue', tag: 'الرحلة مستمرة', title: 'وما زلنا في البداية.', desc: 'دفعات جديدة قيد التنفيذ، شراكات دولية أعمق، ودفعة متجددة لجعل مسيلة مركزاً إقليمياً لريادة الأعمال الطلابية.' },
      ] as Milestone[],
    },
  }[lang];

  return (
    <section id="intro" data-screen-label="Intro" style={{
      padding: '6rem 2rem', background: '#fff',
      direction: isRTL ? 'rtl' : 'ltr',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div data-intro-grid style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <SectionHeader label={t.label} title={t.title} />
            <p style={{ fontSize: '1.05rem', color: '#383D58', lineHeight: 1.75, marginBottom: 18 }}>{t.body1}</p>
            <p style={{ fontSize: '1.05rem', color: '#383D58', lineHeight: 1.75 }}>{t.body2}</p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #0D2D72 0%, #1B4FBB 100%)',
            borderRadius: 24, padding: 36, color: '#fff',
            boxShadow: '0 20px 60px rgba(13,45,114,0.18)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -60, right: -60,
              width: 200, height: 200, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(125,184,58,0.35) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.08em', color: '#C4E390', marginBottom: 14,
            }}>{t.directorRole.split(',')[0]}</div>
            <div style={{
              fontFamily: "'Syne',sans-serif", fontSize: '1.4rem',
              fontWeight: 700, marginBottom: 6,
            }}>{t.director}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 22 }}>{t.directorRole}</div>
            <div style={{
              fontSize: '1rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.92)',
              fontStyle: 'italic',
              paddingInlineStart: 18,
              borderInlineStart: '3px solid #7DB83A',
            }}>"{t.quote}"</div>
          </div>
        </div>

        {/* Values pillars */}
        <div data-pillars-grid style={{
          marginTop: '4rem',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
        }}>
          {t.pillars.map((p, i) => (
            <div key={i} style={{
              padding: '24px 22px', background: '#F7F8FC',
              borderRadius: 16, border: '1px solid #E4E6EF',
            }}>
              <div style={{
                fontFamily: "'Syne',sans-serif", fontSize: 28, fontWeight: 800,
                color: '#7DB83A', lineHeight: 1, marginBottom: 12,
                fontVariantNumeric: 'tabular-nums',
              }}>0{i + 1}</div>
              <div style={{
                fontFamily: "'Syne',sans-serif", fontSize: '1.05rem',
                fontWeight: 700, color: '#121420', marginBottom: 6,
              }}>{p.t}</div>
              <div style={{ fontSize: 13, color: '#6B7089', lineHeight: 1.6 }}>{p.d}</div>
            </div>
          ))}
        </div>

        {/* Journey timeline */}
        <div style={{ marginTop: '6rem' }}>
          <JourneyTimeline
            milestones={t.milestones}
            lang={lang}
            label={t.journeyLabel}
            title={t.journeyTitle}
            subtitle={t.journeySub}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
