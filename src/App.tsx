/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ArrowUpRight, 
  Menu, 
  X, 
  Sparkles, 
  Target, 
  MousePointerClick, 
  Clock, 
  Terminal, 
  ChevronRight, 
  Laptop, 
  Code2, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Gauge
} from 'lucide-react';

// Import Types
import { DeveloperProject, Metric, Service, ProcessStep } from './types';

// Import Components
import Loader from './components/Loader';
import ProjectCard from './components/ProjectCard';
import ContactCTA from './components/ContactCTA';
import ContactForm from './components/ContactForm';
import Watch3D from './components/Watch3D';
import LuxyLogo from './components/LuxyLogo';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollReveal from './components/ScrollReveal';

// ESM Image Imports (Fixes all relative image path bugs)
import portfolioV1V2Image from './assets/images/portfolio_transition_1781344139048.jpg';
import luxuryWatchImage from './assets/images/luxury_watch_mockup_1781344155478.jpg';
import aiSaaSDashboardImage from './assets/images/ai_saas_dashboard_1781344169664.jpg';
import product3DShowcaseImage from './assets/images/product_showcase_3d_1781344184323.jpg';
import spotifyDashboardImage from './assets/images/spotify_dashboard_1781344665552.jpg';
import teslaConceptImage from './assets/images/tesla_concept_1781344680797.jpg';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [activeProjectId, setActiveProjectId] = useState<string | null>('creative-portfolio');
  const [clickedGlowId, setClickedGlowId] = useState<string | null>(null);

  // Box Click Handler to toggle purple neon glow on click
  const handleBoxClick = (id: string, e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button, a, input, textarea, svg, select')) return;
    setClickedGlowId(prev => prev === id ? null : id);
  };
  
  // Custom Cursor Coordinate States
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Interactive Live Performance Transformation Storyboard State
  const [performanceSimState, setPerformanceSimState] = useState<'boring' | 'glowing'>('glowing');

  // Set up clock timezone / UTC
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const stringified = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
      setCurrentTime(stringified);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Tracking mouse for custom glowing cursor
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Smooth scrolling scroll helper
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Verified Developer Metrical Milestones
  const stats: Metric[] = [
    {
      label: 'Performance Score',
      value: '100/100',
      description: 'Prerendered assets & lightweight responsive elements'
    },
    {
      label: 'Production Projects',
      value: '25+',
      description: 'High-end clients & custom creative instances'
    },
    {
      label: 'Average Asset Optimization',
      value: '6.5x Smaller',
      description: 'WebP conversion, SVG sprites, & lazy preloads'
    },
    {
      label: 'Interaction Speed',
      value: '60 FPS',
      description: 'Programmatic hardware-accelerated animations'
    }
  ];

  // Developer Projects with imported asset variables
  const developerProjects: DeveloperProject[] = [
    {
      id: 'creative-portfolio',
      title: 'Premium Creative Studio Portfolio',
      category: 'Art Direction & Frontend',
      description: 'A fully custom, high-contrast creative space utilizing responsive Glassmorphism grids, real-time UTC trackers, custom cursor magnets, and dynamic Three.js particle clouds. Built from scratch with pixel-perfect layouts.',
      imagePath: portfolioV1V2Image,
      technologies: ['React 18', 'TypeScript', 'ThreeJS GL', 'Tailwind CSS', 'Framer Motion'],
      projectUrl: '#'
    },
    {
      id: 'interactive-watch',
      title: 'WebGL 3D Chronograph Showcase',
      category: '3D WebGL Interaction',
      description: 'An interactive e-commerce product model webspace. Users can click, drag, and tilt premium procedural chronographs in a real-time responsive WebGL canvas, loading dynamic specs on gesture actions.',
      imagePath: luxuryWatchImage,
      technologies: ['React SPA', 'ThreeJS Fiber', 'GL Shaders', 'Tailwind CSS', 'Vite'],
      projectUrl: '#'
    },
    {
      id: 'ai-saas',
      title: 'Advanced AI Analytics Dashboard',
      category: 'SaaS Design & Development',
      description: 'A dark-mode analytics terminal for a futuristic productivity software. Features live-updating data streams, drag-and-drop workflow task grids, fluid SVG line graphs, and glassmorphism context panels.',
      imagePath: aiSaaSDashboardImage,
      technologies: ['React Context', 'Dynamic Aggregators', 'Recharts Core', 'Vite'],
      projectUrl: '#'
    },
    {
      id: 'fluid-gallery',
      title: 'Spherical Vector Product Gallery',
      category: 'Interactive Web Space',
      description: 'An immersive visual showcase presenting product specimens inside an organic floating vector webspace. Adapts immediately to cursor movements and scroll ratios with buttery-smooth physics.',
      imagePath: product3DShowcaseImage,
      technologies: ['WebGL Scenes', 'Camera Raycasting', 'GSAP physics', 'Tailwind CSS'],
      projectUrl: '#'
    },
    {
      id: 'spotify-ambient',
      title: 'Dynamic Ambient Music Dashboard',
      category: 'UX Prototyping & Apps',
      description: 'A glass-paneled media center mockup. The layout background dynamically recalibrates its ambient neon glowing colors to blend seamlessly with the active audio track thumbnail gradients in real time.',
      imagePath: spotifyDashboardImage,
      technologies: ['NextJS', 'Web Audio APIs', 'Zustand State', 'Tailwind CSS'],
      projectUrl: '#'
    },
    {
      id: 'automotive3d',
      title: 'Cinematic Car configurator',
      category: 'Creative Engineering',
      description: 'A luxurious dark spec-configurator workspace. Integrates sliding specs matrices, custom color paint shifters, and audio-engineered button clicks to deliver standard-defying digital excitement.',
      imagePath: teslaConceptImage,
      technologies: ['Direct WebGL', 'Laser Shaders', 'Web Audio Engine', 'Retina CSS'],
      projectUrl: '#'
    }
  ];

  // Developer Professional Services list
  const services: Service[] = [
    {
      number: '01',
      title: 'High-End Art Direction & UI/UX',
      description: 'Creating customized, stunning visual structures from scratch. I focus on custom typography rules, strict spacing, color theory, and balanced contrast layers to make sure your product looks premium, clean, and expensive.',
      features: ['Typography Hierarchy', 'Stunning Glassmorphism Panels', 'Interactive Figma Prototyping']
    },
    {
      number: '02',
      title: 'Interactive WebGL & 3D Webspaces',
      description: 'Breaking standard flat layouts. I integrate elegant 3D vectors, floating particle systems, interactive model viewers, and smooth scroll animations designed to captivate your visitors on both mobile and desktop.',
      features: ['Three.js Canvas integration', 'Procedural 3D Grids', 'Hardware-Accelerated Physics']
    },
    {
      number: '03',
      title: 'Frontend Architecture & Speed Audits',
      description: 'A beautiful layout is useless if it loads slowly on basic connections. I write clean, performant, typesafe code optimized for sub-second load times. Clean imports, WebP images, and lightweight bundles ensure 100/100 audit scores.',
      features: ['TypeScript Type Safety', 'Image and Asset Preloading', 'Clean Mobile Reflows']
    }
  ];

  // Elite Development Process Blueprint
  const processSteps: ProcessStep[] = [
    {
      step: '01',
      title: 'Architecture & Tech Selection',
      description: 'We audit your requirements, select the fastest technology stack, map out modular typescript components, and agree on precise UX performance goals.'
    },
    {
      step: '02',
      title: 'Interactive Wireframe Prototype',
      description: 'We construct a beautiful, high-contrast visual design. We establish typography, tracking rules, custom layouts, and interactive movement physics.'
    },
    {
      step: '03',
      title: 'Performance-First Coding',
      description: 'I write clean, robust React, TypeScript, and Tailwind code. Interactive elements are linked smoothly with Framer Motion, GSAP, or raw Three.js GL.'
    },
    {
      step: '04',
      title: 'Quality Audits & Production Deploy',
      description: 'We run core speed optimizations, check high-DPI scaling across standard screens, secure typesafe inputs, and ship a high-speed digital asset.'
    }
  ];

  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans selection:bg-[#A855F7] selection:text-white overflow-x-hidden antialiased">
      
      {/* 1. CUSTOM FLOATING GLOW CURSOR */}
      {!isMobile && (
        <div 
          className="pointer-events-none fixed z-50 transition-transform duration-75 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`
          }}
        >
          {/* Inner Core */}
          <div className={`w-2 h-2 rounded-full bg-white transition-transform duration-300 ${cursorHovered ? 'scale-0' : 'scale-100'}`} />
          {/* Outer Ambient Glow Aura */}
          <div className={`absolute -inset-4 rounded-full border border-[#A855F7]/40 bg-[#A855F7]/5 blur-[2px] transition-all duration-300 ${cursorHovered ? 'scale-150 border-[#D8B4FE]/80 bg-[#A855F7]/20 blur-[4px]' : 'scale-100'}`} />
        </div>
      )}

      {/* Loader screen */}
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen"
          >
            {/* Header Rail */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-[#050507]/80 backdrop-blur-md border-b border-white/5">
              <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                
                {/* Brand Logo & UTC Clock */}
                <div 
                  className="flex items-center space-x-4"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  <button 
                    onClick={() => scrollToSection('hero')} 
                    className="flex items-center space-x-2.5 focus:outline-none transition-transform active:scale-95 text-left group cursor-pointer bg-transparent border-none"
                    title="Scroll to Top"
                  >
                    <div className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.85)] saturate-150">
                      <LuxyLogo size="sm" mode="iconOnly" interactive={false} glow={true} />
                    </div>
                    <span className="text-base font-sans font-bold tracking-[0.25em] text-white group-hover:text-[#A855F7] transition-colors uppercase">
                      LUXY<span className="text-[#A855F7] font-serif font-light">.</span>
                    </span>
                  </button>
                  <div className="hidden lg:flex items-center space-x-2 border-l border-white/10 pl-4 text-[9px] font-mono text-gray-500">
                    <Clock className="w-3 h-3 text-[#A855F7]" />
                    <span>{currentTime || 'ONLINE HUB ACTIVE'}</span>
                  </div>
                </div>

                {/* Navigation Menu */}
                <nav className="hidden md:flex items-center space-x-8 text-[11px] font-mono tracking-[0.2em] text-white/50 uppercase">
                  <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">About</button>
                  <button onClick={() => scrollToSection('skills')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">Skills</button>
                  <button onClick={() => scrollToSection('story')} className="hover:text-white transition-colors cursor-pointer text-[#A855F7] bg-transparent border-none">Performance</button>
                  <button onClick={() => scrollToSection('work')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">Projects</button>
                  <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">Services</button>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-[#A855F7] transition-colors cursor-pointer text-white bg-transparent border-none">Contact</button>
                </nav>

                {/* Quick action button */}
                <div 
                  className="hidden md:flex items-center"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  <motion.button
                    onClick={() => scrollToSection('contact')}
                    className="flex items-center space-x-1.5 px-4 py-2 border border-[#A855F7]/50 text-[10px] font-mono tracking-widest text-[#A855F7] uppercase rounded-full cursor-pointer bg-transparent shadow-[0_0_15px_rgba(168,85,247,0.45)] transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -1.5,
                      boxShadow: "0 0 25px rgba(168,85,247,0.85)",
                      borderColor: "rgba(168,85,247,0.9)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <span>Secure Contact</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 text-gray-400 hover:text-white focus:outline-none bg-transparent border-none cursor-pointer"
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile Drawer Menu */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden border-b border-white/5 bg-[#0D0D12]"
                  >
                    <div className="px-6 py-8 flex flex-col space-y-6 text-sm font-mono tracking-widest text-gray-400 uppercase">
                      <button onClick={() => scrollToSection('about')} className="text-left py-1 hover:text-white border-b border-white/5 bg-transparent border-none cursor-pointer">About</button>
                      <button onClick={() => scrollToSection('skills')} className="text-left py-1 hover:text-white border-b border-white/5 bg-transparent border-none cursor-pointer">Skills</button>
                      <button onClick={() => scrollToSection('story')} className="text-left py-1 hover:text-white border-b border-white/5 text-[#A855F7] bg-transparent border-none cursor-pointer">Performance Sim</button>
                      <button onClick={() => scrollToSection('work')} className="text-left py-1 hover:text-white border-b border-white/5 bg-transparent border-none cursor-pointer">Projects</button>
                      <button onClick={() => scrollToSection('services')} className="text-left py-1 hover:text-white border-b border-white/5 bg-transparent border-none cursor-pointer">Services</button>
                      <button onClick={() => scrollToSection('contact')} className="text-left py-1 text-[#A855F7] font-semibold flex items-center space-x-1 bg-transparent border-none cursor-pointer">
                        <span>Get In Touch</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </header>

            {/* 2. HERO SECTION */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 px-6 md:px-12 select-none overflow-hidden bg-[#050507]">
              
              {/* Floating ambient subtle glowing gradients */}
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A855F7]/10 rounded-full filter blur-[120px] mix-blend-screen pointer-events-none" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[150px] mix-blend-screen pointer-events-none" />

              <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Hero Information Left side */}
                <div className="lg:col-span-7 flex flex-col space-y-6 text-left relative z-10">
                  
                  {/* Floating Glassmorphism Container with Luxy Logo & Monogram name */}
                  <div className="pb-1.5 self-start">
                    <motion.div
                      id="hero-glassmorphic-logo"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex bg-[#0D0D12]/70 hover:bg-[#0D0D12]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-[#A855F7]/35 transition-all duration-300"
                    >
                      <LuxyLogo
                        size="md"
                        mode="full"
                        tiltEffect={true}
                        interactive={true}
                        glow={true}
                      />
                    </motion.div>
                  </div>

                  <div className="inline-flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-ping" />
                    <span className="text-[10px] font-mono tracking-widest text-[#A855F7] uppercase font-semibold">
                      Creative Developer Portfolio
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white leading-[1.05] -ml-0.5">
                    Engineering Blazing Fast <span className="text-[#A855F7] italic">Interactive Showcase</span> Portals<span className="text-[#A855F7]">.</span>
                  </h1>

                  <p className="text-white/40 text-sm md:text-base font-light font-sans max-w-xl leading-relaxed">
                    I am Luxy. I design and develop high-end custom web applications, WebGL visualizers, and interactive layout engines that look expensive and load instantly.
                  </p>

                  <div 
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
                    onMouseEnter={() => setCursorHovered(true)}
                    onMouseLeave={() => setCursorHovered(false)}
                  >
                    <motion.button
                      onClick={() => scrollToSection('work')}
                      className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 outline-none text-white text-xs font-mono tracking-widest uppercase rounded-xl font-bold flex items-center justify-center space-x-2 cursor-pointer border border-emerald-400/50 shadow-[0_0_18px_rgba(16,185,129,0.5)] transition-all duration-300"
                      whileHover={{ 
                        scale: 1.05, 
                        y: -3,
                        boxShadow: "0 0 35px rgba(16,185,129,0.95)", 
                        borderColor: "rgba(110,231,183,0.85)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: [
                          "0 0 15px rgba(16,185,129,0.45)",
                          "0 0 28px rgba(16,185,129,0.75)",
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
                      <span>Explore Work</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                    
                    <motion.button
                      onClick={() => scrollToSection('contact')}
                      className="px-8 py-4 border border-white/25 text-xs font-mono tracking-widest uppercase rounded-xl cursor-pointer text-white/70 hover:text-white bg-transparent shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300"
                      whileHover={{ 
                        scale: 1.05, 
                        y: -3,
                        boxShadow: "0 0 28px rgba(168,85,247,0.8)", 
                        borderColor: "rgba(168,85,247,0.85)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <span>Get in Touch</span>
                    </motion.button>
                  </div>

                  {/* Aesthetic core metrics links */}
                  <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/5">
                    <div>
                      <div className="text-[#A855F7] text-xs font-mono font-semibold">01 / BRAND</div>
                      <div className="text-[11px] text-white/40 font-sans mt-0.5 font-light leading-snug">Elite High-Contrast UX</div>
                    </div>
                    <div>
                      <div className="text-[#A855F7] text-xs font-mono font-semibold">02 / INTERACTION</div>
                      <div className="text-[11px] text-white/40 font-sans mt-0.5 font-light leading-snug">Smooth WebGL 3D</div>
                    </div>
                    <div>
                      <div className="text-[#A855F7] text-xs font-mono font-semibold">03 / PERFORMANCE</div>
                      <div className="text-[11px] text-white/40 font-sans mt-0.5 font-light leading-snug">Sub-Second Content Load</div>
                    </div>
                  </div>
                </div>

                {/* Hero Right side: 3D Core Visualizer */}
                <div 
                  className="lg:col-span-5 relative z-10 flex flex-col justify-center items-center"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  <div className="w-full max-w-sm">
                    <div className="mb-4 text-center">
                      <span className="text-[10px] font-mono text-[#A855F7]/60 uppercase tracking-widest animate-pulse font-semibold">
                        Glow Matrix (Spin & Orbit below)
                      </span>
                    </div>
                    <Watch3D />
                  </div>
                </div>

              </div>
            </section>

            {/* CONTACT CTA BAR */}
            <ContactCTA onClick={() => scrollToSection('contact')} />

            {/* 3. ABOUT ME SECTION */}
            <section id="about" className="py-24 px-6 md:px-12 bg-radial from-neutral-900/10 via-transparent to-transparent">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  {/* Left Side avatar card */}
                  <ScrollReveal className="lg:col-span-5 flex flex-col space-y-6">
                    <div 
                      onClick={(e) => handleBoxClick('about-avatar', e)}
                      className={`relative group rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 border ${
                        clickedGlowId === 'about-avatar'
                          ? 'border-[#A855F7] shadow-[0_0_35px_rgba(168,85,247,0.7)] bg-[#0D0D12] scale-[1.02]'
                          : 'border-white/10 bg-[#0D0D12]/80 hover:border-[#A855F7]/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.22)]'
                      }`}
                    >
                      
                      {/* Avatar container with spinning glow outline */}
                      <div className="relative w-40 h-40 rounded-full overflow-hidden border border-[#A855F7]/30 bg-black flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#A855F7]/20 to-transparent animate-spin duration-10000" />
                        
                        {/* Custom vector silhouette representing developer identity */}
                        <svg className="w-24 h-24 text-[#A855F7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <rect x="3" y="11" width="18" height="10" rx="2" />
                          <path d="M12 2v9M8 5l4-3 4 3" />
                          <circle cx="12" cy="16" r="1.5" />
                        </svg>
                      </div>

                      <h3 className="text-xl font-serif font-light text-white tracking-tight">
                        Luxy <span className="text-[#A855F7] font-medium italic">Creative</span>
                      </h3>
                      <p className="text-[10px] font-mono text-[#A855F7] uppercase tracking-widest mt-1 font-semibold">
                        Creative Frontend Developer & UI/UX Designer
                      </p>

                      {/* Info lines table */}
                      <div className="w-full mt-6 pt-6 border-t border-white/5 space-y-3 font-mono text-[10px] text-left text-gray-400">
                        <div className="flex justify-between">
                          <span className="text-gray-600">LOCATION:</span>
                          <span className="text-white">India / Remote Worldwide</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">SPECIALIZATION:</span>
                          <span className="text-white">Interactive UI & Creative GL</span>
                        </div>
                        <div className="flex justify-between font-mono">
                          <span className="text-gray-600">HANDLE:</span>
                          <span className="text-[#A855F7] font-semibold">iTz_me_luxy</span>
                        </div>
                      </div>

                      {/* Connect Links */}
                      <div 
                        className="flex items-center space-x-4 mt-6 border-t border-white/5 pt-4 w-full justify-center text-[10px] font-mono text-gray-400"
                        onMouseEnter={() => setCursorHovered(true)}
                        onMouseLeave={() => setCursorHovered(false)}
                      >
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#A855F7] transition-colors" aria-label="Instagram Profile">
                          INSTAGRAM
                        </a>
                        <span className="text-gray-700">/</span>
                        <a href={`https://wa.me/919008595169?text=${encodeURIComponent('Hi luxy, I wanted to discuss a project')}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="WhatsApp Chat">
                          WHATSAPP
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Right Side Bio description */}
                  <ScrollReveal delay={0.2} className="lg:col-span-7 flex flex-col space-y-8">
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono text-[#A855F7] tracking-widest uppercase block font-semibold">
                        [01 / ENGINEERING STATEMENT]
                      </span>
                      <h3 className="text-3xl font-serif font-light text-white tracking-tight leading-tight">
                        I bridge the deep gap between <span className="text-[#A855F7] italic">elite graphic layouts</span> and scalable high-performance frontend code.
                      </h3>
                      <p className="text-white/40 text-sm font-sans font-light leading-relaxed">
                        Hi, I am Luxy. Over the last years, I have seen so many websites built with sluggish templates, uninspired grids, and basic styles. I decided to change this. I design digital showcase spaces that look expensive, move dynamically, and maintain perfect performance scores.
                      </p>
                      <p className="text-white/40 text-sm font-sans font-light leading-relaxed">
                        I specialize in working with modern SPA networks (React, Vite, Next) using custom animation tools (Framer Motion, CSS variables, Three.js) to trigger tactile elements when a user scrolls or clicks, giving people experiences they actually remember.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div 
                        onClick={(e) => handleBoxClick('about-core-1', e)}
                        className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                          clickedGlowId === 'about-core-1'
                            ? 'border-[#A855F7] shadow-[0_0_30px_rgba(168,85,247,0.65)] bg-[#0D0D12] scale-[1.02]'
                            : 'bg-[#0D0D12]/80 border-white/10 hover:border-[#A855F7]/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.22)]'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-full bg-[#A855F7]/10 flex items-center justify-center text-[#A855F7] mb-3">
                          <Target className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-mono text-white tracking-widest uppercase mb-1 font-semibold">
                          Custom Tailored Displays
                        </h4>
                        <p className="text-[11px] text-white/30 leading-relaxed font-sans font-light">
                          No generic bootstrap structures. I build original component architectures customized to highlight your project specifications with high-DPI retina sharpness.
                        </p>
                      </div>

                      <div 
                        onClick={(e) => handleBoxClick('about-core-2', e)}
                        className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                          clickedGlowId === 'about-core-2'
                            ? 'border-[#A855F7] shadow-[0_0_30px_rgba(168,85,247,0.65)] bg-[#0D0D12] scale-[1.02]'
                            : 'bg-[#0D0D12]/80 border-white/10 hover:border-[#A855F7]/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.22)]'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-full bg-[#A855F7]/10 flex items-center justify-center text-[#A855F7] mb-3">
                          <MousePointerClick className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-mono text-white tracking-widest uppercase mb-1 font-semibold">
                          Dynamic Motion Engines
                        </h4>
                        <p className="text-[11px] text-white/30 leading-relaxed font-sans font-light">
                          Every hover trigger, scroll transition, and canvas layout is highly optimized for performance, keeping user interactions smooth at constant 60 frames-per-second.
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>

                </div>
              </div>
            </section>

            {/* 4. SKILLS SECTION */}
            <section id="skills" className="py-24 px-6 md:px-12 bg-radial from-neutral-900/5 via-transparent to-transparent">
              <div className="max-w-7xl mx-auto">
                
                <ScrollReveal className="max-w-2xl mb-12 text-left">
                  <span className="text-[10px] font-mono text-[#A855F7] tracking-widest uppercase block mb-3 font-semibold">
                    Technical Toolkit
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight">
                    Optimized Development Stack
                  </h2>
                  <p className="text-white/40 text-xs font-sans font-light mt-2 max-w-lg leading-relaxed">
                    A collection of frameworks, compilers, and rendering modules I leverage to materialize responsive high-DPI portals.
                  </p>
                </ScrollReveal>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { title: 'React / Next.js', level: '95%', cat: 'Core SPA Frameworks' },
                    { title: 'TypeScript Core', level: '90%', cat: 'Type Safety & Architecture' },
                    { title: 'Tailwind CSS v4', level: '100%', cat: 'Premium Layout Engine' },
                    { title: 'Three.js / WebGL', level: '80%', cat: '3D Graphics Canvas' },
                    { title: 'Framer Motion', level: '95%', cat: 'Interactive Spring Animations' },
                    { title: 'Figma Prototyping', level: '85%', cat: 'Visual Vector Mockups' }
                  ].map((skill, index) => (
                    <ScrollReveal 
                      key={index} 
                      delay={index * 0.08}
                      className="h-full"
                    >
                      <div 
                        onClick={(e) => handleBoxClick(`skill-${index}`, e)}
                        className={`p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 relative group h-full cursor-pointer border ${
                          clickedGlowId === `skill-${index}`
                            ? 'border-[#A855F7] shadow-[0_0_30px_rgba(168,85,247,0.7)] bg-[#0C0C10] scale-[1.03]'
                            : 'bg-[#0D0D12] border-white/10 hover:border-[#A855F7]/35 hover:shadow-[0_0_20px_rgba(168,85,247,0.22)]'
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-[#A855F7]/[0.02] to-transparent rounded-2xl" />
                        <div className="relative z-10">
                          <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                            {skill.cat}
                          </span>
                          <h4 className="text-xs sm:text-sm font-mono text-white tracking-wider font-semibold">
                            {skill.title}
                          </h4>
                        </div>
                        <div className="relative z-10 mt-6 border-t border-white/5 pt-3 flex items-center justify-between font-mono text-[9px]">
                          <span className="text-[#A855F7]">EXPERTISE:</span>
                          <span className="text-white/80 font-bold">{skill.level}</span>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

              </div>
            </section>

            {/* VERIFIED PERFORMANCE METRICS (Removing fake metrics, using clean engineering results) */}
            <section id="stats" className="py-16 px-6 md:px-12 bg-[#0D0D12]/20 border-y border-white/5">
              <div className="max-w-7xl mx-auto">
                <ScrollReveal className="mb-10 text-center md:text-left">
                  <span className="text-[10px] font-mono text-[#A855F7] tracking-widest uppercase block mb-2 font-semibold">
                    Aesthetic Speeds
                  </span>
                  <h3 className="text-2xl font-serif font-light text-white tracking-tight">
                    Technical Performance Milestones
                  </h3>
                </ScrollReveal>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.12} className="h-full">
                      <div 
                        onClick={(e) => handleBoxClick(`stat-${idx}`, e)}
                        className={`p-6 rounded-2xl transition-all duration-300 h-full cursor-pointer border ${
                          clickedGlowId === `stat-${idx}`
                            ? 'border-[#A855F7] shadow-[0_0_30px_rgba(168,85,247,0.65)] bg-[#0C0C10] scale-[1.02]'
                            : 'bg-[#0D0D12]/60 border-white/10 hover:border-[#A855F7]/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.22)]'
                        }`}
                      >
                        <div className="text-3.5xl md:text-5xl font-serif font-light text-[#A855F7] tracking-tighter">
                          {stat.value}
                        </div>
                        <div className="text-xs font-mono text-white tracking-widest uppercase mt-2 font-bold">
                          {stat.label}
                        </div>
                        <p className="text-[10px] font-mono text-white/40 uppercase mt-1 leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>

            {/* CONTACT CTA BAR */}
            <ContactCTA onClick={() => scrollToSection('contact')} />

            {/* 5. INTERACTIVE LIVE PERFORMANCE SIMULATION STORYBOARD */}
            <section id="story" className="py-24 px-6 md:px-12 bg-black border-b border-white/5 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A855F7]/5 rounded-full filter blur-[150px] pointer-events-none" />
              
              <div className="max-w-5xl mx-auto relative z-10 text-center">
                <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
                  <span className="text-[10px] font-mono text-[#A855F7] tracking-[0.2em] uppercase block mb-3 font-semibold">
                    [02 / Core Speed Simulator]
                  </span>
                  
                  <h2 className="text-3xl md:text-5xl font-serif font-light text-white tracking-tight max-w-3xl mx-auto mb-4 leading-tight">
                    Responsive Speeds Built Around <span className="text-[#A855F7] italic">Pure Optimization</span>.
                  </h2>
                  
                  <p className="text-white/40 text-xs md:text-sm font-sans font-light max-w-xl mx-auto leading-relaxed">
                    Generic corporate layouts carry excessive image assets and heavy frameworks. Click below to switch and compare standard template models against optimized creative frontend structures.
                  </p>
                </ScrollReveal>

                 {/* Simulated Terminal Container */}
                 <ScrollReveal delay={0.15} className="max-w-3xl mx-auto">
                   <div 
                     onClick={(e) => handleBoxClick('story-terminal', e)}
                     className={`border rounded-3xl p-6 md:p-8 space-y-6 cursor-pointer transition-all duration-300 ${
                       clickedGlowId === 'story-terminal'
                         ? 'border-[#A855F7] shadow-[0_0_35px_rgba(168,85,247,0.7)] bg-[#0C0C10] scale-[1.01]'
                         : 'border-white/10 bg-[#0D0D12]/40 hover:border-[#A855F7]/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.22)]'
                     }`}
                   >
                     <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/5">
                       <div className="flex items-center space-x-2 font-mono text-[10px] text-white/40">
                         <Terminal className="w-3.5 h-3.5 text-[#A855F7]" />
                         <span>SPEED SPECIFICATION SIMULATOR</span>
                       </div>

                       {/* Quick switch controller */}
                       <div 
                         className="inline-flex rounded-full bg-black/60 p-1 border border-white/10 cursor-pointer select-none"
                         onMouseEnter={() => setCursorHovered(true)}
                         onMouseLeave={() => setCursorHovered(false)}
                       >
                         <motion.button 
                           onClick={() => setPerformanceSimState('boring')}
                           className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase cursor-pointer border transition-all duration-300 ease-out ${
                             performanceSimState === 'boring' 
                               ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 shadow-[0_0_15px_rgba(239,68,68,0.5)]' 
                               : 'text-gray-500 hover:text-stone-300 bg-transparent border-transparent'
                           }`}
                           whileHover={{ 
                             scale: 1.05, 
                             y: -1.5,
                             boxShadow: performanceSimState === 'boring' 
                               ? "0 0 25px rgba(239,68,68,0.85)" 
                               : "0 0 16px rgba(239,68,68,0.3)"
                           }}
                           whileTap={{ scale: 0.95 }}
                         >
                           Boring/Generic View
                         </motion.button>
                         <motion.button 
                           onClick={() => setPerformanceSimState('glowing')}
                           className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase cursor-pointer border transition-all duration-300 ease-out ${
                             performanceSimState === 'glowing' 
                               ? 'bg-[#A855F7]/20 text-[#D8B4FE] border-[#A855F7]/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]' 
                               : 'text-gray-500 hover:text-purple-300 bg-transparent border-transparent'
                           }`}
                           whileHover={{ 
                             scale: 1.05, 
                             y: -1.5,
                             boxShadow: performanceSimState === 'glowing' 
                               ? "0 0 25px rgba(168,85,247,0.85)" 
                               : "0 0 16px rgba(168,85,247,0.4)"
                           }}
                           whileTap={{ scale: 0.95 }}
                         >
                           Luxy V2 Experience
                         </motion.button>
                       </div>
                     </div>

                  {/* Dynamic simulator screens */}
                  <div className="relative min-h-[220px] rounded-2xl flex items-center justify-center p-6 md:p-10 overflow-hidden bg-black/40">
                    <AnimatePresence mode="wait">
                      {performanceSimState === 'boring' ? (
                        <motion.div 
                          key="boring"
                          className="w-full max-w-lg space-y-4 text-left font-sans text-xs text-stone-400"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="border border-stone-800 rounded-lg p-4 bg-stone-900/40 space-y-3">
                            <div className="flex items-center justify-between border-b border-stone-850 pb-2">
                              <span className="font-bold tracking-tight text-stone-200">Standard Corporate Page (Sluggish Templates)</span>
                              <span className="px-2 py-0.5 bg-rose-500/10 text-rose-400 font-mono text-[9px] uppercase">Lighthouse: 42/100</span>
                            </div>
                            <p className="text-[11px] text-stone-500 leading-relaxed font-sans">
                              Flat uninspired layout. Carries dry unoptimized stock photo files, bloated frameworks loading multiple CSS files, causing layout shifts, slow interactions, and high visitor bounce risks.
                            </p>
                            <div className="h-6 w-32 bg-stone-800 rounded animate-pulse" />
                          </div>
                          
                          <div className="flex justify-between items-center text-[10px] font-mono text-rose-400 font-semibold bg-rose-500/5 px-3 py-2 rounded-lg border border-rose-500/10">
                            <span>BOUNCE RISK: HIGH</span>
                            <span>ASSET MASS: 5.2 MB</span>
                            <span>LOAD TIME: 3.8s SECONDS</span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="glowing"
                          className="w-full max-w-lg space-y-4 text-left font-sans text-xs"
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="border border-[#A855F7]/30 rounded-xl p-5 bg-gradient-to-br from-[#A855F7]/5 to-transparent backdrop-blur-md space-y-3 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#A855F7]/5 filter blur-[40px] pointer-events-none" />
                            
                            <div className="flex items-center justify-between border-b border-[#A855F7]/10 pb-2">
                              <span className="font-serif italic font-light text-white text-sm">Luxy Immersive Portal Upgrade</span>
                              <span className="px-2 py-0.5 bg-[#A855F7]/20 text-[#D8B4FE] font-mono text-[9px] uppercase font-bold tracking-wider rounded border border-[#A855F7]/30">Lighthouse: 100/100</span>
                            </div>
                            <p className="text-[11px] text-white/60 leading-relaxed font-sans font-light">
                              Highly specialized structural code. Fully lazy-loaded clean component matrices, hand-rendered procedural SVGs/CSS elements, visual spring effects on cursors, and sub-second preloaded responses.
                            </p>
                            <div className="inline-flex items-center space-x-1 font-mono text-[10px] text-[#A855F7] font-semibold">
                              <ChevronRight className="w-3 h-3 text-[#A855F7]" />
                              <span className="tracking-widest uppercase">SUB-1s INTERACTION INITIATED</span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center text-[10px] font-mono text-[#D8B4FE] font-semibold bg-[#A855F7]/10 px-3 py-2 rounded-lg border border-[#A855F7]/20">
                            <span>ENGAGEMENT: +240%</span>
                            <span>ASSET MASS: 480 KB</span>
                            <span>LOAD TIME: 0.4s (PRELOADED)</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </ScrollReveal>

              </div>
            </section>

            {/* CONTACT CTA BAR */}
            <ContactCTA onClick={() => scrollToSection('contact')} />

            {/* 6. FEATURED PROJECTS SECTION (Using ProjectCard and imported image modules) */}
            <section id="work" className="py-24 px-6 md:px-12 bg-[#050507]">
              <div className="max-w-7xl mx-auto">
                
                <ScrollReveal className="max-w-3xl mb-16 text-left">
                  <div className="inline-flex items-center space-x-2 font-mono text-[10px] text-[#A855F7] tracking-widest uppercase mb-3 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Selected Creations</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif font-light text-white tracking-tight mb-4 leading-tight">
                    Crafting Blazing Fast <span className="text-[#A855F7] italic">Digital Masterpieces</span>
                  </h2>
                  <p className="text-white/40 text-sm font-sans font-light leading-relaxed">
                    A curated archive of immersive front-end applications, dynamic WebGL experiments, and responsive portals built with deep attention to clean layouts, visual hierarchy, load speeds, and typesafe architecture.
                  </p>
                </ScrollReveal>

                {/* Project Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {developerProjects.map((project, idx) => (
                    <ScrollReveal 
                      key={project.id}
                      delay={idx * 0.15}
                      className="h-full"
                    >
                      <div 
                        onMouseEnter={() => setCursorHovered(true)}
                        onMouseLeave={() => setCursorHovered(false)}
                        className="h-full"
                      >
                        <ProjectCard 
                          project={project} 
                          isActive={activeProjectId === project.id}
                          onSelect={() => setActiveProjectId(project.id)}
                        />
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

              </div>
            </section>

            {/* CONTACT CTA BAR */}
            <ContactCTA onClick={() => scrollToSection('contact')} />

            {/* 7. SERVICES SECTION */}
            <section id="services" className="py-24 px-6 md:px-12 bg-radial from-neutral-900/10 via-transparent to-transparent">
              <div className="max-w-7xl mx-auto">
                
                <ScrollReveal className="max-w-2xl mb-16 text-left">
                  <span className="text-[10px] font-mono text-[#A855F7] tracking-widest uppercase block mb-3 font-semibold">
                    Services / Let's Collaborate
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight">
                    Professional Core Capabilities We Deploy
                  </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {services.map((svc, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.12} className="h-full">
                      <div 
                        onClick={(e) => handleBoxClick(`service-${idx}`, e)}
                        className={`p-6 rounded-3xl relative flex flex-col justify-between group transition-all duration-300 h-full cursor-pointer border ${
                          clickedGlowId === `service-${idx}`
                            ? 'border-[#A855F7] shadow-[0_0_35px_rgba(168,85,247,0.75)] bg-[#0C0C10] scale-[1.02]'
                            : 'bg-[#0D0D12]/80 border-white/10 hover:border-[#A855F7]/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.22)]'
                        }`}
                      >
                        <div>
                          {/* Number locator */}
                          <div className="text-sm font-mono text-[#A855F7]/50 mb-6 font-semibold">{svc.number}</div>
                          
                          <h3 className="text-xl font-serif font-light text-white tracking-tight mb-4">
                            {svc.title}
                          </h3>
                          
                          <p className="text-white/40 text-xs leading-relaxed font-sans font-light mb-6">
                            {svc.description}
                          </p>
                        </div>
 
                        {/* Features bullets */}
                        <div className="space-y-2 border-t border-white/5 pt-4">
                          {svc.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center space-x-2 text-[10px] font-mono text-white/40 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

              </div>
            </section>

            {/* CONTACT CTA BAR */}
            <ContactCTA onClick={() => scrollToSection('contact')} />

            {/* 8. DEVELOPMENT PROCESS SECTION */}
            <section id="process" className="py-24 px-6 md:px-12 bg-[#050507] border-t border-white/5">
              <div className="max-w-7xl mx-auto">
                
                <ScrollReveal className="max-w-3xl mb-16 text-left">
                  <span className="text-[10px] font-mono text-[#A855F7] tracking-widest uppercase block mb-3 font-semibold">
                    Strategic Lifecycles
                  </span>
                  <h2 className="text-2xl md:text-4xl font-serif font-light text-white tracking-tight">
                    The High-Performance Development Blueprint
                  </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {processSteps.map((step, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.1} className="h-full">
                      <div 
                        onClick={(e) => handleBoxClick(`process-${idx}`, e)}
                        className={`p-6 rounded-2xl relative h-full cursor-pointer transition-all duration-300 border ${
                          clickedGlowId === `process-${idx}`
                            ? 'border-[#A855F7] shadow-[0_0_30px_rgba(168,85,247,0.65)] bg-[#0C0C10] scale-[1.02]'
                            : 'bg-[#0D0D12]/40 border-white/10 hover:border-[#A855F7]/25 hover:shadow-[0_0_20px_rgba(168,85,247,0.22)]'
                        }`}
                      >
                        <div className="absolute top-4 right-4 text-xs font-mono text-[#A855F7]/30 font-bold">{step.step}</div>
                        
                        <h4 className="text-xs font-mono text-[#A855F7] tracking-widest uppercase mb-3 pr-8 font-semibold">
                          {step.title}
                        </h4>
                        
                        <p className="text-white/40 text-[11px] leading-relaxed font-sans font-light">
                          {step.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>

            {/* CONTACT CTA BAR */}
            <ContactCTA onClick={() => scrollToSection('contact')} />

            {/* 9. SECURE CONTACT FORM SECTION */}
            <section id="contact" className="py-24 px-6 md:px-12 bg-radial from-neutral-900/20 via-transparent to-transparent">
              <div className="max-w-4xl mx-auto">
                <ScrollReveal className="text-center mb-12">
                  <div className="inline-flex items-center space-x-2 font-mono text-[10px] text-[#A855F7] tracking-widest uppercase mb-3 font-semibold">
                    <Laptop className="w-3.5 h-3.5" />
                    <span>SECURE HUB INITIATE discussions</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif font-light text-white tracking-tight mb-4">
                    Let's Build Something Memorable
                  </h2>
                  <p className="text-white/40 text-xs md:text-sm font-sans font-light max-w-xl mx-auto leading-relaxed">
                    I take on a select number of major interactive web applications a month to guarantee flawless design grids, clean types, custom micro-interactions, and blazing fast speeds.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <ContactForm />
                </ScrollReveal>
              </div>
            </section>

            {/* 10. FUTURISTIC COMMAND CENTER LIGHTWEIGHT FOOTER */}
            <footer className="bg-[#050507] border-t border-white/5 py-12 px-6 md:px-12 relative overflow-hidden">
              <div className="max-w-7xl mx-auto">
                
                {/* Status elements dashboard row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
                  
                  {/* Status Indicator */}
                  <div className="border-l border-white/10 pl-4 py-2 space-y-2">
                    <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">LUXY WORK STATUS</div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-mono font-bold tracking-wider text-white">Active & Booking Projects</span>
                    </div>
                  </div>

                  {/* Location Coordinate */}
                  <div className="border-l border-white/10 pl-4 py-2 space-y-2">
                    <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">DEVELOPER WORKSPACE</div>
                    <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">India — Remote Worldwide</div>
                  </div>

                  {/* Typical Response Speed */}
                  <div className="border-l border-white/10 pl-4 py-2 space-y-2">
                    <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">RESPONSE THRESHOLD</div>
                    <div className="text-xs font-mono font-bold text-[#A855F7] uppercase tracking-wider font-semibold">&lt; 12 Hours Guaranteed</div>
                  </div>

                  {/* Core hub links */}
                  <div className="border-l border-white/10 pl-4 py-2 space-y-2 font-mono text-[10px]">
                    <div className="text-[9px] text-white/30 uppercase tracking-widest mb-1.5">HUB ROUTING INSTANCES</div>
                    <div 
                      className="flex space-x-4 text-gray-400"
                      onMouseEnter={() => setCursorHovered(true)}
                      onMouseLeave={() => setCursorHovered(false)}
                    >
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">INSTAGRAM</a>
                      <span className="text-gray-700">|</span>
                      <a href={`https://wa.me/918147730010?text=${encodeURIComponent('Hi luxy, I wanted to discuss a project')}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">WHATSAPP</a>
                    </div>
                  </div>

                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
                  
                  {/* Left branding description */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-sm font-sans font-semibold tracking-widest text-white">LUXY DIGITAL HQ</span>
                    <span className="text-[9px] font-mono text-gray-500 mt-1 uppercase">Bespoke Creative Developer Portfolio v2.0</span>
                  </div>

                  {/* Center live timezone tracker */}
                  <div className="text-center">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">Digital Hub Syncing</span>
                    <div className="text-xs font-mono text-[#A855F7] mt-0.5">{currentTime || 'ONLINE TERMINAL'}</div>
                  </div>

                  {/* Right hand legal copyrights */}
                  <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-2.5">
                    {/* Glowing circular vector monogram brand tag */}
                    <div className="transition-all duration-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.8)] filter">
                      <LuxyLogo size="sm" mode="iconOnly" interactive={true} glow={true} />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">© 2026 LUXY CREATIVE DESIGN. ALL RIGHTS RESERVED.</span>
                    <span className="text-[9px] font-mono text-[#A855F7]/50 mt-0.5 uppercase tracking-wider">No templates, pure programmatic custom experiences.</span>
                  </div>

                </div>

              </div>
            </footer>

            {/* floating WhatsApp button */}
            <WhatsAppButton />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
