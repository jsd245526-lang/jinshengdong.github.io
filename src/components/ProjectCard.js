'use client';

import { StatusStamp } from './DossierUI';

export default function ProjectCard({ project, index, onClick, featured = false }) {
  return (
    <button
      type="button"
      className={`case-row ${featured ? 'case-row--featured' : ''}`}
      onClick={() => onClick(project)}
    >
      <div>
        <p className="technical-note text-[var(--mechanical)]">CASE / {String(index + 1).padStart(2, '0')}</p>
        <p className="mt-3 font-mono text-xs text-[var(--muted)]">{project.period}</p>
      </div>
      <div>
        {project.award && <StatusStamp tone="signal">{project.award}</StatusStamp>}
        <h3 className={`mt-3 font-bold tracking-tight ${featured ? 'text-3xl' : 'text-xl'}`}>{project.title}</h3>
        <p className="mt-2 text-sm text-[var(--muted)]">{project.subtitle}</p>
        <p className="mt-5 text-sm leading-relaxed">{project.background}</p>
      </div>
      <div>
        <p className="technical-note">Role</p>
        <p className="mt-2 text-sm font-semibold">{project.role}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
        <p className="mt-6 text-sm text-[var(--intelligence)]">Open dossier →</p>
      </div>
    </button>
  );
}
