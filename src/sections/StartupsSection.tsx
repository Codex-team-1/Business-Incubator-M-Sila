import React from "react";
import type { Lang } from "../types";
import { SectionHeader } from "../components/SharedCards";
// no reveal hooks needed for the simplified startups section
import sign from "../assets/incubator-sign.jpg";

/* ─── STARTUP SPACE / PORTFOLIO ─── */
const StartupsSection: React.FC<{
  lang: Lang;
  onNav: (id: string) => void;
}> = ({ lang, onNav }) => {
  const isRTL = lang === "AR";
  // previous graduate/faculty displays removed

  const t = {
    EN: {
      label: "Project / Startup Space",
      title: "Inside the M'Sila startup space.",
      sub: "A dedicated co-working hub on the Boudiaf campus — home to graduated startups and a growing pipeline of active projects.",
      spaceTitle: "The co-working hub",
      spaceSub:
        "Open access for incubated teams — equipped studios, meeting rooms, and a quiet zone for deep work.",
      gradsLabel: "Graduated Startups",
      gradsTitle: "17 startups, launched and graduated.",
      gradsSub:
        "Founded through the incubator between 2020 and 2023, across every faculty in M'Sila.",
      total: "graduated startups",
      perYear: "startups",
      activeLabel: "Active Pipeline",
      activeTitle: "Projects in progress",
      activeDesc:
        "Active projects registered outside Resolution 1275 — currently being supported toward graduation.",
      activeUnit: "active projects",
      facLabel: "Resolution 1275",
      facTitle: "Faculty breakdown",
      facSub:
        "Graduation projects registered under Resolution 1275, by faculty.",
      facProjects: "projects",
      facStudents: "students",
      totalRow: "Total · all faculties",
      cta: "Your startup could be the next apply now",
      ctaBtn: "Apply Now",
      features: [
        "Open-access workstations & meeting rooms",
        "High-speed fibre internet & power backup",
        "On-campus, 5 minutes from any faculty",
        "Free for incubated startups, 24/7 access",
      ],
    },
    FR: {
      label: "Espace projets / Startups",
      title: "À l'intérieur de l'espace startup de M'Sila.",
      sub: "Un hub co-working dédié sur le campus Boudiaf — accueillant les startups diplômées et un pipeline croissant de projets actifs.",
      spaceTitle: "Le hub co-working",
      spaceSub:
        "Accès libre pour les équipes incubées — studios équipés, salles de réunion, zone calme.",
      gradsLabel: "Startups diplômées",
      gradsTitle: "17 startups, lancées et diplômées.",
      gradsSub:
        "Créées via l'incubateur entre 2020 et 2023, à travers toutes les facultés de M'Sila.",
      total: "startups diplômées",
      perYear: "startups",
      activeLabel: "Pipeline actif",
      activeTitle: "Projets en cours",
      activeDesc:
        "Projets actifs enregistrés hors Résolution 1275 — accompagnés vers la diplomation.",
      activeUnit: "projets actifs",
      facLabel: "Résolution 1275",
      facTitle: "Répartition par faculté",
      facSub:
        "Projets de fin d'études enregistrés sous la Résolution 1275, par faculté.",
      facProjects: "projets",
      facStudents: "étudiants",
      totalRow: "Total · toutes facultés",
      cta: "Votre projet pourrait être ici — candidatez maintenant.",
      ctaBtn: "Candidater maintenant",
      features: [
        "Postes de travail et salles de réunion en libre accès",
        "Internet fibre haut débit & onduleur",
        "Sur le campus, à 5 min de toute faculté",
        "Gratuit pour startups incubées, accès 24/7",
      ],
    },
    AR: {
      label: "فضاء المشاريع / الشركات الناشئة",
      title: "داخل فضاء الشركات الناشئة في مسيلة.",
      sub: "مركز عمل مشترك مخصص في حرم بوضياف — يحتضن الشركات الخريجة وخطّ مشاريع نشطة متنامٍ.",
      spaceTitle: "مركز العمل المشترك",
      spaceSub:
        "وصول مفتوح للفرق المحتضنة — استوديوهات مجهزة وغرف اجتماعات ومنطقة هادئة.",
      gradsLabel: "الشركات الخريجة",
      gradsTitle: "17 شركة ناشئة، أُطلقت وتخرّجت.",
      gradsSub: "تأسست عبر الحاضنة بين 2020 و2023، عبر جميع كليات مسيلة.",
      total: "شركة ناشئة خريجة",
      perYear: "شركات",
      activeLabel: "المشاريع النشطة",
      activeTitle: "مشاريع قيد التنفيذ",
      activeDesc:
        "مشاريع نشطة مسجلة خارج القرار 1275 — تُدعم حالياً نحو التخرج.",
      activeUnit: "مشروع نشط",
      facLabel: "القرار 1275",
      facTitle: "التوزيع حسب الكلية",
      facSub: "مشاريع التخرج المسجلة بموجب القرار 1275، حسب الكلية.",
      facProjects: "مشروعاً",
      facStudents: "طالباً",
      totalRow: "الإجمالي · جميع الكليات",
      cta: "قد يكون مشروعك هنا — تقدّم الآن.",
      ctaBtn: "تقدّم الآن",
      features: [
        "محطات عمل وغرف اجتماعات بوصول مفتوح",
        "إنترنت ألياف عالي السرعة ومولّد احتياطي",
        "داخل الحرم الجامعي، 5 دقائق من أي كلية",
        "مجاني للشركات المحتضنة، وصول 24/7",
      ],
    },
  }[lang];

  return (
    <section
      id="startups"
      data-screen-label="Startups"
      style={{
        background: "#fff",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      {/* Space hero block */}
      <div style={{ padding: "6rem 2rem 3rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader
            label={t.label}
            title={t.title}
            subtitle={t.sub}
            center
          />

          <div
            data-startups-hero
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 1fr",
              gap: "3rem",
              alignItems: "stretch",
              marginBottom: "4rem",
            }}
          >
            {/* Photo block — the actual incubator entrance */}
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
              <div
                style={{
                  position: "absolute",
                  bottom: 28,
                  insetInlineStart: 28,
                  insetInlineEnd: 28,
                  color: "#fff",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 12px",
                    borderRadius: 9999,
                    background: "rgba(125,184,58,0.25)",
                    border: "1px solid rgba(125,184,58,0.45)",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#C4E390",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    marginBottom: 14,
                    fontFamily: "'DM Sans',sans-serif",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#7DB83A",
                    }}
                  />
                  Open now
                </span>
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

            {/* Features list */}
            <div
              style={{
                background: "#F7F8FC",
                border: "1px solid #E4E6EF",
                borderRadius: 24,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 18,
              }}
            >
              {t.features.map((f, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "#EBF5D8",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5A8A22"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "#383D58",
                      lineHeight: 1.55,
                      paddingTop: 3,
                    }}
                  >
                    {f}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* (Graduated startups and Resolution 1275 breakdown removed) */}
        </div>
      </div>

      {/* (Resolution 1275 faculty breakdown removed) */}

      {/* CTA banner — empty-state apply prompt */}
      <div style={{ padding: "3rem 2rem 6rem" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            background: "linear-gradient(135deg, #5A8A22 0%, #7DB83A 100%)",
            borderRadius: 28,
            padding: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            boxShadow: "0 20px 60px rgba(90,138,34,0.22)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -80,
              insetInlineEnd: -80,
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
            }}
          />
          <div style={{ position: "relative", maxWidth: 520 }}>
            <div
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              {t.cta}
            </div>
          </div>
          <button
            onClick={() => onNav("contact")}
            style={{
              padding: "0 30px",
              height: 54,
              background: "#fff",
              color: "#5A8A22",
              border: "none",
              borderRadius: 14,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "'DM Sans',sans-serif",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "all 0.2s ease",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {t.ctaBtn}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5A8A22"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d={isRTL ? "M19 12H5M11 5l-7 7 7 7" : "M5 12h14M13 5l7 7-7 7"}
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartupsSection;
