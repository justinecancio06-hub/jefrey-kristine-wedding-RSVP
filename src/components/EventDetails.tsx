const events: {
  label: string;
  line1: string;
  line2?: string;
}[] = [
  { label: "Ceremony", line1: "4:00 PM", line2: "St. Paul Chapel" },
  { label: "Venue", line1: "Mataragan, Malibcong", line2: "Abra" },
  { label: "Reception", line1: "Reception to follow" },
];

export default function EventDetails() {
  return (
    <section className="w-full rounded-3xl bg-[#fdfbf7] px-6 py-12 sm:px-10 shadow-[0_20px_50px_-20px_rgba(138,154,123,0.35)]">
      <h2 className="text-center font-script text-4xl text-[#8a9a7b] sm:text-5xl">
        Wedding Details
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.label}
            className="flex flex-col items-center rounded-2xl bg-[#f7f4ed] px-5 py-8 text-center"
          >
            <span className="h-px w-8 bg-[#c9a961]" />
            <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#5a5a5a]">
              {event.label}
            </p>
            <p className="mt-3 font-serif text-lg text-[#2b2b2b]">
              {event.line1}
            </p>
            {event.line2 && (
              <p className="mt-1 font-serif text-base text-[#5a5a5a]">
                {event.line2}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}