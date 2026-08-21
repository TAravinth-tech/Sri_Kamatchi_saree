import { Phone, Mail, Facebook, Instagram, Youtube, MapPin } from 'lucide-react';
import { PHONE, PHONE_INTL, EMAIL, TEL_URL, MAILTO_URL } from '@/lib/constants';

export function UtilityBar() {
  return (
    <div className="bg-silk-700 text-cream-100 text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-1.5">
          <MapPin size={13} className="text-gold-400" />
          <span className="font-medium tracking-wide">Madurai</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={TEL_URL} className="hidden items-center gap-1.5 transition hover:text-gold-300 sm:flex">
            <Phone size={13} className="text-gold-400" />
            <span>{PHONE_INTL}</span>
          </a>
          <a href={MAILTO_URL} className="hidden items-center gap-1.5 transition hover:text-gold-300 md:flex">
            <Mail size={13} className="text-gold-400" />
            <span>{EMAIL}</span>
          </a>
          <div className="flex items-center gap-2.5">
            <a href="#" aria-label="Facebook" className="text-cream-200 transition hover:text-gold-300">
              <Facebook size={14} />
            </a>
            <a href="#" aria-label="Instagram" className="text-cream-200 transition hover:text-gold-300">
              <Instagram size={14} />
            </a>
            <a href="#" aria-label="YouTube" className="text-cream-200 transition hover:text-gold-300">
              <Youtube size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
