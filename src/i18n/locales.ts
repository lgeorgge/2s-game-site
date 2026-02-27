export const LOCALES = ["en", "ar", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getDir(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}
