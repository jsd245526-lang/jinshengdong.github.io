'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto py-10">
      <div className="dossier-shell border-t-2 border-[var(--graphite)] pt-5 flex flex-col sm:flex-row justify-between gap-5">
        <div>
          <p className="font-semibold">{t('footer.copyright')}</p>
          <p className="technical-note mt-1">Mechanical Engineering × Applied AI</p>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="min-h-11 self-start px-4 border border-[var(--rule)] text-sm hover:border-[var(--mechanical)] transition-colors"
        >
          ↑ {t('footer.backToTop')}
        </button>
      </div>
    </footer>
  );
}
