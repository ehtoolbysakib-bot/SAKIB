import React from 'react';
import { personalInfo, navItems } from '../data/portfolioData';
import {
  ArrowUp,
  Mail,
  Phone,
  MessageSquare,
  Send,
  ExternalLink,
  Sparkles,
  Heart,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (href: string) => {
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
    <footer id="main-footer" className="bg-slate-900 text-white pt-16 pb-12 relative overflow-hidden">
      {/* Decorative top gradient border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Brand Col in Bengali */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
                <span>S</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white tracking-tight">MD SAKIB HOSEN</h3>
                <p className="text-xs font-mono text-cyan-400 -mt-0.5">
                  ফুল স্ট্যাক ডেভেলপার ও UI/UX ডিজাইনার
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              বিগত ৬+ বছর ধরে স্বাধীনভাবে আধুনিক ওয়েবসাইট, ওয়েব অ্যাপ, অটোমেশন বট ও সাইবার সিকিউরিটি
              টুলস তৈরিতে প্রতিশ্রুতিবদ্ধ।
            </p>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-cyan-300">
                নতুন প্রজেক্ট ও চুক্তির জন্য উন্মুক্ত
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              সাইট ম্যাপ (EXPLORE)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Col in Bengali */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              সরাসরি যোগাযোগ (CONNECT)
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-cyan-900/60 hover:text-cyan-400 border border-slate-700/80 transition-colors text-slate-300 flex items-center gap-2 text-xs font-mono"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>ইমেইল</span>
              </a>

              <a
                href={`https://wa.me/8801765051219`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-900/60 hover:text-emerald-400 border border-slate-700/80 transition-colors text-slate-300 flex items-center gap-2 text-xs font-mono"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>হোয়াটসঅ্যাপ</span>
              </a>

              <a
                href={personalInfo.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-sky-900/60 hover:text-sky-400 border border-slate-700/80 transition-colors text-slate-300 flex items-center gap-2 text-xs font-mono"
              >
                <MessageSquare className="w-4 h-4 text-sky-400" />
                <span>মেসেঞ্জার</span>
              </a>

              <a
                href={personalInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-blue-900/60 hover:text-blue-400 border border-slate-700/80 transition-colors text-slate-300 flex items-center gap-2 text-xs font-mono"
              >
                <Send className="w-4 h-4 text-blue-400" />
                <span>টেলিগ্রাম</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-500 pt-2">
              Govt Akbar Ali College • HSC 2025 • DarkByteCrew
            </p>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()}</span>
            <span className="font-bold text-white">MD SAKIB HOSEN</span>
            <span>— সর্বস্বত্ব সংরক্ষিত।</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>উপরে যান</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
