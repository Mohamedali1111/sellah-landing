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
    <section className="relative mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-zinc-50/5 px-5 py-9 ring-1 ring-red-500/25 backdrop-blur-sm sm:px-8 sm:py-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(248,113,113,0.35),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(24,24,27,0.8),transparent_60%)] opacity-80" />

        <div className="relative z-10 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] md:items-center">
          <div className={isArabic ? "text-right" : "text-left"}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-300">
              {t("ctaEyebrow")}
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold text-zinc-50 sm:text-[1.7rem]">
              {t("ctaTitle")}
            </h2>
            <p className="mt-3 max-w-md text-sm text-zinc-200 sm:text-[0.95rem]">
              {t("ctaDescription")}
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className={`space-y-4 rounded-2xl bg-black/60 p-5 ring-1 ring-zinc-800/70 ${
              isArabic ? "text-right" : "text-left"
            }`}
            noValidate
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="cta-email"
                className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400"
              >
                {t("ctaEmailLabel")}
              </label>
              <input
                id="cta-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("ctaEmailPlaceholder")}
                className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/80 px-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
                {t("ctaRoleLabel")}
              </span>
              <div
                className={`inline-flex rounded-full border border-zinc-700/70 bg-zinc-950/80 p-0.5 text-xs font-medium text-zinc-300 ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setRole("buyer")}
                  className={`rounded-full px-4 py-1.5 transition ${
                    role === "buyer"
                      ? "bg-red-500 text-white"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {t("ctaRoleBuyer")}
                </button>
                <button
                  type="button"
                  onClick={() => setRole("seller")}
                  className={`rounded-full px-4 py-1.5 transition ${
                    role === "seller"
                      ? "bg-red-500 text-white"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {t("ctaRoleSeller")}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-400" role="alert">
                {error}
              </p>
            )}
            {submitted && !error && (
              <p className="text-xs text-emerald-300">
                {t("ctaSuccessMessage")}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-full bg-red-600 px-6 text-sm font-medium text-white shadow-md shadow-red-600/40 transition hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {t("ctaPrimary")}
              </button>
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-700/70 px-5 text-xs font-medium text-zinc-200 transition hover:border-red-500 hover:text-red-300"
              >
                {t("ctaSecondary")}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

