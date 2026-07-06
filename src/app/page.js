'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/hooks/useLanguage';
import Hero from '@/components/Hero';
import GrowthTimeline from '@/components/GrowthTimeline';
import SkillGroup from '@/components/SkillGroup';
import ProjectCard from '@/components/ProjectCard';
import { EvidenceList, SectionIndex } from '@/components/DossierUI';

export default function HomePage() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const projects = t('projects.list').slice(0, 3);

  const evidence = language === 'zh'
    ? ['完成完整机械创新竞赛项目并获全国一等奖', '将 AI 引入机械设计、出图与文档交付流程', '建立跨对话 Agent 项目协作规范']
    : ['Delivered a complete mechanical innovation project with a national first prize', 'Applied AI to mechanical design, drafting, and documentation delivery', 'Built a cross-session Agent collaboration framework'];

  return (
    <>
      <Hero />
      <GrowthTimeline />
      <SkillGroup />

      <section className="py-20">
        <div className="dossier-shell">
          <SectionIndex
            index="03"
            eyebrow={language === 'zh' ? '案例档案' : 'Case dossiers'}
            title={t('projectOverview.title')}
            description={t('projectOverview.subtitle')}
          />
          <div>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured={index === 0}
                onClick={() => router.push('/projects')}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="dossier-shell grid lg:grid-cols-[.7fr_1.3fr] gap-12">
          <SectionIndex
            index="04"
            eyebrow={language === 'zh' ? '工作声明' : 'Working statement'}
            title={t('aboutMe.title')}
          />
          <div>
            <p className="text-lg leading-relaxed">{t('aboutMe.content')}</p>
            <div className="mt-8"><EvidenceList items={evidence} /></div>
          </div>
        </div>
      </section>
    </>
  );
}
