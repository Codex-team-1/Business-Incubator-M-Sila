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
        "Founded at Université Mohamed Boudiaf, the Incubateur M'Sila is Algeria's first and highest-ranked university-based business incubator. Our mandate: transform student innovation into viable, scalable startups that drive the country's future.",
      body2:
        "Recognized as Algeria's #1 university incubator at Science Day 2023, we support founders from every faculty — sciences, engineering, law, medicine, economics, and beyond.",
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
      director: "Prof. Ben Toumi Sarah",
      directorRole: "Director, Incubateur Université de M'Sila",
      journeyLabel: "Our Journey",
      journeyTitle: "Six years of\nbuilding the future.",
      journeySub:
        "From a single founding mandate to Algeria's top-ranked university incubator — here's how we got here.",
      milestones: [
        { year: "2019", accent: "blue",  tag: "Founding",       title: "Established at Université Mohamed Boudiaf",     desc: "The incubator opens its doors as the first university-based business incubator in Algeria, anchored at the M'Sila campus." },
        { year: "2020", accent: "green", tag: "First Cohort",   title: "Inaugural incubation cohort launched",           desc: "Twelve student-led startups enter the program across science, computer science, and economics faculties.", stat: { n: "12", l: "startups · first cohort" } },
        { year: "2021", accent: "blue",  tag: "Partnerships",   title: "ANSEJ & CNAC funding partnerships signed",       desc: "Formal agreements unlock state-backed funding rails for incubated teams, alongside private investor introductions." },
        { year: "2022", accent: "green", tag: "Curriculum",     title: "Structured 85+ hour annual program launched",    desc: "Six-module curriculum rolls out — AI, business modeling, fundraising, legal/IP, marketing, and communications.", stat: { n: "85+", l: "training hours / year" } },
        { year: "2023", accent: "blue",  tag: "Recognition",    title: "Ranked #1 University Incubator in Algeria",      desc: "Honored at the national Science Day ceremony for excellence in entrepreneurial training and startup outcomes.", stat: { n: "#1", l: "in Algeria · Science Day" } },
        { year: "2024", accent: "green", tag: "Impact",         title: "120+ startups supported across all faculties",   desc: "Alumni network expands to every faculty, with twelve active partner organizations and a thriving on-campus hub.", stat: { n: "120+", l: "startups launched" } },
        { year: "Now",  ongoing: true, accent: "blue", tag: "The journey continues", title: "And we're just getting started.", desc: "New cohorts in progress, deeper international partnerships, and a renewed push to make M'Sila a regional hub for student entrepreneurship." },
      ] as Milestone[],
    },
    FR: {
      label: "À propos de l'incubateur",
      title: "L'incubateur universitaire\npionnier d'Algérie.",
      body1:
        "Fondé à l'Université Mohamed Boudiaf, l'Incubateur M'Sila est le premier et meilleur incubateur d'entreprises universitaire d'Algérie. Notre mandat : transformer l'innovation étudiante en startups viables et scalables qui façonnent l'avenir du pays.",
      body2:
        "Reconnu comme incubateur universitaire #1 d'Algérie à la Journée de la Science 2023, nous accompagnons des fondateurs de toutes les facultés — sciences, ingénierie, droit, médecine, économie, et au-delà.",
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
      director: "Prof. Ben Toumi Sarah",
      directorRole: "Directeur, Incubateur Université de M'Sila",
      journeyLabel: "Notre Parcours",
      journeyTitle: "Six années à\nbâtir l'avenir.",
      journeySub:
        "D'un mandat fondateur à l'incubateur universitaire #1 d'Algérie — voici comment.",
      milestones: [
        { year: "2019", accent: "blue",  tag: "Fondation",       title: "Création à l'Université Mohamed Boudiaf",        desc: "L'incubateur ouvre comme le premier incubateur universitaire en Algérie, sur le campus de M'Sila." },
        { year: "2020", accent: "green", tag: "Première Cohorte",title: "Lancement de la cohorte inaugurale",             desc: "Douze startups étudiantes entrent dans le programme à travers sciences, informatique et économie.", stat: { n: "12", l: "startups · 1ʳᵉ cohorte" } },
        { year: "2021", accent: "blue",  tag: "Partenariats",    title: "Partenariats ANSEJ & CNAC signés",               desc: "Accords formels qui ouvrent l'accès aux financements publics et aux investisseurs privés." },
        { year: "2022", accent: "green", tag: "Curriculum",      title: "Programme annuel structuré 85+ heures",          desc: "Six modules : IA, modèle économique, levée de fonds, juridique, marketing, communication.", stat: { n: "85+", l: "heures de formation / an" } },
        { year: "2023", accent: "blue",  tag: "Reconnaissance",  title: "Classé #1 incubateur universitaire en Algérie",  desc: "Distinction nationale à la Journée de la Science pour l'excellence du programme et de ses résultats.", stat: { n: "#1", l: "en Algérie · Journée Science" } },
        { year: "2024", accent: "green", tag: "Impact",          title: "120+ startups accompagnées",                    desc: "Le réseau alumni s'étend à toutes les facultés, avec douze partenaires actifs et un hub sur campus.", stat: { n: "120+", l: "startups lancées" } },
        { year: "Now",  ongoing: true, accent: "blue", tag: "L'aventure continue", title: "Et ce n'est que le début.", desc: "De nouvelles cohortes en cours, des partenariats internationaux plus profonds, et un nouvel élan pour faire de M'Sila un pôle régional de l'entrepreneuriat étudiant." },
      ] as Milestone[],
    },
    AR: {
      label: "حول الحاضنة",
      title: "حاضنة الجامعة\nالرائدة في الجزائر.",
      body1:
        "تأسست حاضنة جامعة مسيلة في جامعة محمد بوضياف بوصفها أول وأعلى حاضنة أعمال جامعية في الجزائر. مهمتنا تحويل ابتكار الطلاب إلى شركات ناشئة قابلة للنمو تقود مستقبل البلاد.",
      body2:
        "معترف بها كحاضنة جامعية #1 في الجزائر في يوم العلم 2023، ندعم المؤسسين من جميع الكليات — العلوم والهندسة والقانون والطب والاقتصاد وغيرها.",
      pillarLabel: "ما نؤمن به",
      pillars: [
        { t: "الابتكار",   d: "تفكير تطلعي، أساليب حديثة، لغة تقنية متقدمة." },
        { t: "المصداقية",  d: "مدعومة جامعياً، صرامة مؤسسية في كل مرحلة." },
        { t: "الوصول",     d: "متعددة اللغات، جميع الكليات مرحب بها، شاملة بالتصميم." },
        { t: "النمو",      d: "شراكات حقيقية مع ANSEJ وCNAC والمستثمرين الخاصين." },
      ],
      directorNoteLabel: "كلمة المدير",
      quote: "مهمتنا تحويل أفكار طلاب مسيلة إلى أعمال تقود مستقبل الجزائر.",
      director: "الأستاذة بن طومي سارة",
      directorRole: "مديرة، حاضنة جامعة مسيلة",
      journeyLabel: "مسيرتنا",
      journeyTitle: "ست سنوات من\nبناء المستقبل.",
      journeySub:
        "من تكليف تأسيسي إلى الحاضنة الجامعية #1 في الجزائر — إليكم كيف وصلنا.",
      milestones: [
        { year: "2019", accent: "blue",  tag: "التأسيس",       title: "التأسيس في جامعة محمد بوضياف",              desc: "تفتح الحاضنة أبوابها كأول حاضنة أعمال جامعية في الجزائر، في حرم مسيلة." },
        { year: "2020", accent: "green", tag: "الدفعة الأولى", title: "انطلاق الدفعة التأسيسية",                    desc: "اثنتا عشرة شركة ناشئة طلابية تدخل البرنامج عبر كليات العلوم والحاسوب والاقتصاد.", stat: { n: "12", l: "شركة · الدفعة الأولى" } },
        { year: "2021", accent: "blue",  tag: "الشراكات",      title: "توقيع شراكات ANSEJ وCNAC",                   desc: "اتفاقيات رسمية تفتح قنوات التمويل الحكومي والمستثمرين الخاصين." },
        { year: "2022", accent: "green", tag: "المنهج",        title: "إطلاق البرنامج السنوي المنظم +85 ساعة",      desc: "ست وحدات: الذكاء الاصطناعي، نمذجة الأعمال، التمويل، القانون، التسويق، الاتصال.", stat: { n: "+85", l: "ساعة تكوين / سنوياً" } },
        { year: "2023", accent: "blue",  tag: "التقدير",       title: "مصنفة #1 حاضنة جامعية في الجزائر",          desc: "تكريم وطني في يوم العلم لتميز البرنامج ونتائجه.", stat: { n: "#1", l: "في الجزائر · يوم العلم" } },
        { year: "2024", accent: "green", tag: "الأثر",         title: "+120 شركة ناشئة مدعومة",                     desc: "شبكة الخريجين تمتد إلى جميع الكليات مع اثنتي عشرة منظمة شريكة نشطة.", stat: { n: "+120", l: "شركة ناشئة" } },
        { year: "Now",  ongoing: true, accent: "blue", tag: "الرحلة مستمرة", title: "وما زلنا في البداية.", desc: "دفعات جديدة قيد التنفيذ، شراكات دولية أعمق، ودفعة متجددة لجعل مسيلة مركزاً إقليمياً لريادة الأعمال الطلابية." },
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
