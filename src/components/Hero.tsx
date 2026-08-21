import { useEffect, useState } from 'react';
import { Phone, MessageCircle, Truck, BadgeIndianRupee, Scale, Award } from 'lucide-react';
import { WHATSAPP_URL, TEL_URL, IMAGES } from '@/lib/constants';

const SLIDES = [IMAGES.heroSilk, IMAGES.heroSilk2, IMAGES.heroSilk3];

const BADGES = [
  { icon: Award, label: '40+ Years' },
  { icon: Truck, label: 'Doorstep Pickup' },
  { icon: BadgeIndianRupee, label: 'Instant Cash' },
  { icon: Scale, label: 'Fair Valuation' },
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative">
      {/* Banner */}
      <div className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={src} alt="Silk saree" className="h-full w-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-silk-950/75 via-silk-800/55 to-silk-950/80" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <span className="mb-5 inline-flex animate-fadeUp items-center gap-2 rounded-full border border-gold-400/70 bg-gold-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300 backdrop-blur-sm">
            Trusted Since Decades
          </span>
          <h1 className="animate-fadeUp text-shadow-silk max-w-4xl text-4xl font-bold leading-[1.15] text-white sm:text-5xl md:text-6xl" style={{ animationDelay: '0.1s' }}>
            Sell Your Pre-Loved Silk Sarees for the Best Price
          </h1>
          <p className="font-tamil mt-6 max-w-2xl animate-fadeUp text-xl font-medium text-gold-300 sm:text-2xl md:text-3xl" style={{ animationDelay: '0.2s' }}>
            பழைய பட்டு குப்பை அல்ல. அது காசு தரும் பொக்கிஷம்.
          </p>
          <p className="mt-4 max-w-xl animate-fadeUp text-sm text-cream-100 sm:text-base" style={{ animationDelay: '0.3s' }}>
            Free doorstep pickup • Instant cash • Fair, transparent valuation
          </p>

          <div className="mt-8 flex animate-fadeUp flex-col gap-3 sm:flex-row" style={{ animationDelay: '0.4s' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-whatsapp-green px-7 py-3.5 font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:bg-whatsapp-greenDark"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <a
              href={TEL_URL}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-gold-400 bg-white/10 px-7 py-3.5 font-semibold text-gold-300 backdrop-blur-sm transition hover:bg-gold-400 hover:text-silk-800"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Slide dots */}
          <div className="absolute bottom-32 flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-6 bg-gold-400' : 'w-1.5 bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative z-10 -mt-12">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white px-6 py-5 shadow-card">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-silk-100 text-silk-600">
                  <Icon size={20} />
                </span>
                <span className="text-sm font-semibold text-silk-800">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
