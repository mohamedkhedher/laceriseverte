"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CosmetiquesPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-sage/30 flex flex-col font-sans">
            <Navbar />
            
            <div className="flex-grow flex items-center justify-center pt-32 pb-24 px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sage font-medium tracking-widest uppercase text-xs mb-4 block">La Cerise Verte</span>
                        <h1 className="text-4xl md:text-5xl font-title text-forest mb-6">Cosmétiques Naturels</h1>
                        <div className="w-16 h-[1px] bg-sage mx-auto mb-8"></div>
                        
                        <div className="bg-beige/40 p-12 rounded-2xl border border-white/50 shadow-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                            <h2 className="font-subtitle text-2xl text-forest mb-4 relative z-10">Bientôt disponible</h2>
                            <p className="text-lg text-olive/80 font-light relative z-10">
                                Notre gamme de produits cosmétiques naturels et biologiques est en cours de préparation. 
                                Nous avons hâte de vous dévoiler nos formules épurées et respectueuses de votre peau.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
