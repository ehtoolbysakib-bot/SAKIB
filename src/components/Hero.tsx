import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Code2,
  Terminal,
  ShieldCheck,
  Bot,
  CheckCircle2,
  Laptop,
  Cpu,
  Layers,
  Database,
  Flame,
} from 'lucide-react';

interface HeroProps {
  onOpenCVModal: () => void;
}

const titles = [
  'MD SAKIB HOSEN',
  'ফুল স্ট্যাক ডেভেলপার',
  'বট ও অটোমেশন ক্রিয়েটর',
  'UI/UX ডিজাইনার',
  'MD SAKIB HOSEN',
];

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  // Typewriter effect state
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTarget = titles[titleIndex];
    let typingSpeed = isDeleting ? 40 : 90;

    if (!isDeleting && displayText === currentTarget) {
      typingSpeed = 2000;
    } else if (isDeleting && displayText === '') {
      typingSpeed = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTarget.length) {
          setDisplayText(currentTarget.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTarget.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-to-tr from-cyan-200/35 via-sky-100/30 to-blue-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-300/15 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Text Content in Bangla */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Status Pill with Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/95 border border-cyan-300/70 shadow-xs mb-5"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden border border-cyan-400 shrink-0">
                <img
                  src={personalInfo.avatarUrl}
                  alt="Sakib"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700">
                ইন্ডিপেন্ডেন্ট ডেভেলপার • ৬+ বছরের অভিজ্ঞতা
              </span>
            </motion.div>

            {/* Main Greeting & Typewriter Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-3">
              <span className="block text-slate-900 font-display">
                হাই, আমি{' '}
                <span className="text-cyan-600 inline-block min-w-[200px] border-r-2 border-cyan-500 pr-1 animate-pulse">
                  {displayText}
                </span>
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 mb-4">
              ফুল স্ট্যাক ওয়েব ডেভেলপার ও UI/UX ডিজাইনার
            </p>

            {/* Bengali Narrative Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-7">
              আমি <strong className="text-slate-900 font-bold">MD SAKIB HOSEN</strong>, একজন প্রফেশনাল ফুল স্ট্যাক ডেভেলপার এবং UI/UX ডিজাইনার। বিগত ৬+ বছর ধরে আধুনিক ওয়েবসাইট, ওয়েব অ্যাপ্লিকেশন, অটোমেশন বট এবং ব্যবহারকারী-বান্ধব ডিজিটাল প্ল্যাটফর্ম তৈরি করে আসছি। আমার মূল লক্ষ্য হলো উচ্চ কর্মক্ষমতাসম্পন্ন, সুরক্ষিত এবং দৃষ্টিনন্দন ডিজিটাল অভিজ্ঞতা উপহার দেওয়া।
            </p>

            {/* Call to Actions (CTAs) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7">
              <button
                id="hero-explore-projects-btn"
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform active:scale-95 cursor-pointer"
              >
                <span>প্রজেক্টসমূহ দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-cyan-50/70 text-slate-800 hover:text-cyan-700 font-bold text-sm border border-slate-300 hover:border-cyan-300 shadow-xs transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-600" />
                <span>যোগাযোগ করুন</span>
              </button>

              <button
                id="hero-view-cv-btn"
                onClick={onOpenCVModal}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-cyan-50/80 hover:bg-cyan-100 text-cyan-800 font-bold text-sm border border-cyan-200 shadow-xs transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-600" />
                <span>সিভি দেখুন (CV)</span>
              </button>
            </div>

            {/* Quick Skills Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-200/80 w-full">
              <span className="text-xs font-bold text-slate-600 mr-2 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" /> মূল দক্ষতা:
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200 text-slate-700 text-xs font-medium flex items-center gap-1.5 shadow-xs">
                <Code2 className="w-3.5 h-3.5 text-cyan-600" /> ওয়েব অ্যাপস
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200 text-slate-700 text-xs font-medium flex items-center gap-1.5 shadow-xs">
                <Bot className="w-3.5 h-3.5 text-sky-600" /> বট অটোমেশন
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200 text-slate-700 text-xs font-medium flex items-center gap-1.5 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> সিকিউরিটি টুলস
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200 text-slate-700 text-xs font-medium flex items-center gap-1.5 shadow-xs">
                <Terminal className="w-3.5 h-3.5 text-purple-600" /> পাইথন ও নোড
              </span>
            </div>
          </motion.div>

          {/* Right Column: High-End Animated Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-5 relative w-full flex flex-col items-center justify-center pt-8 sm:pt-6"
          >
            {/* Animated Rotating Gradient Aura */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
              className="absolute -inset-4 sm:-inset-8 rounded-[3rem] bg-gradient-to-r from-cyan-400/25 via-sky-400/20 to-blue-500/25 blur-3xl -z-10 pointer-events-none"
            />

            {/* Floating Top Left Badge: Identity */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-3 sm:-top-5 -left-2 sm:-left-6 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-cyan-200/90 shadow-xl shadow-cyan-500/15 flex items-center gap-2.5"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-sm shrink-0">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-slate-900 leading-tight">MD SAKIB HOSEN</p>
                <p className="text-[10px] text-cyan-600 font-mono font-semibold">ফুল স্ট্যাক ডেভেলপার</p>
              </div>
            </motion.div>

            {/* Floating Top Right Badge: Experience */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-4 sm:-top-6 -right-2 sm:-right-4 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-200/90 shadow-xl shadow-sky-500/15 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 font-extrabold text-xs shrink-0">
                ৬+
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900 leading-tight">বছরের অভিজ্ঞতা</p>
                <p className="text-[10px] text-sky-600 font-mono">২০১৯ — বর্তমান</p>
              </div>
            </motion.div>

            {/* Floating Bottom Left Badge: Open for Projects */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 sm:-bottom-5 -left-2 sm:-left-4 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-xl shadow-emerald-500/15 flex items-center gap-2.5"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900 leading-tight">প্রজেক্টের জন্য উন্মুক্ত</p>
                <p className="text-[10px] text-emerald-600 font-mono font-medium">১০০% রেসপনসিভ কাজ</p>
              </div>
            </motion.div>

            {/* Floating Bottom Right Badge: DarkByteCrew Security */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -bottom-4 sm:-bottom-5 -right-2 sm:-right-4 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-200/90 shadow-xl shadow-purple-500/15 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900 leading-tight">DarkByteCrew</p>
                <p className="text-[10px] text-purple-600 font-mono">সিকিউরিটি রিসার্চ</p>
              </div>
            </motion.div>

            {/* Main Portrait Card with Floating Animation & Hover Polish */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] rounded-3xl p-2.5 sm:p-3 bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 shadow-2xl shadow-cyan-950/20 group"
            >
              {/* Inner Frame with Image */}
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-950 relative shadow-inner">
                <img
                  src={personalInfo.avatarUrl}
                  alt="MD SAKIB HOSEN - Professional Full Stack Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Gradient Overlay for Text legibility at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                        <span>MD SAKIB HOSEN</span>
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 inline" />
                      </h3>
                      <p className="text-xs text-cyan-300 font-mono font-medium">
                        Govt Akbar Ali College • HSC 2025
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-[11px] font-mono text-cyan-200">
                      🇧🇩 BD
                    </div>
                  </div>
                </div>

                {/* Floating Micro Tech Pills over Image */}
                <div className="absolute top-4 right-4 flex flex-col gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-cyan-400/50 text-[10px] font-mono font-bold text-cyan-300 shadow-md">
                    React & Node.js
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-sky-400/50 text-[10px] font-mono font-bold text-sky-300 shadow-md">
                    Python & Bot
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Row below the photo */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-6 sm:mt-7 w-full max-w-[400px]">
              <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-center shadow-xs hover:border-cyan-300 transition-colors">
                <p className="text-sm font-extrabold text-slate-900">৮+ প্রজেক্ট</p>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">সফল ডেলিভারি</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-cyan-200/90 text-center shadow-xs hover:border-cyan-300 transition-colors bg-cyan-50/30">
                <p className="text-sm font-extrabold text-cyan-800">৬+ বছর</p>
                <p className="text-[10px] text-cyan-600 font-mono mt-0.5">অভিজ্ঞতা</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-center shadow-xs hover:border-cyan-300 transition-colors">
                <p className="text-sm font-extrabold text-slate-900">২৪/৭</p>
                <p className="text-[10px] text-emerald-600 font-mono mt-0.5">সক্রিয় সাপোর্ট</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
