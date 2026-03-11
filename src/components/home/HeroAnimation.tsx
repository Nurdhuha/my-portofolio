"use client";

import { motion, useReducedMotion } from "framer-motion";

export const HeroAnimation = () => {
    const prefersReducedMotion = useReducedMotion();

    // Jika user memilih reduced motion, tampilkan background statis
    if (prefersReducedMotion) {
        return (
            <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 bg-linear-to-b from-neutral-300 via-neutral-100 to-neutral-300 dark:from-black dark:via-neutral-800 dark:to-black">
                <div className="absolute inset-0 bg-white/30 dark:bg-black/30" />
                <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-neutral-300/30 rounded-full blur-2xl dark:bg-neutral-800/30" />
                <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-neutral-400/30 rounded-full blur-2xl dark:bg-neutral-700/30" />
            </div>
        );
    }

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 bg-linear-to-b from-neutral-300 via-neutral-100 to-neutral-300 dark:from-black dark:via-neutral-800 dark:to-black">
            <div className="absolute inset-0 bg-white/30 dark:bg-black/30" />

            {/* Animated Gradient Blobs — ukuran lebih kecil, blur lebih ringan, tanpa blend mode */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-neutral-300/30 rounded-full blur-2xl dark:bg-neutral-800/30"
                animate={{
                    x: [-50, 50, -50],
                    y: [-30, 30, -30],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ willChange: "transform" }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-neutral-400/30 rounded-full blur-2xl dark:bg-neutral-700/30"
                animate={{
                    x: [50, -50, 50],
                    y: [30, -30, 30],
                    scale: [1.1, 1, 1.1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ willChange: "transform" }}
            />

            {/* Simplified Glass Circle — tanpa backdrop-blur, tanpa 3D rotation continuous */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ willChange: "transform" }}
                >
                    {/* Main Circle */}
                    <div className="absolute inset-0 rounded-full border border-neutral-400/20 bg-white/5 shadow-lg flex items-center justify-center dark:border-white/10 dark:bg-white/5">
                        <div className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full border border-neutral-500/15 dark:border-white/10" />
                    </div>

                    {/* Single Subtle Ring */}
                    <div
                        className="absolute inset-0 rounded-full border border-neutral-400/15 dark:border-white/10"
                        style={{ transform: "scale(1.2)" }}
                    />
                </motion.div>
            </div>
        </div>
    );
};
