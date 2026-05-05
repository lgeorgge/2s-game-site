import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/locales";

const LINKS = {
  instagram: "https://www.instagram.com/_2_ss__?igsh=ODEzcGt4OTFoeDk5",
  facebook: "https://www.facebook.com/share/1KpcM9Muy7/?mibextid=wwXIfr",
  tiktok: "https://www.tiktok.com/@2ese26?_r=1&_t=ZS-95mSwpj3ViB",
} as const;

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.51 5.51 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM18 6.8a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M13.5 22v-8h2.7l.5-3H13.5V9.1c0-.9.3-1.6 1.6-1.6h1.9V4.8c-.3 0-1.4-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8V11H6.8v3h2.7v8h4Z"
      />
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        fill="currentColor"
        d="M16.7 2c.3 2.1 1.6 3.8 3.6 4.5v3.1c-1.9 0-3.6-.6-4.9-1.7v7.2a6.1 6.1 0 1 1-6.1-6.1c.4 0 .8 0 1.2.1v3.4a2.9 2.9 0 1 0 2 2.8V2h4.2Z"
      />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-bold hover:bg-white/10 transition-colors"
    >
      <span className="text-white/90">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

export async function FollowUs({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "follow" });

  return (
    <section className="mt-10 w-full bg-white/10 p-6 md:p-8 rounded-2xl border border-white/10">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-bold">{t("title")}</h2>
        <p className="text-white/85 text-base md:text-lg font-medium">
          {t("subtitle")}
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <SocialLink
          href={LINKS.instagram}
          label="Instagram"
          icon={<IconInstagram />}
        />
        <SocialLink href={LINKS.facebook} label="Facebook" icon={<IconFacebook />} />
        <SocialLink href={LINKS.tiktok} label="TikTok" icon={<IconTikTok />} />
      </div>
    </section>
  );
}

