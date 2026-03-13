"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, RefreshCw } from "lucide-react";

export default function Ceremony() {
    const [thought, setThought] = useState("");
    const [isWritten, setIsWritten] = useState(false);
    const [released, setReleased] = useState(false);

    const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
        // If dragged far enough to the right or left
        if (Math.abs(info.offset.x) > 150 || info.velocity.x > 500) {
            setReleased(true);
        }
    };

    const handleReset = () => {
        setThought("");
        setIsWritten(false);
        setReleased(false);
    };

    return (
        <div className="min-h-[90vh] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            <AnimatePresence mode="wait">
                {!isWritten ? (
                    <motion.div
                        key="write"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="w-full max-w-sm space-y-6"
                    >
                        <div className="flex justify-center text-[var(--nav-inactive)] mb-4">
                            <Wind size={48} strokeWidth={1} />
                        </div>
                        <h1 className="text-3xl font-light text-[var(--foreground)]">Release Ceremony</h1>
                        <p className="text-sm text-[var(--nav-inactive)] leading-relaxed">
                            Type something heavy you are ready to let go of.
                        </p>
                        <textarea
                            className="w-full h-32 p-4 text-[var(--foreground)] bg-white rounded-2xl shadow-sm border border-[var(--accent)] outline-none resize-none text-center"
                            placeholder="I am carrying..."
                            value={thought}
                            autoFocus
                            onChange={(e) => setThought(e.target.value)}
                        />
                        <button
                            onClick={() => setIsWritten(true)}
                            disabled={!thought.trim()}
                            className="px-8 py-3 bg-[var(--primary)] text-[var(--nav-bg)] rounded-full text-base font-medium disabled:opacity-50"
                        >
                            Ready to Release
                        </button>
                    </motion.div>
                ) : !released ? (
                    <motion.div
                        key="swipe"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        className="w-full h-full flex flex-col items-center justify-center"
                    >
                        <h2 className="text-xl font-light text-[var(--foreground)] mb-12">
                            Swipe away to release it to the wind.
                        </h2>

                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.8}
                            onDragEnd={handleDragEnd}
                            whileDrag={{ scale: 1.05, opacity: 0.8 }}
                            className="bg-white px-8 py-12 rounded-3xl shadow-lg border border-[var(--accent)] max-w-sm w-full cursor-grab active:cursor-grabbing"
                        >
                            <p className="text-[var(--foreground)] text-lg line-clamp-4">
                                &quot;{thought}&quot;
                            </p>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="done"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex flex-col items-center space-y-6"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 4, opacity: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="absolute w-32 h-32 bg-white rounded-full mix-blend-overlay blur-xl"
                        />
                        <p className="text-2xl font-light text-[var(--foreground)] italic tracking-wider">
                            It is gone.
                        </p>
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 text-sm text-[var(--nav-inactive)] hover:text-[var(--foreground)] mt-8"
                        >
                            <RefreshCw size={16} /> Breathe again
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
