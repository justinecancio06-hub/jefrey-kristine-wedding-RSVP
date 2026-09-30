export default function Header() {
  return (
    <header className="border-b border-[#c9a961]/30 bg-[#E1C8BC] px-4 py-5">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center gap-1">
        <p className="font-script text-3xl leading-none text-[#6b7a5e]">
          J &amp; K
        </p>
        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#5a5a5a]">
          December 28, 2026 &middot; Mataragan, Malibcong, Abra
        </p>
      </div>
    </header>
  );
}