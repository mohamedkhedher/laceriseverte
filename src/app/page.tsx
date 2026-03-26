import { HeroSection } from "@/components/HeroSection";
import { BrandEssence } from "@/components/BrandEssence";
import { AtmospherePreview } from "@/components/AtmospherePreview";
import { NewsletterForm } from "@/components/NewsletterForm";
import { FloatingBotanicals } from "@/components/FloatingBotanicals";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-cream overflow-x-hidden">
      <FloatingBotanicals />
      <HeroSection />
      <BrandEssence />
      <AtmospherePreview />
      <NewsletterForm />
      <Footer />
    </main>
  );
}
