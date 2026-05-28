import React from "react";
import type { Lang } from "../types";

const t = {
  EN: {
    code: "404",
    label: "Page Not Found",
    title: "Lost in the\nInnovation Space",
    subtitle:
      "The page you're looking for has moved, been removed, or never existed. Let's get you back on track.",
    cta: "Back to Home",
    hint: "Or explore our sections below",
    sections: ["Services", "Programs", "Startups", "Team", "Contact"],
  },
  FR: {
    code: "404",
    label: "Page Introuvable",
    title: "Perdu dans\nl'Espace Innovation",
    subtitle:
      "La page que vous recherchez a été déplacée, supprimée ou n'a jamais existé. Revenons sur la bonne voie.",
    cta: "Retour à l'accueil",
    hint: "Ou explorez nos sections ci-dessous",
    sections: ["Services", "Programmes", "Startups", "Équipe", "Contact"],
  },
  AR: {
    code: "404",
    label: "الصفحة غير موجودة",
    title: "ضائع في\nفضاء الابتكار",
    subtitle:
      "الصفحة التي تبحث عنها تم نقلها أو حذفها أو لم تكن موجودة من قبل. دعنا نعيدك إلى المسار الصحيح.",
    cta: "العودة إلى الرئيسية",
    hint: "أو استكشف أقسامنا أدناه",
    sections: ["الخدمات", "البرامج", "الشركات الناشئة", "الفريق", "التواصل"],
  },
};

const sectionIds = ["services", "programs", "startups", "team", "contact"];

interface Props {
  lang: Lang;
  onNav: (id: string) => void;
  onDismiss: () => void;
}

/* ── Floating particle ── */
const Particle: React.FC<{
  x: number;
  y: number;
  size: number;
  delay: number;
  color: string;
  duration: number;
}> = ({ x, y, size, delay, color, duration }) => (
  <div
    style={{
      position: "absolute",
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      opacity: 0,
      animation: `notFoundFloat ${duration}s ease-in-out ${delay}s infinite`,
    }}
  />
);

/* ── Orbit ring ── */
const OrbitRing: React.FC<{
  size: number;
  delay: number;
  duration: number;
  color: string;
}> = ({ size, delay, duration, color }) => (
  <div
    style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      width: size,
      height: size,
      marginLeft: -size / 2,
      marginTop: -size / 2,
      borderRadius: "50%",
      border: `1.5px solid ${color}`,
      opacity: 0,
      animation: `notFoundOrbit ${duration}s ease-out ${delay}s infinite`,
    }}
  />
);

