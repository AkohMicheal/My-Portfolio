// src/components/experience/ExperienceData.tsx

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  roleType: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer Intern",
    company: "Lampnet Solution Technologies",
    location: "Hybrid / Nigeria",
    date: "June 2025 – August 2026",
    roleType: "Enterprise Client Engineering",
    highlights: [
      "Engineered high-performance, multi-language enterprise web applications utilizing React and Next.js, elevating global accessibility standards.",
      "Translated complex Figma design systems into reusable, pixel-accurate HTML5/CSS3/Tailwind components ahead of sprint deadlines.",
      "Optimized frontend bundle sizes and web asset pipelines, enabling near-instant asynchronous content updates across 3+ concurrent client projects.",
      "Maintained strict software quality through Git-based code reviews, mobile-first responsiveness, and structured QA checklists."
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap 5", "Figma", "REST APIs", "Git"]
  },
  {
    title: "DevOps & Infrastructure Intern",
    company: "Bincom Dev Center",
    location: "Nigeria",
    date: "May 2025",
    roleType: "Cloud & Systems",
    highlights: [
      "Provisioned and managed scalable AWS cloud environments including EC2 compute instances and RDS databases for robust application uptime.",
      "Configured and hardened LAMP stack servers aligned with modern security benchmarks and DevOps best practices.",
      "Streamlined CI/CD deployment workflows, significantly reducing manual server intervention and deployment overhead."
    ],
    technologies: ["AWS EC2", "AWS RDS", "Linux/LAMP", "Docker", "DevOps", "CI/CD", "Bash"]
  },
  {
    title: "Full-Stack Software Developer",
    company: "AkohTech Labs / Freelance",
    location: "Remote",
    date: "2024 – Present",
    roleType: "Full Lifecycle Delivery",
    highlights: [
      "Architected dynamic client portals, e-commerce applications, and interactive learning systems from the ground up using Node.js and MongoDB.",
      "Integrated custom third-party payment gateways (Paystack), headless Sanity CMS APIs, and WebSocket services.",
      "Resolved cross-browser compatibility and responsive performance issues across mobile and desktop viewports for global users."
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "PostgreSQL", "Sanity CMS", "Socket.io", "Paystack"]
  },
];
