"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  const t = useTranslations("Common");

  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[color:var(--surface)]/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-[0.82rem] sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:items-center sm:px-6">
        <div className="space-y-3 text-start">
          <p className="text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} Sellah. {t("tagline")}
          </p>
          <div className="flex flex-wrap gap-2.5">
            <Link href="#" className="chip hover:text-red-500">
              Twitter
            </Link>
            <Link href="#" className="chip hover:text-red-500">
              Instagram
            </Link>
            <Link href="#" className="chip hover:text-red-500">
              hello@sellah.app
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Link
              href="#"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              Terms
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:justify-end">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
