"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Language, getProductBySlug } from "@/data/productContent";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ProductHero } from "@/components/ProductHero";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { ProcessHighlight } from "@/components/ProcessHighlight";
import { ProductSpecs } from "@/components/ProductSpecs";
import { ProductCTA } from "@/components/ProductCTA";
import { PriceSelector } from "@/components/PriceSelector";
import { CheckoutModal } from "@/components/CheckoutModal";
import { CartProvider } from "@/components/CartContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function ProductPageContent() {
    const params = useParams();
    const slug = decodeURIComponent(params.productSlug as string);
    const [lang, setLang] = useState<Language>("fr");
    const [checkoutOpen, setCheckoutOpen] = useState(false);

    const product = getProductBySlug(slug);

    if (!product) {
        return (
            <main className="min-h-screen bg-cream flex items-center justify-center">
                <div className="text-center px-6">
                    <h1 className="font-title text-4xl text-forest mb-4">Produit introuvable</h1>
                    <p className="text-olive/80 font-light mb-8">
                        Le produit que vous recherchez n'existe pas ou a été déplacé.
                    </p>
                    <a
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3 bg-forest text-cream rounded-full hover:bg-olive transition-colors duration-300 font-medium"
                    >
                        Retour à l'accueil
                    </a>
                </div>
            </main>
        );
    }

    const content = product.content[lang];

    return (
        <main className={`min-h-screen bg-cream selection:bg-sage/30 ${lang === "ar" ? "font-subtitle" : "font-sans"}`}>
            <Navbar />
            
            <div className="pt-24 md:pt-28 px-6 max-w-6xl mx-auto flex justify-center sm:justify-end relative z-20">
                <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />
            </div>

            <ProductHero lang={lang} product={product} />

            {/* Price & Order Section */}
            <section className="py-16 px-6 bg-beige/30 relative z-10" dir={lang === "ar" ? "rtl" : "ltr"}>
                <div className="max-w-2xl mx-auto">
                    <PriceSelector
                        variants={product.variants}
                        lang={lang}
                        productSlug={product.slug}
                        productName={content.hero.title}
                        onOrder={() => setCheckoutOpen(true)}
                    />
                </div>
            </section>

            <BenefitsGrid lang={lang} product={product} />
            <ProcessHighlight lang={lang} product={product} />
            <ProductSpecs lang={lang} product={product} />
            <ProductCTA lang={lang} product={product} />
            <Footer />
        </main>
    );
}

export default ProductPageContent;
