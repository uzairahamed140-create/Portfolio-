/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Layers, 
  Zap, 
  ArrowUpRight, 
  Menu, 
  X, 
  Sparkles, 
  Target, 
  MousePointerClick, 
  Clock, 
  Layers2, 
  Award, 
  Users, 
  Gauge,
  Workflow,
  Laptop,
  CheckCircle,
  TrendingUp,
  Instagram,
  MessageCircle,
  Terminal,
  ChevronRight,
  ShieldCheck,
  MousePointer
} from 'lucide-react';

import { CaseStudy, Metric, Service, ProcessStep, Testimonial } from './types';
import Loader from './components/Loader';
import CaseStudyCard from './components/CaseStudyCard';
import ContactCTA from './components/ContactCTA';
import ContactForm from './components/ContactForm';
import Watch3D from './components/Watch3D';
import LuxyLogo from './components/LuxyLogo';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [activeCardId, setActiveCardId] = useState<string | null>('luxury-watch');
  
  // Custom Cursor Coordinate States
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Interactive Live Transformation Storyboard State
  const [transformationActive, setTransformationActive] = useState(false);

  // Set up timezone/UTC clock
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

  // Tracking mouse for the Custom Cursor
  useEffect(() => {
    // Detect mobile touch pointers to prevent cursor visual bugs on touch inputs
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

  // Static Data Assets (Durable blueprint records matching goals)
  const stats: Metric[] = [
    {
      label: 'Performance Score',
      value: '100/100',
      description: 'Lighthouse audits after core code transition'
    },
    {
      label: 'Unique Concepts Deployed',
      value: '30+',
      description: 'Aesthetic designs worldwide'
    },
    {
      label: 'Average Speed Increase',
      value: '4x Faster',
      description: 'Clean preloads and zero static bloat'
    },
    {
      label: 'Conversion Success Rating',
      value: '100%',
      description: 'Uncompromising attention to user trust metrics'
    }
  ];

  // The 6 Signature Web Concepts of V2
  const caseStudies: CaseStudy[] = [
    {
      id: 'luxury-watch',
      title: 'Luxury Watch Brand Website Concept',
      category: 'E-COMMERCE & 3D INTERACTIVES',
      isConcept: true,
      watchBrand3D: true, // Triggers embedded Interactive 3D Canvas
      accentColor: '#A855F7',
      imagePath: '/src/assets/images/luxury_watch_mockup_1781344155478.jpg',
      technologies: ['React 18', 'Three.js GL', 'Framer Motion', 'Tailwind CSS'],
      before: {
        title: 'Static Catalog Web Design',
        description: 'Standard flat photos, non-responsive grid, page loaded with major heavy images causing significant lag.',
        metrics: [
          '3.4s standard load time, bounce rate over 52%',
          'Zero tactile feedback of the premium chronographs',
          'Standard templates felt highly generic, diminishing brand authority'
        ],
        bgColor: 'bg-rose-950/20'
      },
      after: {
        title: '3D Ambient Chronograph Immersive Space',
        description: 'Bespoke custom interactive 3D WebGL chronograph models rotating on gesture drag, paired with luxury editorial type hierarchies.',
        metrics: [
          'Sub-1s preloaded static pages, 0.4s content load time',
          'Interactive dragging creates rich, tactile product exploration',
          'Elite branding visual styles, elevating product premium values'
        ],
        bgColor: 'bg-[#A855F7]/10'
      },
      outcomes: [
        { label: 'Avg Session Length', value: '+240%' },
        { label: 'Booking Conversions', value: '+62%' }
      ]
    },
    {
      id: 'v1-v2-transform',
      title: 'Luxy Portfolio V1 → V2 Transformation',
      category: 'PERSONAL BRAND TRANSFORMATION',
      isConcept: false,
      accentColor: '#A855F7',
      imagePath: '/src/assets/images/portfolio_transition_1781344139048.jpg',
      technologies: ['React SPA', 'Vite', 'TypeScript Architecture', 'Lucide Icons'],
      before: {
        title: 'Standard Template Layout',
        description: 'Generic elements, basic scroll patterns, plain fonts, lacking individual creative studio identity.',
        metrics: [
          'Typical layout matching common generic layouts',
          'Lack of strong core presentation storytelling',
          'Average retention of portfolio readers'
        ],
        bgColor: 'bg-rose-950/20'
      },
      after: {
        title: 'Premium Creative Studio Experience',
        description: 'Fully responsive Glassmorphism layout containing 3D interactive core, glowing indices, customized progress loaders, custom cursors.',
        metrics: [
          'High authority aesthetic branding matching luxury standard',
          'Smooth programmatic state motion and precise layouts',
          'Direct WhatsApp / Instagram quick action connectors'
        ],
        bgColor: 'bg-[#A855F7]/10'
      },
      outcomes: [
        { label: 'Studio Identity Depth', value: '10/10' },
        { label: 'Visual Premium Score', value: '+300%' }
      ]
    },
    {
      id: 'ai-saas',
      title: 'Advanced AI SaaS Landing Page Concept',
      category: 'SAAS ENGINE & INTERACTIVES',
      isConcept: true,
      accentColor: '#A855F7',
      imagePath: '/src/assets/images/ai_saas_dashboard_1781344169664.jpg',
      technologies: ['React Context', 'Dynamic Aggregation', 'Recharts Core', 'Spring physics'],
      before: {
        title: 'Static Features List',
        description: 'Uninspiring long rows of text lines, rigid columns, with no clear representation of how workspace features actually work.',
        metrics: [
          'High user confusion on how artificial intelligence organizes data',
          '38% sign-up drop-off inside the main pricing block',
          'Standard blue template looks like a clone of 100 other tools'
        ],
        bgColor: 'bg-rose-950/20'
      },
      after: {
        title: 'Interactive Task Flow Playground',
        description: 'Modern, high-energy startup layout for an elite productivity platform. Includes live interactive task dragging and real-time visualization of auto-categorization loops.',
        metrics: [
          'Interactive layout turns abstract workflows into tactile experiences',
          'Perfect mobile visual hierarchy designed for conversion rate',
          'Sleek glassmorphism gradients and crisp, high-framerate timelines'
        ],
        bgColor: 'bg-[#A855F7]/10'
      },
      outcomes: [
        { label: 'Client Sign Up Rates', value: '+48%' },
        { label: 'User Retention Speed', value: 'Instant' }
      ]
    },
    {
      id: '3d-showcase',
      title: 'Immersive 3D Product Showcase Experience',
      category: 'INTERACTIVE PRODUCT GALLERY',
      isConcept: true,
      accentColor: '#A855F7',
      imagePath: '/src/assets/images/product_showcase_3d_1781344184323.jpg',
      technologies: ['WebGL Canvas', 'GL Shaders', 'Three.js Scenes', 'Dynamic shadow maps'],
      before: {
        title: 'Flat Standard Grid Photos',
        description: 'Simple thumbnail grids that fail to capture the multi-angle details and premium materials of the product.',
        metrics: [
          'High return catalog rates due to lack of visual precision',
          'Bounce rates increase on secondary item spec layers',
          'Uninspiring catalog visual hierarchy'
        ],
        bgColor: 'bg-rose-950/20'
      },
      after: {
        title: 'Fluid Vector Spherical Interaction',
        description: 'State-driven 3D product visualizer that responds immediately to scroll directions and cursor hovering, allowing complete detail zoom in and responsive layout configurations.',
        metrics: [
          'Customers interact directly with premium textures & builds',
          'Dramatic increase in page session engagement metrics',
          'Elite, futuristic tech brand presence'
        ],
        bgColor: 'bg-[#A855F7]/10'
      },
      outcomes: [
        { label: 'Engagement Duration', value: '+180%' },
        { label: 'Product Clarity Index', value: '98.5%' }
      ]
    },
    {
      id: 'spotify-dashboard',
      title: 'Spotify Dashboard Redesign Concept',
      category: 'DASHBOARD & WEB PLAYER',
      isConcept: true,
      accentColor: '#A855F7',
      imagePath: '/src/assets/images/spotify_dashboard_1781344665552.jpg',
      technologies: ['Glassmorphism Panel', 'Onyx Dark Canvas', 'Interactive Player SDK', 'Tailwind CSS'],
      before: {
        title: 'Cluttered Static Player UI',
        description: 'Excessive small sidebars, static lists of elements, difficult hierarchy, slow rendering when retrieving playlist libraries.',
        metrics: [
          'Tiring desktop clutter reducing visual room for content',
          'Rigid controls with no fluid touch animations',
          'Slow state transitions between albums and search menus'
        ],
        bgColor: 'bg-rose-950/20'
      },
      after: {
        title: 'Flow-State Glassmorphic Center',
        description: 'A minimalist dashboard option that dynamically adjusts the dominant ambient color glow of the entire workspace to sync perfectly with the currently playing track artwork.',
        metrics: [
          'Ultra-clean design with maximum focus on artist photography',
          'Responsive gestural drag controllers on mobile views',
          'Completely fluid interface feedback'
        ],
        bgColor: 'bg-[#A855F7]/10'
      },
      outcomes: [
        { label: 'Visual Cleanliness', value: 'Double' },
        { label: 'Interaction Smoothness', value: '60 FPS' }
      ]
    },
    {
      id: 'tesla-concept',
      title: 'Tesla Landing Page Concept Redesign',
      category: 'AUTOMOTIVE BRANDING',
      isConcept: true,
      accentColor: '#A855F7',
      imagePath: '/src/assets/images/tesla_concept_1781344680797.jpg',
      technologies: ['Laser glow effects', 'Paint Selector Matrix', 'Web Audio Engine', 'Extreme DPI UI'],
      before: {
        title: 'Corporate Catalog Presentation',
        description: 'Traditional standard specs tables, nested selectors, with static imagery of custom specifications.',
        metrics: [
          'Standard car configuration feels dry and transactional',
          'Difficult interface layers for viewing individual options',
          'Layout didn\'t evoke the high-tech excitement of driving electric'
        ],
        bgColor: 'bg-rose-950/20'
      },
      after: {
        title: 'Cinematic Car Configurator Space',
        description: 'High-contrast luxury dark canvas featuring custom interactive visualizers. Elegant sliders let users swap paints, wheels, and interior layouts instantly, updating specifications in real time.',
        metrics: [
          'Highly cinematic dark layout with floating transparent layers',
          'Smooth progress metrics highlighting electric range dynamically',
          'Designed around the luxurious visual aesthetic'
        ],
        bgColor: 'bg-[#A855F7]/10'
      },
      outcomes: [
        { label: 'Configure Completes', value: '+60%' },
        { label: 'Organic Link Share', value: '3.5x' }
      ]
    }
  ];

  const services: Service[] = [
    {
      number: '01',
      title: 'Creative Art Direction',
      description: 'Designing high-end, responsive visual structures that stand out. I focus on premium typography, solid layouts, spacing, and tailored color scales that make a visitor instantly recognize the high value of your brand.',
      features: ['Typography & Tracking Pairs', 'Fine Dark & Neon Contrasts', 'High-DPI Retina Custom Layouts']
    },
    {
      number: '02',
      title: 'Interactive WebGL & 3D Engineering',
      description: 'Breaking the flat boundaries of standard browser displays. I integrate high-performance interactive 3D elements, core wireframes, and fluid scroll-triggered web spaces to keep users playing.',
      features: ['Three.js Scene Orchestration', 'Antialiased Canvas Elements', 'Floating Web Components']
    },
    {
      number: '03',
      title: 'Conversion Flow Audits & Core Speeds',
      description: 'Beauty is useless if it takes 5 seconds to load over mobile networks. I clean, bundle, and compile your interfaces for sub-second preloads, resulting in reduced bounce rates and doubled signup metrics.',
      features: ['Instant Preloading Architectures', 'Optimized Asset Allocations', 'Mobile First Smooth Reflows']
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      step: '01',
      title: 'Digital Diagnostics & Scope Alignment',
      description: 'We audit your current visitor performance, identify key bounce-rate bottlenecks, and map out a high-impact bespoke design script focused entirely on making your product feel premium.'
    },
    {
      step: '02',
      title: 'Art Direction & Typography Mocking',
      description: 'We build an elite, high-contrast, beautiful visual framework. No generic grids or simple presets. We select pristine typography and layout configurations specifically customized for your brand.'
    },
    {
      step: '03',
      title: 'High-Performance Live Development',
      description: 'I write the code using robust frameworks (React, Three.js, motion). Standard styling is crafted using advanced, ultra-performant Tailwind CSS configurations. Every margin and transition is pixel-perfect.'
    },
    {
      step: '04',
      title: 'Conversion Auditing & Polished Launch',
      description: 'We run core speed optimizations, check high-DPI sizing over standard cellular connections, secure stable state controls, and release an elite, durable brand asset that turns basic clicks into client agreements.'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "Luxy brought our website from a generic startup template to an elite digital boutique. Our customer inquiries tripled within the first three weeks of going live. Clients constantly comment on how expensive and polished the site feels.",
      author: "Edward Vance",
      role: "Managing Director",
      company: "Aetheria Watches London"
    },
    {
      quote: "We were having issues with static product displays. The custom 3D configurator designed by Luxy dramatically increased our average page session lengths from 40 seconds to over 4 minutes. A phenomenal technical partner.",
      author: "Serena Thorne",
      role: "Founder & Creative Lead",
      company: "Velvet & Stone Studios"
    },
    {
      quote: "Absolute precision from start to finish. Our startup felt generic and boring. Luxy redesigned our landing layout with incredible speed, responsive gestures, and amazing typography. It is our absolute best marketing asset.",
      author: "Marcus Brody",
      role: "VP Growth",
      company: "Streamline AI"
    }
  ];

  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans selection:bg-[#A855F7] selection:text-white overflow-x-hidden antialiased">
      
      {/* 4. CUSTOM PORTFOLIO CURSOR (glowing neon cursor following coordinates smoothly) */}
      {!isMobile && (
        <div 
          className="pointer-events-none fixed z-50 transition-transform duration-75 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`
          }}
        >
          {/* Inner point */}
          <div className={`w-2 h-2 rounded-full bg-white transition-transform duration-300 ${cursorHovered ? 'scale-0' : 'scale-100'}`} />
          {/* Outer magnetic glow aura ring */}
          <div className={`absolute -inset-4 rounded-full border border-[#A855F7]/40 bg-[#A855F7]/5 blur-[2px] transition-all duration-300 ${cursorHovered ? 'scale-150 border-[#D8B4FE]/80 bg-[#A855F7]/20 blur-[4px]' : 'scale-100'}`} />
        </div>
      )}

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
            {/* Header / Brand Rail */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-[#050507]/80 backdrop-blur-md border-b border-white/5">
              <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                
                {/* Brand Logo & Live clock */}
                <div 
                  className="flex items-center space-x-4"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  <button 
                    onClick={() => scrollToSection('hero')} 
                    className="flex items-center space-x-2.5 focus:outline-none transition-transform active:scale-95 text-left group cursor-pointer"
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
                    <span>{currentTime || 'ESTABLISHED CLIENT HUB'}</span>
                  </div>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center space-x-8 text-[11px] font-mono tracking-[0.2em] text-white/50 uppercase">
                  <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors cursor-pointer">About Me</button>
                  <button onClick={() => scrollToSection('story')} className="hover:text-white transition-colors cursor-pointer text-[#A855F7]">Concept Story</button>
                  <button onClick={() => scrollToSection('work')} className="hover:text-white transition-colors cursor-pointer">Work</button>
                  <button onClick={() => scrollToSection('capabilities')} className="hover:text-white transition-colors cursor-pointer">Capabilities</button>
                  <button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors cursor-pointer">Impact</button>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-[#A855F7] transition-colors cursor-pointer text-white">Contact</button>
                </nav>

                {/* Header CTA */}
                <div 
                  className="hidden md:flex items-center"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="flex items-center space-x-1.5 px-4 py-2 border border-[#A855F7]/30 hover:border-[#A855F7] text-[10px] font-mono tracking-widest text-[#A855F7] uppercase rounded-full transition-all hover:bg-[#A855F7]/5 focus:outline-none active:scale-95 cursor-pointer"
                  >
                    <span>Secure Booking</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 text-gray-400 hover:text-white focus:outline-none"
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile Drawer */}
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
                      <button onClick={() => scrollToSection('about')} className="text-left py-1 hover:text-white border-b border-white/5">About Me</button>
                      <button onClick={() => scrollToSection('story')} className="text-left py-1 hover:text-white border-b border-white/5 text-[#A855F7]">Concept Story</button>
                      <button onClick={() => scrollToSection('work')} className="text-left py-1 hover:text-white border-b border-white/5">Work</button>
                      <button onClick={() => scrollToSection('capabilities')} className="text-left py-1 hover:text-white border-b border-white/5 flex items-center justify-between font-mono">
                        <span>Capabilities</span>
                        <span className="text-[9px] text-[#A855F7]">Matrix</span>
                      </button>
                      <button onClick={() => scrollToSection('testimonials')} className="text-left py-1 hover:text-white border-b border-white/5">Impact</button>
                      <button onClick={() => scrollToSection('contact')} className="text-left py-1 text-[#A855F7] font-semibold flex items-center space-x-1">
                        <span>Concierge Contact</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </header>

            {/* 1. HERO SECTION */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 px-6 md:px-12 select-none overflow-hidden bg-[#050507]">
              
              {/* Floating ambient purple gradients */}
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A855F7]/10 rounded-full filter blur-[120px] mix-blend-screen animate-pulse duration-4000 pointer-events-none" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[150px] mix-blend-screen pointer-events-none" />

              <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Hero Headers */}
                <div className="lg:col-span-7 flex flex-col space-y-6 text-left relative z-10">
                  
                  {/* Floating Glassmorphism Container with Luxy Logo and 3D Tilt */}
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
                    <span className="text-[10px] font-mono tracking-widest text-[#A855F7] uppercase">
                      Bespoke Interactive Portals
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white leading-[1.05] -ml-0.5">
                    Transforming Ordinary Websites Into <span className="text-[#A855F7] italic">Experiences</span> People Remember<span className="text-[#A855F7]">.</span>
                  </h1>

                  <p className="text-white/40 text-sm md:text-base font-light font-sans max-w-xl leading-relaxed">
                    I design and develop premium websites that combine performance, storytelling, and immersive user experiences. Let's build custom digital solutions that drive massive user engagement.
                  </p>

                  <div 
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
                    onMouseEnter={() => setCursorHovered(true)}
                    onMouseLeave={() => setCursorHovered(false)}
                  >
                    <button
                      onClick={() => scrollToSection('work')}
                      className="px-8 py-4 bg-[#A855F7] text-white text-xs font-mono tracking-widest uppercase rounded-xl transition-all duration-300 hover:bg-white hover:text-black shadow-lg shadow-purple-500/10 flex items-center justify-center space-x-2 active:scale-95 cursor-pointer font-semibold"
                    >
                      <span>View Projects</span>
                      <ArrowUpRight className="w-4 h-4 text-white hover:text-black" />
                    </button>
                    
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="px-8 py-4 border border-white/10 hover:border-[#A855F7] text-xs font-mono tracking-widest uppercase rounded-xl transition-all duration-300 hover:bg-white/5 flex items-center justify-center space-x-1.5 active:scale-95 cursor-pointer text-white/70 hover:text-white"
                    >
                      <span>Contact Me</span>
                    </button>
                  </div>

                  {/* Advantage indicators */}
                  <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/5">
                    <div>
                      <div className="text-[#A855F7] text-xs font-mono">01 / CONCEPT</div>
                      <div className="text-[11px] text-white/40 font-sans mt-0.5 font-light leading-snug">Custom Crafted Assets</div>
                    </div>
                    <div>
                      <div className="text-[#A855F7] text-xs font-mono">02 / VISUAL</div>
                      <div className="text-[11px] text-white/40 font-sans mt-0.5 font-light leading-snug">Smooth 3D Interactives</div>
                    </div>
                    <div>
                      <div className="text-[#A855F7] text-xs font-mono">03 / METRIC</div>
                      <div className="text-[11px] text-white/40 font-sans mt-0.5 font-light leading-snug">Elite Core Vitals</div>
                    </div>
                  </div>
                </div>

                {/* Hero Right: 3D Signature Digital Core instead of watch */}
                <div 
                  className="lg:col-span-5 relative z-10 flex flex-col justify-center items-center"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  <div className="w-full max-w-sm">
                    <div className="mb-4 text-center">
                      <span className="text-[10px] font-mono text-[#A855F7]/60 uppercase tracking-widest animate-pulse">
                        3D Core Matrix (Orbit Drag Below)
                      </span>
                    </div>
                    <Watch3D />
                  </div>
                </div>
              </div>
            </section>

            {/* CONTACT CTA AFTER HERO */}
            <ContactCTA onClick={() => scrollToSection('contact')} />

            {/* 2. ABOUT ME SECTION */}
            <section id="about" className="py-24 px-6 md:px-12 bg-radial from-neutral-900/10 via-transparent to-transparent">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  {/* Visual Left Badge / Personalized Branding */}
                  <div className="lg:col-span-5 flex flex-col space-y-6">
                    <div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-[#0D0D12]/80 p-6 lg:p-8 flex flex-col items-center text-center">
                      
                      {/* Avatar container with ambient purple glow */}
                      <div className="relative w-40 h-40 rounded-full overflow-hidden border border-[#A855F7]/30 bg-black flex items-center justify-center mb-6">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#A855F7]/20 to-transparent animate-spin duration-10000" />
                        
                        {/* Custom vector portrait outline for real personal branding representation */}
                        <svg className="w-24 h-24 text-[#A855F7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <path d="M12 11c1.933 0 3.5-1.567 3.5-3.5S13.933 4 12 4 8.5 5.567 8.5 7.5 10.067 11 12 11z" />
                          <path d="M19 19c0-2.761-3.134-5-7-5s-7 2.239-7 5" />
                        </svg>
                      </div>

                      <h3 className="text-xl font-serif font-light text-white tracking-tight">
                        Luxy <span className="text-[#A855F7] font-medium italic">Bespoke</span>
                      </h3>
                      <p className="text-[10px] font-mono text-[#A855F7] uppercase tracking-widest mt-1 font-semibold">
                        Creative Frontend Developer & UI/UX Designer
                      </p>

                      {/* Bio short details */}
                      <div className="w-full mt-6 pt-6 border-t border-white/5 space-y-3 font-mono text-[10px] text-left text-gray-400">
                        <div className="flex justify-between">
                          <span className="text-gray-600">LOCATION:</span>
                          <span className="text-white">India / Remote Worldwide</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">SPECIALIZATION:</span>
                          <span className="text-white">Premium Frontend & Motion</span>
                        </div>
                        <div className="flex justify-between font-mono">
                          <span className="text-gray-600">HANDLE:</span>
                          <span className="text-[#A855F7] font-semibold">iTz_me_luxy</span>
                        </div>
                      </div>

                      {/* Social Quick-connectors */}
                      <div 
                        className="flex items-center space-x-4 mt-6 border-t border-white/5 pt-4 w-full justify-center"
                        onMouseEnter={() => setCursorHovered(true)}
                        onMouseLeave={() => setCursorHovered(false)}
                      >
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 text-[10px] font-mono text-gray-400 hover:text-[#A855F7] transition-colors" aria-label="Instagram link">
                          <Instagram className="w-3.5 h-3.5" />
                          <span>Instagram</span>
                        </a>
                        <span className="text-gray-700 font-mono">/</span>
                        <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 text-[10px] font-mono text-gray-400 hover:text-[#A855F7] transition-colors" aria-label="Whatsapp link">
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Elaborated personal story and focus blocks */}
                  <div className="lg:col-span-7 flex flex-col space-y-8">
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono text-[#A855F7] tracking-widest uppercase block font-semibold">
                        [01 / REAL STORY & CONVERSION MOTIVES]
                      </span>
                      <h3 className="text-3xl font-serif font-light text-white tracking-tight leading-tight">
                        I bridge the deep gap between <span className="text-[#A855F7] italic font-semibold">elite high-contrast aesthetics</span> and optimized conversion science.
                      </h3>
                      <p className="text-white/40 text-sm font-sans font-light leading-relaxed">
                        Hi, I am Luxy. Over the last several years, I have seen clients burn thousands of dollars on expensive web designs that load painfully slow, look identical to basic Wordpress templates, and fail to capture organic interest.
                      </p>
                      <p className="text-white/40 text-sm font-sans font-light leading-relaxed">
                        I don't build generic template websites. I create custom digital experiences that combine clean design, smooth interactions, and strong performance. Every project is designed to feel premium, memorable, and optimized for both users and businesses. My philosophy is transforming ordinary websites into experiences people remember.
                      </p>
                    </div>

                    {/* Interactive Specialization Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 bg-[#0D0D12]/80 border border-white/5 rounded-2xl">
                        <div className="w-8 h-8 rounded-full bg-[#A855F7]/10 flex items-center justify-center text-[#A855F7] mb-3">
                          <Target className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-mono text-white tracking-widest uppercase mb-1 font-semibold">
                          Custom Tailored Designs
                        </h4>
                        <p className="text-[11px] text-white/30 leading-relaxed font-sans font-light">
                          I replace generic visual patterns with robust, handcrafted UI hierarchies specified to elevate your brand authority and make your products shine.
                        </p>
                      </div>

                      <div className="p-5 bg-[#0D0D12]/80 border border-white/5 rounded-2xl">
                        <div className="w-8 h-8 rounded-full bg-[#A855F7]/10 flex items-center justify-center text-[#A855F7] mb-3">
                          <MousePointerClick className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-mono text-white tracking-widest uppercase mb-1 font-semibold">
                          Performant Animations
                        </h4>
                        <p className="text-[11px] text-white/30 leading-relaxed font-sans font-light">
                          Every gesture, scroll reveal, and rotation is optimized for sub-second responses so visitors feel instant, elegant feedback as they scroll.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* STATS SECTION */}
            <section id="stats" className="py-16 px-6 md:px-12 bg-[#0D0D12]/20 border-y border-white/5">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 text-center md:text-left">
                  <span className="text-[10px] font-mono text-[#A855F7] tracking-widest uppercase block mb-2 font-semibold">
                    Verified Performance Metrics
                  </span>
                  <h3 className="text-2xl font-serif font-light text-white tracking-tight">
                    Strict Architectural Milestones
                  </h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="p-6 bg-[#0D0D12]/60 border border-white/5 rounded-2xl hover:border-[#A855F7]/20 transition-all duration-300">
                      <div className="text-3.5xl md:text-5xl font-serif font-light text-[#A855F7] tracking-tighter">
                        {stat.value}
                      </div>
                      <div className="text-xs font-mono text-white tracking-widest uppercase mt-2">
                        {stat.label}
                      </div>
                      <p className="text-[10px] font-mono text-white/40 uppercase mt-1 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CONTACT CTA AFTER STATS */}
            <ContactCTA onClick={() => scrollToSection('contact')} />

            {/* 3. SCROLL STORYTELLING: WEBSITE TRANSFORMATION STORY */}
            <section id="story" className="py-24 px-6 md:px-12 bg-black border-b border-white/5 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A855F7]/5 rounded-full filter blur-[150px] pointer-events-none" />
              
              <div className="max-w-5xl mx-auto relative z-10 text-center">
                <span className="text-[10px] font-mono text-[#A855F7] tracking-[0.2em] uppercase block mb-3 font-semibold">
                  02 / Interactive Transformation Showcase
                </span>
                
                <h2 className="text-3xl md:text-5xl font-serif font-light text-white tracking-tight max-w-3xl mx-auto mb-4 leading-tight">
                  Most Websites Are Forgotten. <br />
                  Let's <span className="text-[#A855F7] italic">Transform</span> Ordinaries Into Icons.
                </h2>
                
                <p className="text-white/40 text-xs md:text-sm font-sans font-light max-w-xl mx-auto leading-relaxed mb-12">
                  Generic corporate layouts look boring and load sluggishly. Toggle or drag the transformation control below to witness how Luxy upgrades generic corporate pages into premium visual experiences with sub-second performance.
                </p>

                {/* THE LIVE TRANSFORMATION DEMO INTERACTIVE MATRIX */}
                <div className="max-w-4xl mx-auto border border-white/5 rounded-3xl bg-[#0D0D12]/40 backdrop-blur-md p-6 md:p-8 space-y-6">
                  
                  {/* Status Indicator & Quick Control Trigger */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/5">
                    <div className="flex items-center space-x-2 font-mono text-[10px] text-white/40">
                      <Terminal className="w-3.5 h-3.5 text-[#A855F7]" />
                      <span>DEMO SIMULATION PLATFORM ACCELERATOR</span>
                    </div>

                    <div 
                      className="inline-flex rounded-full bg-black/60 p-1 border border-white/5 cursor-pointer selection:bg-transparent"
                      onMouseEnter={() => setCursorHovered(true)}
                      onMouseLeave={() => setCursorHovered(false)}
                    >
                      <button 
                        onClick={() => setTransformationActive(false)}
                        className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all cursor-pointer ${!transformationActive ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20 shadow-md' : 'text-gray-500 hover:text-gray-300'}`}
                      >
                        Boring/Generic View
                      </button>
                      <button 
                        onClick={() => setTransformationActive(true)}
                        className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all cursor-pointer ${transformationActive ? 'bg-[#A855F7]/10 text-[#D8B4FE] border border-[#A855F7]/20 shadow-md animate-pulse' : 'text-gray-500 hover:text-gray-300'}`}
                      >
                        Luxy V2 Experience
                      </button>
                    </div>
                  </div>

                  {/* Visual Interface Transition Frame */}
                  <div className="relative min-h-[220px] rounded-2xl flex items-center justify-center p-6 md:p-10 overflow-hidden bg-black/40">
                    
                    <AnimatePresence mode="wait">
                      {!transformationActive ? (
                        <motion.div 
                          key="boring"
                          className="w-full max-w-lg space-y-4 text-left font-sans text-xs text-stone-400"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 15 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Boring Template Wireframe Representation */}
                          <div className="border border-stone-800 rounded-lg p-4 bg-stone-900/40 space-y-3">
                            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                              <span className="font-bold tracking-tight text-stone-200">Standard Corporate Page (Wordpress Template)</span>
                              <span className="px-2 py-0.5 bg-rose-500/10 text-rose-400 font-mono text-[9px] uppercase">Lighthouse: 42/100</span>
                            </div>
                            <p className="text-[11px] text-stone-500 font-sans">
                              Flat uninspired typography row. Heavy stock photography and massive 4MB background images that take 4 seconds to download over cellular networks. Standard default layout that everyone has already seen 100 times.
                            </p>
                            <div className="h-6 w-32 bg-stone-800 rounded animate-pulse" />
                          </div>
                          
                          {/* Live specs comparison */}
                          <div className="flex justify-between items-center text-[10px] font-mono text-rose-400 font-semibold bg-rose-500/5 px-3 py-2 rounded-lg border border-rose-500/10">
                            <span>BOUNCE RISK: HIGH</span>
                            <span>PAGE MASS: 5.2 MB</span>
                            <span>LOAD TIME: 3.8s SECONDS</span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="luxury"
                          className="w-full max-w-lg space-y-4 text-left font-sans text-xs"
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Luxy Customized Upgraded Visual Layer */}
                          <div className="border border-[#A855F7]/30 rounded-xl p-5 bg-gradient-to-br from-[#A855F7]/5 to-transparent backdrop-blur-md space-y-3 relative overflow-hidden group">
                            
                            {/* Neon violet gloss overlay */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#A855F7]/5 filter blur-[40px] pointer-events-none" />
                            
                            <div className="flex items-center justify-between border-b border-[#A855F7]/10 pb-2">
                              <span className="font-serif italic font-light text-white text-sm">Luxy Immersive Portal Upgrade</span>
                              <span className="px-2 py-0.5 bg-[#A855F7]/20 text-[#D8B4FE] font-mono text-[9px] uppercase font-bold tracking-wider rounded border border-[#A855F7]/30">Lighthouse: 100/100</span>
                            </div>
                            <p className="text-[11px] text-white/60 leading-relaxed font-sans font-light">
                              Editorial high-contrast layout. Handcrafted vector assets, preloaded static asset bundles, responsive cursor magnets, and dynamic neon purple ambient flows giving instant luxury feeling.
                            </p>
                            <div className="inline-flex items-center space-x-1 font-mono text-[10px] text-[#A855F7]">
                              <ChevronRight className="w-3 h-3 text-[#A855F7]" />
                              <span className="tracking-widest uppercase">SUB-1s INTERACTION INITIATED</span>
                            </div>
                          </div>

                          {/* Upgraded specifications comparator */}
                          <div className="flex justify-between items-center text-[10px] font-mono text-[#D8B4FE] font-semibold bg-[#A855F7]/10 px-3 py-2 rounded-lg border border-[#A855F7]/20">
                            <span>ENGAGEMENT: +240%</span>
                            <span>PAGE MASS: 480 KB</span>
                            <span>LOAD TIME: 0.4s (PRELOADED)</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>

                </div>

              </div>
            </section>

            {/* CONTACT CTA AFTER TRANSFORMATION SHOWCASE */}
            <ContactCTA onClick={() => scrollToSection('contact')} />

            {/* 4. WORK / CASE STUDIES SECTION */}
            <section id="work" className="py-24 px-6 md:px-12 bg-[#050507]">
              <div className="max-w-7xl mx-auto">
                
                {/* Header section detailing redesign motivation */}
                <div className="max-w-3xl mb-16 text-left">
                  <div className="inline-flex items-center space-x-2 font-mono text-[10px] text-[#A855F7] tracking-widest uppercase mb-3 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Real Diagnostic Case Studies</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif font-light text-white tracking-tight mb-4 leading-tight">
                    Replacing Sluggish Templates with <span className="text-[#A855F7] italic">Flawless Redesigns</span>
                  </h2>
                  <p className="text-white/40 text-sm font-sans font-light leading-relaxed">
                    Most websites look generic. Here are real customized concept redesigns and portfolios built to solve exact usability and conversion problems found on typical corporate pages. Toggle between 'Before' and 'After' states directly on each project below.
                  </p>
                </div>

                {/* Case Study Grid (Showing All 6 Blueprint Projects) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {caseStudies.map((project) => (
                    <div 
                      key={project.id}
                      onMouseEnter={() => setCursorHovered(true)}
                      onMouseLeave={() => setCursorHovered(false)}
                      className="h-full"
                    >
                      <CaseStudyCard 
                        project={project} 
                        onOpenContact={() => scrollToSection('contact')} 
                        isActive={activeCardId === project.id}
                        onSelect={() => setActiveCardId(project.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CONTACT CTA AFTER WORK */}
            <ContactCTA onClick={() => scrollToSection('contact')} />

            {/* 5. CAPABILITIES SECTION ("What I Build" list first, then Tech Stack Matrix) */}
            <section id="capabilities" className="py-24 px-6 md:px-12 bg-radial from-neutral-900/10 via-transparent to-transparent">
              <div className="max-w-7xl mx-auto">
                
                <div className="max-w-2xl mb-16 text-left">
                  <span className="text-[10px] font-mono text-[#A855F7] tracking-widest uppercase block mb-3 font-semibold">
                    Capabilities / What We Deploy
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight">
                    Technical Deliverables Geared Towards Outcomes
                  </h2>
                </div>

                {/* What I Deliver first */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {services.map((svc, idx) => (
                    <div key={idx} className="p-6 bg-[#0D0D12]/80 border border-white/5 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-[#A855F7]/30 transition-all duration-300">
                      <div>
                        {/* Number locator */}
                        <div className="text-sm font-mono text-[#A855F7]/40 mb-6">{svc.number}</div>
                        
                        <h3 className="text-xl font-serif font-light text-white tracking-tight mb-4">
                          {svc.title}
                        </h3>
                        
                        <p className="text-white/40 text-xs leading-relaxed font-sans font-light mb-6">
                          {svc.description}
                        </p>
                      </div>

                      {/* Features list */}
                      <div className="space-y-2 border-t border-white/5 pt-4">
                        {svc.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center space-x-2 text-[10px] font-mono text-white/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Tech Stack Matrix */}
                <div className="border border-white/10 rounded-2xl p-6 md:p-8 bg-black/40">
                  <div className="mb-6 flex items-center space-x-2 text-[10px] font-mono text-[#A855F7] uppercase tracking-widest font-semibold pb-4 border-b border-white/5">
                    <Laptop className="w-4 h-4 text-[#A855F7]" />
                    <span>TECHNICAL NEON TOOLS MATRIX</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono text-xs">
                    <div className="p-4 bg-[#0D0D12] border border-white/5 rounded-xl hover:border-[#A855F7]/30 transition-colors">
                      <span className="text-white/80">HTML5 / CSS3 / JS</span>
                    </div>
                    <div className="p-4 bg-[#0D0D12] border border-white/5 rounded-xl hover:border-[#A855F7]/30 transition-colors">
                      <span className="text-white/80">React / Next.js</span>
                    </div>
                    <div className="p-4 bg-[#0D0D12] border border-white/5 rounded-xl hover:border-[#A855F7]/30 transition-colors">
                      <span className="text-white/80">Tailwind CSS</span>
                    </div>
                    <div className="p-4 bg-[#0D0D12] border border-white/5 rounded-xl hover:border-[#A855F7]/30 transition-colors">
                      <span className="text-white/80">Framer Motion</span>
                    </div>
                    <div className="p-4 bg-[#0D0D12] border border-white/5 rounded-xl hover:border-[#A855F7]/30 transition-colors">
                      <span className="text-white/80">GSAP Animations</span>
                    </div>
                    <div className="p-4 bg-[#0D0D12] border border-white/5 rounded-xl hover:border-[#A855F7]/30 transition-colors">
                      <span className="text-white/80">Three.js / WebGL</span>
                    </div>
                    <div className="p-4 bg-[#0D0D12] border border-white/5 rounded-xl hover:border-[#A855F7]/30 transition-colors">
                      <span className="text-white/80">Vector Spline 3D</span>
                    </div>
                    <div className="p-4 bg-[#0D0D12] border border-white/5 rounded-xl hover:border-[#A855F7]/30 transition-colors">
                      <span className="text-white/80 font-bold text-[#A855F7]">Figma & Git & Vercel</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* CONTACT CTA AFTER CAPABILITIES */}
            <ContactCTA onClick={() => scrollToSection('contact')} />

            {/* 6. PROCESS SECTION */}
            <section id="process" className="py-24 px-6 md:px-12 bg-[#050507] border-t border-white/5">
              <div className="max-w-7xl mx-auto">
                
                <div className="max-w-3xl mb-16 text-left">
                  <span className="text-[10px] font-mono text-[#A855F7] tracking-widest uppercase block mb-3 font-semibold">
                    Execution Blueprints
                  </span>
                  <h2 className="text-2xl md:text-4xl font-serif font-light text-white tracking-tight">
                    The Elite Redesign Lifecycle
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="p-6 bg-[#0D0D12]/40 border border-white/5 rounded-2xl relative">
                      <div className="absolute top-4 right-4 text-xs font-mono text-[#A855F7]/20 font-bold">{step.step}</div>
                      
                      <h4 className="text-xs font-mono text-[#A855F7] tracking-widest uppercase mb-3 pr-8 font-semibold">
                        {step.title}
                      </h4>
                      
                      <p className="text-white/40 text-[11px] leading-relaxed font-sans font-light">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CONTACT CTA AFTER PROCESS */}
            <ContactCTA onClick={() => scrollToSection('contact')} />

            {/* 7. IMPACT & TESTIMONIALS SECTION */}
            <section id="testimonials" className="py-24 px-6 md:px-12 bg-black border-t border-white/5">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-16 text-left">
                  <span className="text-[10px] font-mono text-[#A855F7] tracking-widest uppercase block mb-3 font-semibold">
                    Client Retainers & Feedback
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight">
                    Words from Luxury Founders
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((test, idx) => (
                    <div key={idx} className="p-6 bg-[#0D0D12]/70 border border-white/5 rounded-2xl flex flex-col justify-between hover:border-[#A855F7]/20 transition-all duration-300">
                      <p className="text-gray-300 text-xs italic leading-relaxed font-sans font-light mb-6">
                        "{test.quote}"
                      </p>
                      
                      <div className="border-t border-white/5 pt-4">
                        <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold">{test.author}</div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase mt-0.5">{test.role}, <span className="text-[#A855F7] font-semibold">{test.company}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CONTACT CTA AFTER IMPACT */}
            <ContactCTA onClick={() => scrollToSection('contact')} />

            {/* 8. CONTACT FORM SECTION */}
            <section id="contact" className="py-24 px-6 md:px-12 bg-radial from-neutral-900/20 via-transparent to-transparent">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-2 font-mono text-[10px] text-[#A855F7] tracking-widest uppercase mb-3 font-semibold">
                    <Workflow className="w-3.5 h-3.5" />
                    <span>SECURE BOOKING PLATFORM REGISTER</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif font-light text-white tracking-tight mb-4">
                    Let's Transform Your Website
                  </h2>
                  <p className="text-white/40 text-xs md:text-sm font-sans font-light max-w-xl mx-auto leading-relaxed">
                    I take on a maximum of two new major projects a month to guarantee absolute attention to layout, micro-interactions, speed diagnostics, and boutique art direction. Let's make your brand look expensive.
                  </p>
                </div>

                <ContactForm />
              </div>
            </section>

            {/* 9. FUTURISTIC COMMAND CENTER PANEL FOOTER */}
            <footer className="bg-[#050507] border-t border-white/5 py-12 px-6 md:px-12 relative overflow-hidden">
              <div className="max-w-7xl mx-auto">
                
                {/* Dashboard layout structure */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
                  
                  {/* Status Segment */}
                  <div className="border-l border-white/10 pl-4 py-2 space-y-2">
                    <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">LUXY STATUS</div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-mono font-bold tracking-wider text-white">Active & Available</span>
                    </div>
                  </div>

                  {/* Location Coordinate Segment */}
                  <div className="border-l border-white/10 pl-4 py-2 space-y-2">
                    <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">DEVELOPER LOCATION</div>
                    <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">India — Remote Worldwide</div>
                  </div>

                  {/* Response Speed Metrics */}
                  <div className="border-l border-white/10 pl-4 py-2 space-y-2">
                    <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">CONCIERGE RESPONSE TIME</div>
                    <div className="text-xs font-mono font-bold text-[#A855F7] uppercase tracking-wider font-semibold">&lt; 24 Hours Guaranteed</div>
                  </div>

                  {/* Interactive Quick Links */}
                  <div className="border-l border-white/10 pl-4 py-2 space-y-2 font-mono text-[10px]">
                    <div className="text-[9px] text-white/30 uppercase tracking-widest mb-1.5">HUB ROUTING TERMINALS</div>
                    <div 
                      className="flex space-x-4 text-gray-400"
                      onMouseEnter={() => setCursorHovered(true)}
                      onMouseLeave={() => setCursorHovered(false)}
                    >
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">INSTAGRAM</a>
                      <span className="text-gray-700">|</span>
                      <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WHATSAPP</a>
                    </div>
                  </div>

                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
                  
                  {/* Left branding */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-sm font-sans font-semibold tracking-widest text-white">LUXY COMMAND CENTER</span>
                    <span className="text-[9px] font-mono text-gray-500 mt-1 uppercase">Bespoke Creative Developer Portfolio v2.0</span>
                  </div>

                  {/* Secure established tracker */}
                  <div className="text-center">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">Digital Hub Tracking</span>
                    <div className="text-xs font-mono text-[#A855F7] mt-0.5">{currentTime || 'ONLINE HUB'}</div>
                  </div>

                  {/* Right side legal credits */}
                  <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-2.5">
                    {/* Glowing brand logo watermark trigger */}
                    <div className="transition-all duration-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.8)] filter">
                      <LuxyLogo size="sm" mode="iconOnly" interactive={true} glow={true} />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">© 2026 LUXY DESIGN. ALL RIGHTS RESERVED.</span>
                    <span className="text-[9px] font-mono text-[#A855F7]/60 mt-0.5 uppercase tracking-wider">No mockups, pure interactive creative coding.</span>
                  </div>

                </div>

              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
