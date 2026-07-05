'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = t('projects.list');
  const modalLabels = t('projects.modal');

  return (
    <>
      {/* 页面头部 */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gradient">{t('projects.title')}</span>
          </motion.h1>
          <motion.p
            className="text-sm"
            style={{ color: 'var(--color-text-secondary)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {t('projects.intro')}
          </motion.p>
        </div>
      </section>

      {/* 项目卡片网格 */}
      <section className="relative pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 项目详情弹窗 */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* 遮罩 */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(null)}
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            >
              {/* 弹窗卡片 */}
              <motion.div
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8"
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                }}
                layoutId={`project-card-${selectedProject.id}`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* 关闭按钮 */}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-colors"
                  style={{
                    color: 'var(--color-text-secondary)',
                    border: '1px solid var(--color-glass-border)',
                  }}
                  whileHover={{
                    color: 'var(--color-text-primary)',
                    borderColor: 'var(--color-accent)',
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>

                {/* 获奖标签 */}
                {selectedProject.award && (
                  <motion.div
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                    style={{
                      background: selectedProject.awardLevel === 'national'
                        ? 'rgba(99, 102, 241, 0.15)'
                        : 'rgba(6, 182, 212, 0.12)',
                      color: selectedProject.awardLevel === 'national'
                        ? 'var(--color-accent)'
                        : 'var(--color-accent-cyan)',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    🏆 {selectedProject.award}
                  </motion.div>
                )}

                {/* 标题 */}
                <motion.h2
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                >
                  {selectedProject.title}
                </motion.h2>

                {/* 副标题 */}
                <motion.p
                  className="text-sm mb-4"
                  style={{ color: 'var(--color-text-secondary)' }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {selectedProject.subtitle}
                </motion.p>

                {/* 元信息 */}
                <motion.div
                  className="flex flex-wrap gap-x-6 gap-y-2 text-xs mb-6"
                  style={{ color: 'var(--color-text-secondary)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.18 }}
                >
                  <span>
                    <span className="font-medium" style={{ color: 'var(--color-accent-cyan)' }}>{modalLabels.period}：</span>
                    {selectedProject.period}
                  </span>
                  <span>
                    <span className="font-medium" style={{ color: 'var(--color-accent-cyan)' }}>{modalLabels.role}：</span>
                    {selectedProject.role}
                  </span>
                </motion.div>

                {/* 标签 */}
                <motion.div
                  className="flex flex-wrap gap-1.5 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-xs"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        color: 'var(--color-text-secondary)',
                        border: '1px solid var(--color-glass-border)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* 项目背景 */}
                <motion.div
                  className="mb-5"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 }}
                >
                  <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>
                    {modalLabels.background}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {selectedProject.background}
                  </p>
                </motion.div>

                {/* 具体工作 */}
                <motion.div
                  className="mb-5"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>
                    {modalLabels.work}
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.work.map((item, i) => (
                      <motion.li
                        key={i}
                        className="text-sm flex items-start gap-2"
                        style={{ color: 'var(--color-text-secondary)' }}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.28 + i * 0.04 }}
                      >
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-accent-cyan)' }} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* 项目成果 */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32 }}
                >
                  <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-accent)' }}>
                    {modalLabels.result}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {selectedProject.result}
                  </p>
                </motion.div>

                {/* 成长标签 */}
                {selectedProject.growthTag && (
                  <motion.div
                    className="flex items-center gap-2 text-sm font-medium pt-4"
                    style={{
                      color: 'var(--color-accent-cyan)',
                      borderTop: '1px solid var(--color-border)',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.36 }}
                  >
                    <span>↗</span>
                    {selectedProject.growthTag}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
