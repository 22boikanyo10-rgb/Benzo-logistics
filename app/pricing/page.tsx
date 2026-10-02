const pricingPlans = [
  {
    name: 'Essential',
    price: 'From R1,250',
    description: 'Ideal for local and short-distance logistics needs.',
    features: ['Local route planning', 'On-time dispatch', 'Basic support updates'],
  },
  {
    name: 'Executive',
    price: 'From R2,900',
    description: 'For VIP transport and premium business scheduling.',
    features: ['Priority scheduling', 'Dedicated coordination', 'Real-time communication', 'Luxury vehicle support'],
    featured: true,
  },
  {
    name: 'Corporate',
    price: 'Custom',
    description: 'Flexible plans for businesses managing ongoing logistics needs.',
    features: ['Custom route planning', 'Team move coordination', 'Contract-based pricing', 'Dedicated account support'],
  },
];

export default function PricingPage() {
  return (
    <div className="container-shell py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B68A3F]">Pricing</p>
        <h1 className="section-title mt-4">Straightforward packages built around your schedule and service level.</h1>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-[2rem] p-8 shadow-luxury ${
              plan.featured ? 'bg-navy text-white' : 'soft-card bg-white'
            }`}
          >
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${plan.featured ? 'text-[#D4AF6D]' : 'text-[#B68A3F]'}`}>
              {plan.name}
            </p>
            <p className={`mt-6 text-4xl font-black ${plan.featured ? 'text-white' : 'text-navy'}`}>{plan.price}</p>
            <p className={`mt-4 ${plan.featured ? 'text-slate-200' : 'text-slate-600'}`}>{plan.description}</p>

            <ul className={`mt-8 space-y-3 ${plan.featured ? 'text-slate-200' : 'text-slate-700'}`}>
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>

            <a
              href="/booking"
              className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold ${
                plan.featured ? 'bg-[#D4AF6D] text-navy' : 'bg-navy text-white'
              }`}
            >
              Request quote
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
