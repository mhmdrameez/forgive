"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const steps = [
    { id: 1, title: "Acknowledge", subtitle: "What happened? Describe the hurt simply.", type: "text" },
    { id: 2, title: "Feel", subtitle: "How heavy does this feel right now? (1-10)", type: "slider" },
    { id: 3, title: "Express", subtitle: "Let out your emotions. What do you wish you could say?", type: "text" },
    { id: 4, title: "Release", subtitle: "I choose to release the hold this has on me.", type: "button", buttonText: "I release it" },
    { id: 5, title: "Settle", subtitle: "How heavy does it feel now? (1-10)", type: "slider" },
];

export default function Practice() {
    const [currentStep, setCurrentStep] = useState(0);
    const [responses, setResponses] = useState<Record<number, string | number>>({ 2: 5, 5: 5 });
    type PracticeEntry = { id: number; date: string; initialWeight: number | string; finalWeight: number | string; };
    const [history, setHistory] = useLocalStorage<PracticeEntry[]>("forgive-history", []);
    const [completed, setCompleted] = useState(false);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(curr => curr + 1);
        } else {
            // Save practice
            const newEntry = {
                id: Date.now(),
                date: new Date().toISOString(),
                initialWeight: responses[2],
                finalWeight: responses[5],
            };
            setHistory([...history, newEntry]);
            setCompleted(true);
        }
    };

    const current = steps[currentStep];

    if (completed) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center space-y-6">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-20 h-20 bg-[var(--primary)]/20 rounded-full flex items-center justify-center mb-4 text-[var(--primary-dark)]"
                >
                    <Check size={40} />
                </motion.div>
                <h2 className="text-2xl font-light text-[var(--foreground)]">Practice Complete</h2>
                <p className="text-[var(--nav-inactive)] max-w-[280px]">
                    Every time you practice, the weight becomes a little lighter.
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="mt-8 px-6 py-2 bg-[var(--nav-bg)] border border-[var(--accent)] rounded-xl text-[var(--foreground)] shadow-sm hover:bg-[var(--accent)]/10"
                >
                    Return Home
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-[85vh] p-6 pt-12 pb-24">
            {/* Progress indicators */}
            <div className="flex gap-2 mb-12">
                {steps.map((step, idx) => (
                    <div
                        key={step.id}
                        className={`h-1 flex-1 rounded-full transition-all duration-500 ${idx <= currentStep ? "bg-[var(--primary)]" : "bg-[var(--accent)]"
                            }`}
                    />
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 flex flex-col"
                >
                    <h2 className="text-3xl font-light text-[var(--foreground)] mb-2">
                        {current.title}
                    </h2>
                    <p className="text-[var(--nav-inactive)] mb-8">
                        {current.subtitle}
                    </p>

                    <div className="flex-1">
                        {current.type === "text" && (
                            <textarea
                                className="w-full h-48 p-4 bg-white rounded-2xl shadow-sm border border-[var(--accent)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none resize-none"
                                placeholder="Type here privately..."
                                value={(responses[current.id] as string) || ""}
                                onChange={(e) => setResponses({ ...responses, [current.id]: e.target.value })}
                            />
                        )}

                        {current.type === "slider" && (
                            <div className="py-12 px-4 bg-white rounded-2xl shadow-sm border border-[var(--accent)] flex flex-col items-center gap-6">
                                <span className="text-4xl font-light text-[var(--primary-dark)]">
                                    {responses[current.id] || 5}
                                </span>
                                <input
                                    type="range"
                                    min="1" max="10"
                                    value={(responses[current.id] as number) || 5}
                                    onChange={(e) => setResponses({ ...responses, [current.id]: parseInt(e.target.value) })}
                                    className="w-full accent-[var(--primary)]"
                                />
                                <div className="flex justify-between w-full text-xs text-[var(--nav-inactive)]">
                                    <span>Light</span>
                                    <span>Extremely Heavy</span>
                                </div>
                            </div>
                        )}

                        {current.type === "button" && (
                            <div className="flex items-center justify-center py-12">
                                <button
                                    onClick={handleNext}
                                    className="px-8 py-4 bg-[var(--primary)] text-[var(--nav-bg)] rounded-full text-lg font-medium shadow-[var(--shadow-md)] hover:scale-105 active:scale-95 transition-transform"
                                >
                                    {current.buttonText}
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Footer */}
            {current.type !== "button" && (
                <div className="absolute bottom-24 left-6 right-6 flex justify-between items-center max-w-md mx-auto">
                    <button
                        onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                        className={`text-[var(--nav-inactive)] p-2 ${currentStep === 0 ? "opacity-0 pointer-events-none" : "hover:text-[var(--foreground)]"}`}
                    >
                        Back
                    </button>

                    <button
                        onClick={handleNext}
                        className="flex items-center gap-2 bg-[var(--foreground)] text-[var(--nav-bg)] px-6 py-3 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 shadow-sm"
                    >
                        {currentStep === steps.length - 1 ? "Complete" : "Continue"} <ChevronRight size={18} />
                    </button>
                </div>
            )}
        </div>
    );
}
