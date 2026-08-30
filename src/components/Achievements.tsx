import React from 'react';
import { motion } from 'motion/react';
import { achievementsNote } from '../data/portfolioData';
import { Sparkles, Trophy, Compass, CheckCircle, Target, Rocket } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 sm:py-28 bg-slate-100/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header in Bengali */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold font-mono mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>অর্জন ও রোডম্যাপ (ROADMAP)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            অর্জন ও ভবিষ্যৎ লক্ষ্য
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            প্রতিনিয়ত নতুন প্রযুক্তি চর্চা, সাইবার সিকিউরিটি রিসার্চ ও যুগোপযোগী ওয়েব সল্যুশন
            তৈরির চলমান যাত্রা।
          </p>
        </div>

        {/* Honest Bengali Milestone Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-xs hover:border-cyan-300 transition-all text-center relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-cyan-500/20">
              <Trophy className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {achievementsNote.message}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              {achievementsNote.description}
            </p>

            {/* Upcoming Roadmap Focus Areas */}
            <div className="pt-6 border-t border-slate-100 text-left">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
                <Rocket className="w-4 h-4 text-cyan-600" />
                <span>চলমান ডেভেলপমেন্ট রোডম্যাপ</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {achievementsNote.upcomingMilestones.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-medium flex items-start gap-2.5 shadow-xs"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
