"use client";

import { motion } from "framer-motion";
import { Language, productContent } from "@/data/productContent";
import { Sparkles, Moon, Leaf } from "lucide-react";

interface BenefitsGridProps {
    lang: Language;
}

export function BenefitsGrid({ lang }: BenefitsGridProps) {
    const content = productContent[lang].benefits;
    const isRtl = lang === "ar";

    const icons = [
        <Leaf className="w-6 h-6" key="icon1" />,
        <Moon className="w-6 h-6" key="icon2" />,
        <Sparkles className="w-6 h-6" key="icon3" />
    ];

    return (
        <section className="py-24 px-6 bg-cream relative z-10" dir={isRtl ? "rtl" : "ltr"}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-forest mb-6">{content.title}</h2>
                    <div className="w-16 h-[1px] bg-sage mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {content.categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="bg-beige/30 rounded-2xl p-8 border border-white/40 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group"
                        >
                            {/* Decorative gradient */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-sage/10 rounded-full blur-2xl group-hover:bg-sage/20 transition-colors duration-500"></div>

                            <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-sage mb-6 shadow-sm">
                                {icons[index]}
                            </div>

                            <h3 className="text-xl font-serif text-forest mb-6">{category.title}</h3>

                            <ul className="space-y-4">
                                {category.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex text-olive/80 font-light text-sm leading-relaxed">
                                        <span className={`text-sage ${isRtl ? 'ml-3' : 'mr-3'} mt-1`}>✦</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
