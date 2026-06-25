"use client";

import { motion } from "framer-motion";
import { Language, ProductData } from "@/data/productContent";
import Image from "next/image";

interface ProductHeroProps {
    lang: Language;
    product: ProductData;
}

export function ProductHero({ lang, product }: ProductHeroProps) {
    const content = product.content[lang].hero;
    const isRtl = lang === "ar";

    return (
        <section className="py-20 px-6 z-10 relative overflow-hidden">
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

                {/* Visual Content - Botanical Composition (Bottle + Flower) */}
                <div className="order-1 lg:order-2 relative aspect-square w-full max-w-md mx-auto flex items-center justify-center p-4">
                    {/* Decorative glowing background aura */}
                    <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-sage/20 via-beige/40 to-cream blur-3xl -z-10" />

                    {/* Flower / Plant Image (Background Floating Element) */}
                    {product.flowerImage && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: isRtl ? -40 : 40, rotate: -5 }}
                            animate={{ 
                                opacity: 0.9, 
                                scale: 1, 
                                x: isRtl ? -20 : 20, 
                                y: [0, -12, 0],
                                rotate: [-5, 0, -5]
                            }}
                            transition={{ 
                                opacity: { duration: 1, delay: 0.1 },
                                scale: { duration: 1, delay: 0.1 },
                                x: { duration: 1, delay: 0.1 },
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="absolute w-[80%] h-[80%] -right-4 -top-4 md:-right-8 md:-top-8 -z-5 pointer-events-none select-none"
                        >
                            <Image
                                src={product.flowerImage}
                                alt={`${content.title} botanical ingredient`}
                                fill
                                sizes="(max-width: 768px) 300px, 400px"
                                className="object-contain drop-shadow-lg opacity-85"
                            />
                        </motion.div>
                    )}

                    {/* Product Bottle Image (Foreground Prominent Element) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.25, type: "spring", bounce: 0.2 }}
                        className="relative w-[75%] h-[90%] z-10"
                    >
                        <Image
                            src={product.image}
                            alt={content.title}
                            fill
                            sizes="(max-width: 768px) 350px, 450px"
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
