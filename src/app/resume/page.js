'use client';

import { useLanguage } from '@/hooks/useLanguage';
import Timeline from '@/components/Timeline';
import { EvidenceList, SectionIndex, StatusStamp } from '@/components/DossierUI';

const levelNames = {
  zh: { national: '国家级', province: '省级', city: '市级', school: '校级' },
  en: { national: 'National', province: 'Provincial', city: 'City', school: 'University' },
};

function AwardTable({ awards, language }) {
  return (
    <div className="border-t-2 border-[var(--graphite)]">
      {awards.map((award) => {
        const [date, ...description] = award.text.split(' — ');
        return (
          <div key={award.text} className="grid grid-cols-[90px_90px_minmax(0,1fr)] gap-3 py-4 border-b border-[var(--rule)] text-sm">
            <span className="font-mono text-xs text-[var(--muted)]">{date}</span>
            <span className={award.level === 'national' ? 'text-[var(--mechanical)] font-semibold' : 'text-[var(--muted)]'}>
              {levelNames[language][award.level]}
            </span>
            <span>{description.join(' — ')}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function ResumePage() {
  const { t, language } = useLanguage();
  const resume = t('resumePage');
  const experienceItems = resume.experiences.list.map((experience) => ({
    period: experience.period,
    org: experience.org,
    title: experience.role,
    details: experience.details,
  }));

  return (
    <div className="resume-document dossier-shell pt-36 pb-24">
      <SectionIndex
        index="03"
        eyebrow={language === 'zh' ? '工程履历' : 'Engineering record'}
        title={resume.title}
        description={`${resume.education.school} · ${resume.education.major}`}
      />

      <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-14">
        <main className="space-y-16">
          <section>
            <p className="technical-note mb-4">{resume.education.title}</p>
            <div className="border-t-2 border-[var(--graphite)] pt-5 grid sm:grid-cols-[1fr_160px] gap-5">
              <div>
                <h2 className="text-2xl font-bold">{resume.education.school}</h2>
                <p className="mt-2 text-[var(--intelligence)]">{resume.education.major} · {resume.education.degree}</p>
                <p className="mt-4 text-sm text-[var(--muted)]">{resume.education.detail}</p>
              </div>
              <time className="font-mono text-xs sm:text-right text-[var(--mechanical)]">{resume.education.period}</time>
            </div>
          </section>

          <section>
            <p className="technical-note mb-4">{resume.experiences.title}</p>
            <Timeline items={experienceItems} />
          </section>

          <section>
            <p className="technical-note mb-4">{resume.awards.title}</p>
            <AwardTable awards={resume.awards.list} language={language} />
          </section>

          <section>
            <p className="technical-note mb-4">{resume.selfEval.title}</p>
            <p className="border-t-2 border-[var(--graphite)] pt-5 leading-relaxed text-[var(--muted)]">
              {resume.selfEval.content}
            </p>
          </section>
        </main>

        <aside className="space-y-10">
          <section className="document-panel p-5">
            <StatusStamp tone="mechanical">{language === 'zh' ? '可验证能力' : 'Verified capability'}</StatusStamp>
            <div className="mt-5">
              <EvidenceList items={[
                language === 'zh' ? 'SolidWorks 三维建模、装配与工程图' : 'SolidWorks modeling, assembly, and drawings',
                language === 'zh' ? 'AutoCAD 二维制图与自动出图' : 'AutoCAD drafting and automated drawing',
                language === 'zh' ? 'AI 辅助设计与项目协作流程' : 'AI-assisted design and project workflows',
              ]} />
            </div>
          </section>

          <section>
            <p className="technical-note mb-3">{resume.certificates.title}</p>
            <EvidenceList items={resume.certificates.list} />
          </section>

          <section>
            <p className="technical-note mb-3">{resume.honors.title}</p>
            <EvidenceList items={resume.honors.list} />
          </section>
        </aside>
      </div>
    </div>
  );
}
