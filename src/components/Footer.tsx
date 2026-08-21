


import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { ADDRESS_LINES, PHONE_INTL, EMAIL, TEL_URL, MAILTO_URL } from '@/lib/constants';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Branches', href: '#branch' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = ['Doorstep Buying', 'Free Pickup', 'Expert Valuation', 'Instant Cash Payment'];

export function Footer() {
  return (
    <footer className="relative bg-[#F23C48] text-white">
      {/* Zari-inspired border trim */}
      <div
        aria-hidden="true"
        className="h-2 w-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #D4AF37 0px, #D4AF37 7px, #F2D896 7px, #F2D896 14px)',
        }}
      />

      {/* Faint watermark motif */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]">
        <svg
          className="absolute -right-16 -top-10 h-72 w-72 text-gold-300"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M100 10c40 30 60 60 60 95 0 40-30 70-60 70s-60-30-60-70c0-35 20-65 60-95Z"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white ring-2 ring-gold-400">
                <svg width="22" height="22" viewBox="0 0 26 26" fill="none" className="text-gold-500">
                  <path d="M13 2c4 3 6 6 6 10 0 4-3 7-6 7s-6-3-6-7c0-4 2-7 6-10Z" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M4 22h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
              <span className="font-display text-base font-bold tracking-wide text-white">
                New Sri Kamatchi Pattu Center
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Turning old silk into instant cash with trust, transparency, and four decades of heritage.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="YouTube"
                className="grid h-9 w-9 place-items-center rounded-full border border-gold-400/60 text-gold-300 transition hover:bg-gold-400 hover:text-[#F23C48]"
              >
                <Youtube size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-gold-400/60 text-gold-300 transition hover:bg-gold-400 hover:text-[#F23C48]"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-gold-400/60 text-gold-300 transition hover:bg-gold-400 hover:text-[#F23C48]"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-300">
              Quick Links
            </h4>
            <span className="mt-2 block h-px w-8 bg-gold-400/60" />
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/80 transition hover:text-gold-300"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-gold-400/0 transition group-hover:bg-gold-400" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-300">
              Services
            </h4>
            <span className="mt-2 block h-px w-8 bg-gold-400/60" />
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s} className="flex items-center gap-1.5 text-sm text-white/80">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-300">
              Reach Us
            </h4>
            <span className="mt-2 block h-px w-8 bg-gold-400/60" />
            <ul className="mt-4 space-y-3">
              <li className="flex gap-2.5 text-sm text-white/80">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-300" />
                <span>{ADDRESS_LINES.join(', ')}</span>
              </li>
              <li>
                <a href={TEL_URL} className="flex items-center gap-2.5 text-sm text-white/80 transition hover:text-gold-300">
                  <Phone size={16} className="shrink-0 text-gold-300" /> {PHONE_INTL}
                </a>
              </li>
              <li>
                <a href={MAILTO_URL} className="flex items-center gap-2.5 break-all text-sm text-white/80 transition hover:text-gold-300">
                  <Mail size={16} className="shrink-0 text-gold-300" /> {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-gold-400/25 bg-black/15 py-4">
        <p className="flex items-center justify-center gap-2.5 text-center text-xs text-white/70">
          <span className="h-1 w-1 rotate-45 bg-gold-400/70" />
          © 2026 New Sri Kamatchi Pattu Center. All rights reserved.
          <span className="h-1 w-1 rotate-45 bg-gold-400/70" />
        </p>
      </div>
    </footer>
  );
}
