"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Truck, Loader2 } from "lucide-react";
import type { Language } from "@/data/productContent";
import { useCart } from "./CartContext";

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: Language;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const t = {
    fr: {
        title: "Votre commande",
        fullName: "Nom complet",
        phone: "Téléphone",
        address: "Adresse",
        city: "Ville",
        postalCode: "Code postal",
        deliveryNotes: "Notes de livraison",
        deliveryNotesPlaceholder: "Instructions spéciales, horaires préférés...",
        paymentBadge: "Paiement à la livraison",
        orderSummary: "Récapitulatif",
        total: "Total",
        submit: "Confirmer la commande",
        success: "Commande confirmée !",
        successSub: "Vous recevrez un appel de confirmation sous peu.",
        errorMsg: "Une erreur est survenue. Veuillez réessayer.",
        retry: "Réessayer",
        qty: "Qté",
    },
    en: {
        title: "Your Order",
        fullName: "Full name",
        phone: "Phone",
        address: "Address",
        city: "City",
        postalCode: "Postal code",
        deliveryNotes: "Delivery notes",
        deliveryNotesPlaceholder: "Special instructions, preferred schedule...",
        paymentBadge: "Payment on delivery",
        orderSummary: "Summary",
        total: "Total",
        submit: "Confirm order",
        success: "Order confirmed!",
        successSub: "You will receive a confirmation call shortly.",
        errorMsg: "Something went wrong. Please try again.",
        retry: "Try again",
        qty: "Qty",
    },
    ar: {
        title: "طلبك",
        fullName: "الاسم الكامل",
        phone: "الهاتف",
        address: "العنوان",
        city: "المدينة",
        postalCode: "الرمز البريدي",
        deliveryNotes: "ملاحظات التوصيل",
        deliveryNotesPlaceholder: "تعليمات خاصة، أوقات مفضلة...",
        paymentBadge: "الدفع عند التوصيل",
        orderSummary: "الملخص",
        total: "المجموع",
        submit: "تأكيد الطلب",
        success: "تم تأكيد الطلب!",
        successSub: "ستتلقى مكالمة تأكيد قريباً.",
        errorMsg: "حدث خطأ. يرجى المحاولة مرة أخرى.",
        retry: "إعادة المحاولة",
        qty: "الكمية",
    },
};

import type { Variants } from "framer-motion";

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const modalVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 30, delay: 0.05 },
    },
    exit: {
        opacity: 0,
        y: 30,
        scale: 0.97,
        transition: { duration: 0.2 },
    },
};

const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-forest/10 bg-beige/30 text-forest placeholder:text-olive/40 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors duration-200 font-sans text-sm";

