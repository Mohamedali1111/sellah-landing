"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.08 * index,
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

export function ForSellers() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const items = [
    {
      title: t("sellersPillStoreTitle"),
      body: t("sellersPillStoreBody"),
    },
    {
      title: t("sellersPillProductsTitle"),
      body: t("sellersPillProductsBody"),
    },
    {
      title: t("sellersPillOrdersTitle"),
      body: t("sellersPillOrdersBody"),
    },
    {
      title: t("sellersPillCommissionTitle"),
      body: t("sellersPillCommissionBody"),
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_minmax(0,1.2fr)]">
        <div className={isArabic ? "text-right" : "text-left"}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            {t("sellersSectionEyebrow")}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold text-zinc-50 sm:text-[1.7rem]">
            {t("sellersSectionTitle")}
          </h2>
          <p className="mt-3 max-w-md text-sm text-zinc-400 sm:text-[0.95rem]">
            {t("sellersSectionDescription")}
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-[0.82rem] font-medium text-red-200 ring-1 ring-red-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{t("sellersBadgeCommission")}</span>
          </div>
        </div>

        <div className={`relative ${isArabic ? "text-right" : "text-left"}`}>
          <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(circle_at_0%_0%,#ef4444_0,transparent_50%)] opacity-40 blur-3xl" />
          <div className="relative grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                className={`flex flex-col justify-between rounded-2xl border border-zinc-800/70 bg-zinc-900/70 p-4 text-left shadow-[0_10px_40px_rgba(0,0,0,0.6)] ${
                  isArabic ? "text-right" : "text-left"
                }`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <div className="space-y-1.5">
                  <h3 className="text-[0.9rem] font-semibold text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="text-[0.8rem] leading-relaxed text-zinc-400">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={`mt-4 flex flex-wrap items-center gap-3 text-[0.78rem] text-zinc-500 ${
              isArabic ? "flex-row-reverse" : "justify-between"
            }`}
          >
            <span className={isArabic ? "text-right" : ""}>
              {t("sellersFooterLine")}
            </span>
            <button className="inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-1.5 text-xs font-medium text-white shadow-md shadow-red-600/40 transition hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              {t("sellersCta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

