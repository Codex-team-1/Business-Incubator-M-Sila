import React from "react";
import type { Lang } from "../types";
import { SectionHeader } from "../components/SharedCards";
import { useReveal, useCountUp } from "../hooks/useReveal";

/* ─── ICON PATHS (Tabler-style outline) ─── */
const ICONS = {
  users:
    "M9 11a3 3 0 100-6 3 3 0 000 6zM3 20a6 6 0 0112 0M16 11a3 3 0 10-2-5.2M21 20a6 6 0 00-4.5-5.8",
  school:
    "M22 9L12 4 2 9l10 5 10-5zM6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5M22 9v5",
  rocket:
    "M5 13l4 4M4.5 16.5l-1.5 4 4-1.5M14.5 4.5c2.5-1 5 0 5 0s1 2.5 0 5C17 13 11 17 9 17l-2-2c0-2 4-8 7.5-10.5zM15 9a1 1 0 110-2 1 1 0 010 2z",
  certificate:
    "M9 12l2 2 4-4M12 3l2.4 1.7 2.9-.1 1 2.8 2.4 1.7-.9 2.8.9 2.8-2.4 1.7-1 2.8-2.9-.1L12 21l-2.4-1.7-2.9.1-1-2.8L3.3 15l.9-2.8L3.3 9.4l2.4-1.7 1-2.8 2.9.1L12 3z",
  tag:
    "M7 7h.01M3 11V5a2 2 0 012-2h6l9.5 9.5a2 2 0 010 2.8l-5.2 5.2a2 2 0 01-2.8 0L3 11z",
  award:
    "M12 15a6 6 0 100-12 6 6 0 000 12zM8.2 13.8L7 22l5-3 5 3-1.2-8.2",
};

type Accent = "blue" | "green" | "gold";

const ACCENT: Record<
  Accent,
  { main: string; light: string; dark: string }
> = {
  blue: { main: "#1B4FBB", light: "#E8EFFC", dark: "#0D2D72" },
  green: { main: "#7DB83A", light: "#EAF5DA", dark: "#5A8A22" },
  gold: { main: "#B8860B", light: "#FFF4E0", dark: "#8A6608" },
};

interface Program {
  id: string;
  accent: Accent;
  icon: string;
  title: Record<Lang, string>;
  tag: Record<Lang, string>;
  oneLine: Record<Lang, string>;
  stat: Record<Lang, string>;
  highlights: Record<Lang, string[]>;
  /** 8 training tracks (P02 only) */
  tracks?: Record<Lang, string[]>;
  /** How-it-works steps (all except P02) */
  steps?: Record<Lang, string[]>;
  chips: { n: string; l: Record<Lang, string> }[];
}

