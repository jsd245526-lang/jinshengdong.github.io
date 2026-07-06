'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import ProjectCard from '@/components/ProjectCard';
import { EvidenceList, MetadataTable, SectionIndex, StatusStamp } from '@/components/DossierUI';

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = t('projects.list');
  const labels = t('projects.modal');

  useEffect(() => {
    if (!selectedProject) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedProject]);

  return (
    <>
      <section className="pt-36 pb-16">
        <div className="dossier-shell">
          <SectionIndex
            index="02"
            eyebrow={language === 'zh' ? '案例总表' : 'Case register'}
            title={t('projects.title')}
            description={t('projects.intro')}
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="dossier-shell">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured={index === 0}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] overflow-y-auto bg-[color:rgba(32,35,31,.72)] p-4 sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-title-${selectedProject.id}`}
            className="document-panel relative mx-auto max-w-4xl p-6 sm:p-10 shadow-[0_16px_40px_rgba(32,35,31,.18)]"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 min-h-11 min-w-11 border border-[var(--rule)] hover:border-[var(--mechanical)]"
              aria-label={labels.close}
            >
              ×
            </button>

            <p className="technical-note text-[var(--mechanical)]">CASE / {selectedProject.id}</p>
            {selectedProject.award && (
              <div className="mt-5"><StatusStamp tone="signal">{selectedProject.award}</StatusStamp></div>
            )}
            <h2 id={`project-title-${selectedProject.id}`} className="mt-5 pr-14 text-3xl sm:text-5xl font-bold tracking-[-0.04em]">
              {selectedProject.title}
            </h2>
            <p className="mt-3 text-[var(--muted)]">{selectedProject.subtitle}</p>

            <div className="mt-10">
              <MetadataTable items={[
                { label: labels.period, value: selectedProject.period },
                { label: labels.role, value: selectedProject.role },
                { label: language === 'zh' ? '工具' : 'Tools', value: selectedProject.tags.slice(0, 4).join(' / '), tone: 'intelligence' },
              ]} />
            </div>

            <div className="mt-12 grid md:grid-cols-[180px_minmax(0,1fr)] gap-5 border-t-2 border-[var(--graphite)] pt-5">
              <h3 className="technical-note">{labels.background}</h3>
              <p>{selectedProject.background}</p>
            </div>

            <div className="mt-10 grid md:grid-cols-[180px_minmax(0,1fr)] gap-5 border-t border-[var(--rule)] pt-5">
              <h3 className="technical-note">{labels.work}</h3>
              <EvidenceList items={selectedProject.work} />
            </div>

            <div className="mt-10 grid md:grid-cols-[180px_minmax(0,1fr)] gap-5 border-t border-[var(--rule)] pt-5">
              <h3 className="technical-note">{labels.result}</h3>
              <div>
                <p className="font-semibold">{selectedProject.result}</p>
                {selectedProject.growthTag && <p className="mt-4 text-sm text-[var(--intelligence)]">↗ {selectedProject.growthTag}</p>}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
