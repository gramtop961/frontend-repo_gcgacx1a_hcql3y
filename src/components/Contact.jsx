import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Mock submit for demo
      await new Promise(r => setTimeout(r, 800))
      setStatus('Thanks! We will reach out shortly.')
    } catch {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative bg-[#0B0E13] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Let’s build together</h2>
            <p className="mt-4 text-white/70 max-w-prose">
              Tell us about your project and we’ll craft a tailored plan with clear timelines and costs.
            </p>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>• Licensed, bonded, and insured</li>
              <li>• Dedicated project managers</li>
              <li>• Transparent reporting and communication</li>
            </ul>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input required className="mt-1 w-full rounded-md bg-black/30 text-white border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md bg-black/30 text-white border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Project details</label>
                <textarea rows="4" required className="mt-1 w-full rounded-md bg-black/30 text-white border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button className="rounded-md bg-amber-400 hover:bg-amber-300 text-black font-medium px-5 py-3 transition">Request a quote</button>
              <span className="text-sm text-white/70">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
