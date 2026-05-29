import React from "react";
import type { Lang, Milestone } from "../types";
import { JourneyTimeline } from "../components/SharedCards";
import directorPhoto from "../assets/team/incubator-director.jpg";

/* ─── SVG icons for the four pillars ─────────────────────────────────── */
const PillarIcons = [
  /* Innovation — lightbulb spark */
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ width: 26, height: 26 }}>
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 4 12.9V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.1A7 7 0 0 1 12 2Z"/>
      <path d="m9.5 9 1.5 2 3-3"/>
    </svg>
  ),
  /* Credibility — shield-check */
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ width: 26, height: 26 }}>
      <path d="M12 2 3 7v5c0 5 4 9 9 10 5-1 9-5 9-10V7z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  /* Accessibility — users / community */
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ width: 26, height: 26 }}>
      <circle cx="9" cy="7" r="3"/>
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      <path d="M21 21v-2a4 4 0 0 0-3-3.85"/>
    </svg>
  ),
  /* Growth — trending-up arrow */
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ width: 26, height: 26 }}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  ),
];

/* ─── INTRO / ABOUT SECTION ─── */
const IntroSection: React.FC<{ lang: Lang }> = ({ lang }) => {
  const isRTL = lang === "AR";

  const t = {
    EN: {
      label: "About the Incubator",
      title: "Algeria's pioneering\nuniversity incubator.",
      body1:
        "Established by Ministerial Decree No. 182 on 27 May 2019, the Incubator at Université Mohamed Boudiaf was the first university business incubator in Algeria — followed later by Blida, Ouargla and other universities that adopted the M'Sila model nationwide.",
      body2:
        "Honored at Science Day on 16 April 2023 as Algeria's #1 university incubator — for the most startups and the most patents — we support founders from every faculty: science, technology, humanities, economics, mathematics, law, and beyond.",
      pillarLabel: "What we stand for",
      pillars: [
        { t: "Innovation",    d: "Forward-leaning thinking, tech-forward language, modern methods." },
        { t: "Credibility",   d: "University-backed, institutional rigour at every stage." },
        { t: "Accessibility", d: "Multilingual, all-faculty welcome, inclusive by design." },
        { t: "Growth",        d: "Real partnerships with ANSEJ, CNAC, and private investors." },
      ],
      directorNoteLabel: "Director's Note",
      quote:
        "Our mission is to turn the ideas of M'Sila's students into the businesses that drive Algeria's future.",
      director: "Prof. BENTOUMI Sarah",
      directorRole: "Director, Incubator — Université de M'Sila",
      journeyLabel: "Our Journey",
      journeyTitle: "8 Years of Building\nAlgeria's #1 Incubator",
      journeySub:
        "From a founding decision in 2018 to a nationally recognized innovation ecosystem — every milestone that shaped us.",
      milestones: [
        { year: "2018", accent: "blue",  tag: "Founding Decision",      title: "The incubator is born at the Fall University event",                       desc: "On December 12–13, the rector of Mohammed Boudiaf University gives preliminary approval. Dr. Mir Ahmed is appointed founding director. The Board of Directors votes in favour by an overwhelming majority — the incubator goes from idea to institution in two days.", stat: { n: "Dec 12–13", l: "2018" } },
        { year: "2019", accent: "blue",  tag: "Official Establishment",  title: "Ministerial Decree No. 182 — first university incubator in Algeria",       desc: "On 27 May 2019 the incubator is formally created by ministerial decree, becoming the first business incubator established within a university at the national level in Algeria. All 6 programs launch, INAPI coordination begins, and the first 2 patents are filed.", stat: { n: "27 May", l: "2019" } },
        { year: "2020", accent: "green", tag: "First Output",           title: "First startup graduates · patents jump 545% year-on-year",                 desc: "The incubator produces its first graduated enterprise — proof the model works end-to-end. Patent filings jump from 2 to 13 in a single year, a 545% increase that signals the research pipeline is accelerating fast.", stat: { n: "1 startup", l: "13 patents" } },
        { year: "2021", accent: "green", tag: "Label Program Launch",   title: "Label Tagging Program opens ASF financing for incubated projects",         desc: "In October 2021 the incubator begins guiding projects onto startup.dz to obtain the official Startup Label and access ASF — Algeria Startup Fund — financing. 28 projects are labeled in the launch year alone. The incubator itself also becomes the first in Algeria to receive the official Label of Business Incubator as an institution.", stat: { n: "28 labeled", l: "national institutional label" } },
        { year: "2022", accent: "green", tag: "National First",         title: "Resolution 1275 adopted nationally — M'Sila's model becomes Algeria's standard", desc: "After M'Sila pioneered the Resolution 1275 program in 2021–22, the Ministry of Higher Education formally adopts it across all Algerian universities in 2022–23. Every graduation project in the country can now become a startup — using the framework M'Sila invented. 6 startups graduate this year, the highest annual count.", stat: { n: "6 startups", l: "65 patents · national adoption" } },
        { year: "2023", accent: "green", tag: "National Recognition",   title: "Awarded #1 university incubator in Algeria by the Minister of Higher Education", desc: "On Science Day, 16 April 2023, the Minister of Higher Education honors M'Sila as the best university incubator nationally — for most startups established and most patents deposited simultaneously. The Governor (Wali) of M'Sila City also pays tribute the same day. A double recognition at both national and regional level.", stat: { n: "Science Day", l: "16 April 2023" } },
        { year: "2024", accent: "blue",  tag: "Scientific Activity",    title: "Active scientific seminar programme signals a maturing institution",       desc: "Three major seminars are hosted in quick succession: the 2nd Symposium on Mathematical Modelling of Biology and Health (Jan), a full day on Renewable Energy and Energy Security by expert Mohamed Ghazli (Feb), and a seminar on Innovative Cancer Treatments (Mar).", stat: { n: "3 seminars", l: "Jan–Mar 2024" } },
        { year: "2025", accent: "blue",  tag: "Ecosystem Growth",       title: "Incubator anchors a full innovation ecosystem of 5 university units",      desc: "The incubator now sits at the centre of five innovation units at M'Sila University: Business Incubator, House of Artificial Intelligence (دار الذكاء الاصطناعي), Center for Technology Support and Innovation (CSTI), Center for Entrepreneurship Development (CDE), and the University–Business Liaison Office (BLUE) — the ecosystem the incubator catalysed in 2019 is now fully built out.", stat: { n: "5 units", l: "active innovation units" } },
        { ongoing: true, accent: "green", tag: "The Journey Continues", title: "And we're just getting started.", desc: "New cohorts in incubation, deeper national and international partnerships, and a renewed push to make M'Sila a regional hub for student entrepreneurship — the next chapter is already being written." },
      ] as Milestone[],
    },
    FR: {
      label: "À propos de l'incubateur",
      title: "L'incubateur universitaire\npionnier d'Algérie.",
      body1:
        "Créé par le Décret ministériel n° 182 du 27 mai 2019, l'Incubateur de l'Université Mohamed Boudiaf fut le premier incubateur d'entreprises universitaire d'Algérie — suivi ensuite par Blida, Ouargla et d'autres universités qui ont adopté le modèle de M'Sila.",
      body2:
        "Distingué à la Journée de la Science le 16 avril 2023 comme incubateur universitaire #1 d'Algérie — pour le plus de startups et le plus de brevets — nous accompagnons des fondateurs de toutes les facultés : sciences, technologie, sciences humaines, économie, mathématiques, droit, et au-delà.",
      pillarLabel: "Nos valeurs",
      pillars: [
        { t: "Innovation",    d: "Pensée avant-gardiste, méthodes modernes, langage tech-forward." },
        { t: "Crédibilité",   d: "Adossé à l'université, rigueur institutionnelle à chaque étape." },
        { t: "Accessibilité", d: "Multilingue, toutes facultés bienvenues, inclusif par design." },
        { t: "Croissance",    d: "Partenariats réels avec ANSEJ, CNAC et investisseurs privés." },
      ],
      directorNoteLabel: "Note de la Directrice",
      quote:
        "Notre mission est de transformer les idées des étudiants de M'Sila en entreprises qui façonnent l'avenir de l'Algérie.",
      director: "Prof. BENTOUMI Sarah",
      directorRole: "Directrice, Incubateur — Université de M'Sila",
      journeyLabel: "Notre Parcours",
      journeyTitle: "8 Ans à Construire\nl'Incubateur N°1 d'Algérie",
      journeySub:
        "D'une décision fondatrice en 2018 à un écosystème d'innovation reconnu nationalement — chaque étape qui nous a façonnés.",
      milestones: [
        { year: "2018", accent: "blue",  tag: "Décision Fondatrice",     title: "L'incubateur naît lors de l'Université d'Automne",                          desc: "Les 12–13 décembre, le recteur de l'Université Mohammed Boudiaf donne son accord préliminaire. Le Dr Mir Ahmed est nommé directeur fondateur. Le Conseil d'administration vote en faveur à une large majorité — l'incubateur passe de l'idée à l'institution en deux jours.", stat: { n: "12–13 déc.", l: "2018" } },
        { year: "2019", accent: "blue",  tag: "Création Officielle",      title: "Décret ministériel n°182 — premier incubateur universitaire en Algérie",     desc: "Le 27 mai 2019, l'incubateur est officiellement créé par décret ministériel, devenant le premier incubateur d'entreprises établi au sein d'une université à l'échelle nationale en Algérie. Les 6 programmes sont lancés, la coordination avec l'INAPI commence et les 2 premiers brevets sont déposés.", stat: { n: "27 mai", l: "2019" } },
        { year: "2020", accent: "green", tag: "Première Sortie",          title: "Première startup diplômée · brevets +545% en un an",                        desc: "L'incubateur produit sa première entreprise diplômée — la preuve que le modèle fonctionne de bout en bout. Les dépôts de brevets passent de 2 à 13 en une seule année, une hausse de 545% qui signale une accélération rapide du pipeline de recherche.", stat: { n: "1 startup", l: "13 brevets" } },
        { year: "2021", accent: "green", tag: "Lancement Programme Label", title: "Le programme Label ouvre le financement ASF aux projets incubés",           desc: "En octobre 2021, l'incubateur oriente les projets vers startup.dz pour obtenir le Label Startup officiel et accéder au financement ASF — Algeria Startup Fund. 28 projets sont labellisés la seule année de lancement. L'incubateur lui-même devient aussi le premier en Algérie à recevoir le Label officiel d'Incubateur d'Entreprises en tant qu'institution.", stat: { n: "28 labellisés", l: "label institutionnel national" } },
        { year: "2022", accent: "green", tag: "Première Nationale",       title: "La résolution 1275 adoptée nationalement — le modèle de M'Sila devient la référence algérienne", desc: "Après que M'Sila a été pionnière du programme Résolution 1275 en 2021–22, le Ministère de l'Enseignement Supérieur l'adopte officiellement dans toutes les universités algériennes en 2022–23. Chaque projet de fin d'études du pays peut désormais devenir une startup — selon le cadre inventé par M'Sila. 6 startups diplômées cette année, le plus haut total annuel.", stat: { n: "6 startups", l: "65 brevets · adoption nationale" } },
        { year: "2023", accent: "green", tag: "Reconnaissance Nationale", title: "Désigné incubateur universitaire n°1 en Algérie par le Ministre de l'Enseignement Supérieur", desc: "Lors de la Journée de la Science, le 16 avril 2023, le Ministre de l'Enseignement Supérieur honore M'Sila comme meilleur incubateur universitaire à l'échelle nationale — pour le plus de startups créées et le plus de brevets déposés simultanément. Le Wali de M'Sila lui rend également hommage le même jour. Une double reconnaissance, nationale et régionale.", stat: { n: "Journée Science", l: "16 avril 2023" } },
        { year: "2024", accent: "blue",  tag: "Activité Scientifique",    title: "Programme de séminaires scientifiques actif : une institution qui grandit",  desc: "Trois grands séminaires sont organisés coup sur coup : le 2e Symposium sur la Modélisation Mathématique de la Biologie et de la Santé (janv.), une journée complète sur les Énergies Renouvelables et la Sécurité Énergétique par l'expert Mohamed Ghazli (févr.), et un séminaire sur les Traitements Innovants du Cancer (mars).", stat: { n: "3 séminaires", l: "janv.–mars 2024" } },
        { year: "2025", accent: "blue",  tag: "Croissance de l'Écosystème", title: "L'incubateur ancre un écosystème d'innovation complet de 5 unités universitaires", desc: "L'incubateur se trouve désormais au centre de cinq unités d'innovation à l'Université de M'Sila : l'Incubateur d'Entreprises, la Maison de l'Intelligence Artificielle (دار الذكاء الاصطناعي), le Centre de Support Technologique et d'Innovation (CSTI), le Centre de Développement de l'Entrepreneuriat (CDE) et le Bureau de Liaison Université–Entreprise (BLUE) — l'écosystème catalysé par l'incubateur en 2019 est désormais pleinement déployé.", stat: { n: "5 unités", l: "unités d'innovation actives" } },
        { ongoing: true, accent: "green", tag: "L'aventure continue", title: "Et ce n'est que le début.", desc: "De nouvelles cohortes en incubation, des partenariats nationaux et internationaux plus profonds, et un nouvel élan pour faire de M'Sila un pôle régional de l'entrepreneuriat étudiant — le prochain chapitre s'écrit déjà." },
      ] as Milestone[],
    },
    AR: {
      label: "حول الحاضنة",
      title: "حاضنة الجامعة\nالرائدة في الجزائر.",
      body1:
        "تأسست بموجب المرسوم الوزاري رقم 182 في 27 مايو 2019، وكانت حاضنة جامعة محمد بوضياف أول حاضنة أعمال جامعية في الجزائر — تبعتها لاحقاً البليدة وورقلة وجامعات أخرى تبنّت نموذج مسيلة على المستوى الوطني.",
      body2:
        "كُرّمت في يوم العلم بتاريخ 16 أبريل 2023 كحاضنة جامعية #1 في الجزائر — للأكثر شركات ناشئة والأكثر براءات اختراع — وندعم المؤسسين من جميع الكليات: العلوم والتكنولوجيا والعلوم الإنسانية والاقتصاد والرياضيات والقانون وغيرها.",
      pillarLabel: "ما نؤمن به",
      pillars: [
        { t: "الابتكار",   d: "تفكير تطلعي، أساليب حديثة، لغة تقنية متقدمة." },
        { t: "المصداقية",  d: "مدعومة جامعياً، صرامة مؤسسية في كل مرحلة." },
        { t: "الوصول",     d: "متعددة اللغات، جميع الكليات مرحب بها، شاملة بالتصميم." },
        { t: "النمو",      d: "شراكات حقيقية مع ANSEJ وCNAC والمستثمرين الخاصين." },
      ],
      directorNoteLabel: "كلمة المدير",
      quote: "مهمتنا تحويل أفكار طلاب مسيلة إلى أعمال تقود مستقبل الجزائر.",
      director: "الأستاذة بن التومي سارة",
      directorRole: "مديرة الحاضنة — جامعة المسيلة",
      journeyLabel: "مسيرتنا",
      journeyTitle: "8 سنوات لبناء\nأفضل حاضنة في الجزائر",
      journeySub:
        "من قرار التأسيس عام 2018 إلى نظام بيئي للابتكار معترف به وطنياً — كل محطة صنعتنا.",
      milestones: [
        { year: "2018", accent: "blue",  tag: "قرار التأسيس",          title: "تأسست الحاضنة في حدث جامعة الخريف",                              desc: "في 12–13 ديسمبر، يمنح رئيس جامعة محمد بوضياف الموافقة المبدئية. يُعيَّن الدكتور مير أحمد مديراً مؤسساً. يصوّت مجلس الإدارة لصالحها بأغلبية ساحقة — تتحول الحاضنة من فكرة إلى مؤسسة في يومين.", stat: { n: "12–13 ديسمبر", l: "2018" } },
        { year: "2019", accent: "blue",  tag: "التأسيس الرسمي",         title: "المرسوم الوزاري رقم 182 — أول حاضنة أعمال جامعية في الجزائر",      desc: "في 27 مايو 2019 تُنشأ الحاضنة رسمياً بموجب مرسوم وزاري، لتصبح أول حاضنة أعمال تُؤسَّس داخل جامعة على المستوى الوطني في الجزائر. تُطلق البرامج الستة جميعها، ويبدأ التنسيق مع INAPI، وتُودَع أول براءتي اختراع.", stat: { n: "27 مايو", l: "2019" } },
        { year: "2020", accent: "green", tag: "أول إنجاز",             title: "تخرج أول شركة ناشئة · براءات الاختراع ترتفع 545% خلال عام",      desc: "تنتج الحاضنة أول مؤسسة متخرجة — دليل على أن النموذج يعمل من البداية إلى النهاية. تقفز إيداعات البراءات من 2 إلى 13 في عام واحد، بزيادة 545% تشير إلى تسارع خط أنابيب البحث بسرعة.", stat: { n: "1 شركة", l: "13 براءة" } },
        { year: "2021", accent: "green", tag: "إطلاق برنامج العلامة",   title: "برنامج العلامة يفتح تمويل صندوق ASF للمشاريع المحتضنة",           desc: "في أكتوبر 2021 تبدأ الحاضنة بتوجيه المشاريع إلى startup.dz للحصول على علامة الشركة الناشئة الرسمية والوصول إلى تمويل ASF — صندوق الجزائر للشركات الناشئة. يُمنح 28 مشروعاً العلامة في سنة الإطلاق وحدها. كما تصبح الحاضنة نفسها أول حاضنة في الجزائر تحصل على علامة حاضنة الأعمال الرسمية كمؤسسة.", stat: { n: "28 مشروعاً", l: "علامة مؤسسية وطنية" } },
        { year: "2022", accent: "green", tag: "الأولى وطنياً",          title: "القرار 1275 مُعتمد وطنياً — نموذج المسيلة يصبح المعيار الجزائري",   desc: "بعد أن كانت المسيلة رائدة في برنامج القرار 1275 خلال 2021–22، تعتمده وزارة التعليم العالي رسمياً في جميع الجامعات الجزائرية خلال 2022–23. يمكن الآن لكل مشروع تخرج في البلاد أن يصبح شركة ناشئة — باستخدام الإطار الذي ابتكرته المسيلة. تتخرج 6 شركات هذا العام، أعلى عدد سنوي.", stat: { n: "6 شركات", l: "65 براءة · اعتماد وطني" } },
        { year: "2023", accent: "green", tag: "تكريم وطني",            title: "تتويج بلقب أفضل حاضنة جامعية في الجزائر من وزير التعليم العالي",    desc: "في يوم العلم، 16 أبريل 2023، يكرّم وزير التعليم العالي المسيلة كأفضل حاضنة جامعية وطنياً — للأكثر شركات ناشئة منشأة والأكثر براءات اختراع مودعة في آنٍ واحد. كما يشيد والي مدينة المسيلة بها في اليوم نفسه. تكريم مزدوج على المستويين الوطني والإقليمي.", stat: { n: "يوم العلم", l: "16 أبريل 2023" } },
        { year: "2024", accent: "blue",  tag: "نشاط علمي",             title: "برنامج ندوات علمية نشط يعكس نضج المؤسسة",                        desc: "تُعقد ثلاث ندوات كبرى تباعاً: الملتقى الثاني حول النمذجة الرياضية للبيولوجيا والصحة (يناير)، ويوم كامل حول الطاقات المتجددة وأمن الطاقة قدّمه الخبير محمد غازلي (فبراير)، وندوة حول العلاجات المبتكرة للسرطان (مارس).", stat: { n: "3 ندوات", l: "يناير–مارس 2024" } },
        { year: "2025", accent: "blue",  tag: "نمو النظام البيئي",      title: "الحاضنة تُرسّخ نظاماً بيئياً متكاملاً من 5 وحدات ابتكار جامعية",   desc: "تقع الحاضنة الآن في قلب خمس وحدات ابتكار بجامعة المسيلة: حاضنة الأعمال، ودار الذكاء الاصطناعي، ومركز دعم التكنولوجيا والابتكار (CSTI)، ومركز تطوير المقاولاتية (CDE)، ومكتب الربط بين الجامعة والمؤسسة (BLUE) — النظام البيئي الذي حفّزته الحاضنة عام 2019 أصبح الآن مكتمل البناء.", stat: { n: "5 وحدات", l: "وحدات ابتكار نشطة" } },
        { ongoing: true, accent: "green", tag: "الرحلة مستمرة", title: "وما زلنا في البداية.", desc: "دفعات جديدة قيد الاحتضان، شراكات وطنية ودولية أعمق، ودفعة متجددة لجعل المسيلة قطباً إقليمياً لريادة الأعمال الطلابية — الفصل القادم يُكتب بالفعل." },
      ] as Milestone[],
    },
  }[lang];

  return (
    <section
      id="intro"
      data-screen-label="Intro"
      style={{
        padding: "6rem 2rem",
        background: "#fff",
        direction: isRTL ? "rtl" : "ltr",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Centered section header ────────────────────────────────── */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          {/* Label pill */}
          <span style={{
            display: "inline-block",
            padding: "5px 16px",
            borderRadius: 9999,
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.10em",
            background: "#EBF5D8",
            color: "#5A8A22",
            marginBottom: 18,
          }}>
            {t.label}
          </span>
          {/* Title */}
          <div style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(1.9rem, 3.4vw, 2.7rem)",
            fontWeight: 700,
            color: "#121420",
            lineHeight: 1.12,
            letterSpacing: "-0.025em",
            whiteSpace: "pre-line",
          }}>
            {t.title}
          </div>
        </div>

        {/* ── Two-column: body text  +  director card ────────────────── */}
        <div
          data-intro-grid
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "4rem",
            alignItems: "start",
            marginBottom: "5rem",
          }}
        >
          {/* Left: body copy */}
          <div>
            <p style={{ fontSize: "1.05rem", color: "#383D58", lineHeight: 1.78, marginBottom: 18 }}>
              {t.body1}
            </p>
            <p style={{ fontSize: "1.05rem", color: "#383D58", lineHeight: 1.78 }}>
              {t.body2}
            </p>
          </div>

          {/* Right: director card */}
          <DirectorCard
            photo={directorPhoto}
            name={t.director}
            role={t.directorRole}
            noteLabel={t.directorNoteLabel}
            quote={t.quote}
          />
        </div>

        {/* ── Pillars label ───────────────────────────────────────────── */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span style={{
            display: "inline-block",
            padding: "4px 14px",
            borderRadius: 9999,
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.10em",
            background: "#EFF2FB",
            color: "#1B4FBB",
          }}>
            {t.pillarLabel}
          </span>
        </div>

        {/* ── Pillar cards grid ───────────────────────────────────────── */}
        <div
          data-pillars-grid
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            marginBottom: "6rem",
          }}
        >
          {t.pillars.map((p, i) => (
            <PillarCard key={i} index={i} title={p.t} desc={p.d} />
          ))}
        </div>

        {/* ── Journey timeline ────────────────────────────────────────── */}
        <JourneyTimeline
          milestones={t.milestones}
          lang={lang}
          label={t.journeyLabel}
          title={t.journeyTitle}
          subtitle={t.journeySub}
        />
      </div>
    </section>
  );
};

