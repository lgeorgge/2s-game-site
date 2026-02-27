import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n/locales";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function NavBar({
  locale,
  slug,
}: {
  locale: Locale;
  slug?: string[];
}) {
  const t = await getTranslations({ locale, namespace: "nav" });
  const path = slug?.join("/") || "";
  const nav = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/rules`, label: t("rules") },
    { href: `/${locale}/gallery`, label: t("gallery") },
    { href: `/${locale}/behind-the-scenes`, label: t("behind") },
  ] as const;

  const languages = [
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
    { code: "es", label: "ES" },
  ] as const;

  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href={`/${locale}`} className="text-lg font-semibold">
          2S
        </Link>
        {/* Main navigation */}
        <div className="hidden gap-2 items-center md:flex">
          {nav.map((item) => (
            <Button key={item.href} asChild variant={"ghost"}>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>

        {/* Language switcher */}
        <div className="flex gap-2 items-center">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              size={"sm"}
              asChild
              variant={lang.code === locale ? "default" : "outline"}
            >
              <Link href={`/${lang.code}/${path}`}>{lang.label}</Link>
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
}
