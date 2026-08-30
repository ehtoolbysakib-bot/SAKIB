import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Play,
  Check,
  Copy,
  Layers,
  Zap,
  Globe,
  Cpu,
  Smartphone,
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

  // Interactive Code Terminal state
  const [activeTab, setActiveTab] = useState<'profile' | 'bot' | 'security'>('profile');
  const [isRunning, setIsRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

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

  const handleRunCode = () => {
    setIsRunning(true);
    setTerminalOutput('কম্পাইলিং হচ্ছে...');
    setTimeout(() => {
      setIsRunning(false);
      if (activeTab === 'profile') {
        setTerminalOutput('✓ স্ট্যাটাস: সিস্টেম সক্রিয় | ⚡ ৬+ বছরের অভিজ্ঞতা লোড হয়েছে | রেডি!');
      } else if (activeTab === 'bot') {
        setTerminalOutput('✓ মেসেঞ্জার ও টেলিগ্রাম বট হুক কানেক্টেড | ২৪/৭ অটোমেশন চালু!');
      } else {
        setTerminalOutput('✓ DarkByteCrew সিকিউরিটি মডিউল অডিট কমপ্লিট | ০ ভালনারেবিলিটি!');
      }
    }, 600);
  };

  const handleCopyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippets = {
    profile: `// Developer Profile: MD SAKIB HOSEN
const developer = {
  name: "MD SAKIB HOSEN",
  role: "Full Stack Dev & UI/UX",
  experience: "6+ Years (2019-Present)",
  stack: ["React", "Node.js", "Python", "PHP", "MySQL", "MongoDB"],
  education: "HSC 2025 @ Govt Akbar Ali College",
  status: "Available for new projects 🚀",
  location: "Bangladesh 🇧🇩"
};

export default developer;`,
    bot: `// Messenger & Telegram Bot Engine
import { BotEngine } from 'sakib-automation';

const bot = new BotEngine({
  platform: ['Messenger', 'Telegram'],
  community: 'Group Adda & Community Bot',
  autoResponse: true,
  responseTime: '<50ms'
});

bot.on('message', async (msg) => {
  return bot.smartReply(msg.text);
});`,
    security: `# DarkByteCrew Security Research Tool
import sys
from darkbyte import SecurityAuditor

auditor = SecurityAuditor(target="authorized_env")
results = auditor.run_full_audit()

print(f"[+] Audit Passed: {results.status}")
print("[+] Protected with Modern Security Protocols")`,
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
              transition={{ delay: 0.1, duration: 0.4 }}
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

            {/* Main Headline with Animated Typing Effect */}
            <div className="min-h-[72px] sm:min-h-[88px] md:min-h-[104px] flex items-center mb-3">
              <h1
                id="hero-headline"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-slate-900 leading-[1.25] flex flex-wrap items-baseline gap-x-2.5"
              >
                <span>হাই, আমি</span>
                <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 bg-clip-text text-transparent underline decoration-cyan-400/40 decoration-wavy decoration-2">
                  {displayText}
                </span>
                <span
                  className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-cyan-500 ml-0.5 align-baseline animate-pulse rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  aria-hidden="true"
                />
              </h1>
            </div>

            {/* Subtitle */}
            <h2
              id="hero-subtitle"
              className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 mb-4 flex items-center gap-2"
            >
              <span className="text-cyan-700">ফুল স্ট্যাক ওয়েব ডেভেলপার ও UI/UX ডিজাইনার</span>
            </h2>

            {/* Intro Text in Bangla */}
            <p
              id="hero-intro-text"
              className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8"
            >
              {personalInfo.bio}
            </p>

            {/* CTA Buttons in Bangla */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              {/* View My Work */}
              <button
                id="hero-view-work-btn"
                onClick={() => scrollToSection('projects')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-md hover:shadow-cyan-500/25 transition-all active:scale-95 cursor-pointer"
              >
                <span>প্রজেক্টসমূহ দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Contact Me */}
              <button
                id="hero-contact-btn"
                onClick={() => scrollToSection('contact')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-cyan-400 shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-600" />
                <span>যোগাযোগ করুন</span>
              </button>

              {/* Download CV */}
              <button
                id="hero-download-cv-btn"
                onClick={onOpenCVModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base text-cyan-700 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 transition-all active:scale-95 cursor-pointer"
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

          {/* Right Column: Modern Animated Developer Workstation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-5 relative w-full flex flex-col items-center"
          >
            {/* Top Floating Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -left-3 sm:-left-6 z-20 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-cyan-200/90 shadow-lg shadow-cyan-500/10 flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-cyan-400 shrink-0">
                <img
                  src={personalInfo.avatarUrl}
                  alt="MD Sakib Hosen"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-slate-900 leading-tight">MD SAKIB HOSEN</p>
                <p className="text-[10px] text-cyan-600 font-mono">৬+ বছরের অভিজ্ঞতা</p>
              </div>
            </motion.div>

            {/* Bottom Floating Badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -right-2 sm:-right-4 z-20 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-emerald-200/90 shadow-lg shadow-emerald-500/10 flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left">
                <p className="text-[11px] font-bold text-slate-900 leading-tight">প্রজেক্টের জন্য উন্মুক্ত</p>
                <p className="text-[10px] text-emerald-600 font-mono">১০০% রেসপনসিভ কাজ</p>
              </div>
            </motion.div>

            {/* Main Interactive Terminal Window */}
            <div className="w-full rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-cyan-950/20 overflow-hidden text-slate-200">
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  <div className="flex items-center gap-1.5 ml-2">
                    <img
                      src={personalInfo.avatarUrl}
                      alt="Sakib"
                      className="w-4 h-4 rounded-full object-cover object-top border border-cyan-400/60"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[11px] font-mono text-slate-300">
                      sakib@developer-core:~
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopyCode}
                    className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs transition-colors"
                    title="Copy Code"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    onClick={handleRunCode}
                    disabled={isRunning}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Run</span>
                  </button>
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex items-center bg-slate-950/60 border-b border-slate-800 px-2 pt-1.5 overflow-x-auto gap-1">
                <button
                  onClick={() => {
                    setActiveTab('profile');
                    setTerminalOutput(null);
                  }}
                  className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    activeTab === 'profile'
                      ? 'bg-slate-900 text-cyan-300 border-t-2 border-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Developer.config.ts</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('bot');
                    setTerminalOutput(null);
                  }}
                  className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    activeTab === 'bot'
                      ? 'bg-slate-900 text-cyan-300 border-t-2 border-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  <Bot className="w-3.5 h-3.5 text-sky-400" />
                  <span>BotAutomation.js</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('security');
                    setTerminalOutput(null);
                  }}
                  className={`px-3 py-1.5 rounded-t-lg text-xs font-mono transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    activeTab === 'security'
                      ? 'bg-slate-900 text-cyan-300 border-t-2 border-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SecurityTool.py</span>
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[220px] max-h-[260px] bg-slate-900/95">
                <pre className="text-slate-300">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Execution Output Console */}
              <div className="px-4 py-3 bg-slate-950 border-t border-slate-800 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="flex items-center gap-1.5 text-[11px] text-cyan-400">
                    <Terminal className="w-3.5 h-3.5" /> কনসোল আউটপুট (Console)
                  </span>
                  <span className="text-[10px] text-slate-500">Live Status</span>
                </div>
                <div className="text-emerald-400 font-mono text-xs min-h-[20px] flex items-center">
                  {terminalOutput ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-emerald-300"
                    >
                      {terminalOutput}
                    </motion.span>
                  ) : (
                    <span className="text-slate-500">
                      'Run' বাটনে ক্লিক করে লাইভ কোড এক্সিকিউট করুন...
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Tech Pill Badges below workstation */}
            <div className="grid grid-cols-3 gap-2 mt-4 w-full">
              <div className="p-2.5 rounded-xl bg-white/90 border border-slate-200 text-center shadow-xs">
                <p className="text-[11px] font-bold text-slate-900">৮+ প্রজেক্ট</p>
                <p className="text-[10px] text-slate-500 font-mono">সফলভাবে তৈরি</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white/90 border border-slate-200 text-center shadow-xs">
                <p className="text-[11px] font-bold text-slate-900">মোবাইল-ফার্স্ট</p>
                <p className="text-[10px] text-cyan-600 font-mono">১০০% রেসপনসিভ</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white/90 border border-slate-200 text-center shadow-xs">
                <p className="text-[11px] font-bold text-slate-900">ক্লিন কোড</p>
                <p className="text-[10px] text-emerald-600 font-mono">সিকিউর ও ফাস্ট</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
