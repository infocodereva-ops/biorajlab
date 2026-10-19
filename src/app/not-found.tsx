import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Home, FlaskConical } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />

      <section className="pt-40 pb-24 px-4 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-[#0A3F7A]/10 text-[#0A3F7A] flex items-center justify-center mx-auto">
            <FlaskConical className="w-8 h-8 text-[#7EB327]" />
          </div>

          <p className="text-sm font-mono font-bold text-[#7EB327] tracking-wider uppercase">
            // ERROR 404: SAMPLE NOT FOUND
          </p>

          <h1 className="text-4xl font-black text-[#0A3F7A]">
            Page Out of Spectrum
          </h1>

          <p className="text-slate-600 text-sm font-medium">
            The requested laboratory division or resource URL does not exist or has been relocated.
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A3F7A] hover:bg-[#08305c] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
            >
              <Home className="w-4 h-4 text-[#7EB327]" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#0A3F7A] border border-slate-200 text-xs font-black uppercase tracking-wider transition-all"
            >
              <span>View Testing Directory</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}