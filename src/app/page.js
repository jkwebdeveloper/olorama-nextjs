import ExpertsImage from "@/components/ExpertsImage";
import Herosection from "@/components/Herosection";
import Information from "@/components/Info";
import PriceingSection from "@/components/Priceing";
import Productsection from "@/components/Product";
import DigitalWork from "@/components/Teqnology";
import ThinkBest from "@/components/ThinkBest";

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
    </main>
  );
}
