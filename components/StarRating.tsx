import { Star } from "lucide-react";

export function StarRating({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill="#FCB400" stroke="#FCB400" />
      ))}
    </div>
  );
}
