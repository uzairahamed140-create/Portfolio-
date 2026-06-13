/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface ContactCTAProps {
  onClick: () => void;
}

export default function ContactCTA({ onClick }: ContactCTAProps) {
  return (
    <div className="py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="relative group overflow-hidden rounded-2xl border border-[#A855F7]/15 bg-radial from-[#A855F7]/[0.02] to-transparent p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 cursor-pointer text-center md:text-left transition-all duration-300 hover:border-[#A855F7]/35 hover:shadow-xl hover:shadow-[#A855F7]/[0.01]"
          whileHover={{ y: -2 }}
          onClick={onClick}
        >
          {/* Subtle violet line accent */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A855F7]/30 to-transparent" />

          <div className="flex flex-col space-y-1">
            <h4 className="text-[10px] font-mono tracking-widest text-[#A855F7]/75 uppercase">
              REVENUE & CONVERSION COLLABORATION
            </h4>
            <p className="text-lg md:text-xl font-serif font-light text-white tracking-tight">
              Ready to transform your website into an <span className="italic text-[#A855F7]">elite brand asset</span>?
            </p>
          </div>

          <motion.div 
            className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] text-white rounded-full text-xs font-mono tracking-widest uppercase font-semibold select-none cursor-pointer filter hover:brightness-110 shrink-0 shadow-lg shadow-purple-500/10"
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
