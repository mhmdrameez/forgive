"use client";

import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

const languages: { code: Lang; name: string; flag: string }[] = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "ml", name: "മലയാളം", flag: "🇮🇳" },
];

export default function Translator() {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, setLang } = useLanguage();

    const handleSelect = (code: Lang) => {
        setLang(code);
        setIsOpen(false);
    };

    return (
        <div className="absolute top-6 right-6 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select Language"
                className="w-10 h-10 bg-white shadow-sm border border-[var(--accent)] rounded-full flex items-center justify-center text-[var(--nav-inactive)] hover:text-[var(--foreground)] transition-colors"
            >
                <Globe size={18} />
            </button>

            {isOpen && (
                <div className="absolute top-12 right-0 bg-white p-4 pb-14 rounded-3xl shadow-2xl border border-[var(--accent)] min-w-[220px] flex flex-col items-center gap-2">
                    <span className="text-[10px] text-[var(--nav-inactive)] mb-2 w-full text-left font-bold uppercase tracking-widest pl-2">
                        Choose Language
                    </span>
                    <div className="w-full flex flex-col gap-2">
                        {languages.map((l) => {
                            const active = lang === l.code;
                            return (
                                <button
                                    key={l.code}
                                    onClick={() => handleSelect(l.code)}
                                    className={`flex items-center gap-3 w-full p-3 rounded-2xl transition-all text-left ${active ? "bg-[var(--primary)]/10 border border-[var(--primary)]/30" : "hover:bg-[var(--accent)]/40"}`}
                                >
                                    <span className="text-xl">{l.flag}</span>
                                    <span className={`text-sm font-medium flex-1 ${active ? "text-[var(--primary-dark)]" : "text-[var(--foreground)]"}`}>
                                        {l.name}
                                    </span>
                                    {active && <Check size={16} className="text-[var(--primary-dark)]" />}
                                </button>
                            );
                        })}
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute bottom-4 text-[12px] font-medium text-[var(--nav-inactive)] hover:text-[var(--foreground)]"
                    >
                        Back
                    </button>
                </div>
            )}
        </div>
    );
}
