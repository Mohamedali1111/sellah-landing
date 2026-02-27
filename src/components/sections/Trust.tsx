"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export function Trust() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
      <div className="flex flex-col gap-8 border-t border-b border-zinc-800/70 py-10">
        <div className={isArabic ? "text-right" : "text-left"}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            {t("trustEyebrow")}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold text-zinc-50 sm:text-[1.7rem]">
            {t("trustTitle")}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-300 sm:text-[0.95rem]">
            {t("trustDescription")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          {/* Left: horizontal metrics */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-zinc-950/80 p-4 ring-1 ring-emerald-400/40">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
                {t("trustMetricRating")}
              </p>
              <p className="mt-2 text-[0.8rem] text-zinc-400">
                {t("trustMetricRatingBody")}
              </p>
            </div>
            <div className="rounded-2xl bg-zinc-950/80 p-4 ring-1 ring-zinc-700/80">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-200">
                {t("trustMetricVerified")}
              </p>
              <p className="mt-2 text-[0.8rem] text-zinc-400">
                {t("trustMetricVerifiedBody")}
              </p>
            </div>
            <div className="rounded-2xl bg-zinc-950/80 p-4 ring-1 ring-red-400/40">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-red-300">
                {t("trustMetricProtection")}
              </p>
              <p className="mt-2 text-[0.8rem] text-zinc-400">
                {t("trustMetricProtectionBody")}
              </p>
            </div>
          </div>

          {/* Right: simple stacked chips */}
          <div className={isArabic ? "text-right" : "text-left"}>
            <div className="flex flex-wrap gap-2 text-[0.8rem] text-zinc-400">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-200 ring-1 ring-emerald-400/40">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {t("trustBadgeDisputes")}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 px-3 py-1 text-sky-200 ring-1 ring-sky-400/40">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                {t("trustBadgeSupport")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

