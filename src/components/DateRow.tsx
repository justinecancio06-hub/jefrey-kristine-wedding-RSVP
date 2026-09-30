import Sparkle from "./Sparkle";

export default function DateRow() {
  return (
    <div className="mt-3 flex items-center justify-center gap-3">
      <span className="olive-text text-xs uppercase tracking-[0.25em]">
        Sunday
      </span>

      <span className="h-px w-8 bg-[#c9a961]/60" />

      <Sparkle className="h-2 w-2 text-[#c9a961]" />

      <span className="army-fill font-serif text-7xl md:text-8xl leading-none tabular-nums">
        28
      </span>

      <Sparkle className="h-2 w-2 text-[#c9a961]" />

      <span className="h-px w-8 bg-[#c9a961]/60" />

      <span className="olive-text text-xs uppercase tracking-[0.25em]">
        At 4 PM
      </span>
    </div>
  );
}
