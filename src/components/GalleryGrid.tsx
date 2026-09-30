import ImagePlaceholder from "./ImagePlaceholder";

const photos = ["Photo 1", "Photo 2", "Photo 3", "Photo 4", "Photo 5", "Photo 6"];

export default function GalleryGrid() {
  return (
    <section className="card-bg w-full rounded-3xl px-6 py-12 sm:px-10 shadow-[0_30px_60px_-15px_rgba(43,43,43,0.4)]">
      <h2 className="text-center font-script text-4xl text-[#8a9a7b] sm:text-5xl">
        Our Moments
      </h2>

      <p className="mx-auto mt-4 max-w-prose text-center text-sm text-[#5a5a5a]">
        A glimpse of our journey — we&rsquo;ll fill these with photos soon.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
        {photos.map((photo) => (
          <ImagePlaceholder key={photo} label={photo} aspect="portrait" />
        ))}
      </div>
    </section>
  );
}