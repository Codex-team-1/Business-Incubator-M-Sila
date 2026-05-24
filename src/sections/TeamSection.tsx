import React from 'react';
import type { Lang } from '../types';
import { SectionHeader } from '../components/SharedCards';
import brickYousef from '../assets/team/brick-youcef.jpg';
import soumiaFodili from '../assets/team/soumia-fodili.jpg';
import djenaouiAbdellatif from '../assets/team/Djenaoui-abdellatif.jpg';

interface Member {
  name: string;
  role: { EN: string; FR: string; AR: string };
  photo: string | null;
  accent: 'blue' | 'green';
}

/* ─── SLIDE CARD ─── */
const SlideCard: React.FC<{ member: Member; lang: Lang }> = ({ member, lang }) => {
  const [hovered, setHovered] = React.useState(false);
  const role = member.role[lang];
  const isBlue = member.accent === 'blue';
  const accentColor = isBlue ? '#1B4FBB' : '#7DB83A';
  const accentDark = isBlue ? '#0D2D72' : '#5A8A22';
  const accentGradient = isBlue
    ? 'linear-gradient(150deg, #0D2D72 0%, #2762D8 100%)'
    : 'linear-gradient(150deg, #5A8A22 0%, #7DB83A 100%)';

  const initials = member.name
    .split(' ').filter(Boolean).slice(0, 2)
    .map(s => s[0]).join('').toUpperCase();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: '0 0 auto',
        width: 272,
        borderRadius: 22,
        overflow: 'hidden',
        background: '#fff',
        border: `1px solid ${hovered ? accentColor + '44' : '#E8EAF2'}`,
        boxShadow: hovered
          ? `0 22px 56px ${accentColor}26, 0 6px 18px rgba(0,0,0,0.06)`
          : '0 2px 14px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.25s ease',
      }}
    >
      {/* Photo */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4 / 5',
        background: member.photo ? '#F7F8FC' : accentGradient,
        overflow: 'hidden',
      }}>
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            draggable={false}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 15%',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
            }}
          />
        ) : (
          <>
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Syne', sans-serif", fontSize: 64, fontWeight: 800,
              color: 'rgba(255,255,255,0.95)', letterSpacing: '0.04em',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
            }}>{initials}</div>
            <div aria-hidden="true" style={{
              position: 'absolute', top: '-22%', right: '-22%',
              width: '60%', aspectRatio: '1', borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
            }} />
          </>
        )}

        {/* Bottom legibility gradient */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,14,31,0.7) 0%, rgba(10,14,31,0) 55%)',
          opacity: member.photo ? 1 : 0,
          pointerEvents: 'none',
        }} />

        {/* Role badge */}
        <div style={{
          position: 'absolute', top: 12, insetInlineEnd: 12,
          padding: '5px 12px', borderRadius: 100,
          background: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.28)',
          fontSize: 10, fontWeight: 700, color: '#fff',
          textTransform: 'uppercase', letterSpacing: '0.08em',
          fontFamily: "'DM Sans', sans-serif",
          opacity: hovered ? 1 : 0.78,
          transition: 'opacity 0.3s ease',
        }}>{role}</div>

        {/* Accent bottom bar */}
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: 0, insetInlineStart: 0,
          width: hovered ? '100%' : '38%', height: 3,
          background: `linear-gradient(90deg, ${accentColor}, ${accentDark})`,
          transition: 'width 0.5s cubic-bezier(0.22,1,0.36,1)',
        }} />
      </div>

      {/* Name plate */}
      <div style={{
        padding: '18px 20px 20px',
        display: 'flex', flexDirection: 'column', gap: 8,
        direction: lang === 'AR' ? 'rtl' : 'ltr',
      }}>
        <div style={{
          fontFamily: "'Syne', sans-serif", fontSize: '1.05rem',
          fontWeight: 700, color: '#121420',
          lineHeight: 1.25, letterSpacing: '-0.01em',
        }}>{member.name}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: hovered ? 28 : 16, height: 2.5, borderRadius: 2,
            background: `linear-gradient(90deg, ${accentColor}, ${accentDark})`,
            transition: 'width 0.4s cubic-bezier(0.34,1.4,0.5,1)',
            flexShrink: 0,
          }} />
          <div style={{
            fontSize: '0.8rem', fontWeight: 600, color: accentDark,
            fontFamily: "'DM Sans', sans-serif", opacity: 0.82,
          }}>{role}</div>
        </div>
      </div>
    </div>
  );
};

