import React from 'react';
import { motion } from 'motion/react';
import { educationData } from '../data/portfolioData';
import {
  Sparkles,
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle2,
  Award,
  BookOpen,
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header in Bengali */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold font-mono mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>শিক্ষাগত যোগ্যতা (EDUCATION)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            প্রাতিষ্ঠানিক শিক্ষা ও সেলফ-লার্নিং
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            প্রাতিষ্ঠানিক উচ্চ মাধ্যমিক শিক্ষার পাশাপাশি বিগত ৬ বছর ধরে গভীর সেলফ-লার্নিং ও প্র্যাক্টিক্যাল
            প্রোগ্রামিং রিসার্চ।
          </p>
        </div>

        {/* Education Card in Bengali */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-1 bg-gradient-to-br from-cyan-400/30 via-slate-200 to-cyan-500/20 shadow-xl"
            >
              <div className="rounded-[22px] bg-white p-6 sm:p-10 border border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left Badge Card */}
                <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-sky-50 to-blue-500/10 border border-cyan-200/80 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 mb-3">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">
                    এইচএসসি (HSC)
                  </span>
                  <span className="text-xs font-mono text-cyan-700 font-bold mt-0.5">
                    পাসিং সন: ২০২৫
                  </span>
                </div>

                {/* Right Details */}
                <div className="md:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono font-bold inline-flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-600" />
                      {edu.degree}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600" />
                      সন: {edu.passingYear}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-cyan-600 shrink-0" />
                      <span>{edu.institution}</span>
                    </h3>
                    <p className="text-sm font-bold text-cyan-700">
                      Higher Secondary Certificate (HSC) • সিরাজগঞ্জ
                    </p>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>প্রাতিষ্ঠানিক তথ্য যাচাইকৃত ও নির্ভুল</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
