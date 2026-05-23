import React from 'react';
import type { Lang } from '../types';
import logo from '../assets/incubateur-logo.jpg';

interface HeaderProps {
  activeSection: string;
  onNav: (sectionId: string) => void;
  lang: Lang;
  onLang: (l: Lang) => void;
}

/* ─── SMOOTH-SCROLL HEADER (anchor links instead of page routes) ─── */
const Header: React.FC<HeaderProps> = ({ activeSection, onNav, lang, onLang }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  const [hoveredKey, setHoveredKey] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const railRef = React.useRef<HTMLElement>(null);
  const pillRef = React.useRef<HTMLDivElement>(null);
  const linkRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks: { key: string; label: Record<Lang, string> }[] = [
    { key: 'intro',    label: { EN: 'About',    FR: 'À propos',  AR: 'حول' } },
    { key: 'services', label: { EN: 'Services', FR: 'Services',  AR: 'الخدمات' } },
    { key: 'team',     label: { EN: 'Team',     FR: 'Équipe',    AR: 'الفريق' } },
    { key: 'programs', label: { EN: 'Programs', FR: 'Programmes',AR: 'البرامج' } },
    { key: 'startups', label: { EN: 'Startups', FR: 'Startups',  AR: 'الشركات' } },
    { key: 'contact',  label: { EN: 'Contact',  FR: 'Contact',   AR: 'تواصل' } },
  ];

  // Sliding active-indicator (bar under the active link). Moves to hovered
  // link on hover, snaps back to active on leave.
  const moveIndicatorTo = (el: HTMLElement | null) => {
    if (!el || !railRef.current || !pillRef.current) return;
    const railRect = railRef.current.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    // Indicator is a small centered bar (60% of link width)
    const w = Math.max(20, r.width * 0.5);
    const left = (r.left - railRect.left) + (r.width - w) / 2;
    pillRef.current.style.left = left + 'px';
    pillRef.current.style.width = w + 'px';
    pillRef.current.style.opacity = '1';
  };

  const snapToActive = React.useCallback(() => {
    const el = linkRefs.current[activeSection];
    if (el) moveIndicatorTo(el);
    else if (pillRef.current) pillRef.current.style.opacity = '0';
  }, [activeSection]);

  React.useEffect(() => {
    requestAnimationFrame(snapToActive);
    window.addEventListener('resize', snapToActive);
    return () => window.removeEventListener('resize', snapToActive);
  }, [snapToActive, lang]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const langs: { code: Lang; name: string }[] = [
    { code: 'EN', name: 'English' },
    { code: 'FR', name: 'Français' },
    { code: 'AR', name: 'العربية' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 76,
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.04)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px',
      borderBottom: scrolled ? '1px solid rgba(228,230,239,0.6)' : '1px solid rgba(255,255,255,0.08)',
      transition: 'background 0.25s ease, border-color 0.25s ease',
    }}>
      <div onClick={() => onNav('top')} style={{
        display: 'inline-flex', alignItems: 'center', gap: 12, cursor: 'pointer',
      }}>
        <img src={logo} alt="Business Incubator M'Sila"
          style={{
            height: 48, width: 48, borderRadius: '50%', display: 'block',
            boxShadow: scrolled ? '0 4px 16px rgba(27,79,187,0.18)' : '0 4px 16px rgba(0,0,0,0.25)',
            transition: 'box-shadow 0.25s ease',
          }} />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{
            fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 800,
            color: scrolled ? '#0D2D72' : '#fff', letterSpacing: '-0.005em',
            transition: 'color 0.25s ease',
          }}>Business Incubator</span>
          <span style={{
            fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700,
            color: scrolled ? '#7DB83A' : '#C4E390', marginTop: 1,
            letterSpacing: '0.02em',
            transition: 'color 0.25s ease',
          }}>M'Sila</span>
        </div>
      </div>

      <nav
        ref={railRef}
        data-nav-rail
        onMouseLeave={() => { setHoveredKey(null); snapToActive(); }}
        style={{
          position: 'relative', display: 'flex', gap: 6, alignItems: 'center',
        }}
      >
        {/* Sliding active indicator — a thin bar centered under each link */}
        <div ref={pillRef} style={{
          position: 'absolute', bottom: -6, height: 2,
          background: scrolled ? '#1B4FBB' : '#fff',
          borderRadius: 2,
          transition: 'left 0.45s cubic-bezier(0.34, 1.4, 0.5, 1), width 0.45s cubic-bezier(0.34, 1.4, 0.5, 1), opacity 0.25s ease, background 0.25s ease',
          zIndex: 0, opacity: 0,
          boxShadow: scrolled ? '0 1px 6px rgba(27,79,187,0.35)' : '0 1px 6px rgba(255,255,255,0.35)',
        }} />
        {navLinks.map(link => {
          const active = activeSection === link.key;
          const hovered = hoveredKey === link.key;
          const baseColor = scrolled ? '#383D58' : 'rgba(255,255,255,0.92)';
          const hoverColor = scrolled ? '#1B4FBB' : '#fff';
          const activeColor = scrolled ? '#0D2D72' : '#fff';
          const label = link.label[lang];
          return (
            <button
              key={link.key}
              ref={el => { linkRefs.current[link.key] = el; }}
              onClick={() => onNav(link.key)}
              onMouseEnter={e => { setHoveredKey(link.key); moveIndicatorTo(e.currentTarget); }}
              onFocus={e => { setHoveredKey(link.key); moveIndicatorTo(e.currentTarget); }}
              onBlur={() => { setHoveredKey(null); snapToActive(); }}
              style={{
                position: 'relative', zIndex: 1,
                padding: '8px 14px',
                cursor: 'pointer', background: 'transparent', border: 'none',
                fontFamily: "'DM Sans', sans-serif", whiteSpace: 'nowrap',
                fontSize: 13.5,
                color: active ? activeColor : baseColor,
                fontWeight: active ? 600 : 500,
                letterSpacing: '0.005em',
                overflow: 'hidden',
                lineHeight: 1.4,
                transition: 'color 0.25s ease',
              }}
            >
              <span style={{
                display: 'inline-block',
                transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'transform 0.35s cubic-bezier(0.34, 1.4, 0.5, 1), color 0.25s ease',
                color: hovered ? hoverColor : 'inherit',
              }}>{label}</span>
            </button>
          );
        })}
      </nav>

      <div
        data-nav-lang
        onMouseEnter={() => setLangOpen(true)}
        onMouseLeave={() => setLangOpen(false)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: langOpen ? (scrolled ? '#F7F8FC' : 'rgba(255,255,255,0.10)') : 'transparent',
          border: `1px solid ${langOpen ? (scrolled ? '#E4E6EF' : 'rgba(255,255,255,0.18)') : 'transparent'}`,
          borderRadius: 9999, padding: '7px 12px 7px 10px',
          cursor: 'pointer', transition: 'background 0.2s ease, border-color 0.2s ease', position: 'relative',
        }}
      >
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none"
          stroke={langOpen ? '#1B4FBB' : (scrolled ? '#1B4FBB' : '#fff')}
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span style={{
          fontSize: 12, fontWeight: 700,
          color: langOpen ? '#1B4FBB' : (scrolled ? '#1B4FBB' : '#fff'),
          letterSpacing: '0.06em', fontFamily: "'DM Sans', sans-serif",
        }}>{lang}</span>
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none"
          stroke={scrolled ? '#6B7089' : 'rgba(255,255,255,0.7)'}
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: langOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.25s ease' }}>
          <path d="M6 9l6 6 6-6"/>
        </svg>

        <div style={{
          position: 'absolute', top: '100%', right: 0, marginTop: 8,
          background: '#fff', border: '1px solid #E4E6EF',
          borderRadius: 12, padding: 6, minWidth: 140,
          boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
          opacity: langOpen ? 1 : 0, pointerEvents: langOpen ? 'auto' : 'none',
          transform: langOpen ? 'translateY(0)' : 'translateY(-4px)',
          transition: 'all 0.2s ease', zIndex: 10,
        }}>
          {langs.map(l => {
            const active = lang === l.code;
            return (
              <div key={l.code} onClick={(e) => { e.stopPropagation(); onLang(l.code); }} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '8px 12px', borderRadius: 8,
                fontSize: 13, fontWeight: active ? 600 : 500,
                color: active ? '#1B4FBB' : '#383D58',
                cursor: 'pointer',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#F7F8FC'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>{l.name}</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7DB83A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: active ? 1 : 0 }}>
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── MOBILE: hamburger button (hidden on desktop via CSS) ─── */}
      <button
        data-nav-hamburger
        aria-label="Open menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(true)}
        style={{
          display: 'none',
          alignItems: 'center', justifyContent: 'center',
          width: 44, height: 44, borderRadius: 12,
          background: scrolled ? '#F7F8FC' : 'rgba(255,255,255,0.08)',
          border: `1px solid ${scrolled ? '#E4E6EF' : 'rgba(255,255,255,0.18)'}`,
          cursor: 'pointer', padding: 0,
          transition: 'all 0.2s ease',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke={scrolled ? '#1B4FBB' : '#fff'} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18M3 12h18M3 18h18"/>
        </svg>
      </button>

      {/* ─── MOBILE: full-screen menu panel ─── */}
      <div
        data-nav-mobile-panel
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(13,45,114,0.55)',
          backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
          display: 'none',
        }}
        onClick={() => setMobileOpen(false)}
      >
        <div
          onClick={e => e.stopPropagation()}
          style={{
            position: 'absolute', top: 0, right: 0, bottom: 0,
            width: 'min(360px, 88vw)',
            background: '#fff',
            display: 'flex', flexDirection: 'column',
            padding: '20px 22px 28px',
            transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s cubic-bezier(0.34,1.2,0.5,1)',
            boxShadow: '-12px 0 40px rgba(13,45,114,0.18)',
            overflowY: 'auto',
          }}
        >
          {/* Header row */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 28, paddingBottom: 18,
            borderBottom: '1px solid #E4E6EF',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src={logo} alt="" style={{
                width: 38, height: 38, borderRadius: '50%',
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 800, color: '#0D2D72' }}>Business Incubator</span>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 12, fontWeight: 700, color: '#7DB83A' }}>M'Sila</span>
              </div>
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              style={{
                width: 36, height: 36, borderRadius: 10,
                background: '#F7F8FC', border: '1px solid #E4E6EF',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', padding: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#383D58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navLinks.map(link => {
              const active = activeSection === link.key;
              return (
                <button
                  key={link.key}
                  onClick={() => { setMobileOpen(false); onNav(link.key); }}
                  style={{
                    textAlign: 'start',
                    padding: '14px 16px', borderRadius: 12,
                    background: active ? '#D6E4F7' : 'transparent',
                    border: 'none', cursor: 'pointer',
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 16, fontWeight: active ? 600 : 500,
                    color: active ? '#1B4FBB' : '#121420',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: 12,
                  }}
                >
                  <span>{link.label[lang]}</span>
                  {active && (
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%', background: '#1B4FBB',
                    }} />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Language switcher */}
          <div style={{ marginTop: 32 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, color: '#6B7089',
              textTransform: 'uppercase', letterSpacing: '0.08em',
              marginBottom: 12, paddingInlineStart: 4,
            }}>{ { EN: 'Language', FR: 'Langue', AR: 'اللغة' }[lang] }</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {langs.map(l => {
                const active = lang === l.code;
                return (
                  <button
                    key={l.code}
                    onClick={() => { onLang(l.code); }}
                    style={{
                      padding: '10px 8px', borderRadius: 10,
                      background: active ? '#1B4FBB' : '#F7F8FC',
                      border: `1px solid ${active ? '#1B4FBB' : '#E4E6EF'}`,
                      color: active ? '#fff' : '#383D58',
                      fontSize: 12, fontWeight: 600,
                      cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
                    }}
                  >{l.code}</button>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => { setMobileOpen(false); onNav('contact'); }}
            style={{
              marginTop: 'auto', marginInline: 0,
              padding: '14px 18px', height: 52,
              background: '#7DB83A', color: '#fff', border: 'none',
              borderRadius: 12, fontSize: 14, fontWeight: 600,
              cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
              boxShadow: '0 4px 16px rgba(125,184,58,0.30)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            }}
          >
            { { EN: 'Apply for Incubation', FR: "Candidater", AR: 'تقدّم للحضانة' }[lang] }
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
