/**
 * Native in-app translations.
 * Languages: English, Hindi, Malayalam, Arabic, Tamil, Telugu
 */
export type Lang = "en" | "hi" | "ml" | "ar" | "ta" | "te";

const translations = {
    // ---- BOTTOM NAV ----
    nav_home: { en: "Home", hi: "घर", ml: "ഹോം", ar: "الرئيسية", ta: "முகப்பு", te: "హోమ్" },
    nav_heal: { en: "Peace", hi: "शांति", ml: "സമാധാനം", ar: "هدوء", ta: "அமைதி", te: "శాంతి" },
    nav_stars: { en: "Stars", hi: "तारे", ml: "നക്ഷത്രം", ar: "نجوم", ta: "விண்மீன்", te: "నక్షత్రాలు" },
    nav_letters: { en: "Letters", hi: "पत्र", ml: "കത്തുകൾ", ar: "رسائل", ta: "கடிதம்", te: "లేఖలు" },
    nav_look: { en: "Look", hi: "देखो", ml: "നോക്കാം", ar: "انظر", ta: "பார்", te: "చూడు" },

    // ---- HOME ----
    home_greeting: { en: "Hello.", hi: "नमस्ते।", ml: "ഹലോ.", ar: "مرحباً.", ta: "வணக்கம்.", te: "హలో." },
    home_subtitle: { en: "A safe place to let go of bad feelings. Everything is private.", hi: "बुरी बातों को भूलने की सुरक्षित जगह।", ml: "സങ്കടങ്ങൾ മറക്കാൻ ഒരു സുരക്ഷിത സ്ഥലം.", ar: "مكان آمن للتخلص من المشاعر السيئة.", ta: "கவலைகளை விட ஒரு பாதுகாப்பான இடம்.", te: "బాధను వదులుకోవడానికి సురక్షితమైన స్థలం." },
    home_vault_badge: { en: "Safe Vault Active", hi: "सुरक्षित वॉल्ट चालू", ml: "സേഫ് ലോക്ക് ഉണ്ട്", ar: "الخزنة مفعلة", ta: "பாதுకాப்பு தயார்", te: "సురక్షిత లాక్ ఉంది" },
    home_cta: { en: "Start", hi: "शुरू करें", ml: "തുടങ്ങാം", ar: "ابدأ", ta: "தொடங்கு", te: "మొదలుపెట్టు" },

    // ---- PRACTICE ----
    practice_step1_title: { en: "Step 1", hi: "स्टेप 1", ml: "ഒന്ന്", ar: "خطوة ١", ta: "படி 1", te: "స్టెప్ 1" },
    practice_step1_sub: { en: "What happened? Say it simply.", hi: "क्या हुआ? सादगी से बताएं।", ml: "എന്ത് പറ്റി? പറയൂ.", ar: "ماذا حدث؟", ta: "என்ன நடந்தது? சொல்லுங்கள்.", te: "ఏం జరిగింది? చెప్పు." },
    practice_step2_title: { en: "How big?", hi: "कितना बड़ा?", ml: "എത്ര വലുത്?", ar: "ما حجمه؟", ta: "எவ்வளவு?", te: "ఎంత?" },
    practice_step2_sub: { en: "How big is the sad feeling? (1-10)", hi: "दुख कितना बड़ा है? (1-10)", ml: "സങ്കടം എത്ര വലുതാണ്? (1-10)", ar: "ما مدى الحزن؟ (1-10)", ta: "சங்கடம் எவ்வளவு? (1-10)", te: "నీ బాధ ఎంత? (1-10)" },
    practice_step3_title: { en: "Write it", hi: "लिखें", ml: "എഴുതൂ", ar: "اكتب", ta: "எழுது", te: "రాయి" },
    practice_step3_sub: { en: "Write your feelings. It helps.", hi: "अपनी मन की बात लिखें।", ml: "മനസ്സിലുള്ളത് എഴുതൂ.", ar: "اكتب ما تشعر به.", ta: "மறைக்காமல் எழுதுங்கள்.", te: "నీ మనసులో మాట రాయి." },
    practice_step4_title: { en: "Ready?", hi: "तैयार?", ml: "തയ്യാറാണോ?", ar: "مستعد؟", ta: "தயாரா?", te: "సిద్ధమా?" },
    practice_step4_sub: { en: "Are you ready to let this go?", hi: "क्या आप इसे भूलने को तैयार हैं?", ml: "ഇത് മാറ്റാൻ റെഡിയാണോ?", ar: "هل أنت مستعد للمسامحة؟", ta: "இதை மறக்கலாமா?", te: "దీన్ని వదిలేయడానికి సిద్ధమా?" },
    practice_step4_btn: { en: "Yes, go", hi: "हाँ, चलो", ml: "അതെ, പോകാം", ar: "نعم", ta: "சரி, விடு", te: "అవును, వదిలేయ్" },
    practice_step5_title: { en: "Now?", hi: "अब?", ml: "ഇപ്പോൾ?", ar: "الآن؟", ta: "இப்போது?", te: "ఇప్పుడా?" },
    practice_step5_sub: { en: "How do you feel now? (1-10)", hi: "अब कैसा लग रहा है? (1-10)", ml: "ഇപ്പോൾ എങ്ങനെ ഉണ്ട്? (1-10)", ar: "كيف تشعر الآن؟ (1-10)", ta: "இப்போது நிலவரம்? (1-10)", te: "ఇప్పుడు ఎలా ఉంది? (1-10)" },
    practice_fine: { en: "Good", hi: "अच्छा", ml: "നല്ലത്", ar: "بخير", ta: "நல்லது", te: "బాగుంది" },
    practice_heavy: { en: "Sad", hi: "दुखी", ml: "സങ്കടം", ar: "حزين", ta: "வருத்தம்", te: "బాధ" },
    practice_back: { en: "Back", hi: "पीछे", ml: "തിരികെ", ar: "رجوع", ta: "பின்", te: "వెనక్కి" },
    practice_continue: { en: "Next", hi: "आगे", ml: "അടുത്തത്", ar: "التالي", ta: "அடுத்தது", te: "తరువాత" },
    practice_complete: { en: "Finish", hi: "खत्म", ml: "മതി", ar: "إنهاء", ta: "முடி", te: "పూర్తి" },
    practice_done_title: { en: "Great!", hi: "बहुत अच्छे!", ml: "കൊള്ളാം!", ar: "رائع!", ta: "நல்லது!", te: "మేలు!" },
    practice_done_sub: { en: "You did it! You will feel better.", hi: "आपने कर दिखाया! आप ठीक होंगे।", ml: "നന്നായി! ഇനി സങ്കടം മാറും.", ar: "أحسنت! ستكون بخير.", ta: "வெற்றி! எல்லாம் சரியாகும்.", te: "బాగుంది! అంతా సర్దుకుంటుంది." },
    practice_return_home: { en: "Home", hi: "घर", ml: "തിരികെ", ar: "الرئيسية", ta: "முகப்பு", te: "హోమ్" },
    practice_type_here: { en: "Type here...", hi: "यहाँ लिखें...", ml: "ഇവിടെ എഴുതൂ...", ar: "اكتب هنا...", ta: "எழுது...", te: "రాయి..." },

    // ---- CEREMONY ----
    ceremony_title: { en: "Let go", hi: "भूल जाना", ml: "മറക്കാം", ar: "دعها تذهب", ta: "விடு", te: "వదులు" },
    ceremony_sub: { en: "Put your sad thoughts in the stars.", hi: "अपने दुख को तारों में डाल दें।", ml: "സങ്കടങ്ങൾ നക്ഷത്രത്തിലേക്ക് വിടൂ.", ar: "ضع حزنك في النجوم.", ta: "கவலைகளை விண்மீனில் விடுங்கள்.", te: "బాధను నక్షత్రాలలో వేయి." },
    ceremony_placeholder: { en: "I let go of...", hi: "मैं भूलता हूं...", ml: "ഞാൻ വിടുന്നു...", ar: "أنا أترك...", ta: "நான் விடுகிறேன்...", te: "నేను వదులుతున్నాను..." },
    ceremony_ready: { en: "Go!", hi: "चलो!", ml: "പോകാം!", ar: "انطلق!", ta: "தொடங்கு!", te: "వెళ్ళు!" },
    ceremony_drag: { en: "← Pull to stars →", hi: "← तारों की ओर खींचें →", ml: "← നക്ഷത്രത്തിലേക്ക് വലിക്കൂ →", ar: "← اسحب للنجوم →", ta: "← இழுத்துவிடு →", te: "← నక్షత్రాల వైపు లాగు →" },
    ceremony_done: { en: "It's gone.", hi: "यह गया।", ml: "അത് പോയി.", ar: "لقد رحلت.", ta: "போய்விட்டது.", te: "వెళ్ళిపోయింది." },
    ceremony_done_sub: { en: "You are free!", hi: "अब आप आज़ाद हैं!", ml: "ഇനി സങ്കടം വേണ്ട!", ar: "أنت حر الآن!", ta: "இப்போது ஜாலி!", te: "నువ్వు స్వేచ్ఛగా ఉన్నావు!" },
    ceremony_new: { en: "Again", hi: "फिर से", ml: "വീണ്ടും", ar: "مرة أخرى", ta: "மீண்டும்", te: "మళ్ళీ" },

    // ---- MIRROR ----
    mirror_private: { en: "Safe", hi: "सुरक्षित", ml: "സേഫ്", ar: "آمن", ta: "பாதுகாப்பு", te: "సురక్షితం" },
    mirror_cam_sub: { en: "No one can see you.", hi: "कोई आपको नहीं देख सकता।", ml: "ആരും കാണില്ല.", ar: "لا أحد يراك.", ta: "யாரும் பார்க்க முடியாது.", te: "ఎవరూ చూడలేరు." },
    mirror_enable_cam: { en: "Camera", hi: "कैमरा", ml: "ക്യാമറ", ar: "كاميرا", ta: "கேமரா", te: "కెమెరా" },

    // ---- EMPATHY ----
    empathy_step1: { en: "Think like a movie.", hi: "एक फिल्म की तरह सोचें।", ml: "ഒരു സിനിമ പോലെ കാണൂ.", ar: "تخيلها كفيلم.", ta: "படமாகப் பாருங்கள்.", te: "సినిమాలా ఊహించుకో." },
    empathy_step2: { en: "Why were they sad?", hi: "वे क्यों दुखी थे?", ml: "അവർക്ക് സങ്കടം ഉണ്ടാവാം.", ar: "لماذا كانوا حزانى؟", ta: "ஏன் வருத்தப்பட்டார்?", te: "వారు ఎందుకు బాధపడ్డారు?" },
    empathy_step3: { en: "Maybe they hurt too.", hi: "शायद उन्हें भी दुख था।", ml: "അവർക്കും വേദന കാണും.", ar: "ربما كانوا يشعرون بالألم.", ta: "அவர்களுக்கும் வலிக்கலாம்.", te: "బహుశా వారికి కూడా నొప్పి ఉందేమో." },
    empathy_step4: { en: "We all make mistakes.", hi: "गलती सबसे होती है।", ml: "തെറ്റ് എല്ലാവർക്കും പറ്റും.", ar: "الكل يخطئ.", ta: "தவறு இயற்கை.", te: "అందరూ తప్పులు చేస్తారు." },
    empathy_step5: { en: "Understanding helps.", hi: "समझने से सुकून मिलेगा।", ml: "ക്ഷമിക്കുന്നത് നല്ലതാണ്.", ar: "الفهم يساعدك.", ta: "புரிந்துகொண்டால் நிம்மதி.", te: "క్షమించడం మంచిది." },

    // ---- LETTERS ----
    letters_title: { en: "My Letters", hi: "मेरे पत्र", ml: "എന്റെ കത്തുകൾ", ar: "رسائلي", ta: "என் கடிதங்கள்", te: "నా లేఖలు" },
    letters_new: { en: "New Letter", hi: "नया पत्र", ml: "പുതിയ കത്ത്", ar: "رسالة جديدة", ta: "புதிய கடிதம்", te: "కొత్త లేఖ" },
    letters_who_for: { en: "Who for?", hi: "किसके लिए?", ml: "ആർക്ക്?", ar: "لمن؟", ta: "யாருக்கு?", te: "ఎవరికి?" },
    letters_write: { en: "Write here...", hi: "यहाँ लिखें...", ml: "ഇവിടെ എഴുതൂ...", ar: "اكتب هنا...", ta: "எழுது...", te: "రాయి..." },
    letters_save: { en: "Save", hi: "सहेजें", ml: "സേവ്", ar: "حفظ", ta: "சேமி", te: "సేവ്" },
    letters_secret: { en: "Private", hi: "निजी", ml: "രഹസ്യം", ar: "سر", ta: "தனியார்", te: "రహస్యం" },
    letters_empty: { en: "Write a letter.", hi: "एक पत्र लिखें।", ml: "ഒരു കത്ത് എഴുതൂ.", ar: "اكتب رسالة.", ta: "கடிதம் எழுது.", te: "లేఖ రాయి." },

    // ---- PRIVACY LOCK ----
    lock_enter_title: { en: "PIN", hi: "PIN", ml: "PIN നൽകൂ", ar: "أدخل PIN", ta: "PIN போடு", te: "PIN కొట్టు" },
    lock_setup_title: { en: "Create PIN", hi: "PIN बनाएं", ml: "PIN ഉണ്ടാക്കൂ", ar: "إنشاء PIN", ta: "PIN உருவாக்கு", te: "PIN సృష్టించు" },
    lock_confirm_title: { en: "Confirm PIN", hi: "PIN पक्का करें", ml: "ഒന്നുകൂടി", ar: "تأكيد PIN", ta: "PIN உறுதி செய்", te: "మళ్ళీ కొట్టు" },
    lock_wrong: { en: "Wrong PIN", hi: "गलत PIN", ml: "തെറ്റായ PIN", ar: "PIN خاطئ", ta: "தவறான PIN", te: "తప్పు PIN" },
    lock_enter_sub: { en: "Safe.", hi: "सुरक्षित।", ml: "സേഫ് ആണ്.", ar: "آمن.", ta: "பாதுகாப்பு.", te: "సురక్షితం." },
    lock_setup_sub: { en: "Choose 6 numbers.", hi: "6 नंबर चुनें।", ml: "6 അക്കം നൽകൂ.", ar: "اختر ٦ أرقام.", ta: "6 எண்கள்.", te: "6 అంകെలు." },
    lock_confirm_sub: { en: "Type again.", hi: "फिर से लिखें।", ml: "ഒന്നുകൂടി.", ar: "أعد الكتابة.", ta: "மீண்டும்.", te: "మళ్ళీ." },
    lock_badge: { en: "Safe", hi: "सुरक्षित", ml: "സേഫ്", ar: "آمن", ta: "பாதுകാப்பு", te: "భద్రం" },
} as const;

export type TranslationKey = keyof typeof translations;

/** Returns the translated string for a given key and language */
export function t(key: TranslationKey, lang: Lang): string {
    const entry = translations[key];
    return (entry as any)[lang] ?? (entry as any)["en"];
}

export default translations;
