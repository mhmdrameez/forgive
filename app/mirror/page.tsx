"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CameraOff, Heart, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function Mirror() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [currentPrompt, setCurrentPrompt] = useState(0);
    const [isHydrated, setIsHydrated] = useState(false);
    const { lang } = useLanguage();

    // SIMPLE Prompts per language
    const prompts: Record<string, string[]> = {
        en: ["Look into your eyes.", "You are safe here.", "You are enough.", "Take a slow breath.", "It's okay to feel this.", "Forgive yourself.", "You are doing your best.", "Be kind to yourself.", "You are growing.", "You matter."],
        hi: ["अपनी आँखों में देखें।", "आप यहाँ सुरक्षित हैं।", "आप काफ़ी हैं।", "धीरे से साँस लें।", "महसूस करना ठीक है।", "खुद को माफ़ करें।", "कोशिश जारी रखें।", "खुद पर दया करें।", "आप बढ़ रहे हैं।", "आप मायने रखते हैं।"],
        ml: ["നിങ്ങളുടെ കണ്ണുകളിലേക്ക് നോക്കൂ.", "നിങ്ങൾ ഇവിടെ സുരക്ഷിതരാണ്.", "നിങ്ങൾ മതിയായവരാണ്.", "സാവധാനം ശ്വസിക്കൂ.", "ഇത് അനുഭവപ്പെടുന്നത് കുഴപ്പമില്ല.", "സ്വയം ക്ഷമിക്കൂ.", "നിങ്ങൾ മികച്ചത് ചെയ്യുന്നു.", "സ്വയം സ്നേഹിക്കൂ.", "നിങ്ങൾ വളരുകയാണ്.", "നിങ്ങൾ വിലപ്പെട്ടതാണ്."],
        ar: ["انظر في عينيك.", "أنت في أمان هنا.", "أنت كافٍ كما أنت.", "خذ نفساً هادئاً.", "لا بأس في هذا الشعور.", "سامح نفسك.", "أنت تبذل جهدك.", "كن لطيفاً مع نفسك.", "أنت تنمو وتتحسن.", "أنت مهم جداً."],
        ta: ["கண்களை பாருங்கள்.", "நீங்கள் பாதுகாப்பானவர்.", "நீங்கள் போதுமானவர்.", "மெதுவாக சுவாசியுங்கள்.", "இதை உணரலாம்.", "உங்களை மன்னியுங்கள்.", "முயற்சி செய்யுங்கள்.", "அன்பாக இருங்கள்.", "வளர்கிறீர்கள்.", "நீங்கள் முக்கியம்."],
        te: ["నీ కళ్ళలోకి చూసుకో.", "నువ్వు సురక్షితంగా ఉన్నావు.", "నువ్వు సరిపోతావు.", "మెల్లగా శ్వాస తీసుకో.", "ఇలా అనిపించడం పర్వాలేదు.", "నిన్ను నువ్వు క్షమించుకో.", "నువ్వు ప్రయత్నిస్తున్నావు.", "నీపై దయగా ఉండు.", "నువ్వు ఎదుగుతున్నావు.", "నువ్వు ముఖ్యం."],
    };

    const currentLangPrompts = prompts[lang] ?? prompts["en"];

    useEffect(() => {
        setIsHydrated(true);
        let stream: MediaStream | null = null;
        async function startCamera() {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
                if (videoRef.current) videoRef.current.srcObject = stream;
                setHasPermission(true);
            } catch {
                setHasPermission(false);
            }
        }
        startCamera();
        return () => { if (stream) stream.getTracks().forEach(track => track.stop()); };
    }, []);

    useEffect(() => {
        if (hasPermission) {
            const interval = setInterval(() => {
                setCurrentPrompt((prev) => (prev + 1) % currentLangPrompts.length);
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [hasPermission, currentLangPrompts.length]);

    if (!isHydrated) return null;

    return (
        <div className="relative min-h-[90vh] bg-[#0a0a0a] overflow-hidden flex flex-col">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-gradient-to-b from-[var(--primary)]/10 to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
            </div>

            {hasPermission === false && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-20">
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                        <CameraOff size={32} className="text-[var(--nav-inactive)]" />
                    </div>
                    <h2 className="text-2xl font-light text-white mb-4 tracking-tight">{t("mirror_private", lang)}</h2>
                    <p className="text-[var(--nav-inactive)] max-w-xs leading-relaxed font-light whitespace-pre-line">
                        {t("mirror_cam_sub", lang)}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 px-6 py-2 border border-white/20 rounded-full text-sm text-white/60 hover:text-white hover:border-white/40 transition-all"
                    >
                        {t("mirror_enable_cam", lang)}
                    </button>
                </motion.div>
            )}

            <div className={`absolute inset-0 transition-all duration-1000 ${hasPermission ? "opacity-100" : "opacity-0"}`}>
                <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover scale-x-[-1] grayscale-[30%] contrast-[1.1]" />
                <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
                <div className="absolute inset-0 border-[20px] sm:border-[40px] border-black/40 pointer-events-none" />
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
            </div>

            {hasPermission && (
                <div className="relative z-10 flex-1 flex flex-col items-center justify-between p-8 pt-12 text-center">
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/5 text-[10px] uppercase tracking-[0.2em] text-white/50">
                        <ShieldCheck size={12} className="text-emerald-500/50" />
                        {t("mirror_private", lang)}
                    </motion.div>

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
                                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }}>
                                        <Heart size={20} className="text-[var(--primary)] fill-[var(--primary)]/20" />
                                    </motion.div>
                                </div>
                                <h1 className="text-3xl sm:text-4xl font-light text-white leading-tight drop-shadow-2xl tracking-tight italic px-4">
                                    {currentLangPrompts[currentPrompt]}
                                </h1>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="flex flex-col items-center gap-3">
                        <div className="w-1 h-12 bg-gradient-to-b from-white/40 to-transparent rounded-full" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">{t("mirror_private", lang)}</span>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
