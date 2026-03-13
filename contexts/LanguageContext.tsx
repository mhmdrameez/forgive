"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { Lang } from "@/lib/translations";

interface LanguageContextType {
    lang: Lang;
    setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    setLang: () => { },
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>("en");

    useEffect(() => {
        const saved = localStorage.getItem("forgive-lang") as Lang | null;
        if (saved && ["en", "hi", "ml", "ar", "ta", "te"].includes(saved)) {
            setLangState(saved);
        }
    }, []);

    const setLang = (l: Lang) => {
        setLangState(l);
        localStorage.setItem("forgive-lang", l);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
