import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-amber-400 to-yellow-600 shadow-lg" />
            <span className="text-white font-semibold tracking-wide">BlueStone Constructors</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
            <a href="#projects" className="text-white/80 hover:text-white transition">Projects</a>
            <a href="#about" className="text-white/80 hover:text-white transition">About</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-amber-500/90 hover:bg-amber-400 text-black font-medium px-4 py-2 transition">
              <Phone className="h-4 w-4" /> Get a Quote
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm">
              <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
              <a href="#projects" className="text-white/80 hover:text-white transition">Projects</a>
              <a href="#about" className="text-white/80 hover:text-white transition">About</a>
              <a href="#contact" className="text-white/80 hover:text-white transition flex items-center gap-2"><Mail className="h-4 w-4"/> Contact</a>
              <a href="#contact" className="inline-flex justify-center items-center gap-2 rounded-md bg-amber-500/90 hover:bg-amber-400 text-black font-medium px-4 py-2 transition mt-2">
                <Phone className="h-4 w-4" /> Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
