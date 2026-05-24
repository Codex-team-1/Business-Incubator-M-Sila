import React from "react";
import type { Lang, Milestone } from "../types";
import logo from "../assets/incubateur-logo.jpg";

/* ─── SECTION HEADER ─── */
export const SectionHeader: React.FC<{
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}> = ({ label, title, subtitle, center, dark }) => (
  <div
    style={{ textAlign: center ? "center" : "left", marginBottom: "3.5rem" }}
  >
    <span
      style={{
        display: "inline-block",
        padding: "5px 14px",
        borderRadius: 100,
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        background: dark ? "rgba(125,184,58,0.15)" : "#EBF5D8",
        color: dark ? "#C4E390" : "#5A8A22",
        marginBottom: 16,
      }}
    >
      {label}
    </span>
    <div
      style={{
        fontFamily: "'Syne',sans-serif",
        fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)",
        fontWeight: 700,
        color: dark ? "#fff" : "#121420",
        lineHeight: 1.15,
        marginBottom: 14,
        letterSpacing: "-0.01em",
        whiteSpace: "pre-line",
      }}
    >
      {title}
    </div>
    {subtitle && (
      <div
        style={{
          fontSize: "1.05rem",
          color: dark ? "rgba(255,255,255,0.7)" : "#6B7089",
          lineHeight: 1.7,
          maxWidth: 600,
          margin: center ? "0 auto" : "0",
        }}
      >
        {subtitle}
      </div>
    )}
  </div>
);

