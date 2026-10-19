'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageSquare, Building2, Truck } from 'lucide-react';
import { siteConfig } from '@/data/content';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Environmental Testing',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    'Environmental Testing (Air / Water / Stack)',
    'Soil & Agricultural Testing',
    'Food & Microbial Testing (FSSAI)',
    'Chemicals & Solvent Purity',
    'Contract Research (R&D)',
    'Plant Audit & Mobile Pickup',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Failed to dispatch inquiry.');

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Environmental Testing',
        message: '',
      });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong.');
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 sm:py-32 overflow-hidden bg-slate-900 text-slate-900 border-t border-slate-200"
    >
      {/* Updated Background Image for Real Laboratory Console Vibe */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-90"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1920&q=90')`,
        }}
      />
      {/* Balanced Light Overlay for Crisp Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-white/75 pointer-events-none z-0" />
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-[#7EB327]/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7EB327]/15 border border-[#7EB327]/40 text-[#0A3F7A] text-xs font-black uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#7EB327]" />
            <span>DIRECT LABORATORY DISPATCH CONSOLE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A3F7A] leading-tight">
            Schedule Sample Intake or <br />
            <span className="text-[#7EB327]">
              Request Analytical Quotation
            </span>
          </h2>

          <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-bold max-w-2xl mx-auto bg-white/80 p-3 rounded-xl backdrop-blur-sm border border-white/60 shadow-sm">
            Submit required parameters. Our senior analytical chemists will promptly issue testing estimates, sampling guidelines, and bottle preservation kits.
          </p>
        </div>

        {/* Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Facility */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#0A3F7A]/15 shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=85"
                alt="Bioraj Testing Facility Pune"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7EB327] to-transparent shadow-[0_0_12px_#7EB327] pointer-events-none"
              />

              <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A3F7A]/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#7EB327] animate-ping" />
                <span>PUNE CENTRAL LAB OPERATIONAL</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono font-bold text-[#7EB327]">FACILITY ID: MH-PUN-01</p>
                  <p className="text-sm font-black">Bioraj Testing Laboratories</p>
                </div>
                <Building2 className="w-5 h-5 text-[#7EB327]" />
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0A3F7A] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-mono text-slate-500 font-bold uppercase">Official Address</p>
                  <p className="text-slate-900 font-bold mt-0.5 leading-relaxed">{siteConfig.contact.address}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0A3F7A] shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-slate-500 font-bold uppercase">Direct Telephone</p>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-[#0A3F7A] font-black hover:text-[#7EB327] transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0A3F7A] shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-slate-500 font-bold uppercase">Official Mailbox</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[#0A3F7A] font-black hover:text-[#7EB327] transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#0A3F7A] shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-slate-500 font-bold uppercase">Sample Intake Hours</p>
                  <p className="text-slate-900 font-bold">Mon – Sat: 9:30 AM to 6:30 PM (IST)</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/919420397817?text=Hi%20Bioraj%20Laboratories,%20I%20need%20a%20quotation%20for%20testing%20services.`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#7EB327] hover:bg-[#6E9C1C] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-[#7EB327]/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>

          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#0A3F7A]/15 shadow-2xl p-7 sm:p-9 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-[#0A3F7A] uppercase tracking-wider">
                    Client / Company Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Reliance / Amit Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#7EB327] focus:bg-white text-xs sm:text-sm font-semibold text-slate-900 outline-none transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-[#0A3F7A] uppercase tracking-wider">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#7EB327] focus:bg-white text-xs sm:text-sm font-semibold text-slate-900 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-[#0A3F7A] uppercase tracking-wider">
                    Contact Telephone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#7EB327] focus:bg-white text-xs sm:text-sm font-semibold text-slate-900 outline-none transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-[#0A3F7A] uppercase tracking-wider">
                    Testing Domain Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#7EB327] focus:bg-white text-xs sm:text-sm font-bold text-slate-800 outline-none transition-all shadow-sm"
                  >
                    {servicesList.map((srv, idx) => (
                      <option key={idx} value={srv}>{srv}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black text-[#0A3F7A] uppercase tracking-wider">
                  Sample Details / Specific Parameters *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Specify number of samples, required parameters (e.g. BOD, COD, Heavy metals, Pesticides), or statutory deadlines..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#7EB327] focus:bg-white text-xs sm:text-sm font-semibold text-slate-900 outline-none transition-all resize-none shadow-sm"
                />
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-[#7EB327]/15 border border-[#7EB327]/50 text-[#0A3F7A] text-xs sm:text-sm font-bold flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7EB327] shrink-0" />
                  <span>Your laboratory request has been successfully dispatched! Our technical head will contact you shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-100 border border-rose-300 text-rose-900 text-xs sm:text-sm font-bold flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#0A3F7A] to-[#0E549E] hover:from-[#0E549E] hover:to-[#0A3F7A] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-[#0A3F7A]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#7EB327]" />
                    <span>Dispatching Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Transmit Testing Inquiry</span>
                    <Send className="w-4 h-4 text-[#7EB327]" />
                  </>
                )}
              </button>

            </form>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#7EB327]" />
                Mobile sample pickup across Maharashtra
              </span>
              <span className="text-[#0A3F7A]">24-48h Express TAT</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}