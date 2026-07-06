export function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-ink md:text-2xl">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  );
}

export function CaseStudyList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
