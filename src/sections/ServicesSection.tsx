import type { Lang } from '../types';
import { SectionHeader, ServiceCard } from '../components/SharedCards';
import mentorshipImage from "../assets/services/mentorship (2).jpg";
import fundingImage from "../assets/services/funding-access.jpg";
import legalImage from "../assets/services/legal-ap-support.jpg";
import trainingImage from "../assets/services/structed-training.jpg";
import inapiImage from "../assets/services/inapi.jpg";
import workingSpaceImage from "../assets/services/working-space.png";

/* ─── ICON PATHS (Tabler-style outline) ─── */
const ICONS = {
  mentorship: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",
  funding: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  legal: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  cowork: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2zM9 22V12h6v10",
  patent: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  training: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z",
};

/* ─── SERVICES SECTION ─── */
const ServicesSection: React.FC<{ lang: Lang }> = ({ lang }) => {
  const isRTL = lang === 'AR';
  const t = {
    EN: {
      label: 'Our Services',
      title: 'Everything your startup needs to grow.',
      sub: "From legal support to co-working space, we cover every stage of the startup journey — built around the real needs of Algerian student founders.",
    },
    FR: {
      label: 'Nos Services',
      title: 'Tout ce dont votre startup a besoin pour grandir.',
      sub: "Du support juridique à l'espace de travail, nous accompagnons chaque étape — conçu autour des vrais besoins des fondateurs étudiants algériens.",
    },
    AR: {
      label: 'خدماتنا',
      title: 'كل ما تحتاجه شركتك الناشئة للنمو.',
      sub: 'من الدعم القانوني إلى مساحة العمل، نغطي كل مرحلة من مراحل رحلة الشركة الناشئة — مصممة حول الاحتياجات الحقيقية للمؤسسين الطلاب الجزائريين.',
    },
  }[lang];

  const services: {
    icon: string; accent: 'blue' | 'green'; image: string;
    tag: Record<Lang, string>; title: Record<Lang, string>; desc: Record<Lang, string>;
  }[] = [
    {
      icon: ICONS.mentorship, accent: 'blue',
      image: mentorshipImage,
      tag: { EN: '1:1', FR: '1:1', AR: '1:1' },
      title: { EN: 'Mentorship & Coaching', FR: 'Mentorat & Coaching', AR: 'الإرشاد والتوجيه' },
      desc: { EN: 'Expert guidance from industry leaders and university faculty to shape your startup vision.', FR: 'Accompagnement expert par des industriels et enseignants pour définir votre vision.', AR: 'توجيه متخصص من قادة الصناعة وأساتذة الجامعة لتشكيل رؤية شركتك.' },
    },
    {
      icon: ICONS.funding, accent: 'green',
      image: fundingImage,
      tag: { EN: 'ANSEJ · CNAC', FR: 'ANSEJ · CNAC', AR: 'ANSEJ · CNAC' },
      title: { EN: 'Funding Access', FR: 'Accès au financement', AR: 'الوصول للتمويل' },
      desc: { EN: 'Connections to ANSEJ, CNAC, and private investors actively seeking Algerian startups.', FR: 'Mise en relation avec ANSEJ, CNAC et investisseurs privés actifs.', AR: 'ربط مع ANSEJ وCNAC والمستثمرين الخاصين الباحثين عن شركات ناشئة جزائرية.' },
    },
    {
      icon: ICONS.legal, accent: 'blue',
      image: legalImage,
      tag: { EN: 'Legal', FR: 'Juridique', AR: 'قانوني' },
      title: { EN: 'Legal & IP Support', FR: 'Support juridique & PI', AR: 'الدعم القانوني والملكية' },
      desc: { EN: 'Trademark registration, patent filing, and legal framework guidance at every stage.', FR: 'Enregistrement de marques, dépôt de brevets et cadre juridique startup.', AR: 'تسجيل العلامات التجارية وبراءات الاختراع والإطار القانوني.' },
    },
    {
      icon: ICONS.cowork, accent: 'green',
      image: workingSpaceImage,
      tag: { EN: 'On-Campus', FR: 'Sur Campus', AR: 'في الحرم' },
      title: { EN: 'Co-working Space', FR: 'Espace co-working', AR: 'فضاء العمل المشترك' },
      desc: { EN: 'Dedicated workspace on campus with high-speed internet, meeting rooms, and equipment.', FR: 'Espace dédié sur campus avec internet haut débit, salles de réunion et équipements.', AR: 'مساحة عمل مخصصة في الحرم الجامعي مع إنترنت عالي السرعة وغرف اجتماعات.' },
    },
    {
      icon: ICONS.patent, accent: 'blue',
      image: inapiImage,
      tag: { EN: 'INAPI', FR: 'INAPI', AR: 'INAPI' },
      title: { EN: 'Patent Filing (INAPI)', FR: 'Dépôt de brevets (INAPI)', AR: 'تسجيل براءات الاختراع' },
      desc: { EN: 'End-to-end support for INAPI patent applications — protecting innovation from day one.', FR: 'Accompagnement complet pour les dépôts INAPI — protéger votre innovation dès le début.', AR: 'دعم شامل لطلبات براءات INAPI — حماية ابتكارك من اليوم الأول.' },
    },
    {
      icon: ICONS.training, accent: 'green',
      image: trainingImage,
      tag: { EN: '85+ hrs / yr', FR: '85+ h / an', AR: '+85 ساعة' },
      title: { EN: 'Structured Training', FR: 'Formation structurée', AR: 'التكوين المنظم' },
      desc: { EN: '85+ hours annually covering AI, fundraising, business modeling, legal affairs & communication.', FR: '85+ heures annuelles : IA, levée de fonds, modèle économique, droit, communication.', AR: '+85 ساعة سنوياً تغطي الذكاء الاصطناعي والتمويل ونمذجة الأعمال والقانون.' },
    },
  ];

  return (
    <section id="services" data-screen-label="Services" style={{
      padding: '6rem 2rem', background: '#F7F8FC',
      direction: isRTL ? 'rtl' : 'ltr',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader label={t.label} title={t.title} subtitle={t.sub} center />
        <div data-services-grid style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              icon={s.icon}
              accent={s.accent}
              image={s.image}
              tag={s.tag[lang]}
              title={s.title[lang]}
              desc={s.desc[lang]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
