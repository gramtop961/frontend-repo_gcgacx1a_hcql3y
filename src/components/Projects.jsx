const projects = [
  {
    title: "Riverside Corporate HQ",
    image: "https://images.unsplash.com/photo-1694548661294-ee5b5bcc29ce?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSaXZlcnNpZGUlMjBDb3Jwb3JhdGUlMjBIUXxlbnwwfDB8fHwxNzYzMDkwNDk4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    tag: "Commercial",
  },
  {
    title: "Vista Retail Center",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop",
    tag: "Retail",
  },
  {
    title: "Summit Apartments",
    image: "https://images.unsplash.com/photo-1595388709994-5a9d45fe1dab?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdW1taXQlMjBBcGFydG1lbnRzfGVufDB8MHx8fDE3NjMwOTA0OTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    tag: "Residential",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0B0E13] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Recent work</h2>
          <p className="text-white/60 max-w-md hidden md:block">
            Selected projects that showcase our craftsmanship and attention to detail.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs text-white/80 ring-1 ring-white/10">
                  {p.tag}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-medium">{p.title}</h3>
                <p className="text-white/60 text-sm mt-1">Delivered on-time and on-budget with strict quality control.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
