"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Lock, Unlock, KeyRound } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

interface PrivacyLockProps {
    children: React.ReactNode;
}

export default function PrivacyLock({ children }: PrivacyLockProps) {
    const [pin, setPin] = useState("");
    const [isLocked, setIsLocked] = useState(true);
    const [error, setError] = useState(false);
    const [confirmPin, setConfirmPin] = useState("");
    const [mode, setMode] = useState<"enter" | "setup" | "confirm">("enter");
    const [isProcessing, setIsProcessing] = useState(false);
    const { lang } = useLanguage();

    useEffect(() => {
        const savedHash = localStorage.getItem("vault-check");
        if (savedHash) {
            setMode("enter");
        } else {
            setMode("setup");
        }
    }, []);

    useEffect(() => {
        if (pin.length === 6 && !isProcessing) {
            if (mode === "enter") handleUnlock();
            else if (mode === "setup") handleSetup();
            else if (mode === "confirm") handleConfirm();
        }
    }, [pin, mode, isProcessing]);

    const handleUnlock = async () => {
        if (pin.length !== 6) {
            setError(true);
            setTimeout(() => setError(false), 500);
            return;
        }

        setIsProcessing(true);
        try {
            const sentinel = localStorage.getItem("vault-sentinel");
            if (!sentinel) {
                // Should not happen if vault-check is set, but safety first:
                setMode("setup");
                setIsProcessing(false);
                return;
            }

            // Try to decrypt the sentinel to verify the PIN
            const { decryptData } = await import("@/lib/crypto");
            await decryptData(sentinel, pin);

            // Success: Unlock the app
            (window as any).__vault_key = pin;
            setIsLocked(false);
        } catch (e) {
            setError(true);
            setPin("");
            setTimeout(() => setError(false), 500);
        } finally {
            setIsProcessing(false);
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
            setIsProcessing(true);
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
            } finally {
                setIsProcessing(false);
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
        <div className="fixed inset-0 z-[100] bg-[var(--background)] flex flex-col items-center justify-center p-4 overflow-y-auto min-h-dvh">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-xs bg-white rounded-3xl p-6 shadow-2xl border border-[var(--accent)] text-center flex flex-col gap-5 my-auto"
            >
                {/* Icon */}
                <div className="flex justify-center pt-2">
                    <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                        <motion.div
                            animate={error ? { x: [-5, 5, -5, 5, 0] } : {}}
                            transition={{ duration: 0.4 }}
                        >
                            {isProcessing
                                ? <div className="w-7 h-7 rounded-full border-2 border-[var(--primary)] border-t-transparent animate-spin" />
                                : mode === "enter"
                                    ? <Lock className="text-[var(--primary)]" size={28} />
                                    : <KeyRound className="text-[var(--primary)]" size={28} />
                            }
                        </motion.div>
                    </div>
                </div>

                {/* Title & subtitle */}
                <div className="space-y-1">
                    <h2 className={`text-xl font-medium transition-colors ${error ? "text-red-500" : "text-[var(--foreground)]"}`}>
                        {error
                            ? t("lock_wrong", lang)
                            : mode === "enter"
                                ? t("lock_enter_title", lang)
                                : mode === "setup"
                                    ? t("lock_setup_title", lang)
                                    : t("lock_confirm_title", lang)}
                    </h2>
                    <p className="text-[11px] text-[var(--nav-inactive)] leading-relaxed px-2">
                        {mode === "enter"
                            ? t("lock_enter_sub", lang)
                            : mode === "setup"
                                ? t("lock_setup_sub", lang)
                                : t("lock_confirm_sub", lang)}
                    </p>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-200 ${pin.length > i
                                ? "bg-[var(--primary)] border-[var(--primary)] scale-110"
                                : "border-[var(--accent)]"
                                }`}
                        />
                    ))}
                </div>

                {/* Numpad */}
                <div className="grid grid-cols-3 gap-2.5 w-full px-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <button
                            key={num}
                            onClick={() => !isProcessing && pin.length < 6 && setPin(pin + num)}
                            disabled={isProcessing}
                            className="h-14 rounded-2xl bg-[var(--accent)]/30 text-xl font-normal hover:bg-[var(--accent)]/50 active:scale-95 active:bg-[var(--primary)]/10 transition-all text-[var(--foreground)] disabled:opacity-40 select-none"
                        >
                            {num}
                        </button>
                    ))}
                    {/* DEL */}
                    <button
                        onClick={() => !isProcessing && setPin(pin.slice(0, -1))}
                        disabled={isProcessing}
                        className="h-14 rounded-2xl bg-red-50 text-red-400 text-sm font-medium hover:bg-red-100 active:scale-95 transition-all disabled:opacity-40 select-none"
                    >
                        DEL
                    </button>
                    {/* 0 */}
                    <button
                        onClick={() => !isProcessing && pin.length < 6 && setPin(pin + "0")}
                        disabled={isProcessing}
                        className="h-14 rounded-2xl bg-[var(--accent)]/30 text-xl font-normal hover:bg-[var(--accent)]/50 active:scale-95 active:bg-[var(--primary)]/10 transition-all text-[var(--foreground)] disabled:opacity-40 select-none"
                    >
                        0
                    </button>
                    {/* OK */}
                    <button
                        onClick={mode === "enter" ? handleUnlock : mode === "setup" ? handleSetup : handleConfirm}
                        disabled={pin.length < 6 || isProcessing}
                        className="h-14 rounded-2xl bg-[var(--primary)] text-white flex items-center justify-center disabled:opacity-30 active:scale-95 transition-all"
                    >
                        {isProcessing
                            ? <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            : <Unlock size={18} />
                        }
                    </button>
                </div>

                {/* Security badge */}
                <div className="flex items-center gap-2 justify-center px-3 py-2.5 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <ShieldAlert size={12} className="text-emerald-600 shrink-0" />
                    <span className="text-[10px] text-emerald-700 font-bold tracking-wide uppercase">AES-256 · Zero-Knowledge Vault</span>
                </div>
            </motion.div>
        </div>
    );
}
