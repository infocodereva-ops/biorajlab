'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, QrCode, ExternalLink, Stamp } from 'lucide-react';

const regulatoryData = [
  {
    id: 'nabl',
    code: 'NABL ACCREDITATION',
    title: 'ISO / IEC 17025 Standardized Competence',
    authority: 'National Accreditation Board for Testing and Calibration Laboratories',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85',
    regNo: 'BL-NABL-ISO17025-PUN',
    desc: 'International benchmark for chemical & biological testing laboratories ensuring traceability of calibration, rigorous uncertainty measurement, and legally defensible test reports.',
    parameters: [
      'Calibrated Spectrophotometric Traceability',
      'Sub-PPM Heavy Metal Detection Limits',
      'Inter-Laboratory Proficiency Testing Passed',
      'Tamper-Proof Digital Verification Ready',
    ],
    stat: '100% Precision Calibration',
  },
  {
    id: 'moefcc',
    code: 'MoEFCC RECOGNITION',
    title: 'Environment (Protection) Act, 1986 Compliance',
    authority: 'Ministry of Environment, Forest and Climate Change',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=85',
    regNo: 'BL-MoEFCC-EPA-MH411',
    desc: 'Authorized testing matrix across ambient air, flue gases, industrial effluents, and hazardous soil solid waste adhering to strict Central/State Pollution Control Board guidelines.',
    parameters: [
      'MPCB / CPCB Factory Submission Formats',
      'Stack Emission Isokinetic Sampling Protocols',
      'BOD / COD / TDS Effluent Discharge Limits',
      'On-Site 24x7 Continuous Ambient Air Surveys',
    ],
    stat: 'MPCB Audit Accepted',
  },
  {
    id: 'fssai',
    code: 'FSSAI RECOGNIZED PROTOCOL',
    title: 'Food Safety and Standards Act, 2006 Standards',
    authority: 'Food Safety and Standards Authority of India',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
    regNo: 'BL-FSSAI-FSMS-2026',
    desc: 'Comprehensive nutritional profiling, shelf-life studies, toxic chemical adulteration screening, and microbiological pathogen isolation for packed and agricultural food items.',
    parameters: [
      'Salmonella & E. coli Microbial Assays',
      'Trace Pesticide & Heavy Metal Screening',
      'Nutritional Fact Panel Legal Validation',
      'Food Processing Hygiene Validation Assays',
    ],
    stat: 'Export Safety Benchmark',
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState(regulatoryData[0]);

  return (
    <section 
      id="certifications" 
      className="relative py-24 sm:py-32 overflow-hidden bg-slate-900 text-slate-900 border-t border-slate-200"
    >
      {/* Updated Background Image for Real Accreditation / Quality Control Vibe */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-90"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=90')`,
        }}
      />
      {/* Balanced Light Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-white/75 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-[#0A3F7A]/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7EB327]/15 border border-[#7EB327]/40 text-[#0A3F7A] text-xs font-black uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#7EB327]" />
            <span>STATUTORY AUDIT RECOGNITION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A3F7A] leading-tight">
            National Accreditations & <br />
            <span className="text-[#7EB327]">
              Statutory Quality Vault
            </span>
          </h2>

          <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-bold max-w-2xl mx-auto bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-white/60 shadow-sm">
            Click to inspect each authority benchmark. All test certificates issued by Bioraj Laboratories hold statutory validity for legal audits across India.
          </p>
        </div>

        {/* Vault Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {regulatoryData.map((item) => {
              const isSelected = selected.id === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-6 rounded-3xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white shadow-2xl border-2 border-[#0A3F7A] shadow-[#0A3F7A]/15'
                      : 'bg-white/80 hover:bg-white border-2 border-slate-200/80 shadow-md'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-2.5 bg-[#7EB327]" />
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full ${
                      isSelected 
                        ? 'bg-[#0A3F7A] text-white' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.code}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      REF: {item.id.toUpperCase()}-2026
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0A3F7A] mb-1">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 font-semibold mb-3">
                    {item.authority}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                    <span className="font-bold text-[#7EB327]">{item.stat}</span>
                    <span className={`font-black uppercase flex items-center gap-1 ${
                      isSelected ? 'text-[#0A3F7A]' : 'text-slate-400'
                    }`}>
                      <span>Inspect Vault</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#7EB327]" />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Showcase */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#0A3F7A]/15 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative"
              >
                <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-inner group">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                  <motion.div
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7EB327] to-transparent shadow-[0_0_15px_#7EB327] pointer-events-none"
                  />

                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A3F7A]/85 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                    <Stamp className="w-3.5 h-3.5 text-[#7EB327]" />
                    <span>OFFICIALLY AUDITED STANDARD</span>
                  </div>

                  <div className="absolute bottom-4 right-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center gap-3">
                    <QrCode className="w-8 h-8 text-[#0A3F7A]" />
                    <div>
                      <p className="text-[10px] font-mono font-bold text-slate-500 uppercase">Tamper-Proof ID</p>
                      <p className="text-xs font-mono font-black text-[#0A3F7A]">{selected.regNo}</p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-bold text-[#7EB327] font-mono">// BENCHMARK VERIFIED</p>
                    <h4 className="text-lg font-black">{selected.title}</h4>
                  </div>
                </div>

                <div className="space-y-4 my-6">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                    {selected.desc}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    <p className="text-[10px] font-black uppercase text-[#0A3F7A] tracking-wider">
                      Statutory Compliance Protocols:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selected.parameters.map((param, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800 font-bold">
                          <CheckCircle2 className="w-4 h-4 text-[#7EB327] shrink-0" />
                          <span>{param}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-medium">
                    Accepted by: <strong className="text-[#0A3F7A] font-bold">MPCB, CPCB & Apex Regulatory Tribunals</strong>
                  </div>

                  <a
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0A3F7A] hover:bg-[#0E549E] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Request Audit Dossier</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#7EB327]" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Ticker */}
        <div className="mt-14 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 p-4 shadow-md flex items-center justify-between overflow-x-auto gap-8 text-xs font-bold text-slate-600">
          <span className="text-[#0A3F7A] font-mono shrink-0">STANDARDS ALIGNED:</span>
          <span className="flex items-center gap-1.5 shrink-0 text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-[#7EB327]" /> ISO/IEC 17025:2017
          </span>
          <span className="flex items-center gap-1.5 shrink-0 text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-[#7EB327]" /> EPA (Environment Protection Act) 1986
          </span>
          <span className="flex items-center gap-1.5 shrink-0 text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-[#7EB327]" /> FSSAI Laboratory Protocol 2006
          </span>
          <span className="flex items-center gap-1.5 shrink-0 text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-[#7EB327]" /> CPCB Stack & Ambient Air Guidelines
          </span>
        </div>

      </div>
    </section>
  );
}