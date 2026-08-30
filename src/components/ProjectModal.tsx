import React from 'react';
import { ProjectItem } from '../types';
import {
  X,
  ExternalLink,
  ShieldCheck,
  Code2,
  Bot,
  Layers,
  Sparkles,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-cyan-100 overflow-hidden z-10 my-8"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Project Details"
            >
              <X className="w-5 h-5" />
            </button>

            {project.badge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono mb-2">
                <Sparkles className="w-3 h-3" />
                {project.badge}
              </span>
            )}

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-cyan-200 font-mono">
              ক্যাটাগরি: {project.category === 'bots' ? 'বট ও অটোমেশন' : project.category === 'security' ? 'সাইবার সিকিউরিটি' : 'ওয়েব অ্যাপ্লিকেশন'}
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 mb-2">
                প্রজেক্ট বিবরণ (OVERVIEW)
              </h4>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 mb-3">
                  মূল বৈশিষ্ট্য ও আর্কিটেকচার (FEATURES)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium leading-tight">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 mb-2.5">
                ব্যবহৃত টেকনোলজি (TECH STACK)
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* External Links / Status */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              {project.connectedPage ? (
                <a
                  href={project.connectedPage.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-sm transition-all"
                >
                  <span>{project.connectedPage.buttonLabel}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : project.externalUrl ? (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-cyan-600 hover:bg-cyan-700 shadow-sm transition-all"
                >
                  <span>{project.externalLabel || 'লিঙ্ক দেখুন'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>ইন্টারনাল / প্রোডাকশন ডেপ্লয়মেন্ট</span>
                </div>
              )}

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                বন্ধ করুন (Close)
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
