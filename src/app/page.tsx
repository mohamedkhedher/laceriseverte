import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { BrandEssence } from "@/components/BrandEssence";
import { AtmospherePreview } from "@/components/AtmospherePreview";
import { NewsletterForm } from "@/components/NewsletterForm";
import { FloatingBotanicals } from "@/components/FloatingBotanicals";

export default function Home() {
    return (
        <main className="min-h-screen relative bg-cream overflow-x-hidden">
            <FloatingBotanicals />
            <Navbar />
            <HeroSection />
            <BrandEssence />
            <AtmospherePreview />
            <NewsletterForm />
            <Footer />
        </main>
    );
}
