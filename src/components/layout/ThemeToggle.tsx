"use client";

import { useTheme } from "@/lib/theme/ThemeProvider";
import { useTranslations } from "next-intl";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations("Common");

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark ? t("themeToggleLightLabel") : t("themeToggleDarkLabel")
      }
      className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] text-xs text-[var(--foreground)] shadow-sm touch-manipulation hover:border-red-500/60 hover:text-red-500 md:h-9 md:w-9"
    >
      <span aria-hidden="true">
        {isDark ? (
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="4" className="fill-red-400" />
            <path
              d="M12 3V5M12 19V21M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M3 12H5M19 12H21M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
              className="stroke-red-400"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12.5C20 16.6421 16.6421 20 12.5 20C9.35811 20 6.70812 18.1056 5.64048 15.3332C5.3181 14.4938 5.91549 13.6 6.81243 13.6C7.11927 13.6 7.41794 13.6945 7.66861 13.8708C8.55166 14.5011 9.64184 14.8667 10.8165 14.8667C13.7579 14.8667 16.1332 12.4915 16.1332 9.55001C16.1332 8.37538 15.7676 7.2852 15.1373 6.40215C14.961 6.15148 14.8665 5.8528 14.8665 5.54597C14.8665 4.64902 15.7603 4.05164 16.5997 4.37402C19.3721 5.44166 21.2665 8.09165 21.2665 11.2336C21.2665 11.6649 21.2355 12.0888 21.175 12.5"
              className="fill-current"
            />
          </svg>
        )}
      </span>
    </button>
  );
}
