type BotanicalDividerProps = {
  className?: string;
};

export default function BotanicalDivider({
  className = "",
}: BotanicalDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`mx-auto flex items-center justify-center gap-3 ${className}`}
    >
      <span className="h-px w-10 bg-[#c9a961]/60" />
      <svg viewBox="0 0 40 24" className="h-5 w-10" aria-hidden="true">
        <path
          d="M6 12 C 10 6, 16 6, 18 12 C 16 18, 10 18, 6 12 Z"
          fill="#8a9a7b"
          opacity="0.85"
        />
        <path
          d="M34 12 C 30 6, 24 6, 22 12 C 24 18, 30 18, 34 12 Z"
          fill="#8a9a7b"
          opacity="0.85"
        />
        <ellipse cx="20" cy="12" rx="2.6" ry="4" fill="#6b7a5e" />
        <circle cx="20" cy="9.5" r="1" fill="#c9a961" />
      </svg>
      <span className="h-px w-10 bg-[#c9a961]/60" />
    </div>
  );
}