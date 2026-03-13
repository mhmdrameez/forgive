/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState, useRef } from "react";
import { Globe, Check } from "lucide-react";

const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "ml", name: "മലയാളം", flag: "🇮🇳" },
];

interface TranslatorProps {
    initialLang: string | null;
    initialTranslations: Record<string, string>;
}

export default function Translator({ initialLang, initialTranslations }: TranslatorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState<string | null>(initialLang);
    const [isHydrated, setIsHydrated] = useState(false);
    const translationCache = useRef<Record<string, string>>(initialTranslations);
    const pendingTranslations = useRef<Record<string, string>>({});

    // Helper to mark originals for easier harvesting - needs to run on every render/DOM change
    const markOriginals = () => {
        const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
        let node;
        while ((node = walk.nextNode())) {
            const text = node.textContent?.trim();
            // Only mark reasonably sized text nodes that aren't already marked or translated
            if (text && text.length > 1 && node.parentElement && !node.parentElement.closest('.notranslate')) {
                if (!node.parentElement.hasAttribute("data-orig-text") && !node.parentElement.hasAttribute("data-translated")) {
                    node.parentElement.setAttribute("data-orig-text", text);
                }
            }
        }
    };

    // Apply cached translations immediately to the DOM
    const applyCachedTranslations = (cache: Record<string, string> = translationCache.current) => {
        if (!currentLang || currentLang === "en" || Object.keys(cache).length === 0) return;

        const elements = document.querySelectorAll("[data-orig-text]");
        elements.forEach((el) => {
            const orig = el.getAttribute("data-orig-text");
            if (orig && cache[orig]) {
                el.textContent = cache[orig];
                el.setAttribute("data-translated", "true");
            }
        });
    };

    useEffect(() => {
        markOriginals();
        applyCachedTranslations();
        setIsHydrated(true);

        // Check for local storage mismatch
        const savedLang = localStorage.getItem("forgive-lang");
        if (savedLang && savedLang !== initialLang) {
            changeLanguage(savedLang, true); // true means silent/internal update
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
            };
        }

        // Apply custom restyling
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

        // Robust Harvester: Observe DOM changes to catch Google translations and mark new text
        const observer = new MutationObserver(() => {
            markOriginals();

            if (!currentLang || currentLang === "en") return;

            const elements = document.querySelectorAll("[data-orig-text]");
            elements.forEach((el) => {
                const orig = el.getAttribute("data-orig-text");
                const current = el.textContent?.trim();
                // If it's different from original and not in cache, harvest it!
                if (orig && current && orig !== current && !translationCache.current[orig]) {
                    pendingTranslations.current[orig] = current;
                    translationCache.current[orig] = current;
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true, characterData: true });

        // Batch upload new translations to Redis every 10 seconds
        const uploadInterval = setInterval(async () => {
            const langAtCapture = currentLang; // Capture current lang for this batch
            if (Object.keys(pendingTranslations.current).length > 0 && langAtCapture && langAtCapture !== "en") {
                const batch = { ...pendingTranslations.current };
                pendingTranslations.current = {};
                try {
                    await fetch("/api/language", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ lang: langAtCapture, translations: batch }),
                    });
                } catch (e) {
                    // Put back in pending only if language hasn't changed
                    if (currentLang === langAtCapture) {
                        pendingTranslations.current = { ...batch, ...pendingTranslations.current };
                    }
                }
            }
        }, 10000);

        return () => {
            observer.disconnect();
            clearInterval(uploadInterval);
        };
    }, [currentLang]);

    const changeLanguage = async (langCode: string, silent = false) => {
        // 1. Update UI and storage immediately
        if (!silent) {
            localStorage.setItem("forgive-lang", langCode);
            setCurrentLang(langCode);
            setIsOpen(false);
        }

        // 2. IMPORTANT: Wipe caches to prevent cross-language pollution
        translationCache.current = {};
        pendingTranslations.current = {};

        // 3. Trigger Google Translate IMMEDIATELY to start its process
        const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
        if (selectElement) {
            selectElement.value = langCode;
            selectElement.dispatchEvent(new Event("change", { bubbles: true }));
        }

        // 4. Reset the DOM to English baseline before applying new cache
        const elements = document.querySelectorAll("[data-orig-text]");
        elements.forEach(el => {
            const orig = el.getAttribute("data-orig-text");
            el.textContent = orig;
            el.removeAttribute("data-translated");
        });

        if (langCode === "en") return;

        // 5. Fetch specific language cache from Redis for INSTANT update
        try {
            const res = await fetch(`/api/language?lang=${langCode}`);
            const data = await res.json();
            if (data.translations) {
                translationCache.current = data.translations;
                applyCachedTranslations(data.translations);
            }
        } catch (e) {
            console.error("Failed to fetch language cache", e);
        }

        // 6. Update server cookie
        await fetch("/api/language", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lang: langCode, translations: {} }),
        });
    };

    if (!isHydrated) return null;

    if (currentLang === null) {
        return (
            <div className="fixed inset-0 bg-[var(--background)] z-[100] flex flex-col items-center justify-center p-6 text-center">
                <Globe size={48} className="text-[var(--primary)] mb-6" />
                <h1 className="text-3xl font-light text-[var(--foreground)] mb-2">Welcome</h1>
                <p className="text-[var(--nav-inactive)] mb-10 max-w-[280px]">Select your language to begin.</p>
                <div className="w-full max-w-sm bg-white p-5 rounded-3xl shadow-xl border border-[var(--accent)] flex flex-col gap-3 notranslate">
                    {languages.map((lang) => (
                        <button key={lang.code} onClick={() => changeLanguage(lang.code)} className="flex items-center gap-4 w-full p-4 rounded-2xl border border-[var(--accent)] bg-[var(--nav-bg)] hover:bg-[var(--accent)]/40 transition-all text-left">
                            <span className="text-3xl">{lang.flag}</span>
                            <span className="text-lg font-medium text-[var(--foreground)] flex-1">{lang.name}</span>
                        </button>
                    ))}
                </div>
                <div id="google_translate_element" className="opacity-0 pointer-events-none absolute h-0 w-0"></div>
            </div>
        );
    }

    return (
        <div className="absolute top-6 right-6 z-50 notranslate">
            <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 bg-white shadow-sm border border-[var(--accent)] rounded-full flex items-center justify-center text-[var(--nav-inactive)] hover:text-[var(--foreground)] transition-colors">
                <Globe size={18} />
            </button>
            {isOpen && (
                <div className="absolute top-12 right-0 bg-white p-4 pb-14 rounded-3xl shadow-2xl border border-[var(--accent)] min-w-[260px] flex flex-col items-center gap-2">
                    <span className="text-xs text-[var(--nav-inactive)] mb-3 w-full text-left font-medium uppercase tracking-widest pl-2">Language</span>
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
                    <button onClick={() => setIsOpen(false)} className="absolute bottom-5 text-[13px] font-medium text-[var(--nav-inactive)] hover:text-[var(--foreground)]">Close</button>
                </div>
            )}
            <div id="google_translate_element" className="opacity-0 pointer-events-none absolute h-0 w-0"></div>
        </div>
    );
}
