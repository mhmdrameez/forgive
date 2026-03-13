"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CameraOff, Heart, ShieldCheck } from "lucide-react";

const prompts = [
  "Look into your eyes.",
  "You are safe.",
  "You are enough.",
  "Take a slow breath.",
  "You are doing your best.",
  "It's okay to feel this.",
  "Forgive yourself.",
  "You deserve kindness.",
  "Be gentle with yourself.",
  "You are stronger than you think.",
  "You survived difficult days.",
  "You are growing.",
  "You matter.",
  "You are not alone.",
  "Stay with yourself.",
  "This moment is enough."
];

export default function Mirror() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [currentPrompt, setCurrentPrompt] = useState(0);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
        let stream: MediaStream | null = null;

        async function startCamera() {
            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: "user",
                        width: { ideal: 1280 },
                        height: { ideal: 720 }
                    },
                    audio: false
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
                setHasPermission(true);
            } catch (err) {
                console.error("Error accessing camera:", err);
                setHasPermission(false);
            }
        }

        startCamera();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    useEffect(() => {
        if (hasPermission) {
            const interval = setInterval(() => {
                setCurrentPrompt((prev) => (prev + 1) % prompts.length);
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [hasPermission]);

    if (!isHydrated) return null;

    return (
        <div className="relative min-h-[90vh] bg-[#0a0a0a] overflow-hidden flex flex-col">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-gradient-to-b from-[var(--primary)]/10 to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
            </div>

            {hasPermission === false && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-20"
                >
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                        <CameraOff size={32} className="text-[var(--nav-inactive)]" />
                    </div>
                    <h2 className="text-2xl font-light text-white mb-4 tracking-tight">Camera not working</h2>
                    <p className="text-[var(--nav-inactive)] max-w-xs leading-relaxed font-light">
                        I need to see you so we can do this together.
                        Don't worry, no one else can see you.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 px-6 py-2 border border-white/20 rounded-full text-sm text-white/60 hover:text-white hover:border-white/40 transition-all"
                    >
                        Try Again
                    </button>
                </motion.div>
            )}

            {/* Video Container with "Mirror Frame" logic */}
            <div className={`absolute inset-0 transition-all duration-1000 ${hasPermission ? "opacity-100" : "opacity-0"}`}>
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover scale-x-[-1] grayscale-[30%] contrast-[1.1]"
                />

                {/* Visual "Atmosphere" Layers */}
                <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

                {/* "Vignette" and "Focus" border */}
                <div className="absolute inset-0 border-[20px] sm:border-[40px] border-black/40 pointer-events-none" />
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
            </div>

            {hasPermission && (
                <div className="relative z-10 flex-1 flex flex-col items-center justify-between p-8 pt-12 text-center">
                    {/* Top Status */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/5 text-[10px] uppercase tracking-[0.2em] text-white/50"
                    >
                        <ShieldCheck size={12} className="text-emerald-500/50" />
                        Private and Safe
                    </motion.div>

                    {/* Prompts Section */}
                    <div className="w-full max-w-md pb-24">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPrompt}
                                initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                exit={{ opacity: 0, filter: "blur(8px)", y: -20 }}
                                transition={{ duration: 1.5, ease: "circOut" }}
                                className="space-y-6"
                            >
                                <div className="flex justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                        <Heart size={20} className="text-[var(--primary)] fill-[var(--primary)]/20" />
                                    </motion.div>
                                </div>

                                <h1 className="text-3xl sm:text-4xl font-light text-white leading-tight drop-shadow-2xl tracking-tight italic px-4">
                                    {prompts[currentPrompt]}
                                </h1>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bottom Indicator */}
                    <motion.div
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="flex flex-col items-center gap-3"
                    >
                        <div className="w-1 h-12 bg-gradient-to-b from-white/40 to-transparent rounded-full" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Hold your own gaze</span>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
