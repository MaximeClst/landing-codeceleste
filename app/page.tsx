import About from "@/components/about";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { PainSection } from "@/components/pain";
import Pricing from "@/components/pricing";
import WallOfLoveSection from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <PainSection />
      <Pricing />
      <WallOfLoveSection />
      <FooterSection />
    </>
  );
}
