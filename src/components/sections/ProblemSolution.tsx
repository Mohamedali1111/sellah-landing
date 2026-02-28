"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const },
  },
};

export function ProblemSolution() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="section-shell relative mt-4 pb-16 sm:pb-20">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-[var(--border)] px-4 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] sm:px-8 sm:py-10"
        style={{ background: "var(--hero-gradient)" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
          <div className="h-full w-full bg-[radial-gradient(circle_at_0_0,#ef4444_0,transparent_45%),radial-gradient(circle_at_100%_100%,rgba(239,68,68,0.35)_0,transparent_40%)]" />
        </div>

        <div className="relative z-10 flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          {/* Left: DM chaos */}
          <div className="flex-1 space-y-4">
            <div className="text-start text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
              {t("problemEyebrow")}
            </div>
            <h2 className="text-start text-balance text-2xl font-semibold text-[var(--foreground)] sm:text-[1.7rem]">
              {t("problemTitle")}
            </h2>
            <p className="max-w-md text-start text-sm text-[var(--muted-foreground)] sm:text-[0.95rem] rtl:ms-auto">
              {t("problemDescription")}
            </p>

            <motion.div
              className="mt-4 space-y-2 rounded-2xl bg-[color:var(--surface)] p-3 ring-1 ring-[var(--border)] sm:p-4"
              initial={{ opacity: 0, x: isArabic ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <div className="mb-1 flex items-center justify-between text-[11px] text-[var(--muted-foreground)]">
                <span>{t("problemDmHeaderLeft")}</span>
                <span>{t("problemDmHeaderRight")}</span>
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="flex gap-2">
                  <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-[var(--surface-soft)]" />
                  <div className="flex-1 rounded-2xl bg-[var(--surface-soft)] px-3 py-2 text-[var(--foreground)]">
                    {t("problemDmMessage1")}
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-[var(--surface-soft)]/90" />
                  <div className="flex-1 rounded-2xl bg-[var(--surface-soft)]/85 px-3 py-2 text-[var(--foreground)]">
                    {t("problemDmMessage2")}
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-[var(--surface-soft)]/70" />
                  <div className="flex-1 rounded-2xl bg-[var(--surface-soft)]/75 px-3 py-2 text-[var(--muted-foreground)]">
                    {t("problemDmMessage3")}
                  </div>
                </div>
                <div className="flex justify-end text-[10px] text-red-400/80">
                  {t("problemDmFooter")}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider label for larger screens */}
          <div className="my-4 hidden flex-col items-center justify-center text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--muted-foreground)] lg:flex">
            <span className="mb-2 h-8 w-px bg-[var(--border)]" />
            <span>{t("problemVsLabel")}</span>
            <span className="mt-2 h-8 w-px bg-[var(--border)]" />
          </div>

          {/* Right: Sellah solution */}
          <div className="flex-1 space-y-4">
            <div className="text-start text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              {t("solutionEyebrow")}
            </div>
            <h2 className="text-start text-balance text-2xl font-semibold text-[var(--foreground)] sm:text-[1.7rem]">
              {t("solutionTitle")}
            </h2>
            <p className="max-w-md text-start text-sm text-[var(--muted-foreground)] sm:text-[0.95rem] rtl:ms-auto">
              {t("solutionDescription")}
            </p>

            <motion.div
              className="mt-4 grid gap-3 rounded-2xl bg-[color:var(--surface)] p-3 ring-1 ring-red-500/35 backdrop-blur sm:grid-cols-2 sm:p-4"
              initial={{ opacity: 0, x: isArabic ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex flex-col gap-2 text-start">
                <div className="inline-flex items-center gap-2 text-[11px] font-medium text-[var(--foreground)]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                  <span>{t("solutionPillSafe")}</span>
                </div>
                <p className="text-[11px] text-[var(--muted-foreground)]">
                  {t("solutionPillSafeDescription")}
                </p>
              </div>
              <div className="flex flex-col gap-2 text-start">
                <div className="inline-flex items-center gap-2 text-[11px] font-medium text-[var(--foreground)]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  <span>{t("solutionPillClear")}</span>
                </div>
                <p className="text-[11px] text-[var(--muted-foreground)]">
                  {t("solutionPillClearDescription")}
                </p>
              </div>
              <div className="flex flex-col gap-2 text-start">
                <div className="inline-flex items-center gap-2 text-[11px] font-medium text-[var(--foreground)]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                  <span>{t("solutionPillTrack")}</span>
                </div>
                <p className="text-[11px] text-[var(--muted-foreground)]">
                  {t("solutionPillTrackDescription")}
                </p>
              </div>
              <div className="flex flex-col gap-2 text-start">
                <div className="inline-flex items-center gap-2 text-[11px] font-medium text-[var(--foreground)]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  <span>{t("solutionPillDashboard")}</span>
                </div>
                <p className="text-[11px] text-[var(--muted-foreground)]">
                  {t("solutionPillDashboardDescription")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
