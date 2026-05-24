import React from "react";
import type { Lang, Milestone } from "../types";
import { JourneyTimeline } from "../components/SharedCards";
import { useReveal } from "../hooks/useReveal";
import directorPhoto from "../assets/team/incubator-director.jpg";
import logoAIHouse    from "../assets/AI-house.jpg";
import logoCenterTech from "../assets/center-tech.jpg";
import logoCDE        from "../assets/cde.jpg";
import logoBLUE       from "../assets/blue-msila.jpg";

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
      director: "Prof. BENTOUMI Sarra",
      directorRole: "Director, Incubator — Université de M'Sila",
      journeyLabel: "Our Journey",
      journeyTitle: "From founding decree\nto national model.",
      journeySub:
        "Six milestones that took M'Sila from Algeria's first university incubator to the model adopted nationwide.",
      milestones: [
        { year: "2018", accent: "blue",  tag: "Dec 12–13, 2018", title: "Approved at the Fall University event",        desc: "The Rector grants approval; Dr. Mir Ahmed is appointed founding director and the board approves the incubator's creation." },
        { year: "2019", accent: "green", tag: "27 May 2019",      title: "Ministerial Decree No. 182",                   desc: "Officially established as the first university incubator in Algeria — followed later by Blida, Ouargla and other universities.", stat: { n: "#1", l: "university incubator · Algeria" } },
        { year: "2021", accent: "blue",  tag: "October 2021",     title: "Label Tagging Program launched",               desc: "The incubator begins guiding projects onto startup.dz to earn the national Startup Label and unlock ASF financing." },
        { year: "2022", accent: "green", tag: "2021–2022",        title: "First nationally to launch Resolution 1275",   desc: "M'Sila is the first university in Algeria to convert graduation projects into registered startups under Resolution 1275." },
        { year: "2023", accent: "blue",  tag: "2022–2023",        title: "Resolution 1275 adopted nationwide",           desc: "The Ministry formally adopts Resolution 1275 across all Algerian universities — built on the M'Sila model." },
        { year: "2023", accent: "green", tag: "16 April 2023",    title: "#1 University Incubator at Science Day",        desc: "Honored by the Minister of Higher Education for most startups and most patents, and saluted by the Wali of M'Sila.", stat: { n: "202+", l: "patents filed to date" } },
        { year: "Now",  ongoing: true, accent: "blue", tag: "The journey continues", title: "And we're just getting started.", desc: "New cohorts in progress, deeper national and international partnerships, and a renewed push to make M'Sila a regional hub for student entrepreneurship." },
      ] as Milestone[],
      ecoLabel: "University Ecosystem",
      ecoTitle: "Part of a wider innovation network.",
      ecoSub: "The incubator works alongside four other innovation units at Université Mohamed Boudiaf.",
      ecosystem: [
        { ar: "دار الذكاء الاصطناعي", en: "House of Artificial Intelligence", d: "A dedicated hub advancing AI research, training and applied projects across faculties." },
        { ar: "مركز دعم التكنولوجيا والابتكار", en: "Center for Technology Support & Innovation", d: "Supports researchers and students in protecting and commercializing their innovations." },
        { ar: "مركز تطوير المقاولاتية", en: "Center for Entrepreneurship Development (CDE)", d: "Builds entrepreneurial skills and a startup mindset among the university community." },
        { ar: "مكتب الربط", en: "University–Business Liaison Office (BLUE)", d: "Connects the university with the economic world to turn research into real ventures." },
      ],
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
      director: "Prof. BENTOUMI Sarra",
      directorRole: "Directrice, Incubateur — Université de M'Sila",
      journeyLabel: "Notre Parcours",
      journeyTitle: "Du décret fondateur\nau modèle national.",
      journeySub:
        "Six jalons qui ont fait de M'Sila le premier incubateur universitaire d'Algérie, puis le modèle adopté à l'échelle nationale.",
      milestones: [
        { year: "2018", accent: "blue",  tag: "12–13 déc. 2018", title: "Approuvé lors de l'Université d'automne",        desc: "Le Recteur donne son accord ; le Dr Mir Ahmed est nommé directeur fondateur et le conseil approuve la création." },
        { year: "2019", accent: "green", tag: "27 mai 2019",      title: "Décret ministériel n° 182",                    desc: "Officiellement créé comme premier incubateur universitaire d'Algérie — suivi par Blida, Ouargla et d'autres.", stat: { n: "#1", l: "incubateur universitaire · Algérie" } },
        { year: "2021", accent: "blue",  tag: "Octobre 2021",     title: "Lancement du Label Tagging",                   desc: "L'incubateur oriente les projets vers startup.dz pour obtenir le Label Startup et accéder au financement ASF." },
        { year: "2022", accent: "green", tag: "2021–2022",        title: "Premier à lancer la Résolution 1275",          desc: "M'Sila est la première université d'Algérie à transformer les projets de fin d'études en startups via la Résolution 1275." },
        { year: "2023", accent: "blue",  tag: "2022–2023",        title: "Résolution 1275 adoptée nationalement",        desc: "Le Ministère adopte officiellement la Résolution 1275 dans toutes les universités algériennes — sur le modèle de M'Sila." },
        { year: "2023", accent: "green", tag: "16 avril 2023",    title: "#1 incubateur universitaire · Journée Science", desc: "Distingué par le Ministre pour le plus de startups et de brevets, et salué par le Wali de M'Sila.", stat: { n: "202+", l: "brevets déposés à ce jour" } },
        { year: "Now",  ongoing: true, accent: "blue", tag: "L'aventure continue", title: "Et ce n'est que le début.", desc: "De nouvelles cohortes en cours, des partenariats nationaux et internationaux plus profonds, et un nouvel élan pour faire de M'Sila un pôle régional." },
      ] as Milestone[],
      ecoLabel: "Écosystème universitaire",
      ecoTitle: "Au cœur d'un réseau d'innovation plus large.",
      ecoSub: "L'incubateur collabore avec quatre autres unités d'innovation de l'Université Mohamed Boudiaf.",
      ecosystem: [
        { ar: "دار الذكاء الاصطناعي", en: "Maison de l'Intelligence Artificielle", d: "Un pôle dédié à la recherche, la formation et les projets appliqués en IA." },
        { ar: "مركز دعم التكنولوجيا والابتكار", en: "Centre de Support Technologique & Innovation", d: "Accompagne chercheurs et étudiants pour protéger et valoriser leurs innovations." },
        { ar: "مركز تطوير المقاولاتية", en: "Centre de Développement de l'Entrepreneuriat (CDE)", d: "Développe les compétences entrepreneuriales et l'esprit startup." },
        { ar: "مكتب الربط", en: "Bureau de Liaison Université–Entreprise (BLUE)", d: "Relie l'université au monde économique pour transformer la recherche en projets réels." },
      ],
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
      director: "الأستاذة بن تومي سارة",
      directorRole: "مديرة الحاضنة — جامعة المسيلة",
      journeyLabel: "مسيرتنا",
      journeyTitle: "من مرسوم التأسيس\nإلى النموذج الوطني.",
      journeySub:
        "ست محطات نقلت مسيلة من أول حاضنة جامعية في الجزائر إلى النموذج المعتمد على المستوى الوطني.",
      milestones: [
        { year: "2018", accent: "blue",  tag: "12–13 ديسمبر 2018", title: "الموافقة في الجامعة الخريفية",            desc: "يمنح رئيس الجامعة الموافقة، ويُعيَّن الدكتور مير أحمد مديراً مؤسساً، ويوافق المجلس على الإنشاء." },
        { year: "2019", accent: "green", tag: "27 مايو 2019",       title: "المرسوم الوزاري رقم 182",                desc: "تأسست رسمياً كأول حاضنة جامعية في الجزائر — تبعتها البليدة وورقلة وجامعات أخرى.", stat: { n: "#1", l: "حاضنة جامعية · الجزائر" } },
        { year: "2021", accent: "blue",  tag: "أكتوبر 2021",        title: "إطلاق برنامج الوسم (Label Tagging)",     desc: "توجّه الحاضنة المشاريع إلى startup.dz للحصول على علامة الشركة الناشئة وتمويل ASF." },
        { year: "2022", accent: "green", tag: "2021–2022",          title: "الأولى وطنياً في إطلاق القرار 1275",     desc: "مسيلة أول جامعة في الجزائر تحوّل مشاريع التخرج إلى شركات ناشئة عبر القرار 1275." },
        { year: "2023", accent: "blue",  tag: "2022–2023",          title: "اعتماد القرار 1275 وطنياً",              desc: "تعتمد الوزارة القرار 1275 رسمياً في جميع الجامعات الجزائرية — استناداً إلى نموذج مسيلة." },
        { year: "2023", accent: "green", tag: "16 أبريل 2023",      title: "#1 حاضنة جامعية في يوم العلم",           desc: "تكريم من وزير التعليم العالي للأكثر شركات وبراءات، وتحية من والي مسيلة.", stat: { n: "+202", l: "براءة اختراع حتى الآن" } },
        { year: "Now",  ongoing: true, accent: "blue", tag: "الرحلة مستمرة", title: "وما زلنا في البداية.", desc: "دفعات جديدة قيد التنفيذ، شراكات وطنية ودولية أعمق، ودفعة متجددة لجعل مسيلة مركزاً إقليمياً لريادة الأعمال الطلابية." },
      ] as Milestone[],
      ecoLabel: "المنظومة الجامعية",
      ecoTitle: "جزء من شبكة ابتكار أوسع.",
      ecoSub: "تعمل الحاضنة جنباً إلى جنب مع أربع وحدات ابتكار أخرى في جامعة محمد بوضياف.",
      ecosystem: [
        { ar: "دار الذكاء الاصطناعي", en: "House of Artificial Intelligence", d: "مركز مخصص لتطوير أبحاث الذكاء الاصطناعي والتكوين والمشاريع التطبيقية عبر الكليات." },
        { ar: "مركز دعم التكنولوجيا والابتكار", en: "Center for Technology Support & Innovation", d: "يدعم الباحثين والطلاب في حماية ابتكاراتهم وتثمينها تجارياً." },
        { ar: "مركز تطوير المقاولاتية", en: "Center for Entrepreneurship Development (CDE)", d: "يبني المهارات المقاولاتية وروح المبادرة لدى المجتمع الجامعي." },
        { ar: "مكتب الربط", en: "University–Business Liaison Office (BLUE)", d: "يربط الجامعة بالعالم الاقتصادي لتحويل البحث إلى مشاريع حقيقية." },
      ],
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

        {/* ── University ecosystem ─────────────────────────────────────── */}
        <EcosystemGrid
          label={t.ecoLabel}
          title={t.ecoTitle}
          subtitle={t.ecoSub}
          items={t.ecosystem}
          logos={[logoAIHouse, logoCenterTech, logoCDE, logoBLUE]}
          isRTL={isRTL}
        />
      </div>
    </section>
  );
};

