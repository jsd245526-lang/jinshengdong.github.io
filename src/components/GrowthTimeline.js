'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

const statusConfig = {
  done: {
    dotClass: '',
    lineClass: '',
    cardBorder: 'var(--color-border)',
    dotStyle: {
      background: 'var(--color-accent)',
      boxShadow: '0 0 12px rgba(99, 102, 241, 0.4)',
    },
  },
  future: {
    dotClass: 'animate-pulse-glow',
    lineClass: 'border-dashed',
    cardBorder: 'rgba(6, 182, 212, 0.2)',
    dotStyle: {
      background: 'transparent',
      border: '2px solid var(--color-accent-cyan)',
      boxShadow: '0 0 10px rgba(6, 182, 212, 0.3)',
    },
  },
};

function TimelineNode({ item, index, isLast, isMobile }) {
  const { language } = useLanguage();
  const config = statusConfig[item.status];

  return (
    <motion.div
      className={`flex ${isMobile ? 'flex-row items-start gap-4' : 'flex-col items-center'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
    >
      {/* 节点圆点 */}
      <div className={`relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${config.dotClass}`} style={config.dotStyle}>
        {item.status === 'future' && (
          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--color-accent-cyan)' }} />
        )}
      </div>

      {/* 连接线（桌面端在节点下方，移动端在节点右侧） */}
      {!isLast && (
        isMobile ? (
          <div
            className={`flex-shrink-0 w-px h-12 self-center ml-5 ${config.lineClass}`}
            style={{
              background: item.status === 'done'
                ? 'linear-gradient(to bottom, var(--color-accent), transparent)'
                : `repeating-linear-gradient(to bottom, var(--color-accent-cyan) 0px, var(--color-accent-cyan) 3px, transparent 3px, transparent 7px)`,
            }}
          />
        ) : (
          <div
            className={`w-full h-px mt-3 ${config.lineClass}`}
            style={{
              background: item.status === 'done'
                ? 'linear-gradient(to right, var(--color-accent), transparent)'
                : `repeating-linear-gradient(to right, var(--color-accent-cyan) 0px, var(--color-accent-cyan) 4px, transparent 4px, transparent 10px)`,
            }}
          />
        )
      )}

      {/* 内容卡片 */}
      <motion.div
        className={`glass-card p-4 ${isMobile ? 'flex-1' : 'w-full mt-4'}`}
        style={{ borderColor: config.cardBorder }}
        whileHover={{ borderColor: 'var(--color-accent)' }}
        transition={{ duration: 0.3 }}
      >
        <p
          className="text-xs font-mono tracking-wider mb-1"
          style={{ color: item.status === 'done' ? 'var(--color-accent)' : 'var(--color-accent-cyan)' }}
        >
          {item.year}
        </p>
        <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--color-text-primary)' }}>
          {language === 'zh' ? item.title : item.status === 'future' && item.title === '· · ·' ? '· · ·' : item.title}
        </h3>
        {item.desc && (
          <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {item.desc}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function GrowthTimeline() {
  const { t } = useLanguage();
  const items = t('growth.items');

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
          <span className="text-gradient">{t('growth.title')}</span>
        </motion.h2>

        {/* 桌面端：横排 */}
        <div className="hidden md:grid md:grid-cols-5 md:gap-4">
          {items.map((item, i) => (
            <TimelineNode key={item.year} item={item} index={i} isLast={i === items.length - 1} isMobile={false} />
          ))}
        </div>

        {/* 移动端：竖排 */}
        <div className="flex md:hidden flex-col items-start pl-4">
          {items.map((item, i) => (
            <TimelineNode key={item.year} item={item} index={i} isLast={i === items.length - 1} isMobile={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
