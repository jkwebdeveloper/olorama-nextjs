const Congresssection = dynamic(() => import("@/components/Congress"));
const ContactUsSection = dynamic(() => import("@/components/ContactUs"));
const ExpertsImage = dynamic(() => import("@/components/ExpertsImage"));
const HappyClient = dynamic(() => import("@/components/HappyClient"));
const Herosection = dynamic(() => import("@/components/Herosection"));
const Information = dynamic(() => import("@/components/Info"));
const InteractiveSection = dynamic(() => import("@/components/Interactive"));
const LatestPostSection = dynamic(() => import("@/components/LatestPost"));
const PriceingSection = dynamic(() => import("@/components/Priceing"));
const Productsection = dynamic(() => import("@/components/Product"));
const SecretofSuccess = dynamic(() => import("@/components/SecretofSuccess"));
const DigitalWork = dynamic(() => import("@/components/Teqnology"));
const TestimonialSection = dynamic(() => import("@/components/Testimonial"));
const ThinkBest = dynamic(() => import("@/components/ThinkBest"));
const Youtubesection = dynamic(() => import("@/components/Youtube"));
import dynamic from "next/dynamic";

// const Herosection = dynamic(() => import("@/components/Home/Herosection"));

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
