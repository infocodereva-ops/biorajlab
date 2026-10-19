'use client';

import { motion } from 'framer-motion';
import { 
  Wind, Sprout, Apple, FlaskConical, Microscope, 
  ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Activity 
} from 'lucide-react';
import { siteConfig } from '@/data/content';

const iconMap = {
  Wind,
  Sprout,
  Apple,
  FlaskConical,
  Microscope,
};

const serviceVisuals: Record<string, { image: string; tag: string; badge: string }> = {
  'env-services': {
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=85',
    tag: 'CPCB / SPCB Guidelines',
    badge: 'Stack & Ambient Air',
  },
  'soil-agri-services': {
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=85',
    tag: 'Agricultural & Fertility',
    badge: 'NPK & Micro-Nutrients',
  },
  'food-services': {
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=85',
    tag: 'FSSAI Safety Standards',
    badge: 'Microbiology & Pathogens',
  },
  'chemical-testing': {
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=85',
    tag: 'Purity & Trace Assays',
    badge: 'HPLC & Spectroscopy',
  },
  'contract-research': {
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=85',
    tag: 'Pilot R&D Solutions',
    badge: 'Method Validation',
  },
};

export default function Services() {
  const serviceDetails: Record<string, string[]> = {
    'env-services': ['Stack Flue Gas Analysis', 'Ambient Air PM2.5 / PM10', 'Effluent BOD, COD, TDS', 'Industrial Noise Surveys'],
    'soil-agri-services': ['Soil Fertility Profiling', 'NPK & Micronutrients Assay', 'Heavy Metal Contamination', 'Pesticide & Herbicide Residue'],
    'food-services': ['Microbial Pathogen Assays (FSSAI)', 'Nutritional Value Labeling', 'Shelf-Life Stability Studies', 'Adulteration & Toxin Screening'],
    'chemical-testing': ['Chemical Assay & Active Purity', 'Solvent Purity & Karl Fischer', 'Raw Material Validation', 'Trace Heavy Metals (AAS)'],
    'contract-research': ['Analytical Method Validation', 'Pilot Scale Environmental R&D', 'Compliance Dossier Preparation', 'Custom Quality Protocols'],
  };

  return (
    <section 
      id="services" 
      className="relative py-24 sm:py-32 overflow-hidden bg-slate-900 text-slate-900 border-t border-slate-200"
    >
      {/* Updated Background Image for Real Laboratory Vibe */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-90"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1920&q=90')`,
        }}
      />
      {/* Light Gradient Overlay for Clear Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-white/75 pointer-events-none z-0" />
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#7EB327]/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7EB327]/15 border border-[#7EB327]/40 text-[#0A3F7A] text-xs font-black uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#7EB327]" />
            <span>CERTIFIED TESTING SPECTRUM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A3F7A] leading-tight">
            Specialized Analytical & <br />
            <span className="text-[#7EB327]">
              Laboratory Testing Domains
            </span>
          </h2>

          <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-bold max-w-2xl mx-auto bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-white/60 shadow-sm">
            Standardized chemical and microbiological protocols producing legally defensible test reports accepted by MPCB, CPCB, and MoEFCC.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || FlaskConical;
            const params = serviceDetails[service.id] || [];
            const visual = serviceVisuals[service.id];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl bg-white/95 backdrop-blur-md border-2 border-slate-200/90 hover:border-[#7EB327] shadow-xl hover:shadow-2xl hover:shadow-[#0A3F7A]/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={visual.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0A3F7A] text-[11px] font-bold shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#7EB327] animate-ping" />
                    <span>{visual.badge}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 w-11 h-11 rounded-2xl bg-[#0A3F7A] text-white flex items-center justify-center font-bold shadow-lg shadow-[#0A3F7A]/30">
                    <Icon className="w-5 h-5 text-[#7EB327]" />
                  </div>

                  <span className="absolute bottom-3 left-3 text-[11px] font-mono font-bold text-white drop-shadow">
                    [ DOMAIN 0{index + 1} ]
                  </span>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0A3F7A] group-hover:text-[#7EB327] transition-colors mb-2">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold mb-4">
                      {service.desc}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-3.5">
                      <p className="text-[10px] font-black uppercase text-[#0A3F7A] tracking-wider">
                        Key Tested Parameters:
                      </p>
                      <div className="space-y-1.5">
                        {params.map((p, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700 font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#7EB327] shrink-0" />
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400">NABL / ISO Format</span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A3F7A] hover:text-[#7EB327] transition-colors"
                    >
                      <span>Inquire Testing</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#7EB327]" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Plant Audit Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-3xl p-7 bg-gradient-to-br from-[#0A3F7A] via-[#0D4B8F] to-[#0A3F7A] text-white shadow-2xl shadow-[#0A3F7A]/30 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7EB327]/25 text-white text-xs font-bold border border-[#7EB327]/40">
                <Activity className="w-3.5 h-3.5 text-[#7EB327] animate-pulse" />
                <span>CUSTOM INDUSTRIAL AUDIT</span>
              </div>

              <h3 className="text-2xl font-black text-white leading-tight">
                Bulk Industrial Sampling & Compliance Packages
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-semibold">
                Need recurring effluent monitoring, complete factory environmental audits, or export certificate testing? Our mobile sampling technicians collect directly from your plant across Maharashtra.
              </p>

              <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#7EB327] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>On-Site Mobile Sampling Teams</span>
                </div>
                <p className="text-[11px] text-slate-200">Preserved in cold-chain transport for zero analyte degradation.</p>
              </div>
            </div>

            <div className="relative z-10 pt-6">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 rounded-2xl bg-[#7EB327] hover:bg-[#6E9C1C] text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <span>Schedule Plant Audit / Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}