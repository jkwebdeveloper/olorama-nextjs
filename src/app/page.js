import Congresssection from "@/components/Congress";
import ContactUsSection from "@/components/ContactUs";
import ExpertsImage from "@/components/ExpertsImage";
import HappyClient from "@/components/HappyClient";
import Herosection from "@/components/Herosection";
import Information from "@/components/Info";
import InteractiveSection from "@/components/Interactive";
import LatestPostSection from "@/components/LatestPost";
import PriceingSection from "@/components/Priceing";
import Productsection from "@/components/Product";
import SecretofSuccess from "@/components/SecretofSuccess";
import DigitalWork from "@/components/Teqnology";
import TestimonialSection from "@/components/Testimonial";
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
      <div className="xl:space-y-0 space-y-6">
        <InteractiveSection />
        <Youtubesection />
      </div>
      <SecretofSuccess />
      <Congresssection />
      <HappyClient />
      <TestimonialSection />
      <LatestPostSection />
      <ContactUsSection />
    </main>
  );
}
