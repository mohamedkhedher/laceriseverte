"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/productContent";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ProduitsAlimentairesPage() {
    return (
        <main className="min-h-screen bg-cream selection:bg-sage/30 flex flex-col font-sans">
            <Navbar />
            
            {/* Banner Section */}
            <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:h-[45vh] lg:h-[50vh] mt-16 sm:mt-20 overflow-hidden bg-beige/20 shadow-md">
                <Image
                    src="/images/banner-floral-waters.png"
                    alt="Gamme d'eaux florales La Cerise Verte"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </section>

            <div className="flex-grow pt-16 pb-24 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="text-sage font-medium tracking-widest uppercase text-xs mb-4 block">La Cerise Verte</span>
                        <h1 className="text-4xl md:text-5xl font-title text-forest mb-6">Produits Alimentaires</h1>
                        <div className="w-16 h-[1px] bg-sage mx-auto mb-8"></div>
                        <p className="text-lg text-olive/80 font-light max-w-2xl mx-auto">
                            Découvrez notre gamme d'eaux florales et d'hydrolats 100% naturels, distillés avec soin pour révéler toute la richesse de la botanique méditerranéenne. Parfaits pour la gastronomie, le bien-être et la beauté.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <Link href={`/${product.slug}`} className="group block h-full">
                                    <div className="bg-beige/30 rounded-2xl p-6 border border-white/40 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                                        {/* Decorative background circle */}
                                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-sage/10 rounded-full blur-2xl group-hover:bg-sage/20 transition-colors duration-500"></div>
                                        
                                        <div className="relative aspect-square w-full mb-6 flex items-center justify-center p-4 bg-cream/50 rounded-xl overflow-hidden">
                                            <div className="relative w-full h-full z-10">
                                                <Image 
                                                    src={product.image} 
                                                    alt={product.content.fr.hero.title}
                                                    fill
                                                    sizes="(max-width: 768px) 250px, 300px"
                                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-xl"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="mt-auto flex flex-col items-center text-center">
                                            <h2 className="font-subtitle text-2xl text-forest mb-2 group-hover:text-sage transition-colors">
                                                {product.content.fr.hero.title}
                                            </h2>
                                            <p className="text-sm text-olive/70 font-light mb-4 line-clamp-2">
                                                {product.content.fr.hero.subtitle}
                                            </p>
                                            <div className="font-medium text-forest mt-auto">
                                                À partir de {product.variants[0].price.toFixed(3)} TND
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
