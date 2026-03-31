import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LegalSection } from "@/components/legal/LegalSection";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("LegalPages.support");
  return {
    title: `${t("metaTitle")} | Sellah`,
    description: t("lead").slice(0, 155),
    alternates: { canonical: "/support" },
  };
}

export default async function SupportPage() {
  const t = await getTranslations("LegalPages");
  const s = await getTranslations("LegalPages.support");
  const email = t("supportEmail");

  const faqItems = [
    { q: s("faq1Q"), a: s("faq1A") },
    { q: s("faq2Q"), a: s("faq2A") },
    { q: s("faq3Q"), a: s("faq3A") },
    { q: s("faq4Q"), a: s("faq4A") },
    { q: s("faq5Q"), a: s("faq5A") },
    { q: s("faq6Q"), a: s("faq6A") },
  ] as const;

  return (
    <LegalPageShell
      backLabel={t("backHome")}
      title={s("title")}
      updatedLabel={t("updated")}
    >
      <p className="text-lg font-medium text-[var(--foreground)]">{s("lead")}</p>

      <LegalSection title={s("emailIntro")}>
        <p>{s("emailBody")}</p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p className="text-sm">{s("responseTime")}</p>
      </LegalSection>

      <LegalSection title={s("legalLinksTitle")}>
        <p>{s("legalLinksBody")}</p>
        <ul className="!mt-4 space-y-2">
          <li>
            <Link href="/privacy">{t("navPrivacy")}</Link>
            {" · "}
            <span className="text-[var(--muted-foreground)]">/privacy</span>
          </li>
          <li>
            <Link href="/terms">{t("navTerms")}</Link>
            {" · "}
            <span className="text-[var(--muted-foreground)]">/terms</span>
          </li>
        </ul>
      </LegalSection>

      <section id="faq" className="scroll-mt-28 space-y-4">
        <h2 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
          {s("faqTitle")}
        </h2>
        <div className="space-y-6">
          {faqItems.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] p-4 sm:p-5"
            >
              <h3 className="text-base font-semibold text-[var(--foreground)]">
                {item.q}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-[var(--muted-foreground)]">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </LegalPageShell>
  );
}
