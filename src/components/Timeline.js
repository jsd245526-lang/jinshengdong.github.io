export default function Timeline({ items }) {
  return (
    <ol className="border-t border-[var(--rule)]">
      {items.map((item) => (
        <li key={`${item.period}-${item.org}`} className="grid sm:grid-cols-[150px_minmax(0,1fr)] gap-4 py-5 border-b border-[var(--rule)]">
          <time className="font-mono text-xs text-[var(--mechanical)]">{item.period}</time>
          <div>
            <p className="text-sm text-[var(--intelligence)]">{item.org}</p>
            <h4 className="mt-1 font-semibold">{item.title || item.role}</h4>
            {item.details && (
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                {item.details.map((detail) => <li key={detail}>— {detail}</li>)}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
