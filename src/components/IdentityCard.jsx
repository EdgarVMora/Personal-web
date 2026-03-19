const PROFILE_SRC = '/profile.webp'

const links = [
  { label: 'Email', value: 'hola@tu-dominio.com', href: 'mailto:hola@tu-dominio.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/tuusuario', href: 'https://linkedin.com' },
  { label: 'GitHub', value: 'github.com/tuusuario', href: 'https://github.com' },
]

export default function IdentityCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)] backdrop-blur">
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10">
          <img
            src={PROFILE_SRC}
            alt="Foto de perfil"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="min-w-0">
          <p className="truncate text-lg font-semibold tracking-tight text-white">Tu Nombre</p>
          <p className="truncate text-sm text-white/70">Frontend Engineer · UI/UX · Vite + React</p>
          <p className="mt-1 text-xs text-white/55">Disponible para proyectos · Remoto</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-white/20 hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <span className="text-sm font-medium text-white/85">{item.label}</span>
            <span className="truncate text-sm text-white/60 transition group-hover:text-white/75">
              {item.value}
            </span>
          </a>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-transparent p-4">
        <p className="text-sm text-white/80">
          Construyo interfaces rápidas y limpias enfocadas en conversión, con componentes reutilizables y
          motion sutil.
        </p>
      </div>
    </div>
  )
}

