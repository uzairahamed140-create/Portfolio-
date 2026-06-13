/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface LuxyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  mode?: 'iconOnly' | 'full';
  glow?: boolean;
  pulse?: boolean;
  tiltEffect?: boolean;
  interactive?: boolean;
}

export default function LuxyLogo({
  className = '',
  size = 'md',
  mode = 'iconOnly',
  glow = true,
  pulse = false,
  tiltEffect = false,
  interactive = true,
}: LuxyLogoProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Size map for modular scaling
  const sizeMap = {
    sm: { width: 'w-10 h-10', text: 'text-[11px]', subtext: 'text-[7px]' },
    md: { width: 'w-16 h-16', text: 'text-[14px]', subtext: 'text-[9px]' },
    lg: { width: 'w-32 h-32', text: 'text-[20px]', subtext: 'text-[10px]' },
    xl: { width: 'w-56 h-56', text: 'text-[28px]', subtext: 'text-[11px]' },
  };

  const selectedSize = sizeMap[size];

  // Subtle 3D tilt effect on mouse movement inside the container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Normalize and scale tilts (max 15 degrees)
    setRotateY((x / (rect.width / 2)) * 15);
    setRotateX(-(y / (rect.height / 2)) * 15);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  // Pre-configured glowing gradients
  const glowStyle = glow && isHovered
    ? 'drop-shadow-[0_0_15px_rgba(168,85,247,0.85)] filter'
    : glow
    ? 'drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] filter'
    : '';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`flex flex-col items-center justify-center transition-all duration-300 select-none ${className}`}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovered && interactive ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
        className={`relative flex items-center justify-center ${selectedSize.width} ${pulse ? 'animate-pulse' : ''} ${glowStyle}`}
      >
        {/* Dynamic circular glowing rings behind vector */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-[#A855F7]/10 via-[#A855F7]/5 to-[#8B5CF6]/10 opacity-60 blur-md transition-opacity duration-500 ${isHovered ? 'opacity-100 blur-lg' : ''}`} />

        {/* Vector SVG Monogram (IL in circle with a clean diagonal slash and styling) */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-white relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definitions for gorgeous premium gradients */}
          <defs>
            <linearGradient id="silver-metal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#E2E8F0" />
              <stop offset="70%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            <linearGradient id="purple-flare" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#D8B4FE" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Glowing background ring */}
          <circle
            cx="100"
            cy="100"
            r="82"
            stroke="url(#purple-flare)"
            strokeWidth="3"
            strokeDasharray="450 60"
            className="transition-all duration-700"
            style={{
              transformOrigin: 'center',
              transform: isHovered ? 'rotate(30deg)' : 'rotate(0deg)',
              transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
              opacity: 0.8,
            }}
          />

          {/* Outer Ring with specialized gaps */}
          <circle
            cx="100"
            cy="100"
            r="82"
            stroke="url(#silver-metal)"
            strokeWidth="2.5"
            strokeDasharray="180 80 120 70"
            style={{
              transformOrigin: 'center',
              transform: isHovered ? 'rotate(-45deg)' : 'rotate(0deg)',
              transition: 'transform 1s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          />

          {/* MONOGRAM IN THE CENTER: IL */}
          {/* I Glyph (Luxurious serif column) */}
          <path
            d="M58 55 H86 V63 H80 V127 H86 V135 H58 V127 H64 V63 H58 V55 Z"
            fill="url(#silver-metal)"
            className="transition-transform duration-500"
          />

          {/* L Glyph (Stylized merging tail) */}
          <path
            d="M102 65 H124 V73 H116 V115 C116 123 121 127 132 127 C138 127 143 124 146 119 L152 124 C147 131 138 135 128 135 C110 135 102 124 102 112 V73 H94 V65 H102 Z"
            fill="url(#purple-flare)"
            className="transition-all duration-500"
          />

          {/* GORGEOUS DIAGONAL SLASH (Stylized sliced monogram aura) */}
          <line
            x1="35"
            y1="165"
            x2="165"
            y2="35"
            stroke="url(#purple-flare)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#glow-filter)"
          />
          
          <line
            x1="35"
            y1="165"
            x2="165"
            y2="35"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* FULL MODE EXTRA GRAPHICS (Matches the exact branding of uploaded logo) */}
      {mode === 'full' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 flex flex-col items-center text-center text-white font-mono"
        >
          {/* Monogram name branding */}
          <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase mt-1">
            iTz_me_luxy
          </h2>

          {/* Divider line with specific sub icons */}
          <div className="flex items-center space-x-4 my-2.5 w-full max-w-[280px]">
            <div className="h-[0.5px] flex-grow bg-white/10" />
            <div className="flex items-center space-x-3 text-[#A855F7]">
              {/* Code Symbol */}
              <span className="text-[11px] font-bold tracking-tight">&lt;/&gt;</span>
              <span className="text-gray-600">|</span>
              {/* Play symbol */}
              <span className="text-[12px] font-light">▷</span>
              <span className="text-gray-600">|</span>
              {/* Video icon clapper placeholder */}
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
              </svg>
            </div>
            <div className="h-[0.5px] flex-grow bg-white/10" />
          </div>

          {/* Lower motto */}
          <span className="text-[8px] md:text-[9.5px] tracking-[0.35em] text-[#B5B5C3]/80 uppercase font-medium">
            CREATE <span className="text-[#A855F7]">•</span> EDIT <span className="text-[#A855F7]">•</span> DEVELOP
          </span>
        </motion.div>
      )}
    </div>
  );
}
