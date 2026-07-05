'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="relative mt-auto py-10 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="divider mb-8" />

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* 版权 + 构建声明 */}
        <div className="text-sm text-center sm:text-left" style={{ color: 'var(--color-text-secondary)' }}>
          <p>{t('footer.copyright')}</p>
          <p className="mt-1 opacity-70">{t('footer.builtWith')}</p>
        </div>

        {/* 回到顶部按钮 */}
        <motion.button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-colors duration-300"
          style={{
            borderColor: 'var(--color-glass-border)',
            color: 'var(--color-text-secondary)',
          }}
          whileHover={{
            borderColor: 'var(--color-accent)',
            color: 'var(--color-text-primary)',
            y: -2,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          {t('footer.backToTop')}
        </motion.button>
      </div>
    </motion.footer>
  );
}
