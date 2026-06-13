/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, HelpCircle, DollarSign, Briefcase } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Luxury Redesign',
    budget: '$10k - $25k',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium API roundtrip
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset after a view time
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          service: 'Luxury Redesign',
          budget: '$10k - $25k',
          message: '',
        });
      }, 5000);
    }, 1500);
  };

  const services = [
    'Luxury Redesign',
    '3D/WebGL Showcase',
    'AI SaaS Landing Page',
    'E-Commerce Experience',
    'Custom Creative Code'
  ];

  const budgets = [
    '$5k - $10k',
    '$10k - $25k',
    '$25k - $50k',
    '$50k+'
  ];

  return (
    <div className="relative w-full bg-[#0D0D12]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 overflow-hidden">
      
      {/* Decorative backing gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A855F7]/5 filter blur-[100px] pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 mb-8 border-b border-white/5 pb-6">
        <h3 className="text-2xl font-serif font-light text-white tracking-tight mb-2">
          Concierge Briefing
        </h3>
        <p className="text-white/45 text-xs font-mono tracking-wide leading-relaxed">
          Slightly higher bar, premium outcomes. Share your baseline scope, and receive a custom video critique of your current page performance within 4 hours.
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
            {/* Split row Name / Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#B5B5C3] uppercase mb-2">
                  Client / Brand Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Nike Redesign Team"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A855F7] transition-all font-sans font-light"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#B5B5C3] uppercase mb-2">
                  Secure Contact Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. design@brand.com"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A855F7] transition-all font-sans font-light"
                />
              </div>
            </div>

            {/* Segment Selector: Target Service Type */}
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-[#B5B5C3] uppercase mb-3 flex items-center space-x-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>Target Experience Category</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((svc) => (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: svc })}
                    className={`px-3 py-2 text-[10px] font-mono tracking-widest uppercase transition-all rounded-lg border cursor-pointer ${
                      formData.service === svc
                        ? 'bg-[#A855F7]/15 border-[#A855F7] text-[#A855F7]'
                        : 'bg-black/30 border-white/5 text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {svc}
                  </button>
                ))}
              </div>
            </div>

            {/* Segment Selector: Investment Bracket */}
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-[#B5B5C3] uppercase mb-3 flex items-center space-x-1.5">
                <DollarSign className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>Investment Allocation Bracket</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgets.map((bud) => (
                  <button
                    key={bud}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: bud })}
                    className={`py-2 text-[10px] font-mono tracking-widest uppercase text-center transition-all rounded-lg border cursor-pointer ${
                      formData.budget === bud
                        ? 'bg-[#A855F7]/15 border-[#A855F7] text-[#A855F7]'
                        : 'bg-black/30 border-white/5 text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {bud}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Block */}
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-[#B5B5C3] uppercase mb-2">
                Describe the Current Performance Botches
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="What elements feel slow or lack emotional elegance?"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A855F7] transition-all font-sans font-light resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#A855F7] hover:bg-[#A855F7]/95 text-white text-xs font-mono tracking-widest uppercase rounded-xl transition-all duration-300 font-semibold flex items-center justify-center space-x-2 select-none active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-purple-500/10"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full" />
                  <span>TRANSMITTING DETAILS...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 text-white" />
                  <span>INITIATE PRIORITY DISCUSSION</span>
                </>
              )}
            </button>
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
                Transmission Completed Successfully
              </h4>
              <p className="text-[#A855F7] text-[10px] font-mono tracking-widest uppercase mb-4">
                Priority status allocated
              </p>
              <p className="text-gray-400 text-xs font-mono tracking-wide max-w-md mx-auto leading-relaxed">
                Luxy has received your brief. A personalized performance review video is being dispatched to your secure address. Relax, you are in safe hands.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
