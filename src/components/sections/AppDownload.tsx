"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export function AppDownload() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
        {/* Text & buttons */}
        <div className={isArabic ? "text-right" : "text-left"}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            {t("downloadEyebrow")}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold text-zinc-50 sm:text-[1.7rem]">
            {t("downloadTitle")}
          </h2>
          <p className="mt-3 max-w-md text-sm text-zinc-300 sm:text-[0.95rem]">
            {t("downloadDescription")}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-[0.8rem] text-zinc-400">
            <span>{t("downloadComingSoon")}</span>
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-black/40 px-4 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-zinc-500">
                <span></span>
                <span>{t("downloadAppStore")}</span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-black/40 px-4 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-zinc-500">
                <span className="h-2 w-2 rounded-sm bg-green-400" />
                <span>{t("downloadPlayStore")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* QR block */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="relative flex flex-col items-center gap-3">
            <div className="absolute inset-0 -z-10 translate-y-6 scale-110 rounded-3xl bg-[radial-gradient(circle_at_top,#ef4444_0,transparent_55%)] opacity-40 blur-3xl" />
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-4">
              <div className="grid h-28 w-28 grid-cols-6 grid-rows-6 gap-[2px] rounded-md bg-zinc-900 p-2">
                {Array.from({ length: 36 }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-[2px] ${
                      index % 3 === 0
                        ? "bg-zinc-50"
                        : index % 4 === 0
                          ? "bg-zinc-700"
                          : "bg-zinc-900"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-[0.8rem] text-zinc-400">
              {t("downloadScanLabel")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

