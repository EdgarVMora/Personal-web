const items = [
  {
    title: 'Optimización de performance',
    problem: 'La página cargaba lenta y perdía usuarios en mobile.',
    solution: 'Auditoría, split de bundle, imágenes optimizadas y CSS crítico.',
    result: 'LCP < 2s y +12% conversión en páginas clave.',
  },
  {
    title: 'Sistema de componentes',
    problem: 'UI inconsistente y cambios caros de mantener.',
    solution: 'Design tokens, componentes base y documentación mínima.',
    result: '-30% tiempo de implementación y menos bugs visuales.',
  },
  {
    title: 'Mejoras de UX en funnels',
    problem: 'Drop-off alto en pasos de registro/checkout.',
    solution: 'Microcopy, jerarquía visual y validación progresiva.',
    result: '+18% completitud del flujo y menos tickets.',
  },
  {
    title: 'Manejo de angetes con IA',
    problem: 'Dificultad para manejar los estados de los agentes con React.',
    solution: 'Uso de Context API y Redux para manejar los estados de los agentes.',
    result: 'Los agentes se pueden manejar de forma más sencilla y eficiente.',
  }
]

export default function SolutionsResults() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-white">Solutions & Results</h2>
        <p className="mt-1 text-sm text-white/65">
          Cómo convierto problemas en soluciones concretas y resultados medibles.
        </p>
      </div>

      <div className="grid gap-4">
        {items.map((x) => (
          <div
            key={x.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <p className="text-base font-semibold text-white/90">{x.title}</p>
              <span className="w-fit rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/70">
                Caso real
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-medium text-white/55">Problema</p>
                <p className="mt-1 text-sm text-white/75">{x.problem}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-medium text-white/55">Solución</p>
                <p className="mt-1 text-sm text-white/75">{x.solution}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-medium text-white/55">Resultado</p>
                <p className="mt-1 text-sm text-white/75">{x.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

