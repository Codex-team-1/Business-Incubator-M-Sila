import React from 'react';
import type { Lang } from '../types';
import campus from '../assets/uni-msila.jpg';

/* ─────────────────────────────────────────────────────────────────
   HERO — full-bleed background photo
   · Diagonal scrim: dark-left for text, photo shows on the right
   · Left column: eyebrow line · headline · subtitle · CTAs · stats
   · No badge pills, no image overlays
───────────────────────────────────────────────────────────────── */
const Hero: React.FC<{ onNav: (id: string) => void; lang: Lang }> = ({ onNav, lang }) => {
  const isRTL = lang === 'AR';
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  /* per-language strings ─────────────────────────────────────── */
  const t = {
    EN: {
      eyebrow: "Algeria's #1 University Incubator",
      line1:   'Where ideas',
      line2:   'become startups.',
      sub:     "Université Mohamed Boudiaf — 85+ hours of structured annual training, expert mentorship, and a launchpad for every founder.",
      cta1:    'Apply for Incubation',
      cta2:    'Explore Programs',
      imgAlt:  "Université Mohamed Boudiaf M'Sila campus",
      stats: [
        { n: '120+', l: 'Startups Supported' },
        { n: '85+',  l: 'Training Hrs / Year' },
        { n: '#1',   l: 'University Incubator in Algeria' },
        { n: '12+',  l: 'Partner Organizations' },
      ],
    },
    FR: {
      eyebrow: 'Incubateur Universitaire #1 en Algérie',
      line1:   'Des idées',
      line2:   'aux startups.',
      sub:     "Université Mohamed Boudiaf — 85+ heures de formation structurée, mentorat expert et rampe de lancement pour chaque fondateur.",
      cta1:    'Candidater',
      cta2:    'Découvrir les programmes',
      imgAlt:  "Campus Université Mohamed Boudiaf M'Sila",
      stats: [
        { n: '120+', l: 'Startups accompagnées' },
        { n: '85+',  l: 'Heures de formation / an' },
        { n: '#1',   l: 'Incubateur universitaire en Algérie' },
        { n: '12+',  l: 'Organisations partenaires' },
      ],
    },
    AR: {
      eyebrow: 'الحاضنة الجامعية #1 في الجزائر',
      line1:   'حيث تتحوّل الأفكار',
      line2:   'إلى شركات ناشئة.',
      sub:     'جامعة محمد بوضياف — +85 ساعة تكوين سنوي منظم، إرشاد متخصص، ومنصة انطلاق لكل مؤسس.',
      cta1:    'تقدّم للحضانة',
      cta2:    'اكتشف البرامج',
      imgAlt:  'حرم جامعة محمد بوضياف مسيلة',
      stats: [
        { n: '+120', l: 'شركة ناشئة مدعومة' },
        { n: '+85',  l: 'ساعة تكوين سنوياً' },
        { n: '#1',   l: 'حاضنة جامعية في الجزائر' },
        { n: '+12',  l: 'منظمة شريكة' },
      ],
    },
  }[lang];

  /* stagger helper ────────────────────────────────────────────── */
  const stagger = (ms: number): React.CSSProperties => ({
    opacity:    mounted ? 1 : 0,
    transform:  mounted ? 'translateY(0)' : 'translateY(14px)',
    transition: `opacity 0.55s ${ms}ms ease, transform 0.55s ${ms}ms ease`,
  });

  return (
    <section
      id="top"
      data-screen-label="Hero"
      aria-label={t.eyebrow}
      style={{
        position: 'relative',
        minHeight: '100svh',
        direction: isRTL ? 'rtl' : 'ltr',
        overflow: 'hidden',
        isolation: 'isolate',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Full-bleed background photo ── */}
      <img
        src={campus}
        alt={t.imgAlt}
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 50%',
          zIndex: 0,
        }}
      />

      {/* ── Diagonal scrim: heavy dark on text side, fades out on photo side ── */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: isRTL
          ? `linear-gradient(
              to left,
              rgba(7,22,64,0.96) 0%,
              rgba(7,22,64,0.90) 28%,
              rgba(7,22,64,0.65) 52%,
              rgba(7,22,64,0.18) 72%,
              rgba(7,22,64,0.04) 100%
            )`
          : `linear-gradient(
              to right,
              rgba(7,22,64,0.96) 0%,
              rgba(7,22,64,0.90) 28%,
              rgba(7,22,64,0.65) 52%,
              rgba(7,22,64,0.18) 72%,
              rgba(7,22,64,0.04) 100%
            )`,
      }} />

      {/* ── Thin bottom gradient so stats text is always legible ── */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 160, zIndex: 1,
        background: 'linear-gradient(to top, rgba(7,22,64,0.70) 0%, transparent 100%)',
      }} />

      {/* ── Content column ── */}
      <div
        data-hero-inner
        style={{
          position: 'relative', zIndex: 2,
          flex: 1,
          maxWidth: 1200, width: '100%',
          margin: '0 auto',
          padding: '8.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          /* Constrain text to the dark half — ~52 % of width */
          alignItems: 'flex-start',
        }}
      >
        {/* Inner wrapper caps text width to left half */}
        <div style={{ maxWidth: 560, width: '100%' }}>

          {/* Eyebrow line */}
          <p style={{
            ...stagger(0),
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 12,
            fontWeight: 600,
            color: '#7DB83A',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            margin: '0 0 18px',
          }}>{t.eyebrow}</p>

          {/* Headline */}
          <h1 style={{
            ...stagger(70),
            fontFamily: "'Syne',sans-serif",
            fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            margin: '0 0 18px',
          }}>
            <span style={{ display: 'block', color: '#fff' }}>{t.line1}</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(95deg, #fff 0%, #C4E390 50%, #7DB83A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>{t.line2}</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            ...stagger(130),
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 'clamp(0.85rem, 1.2vw, 0.97rem)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.72,
            margin: '0 0 28px',
          }}>{t.sub}</p>

          {/* CTA buttons */}
          <div style={{
            ...stagger(190),
            display: 'flex', flexWrap: 'wrap', gap: 10,
            alignItems: 'center',
            marginBottom: 32,
          }}>
            <HeroBtn primary isRTL={isRTL} label={t.cta1} onClick={() => onNav('contact')} />
            <HeroBtn isRTL={isRTL} label={t.cta2} onClick={() => onNav('programs')} />
          </div>

          {/* Stats — tight row, no extra top margin */}
          <div
            data-hero-stats
            style={{
              ...stagger(250),
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0,
              alignItems: 'flex-start',
            }}
          >
            {t.stats.map((s, i) => (
              <StatCell
                key={i}
                n={s.n}
                label={s.l}
                divider={i < t.stats.length - 1}
                isRTL={isRTL}
              />
            ))}
          </div>

        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div
        aria-hidden="true"
        data-hero-scroll-cue
        style={{
          position: 'absolute', bottom: 20, left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          opacity: mounted ? 0.38 : 0,
          transition: 'opacity 0.6s 520ms ease',
        }}
      >
        <div style={{
          width: 20, height: 32, borderRadius: 10,
          border: '1.5px solid rgba(255,255,255,0.28)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 5, left: '50%',
            transform: 'translateX(-50%)',
            width: 2, height: 6, borderRadius: 2,
            background: '#fff',
            animation: 'heroScroll 1.8s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
};

/* ─── Stat cell ─────────────────────────────────────────────────── */
const StatCell: React.FC<{
  n: string; label: string; divider: boolean; isRTL: boolean;
}> = React.memo(({ n, label, divider, isRTL }) => (
  <div style={{
    paddingInlineEnd: 22,
    marginInlineEnd: divider ? 22 : 0,
    borderInlineEnd: divider ? '1px solid rgba(255,255,255,0.14)' : 'none',
  }}>
    <div className="num" style={{
      fontFamily: "'Syne',sans-serif",
      fontSize: 'clamp(1.35rem, 2vw, 1.75rem)',
      fontWeight: 800,
      color: '#fff',
      lineHeight: 1,
      letterSpacing: '-0.025em',
      fontVariantNumeric: 'tabular-nums',
    }}>{n}</div>
    <div style={{
      fontSize: 11,
      color: 'rgba(255,255,255,0.48)',
      marginTop: 5,
      lineHeight: 1.4,
      fontFamily: "'DM Sans',sans-serif",
      maxWidth: 96,
      textAlign: isRTL ? 'right' : 'left',
    }}>{label}</div>
  </div>
));

/* ─── CTA button ─────────────────────────────────────────────────── */
const HeroBtn: React.FC<{
  label: string; primary?: boolean; isRTL: boolean; onClick: () => void;
}> = ({ label, primary, isRTL, onClick }) => {
  const [hov, setHov] = React.useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onFocus={() => setHov(true)}
      onBlur={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '0 22px', height: 46,
        borderRadius: 11,
        border: primary ? 'none' : '1px solid rgba(255,255,255,0.20)',
        background: primary
          ? (hov ? '#5A8A22' : '#7DB83A')
          : (hov ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.07)'),
        color: '#fff',
        fontSize: 13.5,
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: "'DM Sans',sans-serif",
        backdropFilter: primary ? 'none' : 'blur(10px)',
        boxShadow: primary
          ? (hov ? '0 8px 28px rgba(125,184,58,0.50)' : '0 5px 18px rgba(125,184,58,0.30)')
          : 'none',
        transform: hov ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'background 0.18s ease, box-shadow 0.18s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1)',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
      {primary && (
        <svg
          width="13" height="13" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
          style={{ transform: isRTL ? 'scaleX(-1)' : 'none', flexShrink: 0 }}
        >
          <path d="M5 12h14M13 5l7 7-7 7"/>
        </svg>
      )}
    </button>
  );
};

export default Hero;
