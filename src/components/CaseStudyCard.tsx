/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '../types';
import { Sparkles, AlertCircle, CheckCircle, ArrowRight, Zap, RefreshCw, Layers } from 'lucide-react';
import Watch3D from './Watch3D';
import LuxyLogo from './LuxyLogo';

interface CaseStudyCardProps {
  project: CaseStudy;
  onOpenContact: () => void;
  isActive?: boolean;
  onSelect?: () => void;
}

export default function CaseStudyCard({
  project,
  onOpenContact,
  isActive = false,
  onSelect,
}: CaseStudyCardProps) {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');

  const activeContent = activeTab === 'before' ? project.before : project.after;

  // L-shaped border colors and styles
  const cornerGlowClass = isActive
    ? 'opacity-100 border-[#A855F7] drop-shadow-[0_0_8px_rgba(168,85,247,0.85)] scale-105'
    : 'opacity-0 lg:group-hover:opacity-100 border-[#A855F7]/60 lg:group-hover:scale-100 scale-95';

  // Custom shadows for active cards
  const shadowClass = isActive
    ? 'border-[#A855F7]/30 shadow-[0_0_40px_rgba(168,85,247,0.18)] -translate-y-2'
    : 'border-white/5 shadow-xl hover:border-[#A855F7]/20 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.06)]';

  return (
    <div
      onClick={onSelect}
      className={`group relative bg-[#0D0D12]/95 backdrop-blur-md rounded-3xl overflow-hidden transition-all duration-300 flex flex-col h-full cursor-pointer select-none border ${shadowClass}`}
    >
      {/* =======================================================
          FUTURISTIC L-SHAPE GLOW CORNERS (Apple-level Luxury Controls)
          ======================================================= */}
      {/* Top Left Corner */}
      <div
        className={`absolute top-0 left-0 w-5 h-5 border-t-[1.5px] border-l-[1.5px] pointer-events-none transition-all duration-300 z-30 ${cornerGlowClass}`}
      />
      {/* Top Right Corner */}
      <div
        className={`absolute top-0 right-0 w-5 h-5 border-t-[1.5px] border-r-[1.5px] pointer-events-none transition-all duration-300 z-30 ${cornerGlowClass}`}
      />
      {/* Bottom Left Corner */}
      <div
        className={`absolute bottom-0 left-0 w-5 h-5 border-b-[1.5px] border-l-[1.5px] pointer-events-none transition-all duration-300 z-30 ${cornerGlowClass}`}
      />
      {/* Bottom Right Corner */}
      <div
        className={`absolute bottom-0 right-0 w-5 h-5 border-b-[1.5px] border-r-[1.5px] pointer-events-none transition-all duration-300 z-30 ${cornerGlowClass}`}
      />

      {/* =======================================================
          LUXY LOGO SOUPCON WATERMARK (Very low opacity in corner)
          ======================================================= */}
      <div className="absolute top-4 right-4 pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 z-0">
        <LuxyLogo size="md" glow={false} interactive={false} />
      </div>

      {/* =======================================================
          1. FEATURED IMAGE / MOCKUP
          ======================================================= */}
      {project.imagePath && (
        <div className="relative w-full h-[190px] xs:h-[220px] md:h-[260px] overflow-hidden bg-black border-b border-white/5">
          <img
            src={project.imagePath}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
          />
          {/* Edge shadow gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D12]/40 via-transparent to-[#0D0D12]/40" />

          {/* Top banner labels */}
          <div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
            <span className="text-[9px] font-mono tracking-widest text-[#A855F7] uppercase px-2 py-0.5 bg-black/60 backdrop-blur-md rounded border border-[#A855F7]/30">
              {project.isConcept ? 'Concept Redesign' : 'Production Case'}
            </span>
            <span className="text-[9px] font-mono text-white/60 tracking-wider px-2 py-0.5 bg-black/40 backdrop-blur-md rounded border border-white/10 uppercase">
              {project.category}
            </span>
          </div>

          {/* Corner lights highlight indicator */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A855F7]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* =======================================================
          2. PROJECT DETAILS & HEADER
          ======================================================= */}
      <div className="p-6 pb-2 relative z-10 flex flex-col flex-grow">
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-serif font-light text-white tracking-tight leading-tight group-hover:text-[#D8B4FE] transition-colors mb-2">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-white/45 text-[11px] font-mono leading-relaxed mb-4 uppercase tracking-wider">
          {project.isConcept ? 'RE-ENGINEERED UX ARCHITECTURE CORE' : 'BESPOKE BRANDING EVOLUTION'}
        </p>

        {/* Embedded 3D Section (For watch brand / Three.js custom) */}
        {project.watchBrand3D && (
          <div className="mb-5 bg-black/20 p-2.5 rounded-2xl border border-white/5">
            <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest block mb-2 text-center">Interactive 3D Render Playground</span>
            <Watch3D />
          </div>
        )}

        {/* Tab switchers */}
        <div className="mb-5">
          <div className="grid grid-cols-2 p-1 bg-black/50 rounded-xl border border-white/5 select-none relative z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab('before');
              }}
              className={`flex items-center justify-center space-x-1.5 py-1.5 text-[9px] font-mono tracking-widest uppercase transition-all duration-200 rounded-lg cursor-pointer ${
                activeTab === 'before'
                  ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20 shadow-lg'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <AlertCircle className="w-3 h-3" />
              <span>Before (Old)</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab('after');
              }}
              className={`flex items-center justify-center space-x-1.5 py-1.5 text-[9px] font-mono tracking-widest uppercase transition-all duration-200 rounded-lg cursor-pointer ${
                activeTab === 'after'
                  ? 'bg-[#A855F7]/10 text-[#D8B4FE] border border-[#A855F7]/20 shadow-lg'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#A855F7] animate-pulse" />
              <span>After (Luxy)</span>
            </button>
          </div>
        </div>

        {/* Active Comparison Content Block */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`p-4 rounded-2xl border flex-grow flex flex-col justify-between mb-4 ${
              activeTab === 'before'
                ? 'bg-gradient-to-br from-rose-950/15 to-neutral-900/10 border-rose-950/20'
                : 'bg-gradient-to-br from-[#A855F7]/5 to-neutral-900/10 border-[#A855F7]/10'
            }`}
          >
            <div>
              {/* Compare status badge line */}
              <div className="flex items-center space-x-1.5 mb-2.5">
                {activeTab === 'before' ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-pulse" />
                )}
                <span className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${
                  activeTab === 'before' ? 'text-rose-400' : 'text-[#D8B4FE]'
                }`}>
                  {activeContent.title}
                </span>
              </div>

              {/* Compare Description */}
              <p className="text-gray-300 text-xs leading-relaxed mb-3 font-sans font-light">
                {activeContent.description}
              </p>

              {/* Compare Bullet metrics */}
              <div className="space-y-1.5">
                {activeContent.metrics.map((bullet, idx) => (
                  <div key={idx} className="flex items-start space-x-1.5 text-[10px] text-white/40 font-mono">
                    <span className={`text-sm leading-none ${activeTab === 'before' ? 'text-rose-500/60' : 'text-[#A855F7]/60'}`}>•</span>
                    <span className="leading-snug">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-status label */}
            <div className="flex justify-between items-center pt-3 mt-4 border-t border-white/5 text-[8.5px] font-mono">
              <span className="text-gray-600 uppercase tracking-widest">Diagnostic Status</span>
              {activeTab === 'before' ? (
                <span className="text-rose-400 font-semibold tracking-wider uppercase">Lacks Brand Authority</span>
              ) : (
                <span className="text-[#A855F7] font-semibold tracking-wider uppercase flex items-center space-x-1">
                  <Zap className="w-2.5 h-2.5" />
                  <span>Approved for High Capture</span>
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* =======================================================
            3. TECHNOLOGIES USED Badges
            ======================================================= */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-4">
            <span className="text-[8.5px] font-mono text-gray-500 uppercase tracking-widest block mb-2">INTEGRATION ENGINE STACK:</span>
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
            4. CONVERSION OUTCOMES FOOTER
            ======================================================= */}
        <div className="pt-4 mt-auto border-t border-white/5">
          <div className="flex items-center space-x-1 mb-2.5 text-[9px] font-mono text-[#A855F7]/80 tracking-widest uppercase font-semibold">
            <RefreshCw className="w-2.5 h-2.5 text-[#A855F7]" />
            <span>Redesigned Revenue Uplift Matrix</span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {project.outcomes.map((outcome, idx) => (
              <div key={idx} className="p-2.5 bg-black/40 rounded-xl border border-white/5 hover:border-[#A855F7]/10 transition-colors">
                <div className="text-lg font-serif font-light text-[#D8B4FE] tracking-tight">
                  {outcome.value}
                </div>
                <div className="text-[8.5px] font-mono text-gray-500 uppercase tracking-wide mt-0.5">
                  {outcome.label}
                </div>
              </div>
            ))}
          </div>

          {/* Action trigger button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenContact();
            }}
            className="w-full py-2.5 border border-white/5 hover:border-[#A855F7]/30 rounded-xl text-center text-[10px] text-gray-400 group-hover:text-white transition-all duration-300 font-mono tracking-widest uppercase flex items-center justify-center space-x-2 bg-black/20 hover:bg-[#A855F7]/5 active:scale-95 cursor-pointer"
          >
            <span>Audit My Asset</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
