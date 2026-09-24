export interface ExperienceItem {
  title: string;
  company: string;
  date?: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer Intern",
    company: "Lampnet Solution Technologies",
    date: "June 2025 - August 2026",
    description:
      "Enhanced cross-regional accessibility across multi-language enterprise sites using React and Next.js. Accelerated development by translating complex Figma layouts into pixel-accurate, reusable components ahead of sprint deadlines. Optimized frontend performance with strict image/asset optimization, achieving near-instant async content updates across 3+ concurrent client projects.",
  },
  {
    title: "Infrastructure / System Engineer Intern",
    company: "Bincom Dev Center",
    date: "May 2025",
    description:
      "Provisioned and managed scalable AWS cloud environments (EC2, RDS) ensuring robust application uptime. Streamlined CI pipelines and reduced manual deployment overhead by configuring LAMP stack servers aligned with modern DevOps best practices.",
  },
  {
    title: "Full-Stack Web Developer",
    company: "AkohTech Labs / Freelance",
    date: "2024 - Present",
    description:
      "Delivered dynamic client portals, e-commerce platforms, and interactive learning systems using Node.js, MongoDB, and custom REST APIs. Expanded client digital capabilities by customizing WordPress/Shopify solutions. Resolved critical cross-browser compatibility issues across Chrome, Firefox, Safari, and mobile viewports.",
  },
];
