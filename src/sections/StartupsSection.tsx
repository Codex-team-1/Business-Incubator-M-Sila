import React from "react";
import type { Lang } from "../types";
import { SectionHeader } from "../components/SharedCards";
import sign from "../assets/incubator-sign.jpg";

/* ─── STARTUP SPACE / PORTFOLIO ─── */

/* ── Animated counter hook ── */
function useCounter(target: number, duration = 1400, trigger: boolean = true) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return value;
}

/* ── Intersection observer hook ── */
function useInView(threshold = 0.2) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Stat pill with animated counter ── */
const StatPill: React.FC<{
  value: number;
  label: string;
  suffix?: string;
  accent?: "blue" | "green";
  triggered: boolean;
}> = ({ value, label, suffix = "", accent = "green", triggered }) => {
  const count = useCounter(value, 1200, triggered);
  const isGreen = accent === "green";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: "18px 22px",
        borderRadius: 18,
        background: isGreen
          ? "linear-gradient(135deg,#EBF5D8 0%,#D7EBB5 100%)"
          : "linear-gradient(135deg,#D6E4F7 0%,#B9D0F0 100%)",
        border: `1px solid ${isGreen ? "#C4E390" : "#A3C2E8"}`,
        flex: "1 1 0",
        minWidth: 90,
      }}
    >
      <span
        className="num"
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
          fontWeight: 800,
          color: isGreen ? "#3D6B14" : "#0D2D72",
          lineHeight: 1,
          letterSpacing: "-0.03em",
        }}
      >
        {count}{suffix}
      </span>
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: isGreen ? "#5A8A22" : "#1B4FBB",
          textTransform: "uppercase",
          letterSpacing: "0.07em",
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {label}
      </span>
    </div>
  );
};

/* ── Domain badge ── */
const DomainBadge: React.FC<{ icon: React.ReactNode; label: string; count: number; color: string; bg: string }> = ({
  icon, label, count, color, bg,
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 16px",
        borderRadius: 14,
        background: hovered ? bg : "#fff",
        border: `1px solid ${hovered ? color + "55" : "#E4E6EF"}`,
        transition: "all 0.22s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? `0 8px 24px ${color}22` : "0 1px 4px rgba(0,0,0,0.04)",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          border: `1px solid ${color}33`,
        }}
      >
        {icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#121420", lineHeight: 1.2 }}>{label}</div>
        <div style={{ fontSize: 11, color: "#6B7089", marginTop: 2 }}>
          <span className="num" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color, fontSize: 12 }}>{count}</span>
          {" "}startups
        </div>
      </div>
    </div>
  );
};

