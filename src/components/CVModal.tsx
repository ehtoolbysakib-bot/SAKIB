import React, { useState } from 'react';
import { personalInfo, skillsData, experienceData, educationData, projectsData } from '../data/portfolioData';
import {
  X,
  Download,
  Printer,
  Copy,
  Check,
  FileText,
  Mail,
  Phone,
  Calendar,
  Building2,
  Code2,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloadError, setDownloadError] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = personalInfo.cvPath;
    link.download = 'MD-SAKIB-HOSEN-CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadError(true);
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textSummary = `
========================================
কারিকুলাম ভিটা (CV) — MD SAKIB HOSEN
ফুল স্ট্যাক ডেভেলপার ও UI/UX ডিজাইনার
অভিজ্ঞতা: ৬+ বছর (ইন্ডিপেন্ডেন্ট ডেভেলপার)
ইমেইল: ${personalInfo.email}
হোয়াটসঅ্যাপ: ${personalInfo.whatsapp}
টেলিগ্রাম: ${personalInfo.telegram}
========================================

শিক্ষাগত যোগ্যতা:
- এইচএসসি (HSC 2025), সরকারি আকবর আলী কলেজ

কোর স্কিলস ও টেকনোলজি:
- HTML, CSS, JavaScript, React, Node.js, PHP, Python, MySQL, MongoDB

কাজের অভিজ্ঞতা:
- ইন্ডিপেন্ডেন্ট ডেভেলপার (২০১৯ — বর্তমান)
  * ৬+ বছর ধরে আধুনিক ওয়েব অ্যাপ্লিকেশন, চ্যাট অটোমেশন বট, সাইবার সিকিউরিটি টুলস তৈরি।

সফল প্রজেক্টসমূহ:
1. মেসেঞ্জার গ্রুপ আড্ডা বট
2. এথিক্যাল সাইবার সিকিউরিটি রিসার্চ টুল (DarkByteCrew)
3. টেলিগ্রাম অটোমেশন বট
4. আধুনিক ই-কমার্স ওয়েবসাইট
5. এসএমএম সার্ভিস প্যানেল
6. লোন প্ল্যাটফর্ম ওয়েবসাইট
7. ডিপোজিট ম্যানেজমেন্ট ওয়েবসাইট
8. অনলাইন আর্নিং প্ল্যাটফর্ম
    `.trim();

    navigator.clipboard.writeText(textSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/65 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-cyan-100 z-10 my-6 max-h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Action Toolbar in Bengali */}
          <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between gap-2 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span className="font-bold text-sm sm:text-base font-mono">
                সিভি (CV) — MD SAKIB HOSEN
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors cursor-pointer"
                title="প্রিন্ট করুন"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>প্রিন্ট</span>
              </button>

              <button
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors cursor-pointer"
                title="টেক্সট কপি করুন"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'কপি হয়েছে' : 'কপি টেক্সট'}</span>
              </button>

              <button
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-xs font-bold text-white shadow-xs transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF ডাউনলোড</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1 cursor-pointer"
                aria-label="Close CV modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Renderable CV Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-800 text-sm">
            {downloadError && (
              <div className="p-3.5 rounded-xl bg-cyan-50 border border-cyan-200 text-xs text-cyan-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">পিডিএফ ডাউনলোড সক্রিয়</span>
                  <span>
                    আপনি প্রিন্ট করতে পারেন অথবা উপরের 'কপি টেক্সট' বাটনে ক্লিক করে পুরো রেজুমে কপি করতে পারেন!
                  </span>
                </div>
              </div>
            )}

            {/* Top Header Card with Photo */}
            <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                  MD SAKIB HOSEN
                </h2>
                <p className="text-sm font-bold text-cyan-700 font-mono mb-3">
                  ফুল স্ট্যাক ডেভেলপার ও UI/UX ডিজাইনার • ৬+ বছরের অভিজ্ঞতা
                </p>
                <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-cyan-600" /> {personalInfo.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-cyan-600" /> {personalInfo.whatsapp}
                  </span>
                  <span>বাংলাদেশ 🇧🇩</span>
                </div>
              </div>

              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 to-blue-600 shrink-0 shadow-md">
                <img
                  src={personalInfo.avatarUrl}
                  alt="MD SAKIB HOSEN CV"
                  className="w-full h-full object-cover object-top rounded-[12px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800 mb-2">
                প্রফেশনাল সারাংশ (PROFESSIONAL SUMMARY)
              </h3>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                বিগত ৬+ বছর ধরে স্বাধীনভাবে আধুনিক ওয়েবসাইট, ওয়েব অ্যাপ্লিকেশন, মেসেঞ্জার ও টেলিগ্রাম
                অটোমেশন বট এবং সাইবার সিকিউরিটি টুলস তৈরি করে আসছি। ফ্রন্টএন্ড, ব্যাকএন্ড ও ডেটাবেজ আর্কিটেকচারে
                গভীর ব্যবহারিক অভিজ্ঞতা রয়েছে।
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800 mb-2.5">
                টেকনিক্যাল স্কিলস (TECHNICAL SKILLS)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-xs text-slate-900 block mb-1">ফ্রন্টএন্ড ও UI:</span>
                  <p className="text-xs text-slate-600">HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), React</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-xs text-slate-900 block mb-1">ব্যাকএন্ড ও স্ক্রিপ্টিং:</span>
                  <p className="text-xs text-slate-600">Node.js, PHP, Python, REST APIs, Bot Webhooks</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-xs text-slate-900 block mb-1">ডেটাবেজ ও সিকিউরিটি:</span>
                  <p className="text-xs text-slate-600">MySQL, MongoDB, Ethical Security Auditing</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800 mb-2">
                শিক্ষাগত যোগ্যতা (EDUCATION)
              </h3>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">
                    এইচএসসি (Higher Secondary Certificate)
                  </span>
                  <span className="text-xs text-cyan-700 font-mono font-bold">পাসিং সন: ২০২৫</span>
                </div>
                <p className="text-xs text-slate-600 mt-0.5">সরকারি আকবর আলী কলেজ (Govt Akbar Ali College)</p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800 mb-2">
                কাজের অভিজ্ঞতা (WORK EXPERIENCE)
              </h3>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">
                    ইন্ডিপেন্ডেন্ট ডেভেলপার (Independent Developer)
                  </span>
                  <span className="text-xs text-cyan-700 font-mono font-bold">২০১৯ — বর্তমান (৬+ বছর)</span>
                </div>
                <p className="text-xs text-slate-600">
                  ফুল স্ট্যাক ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট, বট অটোমেশন এবং সিকিউরিটি টুল রিসার্চ।
                </p>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800 mb-2">
                সফল প্রজেক্টসমূহ (PROJECT HIGHLIGHTS)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {projectsData.map((p, idx) => (
                  <div key={p.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block">{idx + 1}. {p.title}</span>
                    <span className="text-slate-500 text-[11px] line-clamp-1">{p.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
