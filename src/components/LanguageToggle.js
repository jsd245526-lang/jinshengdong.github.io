'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      className="min-h-11 px-3 border border-[var(--rule)] text-xs font-mono tracking-wide hover:border-[var(--intelligence)] transition-colors"
      aria-label={t('langToggle.ariaLabel')}
    >
      <span className={language === 'zh' ? 'font-bold text-[var(--graphite)]' : 'text-[var(--muted)]'}>中</span>
      <span className="mx-2 text-[var(--rule-strong)]">/</span>
      <span className={language === 'en' ? 'font-bold text-[var(--graphite)]' : 'text-[var(--muted)]'}>EN</span>
    </button>
  );
}
