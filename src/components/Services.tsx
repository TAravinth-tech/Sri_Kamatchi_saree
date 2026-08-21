import { Truck, Home, Gem, BadgeIndianRupee } from 'lucide-react';
import { ZariDivider } from '@/components/ZariDivider';
import { useReveal } from '@/lib/hooks';

const SERVICES = [
  {
    icon: Home,
    title: 'Doorstep Buying',
    desc: 'We buy your old silk sarees right at your doorstep, anywhere in Tamil Nadu, no travel needed.',
  },
  {
    icon: Truck,
    title: 'Free Pickup',
    desc: 'Free saree pickup service from your location, transportation fully covered by us.',
  },
  {
    icon: Gem,
    title: 'Expert Valuation',
    desc: 'Experienced team gives professional, fair valuation so you get the best price for treasured sarees.',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Instant Cash Payment',
    desc: 'Get paid immediately on the spot after valuation, no waiting.',
  },
];

export function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-600">What We Offer</span>
          <h2 className="mt-3 text-3xl font-bold text-silk-800 sm:text-4xl">Our Services</h2>
          <ZariDivider className="mt-5" />
          <p className="mx-auto mt-4 max-w-2xl text-charcoal-700">
            From doorstep pickup to instant payment, we make selling your old silk sarees effortless and rewarding.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`group relative overflow-hidden rounded-2xl bg-cream-100 p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card ${
                visible ? 'animate-fadeUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-zari-gradient scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-silk-500 text-gold-300 transition group-hover:bg-gold-400 group-hover:text-silk-800">
                <s.icon size={26} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-silk-800">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
