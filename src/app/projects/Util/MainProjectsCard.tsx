// src/app/projects/Util/MainProjectsCard.tsx
import React from "react";
import Image from "next/image";
import { Project } from "./MainProjectsData";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  mainprojects: Project;
}

const MainProjectCard: React.FC<ProjectCardProps> = ({ mainprojects }) => {
  return (
    <article className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-zinc-800 flex flex-col h-full group">
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-800/80">
        <Image
          src={mainprojects.image}
          alt={`Preview of ${mainprojects.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors">
            {mainprojects.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {mainprojects.description}
          </p>

          {/* Tech Stack Tags */}
          {mainprojects.tags && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {mainprojects.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {mainprojects.link && (
          <div className="mt-5 pt-4 border-t border-zinc-800/80">
            <a
              href={mainprojects.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${mainprojects.title} project`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Explore Deployment</span>
              <FiExternalLink className="text-xs" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default MainProjectCard;
