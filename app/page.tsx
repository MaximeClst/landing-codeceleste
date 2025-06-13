import About from "@/components/About";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { PainSection } from "@/components/pain";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <PainSection />
      <Pricing />
      <FooterSection />
    </>
  );
}
