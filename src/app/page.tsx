import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-16">
      <section className="max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
          Sellah · سِلّة
        </p>
        <h1 className="mb-4 text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
          {t("heroTitle")}
        </h1>
        <p className="mb-8 text-base text-zinc-600 dark:text-zinc-400">
          {t("heroSubtitle")}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
          <button className="h-11 rounded-full bg-red-600 px-6 text-sm font-medium text-white shadow-md shadow-red-600/40 transition hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            {t("primaryCta")}
          </button>
          <button className="h-11 rounded-full border border-zinc-800/10 px-6 text-sm font-medium text-foreground/80 backdrop-blur-sm transition hover:border-red-500/60 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            {t("secondaryCta")}
          </button>
        </div>
      </section>
    </main>
  );
}
