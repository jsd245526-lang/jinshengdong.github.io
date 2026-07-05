'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="aurora-bg relative min-h-screen flex items-center justify-center px-6 pt-16">
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* 姓名 */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <span className="text-gradient">{t('hero.name')}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl sm:text-2xl mb-4 font-medium"
          style={{ color: 'var(--color-text-primary)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {t('hero.tagline')}
        </motion.p>

        {/* 学校 */}
        <motion.p
          className="text-base sm:text-lg mb-3"
          style={{ color: 'var(--color-text-secondary)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* 求职意向 */}
        <motion.p
          className="inline-block mt-4 px-5 py-2 rounded-full text-sm font-medium border"
          style={{
            color: 'var(--color-accent-cyan)',
            borderColor: 'rgba(6, 182, 212, 0.3)',
            background: 'rgba(6, 182, 212, 0.06)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {t('hero.jobTarget')}
        </motion.p>

        {/* 向下滚动提示 */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <motion.p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--color-text-secondary)' }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {t('hero.scrollHint')}
          </motion.p>
          <motion.div
            className="mx-auto w-5 h-8 rounded-full border flex items-start justify-center p-1"
            style={{ borderColor: 'var(--color-glass-border)' }}
          >
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: 'var(--color-accent)' }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
