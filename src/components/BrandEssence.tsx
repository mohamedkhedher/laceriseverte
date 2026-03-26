"use client";

import { motion } from "framer-motion";
import { Droplet, Leaf, Sparkles } from "lucide-react";

const essenceItems = [
    {
        icon: <Leaf className="w-6 h-6 stroke-[1.5]" />,
        title: "Cosmétiques Naturels",
        description: "Des formules épurées, respectueuses de votre peau et de l'environnement."
    },
    {
        icon: <Droplet className="w-6 h-6 stroke-[1.5]" />,
        title: "Eaux Florales",
        description: "La quintessence de la pureté botanique obtenue par distillation minutieuse."
    },
    {
        icon: <Sparkles className="w-6 h-6 stroke-[1.5]" />,
        title: "Qualité Artisanale",
        description: "Une transparence absolue et des rituels authentiques pour votre bien-être."
    }
];

export function BrandEssence() {
    return (
        <section className="py-24 px-6 relative z-10 bg-cream/40 backdrop-blur-sm border-t border-forest/5">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-forest mb-4">L'essence de La Cerise Verte</h2>
                    <div className="w-12 h-[1px] bg-sage mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {essenceItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-full bg-beige flex items-center justify-center text-sage mb-6 group-hover:scale-110 group-hover:bg-sage group-hover:text-cream transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-serif text-forest mb-3">{item.title}</h3>
                            <p className="text-olive/80 font-light leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
