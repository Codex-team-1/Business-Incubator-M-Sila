import React from 'react';
import type { Lang } from './types';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import { Footer } from './components/SharedCards';
import Hero from './sections/Hero';
import IntroSection from './sections/IntroSection';
import ServicesSection from './sections/ServicesSection';
import TeamSection from './sections/TeamSection';
import ProgramsSection from './sections/ProgramsSection';
import StartupsSection from './sections/StartupsSection';
import ContactSection from './sections/ContactSection';

const App: React.FC = () => {
  const [lang, setLang] = React.useState<Lang>('EN');
  const [activeSection, setActiveSection] = React.useState('top');

  // Smooth-scroll nav helper
  const onNav = React.useCallback((sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  // IntersectionObserver to highlight nav pill
  React.useEffect(() => {
    const sectionIds = ['intro', 'services', 'team', 'programs', 'startups', 'contact'];
    const els = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const obs = new IntersectionObserver((entries) => {
      // Pick the entry with the largest intersection ratio that is currently intersecting
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) {
        setActiveSection(visible[0].target.id);
      } else if (window.scrollY < 200) {
        setActiveSection('top');
      }
    }, {
      rootMargin: '-30% 0px -55% 0px',
      threshold: [0, 0.1, 0.3, 0.5],
    });
    els.forEach(el => obs.observe(el));

    const onScroll = () => {
      if (window.scrollY < 200) setActiveSection('top');
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleLang = (l: Lang) => {
    setLang(l);
    document.body.classList.toggle('rtl', l === 'AR');
    document.documentElement.setAttribute('dir', l === 'AR' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', l === 'AR' ? 'ar' : (l === 'FR' ? 'fr' : 'en'));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        activeSection={activeSection}
        onNav={onNav}
        lang={lang}
        onLang={handleLang}
      />
      <main style={{ flex: 1 }}>
        <Hero onNav={onNav} lang={lang} />
        <IntroSection lang={lang} />
        <ServicesSection lang={lang} />
        <TeamSection lang={lang} />
        <ProgramsSection lang={lang} onNav={onNav} />
        <StartupsSection lang={lang} onNav={onNav} />
        <ContactSection lang={lang} />
      </main>
      <Footer onNav={onNav} lang={lang} />
      <ScrollToTop lang={lang} />
    </div>
  );
};

export default App;
