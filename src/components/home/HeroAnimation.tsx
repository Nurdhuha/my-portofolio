"use client";

import { motion, useReducedMotion } from "framer-motion";

export const HeroAnimation = () => {
    const prefersReducedMotion = useReducedMotion();

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

            {/* Floating Gradient Blobs */}
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

            {/* 2D Animated Orbiting Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Outer Ring — slow clockwise */}
                <motion.div
                    className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] rounded-full border border-neutral-400/20 dark:border-white/10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    style={{ willChange: "transform" }}
                >
                    {/* Orbiting dot */}
                    <motion.div
                        className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neutral-400/40 dark:bg-white/20"
                    />
                </motion.div>

                {/* Middle Ring — medium counter-clockwise */}
                <motion.div
                    className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full border border-neutral-400/15 dark:border-white/8"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    style={{ willChange: "transform" }}
                >
                    <motion.div
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-500/30 dark:bg-white/15"
                    />
                </motion.div>

                {/* Inner Ring — faster clockwise */}
                <motion.div
                    className="absolute w-[130px] h-[130px] md:w-[220px] md:h-[220px] rounded-full border border-neutral-500/15 dark:border-white/8"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    style={{ willChange: "transform" }}
                >
                    <motion.div
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-400/25 dark:bg-white/10"
                    />
                </motion.div>

                {/* Center Pulsing Circle */}
                <motion.div
                    className="absolute w-[60px] h-[60px] md:w-[90px] md:h-[90px] rounded-full bg-neutral-300/20 dark:bg-white/5 border border-neutral-400/20 dark:border-white/10"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-neutral-400/30 dark:bg-white/15"
                        style={{
                            top: `${30 + Math.sin(i * 1.05) * 25}%`,
                            left: `${30 + Math.cos(i * 1.05) * 25}%`,
                        }}
                        animate={{
                            y: [0, -15 - i * 3, 0],
                            x: [0, 10 + i * 2, 0],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 5 + i * 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.8,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
