import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import About from '@/components/About';
import Services from '@/components/Services';
import Certifications from '@/components/Certifications';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040812] text-slate-100 selection:bg-emerald-500 selection:text-slate-950 overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <About />
      <Services />
      <Certifications />
      <ContactSection />
      <Footer />
    </main>
  );
}