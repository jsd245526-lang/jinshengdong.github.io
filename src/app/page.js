'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import Hero from '@/components/Hero';
import GrowthTimeline from '@/components/GrowthTimeline';
import SkillGroup from '@/components/SkillGroup';
import ProjectCard from '@/components/ProjectCard';

export default function HomePage() {
  const { t } = useLanguage();
  const router = useRouter();

  const projects = t('projects.list');
  const previewProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* 成长轨迹 */}
      <GrowthTimeline />

      {/* 个人特长 */}
      <SkillGroup />

      {/* 项目概览 */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* 标题 */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">{t('projectOverview.title')}</span>
            </h2>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {t('projectOverview.subtitle')}
            </p>
          </motion.div>

          {/* 项目卡片网格 */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
              hidden: {},
            }}
          >
            {previewProjects.map((project, i) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
                }}
              >
                <ProjectCard
                  project={project}
                  index={i}
                  onClick={() => router.push('/projects')}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* 查看全部 */}
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.button
              onClick={() => router.push('/projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border transition-colors duration-300"
              style={{
                borderColor: 'var(--color-glass-border)',
                color: 'var(--color-text-secondary)',
              }}
              whileHover={{
                borderColor: 'var(--color-accent)',
                color: 'var(--color-text-primary)',
                x: 4,
              }}
              whileTap={{ scale: 0.97 }}
            >
              {t('nav.projects')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 关于我 */}
      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="glass-card p-8 sm:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              <span className="text-gradient">{t('aboutMe.title')}</span>
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {t('aboutMe.content')}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