/* ─── Accent palette per ecosystem card index ────────────────────────── */
const ECO_ACCENTS = [
  { accent: "#1B4FBB", accentLight: "#D6E4F7", accentDark: "#0D2D72", tag: "AI", tagBg: "#EFF2FB" },
  { accent: "#1B4FBB", accentLight: "#D6E4F7", accentDark: "#0D2D72", tag: "CATI", tagBg: "#EFF2FB" },
  { accent: "#7DB83A", accentLight: "#EBF5D8", accentDark: "#5A8A22", tag: "CDE",  tagBg: "#F0FAE3" },
  { accent: "#7DB83A", accentLight: "#EBF5D8", accentDark: "#5A8A22", tag: "BLUE", tagBg: "#F0FAE3" },
];

/* ─── Single ecosystem card with logo ───────────────────────────────── */
const EcoCard: React.FC<{
  logo: string; ar: string; en: string; d: string;
  index: number; isRTL: boolean;
}> = React.memo(({ logo, ar, en, d, index, isRTL }) => {
  const [hov, setHov] = React.useState(false);
  const { accent, accentLight, accentDark, tag, tagBg } = ECO_ACCENTS[index];
  const shadowColor = index < 2
    ? "rgba(27,79,187,0.16)"
    : "rgba(125,184,58,0.18)";

  return (
    <div
      data-reveal-child
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ["--i" as string]: index,
        position: "relative",
        borderRadius: 24,
        overflow: "hidden",
        border: `1.5px solid ${hov ? accent : "#E4E6EF"}`,
        background: "#fff",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hov
          ? `0 20px 50px ${shadowColor}, 0 4px 12px rgba(0,0,0,0.06)`
          : "0 2px 12px rgba(0,0,0,0.04)",
        transition: "all 0.30s cubic-bezier(0.34,1.2,0.64,1)",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Logo banner ─────────────────────────────────────────────── */}
      <div style={{
        position: "relative",
        background: "#fff",
        borderBottom: `1px solid ${hov ? accentLight : "#F0F1F7"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "28px 24px 24px",
        minHeight: 148,
        overflow: "hidden",
        transition: "border-color 0.25s ease",
      }}>
        {/* Soft background glow behind logo */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${accentLight}55, transparent 75%)`,
          opacity: hov ? 1 : 0.5,
          transition: "opacity 0.35s ease",
          pointerEvents: "none",
        }} />

        {/* Tag pill — top corner */}
        <div style={{
          position: "absolute",
          top: 14,
          insetInlineStart: 14,
          padding: "4px 10px",
          borderRadius: 9999,
          background: tagBg,
          color: accentDark,
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: "0.10em",
          fontFamily: "'Syne',sans-serif",
          zIndex: 1,
        }}>{tag}</div>

        {/* Logo image */}
        <img
          src={logo}
          alt={en}
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 170,
            maxHeight: 100,
            width: "auto",
            height: "auto",
            objectFit: "contain",
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))",
            transform: hov ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.35s cubic-bezier(0.34,1.2,0.64,1)",
          }}
        />
      </div>

      {/* ── Text body ────────────────────────────────────────────────── */}
      <div style={{
        padding: "20px 24px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        flex: 1,
        direction: isRTL ? "rtl" : "ltr",
      }}>
        {/* Arabic name — always in native RTL direction regardless of page dir */}
        <div style={{
          fontFamily: "'Noto Kufi Arabic','DM Sans',sans-serif",
          fontSize: "1.0rem",
          fontWeight: 700,
          color: "#121420",
          lineHeight: 1.45,
          marginBottom: 4,
          direction: "rtl",
          textAlign: isRTL ? "start" : "start",
        }}>{ar}</div>

        {/* English/French label */}
        <div style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: 12.5,
          fontWeight: 700,
          color: accentDark,
          lineHeight: 1.35,
          marginBottom: 14,
          letterSpacing: "0.01em",
          direction: isRTL ? "rtl" : "ltr",
        }}>{en}</div>

        {/* Divider line in accent color */}
        <div style={{
          width: 32, height: 2.5,
          borderRadius: 2,
          background: accent,
          marginBottom: 14,
          opacity: hov ? 1 : 0.4,
          transition: "opacity 0.25s ease",
          alignSelf: isRTL ? "flex-end" : "flex-start",
        }} />

        {/* Description */}
        <div style={{
          fontSize: 13.5,
          color: "#6B7089",
          lineHeight: 1.68,
          direction: isRTL ? "rtl" : "ltr",
        }}>{d}</div>
      </div>

      {/* Bottom accent strip that grows on hover */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0, right: 0,
        height: hov ? 3 : 0,
        background: `linear-gradient(90deg, ${accent}, ${accentDark})`,
        transition: "height 0.25s ease",
      }} />
    </div>
  );
});

