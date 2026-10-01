// src/app/projects/page.tsx
import React, { Suspense } from "react";
import { mainprojects } from "./Util/MainProjectsData";
import MainProjectCard from "./Util/MainProjectsCard";
import Navbar from "@/components/navigationbar/Navbar";
import Footer from "@/components/footer/Footer";
import Loading from "./loading";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const dynamic = 'force-dynamic';

export default function ProjectsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="tech-grid-bg ambient-glow min-h-screen text-zinc-100 selection:bg-emerald-500/25 selection:text-emerald-300 relative">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          {/* Header */}
          <div className="mb-10 text-left">
            <Link 
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors mb-4"
            >
              <FiArrowLeft className="text-sm" />
              <span>Back to Home</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 mb-3 block w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              COMPLETE WORK CATALOG
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Project Archive &amp; Systems
            </h1>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              An extended index of production platforms, client portals, and technical architectures delivered by Micheal Akoh.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainprojects.map((project, idx) => (
              <MainProjectCard key={idx} mainprojects={project} />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </Suspense>
  );
}
