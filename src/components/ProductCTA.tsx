"use client";

import { motion } from "framer-motion";
import { Language, productContent } from "@/data/productContent";

export function ProductCTA({ lang }: { lang: Language }) {
    const content = productContent[lang].cta;
    const isRtl = lang === "ar";

    return (
        <section className="py-24 px-6 bg-forest text-cream relative z-10 overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
            {/* Background botanical forms in subtle light */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 400 400" className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%]" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M141.1,165.6c-18.4,17.2-46.7,24.8-67.6,11.5c-22.1-14-25.1-43-16.7-65.4c10.4-27.5,39.3-51,68.4-49.8 C158,63,184.2,95,183,124.9C182,148.9,158.4,149.3,141.1,165.6z" />
                </svg>
            </div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sage/80 font-medium tracking-[0.2em] uppercase text-xs mb-6 block">La Cerise Verte</span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-8">{content.heading}</h2>
                    <p className="text-cream/80 font-light mb-12 text-lg">
                        {content.text}
                    </p>
                    <a
                        href="mailto:contact@laceriseverte.com"
                        className="inline-flex items-center justify-center px-10 py-5 bg-cream text-forest rounded-full hover:bg-beige transition-colors duration-300 font-medium tracking-wide shadow-[0_0_30px_rgba(250,249,246,0.15)]"
                    >
                        {content.button}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
