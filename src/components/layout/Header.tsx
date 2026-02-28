"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const t = useTranslations("Common");
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 border-b border-[var(--border)] bg-[color:var(--surface)]/95 backdrop-blur-xl"
      style={{ paddingTop: "max(env(safe-area-inset-top, 0px), 0px)" }}
    >
      <div className="header-content mx-auto flex min-w-0 max-w-6xl items-center justify-between gap-3 py-3 sm:py-3.5">
        <Link
          href="/"
          className="inline-flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"
          aria-label={t("appName")}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#dc2626_0%,#7f1d1d_100%)] text-xs font-semibold text-white shadow-lg shadow-red-600/40 sm:h-8 sm:w-8">
            S
          </div>
          <div className="flex min-w-0 flex-col items-start justify-center">
            <span className="truncate text-sm font-semibold tracking-tight text-[var(--foreground)]">
              Sellah
            </span>
            <span className="line-clamp-1 max-w-[36vw] truncate text-[11px] font-normal text-[var(--muted-foreground)] sm:max-w-none">
              {t("tagline")}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden shrink-0 items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] p-1 text-xs font-semibold md:flex">
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

        <div className="hidden shrink-0 items-center gap-2 md:flex lg:gap-3">
          <a href="#cta" className="btn-primary h-9 min-h-[44px] px-4 text-xs">
            {t("navEarlyAccess")}
          </a>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        {/* Mobile controls: same horizontal padding, touch-friendly */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:hidden">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--foreground)] touch-manipulation"
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

      {/* Mobile menu: same horizontal padding as header, text-start for RTL, touch-friendly */}
      {open && (
        <div className="border-t border-[var(--border)] bg-[color:var(--surface)]/98 md:hidden">
          <nav className="header-content mx-auto flex max-w-6xl flex-col gap-0 py-3">
            <a
              href="#buyers"
              onClick={() => setOpen(false)}
              className="min-h-[48px] rounded-xl px-3 py-3 text-start text-[var(--foreground)] hover:bg-[var(--surface-soft)] active:bg-[var(--surface-soft)]"
            >
              {t("navBuyers")}
            </a>
            <a
              href="#sellers"
              onClick={() => setOpen(false)}
              className="min-h-[48px] rounded-xl px-3 py-3 text-start text-[var(--foreground)] hover:bg-[var(--surface-soft)] active:bg-[var(--surface-soft)]"
            >
              {t("navSellers")}
            </a>
            <a
              href="#how"
              onClick={() => setOpen(false)}
              className="min-h-[48px] rounded-xl px-3 py-3 text-start text-[var(--foreground)] hover:bg-[var(--surface-soft)] active:bg-[var(--surface-soft)]"
            >
              {t("navHow")}
            </a>
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="min-h-[48px] rounded-xl px-3 py-3 text-start text-[var(--foreground)] hover:bg-[var(--surface-soft)] active:bg-[var(--surface-soft)]"
            >
              {t("navDownload")}
            </a>
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 min-h-[48px] w-full justify-center py-3 text-sm"
            >
              {t("navEarlyAccess")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
