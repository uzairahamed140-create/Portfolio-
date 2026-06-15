/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  const phoneNumber = "918147730010";
  const message = "Hi luxy, I wanted to discuss a project";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a  
      href={whatsappURL}  
      target="_blank"  
      rel="noopener noreferrer"  
      className="fixed bottom-5 left-5 bg-emerald-500 text-white p-4 rounded-full shadow-[0_0_18px_rgba(16,185,129,0.55)] z-50 flex items-center justify-center border border-emerald-400/50 font-semibold transition-all duration-300"
      aria-label="Chat on WhatsApp"
      title="Contact Luxy on WhatsApp"
      
      // Modern interactive glow controls via Framer Motion
      whileHover={{ 
        scale: 1.1, 
        y: -4,
        boxShadow: "0 0 35px rgba(16,185,129,0.85)", 
        borderColor: "rgba(110,231,183,0.8)"
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 15px rgba(16,185,129,0.4)",
          "0 0 30px rgba(16,185,129,0.7)",
          "0 0 15px rgba(16,185,129,0.4)"
        ]
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        y: { duration: 0.3, ease: "easeOut" },
        scale: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <FaWhatsapp size={24} />
    </motion.a>
  );
}
