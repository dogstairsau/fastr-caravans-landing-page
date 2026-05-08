export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path d="M6 6 L18 6 L12 16 L20 16 L8 34 L14 22 L6 22 Z" fill="#FCB400" />
        <path d="M22 6 L34 6 L28 16 L34 16 L24 34 L26 22 L22 22 Z" fill="#FF485E" />
      </svg>
      <span className="font-[var(--font-display)] text-[1.55rem] font-bold tracking-tight leading-none">
        Fastr<span className="text-[var(--color-coral)]">.</span>
      </span>
    </div>
  );
}
