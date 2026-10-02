import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#0B1F3A] text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-black uppercase tracking-[0.2em] text-[#D4AF6D]">Benzo</p>
          <p className="mt-4 max-w-xs text-slate-300">
            Premium logistics and transport solutions for executives, businesses, and high-value deliveries.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF6D]">Explore</p>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/tracking">Tracking</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF6D]">Contact</p>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li><a href="mailto:georgechewe225@gmail.com">georgechewe225@gmail.com</a></li>
            <li>Johannesburg, South Africa</li>
            <li>Mon – Sat / 08:00 – 18:00</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
