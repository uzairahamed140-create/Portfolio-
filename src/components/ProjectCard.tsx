/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Code2 } from 'lucide-react';
import LuxyLogo from './LuxyLogo';

export interface DeveloperProject {
  id: string;
  title: string;
  category: string;
  description: string;
  imagePath: string;
  technologies: string[];
  projectUrl: string;
}

interface ProjectCardProps {
  project: DeveloperProject;
  isActive?: boolean;
  onSelect?: () => void;
}

export default function ProjectCard({
  project,
  isActive = false,
  onSelect,
}: ProjectCardProps) {

  // L-shaped border colors and styles
  const cornerGlowClass = isActive
    ? 'opacity-100 border-[#A855F7] drop-shadow-[0_0_12px_rgba(168,85,247,1)] scale-105'
    : 'opacity-0 lg:group-hover:opacity-100 border-[#A855F7]/60 lg:group-hover:scale-100 scale-95';

  // Custom shadows for active cards
  const shadowClass = isActive
    ? 'border-[#A855F7]/60 shadow-[0_0_35px_rgba(168,85,247,0.45)] -translate-y-2'
    : 'border-white/10 shadow-xl hover:border-[#A855F7]/40 hover:-translate-y-2 hover:shadow-[0_0_28px_rgba(168,85,247,0.22)]';

  return (
    <div
      onClick={onSelect}
      className={`group relative bg-[#0D0D12]/95 backdrop-blur-md rounded-3xl transition-all duration-300 flex flex-col h-full cursor-pointer select-none border ${shadowClass}`}
    >
      {/* =======================================================
          FUTURISTIC L-SHAPE GLOW CORNERS (Apple-level Luxury Controls)
          ======================================================= */}
      {/* Top Left Corner */}
      <div
        className={`absolute top-0 left-0 w-5 h-5 border-t-[2px] border-l-[2px] pointer-events-none transition-all duration-300 z-30 ${cornerGlowClass}`}
      />
      {/* Top Right Corner */}
      <div
        className={`absolute top-0 right-0 w-5 h-5 border-t-[2px] border-r-[2px] pointer-events-none transition-all duration-300 z-30 ${cornerGlowClass}`}
      />
      {/* Bottom Left Corner */}
      <div
        className={`absolute bottom-0 left-0 w-5 h-5 border-b-[2px] border-l-[2px] pointer-events-none transition-all duration-300 z-30 ${cornerGlowClass}`}
      />
      {/* Bottom Right Corner */}
      <div
        className={`absolute bottom-0 right-0 w-5 h-5 border-b-[2px] border-r-[2px] pointer-events-none transition-all duration-300 z-30 ${cornerGlowClass}`}
      />

      {/* =======================================================
          LUXY LOGO SOUPCON WATERMARK (Very low opacity in corner)
          ======================================================= */}
      <div className="absolute top-4 right-4 pointer-events-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 z-0">
        <LuxyLogo size="md" glow={false} interactive={false} />
      </div>

      {/* =======================================================
          1. FEATURED IMAGE / MOCKUP
          ======================================================= */}
      <div className="relative w-full h-[200px] xs:h-[230px] md:h-[250px] overflow-hidden bg-black border-b border-white/5">
        <img
          src={project.imagePath}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        {/* Edge shadow gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D12]/40 via-transparent to-[#0D0D12]/40" />

        {/* Top banner labels */}
        <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
          <span className="text-[9px] font-mono tracking-widest text-[#A855F7] uppercase px-2 py-0.5 bg-black/60 backdrop-blur-md rounded border border-[#A855F7]/30">
            Featured Interface
          </span>
          <span className="text-[9px] font-mono text-white/60 tracking-wider px-2 py-0.5 bg-black/40 backdrop-blur-md rounded border border-white/10 uppercase">
            {project.category}
          </span>
        </div>

        {/* Top border line glow hover highlight */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A855F7]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* =======================================================
          2. PROJECT DETAILS & HEADER
          ======================================================= */}
      <div className="p-6 relative z-10 flex flex-col flex-grow">
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-serif font-light text-white tracking-tight leading-tight group-hover:text-[#D8B4FE] transition-colors mb-2">
          {project.title}
        </h3>

        {/* Short tech classification */}
        <div className="flex items-center space-x-1 mb-4 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
          <Code2 className="w-3 h-3 text-[#A855F7]" />
          <span>Technical Architecture</span>
        </div>

        {/* Short Description */}
        <p className="text-gray-300 text-xs leading-relaxed font-sans font-light mb-6 flex-grow">
          {project.description}
        </p>

        {/* =======================================================
            3. TECHNOLOGIES USED Badges
            ======================================================= */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-6">
            <span className="text-[8.5px] font-mono text-gray-500 uppercase tracking-widest block mb-2 font-semibold">
              TECHNOLOGIES USED:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[9px] font-mono text-[#D8B4FE] bg-[#A855F7]/5 rounded border border-[#A855F7]/15 uppercase tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* =======================================================
            4. ACTION VIEW PROJECT BUTTON
            ======================================================= */}
        <div className="pt-4 border-t border-white/5">
          <motion.a
            href={project.projectUrl}
            target="_blank"
            className="w-full py-3 border border-[#A855F7]/30 rounded-xl text-center text-[10px] text-gray-200 hover:text-white font-mono tracking-widest uppercase flex items-center justify-center space-x-2 bg-black/40 shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all duration-300"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 0 25px rgba(168,85,247,0.75)",
              borderColor: "rgba(168,85,247,0.7)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#A855F7]" />
          </motion.a>
        </div>

      </div>
    </div>
  );
}
