import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/locales";
import Image from "next/image";
import Link from "next/link";

const OBJECTIVE_EMOJIS = [
  "1️⃣",
  "2️⃣",
  "3️⃣",
  "4️⃣",
  "5️⃣",
  "6️⃣",
  "7️⃣",
  "8️⃣",
  "9️⃣",
  "🔟",
];

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale; slug?: string[] }>;
}) {
  const { locale, slug } = await params;
  const page = slug?.[0];

  // ── RULES PAGE ────────────────────────────────────────────────────────────
  if (page === "rules") {
    const t = await getTranslations({ locale, namespace: "rules" });
    return (
      <div className="flex min-h-screen flex-col items-center justify-start bg-background font-sans p-4 md:p-8 pt-12 md:pt-20">
        <main className="flex w-full max-w-4xl flex-col items-center py-12 px-6 md:px-12 bg-card rounded-3xl shadow-2xl text-white border-4 border-white/20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 text-center drop-shadow-lg">
            {t("title")}
          </h1>

          <div className="grid gap-8 w-full">
            {/* How to Play */}
            <section className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl group">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary text-lg font-black shadow-lg group-hover:rotate-12 transition-transform">
                  1
                </span>
                {t("howToPlay.title")}
              </h2>
              <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed opacity-95">
                <p className="bg-white/5 p-4 rounded-xl border border-white/5">
                  {t("howToPlay.p1")}
                </p>
                <p>{t("howToPlay.p2")}</p>
                <div className="flex flex-col gap-4 mt-8 bg-black/10 p-6 rounded-2xl border border-white/5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400 border border-green-500/30 font-bold">
                      ✔
                    </div>
                    <p className="font-semibold">{t("howToPlay.p3")}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-bold">
                      ✘
                    </div>
                    <p className="font-semibold">{t("howToPlay.p4")}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Support Tools */}
            <section className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl group">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary text-lg font-black shadow-lg group-hover:rotate-12 transition-transform">
                  2
                </span>
                {t("supportTools.title")}
              </h2>
              <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed opacity-95">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/10 rounded-xl shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <p>{t("supportTools.p1")}</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/10 rounded-xl shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <p>{t("supportTools.p2")}</p>
                </div>
              </div>
            </section>

            {/* Winner */}
            <section className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl group">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary text-lg font-black shadow-lg group-hover:rotate-12 transition-transform">
                  3
                </span>
                {t("winner.title")}
              </h2>
              <div className="p-6 bg-white/10 rounded-2xl border-2 border-dashed border-white/20">
                <p className="text-xl md:text-2xl font-black text-center leading-relaxed">
                  🏆 {t("winner.p1")}
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12">
            <Link
              href={`/${locale}`}
              className="px-8 py-4 bg-background text-white rounded-xl font-bold text-lg border-2 border-white/20 hover:scale-105 active:scale-95 transition-all shadow-xl inline-block"
            >
              ←{" "}
              {locale === "ar" ? "العودة" : locale === "es" ? "Volver" : "Back"}
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // ── BEHIND THE SCENES PAGE ────────────────────────────────────────────────
  if (page === "behind-the-scenes") {
    const t = await getTranslations({ locale, namespace: "behind" });
    const bodyLines: string[] = t.raw("body") as string[];
    return (
      <div className="flex min-h-screen flex-col items-center bg-background font-sans p-4 md:p-8 pt-12 md:pt-20">
        <main className="flex w-full max-w-4xl flex-col items-center py-12 px-6 md:px-12 bg-card rounded-3xl shadow-2xl text-white border-4 border-white/20 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="mb-10 flex flex-col items-center gap-4">
            <span className="text-6xl animate-bounce">🎓</span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-center drop-shadow-lg">
              {t("title")}
            </h1>
          </div>

          <div className="w-full space-y-5 text-lg md:text-xl leading-relaxed">
            {bodyLines.map((line, i) => {
              const isQuestion = line.includes("?") || line.includes("؟");
              const isLastLine = i === bodyLines.length - 1;
              return (
                <p
                  key={i}
                  className={`
                    transition-all
                    ${
                      isQuestion
                        ? "text-2xl md:text-3xl font-black text-center italic py-4 text-white/95 border-y border-white/20 my-6"
                        : isLastLine
                          ? "text-2xl md:text-3xl font-black text-center py-6 border-2 border-dashed border-white/30 rounded-2xl bg-white/10 px-6 mt-8"
                          : i === 0
                            ? "bg-white/10 p-5 rounded-xl border border-white/10 font-semibold"
                            : i === 1
                              ? "bg-black/10 p-5 rounded-xl border border-white/5 font-semibold"
                              : "opacity-95 font-medium px-1"
                    }
                  `}
                >
                  {line}
                </p>
              );
            })}
          </div>

          <div className="mt-12">
            <Link
              href={`/${locale}`}
              className="px-8 py-4 bg-background text-white rounded-xl font-bold text-lg border-2 border-white/20 hover:scale-105 active:scale-95 transition-all shadow-xl inline-block"
            >
              ←{" "}
              {locale === "ar" ? "العودة" : locale === "es" ? "Volver" : "Back"}
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // ── HOME PAGE ─────────────────────────────────────────────────────────────
  const tHome = await getTranslations({ locale, namespace: "home" });
  const objectives: string[] = tHome.raw("objectives") as string[];

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-background font-sans p-4 md:p-8">
      {/* Hero */}
      <section className="flex w-full max-w-4xl flex-col items-center justify-center py-20 px-8 bg-card rounded-3xl shadow-2xl text-white border-4 border-white/20 mt-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-md text-center leading-none">
          2S
        </h1>
        <p className="mt-4 text-xl md:text-2xl leading-relaxed text-white/90 font-bold text-center max-w-xl">
          Si Sabes
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href={`/${locale}/rules`}
            className="flex h-14 items-center justify-center gap-2 rounded-xl bg-background px-8 text-white font-black transition-all hover:scale-105 active:scale-95 shadow-lg border-2 border-white/20"
          >
            {locale === "ar"
              ? "القواعد"
              : locale === "es"
                ? "Las Reglas"
                : "The Rules"}
          </Link>
          <Link
            href={`/${locale}/behind-the-scenes`}
            className="flex h-14 items-center justify-center rounded-xl border-2 border-white/40 bg-white/10 px-8 text-white font-black transition-all hover:bg-white/20"
          >
            {locale === "ar"
              ? "خلف الكواليس"
              : locale === "es"
                ? "Detrás de Cámaras"
                : "Behind the Scenes"}
          </Link>
        </div>
      </section>

      {/* Objectives */}
      <section className="flex w-full max-w-4xl flex-col items-center py-12 px-6 md:px-12 bg-card rounded-3xl shadow-2xl text-white border-4 border-white/20 mt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10 text-center drop-shadow-lg">
          {tHome("objectivesTitle")}
        </h2>
        <ol className="w-full space-y-4">
          {objectives.map((obj, i) => (
            <li
              key={i}
              className="flex items-start gap-4 group hover:scale-[1.01] transition-transform"
            >
              <span className="text-2xl shrink-0 mt-0.5">
                {OBJECTIVE_EMOJIS[i]}
              </span>
              <p className="bg-white/10 flex-1 p-4 rounded-xl border border-white/10 text-lg font-medium leading-relaxed group-hover:bg-white/15 transition-colors">
                {obj}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
