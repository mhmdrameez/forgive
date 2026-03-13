"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, RefreshCw, Sparkles, Stars } from "lucide-react";

interface Stardust {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    color: string;
}

export default function Ceremony() {
    const [thought, setThought] = useState("");
    const [isWritten, setIsWritten] = useState(false);
    const [released, setReleased] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);

    // Handle hydration to prevent mismatch
    useEffect(() => {
        setIsHydrated(true);
    }, []);

    // Generate stable particles for the dissolve effect
    const particles = useMemo(() => {
        const colors = ["#E9D5FF", "#DDD6FE", "#F5D0FE", "#FFFFFF"];
        return [...Array(40)].map((_, i) => ({
            id: i,
            x: (Math.random() - 0.5) * 400,
            y: (Math.random() - 0.5) * 400,
            size: Math.random() * 4 + 2,
            duration: 1.5 + Math.random() * 2,
            delay: Math.random() * 0.5,
            color: colors[Math.floor(Math.random() * colors.length)]
        }));
    }, []);

    const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
        // If dragged far enough to the right or left
        if (Math.abs(info.offset.x) > 120 || Math.abs(info.velocity.x) > 400) {
            setReleased(true);
        }
    };

    const handleReset = () => {
        setThought("");
        setIsWritten(false);
        setReleased(false);
    };

    if (!isHydrated) return null;

    return (
        <div className="min-h-[90vh] flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-[120px]" />
            </div>

            <AnimatePresence mode="wait">
                {!isWritten ? (
                    <motion.div
                        key="write"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        className="w-full max-w-sm space-y-8 relative z-10"
                    >
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="flex justify-center text-[var(--primary)] mb-2"
                        >
                            <Sparkles size={56} strokeWidth={1} />
                        </motion.div>

                        <div className="space-y-4">
                            <h1 className="text-4xl font-light text-[var(--foreground)] tracking-tight">
                                Letting Go
                            </h1>
                            <p className="text-[var(--nav-inactive)] font-light leading-relaxed">
                                Put your sad thoughts in the stars.<br />
                                Type what you want to let go of.
                            </p>
                        </div>

                        <textarea
                            className="w-full h-40 p-6 bg-white/40 backdrop-blur-md rounded-[2.5rem] shadow-sm border border-white/50 outline-none resize-none text-center text-lg leading-relaxed placeholder:text-[var(--nav-inactive)]/50 transition-all focus:bg-white/60 focus:shadow-md"
                            placeholder="I release..."
                            value={thought}
                            autoFocus
                            onChange={(e) => setThought(e.target.value)}
                        />

                        <motion.button
                            onClick={() => setIsWritten(true)}
                            disabled={!thought.trim()}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-[var(--primary)] text-white rounded-2xl text-lg font-medium tracking-wide disabled:opacity-30 disabled:grayscale transition-all shadow-lg shadow-[var(--primary)]/20"
                        >
                            Ready to Let Go
                        </motion.button>
                    </motion.div>
                ) : !released ? (
                    <motion.div
                        key="swipe"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                        className="w-full h-full flex flex-col items-center justify-center relative z-10 px-4"
                    >
                        <h2 className="text-2xl font-light text-[var(--foreground)] mb-16 tracking-wide">
                            Drag to turn it into stars
                        </h2>

                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.9}
                            onDragEnd={handleDragEnd}
                            whileDrag={{
                                scale: 1.05,
                                rotate: 2,
                                boxShadow: "0 30px 60px -12px rgba(0,0,0,0.15)"
                            }}
                            className="bg-white/80 backdrop-blur-xl px-10 py-16 rounded-[3rem] shadow-2xl border border-white max-w-sm w-full cursor-grab active:cursor-grabbing relative group"
                        >
                            <div className="absolute -top-4 -left-4 text-[var(--primary)]/30 group-hover:scale-110 transition-transform">
                                <Stars size={40} />
                            </div>

                            <p className="text-[var(--foreground)] text-xl leading-relaxed italic font-light">
                                &quot;{thought}&quot;
                            </p>

                            {/* Pull instruction */}
                            <motion.div
                                animate={{ x: [-5, 5, -5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -bottom-12 left-0 right-0 text-sm text-[var(--nav-inactive)] uppercase tracking-[0.2em]"
                            >
                                ← Pull to let go →
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="done"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center min-h-[50vh] relative z-10"
                    >
                        {/* Stardust particles exploding and floating up */}
                        <div className="notranslate">
                            {particles.map((p) => (
                                <motion.div
                                    key={p.id}
                                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                                    animate={{
                                        x: p.x,
                                        y: p.y - 300,
                                        scale: 0,
                                        opacity: 0
                                    }}
                                    transition={{
                                        duration: p.duration,
                                        delay: p.delay,
                                        ease: "easeOut"
                                    }}
                                    className="absolute rounded-full"
                                    style={{
                                        width: p.size,
                                        height: p.size,
                                        backgroundColor: p.color,
                                        boxShadow: `0 0 10px ${p.color}`
                                    }}
                                />
                            ))}
                        </div>

                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="flex flex-col items-center space-y-8"
                        >
                            <div className="relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 text-[var(--primary)]/20"
                                >
                                    <Sparkles size={80} strokeWidth={0.5} />
                                </motion.div>
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="relative z-10 text-[var(--primary)]"
                                >
                                    <Sparkles size={80} strokeWidth={1} />
                                </motion.div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-3xl font-light text-[var(--foreground)] tracking-widest italic">
                                    It is gone.
                                </p>
                                <p className="text-[var(--nav-inactive)] font-light max-w-xs mx-auto leading-relaxed">
                                    Your sad thought has flown away. You are free now.
                                </p>
                            </div>

                            <motion.button
                                onClick={handleReset}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-8 py-3 text-sm text-[var(--nav-inactive)] border border-[var(--accent)] rounded-full hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-500"
                            >
                                <RefreshCw size={18} /> Start Again
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
