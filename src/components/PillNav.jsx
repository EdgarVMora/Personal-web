const PROFILE_SRC = '/profile.webp'

const navItems = [
  { href: '#hero', label: 'Inicio' },
  { href: '#top-projects', label: 'Proyectos' },
  { href: '#solutions-results', label: 'Resultados' },
]

export default function PillNav() {
  return (
    <div className="flex w-full justify-start">
      <div className="inline-flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur shadow-[0_16px_50px_-30px_rgba(0,0,0,0.8)] sm:w-auto sm:gap-4 sm:px-4">
        <a href="#hero" className="flex items-center gap-2 rounded-full px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)">
          <span className="relative h-7 w-7 overflow-hidden rounded-full ring-1 ring-white/10">
            <img src={PROFILE_SRC} alt="Mini perfil" className="h-full w-full object-cover" loading="lazy" />
          </span>
          <span className="hidden text-sm font-medium text-white/85 sm:inline">Tu Nombre</span>
        </a>

        <div className="h-6 w-px bg-white/10" />

        <nav className="flex items-center gap-1 sm:gap-1.5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-white/75 transition hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

