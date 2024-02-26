import Congresssection from "@/components/Congress";
import ExpertsImage from "@/components/ExpertsImage";
import HappyClient from "@/components/HappyClient";
import Herosection from "@/components/Herosection";
import Information from "@/components/Info";
import InteractiveSection from "@/components/Interactive";
import PriceingSection from "@/components/Priceing";
import Productsection from "@/components/Product";
import SecretofSuccess from "@/components/SecretofSuccess";
import DigitalWork from "@/components/Teqnology";
import ThinkBest from "@/components/ThinkBest";
import Youtubesection from "@/components/Youtube";

export default function Home() {
  return (
    <main className="xl:space-y-11 space-y-6">
      <Herosection />
      <Productsection />
      <PriceingSection />
      <ExpertsImage />
      <DigitalWork />
      <ThinkBest />
      <Information />
      <div className="space-y-0">
        <InteractiveSection />
        <Youtubesection />
      </div>
      <SecretofSuccess />
      <Congresssection/>
      <HappyClient/>
    </main>
  );
}
