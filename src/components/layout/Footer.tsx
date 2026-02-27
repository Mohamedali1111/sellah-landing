"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  const t = useTranslations("Common");

  return (
    <footer className="mt-16 border-t border-zinc-900/40 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-[0.8rem] text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="space-y-2">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} Sellah. {t("tagline")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#" className="hover:text-zinc-200">
              Twitter
            </Link>
            <Link href="#" className="hover:text-zinc-200">
              Instagram
            </Link>
            <Link href="#" className="hover:text-zinc-200">
              hello@sellah.app
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="#" className="hover:text-zinc-200">
              Privacy
            </Link>
            <Link href="#" className="hover:text-zinc-200">
              Terms
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}

