'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Apple, ShieldCheck, Microscope, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const foodParameters = [
  {
    title: 'Microbial Pathogen Screen',
    desc: 'Detection of Salmonella, E. coli, Yeast & Molds, and Coliforms to prevent foodborne contamination.',
    badge: 'Zero-Tolerance Safety',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Nutritional Value Profiling',
    desc: 'Complete macro & micronutrient profiling: Fats, Carbohydrates, Proteins, Calories, and Vitamin levels.',
    badge: 'FSSAI Labeling Assays',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Pesticide & Adulterant Trace',
    desc: 'Sub-ppm detection of harmful agricultural pesticide residues, synthetic dyes, and heavy metal toxins.',
    badge: 'Export Quality Assays',
    img: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=800&q=80',
  },
];

export default function FoodLabShowcase() {
  return (
    <section id="food-lab" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Bio-Green Subtle Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <Apple className="w-4 h-4" />
            <span>Dedicated Biological & Food Safety Division</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Precision Food & Agricultural <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Assay Infrastructure
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Our specialized food laboratory utilizes modern microbiological incubation and chromatography methods aligned with FSSAI regulations for manufacturers, packagers, and exporters.
          </p>
        </div>

        {/* 3 Animated Laboratory Cards with Visual Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {foodParameters.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Scanning Beam Effect */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                
                {/* Laser scan on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-full transition-all duration-1000 ease-in-out pointer-events-none" />

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-emerald-300 text-[11px] font-bold">
                  {item.badge}
                </div>
              </div>

              {/* Text & Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">Standard Test Protocol</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Book Test</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Lab Equipment Strip */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">HPLC / GC</p>
              <p className="text-xs text-slate-400">Chromatography Assays</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-cyan-400">AAS / ICP</p>
              <p className="text-xs text-slate-400">Heavy Metal Detection</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-teal-300">BOD / COD</p>
              <p className="text-xs text-slate-400">Effluent Incubators</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">Laminar Flow</p>
              <p className="text-xs text-slate-400">Microbial Sterility</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}