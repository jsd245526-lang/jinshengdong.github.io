'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Bot, Cog, ClipboardList, FileText, Check, Sparkles } from 'lucide-react';

// 将 content.js 里的 emoji 映射为 Lucide 组件
const iconMap = {
  '🤖': Bot,
  '⚙️': Cog,
  '📋': ClipboardList,
  '📄': FileText,
  '🔗': Sparkles,
  '🛠️': Cog,
  '🔬': Sparkles,
};

const fallbackIcon = Sparkles;

function SkillCategory({ category, icon, items, variant }) {
  const isCurrent = variant === 'current';
  const IconComponent = iconMap[icon] || fallbackIcon;

  return (
    <motion.div
      className="glass-card p-5"
      style={{
        borderColor: isCurrent ? 'var(--color-border)' : 'rgba(6, 182, 212, 0.2)',
        borderStyle: isCurrent ? 'solid' : 'dashed',
        boxShadow: isCurrent ? 'none' : '0 0 20px rgba(6, 182, 212, 0.06)',
      }}
      whileHover={{
        borderColor: isCurrent ? 'var(--color-accent)' : 'var(--color-accent-cyan)',
        y: -2,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* 图标 + 分类名 */}
      <div className="flex items-center gap-2 mb-3">
        <IconComponent
          size={18}
          style={{ color: isCurrent ? 'var(--color-accent)' : 'var(--color-accent-cyan)' }}
        />
        <h4 className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
          {category}
        </h4>
      </div>

      {/* 技能列表 */}
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <motion.li
            key={i}
            className="text-xs flex items-start gap-2"
            style={{ color: 'var(--color-text-secondary)' }}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
          >
            <span className="mt-0.5 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: 'var(--color-accent)' }} />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function SkillGroup() {
  const { t } = useLanguage();

  const currentSkills = t('skills.current');
  const learningSkills = t('skills.learning');

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">{t('skills.title')}</span>
        </motion.h2>

        {/* 双区布局 */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* 左：已经在用的 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--color-accent)', color: '#fff' }}
              >
                <Check size={16} strokeWidth={3} />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                {t('skills.currentLabel')}
              </h3>
            </div>
            <div className="space-y-4">
              {currentSkills.map((cat) => (
                <SkillCategory key={cat.category} {...cat} variant="current" />
              ))}
            </div>
          </motion.div>

          {/* 右：正在深入的 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  border: '1px dashed var(--color-accent-cyan)',
                  color: 'var(--color-accent-cyan)',
                }}
              >
                <Sparkles size={16} />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                {t('skills.learningLabel')}
              </h3>
            </div>
            <div className="space-y-4">
              {learningSkills.map((cat) => (
                <SkillCategory key={cat.category} {...cat} variant="learning" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
