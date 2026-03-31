"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

type Role = "buyer" | "seller";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL?.trim() || "contact@sellah.app";

const siteBase =
  (process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ||
    "https://www.sellah.app").replace(/^http:\/\//i, "https://");

const formAction = `https://formsubmit.co/${encodeURIComponent(CONTACT_EMAIL)}`;

export function CTASection() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("buyer");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailTouched, setEmailTouched] = useState(false);

  const redirectUrl = `${siteBase}/?early_access=1#cta`;

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get("early_access") === "1") {
      setSubmitted(true);
      setEmail("");
      const path = window.location.pathname || "/";
      const hash = window.location.hash?.length > 1 ? window.location.hash : "#cta";
      window.history.replaceState({}, "", `${path}${hash}`);
    }
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setError(t("ctaErrorInvalidEmail"));
      return;
    }

    setSubmitted(false);
    formRef.current?.submit();
  };

  const emailInvalid = emailTouched && email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  return (
    <section id="cta" className="section-shell relative scroll-mt-24 pb-20 sm:pb-24">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-red-500/30 px-4 py-8 backdrop-blur-sm sm:px-8 sm:py-10"
        style={{ background: "var(--hero-gradient)" }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(248,113,113,0.28),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(239,68,68,0.2),transparent_60%)] opacity-80" />

        <div className="relative z-10 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] md:items-center">
          <div className="text-start">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              {t("ctaEyebrow")}
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold text-[var(--foreground)] sm:text-[1.7rem]">
              {t("ctaTitle")}
            </h2>
            <p className="mt-3 max-w-md text-sm text-[var(--muted-foreground)] sm:text-[0.95rem] rtl:ms-auto">
              {t("ctaDescription")}
            </p>
          </div>

          <form
            ref={formRef}
            action={formAction}
            method="POST"
            onSubmit={onSubmit}
            className="relative flex w-full flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] p-4 text-start shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:p-6 dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            noValidate
          >
            <input type="hidden" name="_subject" value="Sellah — Early access request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={redirectUrl} />
            <input type="hidden" name="locale" value={locale} />
            <input type="hidden" name="role" value={role} />

            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="cta-email"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]"
              >
                {t("ctaEmailLabel")}
              </label>
              <input
                id="cta-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                placeholder={t("ctaEmailPlaceholder")}
                aria-invalid={Boolean(error || emailInvalid)}
                aria-describedby={error ? "cta-error" : undefined}
                className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-3.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)] focus:border-red-500 focus:ring-2 focus:ring-red-500/35 aria-[invalid=true]:border-red-500/70"
              />
            </div>

            <fieldset className="flex flex-col gap-2 border-0 p-0">
              <legend className="mb-0.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                {t("ctaRoleLabel")}
              </legend>
              <p className="text-xs text-[var(--muted-foreground)]">{t("ctaRoleHint")}</p>
              <div
                className={`flex flex-wrap gap-2 ${isArabic ? "flex-row-reverse" : ""}`}
                role="radiogroup"
                aria-label={t("ctaRoleLabel")}
              >
                <button
                  type="button"
                  onClick={() => setRole("buyer")}
                  role="radio"
                  aria-checked={role === "buyer"}
                  className={`min-h-[44px] rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                    role === "buyer"
                      ? "border-red-500 bg-red-500 text-white shadow-md shadow-red-500/25"
                      : "border-[var(--border)] bg-[var(--surface-strong)] text-[var(--muted-foreground)] hover:border-red-400/60 hover:text-[var(--foreground)]"
                  }`}
                >
                  {t("ctaRoleBuyer")}
                </button>
                <button
                  type="button"
                  onClick={() => setRole("seller")}
                  role="radio"
                  aria-checked={role === "seller"}
                  className={`min-h-[44px] rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                    role === "seller"
                      ? "border-red-500 bg-red-500 text-white shadow-md shadow-red-500/25"
                      : "border-[var(--border)] bg-[var(--surface-strong)] text-[var(--muted-foreground)] hover:border-red-400/60 hover:text-[var(--foreground)]"
                  }`}
                >
                  {t("ctaRoleSeller")}
                </button>
              </div>
            </fieldset>

            <p className="text-[0.72rem] leading-relaxed text-[var(--muted-foreground)]">
              {t("ctaFootnote")}
            </p>

            {error && (
              <p
                id="cta-error"
                className="rounded-xl border border-red-500/45 bg-red-500/10 px-3 py-2.5 text-sm text-red-600 dark:text-red-400"
                role="alert"
              >
                {error}
              </p>
            )}

            {submitted && !error && (
              <p
                className="rounded-xl border border-[var(--success)]/45 bg-[var(--success)]/12 px-3 py-2.5 text-sm font-medium text-[var(--success)]"
                role="status"
              >
                {t("ctaSuccessMessage")}
              </p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button type="submit" className="btn-primary h-12 w-full px-6 text-sm sm:w-auto sm:min-w-[10rem]">
                {t("ctaPrimary")}
              </button>
              <a href="#sellers" className="btn-secondary flex h-12 w-full items-center justify-center px-5 text-xs sm:w-auto">
                {t("ctaSecondary")}
              </a>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
