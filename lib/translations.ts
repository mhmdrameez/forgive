/**
 * Native in-app translations.
 * Languages: English, Hindi, Malayalam, Arabic, Tamil, Telugu
 */
export type Lang = "en" | "hi" | "ml" | "ar" | "ta" | "te";

const translations = {
    // ---- BOTTOM NAV ----
    nav_home: { en: "Home", hi: "घर", ml: "വീട്", ar: "الرئيسية", ta: "முகப்பு", te: "హోమ్" },
    nav_heal: { en: "Heal", hi: "शांति", ml: "ശാന്തി", ar: "شفاء", ta: "குணம்", te: "శాంతి" },
    nav_stars: { en: "Stars", hi: "तारे", ml: "നക്ഷത്രം", ar: "نجوم", ta: "விண்மீன்", te: "నక్షత్రాలు" },
    nav_letters: { en: "Letters", hi: "पत्र", ml: "കത്തുകൾ", ar: "رسائل", ta: "கடிதம்", te: "లేఖలు" },
    nav_look: { en: "Look", hi: "देखो", ml: "നോക്കൂ", ar: "انظر", ta: "பார்", te: "చూడు" },

    // ---- HOME ----
    home_greeting: { en: "Hello.", hi: "नमस्ते।", ml: "ഹലോ.", ar: "مرحباً.", ta: "வணக்கம்.", te: "హలో." },
    home_subtitle: { en: "A safe place to let go of bad feelings. Everything is private.", hi: "बुरी बातों को भूलने की सुरक्षित जगह।", ml: "സങ്കടങ്ങൾ മറക്കാൻ ഒരു സുരക്ഷിത സ്ഥലം.", ar: "مكان آمن للتخلص من المشاعر السيئة.", ta: "கவலைகளை விட ஒரு பாதுகாப்பான இடம்.", te: "బాధను వదులుకోవడానికి సురక్షితమైన స్థలం." },
    home_vault_badge: { en: "Safe Vault Active", hi: "सुरक्षित वॉल्ट चालू", ml: "സേഫ് ലോക്ക് ഉണ്ട്", ar: "الخزنة مفعلة", ta: "பாதுకాப்பு தயார்", te: "సురక్షిత లాక్ ఉంది" },
    home_cta: { en: "Start", hi: "शुरू करें", ml: "തുടങ്ങാം", ar: "ابدأ", ta: "தொடங்கு", te: "మొదలుపెట్టు" },

    // ---- PRACTICE ----
    practice_step1_title: { en: "Step 1", hi: "स्टेप 1", ml: "സ്റ്റെപ്പ് 1", ar: "خطوة ١", ta: "படி 1", te: "స్టెప్ 1" },
    practice_step1_sub: { en: "What made you sad? Say it simply.", hi: "क्या हुआ? सादगी से बताएं।", ml: "എന്താണ് സംഭവിച്ചത്? പറയൂ.", ar: "ما الذي أحزنك؟", ta: "என்ன நடந்தது? சொல்லுங்கள்.", te: "ఏం జరిగింది? చెప్పు." },
    practice_step2_title: { en: "How big?", hi: "कितना बड़ा?", ml: "എത്ര വലുത്?", ar: "ما مدى الحزن؟", ta: "எவ்வளவு?", te: "ఎంత?" },
    practice_step2_sub: { en: "How big is the sad feeling? (1-10)", hi: "दुख कितना बड़ा है? (1-10)", ml: "ഈ സങ്കടം എത്ര വലുതാണ്? (1-10)", ar: "ما مدى كبر هذا الشعور؟ (1-10)", ta: "சங்கடம் எவ்வளவு பெரியது? (1-10)", te: "ఈ బాధ ఎంత పెద్దది? (1-10)" },
    practice_step3_title: { en: "Write it", hi: "लिखें", ml: "എഴുതൂ", ar: "اكتب الشعور", ta: "எழுது", te: "రాయి" },
    practice_step3_sub: { en: "Write your feelings. It helps to let it out.", hi: "अपनी मन की बात लिखें।", ml: "നിങ്ങളുടെ സങ്കടം ഇവിടെ എഴുതൂ.", ar: "اكتب مشاعرك. ذلك يساعدك.", ta: "மனதை திறந்து எழுதுங்கள்.", te: "నీ మనసులో మాట రాయి." },
    practice_step4_title: { en: "Ready?", hi: "तैयार?", ml: "തയ്യാറാണോ?", ar: "مستعد؟", ta: "தயારા?", te: "సిద్ధమా?" },
    practice_step4_sub: { en: "Are you ready to let this go?", hi: "क्या आप इसे भूलने को तैयार हैं?", ml: "ഇത് മാറ്റാൻ തയ്യാറാണോ?", ar: "هل أنت مستعد للتخلي عن هذا الشئ؟", ta: "இதை மறக்க தயாரா?", te: "దీన్ని వదిలేయడానికి సిద్ధంగా ఉన్నావా?" },
    practice_step4_btn: { en: "Yes, let go", hi: "हाँ, जाने दो", ml: "അതെ, വിടാം", ar: "نعم، اتركها", ta: "ஆம், விடு", te: "అవును, వదిలేయ్" },
    practice_step5_title: { en: "Now?", hi: "अब?", ml: "ഇപ്പോൾ?", ar: "الآن؟", ta: "இப்போது?", te: "ఇప్పుడా?" },
    practice_step5_sub: { en: "How do you feel now? (1-10)", hi: "अब कैसा लग रहा है? (1-10)", ml: "ഇപ്പോൾ എങ്ങനെ തോന്നുന്നു? (1-10)", ar: "كيف تشعر الآن؟ (1-10)", ta: "இப்போது எப்படி இருக்கிறது? (1-10)", te: "ఇప్పుడు ఎలా అనిపిస్తుంది? (1-10)" },
    practice_fine: { en: "Good", hi: "अच्छा", ml: "നല്ലത്", ar: "بخير", ta: "நல்லது", te: "బాగుంది" },
    practice_heavy: { en: "Sad", hi: "दुखी", ml: "സങ്കടം", ar: "حزين", ta: "வருத்தம்", te: "బాధ" },
    practice_back: { en: "Back", hi: "पीछे", ml: "തിരിച്ചൂ", ar: "رجوع", ta: "திரும்பு", te: "వెనక్కి" },
    practice_continue: { en: "Next", hi: "आगे", ml: "അടുത്തത്", ar: "التالي", ta: "அடுத்தது", te: "తరువాత" },
    practice_complete: { en: "Finish", hi: "खत्म", ml: "പൂർത്തി", ar: "نهاية", ta: "முடி", te: "పూర్తి" },
    practice_done_title: { en: "Great job!", hi: "बहुत अच्छे!", ml: "മിടുക്കൻ!", ar: "عمل رائع!", ta: "சபாஷ்!", te: "చాలా బాగుంది!" },
    practice_done_sub: { en: "You did it! You will feel better soon.", hi: "आपने कर दिखाया! आप जल्दी ठीक होंगे।", ml: "സൂപ്പർ! സങ്കടം ഉടനെ മാറും.", ar: "لقد فعلتها! ستشعر بتحسن قريباً.", ta: "வெற்றி! சீக்கிரம் சரியாகிவிடும்.", te: "నువ్వు సాధించావు! త్వరలోనే బాగుంటుంది." },
    practice_return_home: { en: "Go Home", hi: "घर जाएं", ml: "തിരികെ", ar: "الرئيسية", ta: "முகப்பு", te: "హోమ్‌కి" },
    practice_type_here: { en: "Type here...", hi: "यहाँ लिखें...", ml: "ഇവിടെ എഴുതൂ...", ar: "اكتب هنا...", ta: "எழுது...", te: "రాయి..." },

    // ---- CEREMONY ----
    ceremony_title: { en: "Letting Go", hi: "भूल जाना", ml: "വിടാം എല്ലാം", ar: "دعها تذهب", ta: "விடுவி", te: "వదులు" },
    ceremony_sub: { en: "Put your sad thoughts in the stars.\nType what you want to let go of.", hi: "अपने दुख को तारों में डाल दें।\nजो भूलना है वो लिखें।", ml: "സങ്കടങ്ങൾ നക്ഷത്രത്തിലേക്ക് വിടൂ.\nമറക്കാൻ ആഗ്രഹിക്കുന്നത് എഴുതൂ.", ar: "ضع أفكارك السيئة في النجوم.\nاكتب ما تريد تركه.", ta: "கவலைகளை விண்மீனில் எறியுங்கள்.\nமறக்க வேண்டியதை எழுதுங்கள்.", te: "బాధను నక్షత్రాలలో వేయి.\nవదలాలనుకున్నది రాయి." },
    ceremony_placeholder: { en: "I let go of...", hi: "मैं भूलता हूं...", ml: "ഞാൻ വിടുന്നു...", ar: "أنا أترك...", ta: "நான் விடுகிறேன்...", te: "నేను వదులుతున్నాను..." },
    ceremony_ready: { en: "Go!", hi: "चलो!", ml: "പോകാം!", ar: "انطلق!", ta: "தொடங்கு!", te: "వెళ్ళు!" },
    ceremony_drag: { en: "← Pull to the stars →", hi: "← तारों की ओर खींचें →", ml: "← നക്ഷത്രത്തിലേക്ക് വലിക്കൂ →", ar: "← اسحب للنجوم →", ta: "← இழுத்துவிடு →", te: "← నక్షత్రాల వైపు లాగు →" },
    ceremony_done: { en: "It's gone.", hi: "यह गया।", ml: "അത് പോയി.", ar: "لقد رحلت.", ta: "போய்விட்டது.", te: "వెళ్ళిపోయింది." },
    ceremony_done_sub: { en: "The sad thought is gone. You are free!", hi: "दुख गया। आप अब आज़ाद हैं!", ml: "സങ്കടം മാറി. നിങ്ങൾ ഹാപ്പിയാണ്!", ar: "اختفت الفكرة الحزينة. أنت حر!", ta: "வருத்தம் போனது. நீங்கள் சுதந்திரம்!", te: "బాధ వెళ్ళిపోయింది. నువ్వు స్వేచ్ఛగా ఉన్నావు!" },
    ceremony_new: { en: "Again", hi: "फिर से", ml: "വീണ്ടും", ar: "مرة أخرى", ta: "மீண்டும்", te: "మళ్ళీ" },

    // ---- MIRROR ----
    mirror_private: { en: "Safe & Private", hi: "सुरक्षित", ml: "സുരക്ഷിതം", ar: "آمن و خاص", ta: "பாதுகாப்பு", te: "సురక్షితం" },
    mirror_cam_sub: { en: "Camera stays on your device.\nNo one can see you.", hi: "कैमरा सुरक्षित है।\nकोई आपको नहीं देख सकता।", ml: "ക്യാമറ സേഫ് ആണ്.\nആരും കാണുന്നില്ല.", ar: "الكاميرا على جهازك.\nلا أحد يمكنه رؤيتك.", ta: "கேமரா பாதுகாப்பானது.\nயாரும் பார்க்க முடியாது.", te: "కెమెరా సురక్షితం.\nఎవరూ చూడలేరు." },
    mirror_enable_cam: { en: "Start Camera", hi: "कैमरा शुरू करें", ml: "ക്യാമറ ഓൺ", ar: "شغل الكاميرا", ta: "கேமரா", te: "కెమెరా ఆన్" },

    // ---- EMPATHY ----
    empathy_step1: { en: "Imagine you are watching a movie of what happened.", hi: "सोचो कि तुम एक फिल्म देख रहे हो।", ml: "നടന്ന കാര്യങ്ങൾ ഒരു സിനിമ പോലെ കാണൂ.", ar: "تخيل أنك تشاهد فيلماً.", ta: "நடந்ததை ஒரு படமாகப் பாருங்கள்.", te: "జరిగినదాన్ని ఒక సినిమాలా ఊహించుకో." },
    empathy_step2: { en: "Why was the other person sad or angry?", hi: "दूसरा व्यक्ति क्यों गुस्सा था?", ml: "ആ വ്യക്തി എന്തുകൊണ്ട് ദേഷ്യപ്പെട്ടു?", ar: "لماذا كان الشخص الآخر حزيناً؟", ta: "அடுத்தவர் ஏன் கோபப்பட்டார்?", te: "అవతలి వ్యక్తి ఎందుకు కోపంగా ఉన్నారు?" },
    empathy_step3: { en: "Maybe they were hurting inside too.", hi: "शायद उन्हें भी अंदर दर्द था।", ml: "അവർക്കും ഉള്ളിൽ ഭയങ്കര സങ്കടം ഉണ്ടാവാം.", ar: "ربما كانوا يشعرون بالألم في الداخل أيضاً.", ta: "அவர்களுக்கும் உள்ளே கவலையாக இருந்திருக்கலாம்.", te: "బహుశా వారికి కూడా లోపల బాధగా ఉందేమో." },
    empathy_step4: { en: "Everyone makes mistakes sometimes.", hi: "गलती सबसे होती है।", ml: "എല്ലാവർക്കും തെറ്റ് സംഭവിക്കാം.", ar: "الجميع يرتكبون الأخطاء.", ta: "தவறு செய்வது இயற்கை.", te: "అందరూ తప్పులు చేస్తారు." },
    empathy_step5: { en: "Understanding helps you feel better.", hi: "समझने से आपको अच्छा लगेगा।", ml: "മനസ്സിലാക്കുന്നത് നിങ്ങളെ സഹായിക്കും.", ar: "الفهم يساعدك لتشعر بتحسن.", ta: "புரிந்துகொள்வது பலம் தரும்.", te: "అర్థం చేసుకోవడం వల్ల నీకు బాగుంటుంది." },

    // ---- LETTERS ----
    letters_title: { en: "My Secrets", hi: "मेरे राज़", ml: "രഹസ്യങ്ങൾ", ar: "أسراري", ta: "இரகசியங்கள்", te: "నా రహస్యాలు" },
    letters_new: { en: "New Letter", hi: "नया पत्र", ml: "പുതിയ കത്ത്", ar: "رسالة جديدة", ta: "புதிய கடிதம்", te: "కొత్త లేఖ" },
    letters_who_for: { en: "Who for?", hi: "किसके लिए?", ml: "ആർക്ക്?", ar: "لمن؟", ta: "யாருக்கு?", te: "ఎవరికి?" },
    letters_write: { en: "Write here...", hi: "यहाँ लिखें...", ml: "ഇവിടെ എഴുതൂ...", ar: "اكتب هنا...", ta: "எழுது...", te: "రాయి..." },
    letters_save: { en: "Save", hi: "सहेजें", ml: "സേവ്", ar: "حفظ", ta: "சேமி", te: "సేవ్" },
    letters_secret: { en: "Secret", hi: "राज़", ml: "രഹസ്യം", ar: "سر", ta: "இரகசியம்", te: "రహస్యం" },
    letters_empty: { en: "Write your first secret.", hi: "अपना पहला राज़ लिखें।", ml: "ആദ്യ കത്ത് എഴുതാം.", ar: "لا رسائل حتى الآن.", ta: "எழுத தொடங்குங்கள்.", te: "నీ మొదటి రహస్యం రాయి." },

    // ---- PRIVACY LOCK ----
    lock_enter_title: { en: "Enter PIN", hi: "PIN डालें", ml: "PIN നൽകൂ", ar: "أدخل PIN", ta: "PIN போடு", te: "PIN నమోదు చేయి" },
    lock_setup_title: { en: "Create PIN", hi: "PIN बनाएं", ml: "PIN ഉണ്ടാക്കൂ", ar: "إنشاء PIN", ta: "PIN உருவாக்கு", te: "PIN సృష్టించు" },
    lock_confirm_title: { en: "Confirm PIN", hi: "PIN पक्का करें", ml: "PIN ഉറപ്പിക്കൂ", ar: "تأكيد PIN", ta: "PIN உறுதி செய்", te: "PIN ఖరారు చేయి" },
    lock_wrong: { en: "Wrong PIN", hi: "गलत PIN", ml: "തെറ്റായ PIN", ar: "PIN خاطئ", ta: "தவறான PIN", te: "తప్పు PIN" },
    lock_enter_sub: { en: "Safe and encrypted.", hi: "सुरक्षित और गुप्त।", ml: "സേഫ് ആണ്.", ar: "آمن و مشفر.", ta: "பாதுகாப்பானது.", te: "సురక్షితమైనది." },
    lock_setup_sub: { en: "Pick 6 numbers.", hi: "6 नंबर चुनें।", ml: "6 അക്കം മതി.", ar: "اختر ٦ أرقام.", ta: "6 எண்கள்.", te: "6 అంకెలు." },
    lock_confirm_sub: { en: "Type again.", hi: "फिर से लिखें।", ml: "ഒന്നുകൂടി ടൈപ്പ് ചെയ്യൂ.", ar: "أعد الكتابة.", ta: "மீண்டும்.", te: "మళ్ళీ రాయి." },
    lock_badge: { en: "Safe Vault Active", hi: "वॉल्ट चालू", ml: "സേഫ് ലോക്ക്", ar: "الخزنة مفعلة", ta: "பாதுகாப்பு", te: "సురక్షితంగా ఉంది" },
} as const;

export type TranslationKey = keyof typeof translations;

/** Returns the translated string for a given key and language */
export function t(key: TranslationKey, lang: Lang): string {
    const entry = translations[key];
    return (entry as any)[lang] ?? (entry as any)["en"];
}

export default translations;
