import BotanicalDivider from "./BotanicalDivider";
import DateRow from "./DateRow";
import FloralCorner from "./FloralCorner";

export default function Hero() {
  return (
    <section className="rise relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#fdfbf7] p-8 sm:p-12 shadow-[0_20px_50px_-20px_rgba(138,154,123,0.35)]">
      <FloralCorner
        variant="tl"
        className="pointer-events-none absolute left-3 top-3 h-20 w-20 opacity-80 sm:h-24 sm:w-24 md:h-28 md:w-28"
      />
      <FloralCorner
        variant="tr"
        className="pointer-events-none absolute right-3 top-3 h-20 w-20 opacity-80 sm:h-24 sm:w-24 md:h-28 md:w-28"
      />
      <FloralCorner
        variant="bl"
        className="pointer-events-none absolute bottom-3 left-3 h-20 w-20 opacity-80 sm:h-24 sm:w-24 md:h-28 md:w-28"
      />
      <FloralCorner
        variant="br"
        className="pointer-events-none absolute bottom-3 right-3 h-20 w-20 opacity-80 sm:h-24 sm:w-24 md:h-28 md:w-28"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-xs uppercase leading-relaxed tracking-[0.3em] text-[#5a5a5a]">
          You are invited
          <br />
          to the wedding of
        </p>

        <div className="my-5">
          <BotanicalDivider />
        </div>

        <h1 className="font-script text-[#8a9a7b]">
          <span className="sr-only">Kristine Abero and Jefrey Lopez</span>
          <span
            aria-hidden="true"
            className="block leading-[1.1] text-[clamp(2rem,9vw,3.5rem)]"
          >
            Kristine Abero
          </span>
          <span
            aria-hidden="true"
            className="my-1 block text-[clamp(1.5rem,5vw,2rem)]"
          >
            &amp;
          </span>
          <span
            aria-hidden="true"
            className="block leading-[1.1] text-[clamp(2rem,9vw,3.5rem)]"
          >
            Jefrey Lopez
          </span>
        </h1>

        <p className="mt-6 font-serif text-xs uppercase tracking-[0.4em] text-[#5a5a5a]">
          December
        </p>

        <DateRow />

        <p className="mt-2 font-serif text-sm tracking-[0.3em] text-[#2b2b2b]">
          2026
        </p>

        <h2 className="mt-8 font-serif text-xs uppercase tracking-[0.25em] text-[#2b2b2b]">
          St. Paul Chapel,
          <br />
          <span className="mt-1 block">Mataragan, Malibcong, Abra</span>
        </h2>

        <p className="relative mt-6 font-serif text-lg italic text-[#8a9a7b] after:absolute after:-bottom-2 after:left-1/2 after:h-px after:w-3 after:-translate-x-1/2 after:bg-[#c9a961]">
          Reception to follow
        </p>
      </div>
    </section>
  );
}