"use client";

import { motion } from "framer-motion";
import { Language, productContent } from "@/data/productContent";
import Image from "next/image";

interface ProductHeroProps {
    lang: Language;
}

export function ProductHero({ lang }: ProductHeroProps) {
    const content = productContent[lang].hero;
    const isRtl = lang === "ar";

    return (
        <section className="min-h-[85vh] flex flex-col justify-center relative pt-20 pb-16 px-6 z-10">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`space-y-8 order-2 lg:order-1 ${isRtl ? 'text-right' : 'text-left'}`}
                    dir={isRtl ? "rtl" : "ltr"}
                >
                    <div className="space-y-4">
                        <span className="text-sage font-medium tracking-widest uppercase text-xs">La Cerise Verte</span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-forest leading-[1.1]">{content.title}</h1>
                        <p className="text-xl md:text-2xl text-olive font-serif italic mt-4">{content.subtitle}</p>
                    </div>

                    <div className="w-12 h-[1px] bg-sage/50" style={isRtl ? { marginLeft: "auto" } : {}}></div>

                    <p className="text-lg text-olive/80 font-light leading-relaxed max-w-lg">
                        {content.intro}
                    </p>

                    <p className="text-base text-forest/70 font-medium leading-relaxed max-w-lg pt-4 border-t border-forest/10" style={{ marginTop: '2rem' }}>
                        {content.brandStatement}
                    </p>
                </motion.div>

                {/* Visual Content - Product Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="order-1 lg:order-2 relative aspect-[3/4] w-full max-w-sm mx-auto flex items-center justify-center p-8"
                >
                    <Image
                        src="/zhar.jpeg"
                        alt="Eau de fleur d'oranger Product"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </motion.div>

            </div>
        </section>
    );
}
