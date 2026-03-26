"use client";

import { motion } from "framer-motion";
import { Language, productContent } from "@/data/productContent";
import { Droplets } from "lucide-react";

export function ProcessHighlight({ lang }: { lang: Language }) {
    const content = productContent[lang].process;
    const isRtl = lang === "ar";

    return (
        <section className="py-24 px-6 relative z-10 bg-beige/50 overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
            {/* Background visual elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-cream transform skew-x-12 translate-x-32 opacity-50 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 flex justify-center order-2 md:order-1 relative"
                >
                    {/* Abstract steam/distillation visual */}
                    <div className="relative w-64 h-64 rounded-full border border-forest/10 flex items-center justify-center before:absolute before:inset-0 before:border before:border-sage/30 before:rounded-full before:scale-110 before:animate-[ping_4s_ease-out_infinite]">
                        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cream to-beige shadow-inner flex flex-col items-center justify-center p-6 text-center">
                            <Droplets className="w-10 h-10 text-sage mb-4 stroke-[1.5]" />
                            <p className="font-serif text-forest text-2xl">1 kg</p>
                            <div className="w-8 h-[1px] bg-olive/20 my-2"></div>
                            <p className="font-serif text-sage text-2xl">1 L</p>
                        </div>

                        {/* Minimalist floating particles simulating steam/water drops */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={`particle-${i}`}
                                className="absolute w-2 h-2 rounded-full bg-sage/40"
                                animate={{
                                    y: [20, -100],
                                    x: [Math.random() * 20 - 10, Math.random() * 40 - 20],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "easeOut"
                                }}
                                style={{
                                    left: `${40 + Math.random() * 20}%`,
                                    bottom: '20%'
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 order-1 md:order-2"
                >
                    <h2 className="text-3xl lg:text-4xl font-serif text-forest mb-6">{content.title}</h2>
                    <div className={`w-12 h-[1px] bg-sage mb-8 ${isRtl ? "ml-auto" : ""}`}></div>
                    <p className="text-xl lg:text-2xl font-light text-olive leading-relaxed tracking-wide">
                        "{content.text}"
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