/* ─── SERVICE CARD (with photo header) ─── */
export const ServiceCard: React.FC<{
  icon: string;
  title: string;
  desc: string;
  accent: "blue" | "green";
  image: string;
  tag?: string;
}> = ({ icon, title, desc, accent, image, tag }) => {
  const [hovered, setHovered] = React.useState(false);
  const isGreen = accent === "green";
  const accentColor = isGreen ? "#7DB83A" : "#1B4FBB";
  const accentBg = isGreen ? "#EBF5D8" : "#D6E4F7";
  const accentDark = isGreen ? "#5A8A22" : "#0D2D72";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: "1px solid #E4E6EF",
        borderRadius: 20,
        position: "relative",
        overflow: "hidden",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 18px 44px ${isGreen ? "rgba(125,184,58,0.18)" : "rgba(27,79,187,0.14)"}`
          : "0 2px 12px rgba(0,0,0,0.04)",
        transition: "all 0.35s cubic-bezier(0.34,1.4,0.5,1)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image header */}
      <div
        style={{
          position: "relative",
          height: 180,
          overflow: "hidden",
          background: `linear-gradient(135deg, ${accentDark} 0%, ${accentColor} 100%)`,
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.22,0.61,0.36,1)",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* Color overlay for legibility + brand tint */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isGreen
              ? "linear-gradient(180deg, rgba(13,45,114,0.15) 0%, rgba(13,45,114,0.55) 100%)"
              : "linear-gradient(180deg, rgba(13,45,114,0.25) 0%, rgba(13,45,114,0.7) 100%)",
          }}
        />
        {/* Diagonal accent shape */}
        <div
          style={{
            position: "absolute",
            bottom: -1,
            left: 0,
            right: 0,
            height: 28,
            background: "#fff",
            clipPath: "polygon(0 100%, 100% 100%, 100% 35%, 0 100%)",
          }}
        />

        {/* Icon badge floating bottom-left */}
        <div
          style={{
            position: "absolute",
            left: 20,
            bottom: 20,
            width: 52,
            height: 52,
            borderRadius: 14,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
            border: `2px solid ${accentBg}`,
            transform: hovered
              ? "translateY(-4px) rotate(-6deg)"
              : "translateY(0) rotate(0)",
            transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            zIndex: 2,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke={accentDark}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={icon} />
          </svg>
        </div>

        {/* Optional tag in top corner */}
        {tag && (
          <div
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              padding: "4px 10px",
              borderRadius: 9999,
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
              fontSize: 10,
              fontWeight: 700,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {tag}
          </div>
        )}
      </div>

      {/* Body */}
      <div
        style={{
          padding: "20px 24px 24px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#121420",
            marginBottom: 10,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "0.9rem",
            color: "#6B7089",
            lineHeight: 1.65,
            flex: 1,
          }}
        >
          {desc}
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            marginTop: 18,
            height: 3,
            borderRadius: 2,
            background: accentColor,
            transform: hovered ? "scaleX(1)" : "scaleX(0.18)",
            transformOrigin: "left",
            transition: "transform 0.4s cubic-bezier(0.34,1.4,0.5,1)",
            opacity: hovered ? 1 : 0.4,
          }}
        />
      </div>
    </div>
  );
};

/* ─── JOURNEY TIMELINE — vertical alternating chronological story ─── */
export const JourneyTimeline: React.FC<{
  milestones: Milestone[];
  lang: Lang;
  label: string;
  title: string;
  subtitle?: string;
}> = ({ milestones, lang, label, title, subtitle }) => {
  const isRTL = lang === "AR";
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);

  return (
    <div style={{ direction: isRTL ? "rtl" : "ltr" }}>
      {/* Section sub-header */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            borderRadius: 100,
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            background: "#D6E4F7",
            color: "#1B4FBB",
            marginBottom: 16,
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          {label}
        </span>
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)",
            fontWeight: 700,
            color: "#121420",
            lineHeight: 1.15,
            marginBottom: 14,
            letterSpacing: "-0.01em",
            whiteSpace: "pre-line",
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              fontSize: "1.05rem",
              color: "#6B7089",
              lineHeight: 1.7,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {/* Timeline */}
      <div
        style={{
          position: "relative",
          maxWidth: 1040,
          margin: "0 auto",
          padding: "0 0 24px",
        }}
      >
        {/* Centerline */}
        <div
          data-timeline-centerline
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 2,
            transform: "translateX(-50%)",
            background:
              "linear-gradient(180deg, #D6E4F7 0%, #1B4FBB 30%, #7DB83A 100%)",
            borderRadius: 2,
          }}
        />

        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;
          const isActive = activeIdx === i;
          const accentColor = m.accent === "green" ? "#7DB83A" : "#1B4FBB";
          const accentDark = m.accent === "green" ? "#5A8A22" : "#0D2D72";
          const accentBg = m.accent === "green" ? "#EBF5D8" : "#D6E4F7";

          // For RTL, flip left/right so the timeline reads right-to-left naturally
          const cardOnRight = isRTL ? isLeft : !isLeft;

          return (
            <div
              key={i}
              data-timeline-row
              style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "1fr 88px 1fr",
                gap: 0,
                marginBottom: i < milestones.length - 1 ? 56 : 0,
                alignItems: "center",
              }}
            >
              {/* Left card slot */}
              <div style={{ gridColumn: 1, paddingInlineEnd: 24 }}>
                {!cardOnRight && (
                  <MilestoneCard
                    m={m}
                    isActive={isActive}
                    side="left"
                    accentColor={accentColor}
                    accentDark={accentDark}
                    accentBg={accentBg}
                    onEnter={() => setActiveIdx(i)}
                    onLeave={() => setActiveIdx(null)}
                    isRTL={isRTL}
                  />
                )}
              </div>

              {/* Center node */}
              <div
                style={{
                  gridColumn: 2,
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: m.ongoing ? accentColor : "#fff",
                    border: `3px solid ${accentColor}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: isActive
                      ? `0 0 0 8px ${accentColor}22, 0 6px 20px ${accentColor}44`
                      : `0 4px 14px ${accentColor}33`,
                    transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                    transform: isActive ? "scale(1.08)" : "scale(1)",
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 15,
                    fontWeight: 800,
                    color: m.ongoing ? "#fff" : accentDark,
                    letterSpacing: "-0.01em",
                    fontVariantNumeric: "tabular-nums",
                    fontFeatureSettings: '"tnum"',
                    position: "relative",
                  }}
                >
                  {m.ongoing ? (
                    <span
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: "#fff",
                        display: "block",
                        boxShadow: "0 0 0 4px rgba(255,255,255,0.25)",
                        animation:
                          "milestoneOngoingDot 1.6s ease-in-out infinite",
                      }}
                    />
                  ) : (
                    m.year
                  )}
                  {/* Pulse ring */}
                  <div
                    style={{
                      position: "absolute",
                      inset: -4,
                      borderRadius: "50%",
                      border: `2px solid ${accentColor}`,
                      opacity: 0.4,
                      animation: "milestonePulse 2.4s ease-in-out infinite",
                      animationDelay: `${i * 0.25}s`,
                    }}
                  />
                </div>
              </div>

              {/* Right card slot */}
              <div style={{ gridColumn: 3, paddingInlineStart: 24 }}>
                {cardOnRight && (
                  <MilestoneCard
                    m={m}
                    isActive={isActive}
                    side="right"
                    accentColor={accentColor}
                    accentDark={accentDark}
                    accentBg={accentBg}
                    onEnter={() => setActiveIdx(i)}
                    onLeave={() => setActiveIdx(null)}
                    isRTL={isRTL}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* Internal — milestone card */
const MilestoneCard: React.FC<{
  m: Milestone;
  isActive: boolean;
  side: "left" | "right";
  accentColor: string;
  accentDark: string;
  accentBg: string;
  onEnter: () => void;
  onLeave: () => void;
  isRTL: boolean;
}> = ({
  m,
  isActive,
  side,
  accentColor,
  accentDark,
  accentBg,
  onEnter,
  onLeave,
  isRTL,
}) => {
  // arrow points toward the centerline
  const arrowSide =
    side === "left" ? (isRTL ? "left" : "right") : isRTL ? "right" : "left";
  return (
    <div
      data-timeline-card
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        background: "#fff",
        border: "1px solid #E4E6EF",
        borderRadius: 20,
        padding: "22px 26px",
        position: "relative",
        boxShadow: isActive
          ? `0 18px 44px ${accentColor}22, 0 0 0 1px ${accentColor}33 inset`
          : "0 2px 12px rgba(0,0,0,0.04)",
        transform: isActive ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.34,1.4,0.5,1)",
        textAlign:
          side === "left"
            ? isRTL
              ? "left"
              : "right"
            : isRTL
              ? "right"
              : "left",
      }}
    >
      {/* Pointer arrow toward centerline */}
      <div
        data-timeline-arrow
        style={{
          position: "absolute",
          top: 22,
          [arrowSide]: -8,
          width: 16,
          height: 16,
          background: "#fff",
          border: "1px solid #E4E6EF",
          borderTop: "none",
          borderRight: arrowSide === "right" ? "none" : "1px solid #E4E6EF",
          borderBottom: arrowSide === "right" ? "1px solid #E4E6EF" : "none",
          borderLeft: arrowSide === "left" ? "none" : "1px solid #E4E6EF",
          transform:
            arrowSide === "right" ? "rotate(-45deg)" : "rotate(135deg)",
        }}
      />

      {/* Tag/stat */}
      {m.tag && (
        <span
          style={{
            display: "inline-block",
            padding: "3px 10px",
            borderRadius: 9999,
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            background: accentBg,
            color: accentDark,
            marginBottom: 10,
          }}
        >
          {m.tag}
        </span>
      )}

      {/* Title */}
      <div
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "#121420",
          lineHeight: 1.3,
          marginBottom: 8,
          letterSpacing: "-0.01em",
        }}
      >
        {m.title}
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: 14,
          color: "#6B7089",
          lineHeight: 1.65,
          marginBottom: m.stat ? 12 : 0,
        }}
      >
        {m.desc}
      </div>

      {/* Optional big stat number */}
      {m.stat && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "baseline",
            gap: 10,
            paddingTop: 14,
            marginTop: 4,
            borderTop: "1px solid #E4E6EF",
            width: "100%",
          }}
        >
          <span
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 28,
              fontWeight: 800,
              color: accentDark,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
              fontFeatureSettings: '"tnum"',
            }}
          >
            {m.stat.n}
          </span>
          <span
            style={{
              fontSize: 12,
              color: "#6B7089",
              lineHeight: 1.3,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {m.stat.l}
          </span>
        </div>
      )}
    </div>
  );
};

