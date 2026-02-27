import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans p-4">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-20 px-8 bg-card rounded-3xl shadow-2xl sm:items-start text-white border-4 border-white/20">
        <Image
          className="invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left mt-12">
          <h1 className="max-w-xs text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-md">
            Bienvenido a 2S
          </h1>
          <p className="max-w-md text-xl leading-relaxed text-white/90 font-medium">
            Personalizando el sitio con el tema español.
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-12 text-base font-bold sm:flex-row w-full sm:w-auto">
          <a
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-background px-8 text-white transition-all hover:scale-105 active:scale-95 shadow-lg border-2 border-white/20 md:w-auto"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comenzar
          </a>
          <a
            className="flex h-14 w-full items-center justify-center rounded-xl border-2 border-white/40 bg-white/10 px-8 text-white transition-all hover:bg-white/20 md:w-auto"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentación
          </a>
        </div>
      </main>
    </div>
  );
}
