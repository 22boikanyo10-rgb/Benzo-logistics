import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/booking', label: 'Booking' },
  { href: '/tracking', label: 'Tracking' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-lg font-black text-[#D4AF6D]">
            B
          </div>
          <div>
            <p className="text-lg font-black uppercase tracking-[0.2em] text-navy">Benzo</p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Logistics</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>

        <a href="/booking" className="rounded-full bg-[#D4AF6D] px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-[#e1bb71]">
          Book now
        </a>
      </div>
    </header>
  );
}