/* ── Journey step (mini roadmap) ── */
const JourneyStep: React.FC<{
  step: number;
  title: string;
  desc: string;
  isLast?: boolean;
  accent?: "blue" | "green";
}> = ({ step, title, desc, isLast, accent = "blue" }) => {
  const [hovered, setHovered] = React.useState(false);
  const color = accent === "green" ? "#7DB83A" : "#1B4FBB";
  const bg = accent === "green" ? "#EBF5D8" : "#D6E4F7";
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "flex", gap: 16, alignItems: "flex-start", position: "relative" }}
    >
      {/* Step node + connector */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: hovered ? color : bg,
            border: `2px solid ${color}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Syne',sans-serif",
            fontSize: 14,
            fontWeight: 800,
            color: hovered ? "#fff" : color,
            transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
            transform: hovered ? "scale(1.12)" : "scale(1)",
            boxShadow: hovered ? `0 0 0 6px ${color}22` : "none",
            zIndex: 1,
          }}
        >
          {step}
        </div>
        {!isLast && (
          <div
            style={{
              width: 2,
              flex: 1,
              minHeight: 28,
              background: `linear-gradient(180deg, ${color}66 0%, ${color}11 100%)`,
              borderRadius: 2,
              marginTop: 4,
            }}
          />
        )}
      </div>
      {/* Content */}
      <div style={{ paddingTop: 7, paddingBottom: isLast ? 0 : 20 }}>
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "0.97rem",
            fontWeight: 700,
            color: "#121420",
            marginBottom: 4,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 13, color: "#6B7089", lineHeight: 1.6 }}>{desc}</div>
      </div>
    </div>
  );
};

/* ─── MAIN SECTION ─── */
const StartupsSection: React.FC<{
  lang: Lang;
  onNav: (id: string) => void;
}> = ({ lang, onNav }) => {
  const isRTL = lang === "AR";
  const { ref: statsRef, inView: statsInView } = useInView(0.3);
  const [activeTab, setActiveTab] = React.useState<"space" | "process" | "domains">("space");

  const t = {
    EN: {
      label: "Project / Startup Space",
      title: "Inside the M'Sila startup space.",
      sub: "A dedicated co-working hub on the Boudiaf campus — home to graduated startups and a growing pipeline of active projects.",
      spaceTitle: "The co-working hub",
      spaceSub: "Open access for incubated teams — equipped studios, meeting rooms, and a quiet zone for deep work.",
      tabs: ["Our Space", "Incubation Path", "Startup Domains"],
      statsTitle: "By the numbers",
      statsSub: "Impact across the Boudiaf campus since 2020.",
      stats: [
        { value: 17, label: "Graduated\nStartups", suffix: "" },
        { value: 4, label: "Active\nYears", suffix: "+" },
        { value: 6, label: "Faculties\nCovered", suffix: "" },
        { value: 150, label: "Students\nSupported", suffix: "+" },
      ],
      features: [
        "Open-access workstations & meeting rooms",
        "High-speed fibre internet & power backup",
        "On-campus, 5 minutes from any faculty",
        "Free for incubated startups, 24/7 access",
      ],
      processTitle: "Incubation Roadmap",
      processSub: "From idea to graduate — how your startup moves through the incubator.",
      steps: [
        {
          title: "Apply & Screen",
          desc: "Submit your project form. Our team reviews feasibility, novelty, and team readiness within 2 weeks.",
        },
        {
          title: "Pre-Incubation",
          desc: "Validate your concept with mentors. Attend workshops on lean methodology, pitching, and IP basics.",
        },
        {
          title: "Active Incubation",
          desc: "Get a desk in the co-working space, access legal & financial advisors, and build your MVP.",
        },
        {
          title: "Pitch & Graduate",
          desc: "Present to a jury, receive your official startup label under Resolution 1275, and launch.",
        },
      ],
      domainsTitle: "Startup Domains",
      domainsSub: "Fields represented across all graduated and active projects.",
      domains: [
        { label: "Agri-tech", count: 4 },
        { label: "EdTech", count: 3 },
        { label: "HealthTech", count: 3 },
        { label: "Clean Energy", count: 3 },
        { label: "Digital Services", count: 2 },
        { label: "Fintech", count: 2 },
      ],
      cta: "Your startup could be the next — apply now",
      ctaBtn: "Apply Now",
      ctaNote: "Free to apply · No equity taken · Open to all faculties",
    },
    FR: {
      label: "Espace projets / Startups",
      title: "À l'intérieur de l'espace startup de M'Sila.",
      sub: "Un hub co-working dédié sur le campus Boudiaf — accueillant les startups diplômées et un pipeline croissant de projets actifs.",
      spaceTitle: "Le hub co-working",
      spaceSub: "Accès libre pour les équipes incubées — studios équipés, salles de réunion, zone calme.",
      tabs: ["Notre espace", "Parcours d'incubation", "Domaines"],
      statsTitle: "En chiffres",
      statsSub: "Impact sur le campus Boudiaf depuis 2020.",
      stats: [
        { value: 17, label: "Startups\nDiplômées", suffix: "" },
        { value: 4, label: "Années\nActives", suffix: "+" },
        { value: 6, label: "Facultés\nCouvertes", suffix: "" },
        { value: 150, label: "Étudiants\nSoutenus", suffix: "+" },
      ],
      features: [
        "Postes de travail et salles de réunion en libre accès",
        "Internet fibre haut débit & onduleur",
        "Sur le campus, à 5 min de toute faculté",
        "Gratuit pour startups incubées, accès 24/7",
      ],
      processTitle: "Parcours d'incubation",
      processSub: "De l'idée à la diplomation — comment votre startup progresse.",
      steps: [
        {
          title: "Candidater & Sélection",
          desc: "Déposez votre dossier. Notre équipe évalue la faisabilité et la maturité du projet en 2 semaines.",
        },
        {
          title: "Pré-Incubation",
          desc: "Validez votre concept avec des mentors. Ateliers lean, pitch, et propriété intellectuelle.",
        },
        {
          title: "Incubation Active",
          desc: "Accédez au co-working, aux conseillers juridiques et financiers, et construisez votre MVP.",
        },
        {
          title: "Pitcher & Diplômer",
          desc: "Présentez devant un jury, obtenez votre label startup via la Résolution 1275, et lancez-vous.",
        },
      ],
      domainsTitle: "Domaines d'activité",
      domainsSub: "Secteurs représentés parmi les projets diplômés et actifs.",
      domains: [
        { label: "Agri-tech", count: 4 },
        { label: "EdTech", count: 3 },
        { label: "HealthTech", count: 3 },
        { label: "Énergie propre", count: 3 },
        { label: "Services numériques", count: 2 },
        { label: "Fintech", count: 2 },
      ],
      cta: "Votre projet pourrait être ici — candidatez maintenant.",
      ctaBtn: "Candidater",
      ctaNote: "Candidature gratuite · Sans prise de capital · Toutes facultés",
    },
    AR: {
      label: "فضاء المشاريع / الشركات الناشئة",
      title: "داخل فضاء الشركات الناشئة في مسيلة.",
      sub: "مركز عمل مشترك مخصص في حرم بوضياف — يحتضن الشركات الخريجة وخطّ مشاريع نشطة متنامٍ.",
      spaceTitle: "مركز العمل المشترك",
      spaceSub: "وصول مفتوح للفرق المحتضنة — استوديوهات مجهزة وغرف اجتماعات ومنطقة هادئة.",
      tabs: ["فضاؤنا", "مسار الحضانة", "مجالات الشركات"],
      statsTitle: "بالأرقام",
      statsSub: "الأثر في حرم بوضياف منذ 2020.",
      stats: [
        { value: 17, label: "شركة\nخريجة", suffix: "" },
        { value: 4, label: "سنوات\nنشطة", suffix: "+" },
        { value: 6, label: "كليات\nمشمولة", suffix: "" },
        { value: 150, label: "طالب\nمدعوم", suffix: "+" },
      ],
      features: [
        "محطات عمل وغرف اجتماعات بوصول مفتوح",
        "إنترنت ألياف عالي السرعة ومولّد احتياطي",
        "داخل الحرم الجامعي، 5 دقائق من أي كلية",
        "مجاني للشركات المحتضنة، وصول 24/7",
      ],
      processTitle: "خارطة طريق الحضانة",
      processSub: "من الفكرة إلى التخرج — كيف تتقدم شركتك عبر الحاضنة.",
      steps: [
        {
          title: "التقديم والتصفية",
          desc: "أرسل استمارتك. يراجع فريقنا الجدوى وجاهزية الفريق خلال أسبوعين.",
        },
        {
          title: "ما قبل الحضانة",
          desc: "تحقق من فكرتك مع المرشدين. حضور ورش عمل حول منهجية لين والعروض التقديمية.",
        },
        {
          title: "الحضانة النشطة",
          desc: "احصل على مكان في فضاء العمل المشترك، واستشارات قانونية ومالية، وابنِ نموذجك الأولي.",
        },
        {
          title: "العرض التقديمي والتخرج",
          desc: "قدّم أمام لجنة تحكيم، واحصل على تصنيف شركة ناشئة بموجب القرار 1275، وانطلق.",
        },
      ],
      domainsTitle: "مجالات الشركات الناشئة",
      domainsSub: "القطاعات الممثلة في المشاريع الخريجة والنشطة.",
      domains: [
        { label: "تقنيات زراعية", count: 4 },
        { label: "تقنيات تعليمية", count: 3 },
        { label: "تقنيات صحية", count: 3 },
        { label: "طاقة نظيفة", count: 3 },
        { label: "خدمات رقمية", count: 2 },
        { label: "تقنيات مالية", count: 2 },
      ],
      cta: "قد يكون مشروعك هنا — تقدّم الآن.",
      ctaBtn: "تقدّم الآن",
      ctaNote: "التقديم مجاني · بدون حصص ملكية · مفتوح لجميع الكليات",
    },
  }[lang];

  /* domain icon paths */
  const domainIcons = [
    /* Agri-tech */
    <svg key="a" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5A8A22" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12"/><path d="M12 6v6l4 2"/><path d="M2 12a10 10 0 0 0 5 8.66"/></svg>,
    /* EdTech */
    <svg key="b" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B4FBB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    /* HealthTech */
    <svg key="c" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E74C3C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    /* Clean Energy */
    <svg key="d" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F39C12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
    /* Digital Services */
    <svg key="e" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8E44AD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    /* Fintech */
    <svg key="f" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  ];
  const domainColors = ["#5A8A22", "#1B4FBB", "#E74C3C", "#F39C12", "#8E44AD", "#2ECC71"];
  const domainBgs   = ["#EBF5D8", "#D6E4F7", "#FDEDEC", "#FEF9E7", "#F5EEF8", "#EAFAF1"];

  /* total for progress bars */
  const domainTotal = t.domains.reduce((s, d) => s + d.count, 0);

  return (
    <section
      id="startups"
      data-screen-label="Startups"
      style={{
        background: "#fff",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      {/* ── HERO HEADER ── */}
      <div style={{ padding: "6rem 2rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader
            label={t.label}
            title={t.title}
            subtitle={t.sub}
            center
          />
        </div>
      </div>

      {/* ── TABS ── */}
      <div style={{ padding: "0 2rem", position: "sticky", top: 72, zIndex: 10, background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              gap: 4,
              borderBottom: "2px solid #E4E6EF",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            {(["space", "process", "domains"] as const).map((tab, i) => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "14px 22px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 14,
                    fontWeight: active ? 700 : 500,
                    color: active ? "#0D2D72" : "#6B7089",
                    borderBottom: `2px solid ${active ? "#1B4FBB" : "transparent"}`,
                    marginBottom: -2,
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                    letterSpacing: active ? "-0.01em" : "0",
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = "#383D58"; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = "#6B7089"; }}
                >
                  {t.tabs[i]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── TAB PANELS ── */}
      <div style={{ padding: "3rem 2rem 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* ═══ TAB 1: OUR SPACE ═══ */}
          {activeTab === "space" && (
            <div>
              {/* Hero grid — photo + features */}
              <div
                data-startups-hero
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.15fr 1fr",
                  gap: "3rem",
                  alignItems: "stretch",
                  marginBottom: "3.5rem",
                }}
              >
                {/* Photo block */}
                <div
                  style={{
                    borderRadius: 24,
                    overflow: "hidden",
                    position: "relative",
                    minHeight: 420,
                    backgroundImage: `url(${sign})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "0 20px 60px rgba(13,45,114,0.18)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(13,45,114,0.0) 0%, rgba(13,45,114,0.05) 45%, rgba(13,45,114,0.88) 100%)",
                    }}
                  />
                  {/* Live badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      insetInlineStart: 20,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      padding: "7px 13px",
                      borderRadius: 9999,
                      background: "rgba(0,0,0,0.45)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#fff",
                      fontFamily: "'DM Sans',sans-serif",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#7DB83A",
                        boxShadow: "0 0 0 3px rgba(125,184,58,0.35)",
                        animation: "heroPulse 1.8s ease-in-out infinite",
                        display: "inline-block",
                      }}
                    />
                    Open now
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 28,
                      insetInlineStart: 28,
                      insetInlineEnd: 28,
                      color: "#fff",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontSize: "1.6rem",
                        fontWeight: 700,
                        marginBottom: 8,
                        letterSpacing: "-0.01em",
                        lineHeight: 1.15,
                      }}
                    >
                      {t.spaceTitle}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.88)",
                        lineHeight: 1.6,
                        maxWidth: 380,
                      }}
                    >
                      {t.spaceSub}
                    </div>
                  </div>
                </div>

                {/* Features list — polished */}
                <div
                  style={{
                    background: "#F7F8FC",
                    border: "1px solid #E4E6EF",
                    borderRadius: 24,
                    padding: 32,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 20,
                  }}
                >
                  {t.features.map((f, i) => (
                    <FeatureRow key={i} text={f} index={i} />
                  ))}
                </div>
              </div>

              {/* ── ANIMATED STATS ROW ── */}
              <div ref={statsRef}>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "5px 14px",
                      borderRadius: 100,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      background: "#EBF5D8",
                      color: "#5A8A22",
                      marginBottom: 12,
                    }}
                  >
                    {t.statsTitle}
                  </span>
                  <div
                    style={{
                      fontSize: "1rem",
                      color: "#6B7089",
                      lineHeight: 1.6,
                    }}
                  >
                    {t.statsSub}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    marginBottom: "3.5rem",
                  }}
                >
                  {t.stats.map((s, i) => (
                    <StatPill
                      key={i}
                      value={s.value}
                      label={s.label}
                      suffix={s.suffix}
                      accent={i % 2 === 0 ? "green" : "blue"}
                      triggered={statsInView}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ═══ TAB 2: INCUBATION PROCESS ═══ */}
          {activeTab === "process" && (
            <div style={{ maxWidth: 780, margin: "0 auto", paddingBottom: "3.5rem" }}>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                    fontWeight: 700,
                    color: "#121420",
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t.processTitle}
                </div>
                <div style={{ fontSize: "1rem", color: "#6B7089", lineHeight: 1.65 }}>
                  {t.processSub}
                </div>
              </div>

              <div
                style={{
                  background: "#F7F8FC",
                  border: "1px solid #E4E6EF",
                  borderRadius: 24,
                  padding: "32px 36px",
                }}
              >
                {t.steps.map((s, i) => (
                  <JourneyStep
                    key={i}
                    step={i + 1}
                    title={s.title}
                    desc={s.desc}
                    isLast={i === t.steps.length - 1}
                    accent={i % 2 === 0 ? "blue" : "green"}
                  />
                ))}
              </div>

              {/* Resolution 1275 callout */}
              <div
                style={{
                  marginTop: 24,
                  padding: "20px 24px",
                  borderRadius: 18,
                  background: "linear-gradient(135deg,#D6E4F7 0%,#EBF5D8 100%)",
                  border: "1px solid #C4D9F0",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 2px 8px rgba(27,79,187,0.12)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B4FBB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 700, color: "#0D2D72", marginBottom: 3 }}>
                    Resolution 1275
                  </div>
                  <div style={{ fontSize: 12.5, color: "#383D58", lineHeight: 1.55 }}>
                    {lang === "AR"
                      ? "الإطار القانوني الوطني الذي يمنح مشاريع التخرج الجامعية تصنيف الشركات الناشئة الرسمية."
                      : lang === "FR"
                      ? "Le cadre national qui permet aux projets de fin d'études de recevoir un statut officiel de startup."
                      : "The national framework that grants university graduation projects official startup status."}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══ TAB 3: DOMAINS ═══ */}
          {activeTab === "domains" && (
            <div style={{ paddingBottom: "3.5rem" }}>
              <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                    fontWeight: 700,
                    color: "#121420",
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t.domainsTitle}
                </div>
                <div style={{ fontSize: "1rem", color: "#6B7089", lineHeight: 1.65 }}>
                  {t.domainsSub}
                </div>
              </div>

              {/* Domain badge grid */}
              <div
                data-ecosystem-grid
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                {t.domains.map((d, i) => (
                  <DomainBadge
                    key={i}
                    icon={domainIcons[i]}
                    label={d.label}
                    count={d.count}
                    color={domainColors[i]}
                    bg={domainBgs[i]}
                  />
                ))}
              </div>

              {/* Progress bars */}
              <div
                style={{
                  background: "#F7F8FC",
                  border: "1px solid #E4E6EF",
                  borderRadius: 20,
                  padding: "28px 32px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#6B7089",
                    marginBottom: 18,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {lang === "AR" ? "التوزيع النسبي" : lang === "FR" ? "Répartition" : "Distribution"}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {t.domains.map((d, i) => (
                    <DomainBar
                      key={i}
                      label={d.label}
                      count={d.count}
                      total={domainTotal}
                      color={domainColors[i]}
                      bg={domainBgs[i]}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div style={{ padding: "3rem 2rem 6rem" }}>
        <div
          data-startups-cta-grid
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            background: "linear-gradient(135deg, #0D2D72 0%, #1B4FBB 55%, #7DB83A 100%)",
            borderRadius: 28,
            padding: "3rem",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 32,
            boxShadow: "0 24px 64px rgba(13,45,114,0.28)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              top: -60,
              insetInlineEnd: 160,
              width: 220,
              height: 220,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -40,
              insetInlineStart: -40,
              width: 160,
              height: 160,
              borderRadius: "50%",
              background: "rgba(125,184,58,0.12)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative" }}>
            <div
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginBottom: 10,
              }}
            >
              {t.cta}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.65)",
                fontFamily: "'DM Sans',sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              {t.ctaNote}
            </div>
          </div>

          <button
            onClick={() => onNav("contact")}
            style={{
              padding: "0 32px",
              height: 56,
              background: "#fff",
              color: "#0D2D72",
              border: "none",
              borderRadius: 14,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "'DM Sans',sans-serif",
              boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "all 0.22s ease",
              position: "relative",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.22)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.18)";
            }}
          >
            {t.ctaBtn}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0D2D72"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={isRTL ? "M19 12H5M11 5l-7 7 7 7" : "M5 12h14M13 5l7 7-7 7"} />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

/* ── Feature row with animated checkmark ── */
const FeatureRow: React.FC<{ text: string; index: number }> = ({ text }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        padding: "12px 14px",
        borderRadius: 14,
        background: hovered ? "#fff" : "transparent",
        border: `1px solid ${hovered ? "#D7EBB5" : "transparent"}`,
        transition: "all 0.2s ease",
        transform: hovered ? "translateX(4px)" : "none",
        boxShadow: hovered ? "0 4px 16px rgba(125,184,58,0.10)" : "none",
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: hovered ? "#7DB83A" : "#EBF5D8",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease",
          boxShadow: hovered ? "0 4px 12px rgba(125,184,58,0.30)" : "none",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke={hovered ? "#fff" : "#5A8A22"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <div
        style={{
          fontSize: 14.5,
          color: hovered ? "#121420" : "#383D58",
          lineHeight: 1.55,
          paddingTop: 4,
          fontWeight: hovered ? 500 : 400,
          transition: "color 0.2s ease",
        }}
      >
        {text}
      </div>
    </div>
  );
};

/* ── Domain bar with animated fill ── */
const DomainBar: React.FC<{
  label: string;
  count: number;
  total: number;
  color: string;
  bg: string;
}> = ({ label, count, total, color }) => {
  const { ref, inView } = useInView(0.1);
  const pct = Math.round((count / total) * 100);
  return (
    <div ref={ref} style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#383D58",
          width: 140,
          flexShrink: 0,
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>
      <div
        style={{
          flex: 1,
          height: 8,
          background: "#E4E6EF",
          borderRadius: 9999,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: inView ? `${pct}%` : "0%",
            background: `linear-gradient(90deg, ${color} 0%, ${color}bb 100%)`,
            borderRadius: 9999,
            transition: "width 0.9s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </div>
      <span
        className="num"
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: 13,
          fontWeight: 700,
          color,
          width: 28,
          textAlign: "right",
          flexShrink: 0,
        }}
      >
        {count}
      </span>
    </div>
  );
};

export default StartupsSection;
