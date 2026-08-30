import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData } from '../data/portfolioData';
import { SkillCategory } from '../types';
import {
  Sparkles,
  FileCode2,
  Palette,
  Braces,
  Atom,
  Server,
  Code2,
  Terminal,
  Database,
  Boxes,
  CheckCircle,
  Cpu,
  Layers,
  Zap,
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  FileCode2,
  Palette,
  Braces,
  Atom,
  Server,
  Code2,
  Terminal,
  Database,
  Boxes,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: { key: SkillCategory; label: string; count: number }[] = [
    { key: 'all', label: 'সব টেকনোলজি', count: skillsData.length },
    {
      key: 'frontend',
      label: 'ফ্রন্টএন্ড ও UI',
      count: skillsData.filter((s) => s.category === 'frontend').length,
    },
    {
      key: 'backend',
      label: 'ব্যাকএন্ড ও স্ক্রিপ্টিং',
      count: skillsData.filter((s) => s.category === 'backend').length,
    },
    {
      key: 'database',
      label: 'ডেটাবেজ ও স্টোরেজ',
      count: skillsData.filter((s) => s.category === 'database').length,
    },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-100/60 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header in Bengali */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold font-mono mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>টেকনিক্যাল দক্ষতাসমূহ (SKILLS & STACK)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            প্রযুক্তি ও প্রোগ্রামিং টুলসেট
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            বিগত ৬+ বছর ধরে বাস্তব প্রজেক্টে নিয়মিত ব্যবহৃত ফ্রন্টএন্ড, ব্যাকএন্ড, ডেটাবেজ ও
            অটোমেশন টেকনোলজিগুলোর সমন্বয়।
          </p>
        </div>

        {/* Category Filter Buttons in Bengali */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                id={`skill-filter-${cat.key}`}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-cyan-700 border border-slate-200 shadow-xs'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-md font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.iconName] || Code2;
              const isHovered = hoveredSkill === skill.id;

              return (
                <motion.div
                  key={skill.id}
                  id={`skill-card-${skill.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="h-full"
                >
                  <div className="h-full rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 p-5 sm:p-6 shadow-xs hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      {/* Top Row: Icon & Category Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs"
                          style={{
                            backgroundColor: `${skill.color}15`,
                            color: skill.color,
                            border: `1px solid ${skill.color}35`,
                          }}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>

                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                          {skill.category === 'frontend'
                            ? 'ফ্রন্টএন্ড'
                            : skill.category === 'backend'
                            ? 'ব্যাকএন্ড'
                            : 'ডেটাবেজ'}
                        </span>
                      </div>

                      {/* Skill Name */}
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                        {skill.name}
                      </h3>

                      {/* Bengali Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {skill.levelDescription}
                      </p>
                    </div>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/70"
                        >
                          <CheckCircle className="w-3 h-3 text-cyan-600" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Highlights Bar */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                স্কেলেবল কোড ও ক্লিন আর্কিটেকচার
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm">
                সকল প্রজেক্টে রেস্পনসিভনেস, সিকিউরিটি ও ফাস্ট লোডিং নিশ্চিত করা হয়।
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 text-cyan-700 font-bold text-xs sm:text-sm transition-colors shrink-0"
          >
            প্রজেক্টে এদের ব্যবহার দেখুন →
          </a>
        </div>
      </div>
    </section>
  );
};
