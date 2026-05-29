import React from "react";
import type { Lang } from "../types";
import { SectionHeader } from "../components/SharedCards";
import { useReveal } from "../hooks/useReveal";
import soumiaFodili from "../assets/team/soumia-fodili.jpg";
import djenaouiAbdellatif from "../assets/team/Djenaoui-abdellatif.jpg";
import gandouzAmine from "../assets/team/gandouz-amine.png";
import bousakraFaiza from "../assets/team/bousakra-faiza.jpeg";
import baaliSalma from "../assets/team/baali-salma.jpeg";
import directorPhoto from "../assets/team/incubator-director.jpg";

interface Member {
  name: string;
  role: { EN: string; FR: string; AR: string };
  photo: string | null;
  accent: "blue" | "green";
}

/* ─── SLIDE CARD ─── */
const SlideCard: React.FC<{
  member: Member;
  lang: Lang;
  dup?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
}> = ({ member, lang, dup, onEnter, onLeave }) => {
  const [hovered, setHovered] = React.useState(false);
  const role = member.role[lang];
  const isBlue = member.accent === "blue";
  const accentColor = isBlue ? "#1B4FBB" : "#7DB83A";
  const accentDark = isBlue ? "#0D2D72" : "#5A8A22";
  // Brand-spanning gradient so placeholders feel intentional (navy → green)
  const accentGradient = isBlue
    ? "linear-gradient(135deg, #0D2D72 0%, #2762D8 60%, #5A8A22 100%)"
    : "linear-gradient(135deg, #0D2D72 0%, #5A8A22 55%, #7DB83A 100%)";

  const initials = member.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();

  const placeholderLabel = {
    EN: `${member.name} — ${role}, photo not yet available`,
    FR: `${member.name} — ${role}, photo non disponible`,
    AR: `${member.name} — ${role}، الصورة غير متوفرة بعد`,
  }[lang];

  return (
    <div
      aria-hidden={dup ? "true" : undefined}
      onMouseEnter={() => { setHovered(true); onEnter?.(); }}
      onMouseLeave={() => { setHovered(false); onLeave?.(); }}
      style={{
        flex: "0 0 auto",
        width: 272,
        borderRadius: 22,
        overflow: "hidden",
        background: "#fff",
        border: `1px solid ${hovered ? accentColor + "44" : "#E8EAF2"}`,
        boxShadow: hovered
          ? `0 24px 60px ${accentColor}30, 0 8px 20px rgba(0,0,0,0.07)`
          : "0 2px 14px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-8px) scale(1.015)" : "translateY(0) scale(1)",
        transition:
          "transform 0.45s cubic-bezier(0.34,1.4,0.5,1), box-shadow 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.25s ease",
        cursor: "default",
      }}
    >
      {/* Photo */}
      <div
        role={!member.photo ? "img" : undefined}
        aria-label={!member.photo ? placeholderLabel : undefined}
        title={!member.photo ? placeholderLabel : undefined}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 5",
          background: member.photo ? "#F7F8FC" : accentGradient,
          overflow: "hidden",
          boxShadow: member.photo ? undefined : "inset 0 6px 24px rgba(0,0,0,0.22)",
        }}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            draggable={false}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 15%",
              transform: hovered ? "scale(1.07)" : "scale(1)",
              transition: "transform 0.65s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
        ) : (
          <>
            {/* Soft top highlight for dimensionality */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.22) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Syne', sans-serif",
                fontSize: 64,
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "0.04em",
                textShadow: "0 2px 6px rgba(0,0,0,0.18)",
                transform: hovered ? "scale(1.06)" : "scale(1)",
                transition: "transform 0.65s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {initials}
            </div>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-22%",
                right: "-22%",
                width: "60%",
                aspectRatio: "1",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.10)",
              }}
            />
          </>
        )}

        {/* Bottom legibility gradient */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,14,31,0.7) 0%, rgba(10,14,31,0) 55%)",
            opacity: member.photo ? 1 : 0,
            pointerEvents: "none",
          }}
        />

        {/* Role badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            insetInlineEnd: 12,
            padding: "5px 12px",
            borderRadius: 100,
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.28)",
            fontSize: 10,
            fontWeight: 700,
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontFamily: "'DM Sans', sans-serif",
            opacity: hovered ? 1 : 0.78,
            transition: "opacity 0.3s ease",
          }}
        >
          {role}
        </div>

        {/* Accent bottom bar */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            insetInlineStart: 0,
            width: hovered ? "100%" : "38%",
            height: 3,
            background: `linear-gradient(90deg, ${accentColor}, ${accentDark})`,
            transition: "width 0.55s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </div>

      {/* Name plate */}
      <div
        style={{
          padding: "18px 20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          direction: lang === "AR" ? "rtl" : "ltr",
        }}
      >
        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "#121420",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
          }}
        >
          {member.name}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: hovered ? 28 : 16,
              height: 2.5,
              borderRadius: 2,
              background: `linear-gradient(90deg, ${accentColor}, ${accentDark})`,
              transition: "width 0.4s cubic-bezier(0.34,1.4,0.5,1)",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: accentDark,
              fontFamily: "'DM Sans', sans-serif",
              opacity: 0.82,
            }}
          >
            {role}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── TEAM SECTION (infinite auto-run marquee) ─── */
