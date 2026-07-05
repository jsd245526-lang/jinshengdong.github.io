'use client';

import { motion } from 'framer-motion';

/**
 * 通用时间线组件
 * @param {Array} items - 时间线数据，每项含 { period, title, subtitle?, details? }
 * @param {string} variant - 'default' | 'compact'
 */
export default function Timeline({ items, variant = 'default' }) {
  return (
    <div className="relative">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="relative flex gap-5 pb-10 last:pb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
        >
          {/* 时间线竖线 + 圆点 */}
          <div className="flex flex-col items-center flex-shrink-0">
            <motion.div
              className="w-2.5 h-2.5 rounded-full mt-1.5"
              style={{
                background: i === 0 ? 'var(--color-accent)' : 'var(--color-accent-cyan)',
                boxShadow: i === 0
                  ? '0 0 10px rgba(99, 102, 241, 0.5)'
                  : '0 0 6px rgba(6, 182, 212, 0.3)',
              }}
              whileInView={{ scale: [0.8, 1.2, 1] }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
            />
            {i < items.length - 1 && (
              <div
                className="w-px flex-1 mt-2"
                style={{
                  background: 'linear-gradient(to bottom, var(--color-accent), var(--color-accent-cyan), transparent)',
                }}
              />
            )}
          </div>

          {/* 内容 */}
          <div className={`${variant === 'compact' ? 'pb-2' : ''}`}>
            {/* 时间 */}
            <p
              className="text-xs font-mono tracking-wider mb-1"
              style={{ color: 'var(--color-accent)' }}
            >
              {item.period}
            </p>

            {/* 标题 */}
            {item.org && (
              <p className="text-xs font-medium mb-1" style={{ color: 'var(--color-accent-cyan)' }}>
                {item.org}
              </p>
            )}

            {/* 角色/标题 */}
            <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
              {item.title || item.role}
            </h4>

            {/* 详细信息 */}
            {item.details && item.details.length > 0 && (
              <ul className="space-y-1.5">
                {item.details.map((detail, j) => (
                  <li
                    key={j}
                    className="text-xs flex items-start gap-2"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <span className="mt-1 flex-shrink-0 w-1 h-1 rounded-full" style={{ background: 'var(--color-text-secondary)' }} />
                    {detail}
                  </li>
                ))}
              </ul>
            )}

            {/* 可选副标题 */}
            {item.subtitle && (
              <p className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                {item.subtitle}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
