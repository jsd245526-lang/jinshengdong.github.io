'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { SectionIndex, StatusStamp } from './DossierUI';

export default function GrowthTimeline() {
  const { t, language } = useLanguage();
  const items = t('growth.items');

  return (
    <section className="py-20">
      <div className="dossier-shell">
        <SectionIndex
          index="01"
          eyebrow={language === 'zh' ? '履历索引' : 'Record index'}
          title={t('growth.title')}
          description={language === 'zh' ? '按年份记录学习、工具与工程实践的变化。' : 'A dated record of study, tools, and engineering practice.'}
        />
        <ol className="border-t border-[var(--rule)]">
          {items.map((item) => (
            <li key={item.year} className="grid sm:grid-cols-[100px_minmax(0,1fr)_110px] gap-4 py-5 border-b border-[var(--rule)]">
              <time className="font-mono text-sm text-[var(--mechanical)]">{item.year}</time>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                {item.desc && <p className="mt-1 text-sm text-[var(--muted)]">{item.desc}</p>}
              </div>
              <div className="sm:text-right">
                <StatusStamp tone={item.status === 'done' ? 'mechanical' : 'intelligence'}>
                  {item.status === 'done' ? (language === 'zh' ? '已完成' : 'Complete') : (language === 'zh' ? '计划' : 'Planned')}
                </StatusStamp>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
