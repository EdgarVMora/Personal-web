const projects = [
  {
    title: 'Landing con foco en conversión',
    impact: '+28% CTR · -35% tiempo de carga',
    stack: ['React', 'Tailwind', 'Vite'],
    href: '#',
  },
  {
    title: 'Dashboard operativo',
    impact: '-42% tiempo por tarea · UX más clara',
    stack: ['Design System', 'Charts', 'A11y'],
    href: '#',
  },
  {
    title: 'E-commerce performance',
    impact: 'LCP < 2.0s · +12% revenue',
    stack: ['Perf', 'SEO', 'Analytics'],
    href: '#',
  },
]

export default function TopProjects() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">Top Projects</h2>
          <p className="mt-1 text-sm text-white/65">
            Selección corta con foco en impacto medible, diseño claro y ejecución rápida.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/25 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
        >
          Ver portafolio completo
          <span className="text-white/50">→</span>
        </a>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-base font-semibold text-white/90">{p.title}</p>
                <p className="mt-1 text-sm text-white/65">{p.impact}</p>
              </div>
              <span className="mt-0.5 rounded-full border border-white/10 bg-black/20 px-2 py-1 text-xs font-medium text-white/70 transition group-hover:border-white/20">
                Case
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs font-medium text-white/65"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-semibold text-white/75">Ver detalles</span>
              <span className="text-white/45 transition group-hover:text-(--accent)">↗</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

