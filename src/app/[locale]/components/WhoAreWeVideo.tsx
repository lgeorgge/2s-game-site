const VIDEO_ID = "1lW9LhPF8ULhbTmGw_80mcpFDpR8QAXo9";

export function WhoAreWeVideo() {
  const title = "Who are we";
  const src = `https://drive.google.com/file/d/${VIDEO_ID}/preview`;

  return (
    <section className="mt-10 w-full bg-white/10 p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl group">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary text-lg font-black shadow-lg group-hover:rotate-12 transition-transform">
          ▶
        </span>
        {title}
      </h2>

      <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        <div className="relative w-full aspect-video">
          <iframe
            src={src}
            title={title}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}

