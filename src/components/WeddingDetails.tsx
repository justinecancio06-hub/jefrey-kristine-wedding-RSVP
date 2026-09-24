import BotanicalDivider from "./BotanicalDivider";

const blocks: {
  label: string;
  lines: string[];
  italic?: boolean;
}[] = [
  {
    label: "Ceremony",
    lines: ["Sunday, December 28, 2026", "4:00 PM"],
  },
  {
    label: "Venue",
    lines: ["St. Paul Chapel", "Mataragan, Malibcong, Abra"],
  },
  {
    label: "Reception",
    lines: ["To follow"],
    italic: true,
  },
];

export default function WeddingDetails() {
  return (
    <section className="w-full rounded-3xl bg-[#fdfbf7] p-8 text-center sm:p-12 shadow-[0_20px_50px_-20px_rgba(138,154,123,0.35)]">
      <p className="text-xs uppercase tracking-[0.3em] text-[#5a5a5a]">
        Wedding Details
      </p>

      <div className="my-5 flex justify-center">
        <BotanicalDivider />
      </div>

      <h2 className="font-script text-4xl text-[#8a9a7b] sm:text-5xl">
        When &amp; where
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
        {blocks.map((block, index) => (
          <div
            key={block.label}
            className={`flex flex-col items-center ${
              index > 0 ? "md:border-l md:border-[#c9a961]/30 md:pl-6" : ""
            }`}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5a5a5a]">
              {block.label}
            </p>
            <p
              className={`mt-3 font-serif text-lg text-[#2b2b2b] ${
                block.italic ? "italic" : ""
              }`}
            >
              {block.lines[0]}
            </p>
            {block.lines[1] && (
              <p
                className={`mt-1 font-serif text-base text-[#5a5a5a] ${
                  block.italic ? "italic" : ""
                }`}
              >
                {block.lines[1]}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}