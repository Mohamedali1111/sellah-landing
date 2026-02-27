"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const t = useTranslations("Common");

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-zinc-900/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2"
          aria-label={t("appName")}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-600 text-xs font-semibold text-white shadow-lg shadow-red-600/40">
            S
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Sellah
            </span>
            <span className="text-[11px] font-normal text-zinc-500 dark:text-zinc-400">
              {t("tagline")}
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

