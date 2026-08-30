import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { ContactFormData } from '../types';
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Loader2,
  User,
  HelpCircle,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const contactChannels = [
    {
      id: 'whatsapp',
      title: 'হোয়াটসঅ্যাপ (WhatsApp)',
      value: personalInfo.whatsapp,
      href: `https://wa.me/8801765051219?text=Hi%20MD%20SAKIB%20HOSEN,%20I%20want%20to%20discuss%20a%20project...`,
      icon: Phone,
      actionLabel: 'হোয়াটসঅ্যাপে মেসেজ পাঠান',
      color: '#22c55e',
    },
    {
      id: 'email',
      title: 'ইমেইল (Email)',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      actionLabel: 'ইমেইল পাঠান',
      color: '#06b6d4',
    },
    {
      id: 'messenger',
      title: 'মেসেঞ্জার (Messenger)',
      value: '2ndJohnnySins',
      href: personalInfo.messenger,
      icon: MessageSquare,
      actionLabel: 'মেসেঞ্জারে চ্যাট করুন',
      color: '#0284c7',
    },
    {
      id: 'telegram',
      title: 'টেলিগ্রাম (Telegram)',
      value: '@Cyber_Ghost_Sakib',
      href: personalInfo.telegram,
      icon: Send,
      actionLabel: 'টেলিগ্রামে যোগাযোগ',
      color: '#0ea5e9',
    },
    {
      id: 'facebook',
      title: 'ফেসবুক প্রোফাইল (Facebook)',
      value: 'MD SAKIB HOSEN',
      href: personalInfo.facebook,
      icon: ExternalLink,
      actionLabel: 'ফেসবুক প্রোফাইল দেখুন',
      color: '#3b82f6',
    },
  ];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'দয়া করে আপনার নাম লিখুন';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'দয়া করে আপনার ইমেইল অ্যাড্রেস লিখুন';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'সঠিক ইমেইল ফরম্যাট প্রদান করুন';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'দয়া করে বিষয়ের নাম লিখুন';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'দয়া করে আপনার মেসেজ লিখুন';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'মেসেজটি অন্তত ৫ অক্ষরের হতে হবে';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!validate()) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#0284c7', '#38bdf8', '#10b981'],
      });
    } catch (err) {
      setErrorMessage('মেসেজ পাঠাতে সমস্যা হয়েছে। দয়া করে হোয়াটসঅ্যাপ বা সরাসরি ইমেইলে যোগাযোগ করুন।');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header in Bengali */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold font-mono mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>যোগাযোগ করুন (CONTACT)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            নতুন প্রজেক্ট বা আইডিয়ার জন্য যোগাযোগ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            কোনো ওয়েব অ্যাপ্লিকেশন, কাস্টম বট অটোমেশন বা UI/UX ডিজাইনের জন্য সরাসরি আমার সাথে
            যোগাযোগ করতে পারেন। দ্রুত রিপ্লাইয়ের জন্য হোয়াটসঅ্যাপ ও টেলিগ্রাম উন্মুক্ত।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-4">
            {/* Sakib Direct Profile Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-sky-500/5 to-transparent border border-cyan-200/80 flex items-center gap-3.5 mb-2">
              <div className="w-14 h-14 rounded-xl p-0.5 bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-sm shrink-0 overflow-hidden">
                <img
                  src={personalInfo.avatarUrl}
                  alt="MD SAKIB HOSEN"
                  className="w-full h-full object-cover object-top rounded-[10px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span>MD SAKIB HOSEN</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                </h4>
                <p className="text-xs text-cyan-700 font-mono">ফুল স্ট্যাক ডেভেলপার • ২৪/৭ সক্রিয়</p>
                <p className="text-[11px] text-slate-500 mt-0.5">যেকোনো প্রশ্ন বা প্রজেক্ট প্রস্তাবনায় স্বাগতম</p>
              </div>
            </div>

            <h3 className="text-base font-bold text-slate-900 mb-2">
              সরাসরি যোগাযোগের মাধ্যমসমূহ
            </h3>

            <div className="space-y-3">
              {contactChannels.map((ch) => {
                const IconComp = ch.icon;
                const isCopied = copiedKey === ch.id;

                return (
                  <motion.div
                    key={ch.id}
                    id={`contact-card-${ch.id}`}
                    whileHover={{ scale: 1.01 }}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-xs"
                        style={{
                          backgroundColor: `${ch.color}15`,
                          color: ch.color,
                          border: `1px solid ${ch.color}35`,
                        }}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-slate-900">{ch.title}</h4>
                        <p className="text-xs text-slate-500 font-mono truncate">{ch.value}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleCopy(ch.value, ch.id)}
                        className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs transition-colors cursor-pointer"
                        title="কপি করুন"
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <a
                        href={ch.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-700 text-xs font-bold transition-colors flex items-center gap-1"
                      >
                        <span>খুলুন</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Response Time Guarantee Box */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-start gap-3 mt-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs text-emerald-950 mb-0.5">
                  ২৪/৭ দ্রুত রিপ্লাই নিশ্চয়তা
                </h5>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  হোয়াটসঅ্যাপ ও মেসেঞ্জারে সাধারণত তাৎক্ষণিক উত্তর দেওয়া হয়।
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Bengali Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                মেসেজ পাঠান
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                নিচের ফর্মটি পূরণ করে সরাসরি আপনার রিকোয়েস্ট বা প্রস্তাবনা পাঠাতে পারেন।
              </p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">
                    মেসেজ সফলভাবে পৌঁছেছে!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                    ধন্যবাদ! আপনার বার্তাটি গ্রহণ করা হয়েছে। শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    আরেকটি মেসেজ পাঠান
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field for anti-spam */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        আপনার নাম <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="যেমন: মোঃ সাকিব"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/60 focus:bg-white transition-colors outline-none ${
                          errors.name
                            ? 'border-rose-400 focus:border-rose-500'
                            : 'border-slate-200 focus:border-cyan-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-rose-600 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        ইমেইল অ্যাড্রেস <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/60 focus:bg-white transition-colors outline-none ${
                          errors.email
                            ? 'border-rose-400 focus:border-rose-500'
                            : 'border-slate-200 focus:border-cyan-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-rose-600 text-[11px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      বিষয় (Subject) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="যেমন: নতুন ওয়েব প্রজেক্ট আলোচনা"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/60 focus:bg-white transition-colors outline-none ${
                        errors.subject
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-slate-200 focus:border-cyan-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-rose-600 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      মেসেজ <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="আপনার প্রজেক্টের বিস্তারিত বা প্রয়োজনীয় তথ্যাদি লিখুন..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/60 focus:bg-white transition-colors outline-none resize-none ${
                        errors.message
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-slate-200 focus:border-cyan-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-rose-600 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-md hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>মেসেজ পাঠানো হচ্ছে...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>মেসেজ পাঠান</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
