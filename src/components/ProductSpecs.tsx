"use client";

import { motion } from "framer-motion";
import { Language, productContent } from "@/data/productContent";

export function ProductSpecs({ lang }: { lang: Language }) {
    const content = productContent[lang].specs;
    const isRtl = lang === "ar";

    return (
        <section className="py-24 px-6 bg-cream relative z-10" dir={isRtl ? "rtl" : "ltr"}>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-serif text-forest mb-4">{content.title}</h2>
                    <div className="w-16 h-[1px] bg-sage"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-forest/10">
                    {content.labels.map((label, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="py-6 border-b border-forest/5 flex flex-col md:flex-row md:justify-between md:items-start gap-2"
                        >
                            <span className="text-sm font-medium text-forest/70 uppercase tracking-wider w-full md:w-1/3 shrink-0">
                                {label}
                            </span>
                            <span className="text-olive/80 font-light w-full md:w-2/3 md:text-right">
                                {content.values[index]}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
