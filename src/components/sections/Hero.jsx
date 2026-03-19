export default function Hero() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
            Disponible para proyectos selectivos
          </p>

          <h1 className="share-tech-regular mt-4 text-balance text-3xl font-normal tracking-tight text-white sm:text-4xl">
            Diseño y desarrollo productos web que convierten, con UI impecable y performance real.
          </h1>
          <p className="mt-3 text-pretty text-base text-white/70 sm:text-lg">
            Construyo experiencias rápidas y consistentes (Vite + React), con sistemas de diseño claros y
            entregables que impactan métricas.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#top-projects"
            className="inline-flex items-center justify-center rounded-full bg-(--accent) px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_55px_-24px_rgba(45,123,240,0.85)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Ver top projects
          </a>
          <a
            href="mailto:hola@tu-dominio.com"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/20 px-5 py-3 text-sm font-semibold text-white/85 transition hover:border-white/25 hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
          >
            Hablemos
          </a>
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs font-medium text-white/55">Especialidad</p>
          <p className="mt-1 text-sm font-semibold text-white/85">Front-end + Design Systems</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs font-medium text-white/55">Enfoque</p>
          <p className="mt-1 text-sm font-semibold text-white/85">Conversión, UX y performance</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs font-medium text-white/55">Stack</p>
          <p className="mt-1 text-sm font-semibold text-white/85">Vite · React · Tailwind</p>
        </div>
      </div>
    </div>
  )
}

