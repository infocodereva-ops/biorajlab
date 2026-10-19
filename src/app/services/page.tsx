'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { serviceCategories } from '@/components/Navbar';
import { 
  ArrowRight, Sparkles, CheckCircle2, ShieldCheck, 
  FlaskConical, Truck 
} from 'lucide-react';

const serviceImages: Record<string, string> = {
  'environmental-testing': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=85',
  'soil-and-agricultural-testing': 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=85',
  'food-products-testing': 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=85',
  'chemical-testing': 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=85',
  'contract-research': 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=85',
};

export default function ServicesDirectoryPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#7EB327] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-slate-900 border-b border-slate-200">
        {/* Lab / Scientific Testing ki professional image lagayi hai */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-90"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=90')` }}
        />
        {/* Light overlay taaki text bilkul crystal clear padha ja sake */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70 pointer-events-none z-0" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#7EB327]/15 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7EB327]/15 border border-[#7EB327]/40 text-[#0A3F7A] text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#7EB327]" />
            <span>Comprehensive Testing Spectrum</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A3F7A] leading-tight">
            Specialized Analytical <br />
            <span className="text-[#7EB327]">Testing Divisions</span>
          </h1>

          <p className="text-slate-700 text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
            Select a laboratory division below to inspect detailed testing parameters, approved analytical instruments, and statutory compliance standards.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((item, idx) => {
              const Icon = item.icon;
              const imgUrl = serviceImages[item.slug];

              return (
                <div
                  key={item.slug}
                  className="rounded-3xl bg-white border-2 border-slate-200/90 hover:border-[#7EB327] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={imgUrl}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-[#0A3F7A] text-white flex items-center justify-center font-bold shadow-md">
                      <Icon className="w-5 h-5 text-[#7EB327]" />
                    </div>

                    <span className="absolute bottom-3 left-3 text-[11px] font-mono font-bold text-white drop-shadow">
                      [ DIVISION 0{idx + 1} ]
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0A3F7A] group-hover:text-[#7EB327] transition-colors mb-2">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400">NABL / ISO Format</span>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A3F7A] hover:text-[#7EB327] group-hover:translate-x-1 transition-transform"
                      >
                        <span>Inspect Parameters</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#7EB327]" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Custom Industrial Audit Card */}
            <div className="rounded-3xl p-7 bg-gradient-to-br from-[#0A3F7A] via-[#0D4B8F] to-[#0A3F7A] text-white shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#7EB327]/20 text-[#7EB327] text-xs font-bold border border-[#7EB327]/30">
                  ON-SITE MOBILE SAMPLING
                </span>
                <h3 className="text-2xl font-black">Industrial Pollution Compliance Package</h3>
                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  Need plant-wide stack emission surveys, continuous effluent monitoring, or statutory legal audit reports for MPCB factory clearances?
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#7EB327] hover:bg-[#6E9C1C] text-white font-black text-xs uppercase tracking-wider transition-all"
                >
                  <span>Book Plant Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}