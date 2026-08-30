import React, { useState, useEffect } from 'react';
import { navItems, personalInfo } from '../data/portfolioData';
import { Menu, X, FileText, Send, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const topOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-cyan-100/80 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="nav-brand-logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl p-0.5 bg-gradient-to-br from-cyan-500 to-blue-600 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
            <img
              src={personalInfo.avatarUrl}
              alt="MD SAKIB HOSEN"
              className="w-full h-full object-cover object-top rounded-[10px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 group-hover:text-cyan-600 transition-colors">
              MD SAKIB HOSEN
            </span>
            <span className="text-[10px] font-mono text-cyan-600 -mt-1 hidden sm:inline-block font-semibold">
              ফুল স্ট্যাক ডেভেলপার • ৬+ বছর
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/70 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                id={`desktop-nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? 'text-cyan-900 font-bold'
                    : 'text-slate-600 hover:text-cyan-600 hover:bg-white/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white rounded-full shadow-xs border border-cyan-200/80 -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            id="nav-cv-button"
            onClick={onOpenCVModal}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/50 hover:text-cyan-700 transition-all shadow-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-600" />
            <span>সিভি (CV)</span>
          </button>

          <a
            id="nav-contact-button"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>হায়ার করুন</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCVModal}
            className="px-3 py-1.5 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold font-mono"
          >
            CV
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-cyan-600 hover:border-cyan-300 transition-colors focus:outline-none cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-4 top-16 bg-white/95 backdrop-blur-xl border border-cyan-100 rounded-3xl shadow-2xl p-5 z-50 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-500" />
                <span className="text-xs font-bold text-cyan-800">মেনু নেভিগেশন</span>
              </div>
              <span className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold">
                ● প্রজেক্টের জন্য উন্মুক্ত
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.label}
                    id={`mobile-nav-link-${item.label.toLowerCase()}`}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-cyan-500 text-white font-bold shadow-xs'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-cyan-600'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                id="mobile-cv-button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-cyan-800 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-600" />
                <span>সিভি দেখুন ও ডাউনলোড করুন</span>
              </button>

              <button
                id="mobile-contact-action"
                onClick={() => scrollToSection('#contact')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>যোগাযোগ করুন (Contact)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
