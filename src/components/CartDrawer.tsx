"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCart } from "./CartContext";
import { products } from "@/data/productContent";

export function CartDrawer() {
    const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem, total, setIsCheckoutOpen } = useCart();

    const handleCheckout = () => {
        setIsCartOpen(false);
        setIsCheckoutOpen(true);
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <div className="fixed inset-0 z-50 overflow-hidden font-sans">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsCartOpen(false)}
                        className="absolute inset-0 bg-forest/40 backdrop-blur-sm"
                    />

                    {/* Drawer Panel */}
                    <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="w-screen max-w-md bg-cream shadow-2xl flex flex-col border-l border-forest/10"
                        >
                            {/* Header */}
                            <div className="p-6 bg-beige/30 border-b border-forest/10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <ShoppingBag className="text-forest" size={22} strokeWidth={1.5} />
                                    <h2 className="font-title text-xl text-forest">Votre Panier</h2>
                                    <span className="bg-sage/20 text-forest text-xs font-medium px-2.5 py-0.5 rounded-full">
                                        {items.reduce((s, i) => s + i.quantity, 0)}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="p-2 rounded-full text-olive hover:text-forest hover:bg-forest/5 transition-colors"
                                    aria-label="Fermer le panier"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Cart Items List */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6 divide-y divide-forest/5">
                                {items.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                                        <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center text-sage">
                                            <ShoppingBag size={32} strokeWidth={1} />
                                        </div>
                                        <p className="font-subtitle text-lg text-forest">Votre panier est vide</p>
                                        <p className="text-sm text-olive/60 font-light">
                                            Découvrez nos eaux florales méditerranéennes et ajoutez vos créations préférées.
                                        </p>
                                    </div>
                                ) : (
                                    items.map((item) => {
                                        const productImg = products.find((p) => p.slug === item.productSlug)?.image || "/logo.png";
                                        return (
                                            <div key={`${item.productSlug}-${item.volume}`} className="pt-6 first:pt-0 flex gap-4 items-center">
                                                {/* Thumbnail */}
                                                <div className="relative w-20 h-20 rounded-xl bg-beige/40 p-2 shrink-0 border border-forest/5 flex items-center justify-center">
                                                    <Image
                                                        src={productImg}
                                                        alt={item.productName}
                                                        fill
                                                        sizes="80px"
                                                        className="object-contain p-2"
                                                    />
                                                </div>

                                                {/* Details */}
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-subtitle text-base text-forest truncate font-medium">
                                                        {item.productName}
                                                    </h3>
                                                    <p className="text-xs text-sage font-medium tracking-wider uppercase mt-0.5">
                                                        Format : {item.volume}
                                                    </p>
                                                    <div className="text-sm font-semibold text-forest mt-2">
                                                        {(item.price * item.quantity).toFixed(3)} TND
                                                    </div>
                                                </div>

                                                {/* Quantity controls + delete */}
                                                <div className="flex flex-col items-end gap-3">
                                                    <button
                                                        onClick={() => removeItem(item.productSlug, item.volume)}
                                                        className="text-olive/40 hover:text-red-500 transition-colors p-1"
                                                        aria-label="Supprimer l'article"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                    <div className="flex items-center gap-2 bg-beige/50 rounded-lg px-2 py-1 border border-forest/10">
                                                        <button
                                                            onClick={() => updateQuantity(item.productSlug, item.volume, -1)}
                                                            className="text-forest/70 hover:text-forest p-0.5"
                                                            aria-label="Diminuer la quantité"
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="text-xs font-semibold text-forest min-w-[16px] text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.productSlug, item.volume, 1)}
                                                            className="text-forest/70 hover:text-forest p-0.5"
                                                            aria-label="Augmenter la quantité"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>

                            {/* Footer / Checkout */}
                            {items.length > 0 && (
                                <div className="p-6 bg-beige/30 border-t border-forest/10 space-y-4 shadow-lg">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm text-olive/80 font-light">
                                            <span>Livraison</span>
                                            <span className="text-sage font-medium">Paiement à la livraison</span>
                                        </div>
                                        <div className="flex justify-between items-baseline pt-2 border-t border-forest/10">
                                            <span className="font-subtitle text-lg text-forest font-semibold">Total</span>
                                            <span className="font-subtitle text-2xl text-forest font-bold">
                                                {total.toFixed(3)} <span className="text-xs font-normal">TND</span>
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleCheckout}
                                        className="w-full py-4 px-6 bg-forest text-cream rounded-full font-medium tracking-wide flex items-center justify-center gap-3 shadow-xl hover:bg-forest/90 transition-all group"
                                    >
                                        <span>Valider la commande</span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <p className="text-[11px] text-center text-olive/60 font-light">
                                        🛡️ Payez en toute sécurité à la réception de votre colis.
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}
