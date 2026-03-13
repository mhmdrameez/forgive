/**
 * Native in-app translations for English, Hindi, and Malayalam.
 * Replace Google Translate with proper static translations.
 */
export type Lang = "en" | "hi" | "ml";

const translations = {
    // ---- BOTTOM NAV ----
    nav_home: { en: "Home", hi: "होम", ml: "ഹോം" },
    nav_heal: { en: "Heal", hi: "ठीक करो", ml: "സൗഖ്യം" },
    nav_stars: { en: "Stars", hi: "तारे", ml: "നക്ഷത്രം" },
    nav_letters: { en: "Letters", hi: "पत्र", ml: "കത്തുകൾ" },
    nav_look: { en: "Look", hi: "देखो", ml: "നോക്കൂ" },

    // ---- HOME ----
    home_greeting: { en: "Hello again.", hi: "फिर से नमस्ते।", ml: "വീണ്ടും ഹലോ." },
    home_subtitle: { en: "Your safe place for letting go. Everything is encrypted and private.", hi: "जाने देने की सुरक्षित जगह। सब कुछ एन्क्रिप्टेड है।", ml: "വിടുവിക്കാനുള്ള സുരക്ഷിത ഇടം. എല്ലാം എൻക്രിപ്റ്റ് ചെയ്തിരിക്കുന്നു." },
    home_vault_badge: { en: "AES-256 Vault Active", hi: "AES-256 वॉल्ट सक्रिय", ml: "AES-256 Vault സജീവം" },
    home_cta: { en: "Let's Practice", hi: "अभ्यास करें", ml: "പരിശീലിക്കാം" },

    // ---- PRACTICE ----
    practice_step1_title: { en: "Say it", hi: "बोलो", ml: "പറയൂ" },
    practice_step1_sub: { en: "What made you sad? Tell me simply.", hi: "क्या बात ने आपको दुख दिया?", ml: "നിങ്ങളെ ദുഃഖിപ്പിച്ചത് എന്ത്?" },
    practice_step2_title: { en: "How heavy?", hi: "कितना भारी?", ml: "എത്ര ഭാരം?" },
    practice_step2_sub: { en: "How heavy does this feel right now? (1–10)", hi: "अभी यह कितना भारी लगता है? (1-10)", ml: "ഇത് ഇപ്പോൾ എത്ര ഭാരം? (1-10)" },
    practice_step3_title: { en: "Let it out", hi: "निकालो", ml: "പ്രകടിപ്പിക്കൂ" },
    practice_step3_sub: { en: "Write what you want to say. It's okay to feel sad.", hi: "जो कहना है लिखो। दुखी होना ठीक है।", ml: "പറയാൻ ആഗ്രഹിക്കുന്നത് എഴുതൂ. ദുഃഖം ശരിയാണ്." },
    practice_step4_title: { en: "Let go", hi: "छोड़ दो", ml: "വിടൂ" },
    practice_step4_sub: { en: "I am ready to let this go now.", hi: "मैं अब इसे जाने देने के लिए तैयार हूं।", ml: "ഞാൻ ഇത് ഇപ്പോൾ വിടാൻ തയ്യാറാണ്." },
    practice_step4_btn: { en: "I am letting it go", hi: "मैं इसे जाने देता हूं", ml: "ഞാൻ ഇത് വിടുകയാണ്" },
    practice_step5_title: { en: "Better?", hi: "ठीक है?", ml: "ഭേദമായോ?" },
    practice_step5_sub: { en: "How heavy does it feel now? (1–10)", hi: "अब यह कितना भारी लगता है? (1-10)", ml: "ഇത് ഇപ്പോൾ എത്ര ഭാരം? (1-10)" },
    practice_fine: { en: "Fine", hi: "ठीक", ml: "ഠീക്" },
    practice_heavy: { en: "Very Heavy", hi: "बहुत भारी", ml: "വളരെ ഭാരം" },
    practice_back: { en: "Back", hi: "वापस", ml: "പിന്നോട്ട്" },
    practice_continue: { en: "Continue", hi: "जारी रखें", ml: "തുടരൂ" },
    practice_complete: { en: "Complete", hi: "पूरा करें", ml: "പൂർത്തിയാക്കൂ" },
    practice_done_title: { en: "All Done!", hi: "हो गया!", ml: "പൂർത്തിയായി!" },
    practice_done_sub: { en: "Every time you do this, you will feel a little better.", hi: "हर बार जब आप यह करते हैं, तो आप थोड़ा बेहतर महसूस करेंगे।", ml: "ഓരോ തവണ ഇത് ചെയ്യുമ്പോഴും, നിങ്ങൾ കുറച്ച് മെച്ചപ്പെടും." },
    practice_return_home: { en: "Return Home", hi: "घर वापस जाएं", ml: "ഹോമിലേക്ക് മടങ്ങൂ" },
    practice_type_here: { en: "Type here privately...", hi: "यहाँ निजी रूप से लिखें...", ml: "ഇവിടെ സ്വകാര്യമായി ടൈപ്പ് ചെയ്യൂ..." },

    // ---- CEREMONY ----
    ceremony_title: { en: "Letting Go", hi: "जाने दो", ml: "വിടുവിക്കൽ" },
    ceremony_sub: { en: "Write what is heavy in your heart. Then release it to the stars.", hi: "जो भारी है उसे लिखो। फिर तारों को छोड़ दो।", ml: "ഹൃദയത്തിൽ ഭാരമുള്ളത് എഴുതൂ. എന്നിട്ട് നക്ഷത്രങ്ങളിലേക്ക് വിടൂ." },
    ceremony_placeholder: { en: "Write your heavy thought here...", hi: "यहाँ अपना भारी विचार लिखें...", ml: "ഇവിടെ നിങ്ങളുടെ ഭാരമുള്ള ചിന్తി എഴുതൂ..." },
    ceremony_ready: { en: "Ready to Let Go", hi: "जाने देने के लिए तैयार", ml: "വിടാൻ തയ്യാർ" },
    ceremony_release: { en: "Release to Stars", hi: "तारों को छोड़ें", ml: "നക്ഷത്രങ്ങളിലേക്ക് വിടൂ" },
    ceremony_done: { en: "It is gone.", hi: "यह जा चुका है।", ml: "അത് പോയി." },
    ceremony_new: { en: "Release another", hi: "एक और छोड़ें", ml: "മറ്റൊന്ന് വിടൂ" },

    // ---- MIRROR ----
    mirror_private: { en: "Private & Safe", hi: "निजी और सुरक्षित", ml: "സ്വകാര്യം & സുരക്ഷിതം" },
    mirror_cam_sub: { en: "Your camera stays on your device.\nNo recording. No storage.\nNo one can see you.", hi: "आपका कैमरा आपके डिवाइस पर रहता है।\nकोई रिकॉर्डिंग नहीं। कोई स्टोरेज नहीं।\nकोई आपको नहीं देख सकता।", ml: "നിങ്ങളുടെ ക്യാമറ ഉപകരണത്തിൽ തന്നെ.\nറെക്കോഡ് ഇല്ല. സ്റ്റോറേജ് ഇല്ല.\nആരും നിങ്ങളെ കാണില്ല." },
    mirror_enable_cam: { en: "Enable Camera", hi: "कैमरा चालू करें", ml: "ക്യാമറ സജ്ജമാക്കൂ" },

    // ---- EMPATHY ----
    empathy_title: { en: "Thinking of Others", hi: "दूसरों के बारे में सोचना", ml: "മറ്റുള്ളവരെ കുറിച്ച് ചിന്തിക്കൽ" },
    empathy_step1: { en: "Close your eyes and take a slow breath.", hi: "आँखें बंद करो और धीरे से सांस लो।", ml: "കണ്ണുകൾ അടയ്ക്കൂ, 천천히 ശ്വസിക്കൂ." },
    empathy_step2: { en: "Imagine you are watching a movie of what happened.", hi: "कल्पना करो कि तुम जो हुआ उसकी फिल्म देख रहे हो।", ml: "നടന്നത് ഒരു സിനിമ കാണുന്നതുപോലെ ഭാവന ചെയ്യൂ." },
    empathy_step3: { en: "Now, try to see it through the other person's eyes.", hi: "अब, दूसरे व्यक्ति की आँखों से देखने की कोशिश करो।", ml: "ഇപ്പോൾ, മറ്റ് വ്യക്തിയുടെ കണ്ണുകളിലൂടെ കാണൂ." },
    empathy_step4: { en: "They also have pain you cannot see.", hi: "उनके पास भी दर्द है जो तुम देख नहीं सकते।", ml: "അവർക്കും കാണാൻ കഴിയാത്ത വേദനയുണ്ട്." },
    empathy_step5: { en: "Take another slow breath. You are both human.", hi: "धीरे से एक और सांस लो। तुम दोनों इंसान हो।", ml: "ഒരിക്കൽ കൂടി ശ്വസിക്കൂ. നിങ്ങൾ രണ്ടും മനുഷ്യരാണ്." },
    empathy_next: { en: "Next", hi: "अगला", ml: "അടുത്തത്" },
    empathy_done: { en: "Done", hi: "हो गया", ml: "പൂർത്തി" },
    empathy_restart: { en: "Try again", hi: "फिर से", ml: "വീണ്ടും" },
    empathy_complete: { en: "You showed kindness. That is beautiful.", hi: "तुमने दयालुता दिखाई। यह सुंदर है।", ml: "നിങ്ങൾ ദയ കാണിച്ചു. അത് മനോഹരം." },

    // ---- LETTERS ----
    letters_title: { en: "Secret Letters", hi: "गुप्त पत्र", ml: "രഹസ്യ കത്തുകൾ" },
    letters_new: { en: "New Story", hi: "नई कहानी", ml: "പുതിയ കഥ" },
    letters_list: { en: "My Letters", hi: "मेरे पत्र", ml: "എന്റെ കത്തുകൾ" },
    letters_who_for: { en: "Who is this for?", hi: "यह किसके लिए है?", ml: "ഇത് ആർക്ക് വേണ്ടി?" },
    letters_write: { en: "Write your heart out here...", hi: "यहाँ अपना दिल लिखें...", ml: "ഇവിടെ മനസ്സ് തുറന്ന് എഴുതൂ..." },
    letters_save: { en: "Save it", hi: "सहेजो", ml: "സേവ് ചെയ്യൂ" },
    letters_secret: { en: "My Secret", hi: "मेरा राज़", ml: "എന്റെ രഹസ്യം" },
    letters_empty: { en: "No letters yet. Write your first one.", hi: "अभी कोई पत्र नहीं। अपना पहला पत्र लिखें।", ml: "ഇതുവരെ കത്തുകൾ ഇല്ല. ആദ്യത്തേ它 എഴുതൂ." },

    // ---- PRIVACY LOCK ----
    lock_enter_title: { en: "Enter Your PIN", hi: "आपका PIN डालें", ml: "PIN നൽകൂ" },
    lock_setup_title: { en: "Create a Vault PIN", hi: "Vault PIN बनाएं", ml: "Vault PIN ഉണ്ടാക്കൂ" },
    lock_confirm_title: { en: "Confirm Your PIN", hi: "PIN की पुष्टि करें", ml: "PIN സ്ഥിരീകരിക്കൂ" },
    lock_wrong: { en: "Wrong PIN — Try Again", hi: "गलत PIN — फिर से", ml: "തെറ്റായ PIN — വീണ്ടും" },
    lock_enter_sub: { en: "Your data is encrypted. Only your PIN can unlock it.", hi: "आपका डेटा एन्क्रिप्टेड है। केवल आपका PIN इसे खोल सकता है।", ml: "നിങ്ങളുടെ ഡേറ്റ എൻക്രിപ്റ്റ് ആണ്. PIN മാത്രം തുറക്കും." },
    lock_setup_sub: { en: "Pick a 6-digit PIN. Don't forget it — it's the only key.", hi: "6 अंकों का PIN चुनें। भूलो मत — यही एकमात्र चाबी है।", ml: "6 അക്ക PIN തിരഞ്ഞെടുക്കൂ. മറക്കരുത് — ഇതു മാത്രമാണ് താക്കോൽ." },
    lock_confirm_sub: { en: "Type the same PIN again to confirm.", hi: "पुष्टि के लिए वही PIN फिर से डालें।", ml: "സ്ഥിരീകരിക്കാൻ ഒരേ PIN വീണ്ടും ടൈപ്പ് ചെയ്യൂ." },
    lock_badge: { en: "AES-256 · Zero-Knowledge Vault", hi: "AES-256 · शून्य-ज्ञान तिजोरी", ml: "AES-256 · Zero-Knowledge Vault" },
} as const;

export type TranslationKey = keyof typeof translations;

/** Returns the translated string for a given key and language */
export function t(key: TranslationKey, lang: Lang): string {
    return translations[key][lang] ?? translations[key]["en"];
}

export default translations;
