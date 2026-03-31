import Link from "next/link";

type LegalPageShellProps = {
  backLabel: string;
  title: string;
  updatedLabel: string;
  children: React.ReactNode;
};

export function LegalPageShell({
  backLabel,
  title,
  updatedLabel,
  children,
}: LegalPageShellProps) {
  return (
    <main className="main-content text-start">
      <div className="section-shell pb-24 pt-2 sm:pt-4">
        <nav aria-label="Breadcrumb" className="pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--brand-red)]"
          >
            <span className="inline-block rtl:rotate-180" aria-hidden>
              ←
            </span>
            {backLabel}
          </Link>
        </nav>
        <header className="mt-2 border-b border-[var(--border)] pb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">{updatedLabel}</p>
        </header>
        <article
          className="mt-10 max-w-3xl space-y-10 text-[0.95rem] leading-relaxed text-[var(--muted-foreground)] [&_h2]:mt-0 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[var(--foreground)] [&_h2]:tracking-tight [&_p+p]:mt-3 [&_strong]:font-medium [&_strong]:text-[var(--foreground)] [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:ps-5 [&_a]:font-medium [&_a]:text-[var(--brand-red)] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[var(--brand-red-strong)]"
          dir="auto"
        >
          {children}
        </article>
      </div>
    </main>
  );
}
