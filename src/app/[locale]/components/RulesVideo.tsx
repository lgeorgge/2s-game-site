import { Locale } from "@/i18n/locales";

const VIDEO_IDS = [
  "1SD7uqLgoMdkcrwp7RUhu2CFZsohQ4xnY",
  "1oZvgs0NpKCmqoSBESYSCF6nEjlpD4Z3A",
  "1Q9yxK4ULrei5kiojwo8dfLBg3Axsvsop",
] as const;

function getTitle(locale: Locale) {
  if (locale === "ar") return "فيديو";
  if (locale === "es") return "Video";
  return "Video";
}

export function RulesVideo({ locale }: { locale: Locale }) {
  const title = getTitle(locale);

  return (
    <section className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl group">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary text-lg font-black shadow-lg group-hover:rotate-12 transition-transform">
          4
        </span>
        {title}
      </h2>

      <div className="flex w-full flex-col gap-6">
        {VIDEO_IDS.map((id, idx) => {
          const src = `https://drive.google.com/file/d/${id}/preview`;
          return (
            <div
              key={id}
              className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  src={src}
                  title={`${title} ${idx + 1}`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

