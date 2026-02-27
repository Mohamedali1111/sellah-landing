"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const SUPPORTED_LOCALES = ["en", "ar"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

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
      className="inline-flex items-center gap-px rounded-full border border-zinc-800/10 bg-zinc-100/60 p-0.5 text-xs font-medium text-zinc-700 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:text-zinc-200"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        disabled={isPending}
        aria-pressed={locale === "en"}
        className={`rounded-full px-3 py-1 transition ${
          locale === "en"
            ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-100 dark:text-zinc-900"
            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        }`}
      >
        {t("languageEnglish")}
      </button>
      <button
        type="button"
        onClick={() => setLocale("ar")}
        disabled={isPending}
        aria-pressed={locale === "ar"}
        className={`rounded-full px-3 py-1 transition ${
          locale === "ar"
            ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-100 dark:text-zinc-900"
            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        }`}
      >
        {t("languageArabic")}
      </button>
    </div>
  );
}

