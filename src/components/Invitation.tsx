import BotanicalDivider from "./BotanicalDivider";

export default function Invitation() {
  return (
    <section className="w-full rounded-3xl bg-[#fdfbf7] p-8 text-center sm:p-12 shadow-[0_20px_50px_-20px_rgba(138,154,123,0.35)]">
      <p className="text-xs uppercase tracking-[0.3em] text-[#5a5a5a]">
        A Note From Us
      </p>

      <div className="my-5 flex justify-center">
        <BotanicalDivider />
      </div>

      <h2 className="font-serif text-3xl text-[#2b2b2b] sm:text-4xl">
        With joyful hearts, we invite you
      </h2>

      <div className="mx-auto mt-6 max-w-prose">
        <p className="font-serif text-lg leading-relaxed text-[#5a5a5a]">
          Together with our families, we warmly invite you to share in the joy
          of our wedding day. Your presence would mean the world to us as we
          begin this new chapter together.
        </p>

        <p className="mt-4 font-serif text-lg leading-relaxed text-[#5a5a5a]">
          Please join us as we celebrate our union surrounded by the people we
          love most.
        </p>
      </div>

      <p className="mt-8 font-serif text-lg italic text-[#8a9a7b]">
        With love, Kristine &amp; Jefrey
      </p>
    </section>
  );
}