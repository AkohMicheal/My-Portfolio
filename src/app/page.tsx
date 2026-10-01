// src/app/page.tsx
import dynamic from 'next/dynamic';
import Navbar from "@/components/navigationbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import Footer from "@/components/footer/Footer";

// Clean skeleton fallback to eliminate CLS
const SectionSkeleton = () => (
  <div className="py-20 max-w-6xl mx-auto">
    <div className="h-6 w-32 bg-zinc-800/60 rounded-md animate-pulse mb-4" />
    <div className="h-10 w-72 bg-zinc-800/40 rounded-md animate-pulse mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="h-64 bg-zinc-900/50 rounded-2xl border border-zinc-800/60 animate-pulse" />
      <div className="h-64 bg-zinc-900/50 rounded-2xl border border-zinc-800/60 animate-pulse" />
      <div className="h-64 bg-zinc-900/50 rounded-2xl border border-zinc-800/60 animate-pulse" />
    </div>
  </div>
);

// Below-the-fold components dynamically chunked with SSR enabled for maximum SEO
const AboutSection = dynamic(
  () => import('@/components/about/AboutSection'),
  {
    loading: () => <SectionSkeleton />,
    ssr: true
  }
);

const SkillsSection = dynamic(
  () => import('@/components/skills/SkillsSection'),
  {
    loading: () => <SectionSkeleton />,
    ssr: true
  }
);

const ExperienceSection = dynamic(
  () => import('@/components/experience/ExperienceSection'),
  {
    loading: () => <SectionSkeleton />,
    ssr: true
  }
);

const ProjectsSection = dynamic(
  () => import('@/components/projects/ProjectsSection'),
  {
    loading: () => <SectionSkeleton />,
    ssr: true
  }
);

const ContactSection = dynamic(
  () => import('@/components/contact/ContactSection'),
  {
    loading: () => <SectionSkeleton />,
    ssr: true
  }
);

export default function ProfilePage() {
  return (
    <div className="tech-grid-bg ambient-glow min-h-screen text-zinc-100 selection:bg-emerald-500/25 selection:text-emerald-300 relative">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
