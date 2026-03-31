/**
 * Canonical public site URL for metadata, sitemap, and absolute links.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.sellah.app).
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "").replace(/^http:\/\//i, "https://");
  }

  const publicVercel = process.env.NEXT_PUBLIC_VERCEL_URL?.trim();
  if (publicVercel) {
    const host = publicVercel.replace(/^https?:\/\//i, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//i, "").replace(/\/$/, "");
    return `https://${host}`;
  }

  return "https://www.sellah.app";
}
