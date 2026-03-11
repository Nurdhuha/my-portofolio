'use client';

import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '' }) => {
    const prefersReducedMotion = useReducedMotion();
    const cappedDelay = Math.min(delay, 0.4);

    return (
        <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                delay: prefersReducedMotion ? 0 : cappedDelay,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
