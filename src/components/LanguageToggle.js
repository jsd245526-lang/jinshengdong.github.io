'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.button
      onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      className="relative px-3 py-1.5 text-xs font-medium rounded-full border transition-colors duration-300"
      style={{
        borderColor: 'var(--color-glass-border)',
        color: 'var(--color-text-secondary)',
      }}
      whileHover={{
        borderColor: 'var(--color-accent)',
        color: 'var(--color-text-primary)',
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={t('langToggle.ariaLabel')}
    >
      {t('langToggle.label')}
    </motion.button>
  );
}
