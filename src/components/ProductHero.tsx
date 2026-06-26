"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Language, ProductData } from "@/data/productContent";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ProductHeroProps {
    lang: Language;
    product: ProductData;
}

export function ProductHero({ lang, product }: ProductHeroProps) {
    const content = product.content[lang].hero;
    const isRtl = lang === "ar";
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = product.flowerImage
        ? [
              { src: product.image, label: lang === "ar" ? "المنتج" : lang === "en" ? "Product" : "Produit" },
              { src: product.flowerImage, label: lang === "ar" ? "النبتة" : lang === "en" ? "Botanical" : "Fleur" },
          ]
        : [{ src: product.image, label: lang === "ar" ? "المنتج" : lang === "en" ? "Product" : "Produit" }];

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="pt-6 pb-16 md:py-20 px-6 z-10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

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
                        <h2 className="text-4xl md:text-5xl font-subtitle text-forest leading-[1.1]">{content.title}</h2>
                        <p className="text-xl md:text-2xl text-olive font-subtitle italic mt-4">{content.subtitle}</p>
                    </div>

                    <div className="w-12 h-[1px] bg-sage/50" style={isRtl ? { marginLeft: "auto" } : {}}></div>

                    <p className="text-lg text-olive/80 font-light leading-relaxed max-w-lg">
                        {content.intro}
                    </p>

                    <p className="text-base text-forest/70 font-medium leading-relaxed max-w-lg pt-4 border-t border-forest/10" style={{ marginTop: '2rem' }}>
                        {content.brandStatement}
                    </p>
                </motion.div>

                {/* Visual Content - Interactive Product Slider (Bigger) */}
                <div className="order-1 lg:order-2 relative aspect-square w-full max-w-lg md:max-w-xl mx-auto flex flex-col items-center justify-center p-2">
                    {/* Decorative glowing background aura */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-sage/25 via-beige/40 to-cream blur-3xl -z-10" />

                    {/* Main Image Slider Area */}
                    <div className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.92, x: isRtl ? -20 : 20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.92, x: isRtl ? 20 : -20 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="relative w-[90%] h-[95%] z-10"
                            >
                                <Image
                                    src={slides[currentSlide].src}
                                    alt={content.title}
                                    fill
                                    sizes="(max-width: 768px) 400px, 600px"
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        {slides.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-1 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-cream/80 backdrop-blur-md text-forest shadow-lg border border-forest/10 hover:bg-forest hover:text-cream transition-all duration-200"
                                    aria-label="Image précédente"
                                >
                                    <ChevronLeft size={22} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-1 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-cream/80 backdrop-blur-md text-forest shadow-lg border border-forest/10 hover:bg-forest hover:text-cream transition-all duration-200"
                                    aria-label="Image suivante"
                                >
                                    <ChevronRight size={22} />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Switch Pills / Thumbnails */}
                    {slides.length > 1 && (
                        <div className="flex items-center gap-2 mt-4 z-20 bg-cream/70 backdrop-blur-md p-1.5 rounded-full border border-forest/15 shadow-sm">
                            {slides.map((slide, idx) => {
                                const isActive = currentSlide === idx;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                                            isActive
                                                ? "bg-forest text-cream shadow-sm"
                                                : "text-olive/70 hover:text-forest"
                                        }`}
                                    >
                                        {slide.label}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
