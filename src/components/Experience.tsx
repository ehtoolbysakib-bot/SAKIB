import React from 'react';
import { motion } from 'motion/react';
import { experienceData } from '../data/portfolioData';
import {
  Sparkles,
  Briefcase,
  CheckCircle,
  Calendar,
  Layers,
  Terminal,
  Code2,
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-100/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header in Bengali */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold font-mono mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>কাজের অভিজ্ঞতা (EXPERIENCE)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            পেশাদার অভিজ্ঞতা ও কাজের ট্র্যাক রেকর্ড
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            বিগত ৬ বছরেরও বেশি সময় ধরে সফটওয়্যার ডেভেলপমেন্ট, ক্লায়েন্ট প্রজেক্ট ও স্বাধীন ডিজিটাল
            সল্যুশন তৈরিতে অবিচল অভিজ্ঞতা।
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-7 sm:pl-10 pb-12 border-l-2 border-cyan-400/60 last:pb-0"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-4 sm:-left-5 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-cyan-500 shadow-md flex items-center justify-center text-cyan-600">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Main Timeline Card */}
              <div className="rounded-3xl bg-white border border-slate-200/90 hover:border-cyan-400 p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all">
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-bold text-cyan-700 font-mono">
                      {exp.type}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {exp.summary}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700">
                    মূল দায়িত্ব ও অর্জনসমূহ (SCOPE & DELIVERABLES)
                  </h4>
                  {exp.responsibilities.map((resp, rIndex) => (
                    <div key={rIndex} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-600 mr-2 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5 text-cyan-600" /> টেক স্ট্যাক:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
