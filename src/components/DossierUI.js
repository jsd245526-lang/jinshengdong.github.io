export function SectionIndex({ index, eyebrow, title, description }) {
  return (
    <header className="section-heading">
      <div className="section-heading__meta">
        <span className="section-heading__index">{index}</span>
        {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      </div>
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </header>
  );
}

export function SpecLabel({ label, value, tone = 'default' }) {
  return (
    <div className={`spec-label spec-label--${tone}`}>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export function EvidenceList({ items }) {
  return (
    <ul className="evidence-list">
      {items.map((item, index) => (
        <li key={`${index}-${item}`}>{item}</li>
      ))}
    </ul>
  );
}

export function MetadataTable({ items }) {
  return (
    <dl className="metadata-grid">
      {items.map((item) => (
        <SpecLabel key={item.label} {...item} />
      ))}
    </dl>
  );
}

export function StatusStamp({ children, tone = 'mechanical' }) {
  return <span className={`status-stamp status-stamp--${tone}`}>{children}</span>;
}
