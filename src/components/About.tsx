import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo, statistics } from '../data/portfolioData';
import {
  Code,
  ShieldCheck,
  Bot,
  Layers,
  Sparkles,
  ExternalLink,
  User,
  Clock,
  Briefcase,
  Zap,
  CheckCircle2,
} from 'lucide-react';

export const About: React.FC = () => {
  const keyStrengths = [
    {
      title: 'ফুল স্ট্যাক ওয়েব আর্কিটেকচার',
      desc: 'ডেটাবেজ স্কিমা থেকে শুরু করে রেস্পনসিভ ফ্রন্টএন্ড পর্যন্ত দ্রুতগতির ও স্কেলেবল অ্যাপ্লিকেশন ডেভেলপমেন্ট।',
      icon: Code,
    },
    {
      title: 'বট ডেভেলপমেন্ট ও চ্যাট অটোমেশন',
      desc: 'মেসেঞ্জার ও টেলিগ্রামের জন্য কাস্টম লজিকভিত্তিক ইন্টারঅ্যাক্টিভ ও অটোমেটেড কমিউনিটি বট তৈরি।',
      icon: Bot,
    },
    {
      title: 'সাইবার সিকিউরিটি রিসার্চ ও টুলিং',
      desc: 'অনুমোদিত পরিবেশে সিকিউরিটি ইউটিলিটি স্ক্রিপ্ট, অডিট হেল্পার ও রিসার্চ টুলস ডেভেলপমেন্ট।',
      icon: ShieldCheck,
    },
    {
      title: 'UI/UX ডিজাইন ও মোবাইল-ফার্স্ট এক্সপেরিয়েন্স',
      desc: 'পরিচ্ছন্ন, আধুনিক, হালকা থিমভিত্তিক ব্যবহারকারী-বান্ধব ইন্টারফেস ও মসৃণ অ্যানিমেশন।',
      icon: Layers,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header in Bengali */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold font-mono mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>আমার সম্পর্কে (ABOUT ME)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            আধুনিক, দ্রুতগতির ও নিরাপদ ডিজিটাল সল্যুশন
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            বিগত ৬ বছরেরও বেশি সময় ধরে বাস্তবমুখী প্রোগ্রামিং, ওয়েব প্ল্যাটফর্ম ও অটোমেশন তৈরি
            করে নিজেকে একজন দক্ষ ফুল স্ট্যাক ডেভেলপার হিসেবে গড়ে তুলেছি।
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Developer Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md rounded-3xl p-1 bg-gradient-to-br from-cyan-400/40 via-slate-200 to-cyan-500/30 shadow-2xl">
              <div className="rounded-[22px] bg-white p-6 sm:p-8 border border-slate-100 flex flex-col items-center text-center relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-100/60 rounded-full blur-xl pointer-events-none" />

                {/* Real Professional Profile Photo */}
                <div className="relative mb-5 group">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 shadow-xl group-hover:scale-102 transition-transform duration-300">
                    <div className="w-full h-full rounded-[14px] overflow-hidden relative bg-slate-100">
                      <img
                        src={personalInfo.avatarUrl}
                        alt="MD SAKIB HOSEN - Professional Full Stack Developer"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Live Status indicator */}
                  <div className="absolute -bottom-2 -right-1 bg-white px-2.5 py-1 rounded-full shadow-md border border-emerald-200 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ইন্ডিপেন্ডেন্ট ডেভেলপার</span>
                  </div>
                </div>

                {/* Developer Name & Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                  MD SAKIB HOSEN
                </h3>
                <p className="text-sm font-bold text-cyan-700 mb-4 font-mono">
                  ফুল স্ট্যাক ডেভেলপার ও UI/UX ডিজাইনার
                </p>

                {/* Key Spec Badges */}
                <div className="grid grid-cols-2 gap-2.5 w-full mb-6 text-left">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-mono mb-0.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-600" />
                      <span>অভিজ্ঞতা</span>
                    </div>
                    <span className="text-xs font-bold text-slate-900">৬+ বছর</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-mono mb-0.5">
                      <Briefcase className="w-3.5 h-3.5 text-cyan-600" />
                      <span>কাজের ধরন</span>
                    </div>
                    <span className="text-xs font-bold text-slate-900">ইন্ডিপেন্ডেন্ট</span>
                  </div>
                </div>

                {/* Direct Action Link */}
                <a
                  href="#contact"
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-cyan-700 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>সরাসরি কথা বলুন</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Areas in Bengali */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              দক্ষতা, কর্মতৎপরতা ও আধুনিক প্রযুক্তির মেলবন্ধন
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              আমি একজন স্বাধীন ডেভেলপার, যার রয়েছে ৬ বছরেরও বেশি সময়ের প্র্যাক্টিক্যাল অভিজ্ঞতা।
              ওয়েব প্রোগ্রামিং, কাস্টম বট ইঞ্জিনিয়ারিং, অটোমেশন স্ক্রিপ্ট এবং আধুনিক UI/UX ডিজাইনে
              আমার বিশেষ আগ্রহ ও দক্ষতা রয়েছে। কোড লেখার ক্ষেত্রে গতি, নিরাপত্তা এবং
              মোবাইল-বান্ধব রেস্পনসিভনেসকে সর্বোচ্চ অগ্রাধিকার দিই।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {keyStrengths.map((strength) => {
                const IconComponent = strength.icon;
                return (
                  <div
                    key={strength.title}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 transition-colors shadow-xs hover:shadow-md"
                  >
                    <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-2.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{strength.title}</h4>
                    <p className="text-slate-500 text-xs leading-normal">{strength.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-sky-50 border border-cyan-200 flex items-start gap-3">
              <Zap className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-cyan-900 font-mono mb-0.5">
                  ডেভেলপমেন্ট দর্শন (DEVELOPMENT PHILOSOPHY)
                </h5>
                <p className="text-xs text-slate-700 leading-relaxed">
                  প্রতিটি প্রজেক্টেই ক্লিন কোড আর্কিটেকচার, লাইটওয়েট ডিপেন্ডেন্সি এবং ১০০%
                  অ্যাক্সেসিবল রেস্পনসিভ লেআউট নিশ্চিত করা হয়।
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Area in Bengali */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statistics.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all text-center group h-full flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors font-mono">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-cyan-800 mb-1">{stat.label}</div>
                <div className="text-[11px] text-slate-500 leading-tight">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
