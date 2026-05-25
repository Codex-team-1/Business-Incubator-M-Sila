import React from 'react';
import type { Lang } from '../types';
import campus from '../assets/uni-msila.jpg';
import { useCountUp } from '../hooks/useReveal';

/* ─────────────────────────────────────────────────────────────────
   HERO — full-bleed background photo
   · Diagonal scrim: dark-left for text, photo shows on the right
   · Left column: eyebrow · headline · subtitle · CTAs · stats row
───────────────────────────────────────────────────────────────── */
const Hero: React.FC<{ onNav: (id: string) => void; lang: Lang }> = ({ onNav, lang }) => {
  const isRTL = lang === 'AR';
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

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
        { value: 202, suffix: '+', l: 'Patents Filed',        accent: 'blue'  },
        { value: 17,  suffix: '',  l: 'Graduated Startups',   accent: 'green' },
        { value: 52,  suffix: '',  l: 'Labeled Projects',     accent: 'blue'  },
        { value: 548, suffix: '',  l: 'Students · Res.1275',  accent: 'green' },
        { value: 287, suffix: '',  l: 'Projects · Res.1275',  accent: 'blue'  },
        { value: 124, suffix: '',  l: 'Active Projects',      accent: 'green' },
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
        { value: 202, suffix: '+', l: 'Brevets déposés',      accent: 'blue'  },
        { value: 17,  suffix: '',  l: 'Startups diplômées',   accent: 'green' },
        { value: 52,  suffix: '',  l: 'Projets labellisés',   accent: 'blue'  },
        { value: 548, suffix: '',  l: 'Étud. · Rés.1275',    accent: 'green' },
        { value: 287, suffix: '',  l: 'Proj. · Rés.1275',    accent: 'blue'  },
        { value: 124, suffix: '',  l: 'Projets actifs',       accent: 'green' },
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
        { value: 202, suffix: '+', l: 'براءة اختراع مودعة', accent: 'blue'  },
        { value: 17,  suffix: '',  l: 'شركة ناشئة خريجة',  accent: 'green' },
        { value: 52,  suffix: '',  l: 'مشروع موسوم',        accent: 'blue'  },
        { value: 548, suffix: '',  l: 'طالب · ق.1275',      accent: 'green' },
        { value: 287, suffix: '',  l: 'مشروع · ق.1275',     accent: 'blue'  },
        { value: 124, suffix: '',  l: 'مشروع نشط',          accent: 'green' },
      ],
    },
  }[lang];

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
      {/* ── Background photo ── */}
      <img
        src={campus} alt={t.imgAlt}
        fetchPriority="high" decoding="async"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 50%',
          zIndex: 0,
        }}
      />

      {/* ── Diagonal scrim ── */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: isRTL
          ? 'linear-gradient(to left,  rgba(7,22,64,0.97) 0%,rgba(7,22,64,0.88) 30%,rgba(7,22,64,0.55) 55%,rgba(7,22,64,0.10) 100%)'
          : 'linear-gradient(to right, rgba(7,22,64,0.97) 0%,rgba(7,22,64,0.88) 30%,rgba(7,22,64,0.55) 55%,rgba(7,22,64,0.10) 100%)',
      }} />

      {/* ── Content column — fills available height, centres vertically ── */}
      <div
        data-hero-inner
        style={{
          position: 'relative', zIndex: 2,
          flex: 1,
          maxWidth: 1200, width: '100%',
          margin: '0 auto',
          padding: '8rem 2rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ maxWidth: 560, width: '100%' }}>

          {/* Eyebrow */}
          <p style={{
            ...stagger(0),
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 11.5, fontWeight: 700,
            color: '#7DB83A',
            textTransform: 'uppercase', letterSpacing: '0.15em',
            margin: '0 0 16px',
          }}>{t.eyebrow}</p>

          {/* Headline */}
          <h1 style={{
            ...stagger(70),
            fontFamily: "'Syne',sans-serif",
            fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
            fontWeight: 700, lineHeight: 1.08,
            letterSpacing: '-0.03em', margin: '0 0 18px',
          }}>
            <span style={{ display: 'block', color: '#fff' }}>{t.line1}</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(95deg,#fff 0%,#C4E390 50%,#7DB83A 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>{t.line2}</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            ...stagger(130),
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 'clamp(0.85rem, 1.15vw, 0.96rem)',
            color: 'rgba(255,255,255,0.62)', lineHeight: 1.75,
            margin: '0 0 30px',
          }}>{t.sub}</p>

          {/* CTAs */}
          <div style={{
            ...stagger(190),
            display: 'flex', flexWrap: 'wrap', gap: 10,
            alignItems: 'center',
            marginBottom: 44,
          }}>
            <HeroBtn primary isRTL={isRTL} label={t.cta1} onClick={() => onNav('contact')} />
            <HeroBtn isRTL={isRTL} label={t.cta2} onClick={() => onNav('programs')} />
          </div>

          {/* ── Inline stats — 3 per row, no frame ── */}
          <div style={{
            ...stagger(270),
            display: 'grid',
            gridTemplateColumns: 'repeat(3, auto)',
            gap: '18px 32px',
            justifyContent: 'start',
          }}>
            {t.stats.map((s, i) => (
              <StatItem
                key={i}
                value={s.value}
                suffix={s.suffix}
                label={s.l}
                iconIndex={i}
                accent={s.accent}
                active={mounted}
                delay={i * 60}
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
          position: 'absolute', bottom: 22, left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          opacity: mounted ? 0.35 : 0,
          transition: 'opacity 0.6s 540ms ease',
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
            width: 2, height: 6, borderRadius: 2, background: '#fff',
            animation: 'heroScroll 1.8s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
};

/* ─── Inline stat item: icon  number  label ──────────────────────── */
const ICONS = [
  /* Patent */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ width: 18, height: 18 }}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <circle cx="12" cy="15" r="1.8"/>
    <path d="M10.8 17 9.5 19l1 1M13.2 17l1.3 2-1 1"/>
  </svg>,
  /* Rocket */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ width: 18, height: 18 }}>
    <path d="M4.5 16.5c-1.5 1.5-2 4-2 4s2.5-.5 4-2L17 7.5a4.24 4.24 0 0 0-6-6z"/>
    <path d="m15 5 4 4"/><path d="M3 21c1.5-1.5 2.5-3.5 3-5.5"/>
  </svg>,
  /* Tag */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ width: 18, height: 18 }}>
    <path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.41 0l7.29-7.29a1 1 0 0 0 0-1.41z"/>
    <circle cx="7" cy="7" r="1.3" fill="currentColor" stroke="none"/>
  </svg>,
  /* Graduation cap */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ width: 18, height: 18 }}>
    <path d="M22 10 12 5 2 10l10 5 10-5z"/>
    <path d="M6 12.5v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4"/>
    <line x1="22" y1="10" x2="22" y2="15"/>
  </svg>,
  /* Layers */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ width: 18, height: 18 }}>
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>,
  /* Pulse */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ width: 18, height: 18 }}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>,
];

