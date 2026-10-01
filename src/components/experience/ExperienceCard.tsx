// src/components/experience/ExperienceCard.tsx
import React from "react";
import { ExperienceItem } from "./ExperienceData";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck } from "react-icons/fi";

interface ExperienceCardProps {
  experience: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <article className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-zinc-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-zinc-100">
            {experience.title}
          </h3>
          <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm mt-0.5">
            <FiBriefcase className="text-xs" />
            <span>{experience.company}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
            <FiCalendar className="text-emerald-400 text-[11px]" />
            {experience.date}
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
            <FiMapPin className="text-zinc-400 text-[11px]" />
            {experience.location}
          </span>
        </div>
      </div>

      <ul className="space-y-2.5 my-4 text-sm text-zinc-300">
        {experience.highlights.map((item, hIdx) => (
          <li key={hIdx} className="flex items-start gap-2.5 leading-relaxed">
            <FiCheck className="text-emerald-400 mt-1 shrink-0 text-sm" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-0.5 rounded-md bg-zinc-900/80 text-[11px] font-mono text-zinc-400 border border-zinc-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ExperienceCard;
