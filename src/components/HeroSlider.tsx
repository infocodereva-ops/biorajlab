'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Activity, ArrowRight, Microscope } from 'lucide-react';

const slides = [
  {
    id: 1,
    tag: 'FSSAI & EXPORT QUALITY BENCHMARK',
    category: 'BIOLOGICAL & FOOD SAFETY DIVISION',
    title: 'Precision Food Testing & Microbial Safety Assays',
    subTitle: 'Adulterant Screening • Shelf Life • Nutritional Profiling',
    desc: 'High-sensitivity pathogen isolation (Salmonella, E. coli), sub-ppm pesticide residue detection, and complete nutritional labeling for food manufacturers.',
    bgImg: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=90',
    tagColor: 'text-[#0A3F7A] border-[#7EB327]/60 bg-[#7EB327]/10',
    stats: [
      { label: 'Detection Threshold', value: '< 0.001 ppm' },
      { label: 'Turnaround Time', value: '24-48 Hours' },
      { label: 'Standard Aligned', value: 'FSSAI / ISO 17025' }
    ]
  },
  {
    id: 2,
    tag: 'CPCB & MPCB REGULATORY COMPLIANCE',
    category: 'ENVIRONMENTAL MONITORING WING',
    title: 'Industrial Ambient Air, Stack & Wastewater Testing',
    subTitle: 'Flue Gas Analysis • BOD/COD Digestion • Heavy Metals',
    desc: 'Comprehensive stack emissions sampling, effluent characterization, and continuous ambient air quality reporting for statutory regulatory compliance.',
    bgImg: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=90',
    tagColor: 'text-[#0A3F7A] border-[#0A3F7A]/30 bg-[#0A3F7A]/10',
    stats: [
      { label: 'Stack Parameters', value: 'PM2.5, SOx, NOx' },
      { label: 'Effluent Profiling', value: 'BOD / COD / TDS' },
      { label: 'MoEFCC Audited', value: '100% Compliant' }
    ]
  },
  {
    id: 3,
    tag: 'CSIR-NEERI RESEARCH DIRECTED',
    category: 'ANALYTICAL CHEMISTRY & R&D UNIT',
    title: 'Spectrometry, Organic Solvents & Soil Testing',
    subTitle: 'Assay Purity • Soil Fertility • Pilot Scale Contract R&D',
    desc: 'Founded by Dr. Raju R. Yadav (Ph.D., CSIR-NEERI). High-performance HPLC, AAS instrumentation for active chemical validation and precision soil assays.',
    bgImg: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1920&q=90',
    tagColor: 'text-[#7EB327] border-[#7EB327]/50 bg-white/80',
    stats: [
      { label: 'Instrumentation', value: 'HPLC / AAS / UV-Vis' },
      { label: 'Soil Health Grid', value: 'NPK + Micronutrients' },
      { label: 'Research Backing', value: 'CSIR-NEERI Nagpur' }
    ]
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    startTimer();
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    startTimer();
  };

  const handleDotClick = (idx: number) => {
    setCurrent(idx);
    startTimer();
  };

  const slide = slides[current];

  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 text-slate-800 pt-28 pb-16">
      
      {/* Background Image Slides */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.bgImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Brand Color Aura */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#7EB327]/15 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#0A3F7A]/10 rounded-full blur-3xl pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Content Area */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            <motion.div
              key={`badge-${current}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-black tracking-wider uppercase shadow-sm ${slide.tagColor}`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#7EB327] animate-ping" />
              <span>{slide.tag}</span>
            </motion.div>

            <motion.p
              key={`cat-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#7EB327]"
            >
              // {slide.category}
            </motion.p>

            <motion.div
              key={`title-${current}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-[#0A3F7A]">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-2xl font-black text-[#7EB327]">
                {slide.subTitle}
              </p>
            </motion.div>

            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-700 text-sm sm:text-base max-w-2xl leading-relaxed font-medium"
            >
              {slide.desc}
            </motion.p>

            {/* Metrics */}
            <motion.div
              key={`stats-${current}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-3 pt-1 max-w-xl"
            >
              {slide.stats.map((st, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-2xl bg-white/95 border border-[#0A3F7A]/15 backdrop-blur-md shadow-md">
                  <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-bold">{st.label}</p>
                  <p className="text-xs sm:text-sm font-black text-[#0A3F7A] mt-0.5">{st.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0A3F7A] to-[#0E549E] hover:from-[#0E549E] hover:to-[#0A3F7A] text-white font-black text-sm tracking-wide shadow-xl shadow-[#0A3F7A]/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Initiate Sample Booking</span>
                <ArrowRight className="w-4 h-4 text-[#7EB327]" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#0A3F7A] border-2 border-[#7EB327]/40 font-bold text-sm shadow-md transition-all hover:border-[#7EB327]"
              >
                <Microscope className="w-4 h-4 text-[#7EB327]" />
                <span>View Full Test Directory</span>
              </a>
            </div>

          </div>

          {/* Right Console */}
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              key={`console-${current}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl p-7 bg-white/95 backdrop-blur-2xl border-2 border-[#0A3F7A]/20 shadow-2xl shadow-[#0A3F7A]/10 space-y-4"
            >
              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7EB327] to-transparent shadow-[0_0_12px_#7EB327] pointer-events-none"
              />

              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A3F7A]/10 border border-[#0A3F7A]/20 flex items-center justify-center text-[#0A3F7A]">
                    <Activity className="w-5 h-5 animate-pulse text-[#7EB327]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#0A3F7A] tracking-wide">BIORAJ RADAR</h3>
                    <p className="text-[10px] text-[#7EB327] font-mono font-bold">STATUS: OPERATIONAL</p>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#7EB327] animate-ping" />
              </div>

              <div className="space-y-2.5 py-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex justify-between">
                  <span className="text-slate-500 font-semibold">Calibration:</span>
                  <span className="text-[#0A3F7A] font-extrabold">NABL / ISO 17025</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex justify-between">
                  <span className="text-slate-500 font-semibold">Location:</span>
                  <span className="text-[#7EB327] font-extrabold">Warje, Pune Central Unit</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex justify-between">
                  <span className="text-slate-500 font-semibold">CSIR Guidance:</span>
                  <span className="text-[#0A3F7A] font-extrabold">NEERI Nagpur Mentorship</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex justify-between">
                  <span className="text-slate-500 font-semibold">Sample Reception:</span>
                  <span className="text-[#7EB327] font-bold">Active Today</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-bold">
                <span>Direct Hotline:</span>
                <span className="text-[#0A3F7A] font-black">+91-9420397817</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Carousel controls */}
        <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-6">
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  current === i 
                    ? 'w-12 bg-[#0A3F7A] shadow-md shadow-[#0A3F7A]/25' 
                    : 'w-3 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white border border-slate-200 text-[#0A3F7A] hover:bg-slate-50 shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white border border-slate-200 text-[#0A3F7A] hover:bg-slate-50 shadow-sm transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}