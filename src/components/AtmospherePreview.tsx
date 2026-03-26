"use client";

import { motion } from "framer-motion";

export function AtmospherePreview() {
    return (
        <section className="py-24 px-6 bg-cream/80 relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Side */}
                    <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full rounded-2xl overflow-hidden bg-beige">
                        <motion.div
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute inset-0 bg-blend-multiply"
                        >
                            {/* Optional fallback visual - a CSS gradient representing orange blossom and glass */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-sage/40 via-cream/30 to-amber-100/40 mix-blend-overlay"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.8)_0%,_transparent_60%)]"></div>

                            {/* Placeholder text indicating the visual mood */}
                            <div className="absolute inset-0flex items-center justify-center flex-col text-forest/20 p-8 text-center font-serif text-xl border border-white/20 m-4 rounded-xl backdrop-blur-sm bg-white/5">
                                <div className="absolute inset-0 flex items-center justify-center flex-col h-full">
                                    <span className="italic">Visual Atmosphere</span>
                                    <span className="text-sm font-sans mt-2">Orange blossoms & amber glass</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Context Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-forest mb-6">De la fleur au flacon</h2>
                        <p className="text-lg text-olive/80 font-light mb-8 leading-relaxed">
                            Nous sélectionnons avec soin les meilleurs ingrédients botaniques pour créer des extraits d'une pureté incomparable. Notre eau de fleur d'oranger incarne cet engagement vers une beauté authentique et saine.
                        </p>
                        <div className="flex items-center gap-4 text-sm font-medium text-sage uppercase tracking-widest">
                            <span className="w-12 h-[1px] bg-sage"></span>
                            Tradition Méditerranéenne
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
