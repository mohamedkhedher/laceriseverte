"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center max-w-3xl mx-auto flex flex-col items-center"
            >
                {/* Logo / Brand Name */}
                <div className="relative w-48 h-48 mb-8 flex items-center justify-center rounded-full bg-cream/50 backdrop-blur-sm shadow-[0_0_40px_rgba(143,160,140,0.15)] p-4 overflow-hidden">
                    <Image
                        src="/logo.png"
                        alt="La Cerise Verte Logo"
                        fill
                        className="object-contain p-2 hover:scale-105 transition-transform duration-700 ease-out"
                        priority
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-sage font-medium tracking-widest uppercase text-sm mb-6"
                >
                    La Cerise Verte
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl md:text-7xl font-serif text-forest mb-6 leading-tight"
                >
                    La nature arrive bientôt.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="text-lg md:text-xl text-olive/80 max-w-xl font-light mb-12"
                >
                    Une nouvelle maison de soins naturels et de produits bio inspirés par la pureté botanique.
                </motion.p>


            </motion.div>
        </section>
    );
}
