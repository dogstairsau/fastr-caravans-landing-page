export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/fastr-logo.svg"
        alt="Fastr Finance"
        className="h-7 md:h-8 w-auto select-none"
        draggable={false}
      />
    </span>
  );
}
