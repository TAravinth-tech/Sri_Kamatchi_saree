import { useEffect, useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { WHATSAPP_URL, TEL_URL } from '@/lib/constants';

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${show ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
      {/* Call button (slides up when expanded) */}
      <a
        href={TEL_URL}
        className={`flex items-center gap-2.5 rounded-full bg-silk-600 px-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 ${
          expanded ? 'mb-0 h-12 opacity-100' : 'h-0 overflow-hidden opacity-0'
        }`}
      >
        <Phone size={18} className="text-gold-300" />
        Call Now
      </a>

      {/* WhatsApp pulse */}
      <div className="relative">
        {expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="absolute -left-12 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white text-silk-600 shadow-lg ring-1 ring-gold-300"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        )}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => setExpanded(true)}
          className="relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp-green text-white shadow-lg transition hover:bg-whatsapp-greenDark"
          aria-label="Chat on WhatsApp"
        >
          {!expanded && (
            <span className="absolute inset-0 animate-pulseRing rounded-full bg-whatsapp-green" />
          )}
          <MessageCircle size={26} className="relative" />
        </a>
      </div>
    </div>
  );
}
