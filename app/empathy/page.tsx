"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const empathySteps = [
    "Imagine you are watching a movie of what happened.",
    "Think about why the other person might have been sad or angry.",
    "Sometimes people are mean because they are hurting inside too.",
    "Remember that everyone makes mistakes sometimes.",
    "Knowing why they did it doesn't mean it was okay. It just helps you understand."
];

export default function Empathy() {
    const [step, setStep] = useState(0);

    const handleNext = () => {
        if (step < empathySteps.length - 1) setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 0) setStep(step - 1);
    };

    return (
        <div className="min-h-[90vh] flex flex-col items-center justify-center p-6 text-center">
            <div className="absolute top-12 left-6">
                <Link href="/" className="text-[var(--nav-inactive)] hover:text-[var(--foreground)]">
                    <ArrowLeft size={24} />
                </Link>
            </div>

            <motion.div
                key="icon"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-12 text-[var(--accent)]"
            >
                <Users size={64} strokeWidth={1} />
            </motion.div>

            <div className="w-full max-w-sm h-48 relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <h2 className="text-2xl font-light text-[var(--foreground)] leading-relaxed">
                            {empathySteps[step]}
                        </h2>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="mt-16 flex gap-8 items-center">
                <button
                    onClick={handlePrev}
                    disabled={step === 0}
                    className="p-3 text-[var(--nav-inactive)] disabled:opacity-0 hover:text-[var(--foreground)] transition-colors"
                >
                    <ArrowLeft size={20} />
                </button>

                <div className="flex gap-2">
                    {empathySteps.map((_, i) => (
                        <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === step ? "bg-[var(--primary)] w-4" : "bg-[var(--accent)]"
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={step === empathySteps.length - 1}
                    className="p-3 text-[var(--nav-inactive)] disabled:opacity-0 hover:text-[var(--foreground)] transition-colors"
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
}
