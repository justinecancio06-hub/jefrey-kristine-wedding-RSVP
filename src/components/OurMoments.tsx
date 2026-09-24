import BotanicalDivider from "./BotanicalDivider";
import ImagePlaceholder from "./ImagePlaceholder";

const photos = ["Photo 1", "Photo 2", "Photo 3"];

export default function OurMoments() {
  return (
    <section className="w-full rounded-3xl bg-[#fdfbf7] p-8 text-center sm:p-12 shadow-[0_20px_50px_-20px_rgba(138,154,123,0.35)]">
      <p className="text-xs uppercase tracking-[0.3em] text-[#5a5a5a]">
        Our Moments
      </p>

      <div className="my-5 flex justify-center">
        <BotanicalDivider />
      </div>

      <h2 className="font-script text-4xl text-[#8a9a7b] sm:text-5xl">
        Captured memories
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {photos.map((photo) => (
          <ImagePlaceholder
            key={photo}
            label={photo}
            aspect="landscape"
            className="md:aspect-[3/4]"
          />
        ))}
      </div>
    </section>
  );
}