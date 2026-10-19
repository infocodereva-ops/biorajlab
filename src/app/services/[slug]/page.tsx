import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { servicesDetailedData } from '@/data/servicesData'; // Make sure import path is correct
import { 
  ArrowRight, Sparkles, CheckCircle2, ShieldCheck, 
  FlaskConical, Clock, Building2, FileCheck, AlertCircle
} from 'lucide-react';

export const instant = false

// Next.js static generation parameters
export async function generateStaticParams() {
  return Object.keys(servicesDetailedData).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServiceDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const service = servicesDetailedData[resolvedParams.slug];

  // Agar slug match na ho toh Fallback
  if (!service) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="max-w-4xl mx-auto pt-40 pb-20 text-center space-y-6 px-4">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
          <h1 className="text-3xl font-black text-[#0A3F7A]">Service Category Not Found</h1>
          <p className="text-slate-600">The requested testing division does not exist or has been moved.</p>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A3F7A] text-white font-bold text-sm hover:bg-[#7EB327] transition-colors"
          >
            Back to All Services
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Fallback image ensure karne ke liye agar data me image missing ho
  const bgImage = service.heroImage || 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=1920&q=90';

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#7EB327] selection:text-white">
      <Navbar />

      {/* Hero Header - Category Specific & Crystal Clear Background Image */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-slate-900 border-b border-slate-200">
        
        {/* Dynamic Background Image with High Opacity for Sharpness */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-95"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />

        {/* Light Overlay for Crisp Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70 pointer-events-none z-0" />
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#7EB327]/15 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7EB327]/20 border border-[#7EB327]/40 text-[#0A3F7A] text-xs font-black uppercase tracking-wider shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#7EB327]" />
            <span>{service.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A3F7A] leading-tight">
            {service.name}
          </h1>

          <p className="text-xs font-mono font-bold text-[#7EB327] uppercase tracking-widest">
            [ {service.category} ]
          </p>

          <p className="text-slate-800 text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            {service.overview}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-3xl border-2 border-slate-200/90 shadow-lg space-y-6">
                <h3 className="text-2xl font-black text-[#0A3F7A] flex items-center gap-3">
                  <ShieldCheck className="w-7 h-7 text-[#7EB327]" />
                  <span>Key Division Highlights</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#7EB327] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-semibold leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-slate-200/90 shadow-lg space-y-6 overflow-hidden">
                <h3 className="text-2xl font-black text-[#0A3F7A] flex items-center gap-3">
                  <FlaskConical className="w-7 h-7 text-[#7EB327]" />
                  <span>Analytical Testing Parameters & Standards</span>
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b-2 border-slate-200 bg-slate-100/80 text-[#0A3F7A] uppercase font-black tracking-wider">
                        <th className="p-3.5 rounded-l-xl">Parameter / Assay</th>
                        <th className="p-3.5">Testing Method / Instrument</th>
                        <th className="p-3.5 rounded-r-xl">Regulatory Standard</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {service.parametersTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors font-medium">
                          <td className="p-3.5 font-bold text-[#0A3F7A]">{row.parameter}</td>
                          <td className="p-3.5 text-slate-600">{row.method}</td>
                          <td className="p-3.5 font-mono text-slate-500 font-semibold">{row.regulatoryStandard}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border-2 border-slate-200/90 shadow-lg space-y-4">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <Clock className="w-5 h-5 text-[#7EB327] shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Turnaround Time</p>
                    <p className="text-xs font-black text-[#0A3F7A]">{service.turnaroundTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <Building2 className="w-5 h-5 text-[#0A3F7A] shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Compliance Authority</p>
                    <p className="text-xs font-black text-[#0A3F7A]">{service.complianceBody}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl p-7 bg-gradient-to-br from-[#0A3F7A] via-[#0D4B8F] to-[#0A3F7A] text-white shadow-xl space-y-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#7EB327]/20 text-[#7EB327] text-xs font-bold border border-[#7EB327]/30">
                  OFFICIAL SAMPLING & TESTING
                </span>
                <h3 className="text-2xl font-black">Book Sample Collection or Testing</h3>
                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  Need official lab analysis reports for compliance or internal quality auditing? Get in touch with our certified laboratory team.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#7EB327] hover:bg-[#6E9C1C] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Request Custom Quotation</span>
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