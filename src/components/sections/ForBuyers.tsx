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
    <section className="relative mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
      <div
        className={`flex flex-col gap-10 lg:flex-row ${
          isArabic ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {t("buyersSectionEyebrow")}
          </p>
          <h2
            className={`mt-3 text-balance text-2xl font-semibold text-zinc-50 sm:text-[1.7rem] ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            {t("buyersSectionTitle")}
          </h2>
          <p
            className={`mt-3 max-w-md text-sm text-zinc-400 sm:text-[0.95rem] ${
              isArabic ? "ml-auto text-right" : "text-left"
            }`}
          >
            {t("buyersSectionDescription")}
          </p>
          <div
            className={`mt-4 flex flex-wrap gap-2 text-[0.78rem] text-zinc-500 ${
              isArabic ? "justify-end" : "justify-start"
            }`}
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900/80 px-3 py-1 text-zinc-300 ring-1 ring-zinc-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t("buyersMetaSafe")}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900/60 px-3 py-1 text-zinc-300 ring-1 ring-zinc-800/80">
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
                className={`relative flex gap-4 rounded-2xl bg-zinc-900/70 p-4 ring-1 ring-zinc-800/60 backdrop-blur ${
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
                    className={`h-2.5 w-2.5 rounded-full ${step.accent} ring-2 ring-zinc-950`}
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[0.9rem] font-semibold text-zinc-50">
                    {step.title}
                  </h3>
                  <p className="text-[0.8rem] leading-relaxed text-zinc-400">
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

