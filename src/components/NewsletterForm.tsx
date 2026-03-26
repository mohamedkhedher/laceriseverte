"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section id="newsletter" className="py-24 px-6 relative z-10">
            <div className="max-w-xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-serif text-forest mb-4">Rejoignez l'univers</h2>
                    <p className="text-olive/80 font-light mb-10">
                        Inscrivez-vous pour être informé(e) de notre lancement officiel et découvrir nos rituels en avant-première.
                    </p>

                    <form onSubmit={handleSubmit} className="relative flex items-center justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Votre adresse e-mail"
                            required
                            className="w-full px-6 py-4 rounded-full bg-beige/50 border border-forest/10 text-olive placeholder:text-olive/40 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all block"
                            disabled={status !== "idle"}
                        />
                        <button
                            type="submit"
                            disabled={status !== "idle"}
                            className="absolute right-2 px-6 py-2 bg-forest text-cream rounded-full hover:bg-olive transition-colors disabled:opacity-70 disabled:hover:bg-forest flex items-center justify-center min-w-[120px]"
                        >
                            {status === "idle" ? (
                                "S'inscrire"
                            ) : status === "loading" ? (
                                <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin"></div>
                            ) : (
                                "Merci !"
                            )}
                        </button>
                    </form>

                    <p className="text-xs text-olive/50 mt-4">
                        Nous respectons votre vie privée. Pas de spams, uniquement l'essentiel.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