export const ProgramCard: React.FC<{
  tag: string;
  title: string;
  desc: string;
  duration?: string;
  hours?: string;
  accent: "blue" | "green";
  tracks?: string[];
}> = ({ tag, title, desc, duration, hours, accent, tracks }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1px solid ${hovered ? "#1B4FBB" : "#E4E6EF"}`,
        borderRadius: 20,
        padding: 28,
        boxShadow: hovered ? "0 12px 36px rgba(27,79,187,0.10)" : "none",
        transition: "all 0.25s ease",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        position: "relative",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "4px 12px",
            borderRadius: 100,
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            background: accent === "green" ? "#EBF5D8" : "#D6E4F7",
            color: accent === "green" ? "#5A8A22" : "#1B4FBB",
          }}
        >
          {tag}
        </span>
        {hours && (
          <span
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 24,
              fontWeight: 800,
              color: "#0D2D72",
              letterSpacing: "-0.02em",
            }}
          >
            {hours}
          </span>
        )}
      </div>
      <div
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "#121420",
          lineHeight: 1.25,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "0.95rem",
          color: "#6B7089",
          lineHeight: 1.65,
          flex: 1,
        }}
      >
        {desc}
      </div>
      {tracks && tracks.length > 0 && (
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 2 }}
        >
          {tracks.map((tr, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                padding: "5px 11px",
                borderRadius: 100,
                fontSize: 11.5,
                fontWeight: 600,
                lineHeight: 1.2,
                background: "#EBF5D8",
                color: "#5A8A22",
                border: "1px solid #D7EBB5",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {tr}
            </span>
          ))}
        </div>
      )}
      {duration && (
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#1B4FBB",
            paddingTop: 12,
            borderTop: "1px solid #E4E6EF",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          {duration}
        </div>
      )}
    </div>
  );
};

/* ─── STARTUP CARD ─── */
export const StartupCard: React.FC<{
  tag: string;
  name: string;
  desc: string;
  faculty?: string;
  year?: string;
}> = ({ tag, name, desc, faculty, year }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1px solid ${hovered ? "#7DB83A" : "#E4E6EF"}`,
        borderRadius: 16,
        padding: 22,
        boxShadow: hovered ? "0 10px 28px rgba(125,184,58,0.14)" : "none",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "3px 11px",
            borderRadius: 100,
            fontSize: 11,
            fontWeight: 700,
            background: "#EBF5D8",
            color: "#5A8A22",
            letterSpacing: "0.03em",
          }}
        >
          {tag}
        </span>
        {year && (
          <span
            style={{
              fontSize: 11,
              color: "#6B7089",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {year}
          </span>
        )}
      </div>
      <div
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "#121420",
          marginBottom: 8,
          letterSpacing: "-0.01em",
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontSize: "0.875rem",
          color: "#6B7089",
          lineHeight: 1.6,
          flex: 1,
          marginBottom: 14,
        }}
      >
        {desc}
      </div>
      {faculty && (
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "#6B7089",
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            paddingTop: 12,
            borderTop: "1px solid #E4E6EF",
          }}
        >
          {faculty}
        </div>
      )}
    </div>
  );
};