export function CheckoutModal({ isOpen, onClose, lang }: CheckoutModalProps) {
    const { items, total, clearCart } = useCart();
    const labels = t[lang];
    const isRtl = lang === "ar";

    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        deliveryNotes: "",
    });

    const updateField = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    customer: form,
                    items,
                    total,
                    lang,
                }),
            });

            if (!res.ok) {
                throw new Error("Order submission failed");
            }

            setStatus("success");
            clearCart();
        } catch {
            setStatus("error");
            setErrorMessage(labels.errorMsg);
        }
    };

    const handleClose = () => {
        if (status === "loading") return;
        setStatus("idle");
        setErrorMessage("");
        setForm({ fullName: "", phone: "", address: "", city: "", postalCode: "", deliveryNotes: "" });
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-forest/40 backdrop-blur-sm"
                        onClick={handleClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-cream rounded-2xl shadow-2xl shadow-forest/20 border border-forest/5"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        dir={isRtl ? "rtl" : "ltr"}
                    >
                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full text-olive/50 hover:text-forest hover:bg-forest/5 transition-colors duration-200"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        {/* Success State */}
                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center py-20 px-8 text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 250,
                                            damping: 20,
                                            delay: 0.15,
                                        }}
                                        className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mb-6"
                                    >
                                        <Check className="text-forest" size={32} strokeWidth={2.5} />
                                    </motion.div>
                                    <h3 className="text-2xl font-subtitle text-forest mb-2">
                                        {labels.success}
                                    </h3>
                                    <p className="text-olive/60 text-sm mb-8">{labels.successSub}</p>
                                    <button
                                        onClick={handleClose}
                                        className="px-8 py-3 bg-forest text-cream rounded-full font-medium text-sm hover:bg-olive transition-colors duration-200"
                                    >
                                        OK
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {/* Header */}
                                    <div className="px-8 pt-8 pb-4">
                                        <h2 className="text-xl font-subtitle text-forest">
                                            {labels.title}
                                        </h2>
                                    </div>

                                    {/* Order Summary */}
                                    <div className="mx-8 mb-6 rounded-xl bg-beige/40 border border-forest/5 p-4">
                                        <h3 className="text-xs font-semibold text-olive/50 uppercase tracking-wider mb-3">
                                            {labels.orderSummary}
                                        </h3>
                                        <div className="space-y-2">
                                            {items.map((item) => (
                                                <div
                                                    key={`${item.productSlug}-${item.volume}`}
                                                    className="flex items-center justify-between text-sm"
                                                >
                                                    <div className="flex-1 min-w-0">
                                                        <span className="text-forest font-medium truncate block">
                                                            {item.productName}
                                                        </span>
                                                        <span className="text-olive/50 text-xs">
                                                            {item.volume} × {item.quantity}
                                                        </span>
                                                    </div>
                                                    <span className="text-forest font-medium tabular-nums ms-4">
                                                        {(item.price * item.quantity).toFixed(3)} TND
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-3 pt-3 border-t border-forest/8 flex items-center justify-between">
                                            <span className="text-sm font-semibold text-forest">
                                                {labels.total}
                                            </span>
                                            <span className="text-lg font-subtitle font-semibold text-forest tabular-nums">
                                                {total.toFixed(3)} TND
                                            </span>
                                        </div>
                                    </div>

                                    {/* Payment Badge */}
                                    <div className="mx-8 mb-6">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/15 border border-sage/20">
                                            <Truck size={16} className="text-forest" />
                                            <span className="text-sm font-medium text-forest">
                                                {labels.paymentBadge}
                                            </span>
                                            <Check size={14} className="text-sage" />
                                        </div>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="px-8 pb-8">
                                        <div className="space-y-4">
                                            {/* Full Name */}
                                            <div>
                                                <label className="block text-xs font-medium text-olive/70 mb-1.5 ms-1">
                                                    {labels.fullName} *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={form.fullName}
                                                    onChange={(e) => updateField("fullName", e.target.value)}
                                                    className={inputClasses}
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label className="block text-xs font-medium text-olive/70 mb-1.5 ms-1">
                                                    {labels.phone} *
                                                </label>
                                                <input
                                                    type="tel"
                                                    required
                                                    value={form.phone}
                                                    onChange={(e) => updateField("phone", e.target.value)}
                                                    className={inputClasses}
                                                    dir="ltr"
                                                />
                                            </div>

                                            {/* Address */}
                                            <div>
                                                <label className="block text-xs font-medium text-olive/70 mb-1.5 ms-1">
                                                    {labels.address} *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={form.address}
                                                    onChange={(e) => updateField("address", e.target.value)}
                                                    className={inputClasses}
                                                />
                                            </div>

                                            {/* City + Postal Code row */}
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-xs font-medium text-olive/70 mb-1.5 ms-1">
                                                        {labels.city} *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={form.city}
                                                        onChange={(e) => updateField("city", e.target.value)}
                                                        className={inputClasses}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-olive/70 mb-1.5 ms-1">
                                                        {labels.postalCode}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={form.postalCode}
                                                        onChange={(e) => updateField("postalCode", e.target.value)}
                                                        className={inputClasses}
                                                        dir="ltr"
                                                    />
                                                </div>
                                            </div>

                                            {/* Delivery Notes */}
                                            <div>
                                                <label className="block text-xs font-medium text-olive/70 mb-1.5 ms-1">
                                                    {labels.deliveryNotes}
                                                </label>
                                                <textarea
                                                    rows={3}
                                                    value={form.deliveryNotes}
                                                    onChange={(e) => updateField("deliveryNotes", e.target.value)}
                                                    placeholder={labels.deliveryNotesPlaceholder}
                                                    className={`${inputClasses} resize-none`}
                                                />
                                            </div>
                                        </div>

                                        {/* Error State */}
                                        {status === "error" && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-4 p-3 rounded-lg bg-rose/10 border border-rose/20 text-sm text-rose flex items-center justify-between"
                                            >
                                                <span>{errorMessage}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => setStatus("idle")}
                                                    className="text-xs font-medium underline underline-offset-2 hover:text-forest transition-colors ms-3"
                                                >
                                                    {labels.retry}
                                                </button>
                                            </motion.div>
                                        )}

                                        {/* Submit */}
                                        <motion.button
                                            type="submit"
                                            disabled={status === "loading" || items.length === 0}
                                            whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                                            whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                                            className="w-full mt-6 py-4 bg-forest text-cream rounded-full font-medium text-sm tracking-wide shadow-lg shadow-forest/15 hover:shadow-xl hover:shadow-forest/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {status === "loading" ? (
                                                <>
                                                    <Loader2 size={18} className="animate-spin" />
                                                    <span>{labels.submit}</span>
                                                </>
                                            ) : (
                                                <span>{labels.submit}</span>
                                            )}
                                        </motion.button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