const ProgramsSection: React.FC<{
  lang: Lang;
  onNav: (id: string) => void;
}> = ({ lang, onNav }) => {
  const STARTUP_DZ_URL = "https://startup.dz/";
  const isRTL = lang === "AR";
  const [activeProgram, setActiveProgram] = React.useState<number | null>(null);
  const [hovered, setHovered] = React.useState<number | null>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);

  const t = {
    EN: {
      visitStartup: "Visit startup.dz",
      label: "Programs",
      title: "From Idea to Graduated Startup",
      sub: "Six structured programs guiding you through every stage of the incubation journey — from first idea to funded, registered startup.",
      highlights: "Key Highlights",
      howItWorks: "How It Works",
      tracks: "8 Training Tracks",
      program: "Program",
      ctaTitle: "Have an idea? Join 124+ incubated projects",
      ctaSub: "Students, researchers, and graduates from all faculties are welcome to apply.",
      ctaBtn: "Apply Now",
      stPatents: "Patents Filed",
      stStartups: "Startups Graduated",
      stLabeled: "Projects Labeled",
      stRes1275: "Res. 1275 Projects",
    },
    FR: {
      visitStartup: "Visitez startup.dz",
      label: "Programmes",
      title: "De l'Idée à la Startup Diplômée",
      sub: "Six programmes structurés vous guidant à chaque étape du parcours d'incubation — de la première idée à la startup financée et enregistrée.",
      highlights: "Points Clés",
      howItWorks: "Comment Ça Marche",
      tracks: "8 Filières de Formation",
      program: "Programme",
      ctaTitle: "Vous avez une idée ? Rejoignez 124+ projets incubés",
      ctaSub: "Étudiants, chercheurs et diplômés de toutes les facultés sont les bienvenus.",
      ctaBtn: "Postuler",
      stPatents: "Brevets Déposés",
      stStartups: "Startups Diplômées",
      stLabeled: "Projets Labellisés",
      stRes1275: "Projets Rés. 1275",
    },
    AR: {
      visitStartup: "تصفح startup.dz",
      label: "البرامج",
      title: "من الفكرة إلى الشركة الناشئة المتخرجة",
      sub: "ستة برامج منظمة توجهك في كل مرحلة من رحلة الحضانة — من الفكرة الأولى إلى شركة ناشئة ممولة ومسجلة.",
      highlights: "أبرز النقاط",
      howItWorks: "كيف يعمل",
      tracks: "8 مسارات تدريبية",
      program: "برنامج",
      ctaTitle: "لديك فكرة؟ انضم إلى أكثر من 124 مشروعاً محتضناً",
      ctaSub: "الطلاب والباحثون والخريجون من جميع الكليات مرحب بهم للتقدم.",
      ctaBtn: "تقدم الآن",
      stPatents: "براءات مودعة",
      stStartups: "شركات متخرجة",
      stLabeled: "مشاريع حاملة للعلامة",
      stRes1275: "مشاريع القرار 1275",
    },
  }[lang];

  const journeyLabels: Record<Lang, string[]> = {
    EN: ["Pre-Incubation", "Incubation", "Post-Launch", "Patents", "Label", "Res. 1275"],
    FR: ["Pré-Incubation", "Incubation", "Post-Lancement", "Brevets", "Label", "Rés. 1275"],
    AR: ["ما قبل الحضانة", "الحضانة", "ما بعد الإطلاق", "براءات", "العلامة", "القرار 1275"],
  };

  const PROGRAMS: Program[] = [
    {
      id: "01",
      accent: "blue",
      icon: ICONS.users,
      title: { EN: "Pre-Incubation", FR: "Pré-Incubation", AR: "ما قبل الحضانة" },
      tag: { EN: "Awareness & Discovery", FR: "Sensibilisation & Découverte", AR: "التوعية والاكتشاف" },
      oneLine: {
        EN: "Sensitization meetings and scientific seminars for students with innovative ideas — the entry point to the incubator ecosystem.",
        FR: "Réunions de sensibilisation et séminaires scientifiques pour les étudiants ayant des idées innovantes — la porte d'entrée de l'écosystème.",
        AR: "لقاءات توعوية وندوات علمية للطلاب أصحاب الأفكار المبتكرة — نقطة الدخول إلى منظومة الحاضنة.",
      },
      stat: { EN: "27 meetings · All 8 faculties", FR: "27 réunions · 8 facultés", AR: "27 لقاءً · 8 كليات" },
      highlights: {
        EN: [
          "27 scientific meetings and symposiums held (2019–June 2022)",
          "Open to all faculties and institutes",
          "No prior experience required",
          "Identifies pipeline candidates for the Incubation Program",
        ],
        FR: [
          "27 réunions et colloques scientifiques tenus (2019–juin 2022)",
          "Ouvert à toutes les facultés et instituts",
          "Aucune expérience préalable requise",
          "Identifie les candidats pour le Programme d'Incubation",
        ],
        AR: [
          "27 لقاءً وندوة علمية عُقدت (2019 – جوان 2022)",
          "مفتوح لجميع الكليات والمعاهد",
          "لا يتطلب خبرة مسبقة",
          "يحدد المرشحين لبرنامج الحضانة",
        ],
      },
      steps: {
        EN: ["Attend a sensitization meeting", "Prepare your innovative idea", "Network with mentors & peers", "Apply to the Incubation Program"],
        FR: ["Assister à une réunion de sensibilisation", "Préparer votre idée innovante", "Réseauter avec mentors & pairs", "Postuler au Programme d'Incubation"],
        AR: ["حضور لقاء توعوي", "تحضير فكرتك المبتكرة", "التواصل مع المرشدين والأقران", "التقدم لبرنامج الحضانة"],
      },
      chips: [
        { n: "27", l: { EN: "Meetings", FR: "Réunions", AR: "لقاءات" } },
        { n: "8", l: { EN: "Faculties", FR: "Facultés", AR: "كليات" } },
        { n: "2019", l: { EN: "Since", FR: "Depuis", AR: "منذ" } },
      ],
    },
    {
      id: "02",
      accent: "blue",
      icon: ICONS.school,
      title: { EN: "Incubation Program", FR: "Programme d'Incubation", AR: "برنامج الحضانة" },
      tag: { EN: "Core Training · 85+ Hrs/Year", FR: "Formation · 85+ Heures/An", AR: "تدريب أساسي · 85+ ساعة" },
      oneLine: {
        EN: "More than 85 hours of annual training across 8 official tracks, with one-on-one mentorship from professors and industry experts.",
        FR: "Plus de 85 heures de formation annuelle sur 8 filières officielles, avec un mentorat individuel de professeurs et d'experts.",
        AR: "أكثر من 85 ساعة تدريب سنوياً عبر 8 مسارات رسمية، مع إرشاد فردي من الأساتذة وخبراء الصناعة.",
      },
      stat: { EN: "85+ hrs/year · 8 tracks · 1-on-1", FR: "85+ h/an · 8 filières · 1:1", AR: "+85 ساعة · 8 مسارات · 1:1" },
      highlights: {
        EN: [
          "More than 85 hours of structured training every year",
          "8 official tracks covering technical & business skills",
          "One-on-one mentorship from professors and experts",
          "Practical, project-driven curriculum",
        ],
        FR: [
          "Plus de 85 heures de formation structurée chaque année",
          "8 filières officielles : compétences techniques & business",
          "Mentorat individuel de professeurs et d'experts",
          "Programme pratique axé sur les projets",
        ],
        AR: [
          "أكثر من 85 ساعة تدريب منظم كل عام",
          "8 مسارات رسمية تغطي المهارات التقنية والتجارية",
          "إرشاد فردي من الأساتذة والخبراء",
          "منهج عملي قائم على المشاريع",
        ],
      },
      tracks: {
        EN: [
          "Artificial Intelligence",
          "Biology & Life Sciences",
          "Digital Marketing",
          "Communication & Project Presentation",
          "Mines & Natural Resources",
          "BMC — Business Model Canvas",
          "Funding Mechanisms for Startups",
          "Legal, Administrative & Financial Affairs",
        ],
        FR: [
          "Intelligence Artificielle",
          "Biologie & Sciences du Vivant",
          "Marketing Digital",
          "Communication & Présentation de Projet",
          "Mines & Ressources Naturelles",
          "BMC — Business Model Canvas",
          "Mécanismes de Financement",
          "Affaires Juridiques, Administratives & Financières",
        ],
        AR: [
          "الذكاء الاصطناعي",
          "البيولوجيا وعلوم الحياة",
          "التسويق الرقمي",
          "التواصل وعرض المشاريع",
          "المناجم والموارد الطبيعية",
          "BMC — نموذج العمل التجاري",
          "آليات تمويل الشركات الناشئة",
          "الشؤون القانونية والإدارية والمالية",
        ],
      },
      chips: [
        { n: "85+", l: { EN: "Hours/Year", FR: "Heures/An", AR: "ساعة/سنة" } },
        { n: "8", l: { EN: "Tracks", FR: "Filières", AR: "مسارات" } },
        { n: "1:1", l: { EN: "Mentorship", FR: "Mentorat", AR: "إرشاد" } },
      ],
    },
    {
      id: "03",
      accent: "green",
      icon: ICONS.rocket,
      title: { EN: "Post-Incubation", FR: "Post-Incubation", AR: "ما بعد الحضانة" },
      tag: { EN: "Post-Launch Support", FR: "Soutien Post-Lancement", AR: "دعم ما بعد الإطلاق" },
      oneLine: {
        EN: "Field visits, financial and technical reviews, and ongoing advisory support for all startups that have graduated from the incubator.",
        FR: "Visites de terrain, examens financiers et techniques, et accompagnement continu pour toutes les startups diplômées de l'incubateur.",
        AR: "زيارات ميدانية ومراجعات مالية وتقنية ودعم استشاري مستمر لجميع الشركات الناشئة المتخرجة من الحاضنة.",
      },
      stat: { EN: "17 graduated · First 2020 · Peak 6 (2022)", FR: "17 diplômées · 1ère 2020 · Pic 6 (2022)", AR: "17 متخرجة · الأولى 2020 · الذروة 6 (2022)" },
      highlights: {
        EN: [
          "Regular field visits to graduated startup premises",
          "Financial and technical health examinations",
          "Expert guidance on operations and strategy",
          "Help navigating post-graduation administrative challenges",
        ],
        FR: [
          "Visites régulières des locaux des startups diplômées",
          "Examens de santé financière et technique",
          "Conseils d'experts sur les opérations et la stratégie",
          "Aide face aux défis administratifs post-diplomation",
        ],
        AR: [
          "زيارات ميدانية منتظمة لمقرات الشركات المتخرجة",
          "فحوصات الصحة المالية والتقنية",
          "توجيه الخبراء حول العمليات والاستراتيجية",
          "المساعدة في تجاوز التحديات الإدارية بعد التخرج",
        ],
      },
      steps: {
        EN: ["Schedule a field visit", "Review financials & tech", "Advise on operations & strategy", "Resolve administrative blockers"],
        FR: ["Planifier une visite de terrain", "Examiner finances & technique", "Conseiller opérations & stratégie", "Résoudre les blocages administratifs"],
        AR: ["جدولة زيارة ميدانية", "مراجعة المالية والتقنية", "تقديم المشورة في العمليات والاستراتيجية", "حل العوائق الإدارية"],
      },
      chips: [
        { n: "17", l: { EN: "Graduated", FR: "Diplômées", AR: "متخرجة" } },
        { n: "2020", l: { EN: "First", FR: "Première", AR: "الأولى" } },
        { n: "6", l: { EN: "In 2022", FR: "En 2022", AR: "في 2022" } },
      ],
    },
    {
      id: "04",
      accent: "blue",
      icon: ICONS.certificate,
      title: { EN: "Patent Program", FR: "Programme Brevets", AR: "برنامج براءات الاختراع" },
      tag: { EN: "IP Protection via INAPI", FR: "Protection PI via INAPI", AR: "حماية الملكية الفكرية" },
      oneLine: {
        EN: "Registers and protects innovations as industrial property patents in direct coordination with INAPI — Algeria's official IP institute.",
        FR: "Enregistre et protège les innovations comme brevets de propriété industrielle en coordination directe avec l'INAPI — l'institut algérien de la PI.",
        AR: "يسجل ويحمي الابتكارات كبراءات ملكية صناعية بالتنسيق المباشر مع INAPI — المعهد الجزائري الرسمي للملكية الفكرية.",
      },
      stat: { EN: "202 filed · 10 granted · Since 2019", FR: "202 déposés · 10 accordés · Depuis 2019", AR: "202 مودعة · 10 ممنوحة · منذ 2019" },
      highlights: {
        EN: [
          "202 patents filed since 2019 (10 fully granted)",
          "Covers all innovation types across all faculties",
          "Direct coordination with INAPI",
          "Growth: 2→13→29→65→93 patents per year (2019–2023)",
        ],
        FR: [
          "202 brevets déposés depuis 2019 (10 entièrement accordés)",
          "Couvre tous les types d'innovation, toutes facultés",
          "Coordination directe avec l'INAPI",
          "Croissance : 2→13→29→65→93 brevets/an (2019–2023)",
        ],
        AR: [
          "202 براءة مودعة منذ 2019 (10 ممنوحة بالكامل)",
          "يغطي جميع أنواع الابتكار عبر كل الكليات",
          "تنسيق مباشر مع INAPI",
          "النمو: 2→13→29→65→93 براءة سنوياً (2019–2023)",
        ],
      },
      steps: {
        EN: ["Submit idea", "Prior-art search", "Prepare documents", "File with INAPI", "Examination & review", "Patent granted"],
        FR: ["Soumettre l'idée", "Recherche d'antériorité", "Préparer les documents", "Dépôt auprès de l'INAPI", "Examen & révision", "Brevet accordé"],
        AR: ["تقديم الفكرة", "البحث عن السابقات", "تحضير الوثائق", "الإيداع لدى INAPI", "الفحص والمراجعة", "منح البراءة"],
      },
      chips: [
        { n: "202", l: { EN: "Filed", FR: "Déposés", AR: "مودعة" } },
        { n: "10", l: { EN: "Granted", FR: "Accordés", AR: "ممنوحة" } },
        { n: "2019", l: { EN: "Since", FR: "Depuis", AR: "منذ" } },
      ],
    },
    {
      id: "05",
      accent: "green",
      icon: ICONS.tag,
      title: { EN: "Label Tagging", FR: "Programme Label", AR: "برنامج العلامة" },
      tag: { EN: "startup.dz · ASF Financing", FR: "startup.dz · Financement ASF", AR: "startup.dz · تمويل ASF" },
      oneLine: {
        EN: "Guides projects through startup.dz to obtain the official Startup Label — unlocking access to ASF (Algeria Startup Fund) financing.",
        FR: "Guide les projets via startup.dz pour obtenir le Label Startup officiel — débloquant l'accès au financement ASF (Algeria Startup Fund).",
        AR: "يوجه المشاريع عبر startup.dz للحصول على العلامة الرسمية للشركات الناشئة — مما يفتح الوصول إلى تمويل ASF (صندوق دعم المؤسسات الناشئة).",
      },
      stat: { EN: "52 labeled · Oct 2021 · ASF access", FR: "52 labellisés · Oct 2021 · accès ASF", AR: "52 مشروعاً · أكتوبر 2021 · وصول ASF" },
      highlights: {
        EN: [
          "52 projects officially labeled (2021–2023)",
          "Launched October 2021 after the national label framework",
          "ASF = Algeria Startup Fund financing access",
          "Benefits: tax advantages and government support",
        ],
        FR: [
          "52 projets officiellement labellisés (2021–2023)",
          "Lancé en octobre 2021 après le cadre national du label",
          "ASF = accès au financement Algeria Startup Fund",
          "Avantages : fiscalité avantageuse et soutien public",
        ],
        AR: [
          "52 مشروعاً حاصلاً على العلامة رسمياً (2021–2023)",
          "أُطلق في أكتوبر 2021 بعد إطار العلامة الوطني",
          "ASF = الوصول إلى تمويل صندوق دعم المؤسسات الناشئة",
          "المزايا: امتيازات ضريبية ودعم حكومي",
        ],
      },
      steps: {
        EN: ["Register on startup.dz", "Build your dossier", "Committee endorsement", "Unlock ASF financing"],
        FR: ["S'inscrire sur startup.dz", "Constituer votre dossier", "Validation du comité", "Débloquer le financement ASF"],
        AR: ["التسجيل في startup.dz", "إعداد ملفك", "مصادقة اللجنة", "فتح تمويل ASF"],
      },
      chips: [
        { n: "52", l: { EN: "Labeled", FR: "Labellisés", AR: "حاملة للعلامة" } },
        { n: "2021", l: { EN: "Launched", FR: "Lancé", AR: "أُطلق" } },
        { n: "ASF", l: { EN: "Fund Access", FR: "Accès Fonds", AR: "وصول التمويل" } },
      ],
    },
    {
      id: "06",
      accent: "gold",
      icon: ICONS.award,
      title: { EN: "Resolution 1275", FR: "Résolution 1275", AR: "القرار 1275" },
      tag: { EN: "National First · Now Nationwide", FR: "Première Nationale · Adoptée Nationalement", AR: "الأولى وطنياً · معتمدة وطنياً" },
      oneLine: {
        EN: "Transforms graduation projects (Licence, Master, PhD) into registered startups — M'Sila was first nationally, now adopted across all Algerian universities.",
        FR: "Transforme les projets de fin d'études (Licence, Master, Doctorat) en startups enregistrées — M'Sila fut la première nationale, désormais adoptée par toutes les universités algériennes.",
        AR: "يحول مشاريع التخرج (ليسانس، ماستر، دكتوراه) إلى شركات ناشئة مسجلة — كانت المسيلة الأولى وطنياً، والآن معتمدة في جميع الجامعات الجزائرية.",
      },
      stat: { EN: "287 projects · 548 students · 8 faculties", FR: "287 projets · 548 étudiants · 8 facultés", AR: "287 مشروعاً · 548 طالباً · 8 كليات" },
      highlights: {
        EN: [
          "First university in Algeria to launch this (2021–2022)",
          "Formally adopted by the Ministry nationwide (2022–2023)",
          "287 projects · 548 students · 151 discussed · 264 defended",
          "Technology faculty leads: 109 projects / 222 students",
        ],
        FR: [
          "Première université d'Algérie à le lancer (2021–2022)",
          "Adopté formellement par le Ministère à l'échelle nationale (2022–2023)",
          "287 projets · 548 étudiants · 151 discutés · 264 soutenus",
          "Faculté de technologie en tête : 109 projets / 222 étudiants",
        ],
        AR: [
          "أول جامعة في الجزائر تطلق هذا (2021–2022)",
          "اعتُمد رسمياً من الوزارة على المستوى الوطني (2022–2023)",
          "287 مشروعاً · 548 طالباً · 151 نوقشت · 264 دافعت",
          "كلية التكنولوجيا في الصدارة: 109 مشاريع / 222 طالباً",
        ],
      },
      steps: {
        EN: ["Register graduation project", "Train & develop", "Build the startup", "Defend before jury", "Launch as registered startup"],
        FR: ["Enregistrer le projet de fin d'études", "Former & développer", "Construire la startup", "Soutenir devant le jury", "Lancer comme startup enregistrée"],
        AR: ["تسجيل مشروع التخرج", "التدريب والتطوير", "بناء الشركة الناشئة", "المناقشة أمام اللجنة", "الإطلاق كشركة ناشئة مسجلة"],
      },
      chips: [
        { n: "287", l: { EN: "Projects", FR: "Projets", AR: "مشروعاً" } },
        { n: "548", l: { EN: "Students", FR: "Étudiants", AR: "طالباً" } },
        { n: "8", l: { EN: "Faculties", FR: "Facultés", AR: "كليات" } },
      ],
    },
  ];

  const [pulseTarget, setPulseTarget] = React.useState<number | null>(null);
  const cardRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const selectProgram = (i: number) => {
    setActiveProgram((prev) => (prev === i ? null : i));
    setPulseTarget(i);
    requestAnimationFrame(() => {
      cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

  React.useEffect(() => {
    if (pulseTarget === null) return;
    const id = window.setTimeout(() => setPulseTarget(null), 1200);
    return () => window.clearTimeout(id);
  }, [pulseTarget]);

  // Smooth-scroll the panel into view after it expands
  React.useEffect(() => {
    if (activeProgram === null) return;
    const id = requestAnimationFrame(() => {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    return () => cancelAnimationFrame(id);
  }, [activeProgram]);

  const active = activeProgram !== null ? PROGRAMS[activeProgram] : null;
  const activeAccent = active ? ACCENT[active.accent] : ACCENT.blue;

  return (
    <section
      id="programs"
      data-screen-label="Programs"
      style={{
        padding: "6rem 2rem",
        background: "#F7F8FC",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* LAYER 1 — Section header */}
        <SectionHeader label={t.label} title={t.title} subtitle={t.sub} />

        {/* LAYER 2 — Journey progress strip */}
        <div
          data-journey-strip
          style={{
            display: "flex",
            flexDirection: isRTL ? "row-reverse" : "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            background: "#fff",
            border: "1px solid #E6E8F0",
            borderRadius: 20,
            padding: "20px 24px",
            margin: "0 0 2.5rem",
          }}
        >
          {PROGRAMS.map((p, i) => {
            const a = ACCENT[p.accent];
            const on = activeProgram === i;
            return (
              <React.Fragment key={p.id}>
                <button
                  onClick={() => selectProgram(i)}
                  aria-pressed={on}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    flex: "0 0 auto",
                    minWidth: 64,
                    padding: 0,
                  }}
                >
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: on ? a.main : "#fff",
                      border: `2px solid ${on ? a.main : "#E6E8F0"}`,
                      transition: "all 0.3s",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={on ? "#fff" : "#6B7089"}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={p.icon} />
                    </svg>
                  </span>
                  <span
                    className="num"
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: isRTL ? 0 : "0.02em",
                      color: on ? a.dark : "#6B7089",
                      textAlign: "center",
                      lineHeight: 1.3,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {journeyLabels[lang][i]}
                  </span>
                </button>
                {i < PROGRAMS.length - 1 && (
                  <span
                    data-journey-connector
                    style={{
                      flex: "1 1 auto",
                      height: 2,
                      marginTop: 19,
                      minWidth: 16,
                      background:
                        activeProgram !== null && activeProgram > i
                          ? ACCENT[PROGRAMS[i].accent].main
                          : "#E6E8F0",
                      transition: "background 0.3s",
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* LAYER 3 — Program cards grid */}
        <div
          data-programs-grid
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {PROGRAMS.map((p, i) => {
            const a = ACCENT[p.accent];
            const on = activeProgram === i;
            const hover = hovered === i;
            return (
              <button
                key={p.id}
                ref={(el) => { cardRefs.current[i] = el; }}
                data-pulse={pulseTarget === i ? "true" : undefined}
                data-pulse-accent={p.accent}
                onClick={() => selectProgram(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                aria-pressed={on}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: isRTL ? "right" : "left",
                  alignItems: "stretch",
                  background: "#fff",
                  border: `1px solid ${on ? a.main : "#E6E8F0"}`,
                  borderRadius: 20,
                  padding: "1.75rem 1.5rem 1.5rem",
                  cursor: "pointer",
                  overflow: "hidden",
                  transform: hover && !on ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: on
                    ? `0 18px 40px ${a.main}26`
                    : hover
                      ? "0 14px 30px rgba(13,45,114,0.12)"
                      : "0 1px 3px rgba(13,45,114,0.05)",
                  transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                  font: "inherit",
                  color: "inherit",
                }}
              >
                {/* top accent bar */}
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: a.main,
                    transform: hover || on ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: isRTL ? "right" : "left",
                    transition: "transform 0.3s",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <span
                    className="num"
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: isRTL ? 0 : "0.06em",
                      textTransform: "uppercase",
                      color: "#6B7089",
                    }}
                  >
                    {t.program} {p.id}
                  </span>
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: a.light,
                      flex: "0 0 auto",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={a.dark}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={p.icon} />
                    </svg>
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.06rem",
                    color: "#121420",
                    margin: "0 0 8px",
                    lineHeight: 1.3,
                  }}
                >
                  {p.title[lang]}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "#6B7089",
                    margin: "0 0 16px",
                  }}
                >
                  {p.oneLine[lang]}
                </p>
                <span
                  style={{
                    alignSelf: "flex-start",
                    fontSize: 11,
                    fontWeight: 700,
                    color: a.dark,
                    background: a.light,
                    borderRadius: 999,
                    padding: "5px 12px",
                    marginBottom: 12,
                  }}
                >
                  {p.tag[lang]}
                </span>
                <span
                  className="num"
                  style={{
                    fontSize: 12,
                    color: "#383D58",
                    fontWeight: 600,
                    marginTop: "auto",
                  }}
                >
                  {p.stat[lang]}
                </span>
              </button>
            );
          })}
        </div>

        {/* LAYER 4 — Expandable detail panel */}
        <div
          ref={panelRef}
          style={{
            maxHeight: active ? 900 : 0,
            opacity: active ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.35s ease, opacity 0.35s ease, margin 0.35s ease",
            marginTop: active ? "1.5rem" : 0,
          }}
        >
          {active && (
            <div
              style={{
                background: "#fff",
                border: `1px solid ${activeAccent.main}33`,
                borderRadius: 20,
                padding: "2rem",
              }}
            >
              <div
                data-program-panel
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2rem",
                  marginBottom: "1.5rem",
                }}
              >
                {/* LEFT — Key Highlights */}
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: isRTL ? 0 : "0.06em",
                      textTransform: "uppercase",
                      color: "#6B7089",
                      marginBottom: 14,
                    }}
                  >
                    {t.highlights}
                  </div>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 12 }}>
                    {active.highlights[lang].map((h, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: 10,
                          fontSize: 13,
                          lineHeight: 1.6,
                          color: "#383D58",
                        }}
                      >
                        <span
                          style={{
                            flex: "0 0 auto",
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: activeAccent.main,
                            marginTop: 7,
                          }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT — Tracks (P02) or How It Works */}
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: isRTL ? 0 : "0.06em",
                      textTransform: "uppercase",
                      color: "#6B7089",
                      marginBottom: 14,
                    }}
                  >
                    {active.tracks ? t.tracks : t.howItWorks}
                  </div>
                  {active.tracks ? (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {active.tracks[lang].map((tr, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: activeAccent.dark,
                            background: activeAccent.light,
                            borderRadius: 999,
                            padding: "6px 12px",
                          }}
                        >
                          {tr}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 }}>
                      {active.steps?.[lang].map((s, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: 12,
                            alignItems: "center",
                            fontSize: 13,
                            color: "#383D58",
                          }}
                        >
                          <span
                            className="num"
                            style={{
                              flex: "0 0 auto",
                              width: 24,
                              height: 24,
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 11,
                              fontWeight: 700,
                              color: activeAccent.dark,
                              background: activeAccent.light,
                            }}
                          >
                            {i + 1}
                          </span>
                          <span>
                            {s.includes("startup.dz") ? (
                              <a
                                href={STARTUP_DZ_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: activeAccent.dark, fontWeight: 700, textDecoration: "underline" }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                {s}
                              </a>
                            ) : (
                              s
                            )}
                          </span>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </div>

              {/* Stat chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {active.chips.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      flex: "1 1 140px",
                      background: "#F7F8FC",
                      borderRadius: 12,
                      padding: "14px 16px",
                    }}
                  >
                    <div
                      className="num"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: 20,
                        color: activeAccent.main,
                        lineHeight: 1,
                      }}
                    >
                      {c.n}
                    </div>
                    <div style={{ fontSize: 11, color: "#6B7089", marginTop: 5 }}>
                      {c.l[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* LAYER 5 — Bottom stats strip */}
        <StatsStrip lang={lang} isRTL={isRTL} t={t} />

        {/* LAYER 6 — Apply CTA strip */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            background: "#F7F8FC",
            border: "1px solid #E6E8F0",
            borderRadius: 20,
            padding: "2.5rem",
            marginTop: "1.5rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#121420",
                marginBottom: 6,
              }}
            >
              {t.ctaTitle}
            </div>
            <div style={{ fontSize: 14, color: "#6B7089", maxWidth: 460, lineHeight: 1.6 }}>
              {t.ctaSub}
            </div>
          </div>
          <button
            onClick={() => onNav("contact")}
            style={{
              flex: "0 0 auto",
              background: "#7DB83A",
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: "14px 28px",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(125,184,58,0.3)",
            }}
          >
            {t.ctaBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

/* ─── LAYER 5 — animated counters, gated on scroll-into-view ─── */
const StatsStrip: React.FC<{
  lang: Lang;
  isRTL: boolean;
  t: { stPatents: string; stStartups: string; stLabeled: string; stRes1275: string };
}> = ({ isRTL, t }) => {
  const { ref, shown } = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const stats = [
    { target: 202, suffix: "+", label: t.stPatents },
    { target: 17, suffix: "", label: t.stStartups },
    { target: 52, suffix: "", label: t.stLabeled },
    { target: 287, suffix: "", label: t.stRes1275 },
  ];
  return (
    <div
      ref={ref}
      data-stats-strip
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        background: "#0D2D72",
        borderRadius: 20,
        padding: "3rem 2rem",
        marginTop: "1.5rem",
      }}
    >
      {stats.map((s, i) => (
        <StatCell key={i} {...s} active={shown} isRTL={isRTL} first={i === 0} />
      ))}
    </div>
  );
};

const StatCell: React.FC<{
  target: number;
  suffix: string;
  label: string;
  active: boolean;
  isRTL: boolean;
  first: boolean;
}> = ({ target, suffix, label, active, isRTL, first }) => {
  const value = useCountUp(target, active, 1500);
  return (
    <div
      style={{
        textAlign: "center",
        padding: "0 1rem",
        ...(first
          ? {}
          : isRTL
            ? { borderRight: "1px solid rgba(255,255,255,0.08)" }
            : { borderLeft: "1px solid rgba(255,255,255,0.08)" }),
      }}
    >
      <div
        className="num"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "3rem",
          color: "#fff",
          lineHeight: 1,
        }}
      >
        {value}
        {suffix && <span style={{ color: "#7DB83A" }}>{suffix}</span>}
      </div>
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 10 }}>
        {label}
      </div>
    </div>
  );
};

export default ProgramsSection;
