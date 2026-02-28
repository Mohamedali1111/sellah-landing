"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

type Role = "buyer" | "seller";

export function CTASection() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("buyer");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setError(t("ctaErrorInvalidEmail"));
      return;
    }

    if (!role) {
      setError(t("ctaErrorRole"));
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="cta" className="section-shell relative scroll-mt-24 pb-20 sm:pb-24">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-red-500/30 px-4 py-8 backdrop-blur-sm sm:px-8 sm:py-10"
        style={{ background: "var(--hero-gradient)" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(248,113,113,0.28),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(239,68,68,0.2),transparent_60%)] opacity-80" />

        <div className="relative z-10 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] md:items-center">
          <div className="text-start">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              {t("ctaEyebrow")}
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold text-[var(--foreground)] sm:text-[1.7rem]">
              {t("ctaTitle")}
            </h2>
            <p className="mt-3 max-w-md text-sm text-[var(--muted-foreground)] sm:text-[0.95rem] rtl:ms-auto">
              {t("ctaDescription")}
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="flex w-full flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] p-4 text-start sm:p-5"
            noValidate
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="cta-email"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]"
              >
                {t("ctaEmailLabel")}
              </label>
              <input
                id="cta-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("ctaEmailPlaceholder")}
                className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)] focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                {t("ctaRoleLabel")}
              </span>
              <div className={`flex flex-wrap gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
                <button
                  type="button"
                  onClick={() => setRole("buyer")}
                  className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                    role === "buyer"
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-[var(--border)] bg-[var(--surface-strong)] text-[var(--muted-foreground)] hover:border-red-400 hover:text-[var(--foreground)]"
                  }`}
                >
                  {t("ctaRoleBuyer")}
                </button>
                <button
                  type="button"
                  onClick={() => setRole("seller")}
                  className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                    role === "seller"
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-[var(--border)] bg-[var(--surface-strong)] text-[var(--muted-foreground)] hover:border-red-400 hover:text-[var(--foreground)]"
                  }`}
                >
                  {t("ctaRoleSeller")}
                </button>
              </div>
            </div>

            {error && (
              <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-500" role="alert">
                {error}
              </p>
            )}
            {submitted && !error && (
              <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-500">
                {t("ctaSuccessMessage")}
              </p>
            )}

            <div className="mt-1 flex flex-wrap items-center gap-3">
              <button type="submit" className="btn-primary h-11 px-6 text-sm">
                {t("ctaPrimary")}
              </button>
              <a href="#sellers" className="btn-secondary h-11 px-5 text-xs">
                {t("ctaSecondary")}
              </a>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
