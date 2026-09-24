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
}

export const projects: Project[] = [
  {
    title: "Dual-Stream Deepfake Detection System",
    tags: ["Next.js", "FastAPI", "TensorFlow", "OpenCV", "Python", "XAI"],
    description: "Problem: Digital fraud through AI-generated deepfakes threatened media authenticity with no accessible verification tools. Solution: Engineered a dual-stream deep learning system — spatial CNN + frequency-domain DCT analysis — with a Next.js frontend, FastAPI backend, and XAI Grad-CAM diagnostics. Outcome: Delivered transparent, real-time media verification with explainable AI confidence scoring.",
    image: Project1,
    link: "https://deepfake-scanner-web.vercel.app/",
  },
  {
    title: "LIT Learning Management System",
    tags: ["Node.js", "MongoDB", "Express", "Socket.io", "Docker", "React"],
    description: "Problem: A tech institute needed a scalable platform to manage hybrid online/offline training for hundreds of students. Solution: Architected a comprehensive LMS with real-time socket communication, Docker-containerized deployment, and a custom student administration workflow. Outcome: Enabled seamless course delivery across online and physical classrooms, supporting concurrent enrollment and real-time progress tracking.",
    image: Project5,
    link: "https://institute.lampnets.com/",
  },
  {
    title: "Cloud-Native E-Commerce Infrastructure",
    tags: ["AWS EC2", "RDS", "PrestaShop", "LAMP Stack", "DevOps", "CI/CD"],
    description: "Problem: A retail business needed resilient, production-grade infrastructure to handle e-commerce operations at scale. Solution: Independently deployed a fully functional PrestaShop environment on AWS, configuring EC2 for compute, RDS for managed databases, and LAMP stack servers with CI/CD pipelines. Outcome: Delivered a secure, auto-scaling cloud architecture that reduced deployment overhead and ensured 99.9% uptime.",
    image: Project2,
    link: "Coming Soon",
  },
];
