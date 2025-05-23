import About from "@/components/About";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Pricing />
      <FooterSection />
    </>
  );
}
