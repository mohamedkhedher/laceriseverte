"use client";

import { useState } from "react";
import { Language } from "@/data/productContent";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ProductHero } from "@/components/ProductHero";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { ProcessHighlight } from "@/components/ProcessHighlight";
import { ProductSpecs } from "@/components/ProductSpecs";
import { Footer } from "@/components/Footer";

export default function ProductPage() {
    const [lang, setLang] = useState<Language>("fr");

    return (
        <main className={`min-h-screen bg-cream selection:bg-sage/30 ${lang === 'ar' ? 'font-serif' : 'font-sans'}`}>
            <LanguageSwitcher currentLang={lang} onLanguageChange={setLang} />

            <ProductHero lang={lang} />
            <BenefitsGrid lang={lang} />
            <ProcessHighlight lang={lang} />
            <ProductSpecs lang={lang} />

            <Footer />
        </main>
    );
}
