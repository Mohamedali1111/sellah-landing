"use client";

import { useTranslations } from "next-intl";

export function Trust() {
  const t = useTranslations("HomePage");

  return (
    <section className="section-shell relative pb-16 sm:pb-20">
      <div className="flex flex-col gap-8 border-y border-[var(--border)] py-10">
        <div className="text-start">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-500">
            {t("trustEyebrow")}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold text-[var(--foreground)] sm:text-[1.7rem]">
            {t("trustTitle")}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-[var(--muted-foreground)] sm:text-[0.95rem]">
            {t("trustDescription")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-[color:var(--surface)] p-4 text-start ring-1 ring-red-500/35">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-red-500">
                {t("trustMetricRating")}
              </p>
              <p className="mt-2 text-[0.8rem] text-[var(--muted-foreground)]">
                {t("trustMetricRatingBody")}
              </p>
            </div>
            <div className="rounded-2xl bg-[color:var(--surface)] p-4 text-start ring-1 ring-[var(--border)]">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--foreground)]">
                {t("trustMetricVerified")}
              </p>
              <p className="mt-2 text-[0.8rem] text-[var(--muted-foreground)]">
                {t("trustMetricVerifiedBody")}
              </p>
            </div>
            <div className="rounded-2xl bg-[color:var(--surface)] p-4 text-start ring-1 ring-red-500/35">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-red-500">
                {t("trustMetricProtection")}
              </p>
              <p className="mt-2 text-[0.8rem] text-[var(--muted-foreground)]">
                {t("trustMetricProtectionBody")}
              </p>
            </div>
          </div>

          <div className="text-start">
            <div className="flex flex-wrap justify-start gap-2 text-[0.8rem] text-[var(--muted-foreground)]">
              <span className="chip text-red-500">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                {t("trustBadgeDisputes")}
              </span>
              <span className="chip text-red-500">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                {t("trustBadgeSupport")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
