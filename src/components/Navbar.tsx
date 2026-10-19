'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Menu, X, Phone, ArrowRight, ChevronDown, 
  Wind, Sprout, Apple, FlaskConical, Microscope 
} from 'lucide-react';
import { siteConfig } from '@/data/content';

export const serviceCategories = [
  {
    name: 'Environmental Testing',
    slug: 'environmental-testing',
    href: '/services/environmental-testing',
    desc: 'Ambient air, stack emissions, wastewater & noise surveys',
    icon: Wind,
  },
  {
    name: 'Soil And Agricultural Testing',
    slug: 'soil-and-agricultural-testing',
    href: '/services/soil-and-agricultural-testing',
    desc: 'NPK profile, soil fertility & pesticide residue assays',
    icon: Sprout,
  },
  {
    name: 'Food & Food Products Testing',
    slug: 'food-products-testing',
    href: '/services/food-products-testing',
    desc: 'Microbial pathogen screening & FSSAI nutritional facts',
    icon: Apple,
  },
  {
    name: 'Testing Of Chemicals',
    slug: 'chemical-testing',
    href: '/services/chemical-testing',
    desc: 'Assay purity, solvents, raw material QC & heavy metals',
    icon: FlaskConical,
  },
  {
    name: 'Contract Research',
    slug: 'contract-research',
    href: '/services/contract-research',
    desc: 'Analytical method validation & custom pilot-scale R&D',
    icon: Microscope,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#0A3F7A]/10 shadow-md shadow-[#0A3F7A]/5'
          : 'bg-white/85 backdrop-blur-md border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo with 400x60 dimensions constraint */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative h-auto w-auto flex items-center">
              <Image
                src="/BiorajLogo.png"
                alt="Bioraj Laboratories Pvt. Ltd."
                width={400}
                height={60}
                priority
                unoptimized
                className="h-[50px] max-h-[74px] xs:h-[60px] sm:h-[70px] sm:max-h-[74px] w-auto max-w-[260px] sm:max-w-[400px] object-contain hover:opacity-95 transition-opacity"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-xs font-bold tracking-wide text-[#0A3F7A] hover:text-[#7EB327] transition-colors uppercase whitespace-nowrap"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-xs font-bold tracking-wide text-[#0A3F7A] hover:text-[#7EB327] transition-colors uppercase whitespace-nowrap"
            >
              About Us
            </Link>

            {/* SERVICES DROPDOWN (Desktop) */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase transition-colors whitespace-nowrap cursor-pointer py-2 ${
                  servicesDropdownOpen ? 'text-[#7EB327]' : 'text-[#0A3F7A] hover:text-[#7EB327]'
                }`}
              >
                <span>Services</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#7EB327]' : 'text-[#0A3F7A]'
                  }`} 
                />
              </button>

              {/* Dropdown Panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 animate-in fade-in-50 slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-2xl p-3 shadow-2xl border-2 border-slate-100 shadow-[#0A3F7A]/15 space-y-1">
                    <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        Testing Divisions
                      </span>
                    </div>

                    {serviceCategories.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.slug}
                          href={item.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#0A3F7A]/5 group-hover:bg-[#7EB327]/15 border border-[#0A3F7A]/10 group-hover:border-[#7EB327]/40 flex items-center justify-center shrink-0 text-[#0A3F7A] group-hover:text-[#7EB327] transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#0A3F7A] group-hover:text-[#7EB327] transition-colors leading-tight">
                              {item.name}
                            </p>
                            <p className="text-[10px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    <div className="pt-2 border-t border-slate-100 mt-1">
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 hover:bg-[#0A3F7A]/5 text-xs font-bold text-[#0A3F7A] transition-colors"
                      >
                        <span>View All Testing Domains</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#7EB327]" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/accreditations"
              className="text-xs font-bold tracking-wide text-[#0A3F7A] hover:text-[#7EB327] transition-colors uppercase whitespace-nowrap"
            >
              Accreditations
            </Link>

            <Link
              href="/contact"
              className="text-xs font-bold tracking-wide text-[#0A3F7A] hover:text-[#7EB327] transition-colors uppercase whitespace-nowrap"
            >
              Contact Us
            </Link>
          </nav>

          

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0A3F7A] hover:text-[#7EB327] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 p-5 space-y-4 shadow-lg max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#0A3F7A] hover:text-[#7EB327] py-1.5 border-b border-slate-100"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#0A3F7A] hover:text-[#7EB327] py-1.5 border-b border-slate-100"
          >
            About Us
          </Link>

          {/* Mobile Services Accordion */}
          <div className="border-b border-slate-100 pb-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between text-sm font-bold text-[#0A3F7A] hover:text-[#7EB327] py-1.5"
            >
              <span>Services</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileServicesOpen ? 'rotate-180 text-[#7EB327]' : 'text-slate-400'
                }`} 
              />
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 pt-2 space-y-2 border-l-2 border-[#7EB327]/30 my-1">
                {serviceCategories.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="block text-xs font-semibold text-slate-700 hover:text-[#7EB327] py-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#certifications"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#0A3F7A] hover:text-[#7EB327] py-1.5 border-b border-slate-100"
          >
            Accreditations
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-[#0A3F7A] hover:text-[#7EB327] py-1.5 border-b border-slate-100"
          >
            Contact Us
          </Link>

          
        </div>
      )}
    </header>
  );
}