/* ─── TEAM CARD ─── */
// Photo-first member card. Pass photo: 'assets/team/...jpg' when available;
// otherwise a styled monogram placeholder fills the same frame so the grid
// stays uniform until the rest of the photos arrive.
export const TeamCard: React.FC<{
  name: string;
  photo?: string | null;
  accent?: "blue" | "green";
}> = ({ name, photo, accent = "blue" }) => {
  const [hovered, setHovered] = React.useState(false);

  // Derive initials from the full name for placeholders
  const initials = React.useMemo(() => {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((s) => s[0])
      .join("")
      .toUpperCase();
  }, [name]);

  const accentGradient =
    accent === "green"
      ? "linear-gradient(135deg, #7DB83A 0%, #5A8A22 100%)"
      : "linear-gradient(135deg, #2762D8 0%, #0D2D72 100%)";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: "1px solid #E4E6EF",
        borderRadius: 18,
        overflow: "hidden",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 18px 44px rgba(13,45,114,0.14)"
          : "0 2px 10px rgba(0,0,0,0.04)",
        transition:
          "transform 0.35s cubic-bezier(0.34,1.4,0.5,1), box-shadow 0.35s ease, border-color 0.25s ease",
        borderColor: hovered ? "#D6E4F7" : "#E4E6EF",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Photo frame — 4:5 portrait */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 5",
          background: photo ? "#F7F8FC" : accentGradient,
          overflow: "hidden",
        }}
      >
        {photo ? (
          <img
            src={photo}
            alt={name}
            loading="lazy"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 18%",
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition:
                "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s ease",
              filter: hovered ? "saturate(1.05)" : "saturate(1)",
            }}
          />
        ) : (
          /* Monogram placeholder for members without a photo yet */
          <React.Fragment>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Syne',sans-serif",
                fontSize: 64,
                fontWeight: 800,
                color: "rgba(255,255,255,0.95)",
                letterSpacing: "0.02em",
                transform: hovered ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {initials}
            </div>
            {/* Subtle textured rings */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: `
                radial-gradient(circle at 28% 22%, rgba(255,255,255,0.18) 0%, transparent 40%),
                radial-gradient(circle at 80% 90%, rgba(0,0,0,0.18) 0%, transparent 50%)
              `,
                pointerEvents: "none",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 14,
                left: 14,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.7)",
                textTransform: "uppercase",
              }}
            >
              Photo soon
            </div>
          </React.Fragment>
        )}

        {/* Soft gradient at the bottom for legibility consistency across photo/placeholder */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "38%",
            background:
              "linear-gradient(to top, rgba(13,45,114,0.55) 0%, rgba(13,45,114,0) 100%)",
            opacity: photo ? (hovered ? 0.9 : 0.65) : 0,
            transition: "opacity 0.35s ease",
            pointerEvents: "none",
          }}
        />

        {/* Accent corner mark */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 12,
            insetInlineStart: 12,
            width: 6,
            height: 24,
            borderRadius: 3,
            background: accent === "green" ? "#C4E390" : "#fff",
            opacity: 0.9,
            transform: hovered ? "scaleY(1.15)" : "scaleY(1)",
            transformOrigin: "top",
            transition: "transform 0.35s cubic-bezier(0.34,1.4,0.5,1)",
          }}
        />
      </div>

      {/* Name plate */}
      <div
        style={{
          padding: "18px 18px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          flex: 1,
        }}
      >
        <div
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "#121420",
            lineHeight: 1.25,
            letterSpacing: "-0.005em",
          }}
        >
          {name}
        </div>
        {/* Tiny accent bar — replaces former role/faculty meta */}
        <div
          style={{
            width: hovered ? 36 : 24,
            height: 2,
            borderRadius: 2,
            background: accent === "green" ? "#7DB83A" : "#1B4FBB",
            transition: "width 0.35s cubic-bezier(0.34,1.4,0.5,1)",
          }}
        />
      </div>
    </div>
  );
};

