'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { MetadataTable, StatusStamp } from './DossierUI';

export default function Hero() {
  const { t, language } = useLanguage();

  const metadata = [
    { label: language === 'zh' ? '专业' : 'Discipline', value: t('hero.discipline') },
    { label: language === 'zh' ? '方法' : 'Method', value: t('hero.method'), tone: 'intelligence' },
    { label: language === 'zh' ? '状态' : 'Status', value: t('hero.status') },
  ];

  return (
    <section className="pt-36 pb-24">
      <div className="dossier-shell grid lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,.7fr)] gap-14 lg:gap-20">
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="technical-note text-[var(--mechanical)]">{t('hero.recordId')}</span>
            <span className="h-px flex-1 bg-[var(--rule)]" />
          </div>
          <h1 className="text-[clamp(3.6rem,10vw,8.5rem)] leading-[0.88] tracking-[-0.065em] font-bold">
            {t('hero.name')}
          </h1>
          <p className="mt-10 max-w-3xl text-xl sm:text-2xl leading-snug font-medium">
            {t('hero.tagline')}
          </p>
          <p className="mt-5 max-w-2xl text-sm sm:text-base text-[var(--muted)]">
            {t('hero.subtitle')}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <StatusStamp tone="signal">{t('hero.evidence')}</StatusStamp>
            <StatusStamp tone="intelligence">{t('hero.jobTarget')}</StatusStamp>
          </div>
        </div>

        <aside className="lg:pt-20">
          <p className="technical-note mb-4">{language === 'zh' ? '当前档案' : 'Current dossier'}</p>
          <MetadataTable items={metadata} />
        </aside>
      </div>
    </section>
  );
}
