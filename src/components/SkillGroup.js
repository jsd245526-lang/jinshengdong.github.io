'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { SectionIndex } from './DossierUI';

function CapabilityColumn({ code, title, groups }) {
  return (
    <section className="border-t-2 border-[var(--graphite)] pt-4">
      <p className="technical-note text-[var(--mechanical)]">{code}</p>
      <h3 className="mt-3 text-xl font-bold">{title}</h3>
      <div className="mt-6">
        {groups.map((group) => (
          <div key={group.category} className="py-4 border-t border-[var(--rule)]">
            <h4 className="text-sm font-semibold">{group.category}</h4>
            <p className="mt-2 text-sm text-[var(--muted)]">{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SkillGroup() {
  const { t, language } = useLanguage();
  const current = t('skills.current');
  const learning = t('skills.learning');

  const groups = [
    {
      code: 'CAP-01',
      title: language === 'zh' ? '机械能力' : 'Mechanical practice',
      groups: [current[1]],
    },
    {
      code: 'CAP-02',
      title: language === 'zh' ? 'AI 工作流' : 'AI workflow',
      groups: [current[0], learning[0], learning[1]],
    },
    {
      code: 'CAP-03',
      title: language === 'zh' ? '交付能力' : 'Delivery practice',
      groups: [current[2], current[3], learning[2]],
    },
  ];

  return (
    <section className="py-20">
      <div className="dossier-shell">
        <SectionIndex
          index="02"
          eyebrow={language === 'zh' ? '能力清单' : 'Capability list'}
          title={t('skills.title')}
          description={language === 'zh' ? '工具不是标签，而是完成设计、验证和交付的手段。' : 'Tools are means for design, validation, and delivery—not decorative labels.'}
        />
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group) => <CapabilityColumn key={group.code} {...group} />)}
        </div>
      </div>
    </section>
  );
}
