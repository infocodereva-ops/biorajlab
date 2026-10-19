'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, ShieldCheck, Radio, ExternalLink,
  Microscope, Sparkles, CheckCircle2, Award
} from 'lucide-react';

const labDomains = [
  {
    id: 'env',
    code: 'LAB-ENV-01',
    title: 'Atmospheric & Effluent Matrix',
    subtitle: 'Isokinetic Flue Gas Sampling • BOD / COD Closed Digestion',
    instrument: 'Isokinetic Stack Sampler & Atomic Absorption Spectrophotometer',
    detectionLimit: '< 0.001 mg/m³',
    compliance: 'CPCB / MPCB / EPA 1986',
    metrics: [
      { label: 'STACK EMISSIONS', value: 'PM2.5, SO₂, NOₓ, CO' },
      { label: 'EFFLUENT COD/BOD', value: 'Sub-PPM Digestion' },
      { label: 'LEGAL ADMISSIBILITY', value: '100% Audit Defensible' },
    ],
    summary: 'Direct field sampling across Maharashtra with cold-chain transport to ensure zero volatile analyte loss prior to instrument intake.',
  },
  {
    id: 'food',
    code: 'LAB-BIO-02',
    title: 'Food Microbiology & Safety Assays',
    subtitle: 'Pathogen Culturing • FSSAI Label Validation • Mycotoxins',
    instrument: 'Class-100 Sterile Bio-Safety Chambers & Auto-Incubation Units',
    detectionLimit: 'Zero Tolerance (Negative / 25g)',
    compliance: 'FSSAI Act 2006 / Export Guidelines',
    metrics: [
      { label: 'TARGET PATHOGENS', value: 'Salmonella, E. coli, Listeria' },
      { label: 'NUTRITION PANEL', value: 'Proteins, Fats, Energy, Sodium' },
      { label: 'PESTICIDE TRACE', value: 'Sub-ppm GC/MS limits' },
    ],
    summary: 'Accelerated shelf-life profiling and microbial safety screening for FMCG brands, exporters, and agricultural food processors.',
  },
  {
    id: 'chem',
    code: 'LAB-CHE-03',
    title: 'Molecular Chromatography & Soil',
    subtitle: 'HPLC Purity Assays • Karl Fischer Moisture • Soil NPK',
    instrument: 'High Performance Liquid Chromatography (HPLC) & UV-Vis Double Beam',
    detectionLimit: '0.01% Assay Purity',
    compliance: 'ICH Q2(R1) / ICAR / FCO Standards',
    metrics: [
      { label: 'ACTIVE INGREDIENT', value: '99.9% Assay Validation' },
      { label: 'RESIDUAL MOISTURE', value: 'Karl Fischer Volumetric' },
      { label: 'SOIL EDAPHIC GRID', value: 'Macro NPK + Micro Minerals' },
    ],
    summary: 'Advanced chemical research directed under Dr. Raju R. Yadav’s doctoral research methodologies at CSIR-NEERI, Nagpur.',
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(labDomains[0]);

  return (
    <section 
      id="about" 
      className="relative py-24 sm:py-32 overflow-hidden bg-slate-50 text-slate-900 border-t border-slate-200"
    >
      {/* 1. Real Laboratory Testing Equipment Background (Flasks, pipettes, and clinical bench) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-90"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2000&q=95')`,
        }}
      />

      {/* 2. Light Clinical Overlay taaki lab apparatus saaf dikhe aur text clean padha jaye */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/55 to-white/80 pointer-events-none z-0" />

      {/* Lab Blueprint Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A3F7A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#0A3F7A]/20 text-xs font-mono">
          <div className="flex items-center gap-2.5 text-[#0A3F7A] bg-white/95 px-4 py-1.5 rounded-full border border-[#0A3F7A]/20 shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7EB327] opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7EB327]" />
            </span>
            <span className="font-black tracking-wider uppercase">LABORATORY TELEMETRY: ACTIVE</span>
          </div>

          <div className="flex items-center gap-4 text-slate-800 text-[11px] font-bold uppercase tracking-wider bg-white/95 px-4 py-1.5 rounded-full border border-slate-300 shadow-md">
            <span>DIRECTORATE: DR. RAJU R. YADAV (CSIR-NEERI)</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:inline text-[#0A3F7A]">ESTD. SEP 2015 PUNE</span>
          </div>
        </div>

        {/* 2. Executive Title Bar */}
        <div className="pt-10 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-3.5 bg-white/95 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7EB327]/15 border border-[#7EB327]/40 text-[#0A3F7A] text-xs font-mono font-bold tracking-wider">
              <Radio className="w-3.5 h-3.5 text-[#7EB327] animate-pulse" />
              <span>APEX STATUTORY ANALYTICAL SCIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A3F7A] leading-[1.08]">
              Precision Chemistry & <br />
              <span className="text-[#7EB327]">
                Regulatory Compliance Defense
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-3 bg-white/95 p-6 rounded-3xl border border-slate-200 shadow-xl">
            <p className="text-slate-700 text-sm leading-relaxed font-semibold">
              Bioraj Laboratories provides legally defensible chemical, biological, and environmental test reports backed by CSIR-NEERI doctoral research.
            </p>
            <div className="flex items-center gap-2 text-xs font-black text-[#0A3F7A]">
              <ShieldCheck className="w-4 h-4 text-[#7EB327]" />
              <span>MPCB • CPCB • MoEFCC • FSSAI Validated</span>
            </div>
          </div>
        </div>

        {/* 3. Interactive Clean Viewport */}
        <div className="rounded-3xl bg-white/95 border-2 border-[#0A3F7A]/20 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Subtle Green Laser Sweep */}
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7EB327] to-transparent shadow-[0_0_12px_#7EB327] pointer-events-none"
          />

          {/* Mode Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {labDomains.map((dom) => {
                const isActive = activeTab.id === dom.id;
                return (
                  <button
                    key={dom.id}
                    onClick={() => setActiveTab(dom)}
                    className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs font-mono font-black transition-all cursor-pointer flex items-center gap-2.5 ${
                      isActive
                        ? 'bg-[#0A3F7A] text-white shadow-lg shadow-[#0A3F7A]/25 scale-102'
                        : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
                    }`}
                  >
                    <span className={isActive ? 'text-[#7EB327]' : 'text-slate-500'}>{dom.code}</span>
                    <span className="hidden sm:inline font-sans">{dom.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            <div className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7EB327]" />
              <span>SENSITIVITY: {activeTab.detectionLimit}</span>
            </div>
          </div>

          {/* Screen Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Specs */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-mono font-bold text-[#7EB327] uppercase tracking-wider">
                    // ACCREDITED TESTING PROTOCOL
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0A3F7A] mt-1">
                    {activeTab.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-mono mt-1 font-semibold">
                    {activeTab.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {activeTab.summary}
                </p>

                {/* Live Specimen Waveform Display */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 font-mono shadow-inner">
                  <div className="flex items-center justify-between text-[11px] text-slate-600 font-bold">
                    <span>ANALYTICAL INSTRUMENT:</span>
                    <span className="text-[#0A3F7A] font-extrabold">{activeTab.instrument}</span>
                  </div>

                  {/* Dynamic SVG Waveform Animation */}
                  <div className="h-14 w-full flex items-center overflow-hidden relative bg-white rounded-xl border border-slate-200 px-2">
                    <svg className="w-full h-full stroke-[#7EB327] fill-none" viewBox="0 0 500 50">
                      <path
                        d={
                          activeTab.id === 'env'
                            ? 'M0,25 Q40,5 80,25 T160,25 T240,5 T320,40 T400,20 T500,25'
                            : activeTab.id === 'food'
                            ? 'M0,25 Q30,45 60,25 T120,5 T180,45 T240,25 T300,5 T360,40 T420,10 T500,25'
                            : 'M0,25 L80,25 L120,5 L140,45 L160,25 L240,25 L260,2 L280,48 L300,25 L500,25'
                        }
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-200 font-bold">
                    <span>BASELINE RESOLUTION: 0.001</span>
                    <span className="text-[#0A3F7A]">STATUTORY CLEARANCE: {activeTab.compliance}</span>
                  </div>
                </div>

                {/* Metric Bars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {activeTab.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <p className="text-[10px] font-mono text-slate-500 font-bold">{m.label}</p>
                      <p className="text-xs sm:text-sm font-black text-[#0A3F7A] mt-0.5">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Action Dossier */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-slate-200 lg:pl-8">
                
                {/* Director Profile Badge */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0A3F7A] border border-[#7EB327]/40 flex items-center justify-center text-[#7EB327] font-black text-lg shadow-md">
                      DR
                    </div>
                    <div>
                      <h4 className="text-base font-black text-[#0A3F7A]">Dr. Raju R. Yadav</h4>
                      <p className="text-xs text-[#7EB327] font-mono font-bold">Chief Scientific Lead (CSIR-NEERI)</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Direct academic mentorship ensuring all samples are tested with repeatable spectroscopic calibration and zero audit vulnerability.
                  </p>
                </div>

                {/* Direct Action Hub */}
                <div className="space-y-3">
                  <Link
                    href={`/services`}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#0A3F7A] hover:bg-[#0E549E] text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#0A3F7A]/20 hover:scale-102"
                  >
                    <span>View All {activeTab.title} Parameters</span>
                    <ArrowRight className="w-4 h-4 text-[#7EB327]" />
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-50 text-[#0A3F7A] font-bold text-xs uppercase tracking-wider border-2 border-[#7EB327]/50 hover:border-[#7EB327] transition-all shadow-sm"
                  >
                    <span>Request Sample Collection</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#7EB327]" />
                  </Link>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* 4. Bottom Proof Markers */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md">
            <p className="text-2xl sm:text-3xl font-black text-[#0A3F7A]">2015</p>
            <p className="text-[11px] font-mono font-bold uppercase text-slate-500 mt-1">Founding Inception</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md">
            <p className="text-2xl sm:text-3xl font-black text-[#7EB327]">24-48h</p>
            <p className="text-[11px] font-mono font-bold uppercase text-slate-500 mt-1">Express Turnaround</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md">
            <p className="text-2xl sm:text-3xl font-black text-[#0A3F7A]">Sub-PPM</p>
            <p className="text-[11px] font-mono font-bold uppercase text-slate-500 mt-1">Detection Precision</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md">
            <p className="text-2xl sm:text-3xl font-black text-[#7EB327]">100%</p>
            <p className="text-[11px] font-mono font-bold uppercase text-slate-500 mt-1">Legal Defensibility</p>
          </div>
        </div>

      </div>
    </section>
  );
}