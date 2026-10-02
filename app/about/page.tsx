export default function AboutPage() {
  return (
    <div className="container-shell py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68A3F]">Our story</p>
        <h1 className="section-title mt-4">Built on trust, discipline, and service that feels personal.</h1>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="soft-card p-8 md:p-10">
          <p className="text-lg leading-8 text-slate-700">
            Benzo Logistics began with a simple mission: to deliver a more refined and dependable logistics experience for clients who value both speed and professionalism. In a world where service is often rushed, we chose a different standard—clear communication, secure handling, and attentive support from start to finish.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            From executive transport to business relocations and high-value deliveries, we help clients move with confidence. Our process blends operational precision with thoughtful customer care so every journey feels seamless, polished, and stress-free.
          </p>
        </div>

        <div className="rounded-[2rem] bg-navy p-8 text-white shadow-luxury">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF6D]">What drives us</p>
          <ul className="mt-8 space-y-5 text-slate-200">
            <li>• Reliability in every route and every handoff</li>
            <li>• Discretion for executives, businesses, and VIP clients</li>
            <li>• Integrity in our communication and service standards</li>
            <li>• Consistency that turns one-time clients into long-term partners</li>
          </ul>
        </div>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        <div className="soft-card p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68A3F]">Mission</p>
          <h3 className="mt-4 text-2xl font-bold text-navy">To deliver premium logistics with discretion and precision.</h3>
        </div>
        <div className="soft-card p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68A3F]">Vision</p>
          <h3 className="mt-4 text-2xl font-bold text-navy">To become the trusted partner for premium transport and relocation.</h3>
        </div>
        <div className="soft-card p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68A3F]">Values</p>
          <h3 className="mt-4 text-2xl font-bold text-navy">Integrity, punctuality, respect, accountability, and care.</h3>
        </div>
      </div>
    </div>
  );
}
