'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Award, ShieldCheck, FileCheck2, Sparkles, 
  CheckCircle2, ArrowRight, QrCode, Stamp, 
  ExternalLink, Download, FileText, Check, ShieldAlert
} from 'lucide-react';

const standardsData = [
  {
    id: 'nabl',
    code: 'NABL ISO/IEC 17025',
    title: 'ISO / IEC 17025:2017 Testing Competence',
    authority: 'National Accreditation Board for Testing and Calibration Laboratories',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85',
    regNo: 'BL-NABL-ISO17025-PUN',
    scope: 'Chemical & Biological Testing Matrices',
    overview: 'The international apex standard for technical competence in testing and calibration laboratories. Ensures absolute traceability of instrument calibration, uncertainty calculation, and tamper-proof analytical reporting.',
    keyProtocols: [
      'Spectrophotometers calibrated against NIST traceable reference standards',
      'Continuous Inter-Laboratory Comparison (ILC) and Proficiency Testing (PT)',
      'Sub-PPM and ppb heavy metal detection via AAS spectrophotometry',
      'Standardized uncertainty estimation matrix for each reported analyte',
    ],
    defensibility: 'Legally admissible before national and international statutory bodies, industrial courts, and export tribunals.',
  },
  {
    id: 'moefcc',
    code: 'MoEFCC / EPA 1986',
    title: 'Environment (Protection) Act, 1986 Guidelines',
    authority: 'Ministry of Environment, Forest and Climate Change',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=85',
    regNo: 'BL-MoEFCC-EPA-MH411',
    scope: 'Stack Flue Gases, Ambient Air, Industrial Effluents & Hazardous Waste',
    overview: 'Strict alignment with statutory environmental parameters prescribed by CPCB and State Pollution Control Boards (MPCB). Designed specifically for consent-to-operate renewals and pollution audit clearances.',
    keyProtocols: [
      'Isokinetic sampling methodology adhering to CPCB emission manuals',
      'Continuous 24-hour ambient air particulate monitoring (PM2.5 / PM10)',
      'Effluent digestion and toxicity profiling (BOD, COD, Heavy Metals)',
      'Acoustic decibel surveys for factory boundary compliance audits',
    ],
    defensibility: 'Accepted without objection during formal MPCB / CPCB industrial inspections and factory consent renewals.',
  },
  {
    id: 'fssai',
    code: 'FSSAI REGULATORY PROTOCOL',
    title: 'Food Safety and Standards Act, 2006 Regulations',
    authority: 'Food Safety and Standards Authority of India',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
    regNo: 'BL-FSSAI-FSMS-2026',
    scope: 'Packaged Food, Agri Commodities, Dairy & Water',
    overview: 'Microbiological isolation of foodborne pathogens, toxic chemical adulteration screening, nutritional fact panel verification, and shelf-life stability analysis under sterile class-100 conditions.',
    keyProtocols: [
      'Selective pathogen culturing for Salmonella, E. coli, and S. aureus',
      'Gas and liquid chromatography screening for pesticide residues',
      'Nutritional facts panel verification (Proteins, Fats, Energy, Carbs)',
      'Aflatoxin and toxic chemical contaminant identification',
    ],
    defensibility: 'Valid for export quality certificates, retail product labeling, and mandatory FSSAI statutory submissions.',
  },
];

export default function AccreditationsPage() {
  const [selectedStandard, setSelectedStandard] = useState(standardsData[0]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#7EB327] selection:text-white">
      <Navbar />

      {/* Hero Header - Accreditations & Quality Assurance Image */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-slate-900 border-b border-slate-200">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-90"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=90')` }}
        />
        {/* Light Overlay - Text bilkul saaf padha ja sake bina image ko blur ya wash out kiye */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70 pointer-events-none z-0" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#7EB327]/15 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7EB327]/15 border border-[#7EB327]/40 text-[#0A3F7A] text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#7EB327]" />
            <span>Statutory Compliance & Accreditations</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A3F7A] leading-tight">
            Accreditation Vault & <br />
            <span className="text-[#7EB327]">Regulatory Standards Alignment</span>
          </h1>

          <p className="text-slate-700 text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
            All analytical certificates issued by Bioraj Laboratories hold strict statutory defensibility and align with national apex guidelines for uninterrupted regulatory clearances.
          </p>
        </div>
      </section>

      {/* Standards Interactive Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Selector Tabs */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              {standardsData.map((std) => {
                const isSelected = selectedStandard.id === std.id;
                return (
                  <button
                    key={std.id}
                    onClick={() => setSelectedStandard(std)}
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
                        isSelected ? 'bg-[#0A3F7A] text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {std.code}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        VERIFIED
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0A3F7A] mb-1">
                      {std.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold mb-3">
                      {std.authority}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold">
                      <span className="text-[#7EB327]">{std.scope}</span>
                      <span className={`flex items-center gap-1 ${
                        isSelected ? 'text-[#0A3F7A]' : 'text-slate-400'
                      }`}>
                        <span>Inspect Standards</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#7EB327]" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Standard Vault Panel */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedStandard.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full rounded-3xl bg-white border-2 border-[#0A3F7A]/15 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
                >
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-inner group">
                    <img
                      src={selectedStandard.image}
                      alt={selectedStandard.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A3F7A]/90 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                      <Stamp className="w-3.5 h-3.5 text-[#7EB327]" />
                      <span>STANDARDIZED PROTOCOL</span>
                    </div>

                    <div className="absolute bottom-4 right-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center gap-3">
                      <QrCode className="w-8 h-8 text-[#0A3F7A]" />
                      <div>
                        <p className="text-[10px] font-mono font-bold text-slate-500 uppercase">Verification ID</p>
                        <p className="text-xs font-mono font-black text-[#0A3F7A]">{selectedStandard.regNo}</p>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-xs font-bold text-[#7EB327] font-mono">// STATUTORY VALIDATION</p>
                      <h4 className="text-lg font-black">{selectedStandard.title}</h4>
                    </div>
                  </div>

                  <div className="space-y-4 my-6">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                      {selectedStandard.overview}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4">
                      <p className="text-[10px] font-black uppercase text-[#0A3F7A] tracking-wider">
                        Specific Testing Standards:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedStandard.keyProtocols.map((protocol, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-bold">
                            <CheckCircle2 className="w-4 h-4 text-[#7EB327] shrink-0" />
                            <span>{protocol}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-[#0A3F7A] font-medium">
                      Legal Validity: <strong className="text-[#0A3F7A] font-bold">CPCB, MPCB & Judicial Audit Accepted</strong>
                    </div>

                    <Link
                      href="/contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0A3F7A] hover:bg-[#0E549E] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md"
                    >
                      <span>Request Compliance Dossier</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#7EB327]" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* Legal Assurance Strip */}
      <section className="py-16 bg-[#0A3F7A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black">Facing Statutory Factory Audits or MPCB Inquiries?</h3>
            <p className="text-slate-300 text-sm mt-1">We supply legally sound stack monitoring reports, water discharge dossiers, and acoustic surveys.</p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-[#7EB327] hover:bg-[#6E9C1C] text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-black/20 shrink-0 inline-flex items-center gap-2"
          >
            <span>Request Legal Dossier</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}