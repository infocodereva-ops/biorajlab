'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Award, ShieldCheck, Microscope, CheckCircle2, 
  ArrowRight, Building2, Sparkles, GraduationCap, 
  Target, Eye, Cpu, Users, FileCheck2, FlaskConical,
  Clock, MapPin, Check
} from 'lucide-react';
import { siteConfig } from '@/data/content';

export default function AboutPage() {
  const milestones = [
    { year: 'Sep 2015', title: 'Foundation & Inception', desc: 'Dr. Raju R. Yadav (Ph.D., CSIR-NEERI) founded Bioraj Laboratories in Pune with a focused vision for environmental analytical compliance.' },
    { year: '2017', title: 'Laboratory Expansion', desc: 'Introduced high-sensitivity spectrophotometry and expanded capabilities into industrial effluent, stack air sampling, and heavy metal detection.' },
    { year: '2020', title: 'Food & Agricultural Wing', desc: 'Launched specialized microbial pathogen assays and FSSAI-aligned food nutritional profiling alongside soil fertility matrices.' },
    { year: '2023 - Present', title: 'Contract R&D & Apex Benchmarking', desc: 'Operating advanced instrumentation suites delivering legally defensible reports accepted across CPCB, MPCB, MoEFCC, and statutory audit bodies.' },
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Our Mission',
      desc: 'To provide legally defensible, sub-ppm analytical precision that empowers industries to meet statutory compliances with zero regulatory friction.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      desc: 'To stand as India’s apex trusted laboratory in environmental monitoring, food microbial safety, and advanced chemical research.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Policy',
      desc: 'Strict adherence to ISO/IEC 17025 protocols, rigorous calibration traceability, inter-laboratory validation, and uncompromising data integrity.',
    },
  ];

  const instruments = [
    { name: 'Atomic Absorption Spectrophotometer (AAS)', spec: 'Trace heavy metal quantification at ppb levels' },
    { name: 'High-Performance Chromatography (HPLC)', spec: 'Purity assay, solvent residual, & active chemical validation' },
    { name: 'UV-Visible Double Beam Spectrophotometer', spec: 'Photometric purity assays and parameter estimation' },
    { name: 'Isokinetic Stack Gas Sampler', spec: 'Flue gas emission profiling (PM2.5, SOx, NOx)' },
    { name: 'BOD Incubator & COD Digestion Units', spec: 'Automated 5-day BOD and closed reflux effluent digestion' },
    { name: 'Laminar Air Flow & Autoclave Chambers', spec: 'Class-100 sterile zones for food pathogen culturing' },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#7EB327] selection:text-white">
      <Navbar />

      {/* 1. HERO HEADER WITH REAL SCIENTIFIC LAB BACKGROUND (Clear & Fully Visible) */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-white border-b border-slate-200">
        {/* Authentic Analytical Laboratory Setup (No Hotel/Lounge feel) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-95"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2000&q=95')` 
          }}
        />
        
        {/* Ultra-light translucent wash taaki background equipment khul ke dikhe */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/50 to-white/75 pointer-events-none z-0" />
        
        {/* Subtle Brand Aura */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#7EB327]/15 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Glass Header Card taaki text crisp aur clean padha jaye */}
          <div className="max-w-3xl mx-auto bg-white/90 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7EB327]/15 border border-[#7EB327]/40 text-[#0A3F7A] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#7EB327]" />
              <span>Institutional Profile & Scientific Heritage</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A3F7A] leading-tight">
              About <span className="text-[#7EB327]">Bioraj Laboratories</span>
            </h1>

            <p className="text-slate-700 text-base sm:text-lg font-semibold leading-relaxed">
              Delivering high-accuracy analytical science, environmental legal clearances, and food safety validation across Maharashtra and Pan-India since September 2015.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-600">
              <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0A3F7A]">
                NABL ISO/IEC 17025
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0A3F7A]">
                MoEFCC / EPA 1986
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0A3F7A]">
                FSSAI Recognised
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER PROFILE SHOWCASE */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Founder Visual Dossier */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-white p-2 border-2 border-[#0A3F7A]/15 shadow-2xl overflow-hidden">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 group">
                  <Image
                    src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85"
                    alt="Dr. Raju R. Yadav performing analytical tests"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                  {/* Active Laser Line */}
                  <motion.div
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7EB327] to-transparent shadow-[0_0_12px_#7EB327]"
                  />

                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A3F7A]/90 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                    <GraduationCap className="w-3.5 h-3.5 text-[#7EB327]" />
                    <span>CHIEF SCIENTIFIC LEAD</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-black drop-shadow">{siteConfig.founder.name}</h3>
                    <p className="text-xs text-[#7EB327] font-bold">Ph.D. from CSIR - NEERI, Nagpur</p>
                    <p className="text-[11px] text-slate-300 mt-1">National Environmental Engineering Research Institute</p>
                  </div>
                </div>
              </div>

              {/* Overlapping Badge */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 p-4 rounded-2xl bg-white border-2 border-[#7EB327]/30 shadow-xl items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0A3F7A] text-[#7EB327] flex items-center justify-center font-black">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-black text-[#0A3F7A]">10+ Years</p>
                  <p className="text-xs text-slate-600 font-semibold">Excellence Since Sep 2015</p>
                </div>
              </div>
            </div>

            {/* Right: Founder Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7EB327]/15 border border-[#7EB327]/40 text-[#0A3F7A] text-xs font-black uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-[#7EB327]" />
                <span>Founding Leadership & Directorate</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0A3F7A] leading-tight">
                Academic Rigor Meets <br />
                <span className="text-[#7EB327]">Industrial Compliance Defense</span>
              </h2>

              <p className="text-slate-700 leading-relaxed font-medium">
                Under the scientific direction of <strong>Dr. Raju R. Yadav</strong>, who completed his doctorate at the premier <strong>CSIR - National Environmental Engineering Research Institute (NEERI), Nagpur</strong>, Bioraj Laboratories was conceptualized to bridge the gap between rigorous scientific validation and practical industrial statutory requirements.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm font-medium">
                With a deep background in environmental toxicology, water treatment processes, and trace air pollutants, Dr. Yadav leads a specialized technical unit capable of testing complex matrices—from stack emissions and wastewater effluents to packed foods and active chemical intermediates.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <p className="text-2xl font-black text-[#0A3F7A]">100%</p>
                  <p className="text-xs font-bold text-slate-600 mt-0.5">Legally Defensible Data</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <p className="text-2xl font-black text-[#7EB327]">Sub-PPM</p>
                  <p className="text-xs font-bold text-slate-600 mt-0.5">Trace Detection Limits</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & QUALITY POLICY */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-50 border-2 border-slate-200/90 hover:border-[#7EB327] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0A3F7A] text-[#7EB327] flex items-center justify-center font-bold shadow-md shadow-[#0A3F7A]/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-[#0A3F7A]">{val.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CHRONOLOGY & MILESTONES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7EB327]/15 border border-[#7EB327]/40 text-[#0A3F7A] text-xs font-black uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#7EB327]" />
              <span>Institutional Growth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A3F7A]">Our Journey Over A Decade</h2>
            <p className="text-slate-600 text-sm font-medium">From inception in September 2015 to becoming a multidisciplinary testing benchmark.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col justify-between hover:border-[#0A3F7A] transition-colors"
              >
                <div>
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-[#0A3F7A] text-white inline-block mb-3">
                    {m.year}
                  </span>
                  <h4 className="text-lg font-black text-[#0A3F7A] mb-2">{m.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INFRASTRUCTURE & INSTRUMENTATION SUITE */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A3F7A]/10 border border-[#0A3F7A]/20 text-[#0A3F7A] text-xs font-black uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-[#7EB327]" />
              <span>Testing Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A3F7A]">Advanced Laboratory Instrumentation</h2>
            <p className="text-slate-600 text-sm font-medium">Equipped with calibrated precision instruments to achieve sub-ppm detection thresholds.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instruments.map((item, i) => (
              <div 
                key={i}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#7EB327] transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#7EB327] shrink-0 font-bold shadow-sm">
                  <Microscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0A3F7A]">{item.name}</h4>
                  <p className="text-xs text-slate-600 mt-1 font-medium">{item.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION STRIP */}
      <section className="py-16 bg-[#0A3F7A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black">Need Specialized Lab Testing or Plant Audits?</h3>
            <p className="text-slate-300 text-sm mt-1">Directly consult Dr. Yadav and our senior analytical chemistry department.</p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-[#7EB327] hover:bg-[#6E9C1C] text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-black/20 shrink-0 inline-flex items-center gap-2"
          >
            <span>Dispatch Sample / Inquire</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}