import Sparkle from "./Sparkle";

export default function DateRow() {
  return (
    <div className="mt-3 flex items-center justify-center gap-3">
      <span className="text-[10px] uppercase tracking-[0.25em] text-[#5a5a5a]">
        Sunday
      </span>

      <span className="h-px w-8 bg-[#c9a961]/60" />

      <Sparkle className="h-2 w-2 text-[#c9a961]" />

      <span className="font-serif text-6xl md:text-7xl text-[#2b2b2b] leading-none tabular-nums">
        28
      </span>

      <Sparkle className="h-2 w-2 text-[#c9a961]" />

      <span className="h-px w-8 bg-[#c9a961]/60" />

      <span className="text-[10px] uppercase tracking-[0.25em] text-[#5a5a5a]">
        At 4 PM
      </span>
    </div>
  );
}