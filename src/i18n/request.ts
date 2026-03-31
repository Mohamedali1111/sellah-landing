import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const store = await cookies();
  const rawLocale = store.get("locale")?.value || "en";

  const locale = (rawLocale === "ar" ? "ar" : "en") as "en" | "ar";

  const base = (await import(`../../messages/${locale}.json`)).default;
  const legal = (await import(`../../messages/legal-${locale}.json`)).default;

  return {
    locale,
    messages: { ...base, ...legal },
  };
});

