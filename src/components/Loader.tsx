/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LuxyLogo from './LuxyLogo';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('01 / INTRO');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Speeds up at the end, standard easing vibe
        const diff = Math.random() * 18 + 7;
        const next = Math.min(prev + diff, 100);
        return parseFloat(next.toFixed(0));
      });
    }, 110);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress < 40) {
      setStage('01 / CORE INITIALIZATION');
    } else if (progress < 80) {
      setStage('02 / IMMERSIVE INTERFACE');
    } else {
      setStage('03 / LAUNCH PROTOCOLS');
    }

    if (progress === 100) {
      const wait = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(wait);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="luxury-loader"
        className="fixed inset-0 z-50 flex flex-col justify-between bg-[#050507] p-8 md:p-16 select-none"
        initial={{ opacity: 1 }}
        exit={{ 
          y: '-100%', 
          transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
        }}
      >
        {/* Header brand accent */}
        <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-[#A855F7]/60 uppercase">
          <div>LUXY portfolio v2.0</div>
          <div>{stage}</div>
        </div>

        {/* Center Logo / Statement */}
        <div className="my-auto flex flex-col md:flex-row items-center md:items-start gap-8 max-w-2xl mx-auto">
          {/* Pulsing, glowing custom Luxy logo */}
          <div className="shrink-0">
            <LuxyLogo size="lg" mode="full" pulse={true} interactive={false} glow={true} />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center h-full pt-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[10px] font-mono tracking-widest text-[#A855F7] mb-2 uppercase font-semibold"
            >
              Creative Engineering Studio
            </motion.div>
            <h1 className="text-3xl md:text-5xl font-light tracking-tighter text-white mb-3">
              LUXY STANDARDS
            </h1>
            <p className="text-xs md:text-sm text-gray-400 font-serif italic tracking-wide leading-relaxed max-w-md">
              Converting generic template pages into high-performance, memorable digital interactions with Apple-level detail.
            </p>
          </div>
        </div>

        {/* Bottom Progress Tracker */}
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-end font-mono">
            <span className="text-[10px] tracking-wider text-white/30 uppercase">Interactive Preloader</span>
            <motion.span 
              className="text-4xl md:text-6xl font-light text-[#A855F7] tracking-tighter"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              {progress}%
            </motion.span>
          </div>
          
          {/* Custom Elegant Progress Bar */}
          <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#A855F7]/30 via-[#A855F7] to-white"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeInOut' }}
            />
          </div>
          
          <div className="flex justify-between text-[10px] font-mono text-white/20">
            <span>© 2026 LUXY DESIGN</span>
            <span>SECURE ESTABLISHED ACCESS</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
