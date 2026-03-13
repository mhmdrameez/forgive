/**
 * Native in-app translations.
 * Languages: English, Hindi, Malayalam, Arabic, French, Urdu, Tamil, Telugu
 */
export type Lang = "en" | "hi" | "ml" | "ar" | "fr" | "ur" | "ta" | "te";

const translations = {
    // ---- BOTTOM NAV ----
    nav_home: { en: "Home", hi: "होम", ml: "ഹോം", ar: "الرئيسية", fr: "Accueil", ur: "ہوم", ta: "முகப்பு", te: "హోమ్" },
    nav_heal: { en: "Heal", hi: "ठीक करो", ml: "സൗഖ്യം", ar: "شفاء", fr: "Guérir", ur: "شفاء", ta: "குணமடை", te: "స్వస్థత" },
    nav_stars: { en: "Stars", hi: "तारे", ml: "നക്ഷത്രം", ar: "نجوم", fr: "Étoiles", ur: "ستارے", ta: "நட்சத்திரங்கள்", te: "నక్షత్రాలు" },
    nav_letters: { en: "Letters", hi: "पत्र", ml: "കത്തുകൾ", ar: "رسائل", fr: "Lettres", ur: "خطوط", ta: "கடிதங்கள்", te: "లేఖలు" },
    nav_look: { en: "Look", hi: "देखो", ml: "നോക്കൂ", ar: "انظر", fr: "Regarder", ur: "دیکھو", ta: "பார்", te: "చూడు" },

    // ---- HOME ----
    home_greeting: { en: "Hello again.", hi: "फिर से नमस्ते।", ml: "വീണ്ടും ഹലോ.", ar: "مرحباً مجدداً.", fr: "Bonjour encore.", ur: "دوبارہ ہیلو۔", ta: "மீண்டும் வணக்கம்.", te: "మళ్ళీ హలో." },
    home_subtitle: { en: "Your safe place for letting go. Everything is encrypted and private.", hi: "जाने देने की सुरक्षित जगह। सब एन्क्रिप्टेड है।", ml: "വിടുവിക്കാനുള്ള സുരക്ഷിത ഇടം. എല്ലാം എൻക്രിപ്റ്റ് ആണ്.", ar: "مكانك الآمن للتخلي. كل شيء مشفر.", fr: "Votre espace sécurisé. Tout est chiffré.", ur: "چھوڑنے کی محفوظ جگہ۔ سب انکرپٹڈ ہے۔", ta: "விடுவிக்க உங்கள் பாதுகாப்பான இடம். எல்லாம் மறைக்கப்பட்டது.", te: "వదులుకోవడానికి మీ సురక్షిత స్థలం. అన్నీ ఎన్క్రిప్ట్ చేయబడ్డాయి." },
    home_vault_badge: { en: "AES-256 Vault Active", hi: "AES-256 वॉल्ट सक्रिय", ml: "AES-256 Vault സജീവം", ar: "AES-256 مشفر", fr: "Coffre AES-256 Actif", ur: "AES-256 Vault فعال", ta: "AES-256 பூட்டு செயல்பாட்டில்", te: "AES-256 Vault యాక్టివ్" },
    home_cta: { en: "Let's Practice", hi: "अभ्यास करें", ml: "പരിശീലിക്കാം", ar: "لنتدرب", fr: "Pratiquons", ur: "مشق کریں", ta: "பயிற்சி செய்வோம்", te: "అభ్యాసం చేద్దాం" },

    // ---- PRACTICE ----
    practice_step1_title: { en: "Say it", hi: "बोलो", ml: "പറയൂ", ar: "قلها", fr: "Dis-le", ur: "بولو", ta: "சொல்லு", te: "చెప్పు" },
    practice_step1_sub: { en: "What made you sad? Tell me simply.", hi: "क्या बात ने आपको दुख दिया?", ml: "നിങ്ങളെ ദുഃഖിപ്പിച്ചത് എന്ത്?", ar: "ما الذي جعلك حزيناً؟", fr: "Qu'est-ce qui t'a rendu triste?", ur: "کیا بات نے آپ کو دکھی کیا؟", ta: "என்ன உங்களை சோர்வடையச் செய்தது?", te: "మిమ్మల్ని దుఃఖపరచింది ఏది?" },
    practice_step2_title: { en: "How heavy?", hi: "कितना भारी?", ml: "എത്ര ഭാരം?", ar: "كم ثقله?", fr: "Quel poids?", ur: "کتنا بھاری؟", ta: "எவ்வளவு கனம்?", te: "ఎంత భారంగా?" },
    practice_step2_sub: { en: "How heavy does this feel? (1–10)", hi: "यह कितना भारी लगता है? (1-10)", ml: "ഇത് എത്ര ഭാരം? (1-10)", ar: "كم يبدو ثقيلاً? (1-10)", fr: "À quel point ça pèse? (1-10)", ur: "یہ کتنا بھاری لگتا ہے؟ (1-10)", ta: "இது எவ்வளவு கனமாக உணர்கிறது? (1-10)", te: "ఇది ఎంత భారంగా అనిపిస్తుంది? (1-10)" },
    practice_step3_title: { en: "Let it out", hi: "निकालो", ml: "പ്രകടിപ്പിക്കൂ", ar: "أخرجها", fr: "Exprime-toi", ur: "نکالو", ta: "வெளியே விடு", te: "బయటకు చెప్పు" },
    practice_step3_sub: { en: "Write what you want to say. It's okay to feel sad.", hi: "जो कहना है लिखो। दुखी होना ठीक है।", ml: "പറയാൻ ആഗ്രഹിക്കുന്നത് എഴുതൂ.", ar: "اكتب ما تريد قوله.", fr: "Écris ce que tu veux dire.", ur: "جو کہنا ہے لکھو۔", ta: "சொல்ல விரும்புவதை எழுது.", te: "చెప్పాలనుకున్నది రాయి." },
    practice_step4_title: { en: "Let go", hi: "छोड़ दो", ml: "വിടൂ", ar: "اتركها", fr: "Lâche prise", ur: "چھوڑو", ta: "விடு", te: "వదులు" },
    practice_step4_sub: { en: "I am ready to let this go.", hi: "मैं इसे जाने देने के लिए तैयार हूं।", ml: "ഞാൻ ഇത് വിടാൻ തയ്യാറാണ്.", ar: "أنا مستعد للتخلي عن هذا.", fr: "Je suis prêt à lâcher prise.", ur: "میں اسے چھوڑنے کے لیے تیار ہوں۔", ta: "நான் இதை விட தயாரா இருக்கிறேன்.", te: "నేను ఇది వదులుకోవడానికి సిద్ధంగా ఉన్నాను." },
    practice_step4_btn: { en: "I am letting it go", hi: "मैं इसे जाने देता हूं", ml: "ഞാൻ ഇത് വിടുകയാണ്", ar: "أنا أتركها", fr: "Je lâche prise", ur: "میں اسے چھوڑ رہا ہوں", ta: "நான் இதை விடுகிறேன்", te: "నేను వదులుతున్నాను" },
    practice_step5_title: { en: "Better?", hi: "ठीक है?", ml: "ഭേദമായോ?", ar: "أفضل؟", fr: "Mieux?", ur: "بہتر؟", ta: "நலமா?", te: "మెరుగైందా?" },
    practice_step5_sub: { en: "How heavy does it feel now? (1–10)", hi: "अब यह कितना भारी लगता है? (1-10)", ml: "ഇത് ഇപ്പോൾ എത്ര ഭാരം? (1-10)", ar: "كم يبدو ثقيلاً الآن? (1-10)", fr: "À quel point ça pèse maintenant? (1-10)", ur: "اب یہ کتنا بھاری لگتا ہے؟ (1-10)", ta: "இப்போது இது எவ்வளவு கனமாக இருக்கிறது? (1-10)", te: "ఇప్పుడు ఎంత భారంగా అనిపిస్తుంది? (1-10)" },
    practice_fine: { en: "Fine", hi: "ठीक", ml: "ഠീക്", ar: "بخير", fr: "Bien", ur: "ٹھیک", ta: "நலம்", te: "బాగుంది" },
    practice_heavy: { en: "Very Heavy", hi: "बहुत भारी", ml: "വളരെ ഭാരം", ar: "ثقيل جداً", fr: "Très Lourd", ur: "بہت بھاری", ta: "மிகவும் கனம்", te: "చాలా భారంగా" },
    practice_back: { en: "Back", hi: "वापस", ml: "പിന്നോട്ട്", ar: "رجوع", fr: "Retour", ur: "واپس", ta: "பின்", te: "వెనక్కి" },
    practice_continue: { en: "Continue", hi: "जारी रखें", ml: "തുടരൂ", ar: "متابعة", fr: "Continuer", ur: "جاری رکھیں", ta: "தொடர்", te: "కొనసాగించు" },
    practice_complete: { en: "Complete", hi: "पूरा करें", ml: "പൂർത്തിയാക്കൂ", ar: "إتمام", fr: "Terminer", ur: "مکمل کریں", ta: "முடி", te: "పూర్తి చేయి" },
    practice_done_title: { en: "All Done!", hi: "हो गया!", ml: "പൂർത്തിയായി!", ar: "تم!", fr: "C'est fait!", ur: "ہو گیا!", ta: "முடிந்தது!", te: "అయిపోయింది!" },
    practice_done_sub: { en: "Every time you do this, you will feel a little better.", hi: "हर बार आप थोड़ा बेहतर महसूस करेंगे।", ml: "ഓരോ തവണ ഇത് ചെയ്യുമ്പോഴും, നിങ്ങൾ മെച്ചപ്പെടും.", ar: "كلما فعلت هذا، ستشعر بتحسن.", fr: "Chaque fois, tu te sentiras mieux.", ur: "ہر بار آپ تھوڑا بہتر محسوس کریں گے۔", ta: "ஒவ்வொரு முறையும் இதை செய்யும்போது, கொஞ்சம் நலமாவீர்கள்.", te: "ప్రతి సారి మీరు ఇది చేసినపుడు, కొంచెం మెరుగవుతారు." },
    practice_return_home: { en: "Return Home", hi: "घर वापस जाएं", ml: "ഹോമിലേക്ക് മടങ്ങൂ", ar: "العودة للرئيسية", fr: "Retour Accueil", ur: "گھر واپس جائیں", ta: "முகப்புக்கு திரும்பு", te: "హోమ్‌కి తిరిగి వెళ్ళు" },
    practice_type_here: { en: "Type here privately...", hi: "यहाँ निजी रूप से लिखें...", ml: "ഇവിടെ സ്വകാര്യമായി ടൈപ്പ് ചെയ്യൂ...", ar: "اكتب هنا بشكل خاص...", fr: "Écris ici en privé...", ur: "یہاں نجی طور پر لکھیں...", ta: "இங்கே தனியாக தட்டச்சு செய்யுங்கள்...", te: "ఇక్కడ ప్రైవేట్‌గా టైప్ చేయండి..." },

    // ---- CEREMONY ----
    ceremony_title: { en: "Letting Go", hi: "जाने दो", ml: "വിടുവിക്കൽ", ar: "دعها تذهب", fr: "Lâcher prise", ur: "جانے دو", ta: "விடுவித்தல்", te: "వదిలేయడం" },
    ceremony_sub: { en: "Put your sad thoughts in the stars.\nType what you want to let go of.", hi: "अपने दुखी विचारों को तारों में डालें।\nजो जाने देना हो वो लिखें।", ml: "ദുഃഖ ചിന്തകൾ നക്ഷത്രങ്ങളിലേക്ക് വിടൂ.\nവിടാൻ ആഗ്രഹിക്കുന്നത് ടൈപ്പ് ചെയ്യൂ.", ar: "ضع أفكارك الحزينة في النجوم.\nاكتب ما تريد التخلي عنه.", fr: "Mets tes pensées tristes dans les étoiles.\nÉcris ce que tu veux lâcher.", ur: "اپنے غمگین خیالات ستاروں میں ڈالیں۔\nجو چھوڑنا ہے وہ لکھیں۔", ta: "உங்கள் சோர்வான எண்ணங்களை நட்சத்திரங்களில் வையுங்கள்.\nவிட விரும்புவதை எழுதுங்கள்.", te: "మీ దుఃఖపు ఆలోచనలను నక్షత్రాలలో ఉంచండి.\nమీరు వదలాలనుకున్నది టైప్ చేయండి." },
    ceremony_placeholder: { en: "I release...", hi: "मैं छोड़ता हूं...", ml: "ഞാൻ വിടുന്നു...", ar: "أنا أطلق...", fr: "Je libère...", ur: "میں چھوڑتا ہوں....", ta: "நான் விடுகிறேன்...", te: "నేను వదులుతున్నాను..." },
    ceremony_ready: { en: "Ready to Let Go", hi: "जाने देने को तैयार", ml: "വിടാൻ തയ്യാർ", ar: "مستعد للتحرر", fr: "Prêt à lâcher", ur: "چھوڑنے کے لیے تیار", ta: "விட தயார்", te: "వదులుకోవడానికి సిద్ధం" },
    ceremony_drag: { en: "← Drag to the stars →", hi: "← तारों की तरफ खींचें →", ml: "← നക్ഷत്രരङ്ങളിലേക്ക് വലിക്കൂ →", ar: "← اسحب نحو النجوم →", fr: "← Glisse vers les étoiles →", ur: "← ستاروں کی طرف کھینچیں →", ta: "← நட்சத்திரங்களை நோக்கி இழுக்கவும் →", te: "← నక్షత్రాల వైపు లాగండి →" },
    ceremony_done: { en: "It is gone.", hi: "यह जा चुका है।", ml: "അത് പോയി.", ar: "لقد ذهبت.", fr: "C'est parti.", ur: "یہ جا چکا ہے۔", ta: "அது போய்விட்டது.", te: "అది వెళ్ళిపోయింది." },
    ceremony_done_sub: { en: "Your sad thought has flown away. You are free now.", hi: "आपका दुखी विचार उड़ गया। अब आप आज़ाद हैं।", ml: "നിങ്ങളുടെ ദുഃഖ ചിന്ത പറന്നുപോയി. ഇനി സ്വതന്ത്രരാണ്.", ar: "طارت فكرتك الحزينة. أنت حر الآن.", fr: "Ta pensée triste s'est envolée. Tu es libre.", ur: "آپ کا غمگین خیال اڑ گیا۔ آپ آزاد ہیں۔", ta: "உங்கள் சோர்வான எண்ணம் பறந்துவிட்டது. இப்போது சுதந்திரமாக இருக்கிறீர்கள்.", te: "మీ దుఃఖపు ఆలోచన ఎగిరిపోయింది. మీరు ఇప్పుడు స్వేచ్ఛగా ఉన்నారు." },
    ceremony_new: { en: "Start Again", hi: "फिर से शुरू करें", ml: "വീണ്ടും ആരംഭിക്കൂ", ar: "ابدأ من جديد", fr: "Recommencer", ur: "دوبارہ شروع کریں", ta: "மீண்டும் தொடங்கு", te: "మళ్ళీ ప్రారంభించు" },

    // ---- MIRROR ----
    mirror_private: { en: "Private & Safe", hi: "निजी और सुरक्षित", ml: "സ്വകാര്യം & സുരക്ഷിതം", ar: "خاص وآمن", fr: "Privé & Sûr", ur: "نجی اور محفوظ", ta: "தனியார் & பாதுகாப்பான", te: "ప్రైవేట్ & సురక్షితం" },
    mirror_cam_sub: { en: "Your camera stays on your device.\nNo recording. No storage.\nNo one can see you.", hi: "आपका कैमरा डिवाइस पर रहता है।\nकोई रिकॉर्डिंग नहीं।\nकोई नहीं देख सकता।", ml: "ക്യാമറ ഉപകരണത്തിൽ.\nറെക്കോഡ് ഇല്ല.\nആരും കാണില്ല.", ar: "الكاميرا على جهازك فقط.\nلا تسجيل. لا تخزين.\nلا أحد يراك.", fr: "Ta caméra reste sur l'appareil.\nPas d'enregistrement. Pas de stockage.\nPersonne ne peut te voir.", ur: "آپ کا کیمرہ ڈیوائس پر۔\nکوئی ریکارڈنگ نہیں۔\nکوئی نہیں دیکھ سکتا۔", ta: "உங்கள் கேமரா சாதனத்தில்.\nரெக்கார்டிங் இல்லை.\nயாரும் உங்களை பார்க்க மாட்டார்கள்.", te: "మీ కెమెరా మీ పరికరంలోనే.\nరికార్డింగ్ లేదు.\nఎవరూ చూడలేరు." },
    mirror_enable_cam: { en: "Enable Camera", hi: "कैमरा चालू करें", ml: "ക്യാമറ സജ്ജమാക്കൂ", ar: "تفعيل الكاميرا", fr: "Activer la caméra", ur: "کیمرہ فعال کریں", ta: "கேமரா இயக்கு", te: "కెమెరా ఆన్ చేయి" },

    // ---- EMPATHY ----
    empathy_step1: { en: "Imagine you are watching a movie of what happened.", hi: "कल्पना करो कि तुम जो हुआ उसकी फिल्म देख रहे हो।", ml: "നടന്നത് ഒരു സിനിമ കാണുന്നതുപോലെ ഭാവന ചെയ്യൂ.", ar: "تخيل أنك تشاهد فيلماً عما حدث.", fr: "Imagine que tu regardes un film de ce qui s'est passé.", ur: "تصور کرو کہ تم جو ہوا اس کی فلم دیکھ رہے ہو۔", ta: "நடந்ததை ஒரு திரைப்படமாக பார்ப்பதாக கற்பனை செய்யுங்கள்.", te: "ఏం జరిగిందో దాన్ని ఒక సినిమాలా చూస్తున్నట్లు ఊహించుకో." },
    empathy_step2: { en: "Think about why the other person might have been sad or angry.", hi: "सोचो कि दूसरा व्यक्ति क्यों दुखी या गुस्से में था।", ml: "ആ വ്യക്തി എന്തുകൊണ്ട് ദുഃഖിതനോ ദേഷ്യക്കാരനോ ആകാം?", ar: "فكر لماذا ربما كان الشخص الآخر حزيناً أو غاضباً.", fr: "Pense à pourquoi l'autre personne était peut-être triste.", ur: "سوچو کہ دوسرا شخص کیوں غمگین یا غصے میں تھا۔", ta: "மற்ற நபர் ஏன் சோர்வாக அல்லது கோபமாக இருந்திருக்கலாம்?", te: "ఆ వ్యక్తి ఎందుకు దుఃఖంగా లేదా కోపంగా ఉన్నారు?" },
    empathy_step3: { en: "Sometimes people are mean because they are hurting inside too.", hi: "कभी-कभी लोग इसलिए बुरे होते हैं क्योंकि वे अंदर से भी दर्द में हैं।", ml: "ചിലപ്പോൾ ആളുകൾ ദ്രോഹം ചെയ്യുന്നത് അവരും ഉള്ളിൽ വേദനിക്കുന്നതുകൊണ്ടാണ്.", ar: "أحياناً يكون الناس قساة لأنهم يتألمون في الداخل أيضاً.", fr: "Parfois les gens sont méchants parce qu'ils souffrent aussi.", ur: "کبھی کبھی لوگ اس لیے برے ہوتے ہیں کیونکہ وہ اندر سے بھی دکھی ہیں۔", ta: "சில நேரங்களில் மக்கள் கோபமாக இருக்கிறார்கள் ஏனென்றால் அவர்களுக்கும் உள்ளே வலிக்கிறது.", te: "కొన్నిసార్లు వ్యక్తులు చెడుగా ప్రవర్తిస్తారు ఎందుకంటే వారికి కూడా లోపల నొప్పిగా ఉంటుంది." },
    empathy_step4: { en: "Remember that everyone makes mistakes sometimes.", hi: "याद रखो कि हर कोई कभी न कभी गलती करता है।", ml: "എല്ലാവരും ചിലപ്പോൾ തെറ്റ് ചെയ്യുന്നുണ്ടെന്ന് ഓർക്കൂ.", ar: "تذكر أن الجميع يرتكبون الأخطاء أحياناً.", fr: "Rappelle-toi que tout le monde fait des erreurs.", ur: "یاد رکھو کہ ہر کوئی کبھی نہ کبھی غلطی کرتا ہے۔", ta: "எல்லோரும் சில நேரங்களில் தவறு செய்கிறார்கள் என்பதை நினைவில் வையுங்கள்.", te: "అందరూ కొన్నిసార్లు తప్పులు చేస్తారు అని గుర్తుంచుకో." },
    empathy_step5: { en: "Knowing why they did it doesn't mean it was okay. It just helps you understand.", hi: "उनके कारण जानना यह नहीं कहता कि वो ठीक था। यह बस समझने में मदद करता है।", ml: "അവർ ഇത് ചെയ്ത കാരണം അറിയുന്നത് ശരിയാണ് എന്നല്ല. ഇത് മനസ്സിലാക്കാൻ സഹായിക്കുന്നു.", ar: "معرفة السبب لا تعني أنه كان صواباً. إنها فقط تساعدك على الفهم.", fr: "Comprendre pourquoi ne veut pas dire que c'était bien. Ça aide juste.", ur: "وجہ جاننا یہ نہیں کہتا کہ وہ ٹھیک تھا۔ یہ بس سمجھنے میں مدد کرتا ہے۔", ta: "ஏன் செய்தார்கள் என்று தெரிந்தாலும் அது சரி என்று அர்த்தமில்லை. இது புரிந்துகொள்ள உதவுகிறது.", te: "వారు ఎందుకు చేశారో తెలుసుకోవడం అది సరైనది అని కాదు. ఇది అర్థం చేసుకోవడానికి మాత్రమే." },

    // ---- LETTERS ----
    letters_title: { en: "Secret Letters", hi: "गुप्त पत्र", ml: "രഹസ്യ കത്തുകൾ", ar: "رسائل سرية", fr: "Lettres secrètes", ur: "خفیہ خطوط", ta: "இரகசிய கடிதங்கள்", te: "రహస్య లేఖలు" },
    letters_new: { en: "New Story", hi: "नई कहानी", ml: "പുതിയ കഥ", ar: "قصة جديدة", fr: "Nouveau récit", ur: "نئی کہانی", ta: "புதிய கதை", te: "కొత్త కథ" },
    letters_who_for: { en: "Who is this for?", hi: "यह किसके लिए है?", ml: "ഇത് ആർക്ക് വേണ്ടി?", ar: "لمن هذا؟", fr: "Pour qui est-ce?", ur: "یہ کس کے لیے؟", ta: "இது யாருக்காக?", te: "ఇది ఎవరికి?" },
    letters_write: { en: "Write your heart out here...", hi: "यहाँ दिल की बात लिखें...", ml: "ഇവിടെ മനസ്സ് തുറന്ന് എഴുതൂ...", ar: "اكتب قلبك هنا...", fr: "Écris tout ici...", ur: "یہاں دل کی بات لکھیں...", ta: "உங்கள் மனதை இங்கே திறந்துவிடுங்கள்...", te: "ఇక్కడ మనసు విప్పి రాయండి..." },
    letters_save: { en: "Save it", hi: "सहेजो", ml: "സേവ് ചെയ്യൂ", ar: "احفظ", fr: "Enregistrer", ur: "محفوظ کریں", ta: "சேமி", te: "సేవ్ చేయి" },
    letters_secret: { en: "My Secret", hi: "मेरा राज़", ml: "എന്റെ രഹസ്യം", ar: "سري", fr: "Mon Secret", ur: "میرا راز", ta: "என் இரகசியம்", te: "నా రహస్యం" },
    letters_empty: { en: "No letters yet. Write your first one.", hi: "अभी कोई पत्र नहीं। पहला पत्र लिखें।", ml: "ഇതുവരെ കത്തുകൾ ഇല്ല.", ar: "لا رسائل حتى الآن.", fr: "Pas de lettres. Écris la première.", ur: "ابھی کوئی خط نہیں۔ پہلا لکھیں۔", ta: "இன்னும் கடிதங்கள் இல்லை.", te: "ఇంకా లేఖలు లేవు." },

    // ---- PRIVACY LOCK ----
    lock_enter_title: { en: "Enter Your PIN", hi: "आपका PIN डालें", ml: "PIN നൽകൂ", ar: "أدخل رقمك السري", fr: "Entrer le PIN", ur: "PIN درج کریں", ta: "உங்கள் PIN உள்ளிடுங்கள்", te: "మీ PIN నమోదు చేయండి" },
    lock_setup_title: { en: "Create a Vault PIN", hi: "Vault PIN बनाएं", ml: "Vault PIN ഉണ്ടാക്കൂ", ar: "إنشاء رقم سري", fr: "Créer un PIN", ur: "PIN بنائیں", ta: "Vault PIN உருவாக்கு", te: "Vault PIN సృష్టించండి" },
    lock_confirm_title: { en: "Confirm Your PIN", hi: "PIN की पुष्टि", ml: "PIN സ്ഥിരീകരിക്കൂ", ar: "تأكيد الرقم", fr: "Confirmer le PIN", ur: "PIN کی تصدیق", ta: "PIN உறுதிப்படுத்து", te: "PIN నిర్ధారించండి" },
    lock_wrong: { en: "Wrong PIN — Try Again", hi: "गलत PIN — फिर से", ml: "തെറ്റായ PIN — വീണ്ടും", ar: "رقم خاطئ — أعد المحاولة", fr: "PIN incorrect", ur: "غلط PIN — دوبارہ", ta: "தவறான PIN — மீண்டும்", te: "తప్పు PIN — మళ్ళీ ప్రయత్నించండి" },
    lock_enter_sub: { en: "Your data is encrypted. Only your PIN can unlock it.", hi: "डेटा एन्क्रिप्टेड है। केवल PIN खोल सकता है।", ml: "ഡേറ്റ എൻക്രിപ്റ്റ് ആണ്. PIN മാത്രം തുറക്കും.", ar: "بياناتك مشفرة. فقط رقمك السري يفتحها.", fr: "Données chiffrées. Seul ton PIN peut déverrouiller.", ur: "ڈیٹا انکرپٹڈ ہے۔ صرف PIN کھول سکتا ہے۔", ta: "உங்கள் தரவு மறைக்கப்பட்டது. PIN மட்டுமே திறக்கும்.", te: "మీ డేటా ఎన్క్రిప్ట్ చేయబడింది. PIN మాత్రమే తెరుస్తుంది." },
    lock_setup_sub: { en: "Pick a 6-digit PIN. Don't forget it — it's the only key.", hi: "6 अंकों का PIN चुनें। भूलो मत।", ml: "6 അക്ക PIN തിരഞ്ഞെടുക്കൂ. മറക്കരുത്.", ar: "اختر PIN من 6 أرقام. لا تنساه.", fr: "Choisis un PIN à 6 chiffres. Ne l'oublie pas.", ur: "6 ہندسہ PIN چنیں۔ بھولیں نہیں۔", ta: "6 இலக்க PIN தேர்வு செய்யுங்கள். மறக்காதீர்கள்.", te: "6 అంకెల PIN ఎంచుకోండి. మరచిపోకండి." },
    lock_confirm_sub: { en: "Type the same PIN again to confirm.", hi: "पुष्टि के लिए वही PIN फिर से टाइप करें।", ml: "ഒരേ PIN വീണ്ടും ടൈപ്പ് ചെയ്യൂ.", ar: "اكتب نفس الرقم مرة أخرى للتأكيد.", fr: "Tape le même PIN encore pour confirmer.", ur: "تصدیق کے لیے وہی PIN دوبارہ ٹائپ کریں۔", ta: "உறுதிப்படுத்த அதே PIN மீண்டும் தட்டச்சு செய்யுங்கள்.", te: "నిర్ధారించడానికి అదే PIN మళ్ళీ టైప్ చేయండి." },
    lock_badge: { en: "AES-256 · Zero-Knowledge Vault", hi: "AES-256 · शून्य-ज्ञान वॉल्ट", ml: "AES-256 · Zero-Knowledge Vault", ar: "AES-256 · تشفير تام", fr: "AES-256 · Coffre Zéro Connaissance", ur: "AES-256 · Zero-Knowledge Vault", ta: "AES-256 · Zero-Knowledge Vault", te: "AES-256 · Zero-Knowledge Vault" },
} as const;

export type TranslationKey = keyof typeof translations;

/** Returns the translated string for a given key and language */
export function t(key: TranslationKey, lang: Lang): string {
    const entry = translations[key];
    return (entry as any)[lang] ?? (entry as any)["en"];
}

export default translations;
