import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n/locales";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

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
  ];

  const languages = [
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
    { code: "es", label: "ES" },
  ] as const;

  return (
    <header className="bg-primary text-white border-b border-white/20 sticky top-0 z-50 shadow-lg">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <div className="md:hidden">
          <MobileMenu title="2S" items={nav}></MobileMenu>
        </div>
        <Link
          href={`/${locale}`}
          className="text-2xl font-black tracking-tighter"
        >
          2S
        </Link>
        {/* Main navigation */}

        <div className="hidden gap-4 items-center md:flex">
          {nav.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={"ghost"}
              className="font-bold shadow-orange-500"
            >
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
