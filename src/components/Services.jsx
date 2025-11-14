import { Wrench, Building2, Ruler, Factory } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "General Contracting",
    desc: "Full-service project management from groundbreaking to handover with transparent timelines and budgets.",
  },
  {
    icon: Factory,
    title: "Commercial Builds",
    desc: "Modern offices, retail spaces, and industrial facilities engineered for performance and scale.",
  },
  {
    icon: Ruler,
    title: "Design & Build",
    desc: "Integrated design and construction that reduces risk and accelerates delivery.",
  },
  {
    icon: Wrench,
    title: "Renovations",
    desc: "High-quality remodels and additions that elevate form, function, and value.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0B0E13] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What we build</h2>
          <p className="text-white/60 max-w-md hidden md:block">
            A specialized team delivering end-to-end construction solutions across sectors.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 hover:from-white/10 transition">
              <div className="h-12 w-12 rounded-lg bg-amber-400/10 text-amber-300 flex items-center justify-center">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <button className="mt-4 text-amber-300 text-sm">Learn more →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
