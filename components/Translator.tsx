"use client";

import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

const languages: { code: Lang; name: string; flag: string; dir?: "rtl" }[] = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "ml", name: "മലയാളം", flag: "🇮🇳" },
    { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
    { code: "te", name: "తెలుగు", flag: "🇮🇳" },
    { code: "ar", name: "العربية", flag: "🇸🇦", dir: "rtl" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ur", name: "اردو", flag: "🇵🇰", dir: "rtl" },
];

export default function Translator() {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, setLang } = useLanguage();

    const handleSelect = (code: Lang) => {
        setLang(code);
        setIsOpen(false);
        // Apply RTL direction for Arabic/Urdu
        document.documentElement.dir = (code === "ar" || code === "ur") ? "rtl" : "ltr";
    };

    const current = languages.find(l => l.code === lang);

    return (
        <div className="absolute top-6 right-6 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select Language"
                className="w-10 h-10 bg-white shadow-sm border border-[var(--accent)] rounded-full flex items-center justify-center text-[var(--nav-inactive)] hover:text-[var(--foreground)] transition-colors"
            >
                {current ? <span className="text-base">{current.flag}</span> : <Globe size={18} />}
            </button>

            {isOpen && (
                <div className="absolute top-12 right-0 bg-white p-3 pb-12 rounded-3xl shadow-2xl border border-[var(--accent)] w-[200px] flex flex-col items-center gap-1 max-h-[80vh] overflow-y-auto">
                    <span className="text-[10px] text-[var(--nav-inactive)] mb-2 w-full text-left font-bold uppercase tracking-widest pl-2">
                        Language
                    </span>
                    {languages.map((l) => {
                        const active = lang === l.code;
                        return (
                            <button
                                key={l.code}
                                onClick={() => handleSelect(l.code)}
                                dir={l.dir}
                                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-2xl transition-all text-left ${active ? "bg-[var(--primary)]/10 border border-[var(--primary)]/30" : "hover:bg-[var(--accent)]/40"}`}
                            >
                                <span className="text-lg">{l.flag}</span>
                                <span className={`text-sm font-medium flex-1 ${active ? "text-[var(--primary-dark)]" : "text-[var(--foreground)]"}`}>
                                    {l.name}
                                </span>
                                {active && <Check size={14} className="text-[var(--primary-dark)] shrink-0" />}
                            </button>
                        );
                    })}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute bottom-3 text-[11px] font-medium text-[var(--nav-inactive)] hover:text-[var(--foreground)]"
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}