/* ─── Director card ─────────────────────────────────────────────────── */
const DirectorCard: React.FC<{
  photo: string; name: string; role: string; noteLabel: string; quote: string;
}> = ({ photo, name, role, noteLabel, quote }) => (
  <div style={{
    background: "#fff",
    borderRadius: 24,
    overflow: "hidden",
    border: "1px solid #E4E6EF",
    boxShadow: "0 20px 60px rgba(13,45,114,0.10)",
  }}>
    {/* Photo area */}
    <div style={{ position: "relative", height: 270, background: "linear-gradient(135deg,#0D2D72 0%,#1B4FBB 100%)", overflow: "hidden" }}>
      <img
        src={photo} alt={name}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 18%" }}
      />
      {/* Gradient overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(13,45,114,0.05) 0%,rgba(13,45,114,0.28) 48%,rgba(13,45,114,0.82) 100%)" }} />
      {/* Role chip top */}
      <div style={{
        position: "absolute", top: 16, insetInlineStart: 16,
        padding: "5px 12px", borderRadius: 9999,
        background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.22)",
        color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
      }}>
        {role.split(",")[0]}
      </div>
      {/* Name + role bottom */}
      <div style={{ position: "absolute", left: 18, right: 18, bottom: 18, color: "#fff" }}>
        <div style={{
          fontFamily: "'Syne',sans-serif", fontSize: "1.5rem", fontWeight: 700,
          letterSpacing: "-0.02em", marginBottom: 8, textShadow: "0 4px 16px rgba(0,0,0,0.3)",
        }}>{name}</div>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          padding: "5px 11px", borderRadius: 9999,
          background: "rgba(255,255,255,0.13)", backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.18)", fontSize: 11.5, lineHeight: 1,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7DB83A", flexShrink: 0, boxShadow: "0 0 0 3px rgba(125,184,58,0.22)" }} />
          {role}
        </div>
      </div>
    </div>
    {/* Quote area */}
    <div style={{ padding: "22px 26px 26px" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 7,
        padding: "4px 12px", borderRadius: 9999,
        background: "#EBF5D8", color: "#5A8A22",
        fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
        marginBottom: 14,
      }}>
        {noteLabel}
      </div>
      <div style={{
        fontSize: "0.97rem", lineHeight: 1.82, color: "#383D58",
        paddingInlineStart: 14,
        borderInlineStart: "3px solid #7DB83A",
        fontStyle: "italic",
      }}>
        "{quote}"
      </div>
    </div>
  </div>
);

