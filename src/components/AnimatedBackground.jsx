import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function AnimatedBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <div className="fixed inset-0 -z-20">
      <Particles
        id="bg-particles"
        init={particlesInit}
        options={{
          background: { color: { value: '#070A0F' } },
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 90, duration: 0.25 } },
          },
          particles: {
            color: { value: ['#D1D5DB', '#2D7BF0'] },
            links: {
              color: '#94A3B8',
              distance: 130,
              enable: true,
              opacity: 0.22,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'out' },
              random: false,
              speed: 0.6,
              straight: false,
            },
            number: { density: { enable: true, area: 900 }, value: 55 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="h-full w-full"
      />
    </div>
  )
}

