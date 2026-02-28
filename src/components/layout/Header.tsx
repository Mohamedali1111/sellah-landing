"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const t = useTranslations("Common");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const isArabic = locale === "ar";

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--border)] bg-[color:var(--surface)]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5">
        <div className="flex flex-1 items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2"
            aria-label={t("appName")}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#dc2626_0%,#7f1d1d_100%)] text-xs font-semibold text-white shadow-lg shadow-red-600/40">
              S
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
                Sellah
              </span>
              <span className="line-clamp-1 max-w-[38vw] text-[11px] font-normal text-[var(--muted-foreground)] sm:max-w-none">
                {t("tagline")}
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] p-1 text-xs font-semibold md:flex">
            <a href="#buyers" className="rounded-full px-3 py-1.5 text-[var(--muted-foreground)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]">
              {t("navBuyers")}
            </a>
            <a href="#sellers" className="rounded-full px-3 py-1.5 text-[var(--muted-foreground)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]">
              {t("navSellers")}
            </a>
            <a href="#how" className="rounded-full px-3 py-1.5 text-[var(--muted-foreground)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]">
              {t("navHow")}
            </a>
            <a href="#download" className="rounded-full px-3 py-1.5 text-[var(--muted-foreground)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]">
              {t("navDownload")}
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#cta" className="btn-primary h-9 px-4 text-xs">
              {t("navEarlyAccess")}
            </a>
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--foreground)]"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[5px] h-0.5 w-4 rounded-full bg-current transition ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[10px] h-0.5 w-4 rounded-full bg-current transition ${
                    open ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--border)] bg-[color:var(--surface)]/98 md:hidden">
          <div
            className={`mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <a href="#buyers" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-[var(--foreground)] hover:bg-[var(--surface-soft)]">
              {t("navBuyers")}
            </a>
            <a href="#sellers" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-[var(--foreground)] hover:bg-[var(--surface-soft)]">
              {t("navSellers")}
            </a>
            <a href="#how" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-[var(--foreground)] hover:bg-[var(--surface-soft)]">
              {t("navHow")}
            </a>
            <a href="#download" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-[var(--foreground)] hover:bg-[var(--surface-soft)]">
              {t("navDownload")}
            </a>
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 h-10 text-xs"
            >
              {t("navEarlyAccess")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
