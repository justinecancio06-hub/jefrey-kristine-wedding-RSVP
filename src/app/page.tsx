import BotanicalDivider from "@/components/BotanicalDivider";
import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import OurMoments from "@/components/OurMoments";
import WeddingDetails from "@/components/WeddingDetails";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[720px] px-4">
      <Hero />

      <div className="flex justify-center py-12 sm:py-16">
        <BotanicalDivider />
      </div>

      <Invitation />

      <div className="flex justify-center py-12 sm:py-16">
        <BotanicalDivider />
      </div>

      <OurMoments />

      <div className="flex justify-center py-12 sm:py-16">
        <BotanicalDivider />
      </div>

      <WeddingDetails />
    </main>
  );
}