const StatItem: React.FC<{
  value: number; suffix: string; label: string;
  iconIndex: number; accent: string;
  active: boolean; delay: number;
}> = React.memo(({ value, suffix, label, iconIndex, accent, active, delay }) => {
  const [hov, setHov] = React.useState(false);
  const n = useCountUp(value, active, 1400);
  const isGreen   = accent === 'green';
  const iconColor = isGreen ? '#7DB83A' : '#60A5FA';
  const glowColor = isGreen ? 'rgba(125,184,58,0.55)' : 'rgba(96,165,250,0.50)';

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'default',
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0)' : 'translateY(10px)',
        transition: `opacity 0.45s ${delay}ms ease, transform 0.45s ${delay}ms ease`,
      }}
    >
      {/* Icon — tinted dot with icon inside */}
      <div style={{
        width: 34, height: 34, borderRadius: 10,
        background: hov
          ? (isGreen ? 'rgba(125,184,58,0.18)' : 'rgba(96,165,250,0.16)')
          : 'rgba(255,255,255,0.07)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: iconColor,
        flexShrink: 0,
        filter: hov ? `drop-shadow(0 0 6px ${glowColor})` : 'none',
        transition: 'background 0.22s ease, filter 0.22s ease',
      }}>
        {ICONS[iconIndex]}
      </div>

      {/* Number + label stacked */}
      <div>
        <div className="num" style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: 'clamp(1.15rem, 1.6vw, 1.45rem)',
          fontWeight: 800,
          color: hov ? '#fff' : 'rgba(255,255,255,0.92)',
          lineHeight: 1,
          letterSpacing: '-0.025em',
          fontVariantNumeric: 'tabular-nums',
          transition: 'color 0.2s ease',
          whiteSpace: 'nowrap',
        }}>
          {n}{suffix}
        </div>
        <div style={{
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 10.5, fontWeight: 500,
          color: hov ? 'rgba(255,255,255,0.60)' : 'rgba(255,255,255,0.38)',
          marginTop: 3, lineHeight: 1.2,
          letterSpacing: '0.01em',
          transition: 'color 0.2s ease',
          whiteSpace: 'nowrap',
        }}>
          {label}
        </div>
      </div>
    </div>
  );
});

/* ─── CTA button ─────────────────────────────────────────────────── */
const HeroBtn: React.FC<{
  label: string; primary?: boolean; isRTL: boolean; onClick: () => void;
}> = ({ label, primary, isRTL, onClick }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onFocus={() => setHov(true)}      onBlur={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '0 22px', height: 46, borderRadius: 11,
        border: primary ? 'none' : '1px solid rgba(255,255,255,0.20)',
        background: primary
          ? (hov ? '#5A8A22' : '#7DB83A')
          : (hov ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.07)'),
        color: '#fff', fontSize: 13.5, fontWeight: 600,
        cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
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
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
          style={{ transform: isRTL ? 'scaleX(-1)' : 'none', flexShrink: 0 }}>
          <path d="M5 12h14M13 5l7 7-7 7"/>
        </svg>
      )}
    </button>
  );
};

export default Hero;
