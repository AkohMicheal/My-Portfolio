// src/components/projects/ProjectsCard.tsx
import React from "react";
import Image from "next/image";
import { Project } from "./ProjectsData";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-zinc-800 flex flex-col h-full group">
      {/* Image Preview Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-800/80">
        <Image
          src={project.image}
          alt={`Screenshot preview of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-700/60 text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
            {project.category}
          </span>

          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 backdrop-blur-md border border-emerald-500/30 text-[11px] font-mono text-emerald-300 font-bold">
            {project.metricHighlight}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-zinc-400 mt-1 mb-5">
            {project.subtitle}
          </p>

          {/* Structured Problem-Solution-Outcome Framework */}
          <div className="space-y-3.5 text-xs leading-relaxed">
            {/* The Problem */}
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
              <span className="font-mono text-[10px] text-zinc-400 uppercase font-bold tracking-wider block mb-1">
                Challenge &amp; Scope
              </span>
              <p className="text-zinc-300">{project.problem}</p>
            </div>

            {/* The Solution */}
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60">
              <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold tracking-wider block mb-1">
                Engineering Choice
              </span>
              <p className="text-zinc-300">{project.solution}</p>
            </div>

            {/* The Outcome */}
            <div className="p-3 rounded-xl bg-emerald-950/15 border border-emerald-500/20">
              <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold tracking-wider flex items-center gap-1 mb-1">
                <FiCheckCircle className="text-emerald-400 text-xs" />
                Verified Outcome
              </span>
              <p className="text-zinc-200 font-medium">{project.outcome}</p>
            </div>
          </div>
        </div>

        {/* Footer Area: Tags & Links */}
        <div className="mt-6 pt-5 border-t border-zinc-800/80">
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demonstration of ${project.title}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors"
              >
                <span>Live Demo</span>
                <FiExternalLink className="text-xs" />
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${project.title} on GitHub`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 text-xs font-medium transition-colors"
              >
                <FaGithub className="text-xs text-zinc-400" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