/* ─── University ecosystem 2×2 grid ─────────────────────────────────── */
const EcosystemGrid: React.FC<{
  label: string; title: string; subtitle: string;
  items: { ar: string; en: string; d: string }[];
  logos: string[];
  isRTL: boolean;
}> = ({ label, title, subtitle, items, logos, isRTL }) => {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div style={{ marginTop: "6rem" }}>
      {/* ── Section header ─────────────────────────────────────────── */}
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <span style={{
          display: "inline-block", padding: "5px 14px", borderRadius: 100,
          fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.10em",
          background: "#D6E4F7", color: "#1B4FBB", marginBottom: 18,
        }}>{label}</span>

        <div style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 700, color: "#121420", lineHeight: 1.15,
          marginBottom: 14, letterSpacing: "-0.015em",
        }}>{title}</div>

        <div style={{
          fontSize: "1.02rem", color: "#6B7089",
          lineHeight: 1.75, maxWidth: 580, margin: "0 auto",
        }}>{subtitle}</div>
      </div>

      {/* ── 2×2 card grid ──────────────────────────────────────────── */}
      <div
        ref={ref}
        data-reveal
        data-shown={shown ? "true" : "false"}
        data-ecosystem-grid
        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }}
      >
        {items.map((it, i) => (
          <EcoCard
            key={i}
            logo={logos[i]}
            ar={it.ar}
            en={it.en}
            d={it.d}
            index={i}
            isRTL={isRTL}
          />
        ))}
      </div>
    </div>
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