/* ─── TEAM SECTION (infinite auto-run marquee) ─── */
const TeamSection: React.FC<{ lang: Lang }> = ({ lang }) => {
  const isRTL = lang === 'AR';
  const t = {
    EN: { label: 'The Team', title: 'Meet the team behind\nthe incubator.', sub: "Dedicated professionals guiding M'Sila's founders every step of the way." },
    FR: { label: "L'équipe", title: "L'équipe derrière\nl'incubateur.", sub: "Des professionnels dévoués qui accompagnent les fondateurs de M'Sila à chaque étape." },
    AR: { label: 'الفريق', title: 'تعرّف على الفريق\nخلف الحاضنة.', sub: 'محترفون متفانون يرافقون مؤسسي مسيلة في كل خطوة.' },
  }[lang];

  const members: Member[] = [
    { name: 'Brick Yousef', role: { EN: 'Director', FR: 'Directeur', AR: 'المدير' }, photo: brickYousef, accent: 'blue' },
    { name: 'Soumia Fodili', role: { EN: 'Program Coordinator', FR: 'Coordinatrice', AR: 'منسقة البرامج' }, photo: soumiaFodili, accent: 'green' },
    { name: 'Djenaoui Abdellatif', role: { EN: 'Innovation Advisor', FR: 'Conseiller Innovation', AR: 'مستشار الابتكار' }, photo: djenaouiAbdellatif, accent: 'blue' },
    { name: 'Ammara Amine', role: { EN: 'Startup Mentor', FR: 'Mentor Startup', AR: 'مرشد الشركات' }, photo: null, accent: 'green' },
    { name: 'Djemai Mohamed', role: { EN: 'Business Development', FR: 'Dév. Commercial', AR: 'تطوير الأعمال' }, photo: null, accent: 'blue' },
    { name: 'Amich Samira', role: { EN: 'Administrative Manager', FR: 'Resp. Admin.', AR: 'المدير الإداري' }, photo: null, accent: 'green' },
    { name: 'Wadeh Fewaz', role: { EN: 'Tech & Innovation Lead', FR: 'Resp. Tech', AR: 'قائد التكنولوجيا' }, photo: null, accent: 'blue' },
    { name: 'Salem Ilyas', role: { EN: 'Community Manager', FR: 'Community Manager', AR: 'مدير المجتمع' }, photo: null, accent: 'green' },
  ];

  // Duplicate the set once so translateX(-50%) loops seamlessly.
  const loop = [...members, ...members];

  return (
    <section id="team" data-screen-label="Team" style={{
      padding: '7rem 0', overflow: 'hidden',
      background: 'linear-gradient(180deg, #F7F8FC 0%, #fff 100%)',
      direction: isRTL ? 'rtl' : 'ltr',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <SectionHeader label={t.label} title={t.title} subtitle={t.sub} center />
      </div>

      {/* Marquee — full bleed with edge fades */}
      <div
        data-team-marquee
        style={{
          position: 'relative',
          width: '100%',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)',
          padding: '1.5rem 0',
        }}
      >
        <div
          data-team-marquee-track
          data-rtl={isRTL ? 'true' : 'false'}
          style={{
            display: 'flex',
            gap: 24,
            width: 'max-content',
            padding: '0 12px',
            direction: 'ltr', // keep loop math consistent; RTL handled via keyframe
            // duration scales with the number of cards for a steady pace
            ['--marquee-duration' as string]: `${members.length * 6}s`,
          }}
        >
          {loop.map((m, i) => (
            <SlideCard key={i} member={m} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
