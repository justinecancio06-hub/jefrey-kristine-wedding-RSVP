import BotanicalDivider from "@/components/BotanicalDivider";
import DressCode from "@/components/DressCode";
import EntourageList from "@/components/EntourageList";
import GentleReminders from "@/components/GentleReminders";
import GiftGuide from "@/components/GiftGuide";
import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import OurMoments from "@/components/OurMoments";
import ThankYou from "@/components/ThankYou";
import WeddingDetails from "@/components/WeddingDetails";

function Divider() {
  return (
    <div className="flex justify-center py-12 sm:py-16">
      <BotanicalDivider />
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[720px] px-4">
      <Hero />

      <Divider />

      <Invitation />

      <Divider />

      <OurMoments />

      <Divider />

      <EntourageList />

      <Divider />

      <DressCode />

      <Divider />

      <GiftGuide />

      <Divider />

      <GentleReminders />

      <Divider />

      <WeddingDetails />

      <Divider />

      <ThankYou />
    </main>
  );
}