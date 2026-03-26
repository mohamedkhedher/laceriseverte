"use client";

import { Language } from "@/data/productContent";
import { motion } from "framer-motion";

interface LanguageSwitcherProps {
    currentLang: Language;
    onLanguageChange: (lang: Language) => void;
}

export function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
    const languages: { code: Language; label: string }[] = [
        { code: "fr", label: "FR" },
        { code: "en", label: "EN" },
        { code: "ar", label: "عربي" },
    ];

    return (
        <div className="fixed top-6 right-6 z-50 bg-cream/80 backdrop-blur-md rounded-full p-1 border border-forest/10 shadow-sm flex items-center gap-1">
            {languages.map((lang) => {
                const isActive = currentLang === lang.code;
                return (
                    <button
                        key={lang.code}
                        onClick={() => onLanguageChange(lang.code)}
                        className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${isActive ? "text-cream" : "text-olive/70 hover:text-forest"
                            } ${lang.code === "ar" ? "font-serif text-base" : ""}`}
                        style={lang.code === "ar" ? { paddingTop: "0.2rem", paddingBottom: "0.4rem" } : {}}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activeLangBubble"
                                className="absolute inset-0 bg-forest rounded-full -z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        {lang.label}
                    </button>
                );
            })}
        </div>
    );
}
