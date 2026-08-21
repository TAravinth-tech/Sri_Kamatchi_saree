import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/constants';
import { ZariDivider } from '@/components/ZariDivider';
import { useReveal, useCountUp } from '@/lib/hooks';

const STATS = [
  { value: 1000, suffix: '+', label: 'Satisfied Customers' },
  { value: 10, suffix: 'M+', prefix: '₹', label: 'Total Payout' },
  { value: 40, suffix: '+', label: 'Years of Legacy' },
  { value: 95, suffix: '%', label: 'Customer Satisfaction' },
];

function StatItem({ stat, active }: { stat: typeof STATS[number]; active: boolean }) {
  const count = useCountUp(stat.value, active);
  const display = stat.value >= 100 ? Math.round(count) : Math.round(count * 10) / 10;
  return (
    <div className="text-center">
      <div className="font-display text-3xl font-bold text-gold-400 sm:text-4xl">
        {stat.prefix}{display}{stat.suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/90 sm:text-sm">{stat.label}</div>
    </div>
  );
}

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl rounded-tr-[80px] shadow-card ring-1 ring-gold-200">
              <img src={IMAGES.aboutSaree} alt="Folded silk sarees in a textile collection" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-silk-500 px-6 py-4 text-white shadow-card sm:block">
              <div className="font-display text-2xl font-bold text-gold-300">40+</div>
              <div className="text-xs uppercase tracking-wider">Years of Trust</div>
            </div>
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-3xl border-l-2 border-t-2 border-gold-400" />
          </div>

          {/* Text */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-600">About Us</span>
            <h2 className="mt-3 text-3xl font-bold text-silk-800 sm:text-4xl">40 Years of Trust in Silk</h2>
            <ZariDivider className="my-5 justify-start" />
            <p className="text-base leading-relaxed text-charcoal-700">
              New Sri Kamatchi Pattu Center has been serving Tamil Nadu for over 40 years, turning old silk sarees,
              dhotis, and ravikkais into instant cash through a seamless, transparent process. We understand the
              sentimental and cultural value of every saree and offer a hassle-free, fair appraisal.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-silk-600 transition hover:gap-3 hover:text-silk-700"
            >
              Read More <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div
          ref={ref}
          className="mt-16 overflow-hidden rounded-2xl bg-silk-600 py-8 shadow-card"
        >
          <div className="grid grid-cols-2 gap-6 px-6 md:grid-cols-4">
            {STATS.map((s) => (
              <StatItem key={s.label} stat={s} active={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
