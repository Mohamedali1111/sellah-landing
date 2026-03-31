type LegalSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="space-y-3">
      <h2>{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
