'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/content';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A3F7A] text-slate-200 pt-16 pb-12 border-t-4 border-[#7EB327]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Node */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          
          <div className="lg:col-span-5 space-y-4">
            <Link href="#home" className="inline-block bg-white p-2.5 rounded-2xl shadow-md">
              <Image
                src="/BiorajLogo.png"
                alt="Bioraj Laboratories"
                width={300}
                height={50}
                unoptimized
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-medium">
              Established in September 2015 by <strong>Dr. Raju R. Yadav</strong> (Ph.D., CSIR-NEERI). Precision analytical testing, regulatory compliance monitoring, and pilot research.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-[#7EB327]/40 text-xs text-[#7EB327] font-bold">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#7EB327]" />
              <span>NABL • MoEFCC • FSSAI PROTOCOL ALIGNED</span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7EB327]">
              [ TESTING DIVISIONS ]
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.services.map((item) => (
                <li key={item.id}>
                  <a href="#services" className="hover:text-[#7EB327] transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7EB327]">
              [ PUNE HEADQUARTERS ]
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#7EB327] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#7EB327] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#7EB327] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <p>© {currentYear} BIORAJ LABORATORIES PVT. LTD. ALL RIGHTS RESERVED.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#7EB327] transition-colors cursor-pointer font-bold"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#7EB327]" />
          </button>
        </div>

      </div>
    </footer>
  );
}