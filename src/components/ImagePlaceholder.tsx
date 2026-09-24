type Props = {
  label?: string;
  aspect?: "square" | "portrait" | "landscape" | "hero";
  className?: string;
};

const aspectMap: Record<NonNullable<Props["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  hero: "aspect-[16/9] md:aspect-[21/9]",
};

export default function ImagePlaceholder({
  label = "Photo coming soon",
  aspect = "landscape",
  className = "",
}: Props) {
  return (
    <div
      className={`relative w-full ${aspectMap[aspect]} overflow-hidden rounded-2xl border border-dashed border-[#c9a961]/40 bg-[#f5f1e8] flex items-center justify-center ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c9a961"
        strokeWidth="1.2"
        className="h-10 w-10 opacity-60"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-[#c9a961]">
        {label}
      </span>
    </div>
  );
}