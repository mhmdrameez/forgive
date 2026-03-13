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

    // Prompts per language
    const prompts: Record<string, string[]> = {
        en: ["Look into your eyes.", "You are safe.", "You are enough.", "Take a slow breath.", "You are doing your best.", "It's okay to feel this.", "Forgive yourself.", "You deserve kindness.", "Be gentle with yourself.", "You are stronger than you think.", "You survived difficult days.", "You are growing.", "You matter.", "You are not alone.", "Stay with yourself."],
        hi: ["अपनी आँखों में देखो।", "तुम सुरक्षित हो।", "तुम काफ़ी हो।", "धीरे से साँस लो।", "तुम अपना सर्वश्रेष्ठ कर रहे हो।", "यह महसूस करना ठीक है।", "खुद को माफ करो।", "तुम दयालुता के लायक हो।", "अपने आप से कोमल रहो।", "तुम सोचते हैं उससे ज़्यादा मज़बूत हो।", "तुमने कठिन दिन झेले हैं।", "तुम बढ़ रहे हो।", "तुम मायने रखते हो।", "तुम अकेले नहीं हो।", "अपने साथ रहो।"],
        ml: ["നിങ്ങളുടെ കണ്ണുകളിലേക്ക് നോക്കൂ.", "നിങ്ങൾ സുരക്ഷിതരാണ്.", "നിങ്ങൾ മതിയായവരാണ്.", "ഒരു നിദാനം ശ്വസിക്കൂ.", "നിങ്ങൾ മികച്ചത് ചെയ്യുന്നു.", "ഇത് അനുഭവിക്കുന്നത് ശരിയാണ്.", "സ്വയം ക്ഷമിക്കൂ.", "നിങ്ങൾ ദയ അർഹിക്കുന്നു.", " സ്വയം ദയ കാണിക്കൂ.", "നിങ്ങൾ ചിന്തിക്കുന്നതിലും ശക്തരാണ്.", "നിങ്ങൾ പ്രയാസകരമായ ദിവസങ്ങൾ അതിജീവിച്ചു.", "നിങ്ങൾ വളരുകയാണ്.", "നിങ്ങൾ പ്രധാനപ്പെട്ടവരാണ്.", "നിങ്ങൾ തനിച്ചല്ല.", "സ്വയം ഒപ്പം നിൽക്കൂ."],
        ar: ["انظر في عينيك.", "أنت بأمان.", "أنت كافٍ.", "خذ نفساً ببطء.", "أنت تبذل قصارى جهدك.", "لا بأس في الشعور بهذا.", "اسامح نفسك.", "تستحق اللطف.", "كن لطيفاً مع نفسك.", "أنت أقوى مما تعتقد.", "لقد نجوت من أيام صعبة.", "أنت تنمو.", "أنت مهم.", "لست وحدك.", "ابق مع نفسك."],
        fr: ["Regarde dans tes yeux.", "Tu es en sécurité.", "Tu es suffisant.", "Prends une inspiration lente.", "Tu fais de ton mieux.", "C'est normal de ressentir ça.", "Pardonne-toi.", "Tu mérites de la gentillesse.", "Sois doux avec toi-même.", "Tu es plus fort que tu ne le penses.", "Tu as surmonté des jours difficiles.", "Tu grandis.", "Tu comptes.", "Tu n'es pas seul.", "Reste avec toi-même."],
        ur: ["اپنی آنکھوں میں دیکھو۔", "تم محفوظ ہو۔", "تم کافی ہو۔", "آہستہ سانس لو۔", "تم اپنی بہترین کوشش کر رہے ہو۔", "یہ محسوس کرنا ٹھیک ہے۔", "خود کو معاف کرو۔", "تم مہربانی کے لائق ہو۔", "اپنے ساتھ نرم رہو۔", "تم سوچتے ہیں اس سے زیادہ مضبوط ہو۔", "تم نے مشکل دن گزارے ہیں۔", "تم بڑھ رہے ہو۔", "تم اہم ہو۔", "تم اکیلے نہیں ہو۔", "اپنے ساتھ رہو۔"],
        ta: ["உங்கள் கண்களில் பாருங்கள்.", "நீங்கள் பாதுகாப்பாக இருக்கிறீர்கள்.", "நீங்கள் போதுமானவர்கள்.", "மெதுவாக மூச்சு விடுங்கள்.", "நீங்கள் உங்கள் சிறந்ததை செய்கிறீர்கள்.", "இதை உணர்வது சரிதான்.", "உங்களை மன்னியுங்கள்.", "நீங்கள் அன்பிற்கு தகுதியானவர்கள்.", "உங்களிடம் மென்மையாக இருங்கள்.", "நீங்கள் நினைப்பதை விட வலிமையானவர்கள்.", "கடினமான நாட்களில் நீங்கள் உயிர்வாழ்ந்தீர்கள்.", "நீங்கள் வளர்கிறீர்கள்.", "நீங்கள் முக்கியமானவர்கள்.", "நீங்கள் தனியாக இல்லீர்கள்.", "உங்களுடன் இருங்கள்."],
        te: ["మీ కళ్ళలోకి చూడండి.", "మీరు సురక్షితంగా ఉన్నారు.", "మీరు సరిపోతారు.", "నెమ్మదిగా శ్వాస తీసుకోండి.", "మీరు మీ వంతు ప్రయత్నం చేస్తున్నారు.", "ఇలా అనిపించడం తప్పు కాదు.", "మిమ్మల్ని మీరు క్షమించుకోండి.", "మీరు దయకు అర్హులు.", "మీతో మీరు మృదువుగా ఉండండి.", "మీరు అనుకున్నదాని కంటే బలంగా ఉన్నారు.", "కష్టమైన రోజులను మీరు దాటారు.", "మీరు ఎదుగుతున్నారు.", "మీరు ముఖ్యమైనవారు.", "మీరు ఒంటరిగా లేరు.", "మీతో ఉండండి."],
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
