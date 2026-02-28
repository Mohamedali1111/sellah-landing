"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export function AppDownload() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section id="download" className="section-shell relative scroll-mt-24 pb-16 sm:pb-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
        <div className="text-start">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
            {t("downloadEyebrow")}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold text-[var(--foreground)] sm:text-[1.7rem]">
            {t("downloadTitle")}
          </h2>
          <p className="mt-3 max-w-md text-sm text-[var(--muted-foreground)] sm:text-[0.95rem]">
            {t("downloadDescription")}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-[0.8rem] text-[var(--muted-foreground)]">
            <span>{t("downloadComingSoon")}</span>
            <div className="flex flex-wrap gap-2">
              <button className="btn-secondary gap-2 px-4 py-1.5 text-xs">
                <span className="text-sm"></span>
                <span>{t("downloadAppStore")}</span>
              </button>
              <button className="btn-secondary gap-2 px-4 py-1.5 text-xs">
                <span className="h-2 w-2 rounded-sm bg-red-500" />
                <span>{t("downloadPlayStore")}</span>
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="relative flex flex-col items-center gap-3">
            <div className="absolute inset-0 -z-10 translate-y-6 scale-110 rounded-3xl bg-[radial-gradient(circle_at_top,#ef4444_0,transparent_55%)] opacity-40 blur-3xl" />
            <div className="rounded-3xl border border-[var(--border)] bg-[color:var(--surface)] p-4">
              <div className="grid h-28 w-28 grid-cols-6 grid-rows-6 gap-[2px] rounded-md bg-[var(--surface-soft)] p-2">
                {Array.from({ length: 36 }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-[2px] ${
                      index % 3 === 0
                        ? "bg-[var(--foreground)]"
                        : index % 4 === 0
                          ? "bg-red-500"
                          : "bg-[color:var(--surface)]"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-[0.8rem] text-[var(--muted-foreground)]">
              {t("downloadScanLabel")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