/* ─── Pillar card ────────────────────────────────────────────────────── */
const PillarCard: React.FC<{ index: number; title: string; desc: string }> = React.memo(
  ({ index, title, desc }) => {
    const [hov, setHov] = React.useState(false);

    /* Alternate blue / green accent */
    const isGreen = index % 2 === 1;
    const accentColor  = isGreen ? "#7DB83A" : "#1B4FBB";
    const accentLight  = isGreen ? "#EBF5D8" : "#D6E4F7";
    const accentMid    = isGreen ? "rgba(125,184,58,0.12)" : "rgba(27,79,187,0.10)";
    const shadowColor  = isGreen ? "rgba(125,184,58,0.22)" : "rgba(27,79,187,0.16)";

    /* Number labels: 01 02 03 04 */
    const num = `0${index + 1}`;

    return (
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          position: "relative",
          padding: "28px 24px 26px",
          borderRadius: 20,
          background: hov ? accentMid : "#F7F8FC",
          border: `1.5px solid ${hov ? accentColor : "#E4E6EF"}`,
          transform: hov ? "translateY(-5px)" : "translateY(0)",
          boxShadow: hov
            ? `0 16px 40px ${shadowColor}, 0 0 0 0 transparent`
            : "0 2px 10px rgba(0,0,0,0.03)",
          transition: "all 0.30s cubic-bezier(0.34,1.3,0.64,1)",
          cursor: "default",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          overflow: "hidden",
        }}
      >
        {/* Subtle corner glow on hover */}
        <div style={{
          position: "absolute",
          top: -30, right: -30,
          width: 100, height: 100,
          borderRadius: "50%",
          background: accentColor,
          opacity: hov ? 0.08 : 0,
          transition: "opacity 0.30s ease",
          pointerEvents: "none",
        }} />

        {/* Icon circle */}
        <div style={{
          width: 52, height: 52,
          borderRadius: 14,
          background: hov ? accentColor : accentLight,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: hov ? "#fff" : accentColor,
          marginBottom: 18,
          transition: "background 0.25s ease, color 0.25s ease",
          flexShrink: 0,
        }}>
          {PillarIcons[index]}
        </div>

        {/* Number badge */}
        <div style={{
          position: "absolute",
          top: 22, right: 22,
          fontFamily: "'Syne',sans-serif",
          fontSize: 13,
          fontWeight: 800,
          color: hov ? accentColor : "#C8CADE",
          letterSpacing: "0.02em",
          fontVariantNumeric: "tabular-nums",
          transition: "color 0.25s ease",
        }}>
          {num}
        </div>

        {/* Title */}
        <div style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "#121420",
          marginBottom: 8,
          lineHeight: 1.3,
        }}>
          {title}
        </div>

        {/* Separator line */}
        <div style={{
          width: 28, height: 2.5,
          borderRadius: 2,
          background: accentColor,
          marginBottom: 12,
          opacity: hov ? 1 : 0.45,
          transition: "opacity 0.25s ease",
        }} />

        {/* Description */}
        <div style={{
          fontSize: 13,
          color: "#6B7089",
          lineHeight: 1.65,
        }}>
          {desc}
        </div>
      </div>
    );
  }
);

export default IntroSection;
