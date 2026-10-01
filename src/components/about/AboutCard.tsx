// src/components/about/AboutCard.tsx
import React from "react";
import { AboutItem } from "./AboutData";

interface AboutCardProps {
  item: AboutItem;
}

const AboutCard: React.FC<AboutCardProps> = ({ item }) => {
  return (
    <div className="glass-panel glass-panel-hover p-5 rounded-xl border border-zinc-800">
      <h3 className="text-lg font-bold text-zinc-100">{item.title}</h3>
      <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{item.description}</p>
    </div>
  );
};

export default AboutCard;
