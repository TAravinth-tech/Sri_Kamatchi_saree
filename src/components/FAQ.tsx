import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ZariDivider } from '@/components/ZariDivider';

const FAQS = [
  {
    q: 'Where can I sell used silk sarees?',
    a: 'New Sri Kamatchi Pattu Center buys used silk sarees across all of Tamil Nadu. We offer free doorstep pickup — simply contact us via WhatsApp or phone, and our team will arrange a visit at your convenience.',
  },
  {
    q: 'What are your service timings?',
    a: 'Our Madurai branch is open Monday through Saturday, from 9:00 am to 9:30 pm. Doorstep pickups can be scheduled within these hours at a time that suits you.',
  },
  {
    q: 'What if I\'m not satisfied with the price offered?',
    a: 'There is absolutely no obligation. Our valuation is completely free, and if you\'re not satisfied with the offered price, you are free to decline — no pressure, no charges.',
  },
  {
    q: 'Do I need to hand over the saree before payment?',
    a: 'No. Payment is made instantly on the spot immediately after you accept the valuation. You receive cash before handing over your saree — full transparency, zero risk.',
  },
  {
    q: 'What types of sarees do you buy?',
    a: 'We buy old and used silk sarees, silk dhotis, and silk ravikkais (blouses) — including Kanchipuram, Banarasi, and other pure silk varieties, regardless of age or condition.',
  },
  {
    q: 'How is the value of a saree determined?',
    a: 'Our experienced team evaluates each saree based on the silk quality, zari content, weight, age, condition, and current market value. The valuation is explained to you transparently on the spot.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-600">Questions & Answers</span>
          <h2 className="mt-3 text-3xl font-bold text-silk-800 sm:text-4xl">Frequently Asked Questions</h2>
          <ZariDivider className="mt-5" />
        </div>

        <div className="mt-10 divide-y divide-gold-200 rounded-2xl bg-white shadow-soft">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-cream-100"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-silk-800">{item.q}</span>
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? 'bg-silk-500 text-white' : 'bg-silk-100 text-silk-600'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-charcoal-700">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
