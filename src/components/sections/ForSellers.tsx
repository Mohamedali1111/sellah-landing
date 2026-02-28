"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.08 * index,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  }),
};

export function ForSellers() {
  const t = useTranslations("HomePage");

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
    <section id="sellers" className="section-shell relative scroll-mt-24 pb-16 sm:pb-20">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_minmax(0,1.2fr)]">
        <div className="text-start">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
            {t("sellersSectionEyebrow")}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold text-[var(--foreground)] sm:text-[1.7rem]">
            {t("sellersSectionTitle")}
          </h2>
          <p className="mt-3 max-w-md text-sm text-[var(--muted-foreground)] sm:text-[0.95rem] rtl:ms-auto">
            {t("sellersSectionDescription")}
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-[0.82rem] font-medium text-red-500">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
            <span>{t("sellersBadgeCommission")}</span>
          </div>
        </div>

        <div className="relative text-start">
          <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(circle_at_0%_0%,#ef4444_0,transparent_55%)] opacity-35 blur-3xl" />
          <div className="relative grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] p-3 text-start shadow-[0_10px_36px_rgba(0,0,0,0.18)] sm:p-4"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <div className="space-y-1.5">
                  <h3 className="text-[0.9rem] font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-[0.8rem] leading-relaxed text-[var(--muted-foreground)]">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[0.78rem] text-[var(--muted-foreground)]">
            <span className="text-start">
              {t("sellersFooterLine")}
            </span>
            <a href="#cta" className="btn-primary min-h-[44px] min-w-[44px] touch-manipulation px-5 py-2.5 text-xs sm:py-1.5">
              {t("sellersCta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
