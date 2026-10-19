'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, ArrowRight, Activity, Microscope, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/content';

export default function Hero() {
  const stats = [
    { label: 'Years of Excellence', value: '9+' },
    { label: 'Specialized Test Domains', value: '5+' },
    { label: 'CSIR-NEERI Founded', value: 'Ph.D.' },
    { label: 'Quality Precision', value: '100%' },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />
        <div className="absolute top-20 right-10 w-[420px] h-[420px] bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-emerald-100/60 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Main Copy & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified Analytical & Testing Laboratory</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Accurate, Reliable & Certified <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Laboratory Testing
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Founded by <span className="font-semibold text-slate-800">Dr. Raju R. Yadav</span> (CSIR-NEERI, Nagpur). 
              Delivering high-accuracy testing solutions across Environmental Monitoring, Soil & Agriculture, Food Safety, and Chemicals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request Sample Testing</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm transition-all"
              >
                <span>Explore 5 Key Services</span>
              </a>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>NABL & MoEFCC Standard Compliance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Rapid Turnaround Time</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Biotech Glassmorphism Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Central Glowing Card */}
              <div className="relative bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-900/10 space-y-6">
                
                {/* Header inside card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                      <Microscope className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-slate-900">Bioraj Analytical Unit</h2>
                      <p className="text-xs text-slate-500">Pune Research & Testing Facility</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Operational
                  </span>
                </div>

                {/* Service Bullet Pills */}
                <div className="space-y-3">
                  {[
                    'Ambient Air & Stack Emission Testing',
                    'Wastewater & Drinking Water Analysis',
                    'Soil Fertility & Agricultural Nutrients',
                    'Food Safety & Nutritional Profiling',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/80 hover:bg-emerald-50/60 transition-colors border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs sm:text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Founder Note Pill */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-emerald-700 shadow-sm shrink-0 font-bold text-xs">
                    CSIR
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-slate-900">Scientific Leadership</p>
                    <p className="text-slate-600">Guidance backed by NEERI Doctorate Research</p>
                  </div>
                </div>

              </div>

              {/* Floating Stat Badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -top-5 -left-5 bg-white border border-slate-100 rounded-2xl p-3 shadow-xl items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Standards</p>
                  <p className="text-xs font-bold text-slate-800">ISO & Regulatory Align</p>
                </div>
              </motion.div>

              {/* Floating Stat Badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -bottom-5 -right-5 bg-white border border-slate-100 rounded-2xl p-3 shadow-xl items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Reports</p>
                  <p className="text-xs font-bold text-slate-800">High Precision Assays</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Key Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}