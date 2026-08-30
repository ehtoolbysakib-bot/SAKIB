import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data/portfolioData';
import { ProjectCategory, ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import {
  Sparkles,
  ExternalLink,
  Bot,
  ShieldCheck,
  Layout,
  Lock,
  Eye,
  ArrowUpRight,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: { key: ProjectCategory; label: string; count: number }[] = [
    { key: 'all', label: 'সব প্রজেক্ট', count: projectsData.length },
    {
      key: 'bots',
      label: 'বট ও অটোমেশন',
      count: projectsData.filter((p) => p.category === 'bots').length,
    },
    {
      key: 'web',
      label: 'ওয়েব অ্যাপ্লিকেশন',
      count: projectsData.filter((p) => p.category === 'web').length,
    },
    {
      key: 'security',
      label: 'সাইবার সিকিউরিটি',
      count: projectsData.filter((p) => p.category === 'security').length,
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'bots':
        return Bot;
      case 'security':
        return ShieldCheck;
      default:
        return Layout;
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header in Bengali */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold font-mono mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>প্রজেক্ট পোর্টফোলিও (PROJECTS)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            সফল প্রজেক্ট ও রিয়েল-ওয়ার্ল্ড সল্যুশন
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            বিগত ৬+ বছরে তৈরি করা বিভিন্ন ওয়েব অ্যাপ্লিকেশন, অটোমেটেড কমিউনিটি বট এবং সাইবার
            সিকিউরিটি রিসার্চ টুলস এর সংকলন।
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                id={`project-filter-${cat.key}`}
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

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);

              return (
                <motion.div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                  className="h-full"
                >
                  <div className="group relative rounded-3xl bg-white border border-slate-200 hover:border-cyan-400 p-5 sm:p-6 shadow-xs hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      {/* Visual Header / Banner */}
                      <div className="relative w-full h-40 sm:h-44 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 p-4 flex flex-col justify-between overflow-hidden mb-5 group-hover:shadow-inner transition-all">
                        {/* Decorative pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

                        {/* Top Row in Card Banner */}
                        <div className="flex items-center justify-between z-10">
                          <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                            <CategoryIcon className="w-4 h-4" />
                          </div>

                          {project.badge && (
                            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-[11px] font-mono font-medium">
                              {project.badge}
                            </span>
                          )}
                        </div>

                        {/* Banner Title */}
                        <div className="z-10 mt-auto">
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-400">
                            {project.category === 'bots'
                              ? 'বট ও অটোমেশন'
                              : project.category === 'security'
                              ? 'সাইবার সিকিউরিটি'
                              : 'ওয়েব অ্যাপ্লিকেশন'}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight line-clamp-1">
                            {project.title}
                          </h4>
                        </div>

                        {/* Hover Overlay Button */}
                        <div className="absolute inset-0 bg-cyan-950/70 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-opacity flex items-center justify-center z-20">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs flex items-center gap-1.5 shadow-lg transform scale-95 group-hover:scale-100 transition-transform cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5 text-cyan-600" />
                            <span>এক নজরে দেখুন</span>
                          </button>
                        </div>
                      </div>

                      {/* Project Title & Bengali Description */}
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 cursor-pointer py-1"
                      >
                        <span>বিস্তারিত বিবরণ</span>
                      </button>

                      {project.connectedPage ? (
                        <a
                          href={project.connectedPage.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-xs transition-all"
                        >
                          <span>{project.connectedPage.buttonLabel}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : project.externalUrl ? (
                        <a
                          href={project.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-700 shadow-xs transition-all"
                        >
                          <span>{project.externalLabel || 'লিঙ্ক দেখুন'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-mono">
                          <Lock className="w-3 h-3 text-slate-400" />
                          <span>প্রোডাকশন</span>
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
