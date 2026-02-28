"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.08 * index,
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

export function ForBuyers() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const steps = [
    {
      title: t("buyersStepDiscoverTitle"),
      body: t("buyersStepDiscoverBody"),
      accent: "bg-emerald-400",
    },
    {
      title: t("buyersStepClarityTitle"),
      body: t("buyersStepClarityBody"),
      accent: "bg-sky-400",
    },
    {
      title: t("buyersStepSecurityTitle"),
      body: t("buyersStepSecurityBody"),
      accent: "bg-red-400",
    },
    {
      title: t("buyersStepTrackingTitle"),
      body: t("buyersStepTrackingBody"),
      accent: "bg-amber-400",
    },
  ];

  return (
    <section id="buyers" className="section-shell relative scroll-mt-24 pb-16 sm:pb-20">
      <div
        className={`flex flex-col gap-10 lg:flex-row ${
          isArabic ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-foreground)] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {t("buyersSectionEyebrow")}
          </p>
          <h2
            className={`mt-3 text-balance text-2xl font-semibold text-[var(--foreground)] sm:text-[1.7rem] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {t("buyersSectionTitle")}
          </h2>
          <p
            className={`mt-3 max-w-md text-sm text-[var(--muted-foreground)] sm:text-[0.95rem] ${
              isArabic ? "ml-auto text-right" : "text-left"
            }`}
          >
            {t("buyersSectionDescription")}
          </p>
          <div
            className={`mt-4 flex flex-wrap gap-2 text-[0.78rem] text-[var(--muted-foreground)] ${
              isArabic ? "justify-end" : "justify-start"
            }`}
          >
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t("buyersMetaSafe")}
            </span>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              {t("buyersMetaLocal")}
            </span>
          </div>
        </div>

        <div className="flex-1">
          <div
            className={`relative grid gap-4 text-sm ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`relative flex gap-4 rounded-2xl bg-[color:var(--surface)] p-4 ring-1 ring-[var(--border)] backdrop-blur ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <div className="relative mt-1">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${step.accent} ring-2 ring-[var(--surface-strong)]`}
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[0.9rem] font-semibold text-[var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="text-[0.8rem] leading-relaxed text-[var(--muted-foreground)]">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
