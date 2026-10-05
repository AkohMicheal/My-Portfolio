// src/app/projects/Util/MainProjectsData.tsx
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

export const mainprojects: Project[] = [
  {
    title: "AkohGrid — Distributed Event-Driven Commerce Monorepo",
    description: "High-throughput microservices commerce platform coordinated via an Apache Kafka event bus. Built with Turborepo, Next.js 15, and dual Stripe/Paystack webhook verification with HMAC SHA512 buffer validation and idempotency locks.",
    tags: ["Turborepo", "Next.js 15", "Kafka", "Supabase", "Drizzle ORM", "TypeScript", "Docker"],
    image: "/assets/project1.png",
    link: "https://github.com/AkohMicheal/AkohGrid",
    github: "https://github.com/AkohMicheal/AkohGrid"
  },
  {
    title: "FMCG Festival — High-Concurrency Ticketing Platform",
    description: "Production multi-tier event registration and ticketing platform. Configured zero-budget edge routing via DNS CNAME automation, decoupled content delivery through Sanity headless CMS to achieve LCP < 1.1s, and secured idempotent Paystack payment processing.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Drizzle ORM", "Paystack", "Sanity CMS"],
    image: "/assets/project5.png",
    link: "https://fmcg-festival.vercel.app/",
    isClientWork: true
  },
  {
    title: "AkohFlow (FocusPaws) — Cross-Platform Productivity Engine",
    description: "Cross-platform gamified task companion for Android and Web. Compiles a single-codebase React 19 / Tailwind v4 app into native Android APKs via Capacitor 8 with Google AdMob rewarded treats monetization, Python Flask REST API, and Supabase PostgreSQL persistence.",
    tags: ["React 19", "Capacitor 8", "Android", "Flask", "Supabase", "AdMob", "Tailwind v4"],
    image: "/assets/project2.png",
    link: "https://focuspawakoh.vercel.app/",
    github: "https://github.com/AkohMicheal/AkohFlow"
  },


  {
    title: "Dual-Stream Deepfake Detection System",
    description: "End-to-end media forensics platform combining spatial CNNs with frequency-domain DCT spectrum analysis to detect manipulated media. Features real-time Grad-CAM explainable AI heatmaps and asynchronous frame inference.",
    tags: ["Python", "TensorFlow", "OpenCV", "FastAPI", "Next.js", "XAI"],
    image: "/assets/project6.png",
    link: "https://deepfake-scanner-web.vercel.app/",
    github: "https://github.com/AkohMicheal/Deepfake-Complete-WebApp-Project"
  },
  {
    title: "Aura Properties — Modern Real Estate SaaS",
    description: "High-performance property discovery and leasing platform built with Next.js 16, React 19, and Tailwind CSS v4. Features instantaneous URL query state synchronization, zero cumulative layout shift (CLS), and headless component ergonomics.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "@base-ui/react"],
    image: "/assets/project3.png",
    link: "https://aura-properties-saas.vercel.app",
    github: "https://github.com/AkohMicheal/aura-properties-saas"
  },
  {
    title: "GoVolo — Collaborative Workspace Platform",
    description: "Collaborative full-stack travel coordination and productivity app. Implemented immutable service layers and leveraged React Server Components (RSC) for initial static data hydration to eliminate hydration waterfalls.",
    tags: ["Next.js 16", "TypeScript", "React 19", "Tailwind CSS v4", "RSC"],
    image: "/assets/project4.png",
    link: "https://github.com/AkohMicheal/govolo",
    github: "https://github.com/AkohMicheal/govolo"
  },
  {
    title: "Akoh Inference API — Production ML Microservice",
    description: "Lightweight, containerized FastAPI microservice for serving supervised ML models with strict Pydantic v2 runtime validation. Serves clinical diagnostics and industrial predictive maintenance with dynamic binary loading.",
    tags: ["Python 3.11", "FastAPI", "Scikit-Learn", "Pydantic v2", "Docker", "Pandas"],
    image: "/assets/project7.png",
    link: "https://github.com/AkohMicheal/akoh-inference-api",
    github: "https://github.com/AkohMicheal/akoh-inference-api"
  },
  {
    title: "Akoh Chat SDK — Embeddable Support Intelligence",
    description: "Multi-domain customer support chatbot runtime and zero-dependency embeddable web widget with continuous learning feedback loops. Supports domain-specialized intents for e-commerce, SaaS, and general business.",
    tags: ["FastAPI", "Python", "Scikit-Learn", "Vanilla JS", "Docker"],
    image: "/assets/project8.png",
    link: "https://github.com/AkohMicheal/akoh-chat-sdk",
    github: "https://github.com/AkohMicheal/akoh-chat-sdk"
  }
];