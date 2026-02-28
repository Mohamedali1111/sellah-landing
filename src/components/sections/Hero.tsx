"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="section-shell relative flex min-h-[72vh] flex-col gap-10 pb-16 pt-8 sm:pb-20 lg:flex-row lg:items-center lg:gap-14">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-[-18%] z-0 mx-auto h-80 max-w-4xl rounded-full bg-[radial-gradient(circle_at_top,#ef4444_0,transparent_62%)] opacity-55 blur-3xl" />

      {/* Left: text */}
      <motion.div
        className="relative z-10 flex max-w-xl flex-col text-center lg:text-start lg:items-start"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-red-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-red-400 backdrop-blur">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
          <span>{t("heroBadgeLabel")}</span>
        </div>
        <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl">
          {t("heroTitle")}
        </h1>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
          {t("heroSubtitle")}
        </p>
        <div
          className={`mt-7 flex flex-col items-center gap-3 ${
            isArabic ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href="#cta"
            className="btn-primary h-11 px-7"
          >
            {t("primaryCta")}
          </motion.a>
          <motion.a
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            href="#sellers"
            className="btn-secondary h-11 px-7"
          >
            {t("secondaryCta")}
          </motion.a>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-start gap-3 text-[11px] text-[var(--muted-foreground)]">
          <span className="chip">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
            {t("heroSecurePill")}
          </span>
          <span>{t("heroSecureAudience")}</span>
        </div>
      </motion.div>

      {/* Right: abstract phone / UI stack */}
      <motion.div
        className="relative z-10 flex flex-1 items-center justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 0.94, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]">
          <motion.div
            className="absolute inset-0 rounded-[2.5rem] shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            style={{ background: "var(--hero-gradient)" }}
            initial={{ rotate: -9, y: 12 }}
            animate={{ rotate: -4, y: 0 }}
            transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
          />

          <motion.div
            className="absolute inset-[10%] rounded-4xl border border-[var(--border)] bg-[color:var(--surface)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex h-full flex-col justify-between p-4">
              <div className="flex items-center justify-between text-[11px] text-[var(--muted-foreground)]">
                <span className="font-medium">Sellah</span>
                <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-[10px] text-red-500">
                  {t("heroVerifiedBadge")}
                </span>
              </div>
              <div className="space-y-2 text-[11px] text-[var(--foreground)]">
                <div className="flex items-center justify-between rounded-xl bg-[var(--surface-soft)] p-2">
                  <span>{t("heroCardProductName")}</span>
                  <span className="font-semibold text-red-500">{t("heroCardPrice")}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-[var(--surface-soft)]/75 p-2">
                  <span>{t("heroCardShippingLabel")}</span>
                  <span className="text-[var(--muted-foreground)]">
                    {t("heroCardShippingValue")}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1 text-[10px] text-[var(--muted-foreground)]">
                  <span>{t("heroCardPaymentSecured")}</span>
                  <span className="text-red-500">{t("heroCardPaymentType")}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 top-6 hidden w-28 rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] p-2 text-[10px] text-[var(--foreground)] shadow-lg sm:block"
            initial={{ opacity: 0, x: 40, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="font-medium">{t("heroStatusTitle")}</p>
            <div className="mt-1 h-1.5 w-full rounded-full bg-[var(--surface-soft)]">
              <div className="h-1.5 w-3/4 rounded-full bg-red-500" />
            </div>
            <p className="mt-1 text-[9px] text-[var(--muted-foreground)]">
              {t("heroStatusDescription")}
            </p>
          </motion.div>

          <motion.div
            className="absolute -left-4 bottom-4 hidden w-28 rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] p-2 text-[10px] text-[var(--foreground)] shadow-lg sm:block"
            initial={{ opacity: 0, x: -40, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
          >
            <p className="font-medium">{t("heroRatingTitle")}</p>
            <p className="mt-0.5 text-[9px] text-[var(--muted-foreground)]">
              {t("heroRatingDescription")}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
