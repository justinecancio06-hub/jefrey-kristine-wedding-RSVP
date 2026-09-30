import BotanicalDivider from "./BotanicalDivider";
import Sparkle from "./Sparkle";

const reminders = [
  {
    title: "Be on time",
    body: "We'd love for you to arrive before the ceremony begins so you don't miss a moment.",
  },
  {
    title: "Stay to the end",
    body: "Please join us for the full celebration — the reception, dinner, and dancing.",
  },
  {
    title: "Have fun",
    body: "Most importantly, relax, celebrate, and make memories with us.",
  },
];

export default function GentleReminders() {
  return (
    <section className="card-bg w-full rounded-3xl p-8 text-center sm:p-12 shadow-[0_30px_60px_-15px_rgba(43,43,43,0.4)]">
      <p className="text-xs uppercase tracking-[0.3em] text-[#5a5a5a]">
        A Few Reminders
      </p>

      <div className="my-5 flex justify-center">
        <BotanicalDivider />
      </div>

      <h2 className="font-script text-4xl text-[#8a9a7b] sm:text-5xl">
        Gentle Reminders
      </h2>

      <div className="mx-auto mt-10 max-w-md space-y-6 text-left">
        {reminders.map((reminder) => (
          <div key={reminder.title} className="flex items-start gap-4">
            <Sparkle className="mt-1 h-3 w-3 shrink-0 text-[#c9a961]" />
            <div>
              <h3 className="font-serif font-semibold text-[#2b2b2b]">
                {reminder.title}
              </h3>
              <p className="mt-1 font-sans text-sm leading-relaxed text-[#5a5a5a]">
                {reminder.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}