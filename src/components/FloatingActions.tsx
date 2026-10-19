'use client';

import { Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/content';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/919420397817?text=Hello%20Bioraj%20Laboratories,%20I%20want%20to%20inquire%20about%20testing%20services%20and%20quotation.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Direct Call Button */}
      <a
        href={`tel:${siteConfig.contact.phone}`}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0A3F7A] text-white shadow-xl hover:bg-[#08305c] transition-all duration-300 hover:scale-110"
        aria-label="Direct Phone Call"
      >
        <Phone className="w-5 h-5 text-[#7EB327]" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-14 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg">
          Call: {siteConfig.contact.phone}
        </span>
      </a>

      {/* WhatsApp Action Button with Pulse Effect */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#7EB327] hover:bg-[#6fa020] text-white shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        {/* Radar Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#7EB327] animate-ping opacity-35 pointer-events-none" />

        <MessageSquare className="w-7 h-7 fill-white" />

        {/* Tooltip on hover */}
        <span className="absolute right-16 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg">
          Chat with Senior Chemist
        </span>
      </a>
    </div>
  );
}