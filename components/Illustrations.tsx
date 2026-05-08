// Brand-style illustrations matching staging site:
// - Soft cyan clouds / rounded mountains
// - "F" meteor (the Fastr mark falling like a shooting star with brand-colour trail)
// - Simple birds / sun

export function Cloud({ className = "", color = "#009ECB" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 100" className={className} fill={color} aria-hidden>
      <ellipse cx="55" cy="60" rx="40" ry="32" />
      <ellipse cx="100" cy="50" rx="50" ry="40" />
      <ellipse cx="150" cy="62" rx="38" ry="30" />
      <ellipse cx="80" cy="72" rx="32" ry="22" />
    </svg>
  );
}

export function Mountains({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 160" className={className} aria-hidden>
      <path d="M0 160 Q 60 80 120 110 T 240 100 T 400 130 V160 Z" fill="#009ECB" opacity="0.7" />
      <path d="M0 160 Q 90 110 180 130 T 320 120 T 400 140 V160 Z" fill="#0E7AA0" opacity="0.6" />
    </svg>
  );
}

// Falling Fastr-mark "meteor" — the brand mark with brand-colour comet trail
export function FMeteor({ className = "", size = 72 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 60 100" className={className} aria-hidden>
      {/* Trail */}
      <path d="M30 0 L20 60 L25 60 L18 100" stroke="#FCB400" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M35 5 L30 55 L34 55 L26 95" stroke="#FF485E" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M40 10 L37 50 L40 50 L33 90" stroke="#009ECB" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* F mark */}
      <g transform="translate(8, 60) scale(0.9)">
        <path d="M2 4 L18 4 L13 14 L21 14 L7 36 L13 22 L2 22 Z" fill="#FCB400" />
        <path d="M22 4 L36 4 L31 14 L36 14 L26 36 L28 22 L22 22 Z" fill="#FF485E" />
      </g>
    </svg>
  );
}

export function Sun({ className = "", size = 80 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden>
      <circle cx="50" cy="50" r="22" fill="#FCB400" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const x1 = 50 + Math.cos(a) * 32;
        const y1 = 50 + Math.sin(a) * 32;
        const x2 = 50 + Math.cos(a) * 44;
        const y2 = 50 + Math.sin(a) * 44;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FCB400" strokeWidth="4" strokeLinecap="round" />;
      })}
    </svg>
  );
}

export function Birds({ className = "", color = "#0F0E2B" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 40" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 20 Q 15 10 25 20 Q 35 10 45 20" />
      <path d="M55 28 Q 65 18 75 28" />
    </svg>
  );
}

export function CheckDot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#1FBD7B" />
      <path d="M7 12.5 L10.5 16 L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
