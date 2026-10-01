// src/components/projects/ProjectsData.tsx
import Project1 from "./../../../public/assets/project1.png";
import Project2 from "./../../../public/assets/project2.png";
import Project5 from "./../../../public/assets/project5.png";
import type { StaticImageData } from "next/image";

export interface Project {
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  solution: string;
  outcome: string;
  metricHighlight: string;
  tags: string[];
  image: StaticImageData;
  liveLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    title: "Dual-Stream Deepfake Detection Framework",
    subtitle: "AI Video Integrity & Explainable Forensic Verification",
    category: "B.Tech Thesis · Applied AI & Computer Vision",
    problem: "Rapid spread of generative AI deepfakes and manipulated video media posed serious threats to digital fraud prevention without accessible, real-time forensic verification tools.",
    solution: "Architected a hybrid dual-stream deep learning pipeline fusing spatial facial feature extraction (MTCNN + CNN) with frequency-domain Discrete Cosine Transform (DCT) analysis. Built with a Next.js 15 frontend, FastAPI backend, and Explainable AI (Grad-CAM) diagnostics.",
    outcome: "Delivered transparent, real-time media verification with visual saliency heatmaps, achieving 98.4% benchmark confidence and sub-second inference.",
    metricHighlight: "98.4% Detection Accuracy",
    tags: ["Next.js 15", "FastAPI", "TensorFlow", "OpenCV", "Python", "XAI Grad-CAM", "MTCNN"],
    image: Project1,
    liveLink: "https://deepfake-scanner-web.vercel.app/",
    githubLink: "https://github.com/MichealAkoh",
  },
  {
    title: "LIT Enterprise Learning Management System",
    subtitle: "Scalable Hybrid E-Learning & Administration Architecture",
    category: "Production SaaS · Lampnet Institute",
    problem: "The institute required a centralized, low-latency platform to coordinate course delivery, student cohorts, dynamic registration workflows, and progress tracking across concurrent online and offline programs.",
    solution: "Engineered a full-stack LMS utilizing Node.js, Express, MongoDB, and Socket.io for real-time state synchronization. Dockerized the service architecture for scalable, reproducible deployments.",
    outcome: "Enabled simultaneous management of 500+ student enrollments, instant progress telemetry, and zero-downtime course delivery across multi-track cohorts.",
    metricHighlight: "500+ Concurrent Students",
    tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Docker", "REST APIs"],
    image: Project5,
    liveLink: "https://institute.lampnets.com/",
    githubLink: "https://github.com/MichealAkoh",
  },
  {
    title: "Cloud-Native E-Commerce Infrastructure",
    subtitle: "High-Availability Retail Deployment on AWS",
    category: "Cloud Architecture & DevOps · AWS",
    problem: "A growing commercial retail business faced potential downtime and database bottlenecks during traffic surges on unmanaged single-server hosting.",
    solution: "Designed and independently provisioned a resilient AWS infrastructure separating web compute (EC2 cluster) from managed relational databases (RDS MySQL/PostgreSQL). Hardened Linux LAMP stack with automated CI/CD deployment pipelines.",
    outcome: "Achieved 99.9% uptime SLA, automated database snapshots, and eliminated manual deployment overhead with zero performance regressions.",
    metricHighlight: "99.9% Production Uptime",
    tags: ["AWS EC2", "AWS RDS", "PrestaShop", "Linux/LAMP", "Docker", "CI/CD", "DevOps"],
    image: Project2,
    githubLink: "https://github.com/MichealAkoh",
  },
];
