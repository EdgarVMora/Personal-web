import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function AnimatedBackground() {
  const mainRingRef = useRef(null)
  const secondaryRingRef = useRef(null)

  useEffect(() => {
    if (!mainRingRef.current || !secondaryRingRef.current) return

    const ctx = gsap.context(() => {
      // Inclinación inicial para efecto 3D (el ring rota solo sobre su eje Y)
      gsap.set(mainRingRef.current, { rotationX: 68, rotationZ: -18, transformStyle: 'preserve-3d' })
      gsap.set(secondaryRingRef.current, { rotationX: 68, rotationZ: 22, transformStyle: 'preserve-3d' })

      // Rotación 3D muy lenta del anillo principal
      gsap.to(mainRingRef.current, {
        rotationY: 360,
        transformOrigin: '50% 50%',
        duration: 55,
        ease: 'none',
        repeat: -1,
      })

      // Flotación suave del anillo principal
      gsap.to(mainRingRef.current, {
        yPercent: -4,
        duration: 32,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })

      // Rotación y flotación del anillo secundario
      gsap.to(secondaryRingRef.current, {
        rotationY: -360,
        transformOrigin: '50% 50%',
        duration: 48,
        ease: 'none',
        repeat: -1,
      })

      gsap.to(secondaryRingRef.current, {
        yPercent: 5,
        duration: 40,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-[#070A0F] perspective-[1400px]">
      <div className="pointer-events-none absolute inset-0">
        {/* Halo principal centrado suavemente detrás del anillo */}
        <div className="absolute left-[62%] top-[18%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(45,123,240,0.22),transparent_65%)] blur-3xl opacity-80" />

        {/* Anillo principal, centrado visualmente */}
        <div
          ref={mainRingRef}
          className="absolute left-[62%] top-[20%] h-[420px] w-[420px] -translate-x-1/2"
        >
          <div className="orbit-ring orbit-ring-main" />
        </div>

        {/* Anillo secundario, parte inferior izquierda */}
        <div
          ref={secondaryRingRef}
          className="absolute left-[18%] bottom-[-10%] h-[380px] w-[380px]"
        >
          <div className="orbit-ring orbit-ring-secondary" />
        </div>
      </div>
    </div>
  )
}
