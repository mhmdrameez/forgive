"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Lock, Unlock, KeyRound } from "lucide-react";

interface PrivacyLockProps {
    children: React.ReactNode;
}

export default function PrivacyLock({ children }: PrivacyLockProps) {
    const [pin, setPin] = useState("");
    const [isLocked, setIsLocked] = useState(true);
    const [error, setError] = useState(false);
    const [hasSetPin, setHasSetPin] = useState(false);
    const [confirmPin, setConfirmPin] = useState("");
    const [mode, setMode] = useState<"enter" | "setup" | "confirm">("enter");

    useEffect(() => {
        const savedHash = localStorage.getItem("vault-check");
        if (savedHash) {
            setMode("enter");
        } else {
            setMode("setup");
        }
    }, []);

    const handleUnlock = async () => {
        if (pin.length !== 6) {
            setError(true);
            setTimeout(() => setError(false), 500);
            return;
        }

        try {
            const sentinel = localStorage.getItem("vault-sentinel");
            if (sentinel) {
                // Try to decrypt the sentinel to verify the PIN
                const { decryptData } = await import("@/lib/crypto");
                await decryptData(sentinel, pin);
            }

            // If we got here, either no sentinel exists (first time) or decryption succeeded
            (window as any).__vault_key = pin;
            setIsLocked(false);
        } catch (e) {
            setError(true);
            setPin("");
            setTimeout(() => setError(false), 500);
            console.error("Invalid PIN attempt");
        }
    };

    const handleSetup = () => {
        if (pin.length === 6) {
            setConfirmPin(pin);
            setPin("");
            setMode("confirm");
        }
    };

    const handleConfirm = async () => {
        if (pin === confirmPin) {
            try {
                // Create an encrypted sentinel to verify PIN in the future
                const { encryptData } = await import("@/lib/crypto");
                const encryptedSentinel = await encryptData("vault-unlocked", pin);
                localStorage.setItem("vault-sentinel", encryptedSentinel);
                localStorage.setItem("vault-check", "active");

                (window as any).__vault_key = pin;
                setIsLocked(false);
            } catch (e) {
                console.error("Setup failed:", e);
                setError(true);
            }
        } else {
            setError(true);
            setPin("");
            setMode("setup");
            setTimeout(() => setError(false), 500);
        }
    };

    if (!isLocked) return <>{children}</>;

    return (
        <div className="fixed inset-0 z-[100] bg-[var(--background)] flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-sm bg-white rounded-[3rem] p-10 shadow-2xl border border-[var(--accent)] text-center space-y-8"
            >
                <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-[var(--primary)]/10 flex items-center justify-center relative">
                        <motion.div
                            animate={error ? { x: [-5, 5, -5, 5, 0] } : {}}
                            transition={{ duration: 0.4 }}
                        >
                            {mode === "enter" ? <Lock className="text-[var(--primary)]" size={32} /> : <KeyRound className="text-[var(--primary)]" size={32} />}
                        </motion.div>
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-light text-[var(--foreground)]">
                        {mode === "enter" ? "Enter Vault PIN" : mode === "setup" ? "Secure Your Vault" : "Confirm Your PIN"}
                    </h2>
                    <p className="text-xs text-[var(--nav-inactive)] leading-relaxed px-4">
                        {mode === "enter"
                            ? "Your data is encrypted. Enter your 6-digit PIN to unlock it."
                            : "Create a 6-digit PIN. This will be the only way to read your letters. Don't forget it!"}
                    </p>
                </div>

                <div className="flex justify-center gap-3">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${pin.length > i ? "bg-[var(--primary)] border-[var(--primary)]" : "border-[var(--accent)]"
                                }`}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-4 max-w-[240px] mx-auto">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <button
                            key={num}
                            onClick={() => pin.length < 6 && setPin(pin + num)}
                            className="h-14 rounded-2xl bg-[var(--accent)]/30 text-xl font-light hover:bg-[var(--accent)]/50 active:scale-95 transition-all text-[var(--foreground)]"
                        >
                            {num}
                        </button>
                    ))}
                    <button
                        onClick={() => setPin(pin.slice(0, -1))}
                        className="h-14 rounded-2xl bg-red-50 text-red-400 text-sm hover:bg-red-100 active:scale-95 transition-all"
                    >
                        DEL
                    </button>
                    <button
                        onClick={() => pin.length < 6 && setPin(pin + "0")}
                        className="h-14 rounded-2xl bg-[var(--accent)]/30 text-xl font-light hover:bg-[var(--accent)]/50 active:scale-95 transition-all text-[var(--foreground)]"
                    >
                        0
                    </button>
                    <button
                        onClick={mode === "enter" ? handleUnlock : mode === "setup" ? handleSetup : handleConfirm}
                        disabled={pin.length < 6}
                        className="h-14 rounded-2xl bg-[var(--primary)] text-white flex items-center justify-center disabled:opacity-30 active:scale-95 transition-all"
                    >
                        <Unlock size={20} />
                    </button>
                </div>

                <div className="pt-4 space-y-4">
                    <div className="flex flex-col items-center gap-2 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <div className="flex items-center gap-2 text-[10px] text-emerald-700 font-bold tracking-[0.1em] uppercase">
                            <ShieldAlert size={14} className="text-emerald-600" />
                            FBI-Level Encryption
                        </div>
                        <p className="text-[10px] text-emerald-600/80 leading-tight">
                            "Zero-Knowledge" means we can never see your data. <br />
                            Only your PIN can unlock your secrets.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
