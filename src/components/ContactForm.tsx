/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Briefcase, Code2, AlertCircle, Info, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

// =========================================================================
// EMAILJS CONFIGURATION CONFIG
// Create an account at https://www.emailjs.com/
// You can replace these strings directly or declare them in your environment
// =========================================================================
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_wogjv69',     // <-- Replace with your Service ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_47wcutx', // <-- Replace with your Template ID
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'QnNrBbdJBKf9v4OsKZ2EZ',   // <-- Replace with your Public API Key
  DEVELOPER_EMAIL: 'itzmeluxy@gmail.com'                                        // <-- Developer destination email
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Creative Frontend',
    budget: '$5k - $10k',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showTroubleshoot, setShowTroubleshoot] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Front-end valid checking
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Missing required fields. Please fill out your Name, Email, and Message.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Map parameters precisely for your EmailJS Template structure
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        email: formData.email,
        from_email: formData.email,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        to_email: EMAILJS_CONFIG.DEVELOPER_EMAIL,
        reply_to: formData.email
      };

      // Perform direct SDK transmission
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email successfully sent!', result.status, result.text);

      // Trigger standard beautiful celebratory UX
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#A855F7', '#10B981', '#3B82F6', '#EC4899']
      });

      setIsSubmitted(true);
      
      // Reset after success
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'Creative Frontend',
        budget: '$5k - $10k',
        message: '',
      });

    } catch (error: any) {
      console.error('EmailJS Sender Error:', error);
      
      // Extract detailed errors to help configure properly if keys are placeholders
      const errDetail = error?.text || error?.message || 'Network transport failure. Check your EmailJS public key configuration.';
      setErrorMessage(errDetail);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Creative Frontend',
    'WebGL 3D Canvas',
    'NextJS & Remix Apps',
    'Performance Optimization',
    'UI/UX Prototyping'
  ];

  const budgets = [
    '< $5k',
    '$5k - $10k',
    '$10k - $20k',
    '$20k+'
  ];

  return (
    <div className="relative w-full bg-[#0D0D12]/85 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.05)]">
      
      {/* Background neon visual flare */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A855F7]/3 filter blur-[100px] pointer-events-none" />

      {/* Header briefing */}
      <div className="relative z-10 mb-8 border-b border-white/5 pb-6">
        <h3 className="text-2xl font-serif font-light text-white tracking-tight mb-2">
          Project Briefing
        </h3>
        <p className="text-white/45 text-xs font-mono tracking-wide leading-relaxed uppercase">
          Describe your vision, technical category requirements, and project timeline. I will review and respond with a personalized draft outline within 12 hours.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Split row: Name / Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#B5B5C3] uppercase mb-2">
                  Developer / Brand Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Acme Tech Studio"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A855F7] transition-all font-sans font-light"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#B5B5C3] uppercase mb-2">
                  Secure Communication Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. founder@acmetech.io"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A855F7] transition-all font-sans font-light"
                />
              </div>
            </div>

            {/* Segment Selector: Target Service Type */}
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-[#B5B5C3] uppercase mb-3 flex items-center space-x-1.5 font-bold">
                <Briefcase className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>Primary Project Category</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((svc) => (
                  <motion.button
                    key={svc}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: svc })}
                    className={`px-3 py-2 text-[10px] font-mono tracking-widest uppercase rounded-lg border cursor-pointer transition-all duration-300 ease-out ${
                      formData.service === svc
                        ? 'bg-[#A855F7]/20 border-[#A855F7] text-white shadow-[0_0_22px_rgba(168,85,247,0.7)]'
                        : 'bg-black/40 border-white/10 text-gray-400 hover:text-white bg-transparent hover:border-[#A855F7]/50 hover:shadow-[0_0_16px_rgba(168,85,247,0.45)]'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {svc}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Segment Selector: Investment Bracket */}
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-[#B5B5C3] uppercase mb-3 flex items-center space-x-1.5 font-bold">
                <Code2 className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>Estimated Target Budget</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgets.map((bud) => (
                  <motion.button
                    key={bud}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: bud })}
                    className={`py-2 text-[10px] font-mono tracking-widest uppercase text-center rounded-lg border cursor-pointer transition-all duration-300 ease-out ${
                      formData.budget === bud
                        ? 'bg-[#A855F7]/20 border-[#A855F7] text-white shadow-[0_0_22px_rgba(168,85,247,0.7)]'
                        : 'bg-black/40 border-white/10 text-gray-400 hover:text-white bg-transparent hover:border-[#A855F7]/50 hover:shadow-[0_0_16px_rgba(168,85,247,0.45)]'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {bud}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Message Block */}
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-[#B5B5C3] uppercase mb-2">
                Vision details & Tech Specifications
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="What interactive concepts or speed requirements should we establish?"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A855F7] transition-all font-sans font-light resize-none"
              />
            </div>

            {/* Error notifications & troubleshooting guides */}
            <AnimatePresence>
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-200 p-4 rounded-xl text-xs font-mono space-y-2 overflow-hidden"
                >
                  <div className="flex items-center space-x-2 text-red-400 font-semibold">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>SECURE TRANSMISSION FAILURE</span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    Error: {errorMessage}
                  </p>
                  
                  <div className="pt-2 border-t border-red-500/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setShowTroubleshoot(!showTroubleshoot)}
                      className="text-[#A855F7] hover:text-[#b066ff] hover:underline flex items-center space-x-1 cursor-pointer font-bold transition-all"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>{showTroubleshoot ? 'Hide' : 'Show'} EmailJS setup troubleshooting guide</span>
                    </button>
                  </div>

                  {showTroubleshoot && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 p-3 bg-black/60 border border-white/5 rounded-lg text-gray-350 space-y-2 leading-relaxed text-[11px]"
                    >
                      <p className="text-[#A855F7] font-semibold text-[11px]">How to configure EmailJS in 60 seconds:</p>
                      <ol className="list-decimal pl-4 space-y-1 text-gray-300">
                        <li>Register a free account at <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-[#A855F7]">emailjs.com</a></li>
                        <li>Connect a mail service (like Google/Gmail) to secure a <code className="text-[#A855F7] bg-white/5 px-1 rounded font-mono text-[10px]">Service ID</code></li>
                        <li>Create an email template containing dynamic variables like: <code className="text-white bg-white/5 px-1 rounded">{"{{name}}"}</code>, <code className="text-white bg-white/5 px-1 rounded">{"{{email}}"}</code>, <code className="text-white bg-white/5 px-1 rounded">{"{{message}}"}</code> to copy your <code className="text-[#A855F7] bg-white/5 px-1 rounded font-mono text-[10px]">Template ID</code></li>
                        <li>Navigate to Account &gt; API keys to secure your <code className="text-[#A855F7] bg-white/5 px-1 rounded font-mono text-[10px]">Public Key</code></li>
                        <li>
                          Replace the placeholder values inside <code className="text-white bg-white/5 px-1 rounded">/src/components/ContactForm.tsx</code>:
                          <pre className="mt-2 text-left bg-[#0D0D12] p-2 rounded text-[10px] overflow-x-auto text-emerald-400 border border-white/5">
{`const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID_HERE',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',
  DEVELOPER_EMAIL: 'itzmeluxy@gmail.com'
};`}
                          </pre>
                        </li>
                      </ol>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 outline-none text-white text-xs font-mono tracking-widest uppercase rounded-xl font-bold flex items-center justify-center space-x-2 select-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border border-emerald-400/50 shadow-[0_0_18px_rgba(16,185,129,0.5)] transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 0 35px rgba(16,185,129,0.95)", 
                borderColor: "rgba(110,231,183,0.95)"
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(16,185,129,0.45)",
                  "0 0 30px rgba(16,185,129,0.8)",
                  "0 0 15px rgba(16,185,129,0.45)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                y: { duration: 0.3, ease: "easeOut" },
                scale: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full" />
                  <span>TRANSMITTING BRIEFING...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 text-white" />
                  <span>TRANSMIT BRIEFING DIRECTLY</span>
                </>
              )}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className="py-12 flex flex-col items-center justify-center text-center space-y-4 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <CheckCircle className="w-16 h-16 text-[#A855F7] animate-bounce" />
            <div className="space-y-1">
              <h4 className="text-xl font-serif font-light text-white tracking-tight">
                Secure Transmission Dispatched
              </h4>
              <p className="text-[#A855F7] text-[10px] font-mono tracking-widest uppercase mb-4 font-bold">
                Registered In Queue
              </p>
              <p className="text-gray-400 text-xs font-mono tracking-wide max-w-md mx-auto leading-relaxed">
                Luxy has received your project brief! A copy has been dispatched to your configured inbox (<span className="text-white font-semibold">itzmeluxy@gmail.com</span>). Let's review and connect soon.
              </p>
            </div>
            
            <motion.button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-4 px-4 py-2 border border-white/10 rounded-lg text-[9px] font-mono text-gray-400 hover:text-white hover:border-white/20 transition-all cursor-pointer flex items-center space-x-1.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-3 h-3" />
              <span>SEND ANOTHER BRIEFING</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
