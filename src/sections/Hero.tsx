import React from 'react';
import type { Lang } from '../types';
import logo from '../assets/incubateur-logo.jpg';
import campus from '../assets/uni-msila.jpg';

/* ─── HERO ─── */
const Hero: React.FC<{ onNav: (id: string) => void; lang: Lang }> = ({ onNav, lang }) => {
  const isRTL = lang === 'AR';
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const t = {
    EN: {
      badge: "Algeria's #1 University Incubator",
      title1: 'Where ideas',
      title2: 'become startups.',
      sub: "Université Mohamed Boudiaf is home to Algeria's pioneering university business incubator — 85+ hours of structured annual training, expert mentorship, and a launchpad for every founder.",
      cta1: 'Apply for Incubation',
      cta2: 'Explore Programs',
      campus: "M'Sila Campus",
      stats: [
        { n: '120+', l: 'Startups Supported' },
        { n: '85+',  l: 'Training Hours / Year' },
        { n: '#1',   l: 'University Incubator in Algeria' },
        { n: '12+',  l: 'Partner Organizations' },
      ],
    },
    FR: {
      badge: 'Incubateur Universitaire #1 en Algérie',
      title1: 'Des idées',
      title2: 'aux startups.',
      sub: "L'Université Mohamed Boudiaf abrite le premier incubateur universitaire d'Algérie — 85+ heures de formation annuelle, mentorat expert, rampe de lancement pour chaque fondateur.",
      cta1: "Candidater à l'incubation",
      cta2: 'Découvrir les programmes',
      campus: "Campus M'Sila",
      stats: [
        { n: '120+', l: 'Startups accompagnées' },
        { n: '85+',  l: 'Heures de formation / an' },
        { n: '#1',   l: 'Incubateur universitaire en Algérie' },
        { n: '12+',  l: 'Organisations partenaires' },
      ],
    },
    AR: {
      badge: 'الحاضنة الجامعية #1 في الجزائر',
      title1: 'حيث تتحوّل الأفكار',
      title2: 'إلى شركات ناشئة.',
      sub: 'جامعة محمد بوضياف موطن أول حاضنة جامعية للأعمال في الجزائر — +85 ساعة تكوين سنوي وإرشاد متخصص ومنصة انطلاق لكل مؤسس.',
      cta1: 'تقدّم للحضانة',
      cta2: 'اكتشف البرامج',
      campus: 'حرم مسيلة',
      stats: [
        { n: '+120', l: 'شركة ناشئة مدعومة' },
        { n: '+85',  l: 'ساعة تكوين سنوياً' },
        { n: '#1',   l: 'حاضنة جامعية في الجزائر' },
        { n: '+12',  l: 'منظمة شريكة' },
      ],
    },
  }[lang];

  return (
    <section id="top" data-screen-label="Hero" style={{
      position: 'relative', minHeight: '100vh', overflow: 'hidden',
      direction: isRTL ? 'rtl' : 'ltr', background: '#0D2D72', isolation: 'isolate',
    }}>
      {/* Background photo (parallax) */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${campus})`,
        backgroundSize: 'cover',
        backgroundPosition: `center ${50 + scrollY * 0.04}%`,
        transform: `scale(1.06) translateY(${scrollY * 0.12}px)`,
        willChange: 'transform', zIndex: 0,
      }} />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(95deg, rgba(13,45,114,0.94) 0%, rgba(13,45,114,0.82) 45%, rgba(13,45,114,0.5) 100%)',
        zIndex: 1,
      }} />

      <div style={{
        position: 'absolute',
        right: isRTL ? 'auto' : '-10%', left: isRTL ? '-10%' : 'auto',
        top: '15%', width: 480, height: 480, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(125,184,58,0.32) 0%, transparent 65%)',
        zIndex: 1, pointerEvents: 'none',
        animation: 'heroGlow 9s ease-in-out infinite',
      }} />

      <div data-hero-inner style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1200, margin: '0 auto',
        padding: '7rem 2rem 5rem',
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 24, flexWrap: 'wrap' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 16px', borderRadius: 9999,
            background: 'rgba(255,255,255,0.10)',
            border: '1px solid rgba(255,255,255,0.20)',
            backdropFilter: 'blur(10px)',
          }}>
            <img src={logo} alt="" style={{
              width: 22, height: 22, borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.4)',
            }} />
            <span style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 12, fontWeight: 700, color: '#fff',
              textTransform: 'uppercase', letterSpacing: '0.12em',
            }}>Business Incubator M'Sila</span>
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 14px', borderRadius: 9999,
            background: 'rgba(125,184,58,0.18)',
            border: '1px solid rgba(125,184,58,0.32)',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: '#7DB83A',
              boxShadow: '0 0 0 4px rgba(125,184,58,0.25)',
              animation: 'heroPulse 2s ease-in-out infinite',
            }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: '#C4E390', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "'DM Sans',sans-serif" }}>{t.badge}</span>
          </div>
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2.6rem, 6vw, 5rem)',
          fontWeight: 800, color: '#fff', lineHeight: 1.02,
          letterSpacing: '-0.03em', marginBottom: 28, maxWidth: 920,
        }}>
          <span style={{ display: 'block', opacity: 0, animation: 'heroLineIn 0.7s 0.1s ease forwards' }}>
            {t.title1}
          </span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(95deg, #fff 0%, #C4E390 60%, #7DB83A 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            opacity: 0, animation: 'heroLineIn 0.7s 0.25s ease forwards',
          }}>{t.title2}</span>
        </h1>

        <p style={{
          fontSize: '1.15rem', color: 'rgba(255,255,255,0.78)',
          lineHeight: 1.65, marginBottom: 40, maxWidth: 620,
          fontFamily: "'DM Sans',sans-serif",
          opacity: 0, animation: 'heroLineIn 0.7s 0.4s ease forwards',
        }}>{t.sub}</p>

        <div style={{
          display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 64,
          opacity: 0, animation: 'heroLineIn 0.7s 0.55s ease forwards',
        }}>
          <button onClick={() => onNav('contact')} style={{
            padding: '0 30px', height: 54, background: '#7DB83A', color: '#fff',
            border: 'none', borderRadius: 14, fontSize: 15, fontWeight: 600,
            cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
            transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
            boxShadow: '0 8px 28px rgba(125,184,58,0.35)',
            display: 'inline-flex', alignItems: 'center', gap: 10,
          }}
          onMouseEnter={e => { e.currentTarget.style.background='#5A8A22'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background='#7DB83A'; e.currentTarget.style.transform='translateY(0)'; }}
          >
            {t.cta1}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={isRTL ? 'M19 12H5M11 5l-7 7 7 7' : 'M5 12h14M13 5l7 7-7 7'}/>
            </svg>
          </button>
          <button onClick={() => onNav('programs')} style={{
            padding: '0 28px', height: 54,
            background: 'rgba(255,255,255,0.08)', color: '#fff',
            border: '1px solid rgba(255,255,255,0.22)', borderRadius: 14,
            fontSize: 15, fontWeight: 500, cursor: 'pointer',
            fontFamily: "'DM Sans',sans-serif",
            backdropFilter: 'blur(8px)', transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.16)'; }}
          onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.08)'; }}
          >{t.cta2}</button>
        </div>

        <div data-hero-stats style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          maxWidth: 880,
          opacity: 0, animation: 'heroLineIn 0.7s 0.7s ease forwards',
        }}>
          {t.stats.map((s, i) => (
            <div key={i} style={{
              padding: '22px 18px',
              [isRTL ? 'borderLeft' : 'borderRight']: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '2.2rem', fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.n}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.62)', marginTop: 8, lineHeight: 1.45, fontFamily: "'DM Sans',sans-serif" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 28, left: '50%',
        transform: 'translateX(-50%)', zIndex: 3,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        opacity: 0.5,
      }}>
        <div style={{
          width: 24, height: 38, borderRadius: 12,
          border: '1.5px solid rgba(255,255,255,0.4)', position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)',
            width: 3, height: 8, borderRadius: 2, background: '#fff',
            animation: 'heroScroll 1.8s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
