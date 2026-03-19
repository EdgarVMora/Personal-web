import AnimatedBackground from '../components/AnimatedBackground.jsx'
import IdentityCard from '../components/IdentityCard.jsx'
import PillNav from '../components/PillNav.jsx'
import Hero from '../components/sections/Hero.jsx'
import TopProjects from '../components/sections/TopProjects.jsx'
import SolutionsResults from '../components/sections/SolutionsResults.jsx'

export default function Home() {
  return (
    <div className="relative min-h-dvh text-(--text)">
      <AnimatedBackground />

      {/* Overlay for readability */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_700px_at_65%_10%,rgba(45,123,240,0.16),transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.72),rgba(0,0,0,0.9))]" />

      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-10">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,2.1fr)] lg:gap-10">
          <aside className="lg:sticky lg:top-6">
            <IdentityCard />
          </aside>

          <main className="min-w-0">
            <div className="sticky top-4 z-20 mb-6 sm:top-6">
              <PillNav />
            </div>

            <div className="space-y-10 sm:space-y-12">
              <section id="hero" className="scroll-mt-24">
                <Hero />
              </section>

              <section id="top-projects" className="scroll-mt-24">
                <TopProjects />
              </section>

              <section id="solutions-results" className="scroll-mt-24">
                <SolutionsResults />
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

