import BotanicalDivider from "./BotanicalDivider";

export default function ThankYou() {
  return (
    <section className="card-bg w-full rounded-3xl p-8 text-center sm:p-12 shadow-[0_30px_60px_-15px_rgba(43,43,43,0.4)]">
      <div className="flex justify-center">
        <BotanicalDivider />
      </div>

      <h2 className="mt-8 font-script text-4xl text-[#8a9a7b] sm:text-5xl">
        Thank you
      </h2>

      <p className="mx-auto mt-6 max-w-prose font-serif text-lg leading-relaxed text-[#5a5a5a]">
        From the bottom of our hearts — thank you. Your love, prayers, and
        presence mean the world to us as we start this new chapter.
      </p>

    
    </section>
  );
}