import Project1 from "./../../../public/assets/project1.png";
import Project2 from "./../../../public/assets/project2.png";
import Project5 from "./../../../public/assets/project5.png";
import type { StaticImageData } from "next/image";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string | StaticImageData;
  link?: string;
  github?: string;
  isClientWork?: boolean;
}

export const projects: Project[] = [
  {
    title: "AkohGrid — Distributed Event-Driven Commerce Platform",
    tags: ["Turborepo", "Next.js 15", "Kafka", "Supabase", "Drizzle ORM", "TypeScript"],
    description: "High-throughput microservices commerce platform coordinated via Apache Kafka event bus. Built with Turborepo, Next.js 15, and dual Stripe/Paystack webhook verification with HMAC SHA512 buffer validation and idempotency locks.",
    image: Project1,
    link: "https://github.com/AkohMicheal/AkohGrid",
    github: "https://github.com/AkohMicheal/AkohGrid",
  },
  {
    title: "FMCG Festival — High-Concurrency Ticketing Platform",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Drizzle ORM", "Paystack", "Sanity"],
    description: "Production multi-tier event ticketing platform. Configured zero-budget edge routing via DNS CNAME automation, decoupled content delivery through Sanity headless CMS to achieve LCP < 1.1s, and secured idempotent Paystack payment processing.",
    image: Project5,
    link: "https://fmcg-festival.vercel.app/",
    isClientWork: true,
  },
  {
    title: "AkohFlow (FocusPaws) — Cross-Platform Productivity Engine",
    tags: ["React 19", "Capacitor 8", "Android", "Flask", "Supabase", "AdMob"],
    description: "Cross-platform gamified task companion compiled into native Android packages via Capacitor 8 with Google AdMob rewarded treats monetization, Python Flask REST API, and Supabase PostgreSQL persistence.",
    image: Project2,
    link: "https://focuspawakoh.vercel.app/",
    github: "https://github.com/AkohMicheal/AkohFlow",
  },


  {
    title: "Dual-Stream Deepfake Detection System",
    tags: ["TensorFlow", "FastAPI", "Next.js", "OpenCV", "DCT", "XAI"],
    description: "Dual-stream deep learning platform combining spatial CNNs with frequency-domain DCT spectrum analysis to detect manipulated media. Features real-time Grad-CAM explainable AI heatmaps and asynchronous frame inference.",
    image: Project1,
    link: "https://deepfake-scanner-web.vercel.app/",
    github: "https://github.com/AkohMicheal/Deepfake-Complete-WebApp-Project",
  },
];
