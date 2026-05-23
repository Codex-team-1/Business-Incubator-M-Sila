import React from 'react';
import type { Lang } from '../types';

/* ─── SCROLL-TO-TOP BUTTON ─── */
const ScrollToTop: React.FC<{ lang: Lang }> = ({ lang }) => {
  const [visible, setVisible] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const label = { EN: 'Back to top', FR: 'Haut de page', AR: 'العودة للأعلى' }[lang];

  return (
    <button
      aria-label={label}
      title={label}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: 28,
        insetInlineEnd: 28,
        zIndex: 150,
        width: 52, height: 52, borderRadius: '50%',
        border: 'none', cursor: 'pointer', padding: 0,
        background: 'linear-gradient(135deg, #1B4FBB 0%, #2762D8 100%)',
        color: '#fff',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: hovered
          ? '0 12px 32px rgba(27,79,187,0.45)'
          : '0 6px 20px rgba(13,45,114,0.30)',
        opacity: visible ? 1 : 0,
        transform: visible
          ? `translateY(0) scale(${hovered ? 1.08 : 1})`
          : 'translateY(16px) scale(0.85)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease',
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        style={{
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        }}>
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
