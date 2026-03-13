"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CameraOff } from "lucide-react";

const prompts = [
    "Look into your own eyes.",
    "You are doing the best you can.",
    "I forgive myself for my mistakes.",
    "I am learning.",
    "I deserve peace.",
];

export default function Mirror() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [currentPrompt, setCurrentPrompt] = useState(0);

    useEffect(() => {
        let stream: MediaStream | null = null;

        async function startCamera() {
            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "user" },
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
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [hasPermission]);

    return (
        <div className="relative min-h-[90vh] bg-black overflow-hidden flex flex-col">
            {hasPermission === false && (
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-[var(--background)]">
                    <CameraOff size={48} className="text-[var(--nav-inactive)] mb-4" />
                    <h2 className="text-2xl font-light text-[var(--foreground)] mb-2">Camera Access Needed</h2>
                    <p className="text-[var(--nav-inactive)]">
                        The mirror exercise requires camera access to allow you to reflect. Your video never leaves your device.
                    </p>
                </div>
            )}

            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${hasPermission ? "opacity-60 scale-x-[-1]" : "opacity-0"}`}
            />

            {/* Soft gradient overlay so text is legible */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

            {hasPermission && (
                <div className="relative z-10 flex-1 flex flex-col items-center justify-end pb-32 p-6 text-center">
                    <motion.div
                        key={currentPrompt}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 1.5 }}
                        className="w-full"
                    >
                        <h1 className="text-3xl font-light text-white drop-shadow-lg tracking-wide">
                            {prompts[currentPrompt]}
                        </h1>
                    </motion.div>

                    <div className="absolute top-8 right-6">
                        <span className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/70 border border-white/10">
                            Private · On Device
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
