import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* additional Next.js config options can go here */
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
