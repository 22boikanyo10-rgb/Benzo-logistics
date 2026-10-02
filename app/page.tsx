const services = [
  {
    title: 'Executive Transport',
    description: 'Premium, punctual movement for business leaders, diplomats, and VIP clients.',
  },
  {
    title: 'Corporate Relocation',
    description: 'Effortless transitions for teams and individuals moving across cities and countries.',
  },
  {
    title: 'Event Logistics',
    description: 'Seamless coordination for weddings, conferences, launches, and luxury experiences.',
  },
  {
    title: 'Cargo & Secure Delivery',
    description: 'Carefully managed movement of important goods with dedicated handling and monitoring.',
  },
];

const stats = [
  { value: '2.5k+', label: 'Deliveries completed' },
  { value: '24/7', label: 'Support coverage' },
  { value: '98%', label: 'Client retention' },
  { value: '12+', label: 'Years of service' },
];

const testimonials = [
  {
    quote:
      'Benzo Logistics elevated the experience for our executive travel and relocation planning. Everything was smooth, secure, and beautifully managed.',
    author: 'Maya Ndlovu',
    role: 'Operations Director, NovaWorks',
  },
  {
    quote:
      'Their team is attentive, responsive, and reliable. We trust them with both time-sensitive deliveries and high-value client transfers.',
    author: 'Daniel K.',
    role: 'Founder, Alder Group',
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#F8F6F2]">
        <div className="hero-glow absolute inset-0" />
        <div className="container-shell relative grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#D4AF6D]/40 bg-[#D4AF6D]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-navy">
              Luxury Logistics
            </p>
            <h1 className="max-w-xl text-5xl font-black tracking-tight text-navy md:text-6xl">
              Moving your business with precision and prestige.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-600">
              Benzo Logistics delivers trusted transport, secure delivery, and executive-grade support for clients who value speed, discretion, and excellence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/booking" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#153861]">
                Book a Service
              </a>
              <a href="/tracking" className="rounded-full border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy hover:bg-slate-50">
                Track Shipment
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-500">
              <span>Airport transfers</span>
              <span>Corporate delivery</span>
              <span>VIP logistics</span>
            </div>
          </div>

          <div className="relative">
            <div className="soft-card overflow-hidden p-3">
              <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#0B1F3A,#1B3B68,#D4AF6D)] p-8 text-white">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-white/80">
                  <span>Fleet Status</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Live</span>
                </div>

                <div className="mt-10 space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/70">Current dispatch</p>
                    <h2 className="mt-3 text-3xl font-bold">Johannesburg to Cape Town</h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/70">ETA</p>
                      <p className="mt-2 text-2xl font-bold">08:30</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/70">Status</p>
                      <p className="mt-2 text-xl font-bold">In transit</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/70">Priority</p>
                      <p className="mt-2 text-xl font-bold">High</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="soft-card p-8 text-center">
                <p className="text-4xl font-black text-navy">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-shell">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF6D]">Why Benzo</p>
            <h2 className="section-title mt-4 text-white">Smarter routing. Safer handling. Better outcomes.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-3xl font-black text-[#D4AF6D]">01</p>
              <h3 className="mt-4 text-2xl font-bold">Precision planning</h3>
              <p className="mt-3 text-slate-300">
                Our schedules are built around timing, route optimisation, and client priorities to reduce disruption.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-3xl font-black text-[#D4AF6D]">02</p>
              <h3 className="mt-4 text-2xl font-bold">Discreet service</h3>
              <p className="mt-3 text-slate-300">
                We handle sensitive cargo and executive travel with confidentiality, care, and professionalism.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-3xl font-black text-[#D4AF6D]">03</p>
              <h3 className="mt-4 text-2xl font-bold">Full visibility</h3>
              <p className="mt-3 text-slate-300">
                Clients stay informed with transparent communication, reliable updates, and real-time tracking support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68A3F]">Services</p>
              <h2 className="section-title mt-4">Tailored logistics for every client and journey.</h2>
            </div>
            <a href="/services" className="hidden rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy md:inline-flex">
              Explore all services
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="soft-card p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF6D]/15 text-xl text-navy">
                  •
                </div>
                <h3 className="text-2xl font-bold text-navy">{service.title}</h3>
                <p className="mt-4 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3EFE9] py-20">
        <div className="container-shell">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68A3F]">Client feedback</p>
            <h2 className="section-title mt-4">Trusted by professionals and businesses who expect excellence.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.author} className="soft-card p-8">
                <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
                <div className="mt-8 border-t border-slate-200 pt-4">
                  <p className="font-bold text-navy">{item.author}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-navy p-10 text-white md:p-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF6D]">Ready to move?</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight">Book your next premium logistics experience.</h2>
              </div>
              <a href="/booking" className="inline-flex rounded-full bg-[#D4AF6D] px-7 py-3 text-sm font-bold text-navy transition hover:bg-[#e7c57c]">
                Request a quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
