import { useEffect, useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL, TEL_URL } from '@/lib/constants';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Branches', href: '#branch' },
  { label: 'Contact', href: '#contact' },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-silk-500 ring-2 ring-gold-400">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className="text-gold-200">
          <path d="M13 2c4 3 6 6 6 10 0 4-3 7-6 7s-6-3-6-7c0-4 2-7 6-10Z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M13 2c-1 4-1 8 0 12 1 4 1 5 0 5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M4 22h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold text-silk-700">New Sri Kamatchi</span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600">Pattu Center</span>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-soft' : ''
      }`}
    >
      <div className={`h-0.5 bg-zari-gradient transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-charcoal-700 transition hover:text-silk-600 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={TEL_URL}
            className="hidden items-center gap-1.5 rounded-full border-2 border-gold-400 px-4 py-2 text-sm font-semibold text-gold-600 transition hover:bg-gold-50 sm:flex"
          >
            <Phone size={15} />
            Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-whatsapp-green px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-whatsapp-greenDark"
          >
            <MessageCircle size={15} />
            <span className="hidden xs:inline sm:inline">WhatsApp</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-silk-600 transition hover:bg-cream-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-cream-200 bg-white transition-all duration-300 lg:hidden ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-2">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-cream-200 py-3 font-medium text-charcoal-700 transition hover:text-silk-600"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
