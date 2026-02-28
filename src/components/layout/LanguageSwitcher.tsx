"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

type Locale = "en" | "ar";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Common");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    startTransition(() => {
      document.cookie = `locale=${nextLocale};path=/;max-age=31536000`;
      router.refresh();
    });
  };

  return (
    <div
      className="inline-flex min-h-[44px] items-center gap-px rounded-full border border-[var(--border)] bg-[var(--surface-soft)] p-0.5 text-xs font-semibold text-[var(--foreground)] shadow-sm md:min-h-0"
      aria-label={t("languageSwitcherLabel")}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        disabled={isPending}
        aria-pressed={locale === "en"}
        className={`rounded-full px-3 py-2 transition touch-manipulation md:py-1 ${
          locale === "en"
            ? "bg-[var(--surface)] text-[var(--foreground)] shadow-sm"
            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        }`}
      >
        {t("languageEnglish")}
      </button>
      <button
        type="button"
        onClick={() => setLocale("ar")}
        disabled={isPending}
        aria-pressed={locale === "ar"}
        className={`rounded-full px-3 py-2 transition touch-manipulation md:py-1 ${
          locale === "ar"
            ? "bg-[var(--surface)] text-[var(--foreground)] shadow-sm"
            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        }`}
      >
        {t("languageArabic")}
      </button>
    </div>
  );
}
