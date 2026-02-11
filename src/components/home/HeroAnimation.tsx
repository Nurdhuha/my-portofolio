"use client";

import { motion } from "framer-motion";

export const HeroAnimation = () => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden perspective-[1000px] -z-10 bg-linear-to-b from-neutral-300 via-neutral-100 to-neutral-300 dark:from-black dark:via-neutral-800 dark:to-black">
            <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-3xl" />

            {/* Animated Gradient Background Blobs (Monochrome) */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-neutral-300/40 rounded-full blur-3xl mix-blend-multiply dark:bg-neutral-800/40"
                animate={{
                    x: [-100, 100, -100],
                    y: [-50, 50, -50],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-neutral-400/40 rounded-full blur-3xl mix-blend-multiply dark:bg-neutral-700/40"
                animate={{
                    x: [100, -100, 100],
                    y: [50, -50, 50],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* 3D Glass Card Container - Centered */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    className="relative w-[500px] h-[500px] preserve-3d"
                    animate={{
                        rotateY: [0, 360],
                        rotateX: [10, -10, 10],
                    }}
                    transition={{
                        rotateY: {
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        },
                        rotateX: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Main Glass Card */}
                    <div className="absolute inset-0 rounded-full border border-neutral-400/30 bg-white/5 backdrop-blur-xl shadow-2xl flex items-center justify-center transform-style-3d backface-visible dark:border-white/20 dark:bg-white/5">
                        <div className="w-[350px] h-[350px] rounded-full border border-neutral-500/20 dark:border-white/10" />
                    </div>

                    {/* Floating Rings */}
                    <motion.div
                        className="absolute inset-0 rounded-full border border-neutral-400/30 dark:border-white/20"
                        animate={{ rotateX: 360, rotateY: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ transform: "scale(1.2)" }}
                    />

                    <motion.div
                        className="absolute inset-0 rounded-full border border-neutral-400/30 dark:border-white/20"
                        animate={{ rotateX: -360, rotateY: 180 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        style={{ transform: "scale(1.5)" }}
                    />
                </motion.div>
            </div>
        </div>
    );
};
