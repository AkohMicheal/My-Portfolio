// src/components/skills/SkillsIcons.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";

interface SkillsIconsProps {
  icons: (string | StaticImageData)[];
}

const SkillsIcons: React.FC<SkillsIconsProps> = ({ icons }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {icons.map((icon, idx) => (
        <div
          key={idx}
          className="flex items-center justify-center p-3 rounded-lg bg-zinc-900 border border-zinc-800 shadow-sm"
        >
          <Image src={icon} alt="Skill icon" className="h-10 object-contain" />
        </div>
      ))}
    </div>
  );
};

export default SkillsIcons;
