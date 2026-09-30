import Image from "next/image";

import BotanicalDivider from "./BotanicalDivider";
import DateRow from "./DateRow";
import FloralCorner from "./FloralCorner";

export default function Hero() {
  return (
    <section className="card-bg rise relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-3xl p-8 sm:p-12 shadow-[0_30px_60px_-15px_rgba(43,43,43,0.4)]">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <Image
          src="/churchOverlay.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover opacity-50 saturate-[1.35] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-[#fdfbf7]/10" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(138,154,123,0)_0%,rgba(138,154,123,0.15)_40%,rgba(107,122,94,0.5)_100%)]" />
      </div>

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

      <div className="relative z-10 mx-auto flex w-full max-w-[560px] flex-col items-center text-center">
        <p className="olive-text text-sm uppercase leading-relaxed tracking-[0.3em]">
          You are invited
          <br />
          to the wedding of
        </p>

        <div className="my-5">
          <BotanicalDivider />
        </div>

        <h1 className="font-script">
          <span className="sr-only">Jefrey D. Lopez and Kristine B. Abero</span>
          <span
            aria-hidden="true"
            className="army-fill block leading-[1.1] text-[clamp(2.25rem,9.5vw,3.75rem)]"
          >
            Jefrey D. Lopez
          </span>
          <span
            aria-hidden="true"
            className="army-fill my-1 block text-[clamp(1.75rem,5.5vw,2.25rem)]"
          >
            &amp;
          </span>
          <span
            aria-hidden="true"
            className="army-fill block leading-[1.1] text-[clamp(2.25rem,9.5vw,3.75rem)]"
          >
            Kristine B. Abero
          </span>
        </h1>

        <p className="olive-text mt-6 font-serif text-sm uppercase tracking-[0.4em]">
          December
        </p>

        <DateRow />

        <p className="olive-text mt-2 font-serif text-base tracking-[0.3em]">
          2026
        </p>

        <h2 className="olive-text mt-8 font-serif text-sm uppercase tracking-[0.25em]">
          St. Paul Chapel,
          <br />
          <span className="mt-1 block">Mataragan, Malibcong, Abra</span>
        </h2>

        <p className="olive-text relative mt-6 font-serif text-xl italic after:absolute after:-bottom-2 after:left-1/2 after:h-px after:w-3 after:-translate-x-1/2 after:bg-[#c9a961]">
          Reception to follow
        </p>
      </div>
    </section>
  );
}
