"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

type Mode = "buyer" | "seller";

export function HowItWorks() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const [mode, setMode] = useState<Mode>("buyer");
  const [activeIndex, setActiveIndex] = useState(0);

  const stepsBuyer = [
    {
      key: "1",
      title: t("howBuyerStep1Title"),
      body: t("howBuyerStep1Body"),
    },
    {
      key: "2",
      title: t("howBuyerStep2Title"),
      body: t("howBuyerStep2Body"),
    },
    {
      key: "3",
      title: t("howBuyerStep3Title"),
      body: t("howBuyerStep3Body"),
    },
    {
      key: "4",
      title: t("howBuyerStep4Title"),
      body: t("howBuyerStep4Body"),
    },
  ];

  const stepsSeller = [
    {
      key: "1",
      title: t("howSellerStep1Title"),
      body: t("howSellerStep1Body"),
    },
    {
      key: "2",
      title: t("howSellerStep2Title"),
      body: t("howSellerStep2Body"),
    },
    {
      key: "3",
      title: t("howSellerStep3Title"),
      body: t("howSellerStep3Body"),
    },
    {
      key: "4",
      title: t("howSellerStep4Title"),
      body: t("howSellerStep4Body"),
    },
  ];

  const steps = mode === "buyer" ? stepsBuyer : stepsSeller;
  const activeStep = steps[activeIndex] ?? steps[0];

  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)] lg:items-start">
        {/* Left: title + toggle + vertical timeline */}
        <div className={isArabic ? "text-right" : "text-left"}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            {t("howEyebrow")}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-semibold text-zinc-50 sm:text-[1.7rem]">
            {t("howTitle")}
          </h2>
          <p className="mt-3 max-w-md text-sm text-zinc-300 sm:text-[0.95rem]">
            {t("howDescription")}
          </p>

          <div
            className={`mt-5 inline-flex rounded-full border border-zinc-700/70 bg-black/40 p-0.5 text-xs font-medium text-zinc-300 backdrop-blur ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => {
                setMode("buyer");
                setActiveIndex(0);
              }}
              className={`rounded-full px-4 py-1.5 transition ${
                mode === "buyer"
                  ? "bg-zinc-50 text-zinc-900"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              {t("howToggleBuyer")}
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("seller");
                setActiveIndex(0);
              }}
              className={`rounded-full px-4 py-1.5 transition ${
                mode === "seller"
                  ? "bg-zinc-50 text-zinc-900"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              {t("howToggleSeller")}
            </button>
          </div>

          <div className="mt-6 flex">
            <div className="relative mr-4 flex flex-col items-center">
              <div className="absolute top-2 bottom-2 w-px bg-zinc-800" />
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={step.key}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative z-10 mb-4 flex h-7 w-7 items-center justify-center rounded-full border text-xs transition ${
                      isActive
                        ? "border-red-400 bg-red-500 text-white"
                        : "border-zinc-700 bg-zinc-950 text-zinc-400 hover:border-red-400/70 hover:text-red-300"
                    }`}
                  >
                    {step.key}
                  </button>
                );
              })}
            </div>
            <div className="space-y-3">
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={step.key}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`w-full rounded-2xl px-3 py-2 text-left text-sm transition ${
                      isActive
                        ? "bg-red-500/15 text-red-100 ring-1 ring-red-500/60"
                        : "bg-transparent text-zinc-400 hover:bg-zinc-900/60"
                    }`}
                  >
                    {step.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: animated detail panel */}
        <motion.div
          key={`${mode}-${activeStep.key}`}
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="relative mt-2 flex-1 lg:mt-0"
        >
          <div className="relative overflow-hidden rounded-3xl bg-black/60 p-6 ring-1 ring-zinc-800/80 backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(248,113,113,0.28),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.24),transparent_55%)] opacity-80" />
            <div className="relative z-10 space-y-3 text-left">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-300">
                {mode === "buyer" ? t("howLabelBuyer") : t("howLabelSeller")}
              </p>
              <h3 className="text-lg font-semibold text-zinc-50">
                {activeStep.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-200">
                {activeStep.body}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

