import React from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────────────────────────────────────────────────────────
   useReveal — fade-up a container (and stagger its children) the
   first time it scrolls into view. Returns a ref + a `shown` flag.
   Children opt in by adding the `data-reveal-child` attribute; the
   CSS in index.css handles the staggered transition.
───────────────────────────────────────────────────────────────── */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  opts: { threshold?: number; rootMargin?: string; once?: boolean } = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = opts;
  const ref = React.useRef<T>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) { setShown(true); return; }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, shown };
}

/* ─────────────────────────────────────────────────────────────────
   useCountUp — animate a number from 0 → target when `active` flips
   true. Returns the current display value. Honors reduced-motion by
   jumping straight to the target.
───────────────────────────────────────────────────────────────── */
export function useCountUp(target: number, active: boolean, durationMs = 1400) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!active) return;
    if (prefersReducedMotion()) { setValue(target); return; }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, durationMs]);

  return value;
}
