import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';
import { ZariDivider } from '@/components/ZariDivider';

export function CityLanding() {
  return (
    <section className="bg-white py-16">
      <ZariDivider className="mb-10" />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl font-bold text-silk-800 sm:text-3xl">Old Saree Buying in Madurai</h2>
        <p className="mt-4 leading-relaxed text-charcoal-700">
          Looking to sell your old silk sarees in Madurai? New Sri Kamatchi Pattu Center offers the best prices for
          your pre-loved Kanchipuram silk sarees, dhotis, and ravikkais with free doorstep pickup across the city.
          Our experienced team provides fair, on-the-spot valuation and instant cash payment — trusted by Madurai
          families for over four decades.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp-green px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-whatsapp-greenDark"
        >
          <MessageCircle size={18} />
          Chat with our Madurai Branch
        </a>
      </div>
      <ZariDivider className="mt-10" />
    </section>
  );
}
