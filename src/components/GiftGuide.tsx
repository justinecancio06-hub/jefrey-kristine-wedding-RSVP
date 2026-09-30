import BotanicalDivider from "./BotanicalDivider";
import Sparkle from "./Sparkle";

export default function GiftGuide() {
  return (
    <section className="card-bg w-full rounded-3xl p-8 text-center sm:p-12 shadow-[0_30px_60px_-15px_rgba(43,43,43,0.4)]">
      <p className="text-xs uppercase tracking-[0.3em] text-[#5a5a5a]">
        Gift Guide
      </p>

      <div className="my-5 flex justify-center">
        <BotanicalDivider />
      </div>

      <h2 className="font-script text-4xl text-[#8a9a7b] sm:text-5xl">
        Your presence is our present
      </h2>

      <div className="mx-auto mt-6 max-w-prose">
        <p className="font-serif text-lg leading-relaxed text-[#5a5a5a]">
          Your love, laughter, and company on our wedding day is the greatest
          gift we could ask for.
        </p>

        <p className="mt-4 font-serif text-lg leading-relaxed text-[#5a5a5a]">
          However, should you wish to honor us with a gift, a contribution to
          our new life together would be warmly appreciated.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-[#c9a961]/40 bg-[#e8ede0]/40 px-6 py-6">
        <Sparkle className="mx-auto h-4 w-4 text-[#c9a961]" />

        <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-[#5a5a5a]">
          Gcash / Bank
        </p>

        <p className="mt-2 font-serif text-base italic text-[#8a9a7b]">
          Account details coming soon
        </p>
      </div>
    </section>
  );
}