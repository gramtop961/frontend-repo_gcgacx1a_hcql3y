import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0E13]">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} BlueStone Constructors. All rights reserved.</p>
          <div className="text-white/60 text-sm">Built with pride and precision.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
