import BotanicalDivider from "./BotanicalDivider";
import ImagePlaceholder from "./ImagePlaceholder";

const photos = ["Photo 1", "Photo 2", "Photo 3", "Photo 4"];

export default function OurMoments() {
  return (
    <section className="card-bg w-full rounded-3xl p-8 text-center sm:p-12 shadow-[0_30px_60px_-15px_rgba(43,43,43,0.4)]">
      <p className="text-xs uppercase tracking-[0.3em] text-[#5a5a5a]">
        Our Moments
      </p>

      <div className="my-5 flex justify-center">
        <BotanicalDivider />
      </div>

      <h2 className="font-script text-4xl text-[#8a9a7b] sm:text-5xl">
        Captured memories
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
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