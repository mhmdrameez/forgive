/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Globe, Check } from "lucide-react";

const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "ml", name: "മലയാളം", flag: "🇮🇳" },
];

export default function Translator() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState<string>("en");
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);

        // Check for local storage setting
        const savedLang = localStorage.getItem("forgive-lang");
        if (savedLang) {
            setCurrentLang(savedLang);
        }
    }, []);

    useEffect(() => {
        // Add Google Translate script
        if (!document.getElementById("google-translate-script")) {
            const script = document.createElement("script");
            script.id = "google-translate-script";
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);

            (window as any).googleTranslateElementInit = () => {
                new (window as any).google.translate.TranslateElement(
                    {
                        pageLanguage: "en",
                        includedLanguages: "en,hi,ml",
                        autoDisplay: false
                    },
                    "google_translate_element"
                );

                // If there's a saved language, trigger it after initialization
                const savedLang = localStorage.getItem("forgive-lang");
                if (savedLang && savedLang !== "en") {
                    setTimeout(() => {
                        const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
                        if (selectElement) {
                            selectElement.value = savedLang;
                            selectElement.dispatchEvent(new Event("change", { bubbles: true }));
                        }
                    }, 1000);
                }
            };
        }

        // Apply custom restyling to hide Google's UI
        const styleId = "google-translate-hide-styles";
        if (!document.getElementById(styleId)) {
            const style = document.createElement("style");
            style.id = styleId;
            style.innerHTML = `
                .goog-te-banner-frame.skiptranslate, .goog-te-banner-frame { opacity: 0 !important; pointer-events: none !important; position: absolute !important; top: -1000px !important; z-index: -100 !important; width: 0 !important; height: 0 !important; }
                body { top: 0px !important; position: relative !important; }
                .VIpgJd-ZVi9od-ORHb-OEVmcd, .VIpgJd-ZVi9od-ORHb { opacity: 0 !important; pointer-events: none !important; position: absolute !important; top: -1000px !important; z-index: -100 !important; width: 0 !important; height: 0 !important; overflow: hidden !important; }
                #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
                .goog-logo-link { display: none !important; }
                .goog-te-gadget { color: transparent !important; font-size: 0px !important; }
                .VIpgJd-ZVi9od-aZ2wEe-wOHMyf, .VIpgJd-ZVi9od-aZ2wEe-wOHMyf-ti6hGc, .VIpgJd-ZVi9od-aZ2wEe-OiiCO, .VIpgJd-ZVi9od-aZ2wEe-Jt5cK { visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; }
            `;
            document.head.appendChild(style);
        }
    }, [isHydrated]);

    const changeLanguage = (langCode: string) => {
        localStorage.setItem("forgive-lang", langCode);
        setCurrentLang(langCode);
        setIsOpen(false);

        // Actual language change logic for Google Translate
        const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
        if (selectElement) {
            selectElement.value = langCode;
            selectElement.dispatchEvent(new Event("change", { bubbles: true }));
        }
    };

    if (!isHydrated) return null;

    return (
        <div className="absolute top-6 right-6 z-50 notranslate">
            <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 bg-white shadow-sm border border-[var(--accent)] rounded-full flex items-center justify-center text-[var(--nav-inactive)] hover:text-[var(--foreground)] transition-colors">
                <Globe size={18} />
            </button>
            {isOpen && (
                <div className="absolute top-12 right-0 bg-white p-4 pb-14 rounded-3xl shadow-2xl border border-[var(--accent)] min-w-[260px] flex flex-col items-center gap-2">
                    <span className="text-xs text-[var(--nav-inactive)] mb-3 w-full text-left font-medium uppercase tracking-widest pl-2">Choose Language</span>
                    <div className="w-full flex flex-col gap-2">
                        {languages.map((lang) => {
                            const isActive = currentLang === lang.code;
                            return (
                                <button key={lang.code} onClick={() => changeLanguage(lang.code)} className={`flex items-center gap-4 w-full p-3 rounded-2xl transition-all text-left ${isActive ? "bg-[var(--primary)]/10 border border-[var(--primary)]/30" : "hover:bg-[var(--accent)]/40"}`}>
                                    <span className="text-2xl">{lang.flag}</span>
                                    <span className={`text-base font-medium flex-1 ${isActive ? "text-[var(--primary-dark)]" : "text-[var(--foreground)]"}`}>{lang.name}</span>
                                    {isActive && <Check size={18} className="text-[var(--primary-dark)]" />}
                                </button>
                            );
                        })}
                    </div>
                    <button onClick={() => setIsOpen(false)} className="absolute bottom-5 text-[13px] font-medium text-[var(--nav-inactive)] hover:text-[var(--foreground)]">Back</button>
                </div>
            )}
            <div id="google_translate_element" className="opacity-0 pointer-events-none absolute h-0 w-0"></div>
        </div>
    );
}
