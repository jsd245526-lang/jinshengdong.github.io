'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import Timeline from '@/components/Timeline';

const awardLevelColors = {
  national: { bg: 'rgba(99, 102, 241, 0.15)', color: 'var(--color-accent)' },
  province: { bg: 'rgba(6, 182, 212, 0.12)', color: 'var(--color-accent-cyan)' },
  city: { bg: 'rgba(139, 92, 246, 0.12)', color: '#a78bfa' },
  school: { bg: 'rgba(255,255,255,0.04)', color: 'var(--color-text-secondary)' },
};

const levelLabels = {
  national: '国家级',
  province: '省级',
  city: '市级',
  school: '校级',
};

function AwardBadge({ award }) {
  const { language } = useLanguage();
  const colors = awardLevelColors[award.level] || awardLevelColors.school;

  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
      style={{ background: colors.bg, color: colors.color, border: `1px solid ${colors.bg}` }}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02, borderColor: colors.color }}
    >
      <span className="text-base">{award.level === 'national' ? '🏆' : award.level === 'province' ? '🥇' : award.level === 'city' ? '🥈' : '📜'}</span>
      <span>{award.text}</span>
    </motion.div>
  );
}

export default function ResumePage() {
  const { t } = useLanguage();
  const resume = t('resumePage');

  // Build experience timeline items
  const experienceItems = resume.experiences.list.map((exp) => ({
    period: exp.period,
    org: exp.org,
    title: exp.role,
    details: exp.details,
  }));

  return (
    <>
      {/* 页面头部 */}
      <section className="relative pt-32 pb-16 px-6 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">{resume.title}</span>
        </motion.h1>
        <motion.p
          className="text-sm"
          style={{ color: 'var(--color-text-secondary)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {resume.education.school} · {resume.education.major}
        </motion.p>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-20">
        {/* 教育背景 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-gradient">{resume.education.title}</span>
          </h2>
          <div className="glass-card p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  {resume.education.school}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-accent-cyan)' }}>
                  {resume.education.major} · {resume.education.degree}
                </p>
              </div>
              <span
                className="text-xs px-3 py-1 rounded-full self-start"
                style={{
                  color: 'var(--color-accent)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  background: 'rgba(99, 102, 241, 0.08)',
                }}
              >
                {resume.education.period}
              </span>
            </div>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {resume.education.detail}
            </p>
          </div>
        </motion.section>

        {/* 竞赛获奖 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-gradient">{resume.awards.title}</span>
          </h2>
          <div className="space-y-3">
            {resume.awards.list.map((award, i) => (
              <AwardBadge key={i} award={award} />
            ))}
          </div>
        </motion.section>

        {/* 荣誉称号 + 技能证书 */}
        <div className="grid sm:grid-cols-2 gap-8">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-gradient">{resume.honors.title}</span>
            </h2>
            <div className="glass-card p-5">
              <ul className="space-y-2">
                {resume.honors.list.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm flex items-center gap-2"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <span className="text-base">🎖️</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-gradient">{resume.certificates.title}</span>
            </h2>
            <div className="glass-card p-5">
              <ul className="space-y-2">
                {resume.certificates.list.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm flex items-center gap-2"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <span className="text-base">📜</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>

        {/* 学校经历 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-gradient">{resume.experiences.title}</span>
          </h2>
          <div className="glass-card p-6">
            <Timeline items={experienceItems} variant="compact" />
          </div>
        </motion.section>

        {/* 自我评价 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-gradient">{resume.selfEval.title}</span>
          </h2>
          <div className="glass-card p-6 sm:p-8">
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {resume.selfEval.content}
            </p>
          </div>
        </motion.section>
      </div>
    </>
  );
}
