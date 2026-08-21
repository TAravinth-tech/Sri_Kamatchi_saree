import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { ADDRESS_LINES, PHONE_INTL, TEL_URL, WHATSAPP_URL } from '@/lib/constants';
import { ZariDivider } from '@/components/ZariDivider';

export function Branch() {
  return (
    <section id="branch" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-600">Visit Our Branch</span>
          <h2 className="mt-3 text-3xl font-bold text-silk-800 sm:text-4xl">Our Branch</h2>
          <ZariDivider className="mt-5" />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Branch card */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-card">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-zari-gradient" />
            <div className="p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-silk-500 text-gold-300">
                  <MapPin size={22} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-silk-800">Madurai Branch</h3>
                  <span className="text-sm text-gold-600">New Sri Kamatchi Pattu Center</span>
                </div>
              </div>

              <div className="mt-6 space-y-1.5 text-charcoal-700">
                {ADDRESS_LINES.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={TEL_URL}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-gold-400 px-5 py-2.5 font-semibold text-gold-600 transition hover:bg-gold-50"
                >
                  <Phone size={16} />
                  {PHONE_INTL}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-whatsapp-green px-5 py-2.5 font-semibold text-white transition hover:bg-whatsapp-greenDark"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>

              <div className="mt-6 border-t border-cream-200 pt-4 text-sm text-charcoal-700">
                <span className="font-semibold text-silk-800">Hours:</span> Mon – Sat, 9:00 am – 9:30 pm
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-card">
            <iframe
              title="Madurai Branch Location"
              src="https://www.google.com/maps?q=Mela+Masi+Street,Madurai&output=embed"
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
