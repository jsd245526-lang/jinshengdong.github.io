'use client';

import { motion } from 'framer-motion';

export default function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      className="glass-card p-6 cursor-pointer hover-lift group"
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.45 }}
      layoutId={`project-card-${project.id}`}
    >
      {/* 获奖标签 */}
      {project.award && (
        <div
          className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3"
          style={{
            background: project.awardLevel === 'national'
              ? 'rgba(99, 102, 241, 0.15)'
              : 'rgba(6, 182, 212, 0.12)',
            color: project.awardLevel === 'national'
              ? 'var(--color-accent)'
              : 'var(--color-accent-cyan)',
          }}
        >
          🏆 {project.award}
        </div>
      )}

      {/* 项目标题 */}
      <h3
        className="text-lg font-bold mb-1 group-hover:text-[var(--color-accent)] transition-colors"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {project.title}
      </h3>

      {/* 副标题 */}
      <p className="text-xs mb-3" style={{ color: 'var(--color-text-secondary)' }}>
        {project.subtitle}
      </p>

      {/* 时间 & 角色 */}
      <div className="flex flex-wrap gap-3 text-xs mb-4" style={{ color: 'var(--color-text-secondary)' }}>
        <span className="flex items-center gap-1">
          <span style={{ color: 'var(--color-accent-cyan)' }}>📅</span> {project.period}
        </span>
        <span className="flex items-center gap-1">
          <span style={{ color: 'var(--color-accent-cyan)' }}>👤</span> {project.role}
        </span>
      </div>

      {/* 标签 */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-xs"
            style={{
              background: 'rgba(255,255,255,0.04)',
              color: 'var(--color-text-secondary)',
              border: '1px solid var(--color-glass-border)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 成长标签 */}
      {project.growthTag && (
        <div
          className="flex items-center gap-1.5 text-xs font-medium"
          style={{ color: 'var(--color-accent-cyan)' }}
        >
          <span>↗</span>
          {project.growthTag}
        </div>
      )}
    </motion.div>
  );
}
