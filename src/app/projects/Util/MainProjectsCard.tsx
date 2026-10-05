// src/app/projects/Util/MainProjectsCard.tsx
import React from "react";
import Image from "next/image";
import { Project } from "./MainProjectsData";

interface ProjectCardProps {
  mainprojects: Project;
}

const MainProjectCard: React.FC<ProjectCardProps> = ({ mainprojects }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col h-full">
      <div className="relative w-full h-48 bg-gray-200">
        <Image
          src={mainprojects.image}
          alt={mainprojects.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-gray-900">{mainprojects.title}</h3>
          {mainprojects.isClientWork && (
            <span className="shrink-0 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Client Case Study
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">
          {mainprojects.description}
        </p>

        {/* Tech Stack Tags */}
        {mainprojects.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {mainprojects.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-gray-600 bg-gray-200 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            {mainprojects.link && (
              <a
                href={mainprojects.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-green-600 hover:text-green-700 inline-flex items-center gap-1"
              >
                {mainprojects.isClientWork ? "Live Platform" : "Live Demo"} ↗
              </a>
            )}
            {mainprojects.github && (
              <a
                href={mainprojects.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-600 hover:text-gray-900 inline-flex items-center gap-1"
              >
                Source Code ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProjectCard;
