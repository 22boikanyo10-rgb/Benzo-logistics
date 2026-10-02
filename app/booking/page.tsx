export default function Booking(){
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-5xl font-black text-slate-900">Book a service</h1>

      <div className="mt-6 rounded-3xl border border-gold/30 bg-gold/10 p-5 text-lg text-slate-700">
        <p>
          For bookings and enquiries, email us directly:
          <a
            href="mailto:georgechewe225@gmail.com"
            className="ml-2 font-semibold text-navy underline underline-offset-4"
          >
            georgechewe225@gmail.com
          </a>
        </p>
      </div>

      <form className="mt-10 grid gap-5 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Full name
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Email address
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Service required
          <input
            type="text"
            placeholder="Executive transport, relocation, event logistics..."
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Trip details
          <textarea
            rows={5}
            placeholder="Tell us about your destination, dates, cargo, or special requirements..."
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-navy focus:bg-white"
          />
        </label>

        <button
          type="submit"
          className="inline-flex w-fit items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy/90"
        >
          Send booking request
        </button>
      </form>
    </div>
  );
}