const NotFound: React.FC<Props> = ({ lang, onNav, onDismiss }) => {
  const copy = t[lang];
  const isRtl = lang === "AR";

  const handleNav = (sectionId: string) => {
    onDismiss();
    setTimeout(() => onNav(sectionId), 80);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "linear-gradient(135deg, #06122e 0%, #0D2D72 45%, #0e1f4a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        direction: isRtl ? "rtl" : "ltr",
      }}
    >
      {/* ── Animated CSS ── */}
      <style>{`
        @keyframes notFoundFloat {
          0%   { opacity: 0; transform: translateY(0) scale(0.8); }
          20%  { opacity: 0.7; }
          80%  { opacity: 0.5; }
          100% { opacity: 0; transform: translateY(-80px) scale(1.2); }
        }
        @keyframes notFoundOrbit {
          0%   { opacity: 0; transform: scale(0.6); }
          30%  { opacity: 0.25; }
          70%  { opacity: 0.1; }
          100% { opacity: 0; transform: scale(1.8); }
        }
        @keyframes notFoundPulse {
          0%, 100% { transform: scale(1); opacity: 0.12; }
          50%      { transform: scale(1.08); opacity: 0.22; }
        }
        @keyframes notFoundSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes notFoundSpinReverse {
          to { transform: rotate(-360deg); }
        }
        @keyframes notFoundGlitch {
          0%   { clip-path: inset(0 0 95% 0); transform: translateX(0);  }
          5%   { clip-path: inset(10% 0 60% 0); transform: translateX(-8px); }
          10%  { clip-path: inset(55% 0 5% 0);  transform: translateX(8px);  }
          15%  { clip-path: inset(20% 0 80% 0); transform: translateX(-4px); }
          20%  { clip-path: inset(70% 0 2% 0);  transform: translateX(6px);  }
          25%  { clip-path: inset(0 0 95% 0);   transform: translateX(0);    }
          100% { clip-path: inset(0 0 95% 0);   transform: translateX(0);    }
        }
        @keyframes notFoundFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes notFoundBlink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        @keyframes notFoundRocketFloat {
          0%, 100% { transform: translateY(0) rotate(-25deg); }
          50%      { transform: translateY(-16px) rotate(-25deg); }
        }
        @keyframes notFoundStarTwinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%      { opacity: 0.9; transform: scale(1.4); }
        }
        @keyframes notFoundScanline {
          0%   { top: -4px; }
          100% { top: 100%; }
        }
        .nf-btn-home:hover {
          background: #1B4FBB !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 32px rgba(27,79,187,0.45) !important;
        }
        .nf-section-pill:hover {
          background: rgba(255,255,255,0.14) !important;
          border-color: rgba(125,184,58,0.55) !important;
          color: #C4E390 !important;
          transform: translateY(-2px) !important;
        }
      `}</style>

      {/* ── Background glow blobs ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            left: "-10%",
            top: "-15%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(39,98,216,0.22) 0%, transparent 70%)",
            animation: "notFoundPulse 8s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-12%",
            bottom: "-20%",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(125,184,58,0.12) 0%, transparent 70%)",
            animation: "notFoundPulse 10s ease-in-out 2s infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: -300,
            marginTop: -300,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(27,79,187,0.15) 0%, transparent 65%)",
            animation: "notFoundPulse 12s ease-in-out 4s infinite",
          }}
        />
      </div>

      {/* ── Star field ── */}
      {Array.from({ length: 55 }, (_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${(i * 37 + 13) % 100}%`,
            top: `${(i * 53 + 7) % 100}%`,
            width: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5,
            height: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5,
            borderRadius: "50%",
            background: "#fff",
            animation: `notFoundStarTwinkle ${2 + (i % 4)}s ease-in-out ${
              (i * 0.3) % 4
            }s infinite`,
          }}
        />
      ))}

      {/* ── Rising particles ── */}
      {[
        { x: 12, y: 80, s: 6, d: 0, c: "rgba(125,184,58,0.7)", dur: 5 },
        { x: 25, y: 85, s: 4, d: 1.2, c: "rgba(39,98,216,0.8)", dur: 6 },
        { x: 40, y: 90, s: 5, d: 0.5, c: "rgba(196,227,144,0.6)", dur: 4.5 },
        { x: 60, y: 82, s: 3, d: 2.1, c: "rgba(125,184,58,0.5)", dur: 5.5 },
        { x: 75, y: 88, s: 7, d: 0.8, c: "rgba(39,98,216,0.6)", dur: 6.5 },
        { x: 88, y: 78, s: 4, d: 1.6, c: "rgba(196,227,144,0.7)", dur: 5 },
        { x: 5, y: 70, s: 5, d: 3.0, c: "rgba(125,184,58,0.4)", dur: 7 },
        { x: 95, y: 65, s: 3, d: 0.3, c: "rgba(27,79,187,0.7)", dur: 4 },
      ].map((p, i) => (
        <Particle
          key={i}
          x={p.x}
          y={p.y}
          size={p.s}
          delay={p.d}
          color={p.c}
          duration={p.dur}
        />
      ))}

      {/* ── Orbit rings centered on the 404 ── */}
      <div style={{ position: "absolute", left: "50%", top: "38%", marginLeft: -1, marginTop: -1 }}>
        {[
          { size: 240, delay: 0, dur: 4, color: "rgba(125,184,58,0.4)" },
          { size: 360, delay: 0.8, dur: 5, color: "rgba(39,98,216,0.3)" },
          { size: 500, delay: 1.6, dur: 6.5, color: "rgba(125,184,58,0.15)" },
        ].map((r, i) => (
          <OrbitRing key={i} size={r.size} delay={r.delay} duration={r.dur} color={r.color} />
        ))}
      </div>

      {/* ── Main card ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 680,
          width: "100%",
          animation: "notFoundFadeUp 0.8s ease both",
        }}
      >
        {/* Label pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 100,
            background: "rgba(125,184,58,0.12)",
            border: "1px solid rgba(125,184,58,0.3)",
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#C4E390",
            marginBottom: 32,
            animation: "notFoundFadeUp 0.8s ease 0.1s both",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7DB83A", animation: "notFoundBlink 1.4s ease infinite" }} />
          {copy.label}
        </div>

        {/* ── 404 display number with glitch layers ── */}
        <div
          style={{
            position: "relative",
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(6rem, 18vw, 10rem)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            backgroundImage: "linear-gradient(135deg, #fff 30%, #a8c8f8 70%, #7DB83A 100%)",
            marginBottom: 8,
            userSelect: "none",
            animation: "notFoundFadeUp 0.8s ease 0.2s both",
          }}
        >
          {copy.code}
          {/* Glitch clone 1 */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              fontFamily: "'Syne', sans-serif",
              fontSize: "inherit",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#2762D8",
              opacity: 0.55,
              mixBlendMode: "screen",
              animation: "notFoundGlitch 5s linear 1s infinite",
              pointerEvents: "none",
            }}
          >
            {copy.code}
          </div>
          {/* Glitch clone 2 */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              fontFamily: "'Syne', sans-serif",
              fontSize: "inherit",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#7DB83A",
              opacity: 0.4,
              mixBlendMode: "screen",
              animation: "notFoundGlitch 5s linear 1.5s infinite",
              transform: "scaleX(-1)",
              pointerEvents: "none",
            }}
          >
            {copy.code}
          </div>
        </div>

        {/* ── Rocket icon ── */}
        <div
          style={{
            fontSize: "clamp(2.4rem, 6vw, 3.5rem)",
            marginBottom: 20,
            animation: "notFoundRocketFloat 3s ease-in-out infinite, notFoundFadeUp 0.8s ease 0.3s both",
            filter: "drop-shadow(0 0 18px rgba(125,184,58,0.5))",
          }}
        >
          🚀
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: 20,
            whiteSpace: "pre-line",
            animation: "notFoundFadeUp 0.8s ease 0.35s both",
          }}
        >
          {copy.title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.75,
            maxWidth: 480,
            marginBottom: 40,
            animation: "notFoundFadeUp 0.8s ease 0.45s both",
          }}
        >
          {copy.subtitle}
        </p>

        {/* ── CTA Button ── */}
        <button
          onClick={() => handleNav("top")}
          className="nf-btn-home"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "14px 32px",
            borderRadius: 12,
            background: "linear-gradient(135deg, #1B4FBB 0%, #2762D8 100%)",
            color: "#fff",
            fontFamily: "'Syne', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 700,
            letterSpacing: "0.01em",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(27,79,187,0.35)",
            transition: "background 0.22s, transform 0.22s, box-shadow 0.22s",
            marginBottom: 32,
            animation: "notFoundFadeUp 0.8s ease 0.55s both",
          }}
        >
          {/* Left arrow SVG */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isRtl ? "scaleX(-1)" : "none" }}>
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {copy.cta}
        </button>

        {/* ── Divider with hint ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
            animation: "notFoundFadeUp 0.8s ease 0.65s both",
          }}
        >
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
          <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.38)", whiteSpace: "nowrap" }}>
            {copy.hint}
          </span>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
        </div>

        {/* ── Section quick-nav pills ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            animation: "notFoundFadeUp 0.8s ease 0.75s both",
          }}
        >
          {copy.sections.map((label, i) => (
            <button
              key={i}
              onClick={() => handleNav(sectionIds[i])}
              className="nf-section-pill"
              style={{
                padding: "8px 18px",
                borderRadius: 100,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Decorative bottom scan line ── */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, transparent, rgba(125,184,58,0.4), rgba(39,98,216,0.5), rgba(125,184,58,0.4), transparent)",
          animation: "notFoundScanline 6s linear infinite",
          pointerEvents: "none",
        }}
      />

      {/* ── Spinning tech ring decoration ── */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 48,
          width: 80,
          height: 80,
          opacity: 0.25,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid transparent",
            borderTopColor: "#7DB83A",
            borderRightColor: "#2762D8",
            animation: "notFoundSpin 4s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 14,
            borderRadius: "50%",
            border: "1.5px solid transparent",
            borderTopColor: "#C4E390",
            borderLeftColor: "#1B4FBB",
            animation: "notFoundSpinReverse 3s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "50%",
            marginLeft: -4,
            marginTop: -4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#7DB83A",
            boxShadow: "0 0 10px #7DB83A",
          }}
        />
      </div>

      {/* ── Same decoration top-left ── */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 48,
          width: 60,
          height: 60,
          opacity: 0.18,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid transparent",
            borderBottomColor: "#2762D8",
            borderLeftColor: "#7DB83A",
            animation: "notFoundSpin 5s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 10,
            borderRadius: "50%",
            border: "1px solid transparent",
            borderTopColor: "#C4E390",
            borderRightColor: "#1B4FBB",
            animation: "notFoundSpinReverse 3.5s linear infinite",
          }}
        />
      </div>
    </div>
  );
};

export default NotFound;
