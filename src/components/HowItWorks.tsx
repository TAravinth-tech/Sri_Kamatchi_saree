import { Phone, Camera, Scale, BadgeIndianRupee } from 'lucide-react';
import { useReveal } from '@/lib/hooks';

const STEPS = [
  { icon: Phone, title: 'Contact Us', desc: 'Reach out via WhatsApp or a phone call to tell us about your sarees.' },
  { icon: Camera, title: 'Share Photos', desc: 'Share saree photos or book a free pickup at your convenience.' },
  { icon: Scale, title: 'Expert Valuation', desc: 'Our team visits your doorstep and gives a fair, transparent valuation.' },
  { icon: BadgeIndianRupee, title: 'Instant Cash', desc: 'Get paid immediately on the spot — no waiting, no delays.' },
];

export function HowItWorks() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden bg-silk-600 py-20 sm:py-28">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-gold-400 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-gold-400 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">Simple Process</span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">How It Works</h2>
          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400" />
            <span className="h-2 w-2 rotate-45 bg-gold-400" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400" />
          </div>
        </div>

        <div ref={ref} className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className={`relative text-center ${visible ? 'animate-fadeUp' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-gold-400 bg-silk-700 text-gold-300">
                <s.icon size={30} />
                <span className="absolute -top-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-gold-400 font-display text-sm font-bold text-silk-800">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-100">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="absolute left-[58%] top-10 hidden h-px w-[84%] bg-gradient-to-r from-gold-400/50 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
