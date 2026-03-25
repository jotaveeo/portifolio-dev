import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import { PricingPix} from "@/components/sections/PricingPix";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Showcase />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
