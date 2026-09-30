import BotanicalDivider from "./BotanicalDivider";

const shades = [
  "#e8ede0",
  "#c9d4bd",
  "#8a9a7b",
  "#6b7a5e",
  "#4a5a3e",
];

const blushShades = [
  "#F9E5D5",
  "#F7C9B4",
  "#F2A28B",
  "#E08268",
  "#C96B52",
];

export default function DressCode() {
  return (
    <section className="card-bg w-full rounded-3xl p-8 text-center sm:p-12 shadow-[0_30px_60px_-15px_rgba(43,43,43,0.4)]">
      <p className="text-xs uppercase tracking-[0.3em] text-[#5a5a5a]">
        What to Wear
      </p>

      <div className="my-5 flex justify-center">
        <BotanicalDivider />
      </div>

      <h2 className="font-script text-4xl text-[#8a9a7b] sm:text-5xl">
        Shades of Green
      </h2>

      <p className="mx-auto mt-6 max-w-prose font-serif text-lg leading-relaxed text-[#5a5a5a]">
        We&apos;d love for you to join our palette. Please wear any shade of
        green — from soft sage to deep forest.
      </p>

      <div className="mx-auto mt-10 grid max-w-md grid-cols-5 gap-3">
        {shades.map((color) => (
          <div
            key={color}
            className="aspect-square rounded-full shadow-sm ring-1 ring-[#c9a961]/30"
            style={{ backgroundColor: color }}
            aria-label={color}
          />
        ))}
      </div>

      <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-[#5a5a5a]">
        Soft sage — Deep forest
      </p>

      <div className="mx-auto my-8 h-px w-16 bg-[#c9a961]/40" />

      <h2 className="mt-10 font-script text-4xl text-[#8a9a7b] sm:mt-12 sm:text-5xl">
        Shades of Blush
      </h2>

      <p className="mx-auto mt-6 max-w-prose font-serif text-lg leading-relaxed text-[#5a5a5a]">
        Feel free to wear any of these blush and coral tones as an alternative
        to green.
      </p>

      <div className="mx-auto mt-10 grid max-w-md grid-cols-5 gap-3">
        {blushShades.map((color) => (
          <div
            key={color}
            className="aspect-square rounded-full shadow-sm ring-1 ring-[#c9a961]/30"
            style={{ backgroundColor: color }}
            aria-label={color}
          />
        ))}
      </div>

      <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-[#5a5a5a]">
        Soft cream — Deep terracotta
      </p>

      <p className="mx-auto mt-10 max-w-prose font-serif text-base italic leading-relaxed text-[#5a5a5a]">
        Please avoid white, ivory, and cream — those are reserved for the
        bride.
      </p>
    </section>
  );
}
