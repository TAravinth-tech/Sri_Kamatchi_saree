import { useState, useEffect } from 'react';
import { Check, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES, WHATSAPP_URL } from '@/lib/constants';
import { useReveal } from '@/lib/hooks';

const REASONS = [
  'Decades of Experience',
  'Transparent Process',
  'Fair Market Prices',
  'Doorstep Service Across Tamil Nadu',
];

const TESTIMONIALS = [
  { name: 'Lakshmi R.', area: 'Anna Nagar, Madurai', quote: 'They came home the same day, valued my mother\'s old Kanchipuram sarees fairly, and paid cash instantly. Very respectful and honest people.' },
  { name: 'Saravanan K.', area: 'Tirunelveli', quote: 'Excellent service. I sold three old silk dhotis and got a much better price than I expected. The pickup was completely free.' },
  { name: 'Revathi M.', area: 'T. Nagar, Chennai', quote: 'I was hesitant to sell my wedding saree, but their team explained the valuation clearly. Trustworthy and professional throughout.' },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

export function WhyChooseUs() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [tIdx, setTIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl rounded-bl-[80px] shadow-card ring-1 ring-gold-200">
              <img src={IMAGES.whyChoose} alt="Luxurious silk fabric with traditional jewelry" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -right-3 -bottom-3 h-20 w-20 rounded-br-3xl border-b-2 border-r-2 border-gold-400" />
          </div>

          {/* Text */}
          <div className={`order-1 lg:order-2 ${visible ? 'animate-fadeUp' : 'opacity-0'}`}>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-600">Why Choose Us</span>
            <h2 className="mt-3 text-3xl font-bold text-silk-800 sm:text-4xl">A Trusted Partner in Saree Selling</h2>
            <ul className="mt-7 space-y-3.5">
              {REASONS.map((r) => (
                <li key={r} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-silk-100 text-silk-600">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="font-medium text-charcoal-700">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 rounded-2xl bg-white p-8 shadow-card sm:p-10">
          <div className="text-center">
            <Quote size={32} className="mx-auto text-gold-400" />
            <div className="relative mx-auto mt-4 min-h-[140px] max-w-3xl">
              {TESTIMONIALS.map((item, i) => (
                <div
                  key={item.name}
                  className={`absolute inset-0 transition-all duration-500 ${
                    i === tIdx ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                >
                  <p className="font-display text-lg italic text-charcoal-700 sm:text-xl">"{item.quote}"</p>
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <Stars />
                    <span className="font-semibold text-silk-800">{item.name}</span>
                    <span className="text-sm text-gold-600">• {item.area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setTIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="grid h-9 w-9 place-items-center rounded-full border border-gold-300 text-gold-600 transition hover:bg-gold-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTIdx(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === tIdx ? 'w-6 bg-silk-500' : 'w-2 bg-gold-200'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setTIdx((i) => (i + 1) % TESTIMONIALS.length)}
              className="grid h-9 w-9 place-items-center rounded-full border border-gold-300 text-gold-600 transition hover:bg-gold-100"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
