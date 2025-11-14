import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-[#0B0E13] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Trusted commercial & residential builders
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Building tomorrow's spaces with precision and integrity
          </h1>
          <p className="mt-6 text-white/70 max-w-xl">
            We deliver high-quality construction, remodeling, and infrastructure projects for clients who value craftsmanship, safety, and on-time delivery.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center rounded-md bg-amber-400 hover:bg-amber-300 text-black font-medium px-5 py-3 transition">
              Get a fast quote
            </a>
            <a href="#projects" className="inline-flex justify-center items-center rounded-md bg-white/10 hover:bg-white/15 text-white font-medium px-5 py-3 transition ring-1 ring-white/15">
              View recent projects
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70">
            <Stat kpi="250+" label="Projects delivered" />
            <Stat kpi="15yr" label="Industry experience" />
            <Stat kpi="98%" label="On-time completion" />
            <Stat kpi="A+" label="Safety record" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ kpi, label }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-white">{kpi}</div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  )
}