/* ─── FOOTER ─── */
export const Footer: React.FC<{ onNav: (id: string) => void; lang: Lang }> = ({
  onNav,
  lang,
}) => {
  const isRTL = lang === "AR";

  const cols: {
    title: Record<Lang, string>;
    items: (Record<Lang, string> & { key?: string })[];
  }[] = [
    {
      title: {
        EN: "Business Incubator M'Sila",
        FR: "Business Incubator M'Sila",
        AR: "حاضنة أعمال مسيلة",
      },
      items: [
        { EN: "About", FR: "À propos", AR: "حولنا", key: "intro" },
        { EN: "Our Team", FR: "Notre équipe", AR: "فريقنا", key: "team" },
        { EN: "Startups", FR: "Startups", AR: "الشركات", key: "startups" },
      ],
    },
    {
      title: { EN: "Programs", FR: "Programmes", AR: "البرامج" },
      items: [
        { EN: "Incubation", FR: "Incubation", AR: "الحضانة", key: "programs" },
        {
          EN: "Pre-incubation",
          FR: "Pré-incubation",
          AR: "ما قبل الحضانة",
          key: "programs",
        },
        {
          EN: "Training Bootcamp",
          FR: "Bootcamp",
          AR: "مخيم التدريب",
          key: "programs",
        },
      ],
    },
    {
      title: { EN: "Services", FR: "Services", AR: "الخدمات" },
      items: [
        {
          EN: "Legal Support",
          FR: "Support juridique",
          AR: "الدعم القانوني",
          key: "services",
        },
        {
          EN: "Funding Access",
          FR: "Accès au financement",
          AR: "الوصول للتمويل",
          key: "services",
        },
        {
          EN: "Co-working Space",
          FR: "Espace co-working",
          AR: "فضاء العمل",
          key: "services",
        },
      ],
    },
    {
      title: { EN: "Contact", FR: "Contact", AR: "تواصل" },
      items: [
        {
          EN: "Apply for Incubation",
          FR: "Candidater",
          AR: "تقدّم للحضانة",
          key: "contact",
        },
        {
          EN: "Send a Message",
          FR: "Nous écrire",
          AR: "أرسل رسالة",
          key: "contact",
        },
      ],
    },
  ];

  const resources = {
    title: {
      EN: "Useful Resources",
      FR: "Ressources utiles",
      AR: "موارد مفيدة",
    } as Record<Lang, string>,
    links: [
      { label: "startup.dz", href: "https://startup.dz" },
      { label: "inapi.org", href: "https://www.inapi.org" },
      { label: "mesrs.dz", href: "https://www.mesrs.dz" },
      { label: "anvredet.org.dz", href: "https://www.anvredet.org.dz" },
      {
        label: "business-seed.mesrs.dz",
        href: "https://business-seed.mesrs.dz",
      },
    ],
  };

  return (
    <footer
      style={{
        background: "#0A0E1F",
        color: "#fff",
        padding: "4.5rem 2rem 2rem",
        direction: isRTL ? "rtl" : "ltr",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          data-footer-grid
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(5, 1fr)",
            gap: "2.5rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <img
                src={logo}
                alt=""
                style={{ height: 44, width: 44, borderRadius: "50%" }}
              />
              <div style={{ lineHeight: 1.1 }}>
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.005em",
                  }}
                >
                  Business Incubator
                </div>
                <div
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#7DB83A",
                    marginTop: 2,
                  }}
                >
                  M'Sila
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                maxWidth: 260,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {
                {
                  EN: "Algeria's #1 university-based business incubator at Université Mohamed Boudiaf — M'Sila.",
                  FR: "L'incubateur d'entreprises universitaire #1 d'Algérie à l'Université Mohamed Boudiaf — M'Sila.",
                  AR: "حاضنة الأعمال الجامعية الأولى في الجزائر بجامعة محمد بوضياف — المسيلة.",
                }[lang]
              }
            </p>
          </div>

          {cols.map((col, ci) => (
            <div key={ci}>
              <div
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 16,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {col.title[lang]}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {col.items.map((item, ii) => (
                  <button
                    key={ii}
                    onClick={() => item.key && onNav(item.key)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      cursor: item.key ? "pointer" : "default",
                      fontFamily: "'DM Sans',sans-serif",
                      textAlign: isRTL ? "right" : "left",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (item.key) e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {item[lang]}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Useful Resources — external links */}
          <div>
            <div
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {resources.title[lang]}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {resources.links.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "'DM Sans',sans-serif",
                    textDecoration: "none",
                    textAlign: isRTL ? "right" : "left",
                    transition: "color 0.15s ease",
                    direction: "ltr",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 22,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            &copy; {new Date().getFullYear()} Université Mohamed Boudiaf —
            M'Sila.{" "}
            {
              {
                EN: "All rights reserved.",
                FR: "Tous droits réservés.",
                AR: "جميع الحقوق محفوظة.",
              }[lang]
            }
          </div>
        </div>
      </div>
    </footer>
  );
};
