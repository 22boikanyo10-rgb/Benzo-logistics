export default function ContactPage() {
  return (
    <div className="container-shell py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68A3F]">Contact</p>
        <h1 className="section-title mt-4">Let’s plan your next move with confidence.</h1>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-navy p-8 text-white shadow-luxury">
          <h2 className="text-3xl font-bold">Get in touch</h2>

          <div className="mt-8 space-y-6 text-slate-200">
            <p>Email: <a href="mailto:georgechewe225@gmail.com" className="font-semibold text-[#D4AF6D]">georgechewe225@gmail.com</a></p>
            <p>Phone: <span className="font-semibold text-[#D4AF6D]">+27 00 000 0000</span></p>
            <p>Location: <span className="font-semibold text-[#D4AF6D]">Johannesburg, South Africa</span></p>
            <p>Business hours: <span className="font-semibold text-[#D4AF6D]">Mon – Sat, 8:00 – 18:00</span></p>
          </div>
        </div>

        <form className="soft-card p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Full name
              <input type="text" placeholder="Your name" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-navy focus:outline-none" />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Email
              <input type="email" placeholder="you@example.com" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-navy focus:outline-none" />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-medium text-slate-700">
            Message
            <textarea rows={6} placeholder="Tell us what you need help with..." className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-navy focus:outline-none" />
          </label>

          <button type="submit" className="mt-6 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">Send message</button>
        </form>
      </div>
    </div>
  );
}
