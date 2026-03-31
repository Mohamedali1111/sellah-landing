import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LegalSection } from "@/components/legal/LegalSection";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("LegalPages.terms");
  return {
    title: `${t("metaTitle")} | Sellah`,
    description: t("intro").slice(0, 155),
    alternates: { canonical: "/terms" },
  };
}

export default async function TermsPage() {
  const t = await getTranslations("LegalPages");
  const s = await getTranslations("LegalPages.terms");

  return (
    <LegalPageShell
      backLabel={t("backHome")}
      title={s("title")}
      updatedLabel={t("updated")}
    >
      <p className="border-s-4 border-[var(--brand-red)] ps-4 text-[var(--foreground)]">
        {t("entityNote")}
      </p>

      <p>{s("intro")}</p>

      <LegalSection title={s("eligibilityTitle")}>
        <p>{s("eligibilityP1")}</p>
        <p>{s("eligibilityP2")}</p>
      </LegalSection>

      <LegalSection title={s("marketplaceTitle")}>
        <p>{s("marketplaceP1")}</p>
        <p>{s("marketplaceP2")}</p>
      </LegalSection>

      <LegalSection title={s("buyersTitle")}>
        <ul>
          <li>{s("buyersLi1")}</li>
          <li>{s("buyersLi2")}</li>
          <li>{s("buyersLi3")}</li>
        </ul>
      </LegalSection>

      <LegalSection title={s("sellersTitle")}>
        <ul>
          <li>{s("sellersLi1")}</li>
          <li>{s("sellersLi2")}</li>
          <li>{s("sellersLi3")}</li>
          <li>{s("sellersLi4")}</li>
        </ul>
      </LegalSection>

      <LegalSection title={s("prohibitedTitle")}>
        <p>{s("prohibitedIntro")}</p>
        <ul>
          <li>{s("prohibitedLi1")}</li>
          <li>{s("prohibitedLi2")}</li>
          <li>{s("prohibitedLi3")}</li>
          <li>{s("prohibitedLi4")}</li>
        </ul>
      </LegalSection>

      <LegalSection title={s("ipTitle")}>
        <p>{s("ipP")}</p>
      </LegalSection>

      <LegalSection title={s("disclaimersTitle")}>
        <p>{s("disclaimersP1")}</p>
        <p>{s("disclaimersP2")}</p>
      </LegalSection>

      <LegalSection title={s("disputesTitle")}>
        <p>{s("disputesP")}</p>
      </LegalSection>

      <LegalSection title={s("lawTitle")}>
        <p>{s("lawP")}</p>
      </LegalSection>

      <LegalSection title={s("terminationTitle")}>
        <p>{s("terminationP")}</p>
      </LegalSection>

      <LegalSection title={s("termsContactTitle")}>
        <p>{s("termsContactP")}</p>
      </LegalSection>
    </LegalPageShell>
  );
}