const TeamSection: React.FC<{ lang: Lang }> = ({ lang }) => {
  const isRTL = lang === "AR";
  const lead = useReveal<HTMLDivElement>();

  const t = {
    EN: {
      label: "The Team",
      title: "Meet the team behind\nthe incubator.",
      sub: "Dedicated professionals guiding startup's founders every step of the way.",
      leadershipLabel: "Leadership",
      foundingTag: "Founding Director",
      currentTag: "Current Director",
      boardLabel: "Governance",
      boardTitle: "Board of Directors",
      boardSub:
        "The incubator is governed by a board that brings together the university and its institutional partners.",
    },
    FR: {
      label: "L'équipe",
      title: "L'équipe derrière\nl'incubateur.",
      sub: "Des professionnels dévoués qui accompagnent les startups de M'Sila à chaque étape.",
      leadershipLabel: "Direction",
      foundingTag: "Directeur fondateur",
      currentTag: "Directrice actuelle",
      boardLabel: "Gouvernance",
      boardTitle: "Conseil d'administration",
      boardSub:
        "L'incubateur est gouverné par un conseil réunissant l'université et ses partenaires institutionnels.",
    },
    AR: {
      label: "الفريق",
      title: "تعرّف على الفريق\nخلف الحاضنة.",
      sub: "محترفون متفانون يرافقون حاملي المشاريع في كل خطوة.",
      leadershipLabel: "القيادة",
      foundingTag: "المدير المؤسس",
      currentTag: "المديرة الحالية",
      boardLabel: "الحوكمة",
      boardTitle: "مجلس الإدارة",
      boardSub: "تُدار الحاضنة من قبل مجلس يجمع الجامعة وشركاءها المؤسسيين.",
    },
  }[lang];

  const leadership: {
    name: string;
    photo: string | null;
    accent: "blue" | "green";
    tag: string;
    role: Record<Lang, string>;
  }[] = [
    {
      name: "Dr. Mir Ahmed",
      photo: null,
      accent: "green",
      tag: t.foundingTag,
      role: {
        EN: "Founding director, appointed 2018",
        FR: "Directeur fondateur, nommé en 2018",
        AR: "المدير المؤسس، عُيّن سنة 2018",
      },
    },
    {
      name: "Prof. BENTOUMI Sarra",
      photo: directorPhoto,
      accent: "blue",
      tag: t.currentTag,
      role: {
        EN: "Director, Incubator — Université de M'Sila",
        FR: "Directrice, Incubateur — Université de M'Sila",
        AR: "مديرة الحاضنة — جامعة المسيلة",
      },
    },
  ];

  const members: Member[] = [
    {
      name: "Soumia Fodili",
      role: {
        EN: "Training and Certification Programs Manager",
        FR: "Responsable des programmes de formation et de certification",
        AR: "مسؤولة برامج التكوين والشهادات",
      },
      photo: soumiaFodili,
      accent: "green",
    },
    {
      name: "Djenaoui Abdelatif",
      role: {
        EN: "Information Technology Lab Manager",
        FR: "Responsable du laboratoire de technologie de l'information",
        AR: "مدير مختبر تكنولوجيا المعلومات",
      },
      photo: djenaouiAbdellatif,
      accent: "blue",
    },
    {
      name: "Gandouz Amine",
      role: {
        EN: "Shared Space Manager",
        FR: "Resp. Espace Partagé",
        AR: "مسؤول الفضاءالمشترك",
      },
      photo: gandouzAmine,
      accent: "blue",
    },
    {
      name: "Bousakra Faiza",
      role: {
        EN: "Biology Lab Manager",
        FR: "Resp. Lab. Biologie",
        AR: "مسؤول مختبر البيولوجيا",
      },
      photo: bousakraFaiza,
      accent: "green",
    },
    {
      name: "Baali Salma",
      role: {
        EN: "Manufacturing Lab Manager",
        FR: "Resp. Lab. Fabrication",
        AR: "مدير مختبر التصنيع",
      },
      photo: baaliSalma,
      accent: "blue",
    },
  ];

  // Track ref + hover counter so multiple cards entering/leaving quickly
  // never race — we only pause when at least one card is hovered.
  const trackRef = React.useRef<HTMLDivElement>(null);
  const hoverCount = React.useRef(0);
  const [marqueeHover, setMarqueeHover] = React.useState(false);

  const onCardEnter = React.useCallback(() => {
    hoverCount.current += 1;
    trackRef.current?.setAttribute("data-paused", "true");
  }, []);

  const onCardLeave = React.useCallback(() => {
    hoverCount.current = Math.max(0, hoverCount.current - 1);
    if (hoverCount.current === 0) {
      trackRef.current?.setAttribute("data-paused", "false");
    }
  }, []);

  // Manual nudge: pause the CSS marquee, shift the track by one card width,
  // then resume on the next user interaction (or after a short delay).
  const nudgeOffset = React.useRef(0);
  const resumeTimer = React.useRef<number | null>(null);

  const nudge = React.useCallback((dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    // One card (272) + gap (24) = 296px per step
    const step = 296;
    track.setAttribute("data-paused", "true");
    // Cancel the animation transform contribution by switching to manual mode
    track.style.animation = "none";
    track.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)";
    nudgeOffset.current += dir * step;
    track.style.transform = `translateX(${-nudgeOffset.current}px)`;
    // Loop the offset within one half of the duplicated set so we never
    // run off the end (track width is members.length cards × 2).
    const halfWidth = members.length * step;
    if (nudgeOffset.current >= halfWidth) nudgeOffset.current -= halfWidth;
    if (nudgeOffset.current < 0) nudgeOffset.current += halfWidth;

    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      if (hoverCount.current > 0) return; // a card is hovered — stay paused
      track.style.transition = "";
      track.style.animation = "";
      track.style.transform = "";
      nudgeOffset.current = 0;
      track.setAttribute("data-paused", "false");
    }, 2200);
  }, [members.length]);

  React.useEffect(() => () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
  }, []);

  return (
    <section
      id="team"
      data-screen-label="Team"
      style={{
        padding: "7rem 0",
        background: "linear-gradient(180deg, #F7F8FC 0%, #fff 100%)",
        direction: isRTL ? "rtl" : "ltr",
        /* overflow-x hidden prevents horizontal scroll bleed from the marquee,
           but must NOT be overflow:hidden (both axes) as that clips sticky/fixed
           descendants and fights responsive padding overrides */
        overflowX: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeader
          label={t.label}
          title={t.title}
          subtitle={t.sub}
          center
        />

        {/* Leadership — founding + current director */}
        <div
          ref={lead.ref}
          data-reveal
          data-shown={lead.shown ? "true" : "false"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
            maxWidth: 760,
            margin: "0 auto 1rem",
          }}
        >
          {leadership.map((p, i) => {
            const accent = p.accent === "green" ? "#7DB83A" : "#1B4FBB";
            const accentDark = p.accent === "green" ? "#5A8A22" : "#0D2D72";
            const accentBg = p.accent === "green" ? "#EBF5D8" : "#D6E4F7";
            const initials = p.name
              .replace(/^(Dr\.|Prof\.)\s*/, "")
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((s) => s[0])
              .join("")
              .toUpperCase();
            return (
              <div
                key={i}
                data-reveal-child
                style={{
                  ["--i" as string]: i,
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  background: "#fff",
                  border: "1px solid #E4E6EF",
                  borderRadius: 20,
                  padding: 18,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  role={!p.photo ? "img" : undefined}
                  aria-label={!p.photo ? `${p.name} — ${p.role[lang]}, ${({ EN: "photo not yet available", FR: "photo non disponible", AR: "الصورة غير متوفرة بعد" }[lang])}` : undefined}
                  title={!p.photo ? `${p.name} — ${({ EN: "photo not yet available", FR: "photo non disponible", AR: "الصورة غير متوفرة بعد" }[lang])}` : undefined}
                  style={{
                    position: "relative",
                    width: 72,
                    height: 72,
                    borderRadius: 16,
                    flexShrink: 0,
                    overflow: "hidden",
                    background: p.photo
                      ? "#F7F8FC"
                      : `linear-gradient(135deg, #0D2D72 0%, ${accentDark} 55%, ${accent} 100%)`,
                    boxShadow: p.photo ? undefined : "inset 0 4px 14px rgba(0,0,0,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {p.photo ? (
                    <img
                      src={p.photo}
                      alt={p.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 18%",
                      }}
                    />
                  ) : (
                    <>
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.24) 0%, transparent 60%)",
                          pointerEvents: "none",
                        }}
                      />
                      <span
                        style={{
                          position: "relative",
                          fontFamily: "'Syne',sans-serif",
                          fontSize: 26,
                          fontWeight: 800,
                          color: "#fff",
                          textShadow: "0 2px 5px rgba(0,0,0,0.18)",
                        }}
                      >
                        {initials}
                      </span>
                    </>
                  )}
                </div>
                <div style={{ minWidth: 0 }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "3px 10px",
                      borderRadius: 100,
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      background: accentBg,
                      color: accentDark,
                      marginBottom: 8,
                    }}
                  >
                    {p.tag}
                  </span>
                  <div
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#121420",
                      lineHeight: 1.2,
                      marginBottom: 4,
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: "#6B7089",
                      lineHeight: 1.45,
                    }}
                  >
                    {p.role[lang]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Marquee — full bleed with edge fades */}
      <div
        data-team-marquee
        onMouseEnter={() => setMarqueeHover(true)}
        onMouseLeave={() => setMarqueeHover(false)}
        style={{
          position: "relative",
          width: "100%",
          /* Use logical gradient (ltr-forced) so the fade is always
             left-edge → opaque → right-edge regardless of page direction */
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          direction: "ltr", // force mask gradient direction to always be ltr
          padding: "1.5rem 0",
          overflow: "hidden",
        }}
      >
        {/* Nav arrows — fade in on hover, give users explicit control */}
        {(["prev", "next"] as const).map((dir) => {
          const isPrev = dir === "prev";
          const label = isPrev
            ? ({ EN: "Previous", FR: "Précédent", AR: "السابق" }[lang])
            : ({ EN: "Next", FR: "Suivant", AR: "التالي" }[lang]);
          return (
            <button
              key={dir}
              type="button"
              aria-label={label}
              onClick={() => nudge(isPrev ? -1 : 1)}
              onMouseEnter={onCardEnter}
              onMouseLeave={onCardLeave}
              style={{
                position: "absolute",
                top: "50%",
                [isPrev ? "left" : "right"]: 16,
                transform: `translateY(-50%) scale(${marqueeHover ? 1 : 0.85})`,
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.96)",
                border: "1px solid #E4E6EF",
                boxShadow: "0 8px 22px rgba(13,45,114,0.18), 0 2px 6px rgba(0,0,0,0.06)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#0D2D72",
                opacity: marqueeHover ? 1 : 0,
                pointerEvents: marqueeHover ? "auto" : "none",
                transition:
                  "opacity 0.25s ease, transform 0.35s cubic-bezier(0.34,1.4,0.5,1), background 0.2s ease, box-shadow 0.25s ease",
                zIndex: 5,
                padding: 0,
              }}
              onFocus={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.pointerEvents = "auto"; }}
              onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(0.94)"; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={isPrev ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
              </svg>
            </button>
          );
        })}
        <div
          ref={trackRef}
          data-team-marquee-track
          data-rtl={isRTL ? "true" : "false"}
          data-paused="false"
          style={{
            display: "flex",
            gap: 24,
            width: "max-content",
            padding: "0 12px",
            direction: "ltr", // always ltr so translateX(-50%) loop math is correct
            ["--marquee-duration" as string]: `${members.length * 6}s`,
          }}
        >
          {members.map((m, i) => (
            <SlideCard key={`a${i}`} member={m} lang={lang} onEnter={onCardEnter} onLeave={onCardLeave} />
          ))}
          {members.map((m, i) => (
            <SlideCard key={`b${i}`} member={m} lang={lang} dup onEnter={onCardEnter} onLeave={onCardLeave} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
