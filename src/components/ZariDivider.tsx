export function ZariDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400 sm:w-24" />
      <svg width="48" height="14" viewBox="0 0 48 14" fill="none" className="text-gold-400">
        <path d="M24 1 L30 7 L24 13 L18 7 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M2 7 H16 M32 7 H46" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="24" cy="7" r="1.6" fill="currentColor" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400 sm:w-24" />
    </div>
  );
}
