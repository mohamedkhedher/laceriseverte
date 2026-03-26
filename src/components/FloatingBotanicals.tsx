"use client";

import { motion } from "framer-motion";

export function FloatingBotanicals() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Soft gradient orb */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-sage blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                className="absolute -bottom-[10%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-olive blur-3xl"
            />

            {/* Decorative leaf shapes (abstract SVGs) */}
            <motion.svg
                viewBox="0 0 200 200"
                className="absolute top-[10%] right-[15%] w-32 h-32 text-sage/20 mix-blend-multiply"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
                <path fill="currentColor" d="M100 20 C 130 50, 180 80, 180 140 C 150 180, 100 180, 50 140 C 20 80, 70 50, 100 20 Z" />
            </motion.svg>

            <motion.svg
                viewBox="0 0 200 200"
                className="absolute bottom-[20%] left-[10%] w-48 h-48 text-olive/10 mix-blend-multiply"
                animate={{
                    y: [0, 25, 0],
                    rotate: [0, -10, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
                <path fill="currentColor" d="M100 20 C 130 50, 180 80, 180 140 C 150 180, 100 180, 50 140 C 20 80, 70 50, 100 20 Z" />
            </motion.svg>
        </div>
    );
}
