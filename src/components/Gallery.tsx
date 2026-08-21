import { IMAGES } from '@/lib/constants';
import { ZariDivider } from '@/components/ZariDivider';
import { useReveal } from '@/lib/hooks';

export function Gallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-600">Gallery</span>
          <h2 className="mt-3 text-3xl font-bold text-silk-800 sm:text-4xl">The Beauty of Silk</h2>
          <ZariDivider className="mt-5" />
        </div>

        <div ref={ref} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {IMAGES.gallery.map((src, i) => (
            <div
              key={src}
              className={`group relative overflow-hidden rounded-xl border border-gold-300/60 shadow-soft transition-all duration-500 hover:shadow-card ${
                visible ? 'animate-fadeUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={src}
                  alt={`Silk saree ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-silk-950/0 transition-colors group-hover:bg-silk-950/15" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
