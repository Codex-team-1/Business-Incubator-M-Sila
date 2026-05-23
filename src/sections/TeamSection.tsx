import type { Lang } from '../types';
import { SectionHeader, TeamCard } from '../components/SharedCards';
import brickYousef from '../assets/team/brick-youcef.jpg';
import soumiaFodili from "../assets/team/soumia-fodili.jpg";
import djenaouiAbdellatif from "../assets/team/djenaoui-abdellatif.jpg";

/* ─── TEAM SECTION ─── */
const TeamSection: React.FC<{ lang: Lang }> = ({ lang }) => {
  const isRTL = lang === 'AR';
  const t = {
    EN: { label: 'The Team', title: 'Meet the team behind\nthe incubator.', sub: 'The Team guiding M\'Sila\'s founders day to day.' },
    FR: { label: "L'équipe", title: "L'équipe derrière\nl'incubateur.", sub: "Les personnes qui accompagnent les fondateurs de M'Sila au quotidien." },
    AR: { label: 'الفريق', title: 'تعرّف على الفريق\nخلف الحاضنة.', sub: 'الأشخاص الذين يرافقون حاملي المشاريع يوماً بعد يوم.' },
  }[lang];

  // their photos come in. Accents alternate blue / green for visual rhythm.
  const members: { name: string; photo: string | null; accent: 'blue' | 'green' }[] = [
    { name: 'Brick Yousef',        photo: brickYousef,                     accent: 'blue'  },
    { name: 'Soumia Fodili',       photo: soumiaFodili,                    accent: 'green' },
    { name: 'Ammara Amine',        photo: null,                            accent: 'blue'  },
    { name: 'Djemai Mohamed',      photo: null,                            accent: 'green' },
    { name: 'Amich Samira',        photo: null,                            accent: 'blue'  },
    { name: 'Wadeh Fewaz',         photo: null,                            accent: 'green' },
    { name: 'Djenaoui Abdellatif', photo: djenaouiAbdellatif,              accent: 'blue'  },
    { name: 'Salem Ilyas',         photo: null,                            accent: 'green' },
  ];

  return (
    <section id="team" data-screen-label="Team" style={{
      padding: '6rem 2rem', background: '#fff',
      direction: isRTL ? 'rtl' : 'ltr',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader label={t.label} title={t.title} subtitle={t.sub} center />
        <div data-team-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {members.map((m, i) => (
            <TeamCard
              key={i}
              name={m.name}
              photo={m.photo}
              accent={m.accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
