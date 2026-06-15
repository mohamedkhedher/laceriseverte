"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Language, ProductVariant } from "@/data/productContent";
import { useCart } from "./CartContext";

interface PriceSelectorProps {
    variants: ProductVariant[];
    lang: Language;
    productSlug: string;
    productName: string;
    onOrder?: (order: { volume: string; price: number; productSlug: string; productName: string }) => void;
}

const orderLabels: Record<Language, string> = {
    fr: "Commander",
    en: "Order",
    ar: "اطلب",
};

export function PriceSelector({ variants, lang, productSlug, productName, onOrder }: PriceSelectorProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { addItem } = useCart();
    const isRtl = lang === "ar";
    const selected = variants[selectedIndex];
    const showPills = variants.length > 1;

    const handleOrder = () => {
        addItem({
            productSlug,
            productName,
            volume: selected.volume,
            price: selected.price,
        });
        onOrder?.({
            volume: selected.volume,
            price: selected.price,
            productSlug,
            productName,
        });
    };

    return (
        <div
            className="flex flex-col items-center gap-6"
            dir={isRtl ? "rtl" : "ltr"}
        >
            {/* Volume selector pills */}
            {showPills && (
                <div className="flex items-center gap-1.5 bg-cream/60 backdrop-blur-sm rounded-full p-1 border border-forest/8 shadow-sm">
                    {variants.map((variant, index) => {
                        const isActive = selectedIndex === index;
                        return (
                            <button
                                key={variant.volume}
                                onClick={() => setSelectedIndex(index)}
                                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                                    isActive
                                        ? "text-cream"
                                        : "text-olive/70 hover:text-forest"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId={`priceSelector-${productSlug}`}
                                        className="absolute inset-0 bg-forest rounded-full -z-10"
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                )}
                                {variant.volumeLabel[lang]}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Price display */}
            <div className="relative h-14 flex items-center justify-center min-w-[200px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected.volume}
                        initial={{ opacity: 0, scale: 0.92, y: 6 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: -6 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="flex items-baseline gap-2"
                    >
                        <span className="text-4xl font-subtitle font-semibold text-forest tracking-tight">
                            {selected.price.toFixed(3)}
                        </span>
                        <span className="text-base font-medium text-olive/60 tracking-wide uppercase">
                            TND
                        </span>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Order button */}
            <motion.button
                onClick={handleOrder}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center justify-center px-10 py-4 bg-forest text-cream rounded-full font-medium tracking-wide text-base shadow-lg shadow-forest/20 hover:shadow-xl hover:shadow-forest/25 transition-shadow duration-300 overflow-hidden group"
            >
                {/* Subtle shimmer on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cream/8 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative z-10">{orderLabels[lang]}</span>
            </motion.button>
        </div>
    );
}
