const serviceList = [
  {
    title: 'Executive Transport',
    blurb: 'Discreet, reliable transport for executives, VIPs, and private appointments.',
  },
  {
    title: 'Corporate Relocation',
    blurb: 'Smooth transitions for teams and individuals moving across cities or countries.',
  },
  {
    title: 'Event Logistics',
    blurb: 'Full-service coordination for weddings, corporate events, launches, and private gatherings.',
  },
  {
    title: 'Cargo & Goods Delivery',
    blurb: 'Secure transport for sensitive, high-value, or time-critical goods.',
  },
  {
    title: 'Airport Transfers',
    blurb: 'Luxury pickup and drop-off arrangements with punctual arrival planning.',
  },
  {
    title: 'Custom Routing & Scheduling',
    blurb: 'Flexible delivery and scheduling plans tailored to your operational needs.',
  },
];

export default function ServicesPage() {
  return (
    <div className="container-shell py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68A3F]">Our services</p>
        <h1 className="section-title mt-4">Premium logistics designed for the pace of modern business.</h1>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {serviceList.map((service) => (
          <div key={service.title} className="soft-card p-8">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF6D]/15 text-xl text-navy">✦</div>
            <h2 className="text-2xl font-bold text-navy">{service.title}</h2>
            <p className="mt-4 text-slate-600">{service.blurb}</p>
            <a href="/booking" className="mt-6 inline-flex text-sm font-semibold text-navy underline underline-offset-4">
              Book this service
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
