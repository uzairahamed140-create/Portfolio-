/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  key?: React.Key;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1], // Smooth custom ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
