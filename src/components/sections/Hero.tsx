"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="relative mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 sm:px-6 lg:flex-row lg:items-center lg:gap-14">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-[-15%] z-0 mx-auto h-72 max-w-3xl rounded-full bg-[radial-gradient(circle_at_top,#ef4444_0,transparent_60%)] opacity-60 blur-3xl" />

      {/* Left: text */}
      <motion.div
        className={`relative z-10 flex max-w-xl flex-col ${
          isArabic ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
        } text-center`}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-red-400 ring-1 ring-red-500/40 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <span>Marketplace · Egypt</span>
        </div>
        <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {t("heroTitle")}
        </h1>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
          {t("heroSubtitle")}
        </p>
        <div
          className={`mt-7 flex flex-col items-center gap-3 ${
            isArabic ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <motion.button
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-11 items-center justify-center rounded-full bg-red-600 px-7 text-sm font-medium text-white shadow-lg shadow-red-600/40 transition hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {t("primaryCta")}
          </motion.button>
          <motion.button
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-700/60 bg-black/30 px-7 text-sm font-medium text-zinc-100 backdrop-blur-sm transition hover:border-red-500/60 hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-zinc-900/40"
          >
            {t("secondaryCta")}
          </motion.button>
        </div>
        <div
          className={`mt-5 flex flex-wrap items-center gap-3 text-[11px] text-zinc-500 ${
            isArabic ? "justify-end" : "justify-start"
          }`}
        >
          <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-zinc-300 ring-1 ring-white/5 dark:bg-zinc-900/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Escrow-like secure payment
          </span>
          <span>For buyers & local brands in Egypt</span>
        </div>
      </motion.div>

      {/* Right: abstract phone / UI stack */}
      <motion.div
        className="relative z-10 flex flex-1 items-center justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 0.94, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]">
          <motion.div
            className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_0%_0%,#fecaca,_#1f2937_45%,#020617)] shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
            initial={{ rotate: -9, y: 12 }}
            animate={{ rotate: -4, y: 0 }}
            transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
          />

          <motion.div
            className="absolute inset-[10%] rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex h-full flex-col justify-between p-4">
              <div className="flex items-center justify-between text-[11px] text-zinc-300">
                <span className="font-medium">Sellah</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">
                  Verified brand
                </span>
              </div>
              <div className="space-y-2 text-[11px] text-zinc-200">
                <div className="flex items-center justify-between rounded-xl bg-zinc-900/80 p-2">
                  <span>Oversized hoodie</span>
                  <span className="font-semibold text-red-400">950 EGP</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-zinc-900/60 p-2">
                  <span>Cairo delivery</span>
                  <span className="text-zinc-400">Tomorrow</span>
                </div>
                <div className="flex items-center justify-between pt-1 text-[10px] text-zinc-400">
                  <span>Payment secured by Sellah</span>
                  <span className="text-amber-300">Escrow</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 top-6 hidden w-28 rounded-2xl border border-white/10 bg-zinc-900/80 p-2 text-[10px] text-zinc-200 shadow-lg sm:block"
            initial={{ opacity: 0, x: 40, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="font-medium">Order status</p>
            <div className="mt-1 h-1.5 w-full rounded-full bg-zinc-800">
              <div className="h-1.5 w-3/4 rounded-full bg-red-500" />
            </div>
            <p className="mt-1 text-[9px] text-zinc-400">
              Out for delivery · Maadi
            </p>
          </motion.div>

          <motion.div
            className="absolute -left-4 bottom-4 hidden w-28 rounded-2xl border border-white/10 bg-zinc-900/80 p-2 text-[10px] text-zinc-200 shadow-lg sm:block"
            initial={{ opacity: 0, x: -40, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
          >
            <p className="font-medium">4.9 rating</p>
            <p className="mt-0.5 text-[9px] text-zinc-400">
              From 320+ orders on Sellah
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

