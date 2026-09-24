import BotanicalDivider from "./BotanicalDivider";

export default function Footer() {
  return (
    <footer className="border-t border-[#c9a961]/30 bg-[#f7f4ed] px-4 pb-10 pt-12 sm:px-8">
      <BotanicalDivider />

      <p className="mt-6 text-center font-script text-3xl text-[#8a9a7b]">
        Kristine &amp; Jefrey
      </p>

      <p className="mt-4 text-center font-serif text-xs uppercase tracking-[0.25em] text-[#5a5a5a]">
        December 28, 2026 &middot; 4:00 PM
      </p>

      <p className="mt-2 text-center font-serif text-xs uppercase tracking-[0.25em] text-[#5a5a5a]">
        St. Paul Chapel, Mataragan, Malibcong, Abra
      </p>

      <p className="mt-8 text-center text-[10px] uppercase tracking-[0.2em] text-[#5a5a5a]">
        With love, Kristine Abero &amp; Jefrey Lopez
      </p>
    </footer>
  );
}