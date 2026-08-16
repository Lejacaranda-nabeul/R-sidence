/* ═══════════════════════════════════════════════════════
   RÉSIDENCE LE JACARANDA — App Logic (FR · EN · ES · IT · DE · AR)
═══════════════════════════════════════════════════════ */

/* ── Language Config ── */
const langMeta = {
  fr: { flag: '🇫🇷', code: 'FR', label: 'Français', dir: 'ltr', fontClass: '' },
  en: { flag: '🇬🇧', code: 'EN', label: 'English',  dir: 'ltr', fontClass: '' },
  es: { flag: '🇪🇸', code: 'ES', label: 'Español',  dir: 'ltr', fontClass: '' },
  it: { flag: '🇮🇹', code: 'IT', label: 'Italiano', dir: 'ltr', fontClass: '' },
  de: { flag: '🇩🇪', code: 'DE', label: 'Deutsch',  dir: 'ltr', fontClass: '' },
  ar: { flag: '🇸🇦', code: 'AR', label: 'عربي',     dir: 'rtl', fontClass: 'rtl' },
};

/* ── Translations ── */
const translations = {

  /* ════════ FRANÇAIS ════════ */
  fr: {
    heroBadgeText: "Résidence d'Exception · Mrezgua Nabeul · À 300m de la Plage",
    heroEyebrowText: "Mrezgua · Nabeul · Tunisie",
    heroTagline: "L'art de vivre dans sa plus belle expression",
    scrollText: "Défiler pour explorer",
    stat1: "Blocs Résidentiels", stat2: "Piscines d'Eau Cristalline", stat3: "de la Plage Méditerranée", stat4: "Conciergerie & Sécurité",
    badgeLabel: "Livraison Immédiate", floatTitle: "Architecture Contemporaine", floatSub: "Design méditerranéen & finitions haut de gamme",
    aboutTag: "À Propos du Projet",
    aboutTitle: "Un Art de Vivre<br /><em>Exceptionnel</em>",
    aboutBody: "Nichée au cœur de Mrezgua, à seulement 300 mètres de la magnifique plage de Nabeul, la Résidence Le Jacaranda est le fruit d'une vision architecturale ambitieuse : offrir un cadre de vie alliant modernité, élégance et sérénité.",
    aboutBody2: "Ses façades en blanc immaculé, ses balcons généreux et ses espaces communs soigneusement paysagés font de cette résidence un havre de paix au design contemporain haut de gamme.",
    aboutFeatures: ["Architecture contemporaine de prestige", "Finitions de premier choix en marbre et aluminium", "Espaces verts et jardins paysagers méditerranéens", "Résidence clôturée, gardée 24h/24 avec contrôle d'accès"],
    aboutCtaText: "Explorer en 360°",
    amenTag: "Prestations",
    amenTitle: "Tout le Luxe<br /><em>Réuni en un Lieu</em>",
    amen1: "Piscines",          amen1d: "Deux bassins cristallins illuminés, pour des moments de détente incomparables à toute heure.",
    amen2: "Sécurité 24h/24",  amen2d: "Accès sécurisé, surveillance permanente et système de contrôle avancé pour votre tranquillité.",
    amen3: "Parking Privé",    amen3d: "Espaces de stationnement couverts et sécurisés, à disposition exclusive des résidents.",
    amen4: "Espaces Verts",    amen4d: "Jardins paysagés et végétation méditerranéenne pour une atmosphère douce et ressourçante.",
    amen5: "Finitions Premium", amen5d: "Matériaux nobles, carrelage grand format, menuiserie aluminium — des prestations d'exception.",
    amen6: "Conciergerie",     amen6d: "Service disponible pour répondre à toutes vos demandes avec la plus grande discrétion.",
    typoTag: "Logements & Plans",
    typoTitle: "Espaces de Vie<br /><em>Conçus pour l'Excellence</em>",
    typoSub: "Des typologies harmonieuses allant du S+1 optimisé au Penthouse d'exception avec vue panoramique mer.",
    tourTag: "Visite Virtuelle",
    tourTitle: "Explorez la Résidence<br /><em>en 360°</em>",
    tourSub: "Naviguez librement dans nos espaces. Cliquez et faites glisser pour explorer chaque recoin.",
    tabFacadeText: "Façade & Nuit", tabInteriorText: "Appartement", tabPoolText: "Piscine & Jardins", tabBeachText: "Plage de Mrezgua",
    hintText: "Cliquez et faites glisser pour explorer",
    galTag: "Galerie Photographique",
    galTitle: "La Résidence<br /><em>en Images</em>",
    galFilterAll: "Toutes", galFilterExt: "Extérieur", galFilterInt: "Intérieurs", galFilterNight: "Piscine & Nuit", galFilterCommon: "Espaces Communs", galFilterBeach: "Plage & Mer",
    galCap1: "Façade Contemporaine", galCap2: "Vue Nocturne", galCap3: "Ascenseurs & Marbre", galCap4: "Parking Souterrain",
    galCap5: "Couloirs élégants", galCap6: "Angle Panoramique", galCap7: "Piscine & Lobby", galCap8: "Grand Hall & Lustre",
    galCap9: "Hall Rez-de-Chaussée", galCap10: "Piscine & Jardins",
    galCapBeach1: "Plage de Mrezgua & Parasols", galCapBeach2: "Rivage Doré & Mer Émeraude", galCapBeach3: "Eaux Cristallines Méditerranée", galCapBeach4: "Horizon Côtier & Sable Blanc",
    quartierTag: "Art de Vivre Méditerranéen",
    quartierTitle: "Mrezgua & Ses Trésors<br /><em>Entre Mer, Culture & Détente</em>",
    quartierSub: "Une situation d'exception à la croisée de Nabeul et d'Hammamet, alliant sérénité côtière et dynamisme.",
    qCard1Title: "Plage de Mrezgua", qCard1Desc: "Sable blanc, eaux turquoise calmes et couchers de soleil féeriques face au golfe d'Hammamet.",
    qCard2Title: "Nabeul & Artisanat", qCard2Desc: "Capitale tunisienne de la céramique, marchés traditionnels aux épices et distilleries de fleurs d'oranger.",
    qCard3Title: "Hammamet Nord & Marina", qCard3Desc: "Restaurants gastronomiques pieds dans l'eau, cafés mythiques de la Médina et clubs nautiques sélects.",
    qCard4Title: "Golfs Citrus & Yasmine", qCard4Desc: "Parcours de championnat internationaux 45 trous au milieu des oliviers et des collines verdoyantes.",
    appTag: "Écosystème Connecté",
    appTitle: "Gérez votre résidence<br /><em>depuis votre smartphone</em>",
    appBody: "Signalez un incident en un clic, contactez le syndic et la conciergerie, recevez les annonces officielles en temps réel et suivez vos demandes directement depuis l'application dédiée.",
    appFeatures: ["Suivi des réclamations & propositions en temps réel", "Messagerie instantanée avec le Syndic & Concierge", "Rappels de cotisations & rapports PDF partagés", "Notifications prioritaires et annonces de résidence"],
    appStoreSub: "Télécharger sur", playStoreSub: "Disponible sur",
    locTag: "Emplacement Stratégique",
    locTitle: "Mrezgua, Nabeul<br /><em>À 300m de la Mer</em>",
    locBadge1Val: "300m",   locBadge1Lbl: "Plage de sable fin (3 min à pied)",
    locBadge2Val: "5 min",  locBadge2Lbl: "Centre-ville Nabeul & Marchés",
    locBadge3Val: "45 min", locBadge3Lbl: "Aéroport Enfidha / Tunis",
    mapPinTitle: "Résidence Le Jacaranda",
    mapPinAddr: "Mrezgua, Nabeul, Tunisie · À 300m de la plage",
    gpsLabel: "M'y rendre depuis ma position",
    conTag: "Service Commercial & Syndic",
    conTitle: "Écrivez-nous,<br /><em>Rencontrons-nous</em>",
    conSub: "Notre équipe commerciale et de gestion est à votre entière disposition pour organiser une visite privée ou répondre à vos questions.",
    conLabel1: "Email Officiel", conLabel2: "Ligne Directe", conLabel3: "Adresse", conLabel4: "Accès Plage",
    conAddr: "Avenue Habib Bourguiba, Mrezgua, Nabeul", conBeach: "À 300 mètres de la mer",
    fnameLabel: "Prénom", lnameLabel: "Nom", emailLabel: "Email", phoneLabel: "Téléphone / WhatsApp", msgLabel: "Message / Type de bien recherché",
    fnamePh: "Votre prénom", lnamePh: "Votre nom", emailPh: "votre@email.com", phonePh: "+216 ...", msgPh: "Je souhaite obtenir des informations sur le S+2 ou planifier une visite...",
    formSubmit: "Envoyer le Message",
    successMsg: "Message envoyé avec succès. Notre équipe vous contactera sous 24 heures.",
    footerTagline: "L'excellence à chaque détail.",
    footerCopy: "© 2024 - 2026 Résidence Le Jacaranda. Tous droits réservés.",
    navAbout: "À Propos", navAmen: "Prestations", navTour: "Visite 360°", navGal: "Galerie", navQuartier: "Quartier", navApp: "Application", navCon: "Contact",
    heroCta1: "Découvrir la Résidence", heroCta2: "Visite 360° Virtuelle"
  },

  /* ════════ ENGLISH ════════ */
  en: {
    heroBadgeText: "Exceptional Residence · Mrezgua Nabeul · 300m from the Beach",
    heroEyebrowText: "Mrezgua · Nabeul · Tunisia",
    heroTagline: "The art of living at its finest",
    scrollText: "Scroll to explore",
    stat1: "Residential Blocks", stat2: "Crystal-Clear Pools", stat3: "from the Mediterranean Beach", stat4: "24/7 Concierge & Security",
    badgeLabel: "Immediate Delivery", floatTitle: "Contemporary Architecture", floatSub: "Mediterranean design & luxury finishes",
    aboutTag: "About the Project",
    aboutTitle: "An Exceptional<br /><em>Living Experience</em>",
    aboutBody: "Nestled in the heart of Mrezgua, just 300 meters from Nabeul's stunning beach, Résidence Le Jacaranda is born from an ambitious architectural vision: offering a living environment blending modernity, elegance, and serenity.",
    aboutBody2: "With pristine white facades, generous balconies, and meticulously landscaped common areas, the residence is a haven of peace featuring upscale contemporary design.",
    aboutFeatures: ["Prestigious contemporary architecture", "First-choice finishes in noble marble & aluminum", "Lush Mediterranean gardens and landscaping", "Gated, 24/7 guarded residence with secured access"],
    aboutCtaText: "Explore in 360°",
    amenTag: "Amenities & Services",
    amenTitle: "All Luxury<br /><em>in One Place</em>",
    amen1: "Swimming Pools",      amen1d: "Two illuminated crystal pools for unmatched relaxation moments day or night.",
    amen2: "24/7 Security",       amen2d: "Secured access, continuous CCTV and advanced monitoring for absolute peace of mind.",
    amen3: "Private Parking",     amen3d: "Covered and secured parking spaces exclusively reserved for residents.",
    amen4: "Landscaped Gardens",  amen4d: "Mediterranean flora and landscaped green areas for a soothing, refreshing atmosphere.",
    amen5: "Premium Finishes",    amen5d: "Noble materials, large format tiles, premium aluminum joinery — exceptional standards.",
    amen6: "Dedicated Concierge", amen6d: "Full concierge service catering to every resident's need with utmost discretion.",
    typoTag: "Homes & Floor Plans",
    typoTitle: "Living Spaces<br /><em>Crafted for Excellence</em>",
    typoSub: "Harmonious layouts ranging from optimized 1-bedroom apartments to exclusive Penthouses with panoramic sea views.",
    tourTag: "Virtual Tour",
    tourTitle: "Explore the Residence<br /><em>in 360°</em>",
    tourSub: "Navigate freely through our spaces. Click and drag to explore every corner.",
    tabFacadeText: "Façade & Night", tabInteriorText: "Apartment", tabPoolText: "Pool & Gardens", tabBeachText: "Mrezgua Beach",
    hintText: "Click and drag to explore",
    galTag: "Photo Gallery",
    galTitle: "The Residence<br /><em>in Pictures</em>",
    galFilterAll: "All", galFilterExt: "Exterior", galFilterInt: "Interiors", galFilterNight: "Pool & Night", galFilterCommon: "Common Areas", galFilterBeach: "Beach & Sea",
    galCap1: "Contemporary Façade", galCap2: "Night View", galCap3: "Marble Elevators & Lobby", galCap4: "Underground Parking",
    galCap5: "Elegant Corridors", galCap6: "Panoramic Corner", galCap7: "Pool & Lobby", galCap8: "Grand Hall & Chandelier",
    galCap9: "Ground Floor Hall", galCap10: "Pool & Gardens",
    galCapBeach1: "Mrezgua Beach & Parasols", galCapBeach2: "Golden Shore & Emerald Sea", galCapBeach3: "Mediterranean Crystal Waters", galCapBeach4: "Coastal Horizon & White Sand",
    quartierTag: "Mediterranean Lifestyle",
    quartierTitle: "Mrezgua & Its Treasures<br /><em>Between Sea, Culture & Leisure</em>",
    quartierSub: "An exceptional location bridging Nabeul and Hammamet, combining coastal serenity and vibrant culture.",
    qCard1Title: "Mrezgua Beach", qCard1Desc: "White sand, calm turquoise waters and magical sunsets overlooking the Gulf of Hammamet.",
    qCard2Title: "Nabeul & Crafts", qCard2Desc: "Tunisian capital of pottery and ceramics, traditional spice souks and orange blossom distilleries.",
    qCard3Title: "North Hammamet & Marina", qCard3Desc: "Seaside gourmet dining, iconic Medina cafes and exclusive water sport clubs.",
    qCard4Title: "Citrus & Yasmine Golf", qCard4Desc: "International 45-hole championship courses set among olive groves and lush green hills.",
    appTag: "Connected Ecosystem",
    appTitle: "Manage your residence<br /><em>from your smartphone</em>",
    appBody: "Report an incident in one click, contact the property manager and concierge, receive official announcements in real time and track your requests directly from the dedicated app.",
    appFeatures: ["Real-time tracking of claims & proposals", "Instant messaging with Management & Concierge", "Payment reminders & shared PDF reports", "Priority notifications and residence news"],
    appStoreSub: "Download on the", playStoreSub: "Get it on",
    locTag: "Strategic Location",
    locTitle: "Mrezgua, Nabeul<br /><em>300m from the Sea</em>",
    locBadge1Val: "300m",   locBadge1Lbl: "Sandy beach (3 min walk)",
    locBadge2Val: "5 min",  locBadge2Lbl: "Nabeul Downtown & Markets",
    locBadge3Val: "45 min", locBadge3Lbl: "Enfidha / Tunis Airport",
    mapPinTitle: "Résidence Le Jacaranda",
    mapPinAddr: "Mrezgua, Nabeul, Tunisia · 300m from the beach",
    gpsLabel: "Directions from my location",
    conTag: "Sales & Management Office",
    conTitle: "Write to Us,<br /><em>Let's Meet</em>",
    conSub: "Our sales and management team is at your complete disposal to arrange a private visit or answer any questions.",
    conLabel1: "Official Email", conLabel2: "Direct Phone", conLabel3: "Address", conLabel4: "Beach Access",
    conAddr: "Avenue Habib Bourguiba, Mrezgua, Nabeul", conBeach: "300 meters from the sea",
    fnameLabel: "First Name", lnameLabel: "Last Name", emailLabel: "Email", phoneLabel: "Phone / WhatsApp", msgLabel: "Message / Property Type Requested",
    fnamePh: "Your first name", lnamePh: "Your last name", emailPh: "your@email.com", phonePh: "+216 ...", msgPh: "Your message...",
    formSubmit: "Send Message",
    successMsg: "Message sent successfully. Our team will contact you within 24 hours.",
    footerTagline: "Excellence in every detail.",
    footerCopy: "© 2024 - 2026 Résidence Le Jacaranda. All rights reserved.",
    navAbout: "About", navAmen: "Amenities", navTour: "360° Tour", navGal: "Gallery", navQuartier: "Neighborhood", navApp: "Resident App", navCon: "Contact",
    heroCta1: "Discover the Residence", heroCta2: "Virtual Tour 360°"
  },

  /* ════════ ARABIC ════════ */
  ar: {
    heroBadgeText: "إقامة استثنائية فاخرة · مـرزقة نـابـل · 300م عن الشاطئ",
    heroEyebrowText: "مـرزقة · نـابـل · تـونـس",
    heroTagline: "فـن العيـش فـي أرقـى تـجـلـيـاتـه",
    scrollText: "مرر للاستكشاف",
    stat1: "مبانٍ سكنية فاخرة", stat2: "مسابح مياه نقية", stat3: "عن الشاطئ المتوسطي", stat4: "حراسة وكونسيرج 24/7",
    badgeLabel: "تسليم فوري", floatTitle: "هندسة معمارية عصرية", floatSub: "طابع متوسطي وتشطيبات راقية",
    aboutTag: "عن المشروع الفاخر",
    aboutTitle: "أسـلـوب حـيـاة<br /><em>اسـتـثـنـائـي</em>",
    aboutBody: "تقع إقامة لو خاكاراندا في قلب منطقة مـرزقة، على بُعد 300 متر فقط من شاطئ نابل الساحر. تجسد الإقامة رؤية معمارية فريدة تجمع بين الحداثة والأناقة والسكينة المطلقة.",
    aboutBody2: "بواجهاتها البيضاء الناصعة، وشرفاتها الواسعة ومساحاتها الخضراء المنسقة بعناية، تمثل الإقامة ملاذاً هادئاً بتصميم عصري فائق الجودة.",
    aboutFeatures: ["هندسة معمارية عصرية راقية وفخمة", "تشطيبات من الرخام والألمنيوم عالي الجودة", "مساحات خضراء وحدائق متوسطية خلابة", "إقامة مسيجة ومحروسة 24/24 مع مراقبة ذكية"],
    aboutCtaText: "استكشاف 360°",
    amenTag: "الخدمات والمرافق",
    amenTitle: "كل الـفـخـامـة<br /><em>فـي مـكـان واحـد</em>",
    amen1: "المسابح",          amen1d: "حوضان بلوريان مضاءان لقضاء لحظات استرخاء لا تُضاهى في أي وقت.",
    amen2: "أمن وحراسة 24/24", amen2d: "دخول مؤمن ومراقبة مستمرة بالكاميرات لراحتكم وطمأنينتكم.",
    amen3: "موقف سيارات خاص", amen3d: "أماكن ركن سيارات مغطاة وآمنة تحت الأرض مخصصة حصرياً للمقيمين.",
    amen4: "مساحات خضراء",    amen4d: "حدائق منسقة ونباتات متوسطية تمنحك أجواء من الهدوء والانتعاش.",
    amen5: "تشطيبات بريميوم", amen5d: "مواد راقية، أرضيات رخامية فاخرة ونجارة ألمنيوم بأعلى المعايير.",
    amen6: "خدمة الكونسيرج",   amen6d: "خدمة استقبال واستجابة متاحة لتلبية جميع احتياجاتكم بأعلى درجات الكفاءة.",
    typoTag: "الشقق والمخططات",
    typoTitle: "مساحات عيش<br /><em>صُممت للتميز</em>",
    typoSub: "شقق متناسقة بتصاميم رحبة من غرفة وصالة حتى البنتهاوس الفاخر بإطلالة بحرية بانورامية ساحرة.",
    tourTag: "جولة افتراضية",
    tourTitle: "استكشف الإقامة<br /><em>بزاوية 360°</em>",
    tourSub: "تجول بحرية داخل الإقامة. انقر واسحب للتنقل في جميع الأرجاء.",
    tabFacadeText: "الواجهة والمشهد الليلي", tabInteriorText: "الشقق", tabPoolText: "المسبح والحدائق", tabBeachText: "شاطئ مـرزقة",
    hintText: "انقر واسحب للاستكشاف",
    galTag: "معرض الصور",
    galTitle: "الإقـامـة<br /><em>بـالـصـور</em>",
    galFilterAll: "الكل", galFilterExt: "الخارج", galFilterInt: "التصميم الداخلي", galFilterNight: "المسبح وليلاً", galFilterCommon: "المساحات المشتركة", galFilterBeach: "الشاطئ والبحر",
    galCap1: "الواجهة العصرية", galCap2: "مشهد ليلي", galCap3: "المصاعد والبهو الرخامي", galCap4: "موقف السيارات السفلي",
    galCap5: "أروقة فاخرة", galCap6: "إطلالة بانورامية", galCap7: "المسبح والبهو", galCap8: "البهو الرئيسي والثريا",
    galCap9: "بهو الطابق الأرضي", galCap10: "المسبح والحدائق",
    galCapBeach1: "شاطئ المرازقة ومظلات القش", galCapBeach2: "الرمال الذهبية والمياه الفيروزية", galCapBeach3: "مياه البحر الأبيض المتوسط الكريستالية", galCapBeach4: "الأفق البحري والرمال البيضاء",
    quartierTag: "أسلوب العيش المتوسطي",
    quartierTitle: "مـرزقة والـمـنـطـقـة<br /><em>بين البحر، الثقافة والاسترخاء</em>",
    quartierSub: "موقع استثنائي بين نابل والحمامات، يجمع بين هدوء الساحل وحيوية الثقافة المتوسطية.",
    qCard1Title: "شاطئ مـرزقة", qCard1Desc: "رمال بيضاء ناعمة، مياه فيروزية هادئة وغروب ساحر للشمس يطل على خليج الحمامات.",
    qCard2Title: "نابل والصناعات التقليدية", qCard2Desc: "عاصمة الخزف والفخار التونسي، أسواق التوابل التقليدية وتقطير زهر البرتقال العريق.",
    qCard3Title: "شمال الحمامات والمارينا", qCard3Desc: "مطاعم راقية على البحر، مقاهي المدينة العتيقة ونوادٍ بحرية متميزة.",
    qCard4Title: "ملاعب غولف ياسمين وسيتروس", qCard4Desc: "ملاعب غولف دولية 45 حفرة وسط أشجار الزيتون والتلال الخضراء الطبيعية.",
    appTag: "المنظومة الذكية",
    appTitle: "تحكّم في إقامتك<br /><em>مباشرة من هاتفك</em>",
    appBody: "أبلغ عن الأعطال بضغطة زر، تواصل مباشرة مع السنديك والكونسيرج، واطلع على الإعلانات الرسمية وتتبع طلباتك في الوقت الفعلي.",
    appFeatures: ["متابعة البلاغات والاقتراحات في الوقت الفعلي", "مراسلة فورية مع إدارة السنديك والكونسيرج", "تذكير بالمساهمات وتقارير PDF مشتركة", "إشعارات وإعلانات فورية للإقامة"],
    appStoreSub: "تنزيل من", playStoreSub: "متوفر على",
    locTag: "موقع استراتيجي ممتاز",
    locTitle: "مـرزقة، نـابـل<br /><em>على بعد 300م من البحر</em>",
    locBadge1Val: "300م",   locBadge1Lbl: "شاطئ رملي (3 دقائق مشياً)",
    locBadge2Val: "5 دقائق", locBadge2Lbl: "وسط مدينة نابل والأسواق",
    locBadge3Val: "45 دقيقة", locBadge3Lbl: "مطار النفيضة / تونس قرطاج",
    mapPinTitle: "إقامة لو خاكاراندا",
    mapPinAddr: "مرزقة، نابل، تونس · على بعد 300م من الشاطئ",
    gpsLabel: "الاتجاهات من موقعي الحالي",
    conTag: "المكتب التجاري وإدارة السنديك",
    conTitle: "تواصلوا معنا،<br /><em>يسعدنا استقبالكم</em>",
    conSub: "فريقنا التجاري والإداري في خدمتكم لتنظيم زيارة خاصة أو الإجابة عن كافة استفساراتكم.",
    conLabel1: "البريد الرسمي", conLabel2: "الخط المباشر", conLabel3: "العنوان", conLabel4: "الوصول للشاطئ",
    conAddr: "شارع الحبيب بورقيبة، مرزقة، نابل", conBeach: "على بعد 300 متر من البحر",
    fnameLabel: "الاسم الأول", lnameLabel: "اللقب", emailLabel: "البريد الإلكتروني", phoneLabel: "الهاتف / واتساب", msgLabel: "الرسالة / نوع العقار المطلوب",
    fnamePh: "اسمك الأول", lnamePh: "لقبك", emailPh: "your@email.com", phonePh: "+216 ...", msgPh: "رسالتك...",
    formSubmit: "إرسال الرسالة",
    successMsg: "تم إرسال رسالتك بنجاح. سيتواصل فريقنا معك خلال 24 ساعة.",
    footerTagline: "التميز في أدق التفاصيل.",
    footerCopy: "© 2024 - 2026 إقامة لو خاكاراندا. جميع الحقوق محفوظة.",
    navAbout: "عن المشروع", navAmen: "المميزات", navTour: "جولة 360°", navGal: "الصور", navQuartier: "المنطقة", navApp: "تطبيق المقيمين", navCon: "تواصل معنا",
    heroCta1: "اكتشف الإقامة", heroCta2: "جولة افتراضية 360°"
  },

  /* ════════ ESPAÑOL ════════ */
  es: {
    heroBadgeText: "Residencia Excepcional · Mrezgua Nabeul · A 300m de la Playa",
    heroEyebrowText: "Mrezgua · Nabeul · Túnez",
    heroTagline: "El arte de vivir en su más bella expresión",
    scrollText: "Desplazar para explorar",
    stat1: "Bloques Residenciales", stat2: "Piscinas de Agua Cristalina", stat3: "de la Playa Mediterránea", stat4: "Conserjería & Seguridad 24/7",
    badgeLabel: "Entrega Inmediata", floatTitle: "Arquitectura Contemporánea", floatSub: "Diseño mediterráneo y acabados de lujo",
    aboutTag: "Acerca del Proyecto",
    aboutTitle: "Un Arte de Vivir<br /><em>Excepcional</em>",
    aboutBody: "Ubicada en el corazón de Mrezgua, a solo 300 metros de la magnífica playa de Nabeul, la Residencia Le Jacaranda es fruto de una ambiciosa visión arquitectónica: un espacio que combina modernidad, elegancia y serenidad.",
    aboutBody2: "Sus fachadas de blanco inmaculado, sus amplios balcones y sus zonas comunes cuidadosamente ajardinadas hacen de esta residencia un remanso de paz con diseño contemporáneo de alta gama.",
    aboutFeatures: ["Arquitectura contemporánea de prestigio", "Acabados de primera calidad en mármol y aluminio", "Espacios verdes y jardines mediterráneos", "Residencia cerrada, vigilada 24h/24 con control de acceso"],
    aboutCtaText: "Explorar en 360°",
    amenTag: "Servicios & Prestaciones",
    amenTitle: "Todo el Lujo<br /><em>en un Solo Lugar</em>",
    amen1: "Piscinas",          amen1d: "Dos piscinas cristalinas iluminadas para momentos de relax incomparables a cualquier hora.",
    amen2: "Seguridad 24h/24",  amen2d: "Acceso seguro, videovigilancia continua y sistema de control avanzado para su tranquilidad.",
    amen3: "Parking Privado",   amen3d: "Plazas de aparcamiento cubiertas y seguras, exclusivas para los residentes.",
    amen4: "Zonas Verdes",      amen4d: "Jardines mediterráneos para un ambiente tranquilo y revitalizante.",
    amen5: "Acabados Premium",  amen5d: "Materiales nobles, suelos de gran formato, carpintería de aluminio — prestaciones de excepción.",
    amen6: "Conserjería",       amen6d: "Servicio de conserjería disponible para atender todas sus solicitudes con máxima discreción.",
    typoTag: "Viviendas & Planos",
    typoTitle: "Espacios de Vida<br /><em>Diseñados para la Excelencia</em>",
    typoSub: "Viviendas armoniosas desde apartamentos optimizados de 1 dormitorio hasta áticos exclusivos con vistas panorámicas al mar.",
    tourTag: "Visita Virtual",
    tourTitle: "Explore la Residencia<br /><em>en 360°</em>",
    tourSub: "Navegue libremente por nuestros espacios. Haga clic y arrastre para explorar cada rincón.",
    tabFacadeText: "Fachada y Noche", tabInteriorText: "Apartamento", tabPoolText: "Piscina y Jardines", tabBeachText: "Playa de Mrezgua",
    hintText: "Haga clic y arrastre para explorar",
    galTag: "Galería Fotográfica",
    galTitle: "La Residencia<br /><em>en Imágenes</em>",
    galFilterAll: "Todas", galFilterExt: "Exterior", galFilterInt: "Interiores", galFilterNight: "Piscina y Noche", galFilterCommon: "Zonas Comunes", galFilterBeach: "Playa y Mar",
    galCap1: "Fachada Contemporánea", galCap2: "Vista Nocturna", galCap3: "Ascensores & Mármol", galCap4: "Parking Subterráneo",
    galCap5: "Pasillos Elegantes", galCap6: "Ángulo Panorámico", galCap7: "Piscina & Lobby", galCap8: "Gran Vestíbulo & Lámpara",
    galCap9: "Vestíbulo Planta Baja", galCap10: "Piscina & Jardines",
    galCapBeach1: "Playa de Mrezgua y Sombrillas", galCapBeach2: "Costa Dorada y Mar Esmeralda", galCapBeach3: "Aguas Cristalinas Mediterráneas", galCapBeach4: "Horizonte Costero y Arena Blanca",
    quartierTag: "Estilo de Vida Mediterráneo",
    quartierTitle: "Mrezgua y sus Tesoros<br /><em>Entre Mar, Cultura y Ocio</em>",
    quartierSub: "Una ubicación excepcional entre Nabeul y Hammamet, que combina la tranquilidad costera con una cultura vibrante.",
    qCard1Title: "Playa de Mrezgua", qCard1Desc: "Arena blanca, aguas turquesas y puestas de sol mágicas frente al golfo de Hammamet.",
    qCard2Title: "Nabeul y Artesanía", qCard2Desc: "Capital tunecina de la cerámica, zocos tradicionales de especias y destilerías de azahar.",
    qCard3Title: "Hammamet Norte y Marina", qCard3Desc: "Restaurantes gastronómicos junto al mar, emblemáticos cafés de la Medina y exclusivos clubes náuticos.",
    qCard4Title: "Campos de Golf Citrus y Yasmine", qCard4Desc: "Campos de campeonato internacional de 45 hoyos rodeados de olivos y colinas verdes.",
    appTag: "Ecosistema Conectado",
    appTitle: "Gestione su residencia<br /><em>desde su smartphone</em>",
    appBody: "Notifique incidencias en un clic, contacte con el administrador y la conserjería, reciba avisos oficiales y siga sus trámites en tiempo real.",
    appFeatures: ["Seguimiento de reclamaciones y sugerencias en tiempo real", "Mensajería directa con la administración y conserjería", "Recordatorios de cuotas e informes en PDF", "Notificaciones prioritarias de la residencia"],
    appStoreSub: "Descargar en", playStoreSub: "Disponible en",
    locTag: "Ubicación Estratégica",
    locTitle: "Mrezgua, Nabeul<br /><em>A 300m del Mar</em>",
    locBadge1Val: "300m",   locBadge1Lbl: "Playa de arena fina (3 min a pie)",
    locBadge2Val: "5 min",  locBadge2Lbl: "Centro de Nabeul y Mercados",
    locBadge3Val: "45 min", locBadge3Lbl: "Aeropuerto de Enfidha / Túnez",
    mapPinTitle: "Residencia Le Jacaranda",
    mapPinAddr: "Mrezgua, Nabeul, Túnez · A 300m de la playa",
    gpsLabel: "Cómo llegar desde mi ubicación",
    conTag: "Oficina Comercial & Gestión",
    conTitle: "Escríbanos,<br /><em>Reunámonos</em>",
    conSub: "Nuestro equipo comercial y de gestión está a su entera disposición para organizar una visita privada o responder a sus dudas.",
    conLabel1: "Correo Oficial", conLabel2: "Línea Directa", conLabel3: "Dirección", conLabel4: "Acceso Playa",
    conAddr: "Avenida Habib Bourguiba, Mrezgua, Nabeul", conBeach: "A 300 metros del mar",
    fnameLabel: "Nombre", lnameLabel: "Apellido", emailLabel: "Correo electrónico", phoneLabel: "Teléfono / WhatsApp", msgLabel: "Mensaje / Tipo de inmueble deseado",
    fnamePh: "Su nombre", lnamePh: "Su apellido", emailPh: "su@correo.com", phonePh: "+216 ...", msgPh: "Su mensaje...",
    formSubmit: "Enviar Mensaje",
    successMsg: "Mensaje enviado con éxito. Nuestro equipo se pondrá en contacto en 24 horas.",
    footerTagline: "La excelencia en cada detalle.",
    footerCopy: "© 2024 - 2026 Residencia Le Jacaranda. Todos los derechos reservados.",
    navAbout: "Acerca de", navAmen: "Servicios", navTour: "Visita 360°", navGal: "Galería", navQuartier: "Barrio", navApp: "App Residentes", navCon: "Contacto",
    heroCta1: "Descubrir la Residencia", heroCta2: "Visita Virtual 360°"
  },

  /* ════════ ITALIANO ════════ */
  it: {
    heroBadgeText: "Residenza d'Eccezione · Mrezgua Nabeul · A 300m dalla Spiaggia",
    heroEyebrowText: "Mrezgua · Nabeul · Tunisia",
    heroTagline: "L'arte di vivere nella sua più bella espressione",
    scrollText: "Scorri per esplorare",
    stat1: "Edifici Residenziali", stat2: "Piscine di Acqua Cristallina", stat3: "dalla Spiaggia del Mediterraneo", stat4: "Portineria & Sicurezza 24/7",
    badgeLabel: "Consegna Immediata", floatTitle: "Architettura Contemporanea", floatSub: "Design mediterraneo & finiture di lusso",
    aboutTag: "Informazioni sul Progetto",
    aboutTitle: "Un'Arte di Vivere<br /><em>Eccezionale</em>",
    aboutBody: "Immersa nel cuore di Mrezgua, a soli 300 metri dalla splendida spiaggia di Nabeul, la Résidence Le Jacaranda nasce da una visione ambiziosa: offrire uno spazio abitativo che unisce modernità, eleganza e serenità.",
    aboutBody2: "Le sue facciate bianche immacolate, i suoi ampi balconi e le aree comuni curate fanno di questa residenza un'oasi di pace dal design contemporaneo di alto livello.",
    aboutFeatures: ["Architettura contemporanea di prestigio", "Finiture di prima scelta in marmo e alluminio", "Spazi verdi e giardini mediterranei curati", "Residenza recintata, custodita 24/7 con controllo accessi"],
    aboutCtaText: "Esplora a 360°",
    amenTag: "Servizi & Comfort",
    amenTitle: "Tutto il Lusso<br /><em>in un Solo Luogo</em>",
    amen1: "Piscine",          amen1d: "Due piscine cristalline illuminate per momenti di relax senza pari a qualsiasi ora.",
    amen2: "Sicurezza 24h/24",  amen2d: "Accesso protetto, videosorveglianza continua e sistema di controllo avanzato per la vostra tranquillità.",
    amen3: "Parcheggio Privato", amen3d: "Posti auto coperti e custoditi ad uso esclusivo dei residenti.",
    amen4: "Aree Verdi",       amen4d: "Giardini paesaggistici e flora mediterranea per un'atmosfera distensiva e rigenerante.",
    amen5: "Finiture di Pregio", amen5d: "Materiali nobili, pavimenti in grande formato, infissi in alluminio — standard d'eccellenza.",
    amen6: "Concierge",        amen6d: "Servizio di portineria dedicato per soddisfare ogni richiesta con la massima discrezione.",
    typoTag: "Alloggi & Piante",
    typoTitle: "Spazi Abitativi<br /><em>Progettati per l'Eccellenza</em>",
    typoSub: "Alloggi armoniosi da bilocali ottimizzati a prestigiosi attici con vista panoramica sul mare.",
    tourTag: "Visita Virtuale",
    tourTitle: "Esplora la Residenza<br /><em>a 360°</em>",
    tourSub: "Naviga liberamente negli spazi. Clicca e trascina per esplorare ogni dettaglio.",
    tabFacadeText: "Facciata & Notte", tabInteriorText: "Appartamento", tabPoolText: "Piscina & Giardini", tabBeachText: "Spiaggia di Mrezgua",
    hintText: "Clicca e trascina per esplorare",
    galTag: "Galleria Fotografica",
    galTitle: "La Residenza<br /><em>in Immagini</em>",
    galFilterAll: "Tutte", galFilterExt: "Esterno", galFilterInt: "Interni", galFilterNight: "Piscina & Notte", galFilterCommon: "Spazi Comuni", galFilterBeach: "Spiaggia e Mare",
    galCap1: "Facciata Contemporanea", galCap2: "Vista Notturna", galCap3: "Ascensori in Marmo", galCap4: "Parcheggio Sotterraneo",
    galCap5: "Corridoi Eleganti", galCap6: "Angolo Panoramico", galCap7: "Piscina & Lobby", galCap8: "Grande Atrio & Lampadario",
    galCap9: "Atrio Piano Terra", galCap10: "Piscina & Giardini",
    galCapBeach1: "Spiaggia di Mrezgua e Ombrelloni", galCapBeach2: "Riva Dorata e Mare Smeraldo", galCapBeach3: "Acque Cristalline del Mediterraneo", galCapBeach4: "Orizzonte Costiero e Sabbia Bianca",
    quartierTag: "Stile di Vita Mediterraneo",
    quartierTitle: "Mrezgua & i Suoi Tesori<br /><em>Tra Mare, Cultura e Relax</em>",
    quartierSub: "Una posizione privilegiata tra Nabeul e Hammamet, che unisce la quiete marina alla vivacità culturale.",
    qCard1Title: "Spiaggia di Mrezgua", qCard1Desc: "Sabbia bianca, acque cristalline calme e tramonti indimenticabili sul Golfo di Hammamet.",
    qCard2Title: "Nabeul & Artigianato", qCard2Desc: "Capitale tunisina della ceramica, mercati tradizionali di spezie e storiche distillerie di fiori d'arancio.",
    qCard3Title: "Hammamet Nord & Marina", qCard3Desc: "Ristoranti d'eccellenza sul mare, caffè storici della Medina ed esclusivi club nautici.",
    qCard4Title: "Golf Citrus & Yasmine", qCard4Desc: "Campi da golf di livello internazionale a 45 buche tra uliveti e verdi colline.",
    appTag: "Ecosistema Connesso",
    appTitle: "Gestisci la residenza<br /><em>dal tuo smartphone</em>",
    appBody: "Segnala un guasto in un clic, contatta l'amministrazione e il custode, ricevi avvisi ufficiali e segui le tue richieste in tempo reale.",
    appFeatures: ["Monitoraggio in tempo reale di segnalazioni e proposte", "Messaggistica diretta con Amministratore & Custode", "Promemoria rate e report PDF condivisi", "Notifiche prioritarie e avvisi del condominio"],
    appStoreSub: "Scarica su", playStoreSub: "Disponibile su",
    locTag: "Posizione Strategica",
    locTitle: "Mrezgua, Nabeul<br /><em>A 300m dal Mare</em>",
    locBadge1Val: "300m",   locBadge1Lbl: "Spiaggia di sabbia fine (3 min a piedi)",
    locBadge2Val: "5 min",  locBadge2Lbl: "Centro di Nabeul & Mercati",
    locBadge3Val: "45 min", locBadge3Lbl: "Aeroporto di Enfidha / Tunisi",
    mapPinTitle: "Résidence Le Jacaranda",
    mapPinAddr: "Mrezgua, Nabeul, Tunisia · A 300m dalla spiaggia",
    gpsLabel: "Indicazioni dalla mia posizione",
    conTag: "Ufficio Commerciale & Amministrazione",
    conTitle: "Scrivici,<br /><em>Incontriamoci</em>",
    conSub: "Il nostro team commerciale e di gestione è a vostra disposizione per organizzare una visita privata o rispondere a ogni domanda.",
    conLabel1: "Email Ufficiale", conLabel2: "Telefono Diretto", conLabel3: "Indirizzo", conLabel4: "Accesso Spiaggia",
    conAddr: "Avenue Habib Bourguiba, Mrezgua, Nabeul", conBeach: "A 300 metri dal mare",
    fnameLabel: "Nome", lnameLabel: "Cognome", emailLabel: "Email", phoneLabel: "Telefono / WhatsApp", msgLabel: "Messaggio / Tipologia richiesta",
    fnamePh: "Il tuo nome", lnamePh: "Il tuo cognome", emailPh: "tua@email.com", phonePh: "+216 ...", msgPh: "Il tuo messaggio...",
    formSubmit: "Invia il Messaggio",
    successMsg: "Messaggio inviato con successo. Il nostro team vi contatterà entro 24 ore.",
    footerTagline: "L'eccellenza in ogni dettaglio.",
    footerCopy: "© 2024 - 2026 Résidence Le Jacaranda. Tutti i diritti riservati.",
    navAbout: "Chi Siamo", navAmen: "Servizi", navTour: "Visita 360°", navGal: "Galleria", navQuartier: "Quartiere", navApp: "App Residenti", navCon: "Contatti",
    heroCta1: "Scopri la Residenza", heroCta2: "Visita Virtuale 360°"
  },

  /* ════════ DEUTSCH ════════ */
  de: {
    heroBadgeText: "Außergewöhnliche Residenz · Mrezgua Nabeul · 300m vom Strand",
    heroEyebrowText: "Mrezgua · Nabeul · Tunesien",
    heroTagline: "Die Kunst des Wohnens in schönster Vollendung",
    scrollText: "Scrollen zum Erkunden",
    stat1: "Wohnblöcke", stat2: "Kristallklare Pools", stat3: "vom Mittelmeerstrand", stat4: "24/7 Concierge & Sicherheit",
    badgeLabel: "Sofortige Übergabe", floatTitle: "Zeitgenössische Architektur", floatSub: "Mediterranes Design & Luxusausstattung",
    aboutTag: "Über das Projekt",
    aboutTitle: "Ein Außergewöhnliches<br /><em>Lebensgefühl</em>",
    aboutBody: "Im Herzen von Mrezgua, nur 300 Meter vom herrlichen Strand von Nabeul entfernt, vereint die Résidence Le Jacaranda Modernität, Eleganz und Ruhe in höchster Vollendung.",
    aboutBody2: "Strahlend weiße Fassaden, großzügige Balkone und liebevoll gestaltete Grünanlagen machen diese Residenz zu einer friedvollen Oase im gehobenen zeitgenössischen Design.",
    aboutFeatures: ["Prestigeträchtige zeitgenössische Architektur", "Erstklassige Ausführungen in Marmor und Aluminium", "Mediterrane Grünflächen und angelegte Gärten", "Umzäunte, rund um die Uhr bewachte Residenz mit Zutrittskontrolle"],
    aboutCtaText: "360° Rundgang",
    amenTag: "Ausstattung & Service",
    amenTitle: "Exklusiver Luxus<br /><em>an einem Ort</em>",
    amen1: "Schwimmbäder",   amen1d: "Zwei beleuchtete, kristallklare Pools für unvergleichliche Entspannungsmomente zu jeder Tageszeit.",
    amen2: "24/7 Sicherheit", amen2d: "Gesicherter Zugang, permanente Überwachung und modernste Kontrollsysteme für Ihre vollkommene Ruhe.",
    amen3: "Privatparkplatz", amen3d: "Überdachte und gesicherte Stellplätze exklusiv für die Bewohner der Residenz.",
    amen4: "Grünanlagen",    amen4d: "Angelegte Gärten und mediterrane Bepflanzung für eine wohltuende, erholsame Atmosphäre.",
    amen5: "Edle Materialien", amen5d: "Hochwertige Baustoffe, großformatige Fliesen, Aluminiumelemente — außergewöhnliche Standards.",
    amen6: "Concierge-Service", amen6d: "Verlässlicher Service zur diskreten Erfüllung all Ihrer Anliegen.",
    typoTag: "Wohnungen & Grundrisse",
    typoTitle: "Lebensräume<br /><em>Für Exzellenz gestaltet</em>",
    typoSub: "Harmonische Grundrisse von optimierten 2-Zimmer-Wohnungen bis hin zu exklusiven Penthouses mit Panoramablick auf das Meer.",
    tourTag: "Virtueller Rundgang",
    tourTitle: "Entdecken Sie die Residenz<br /><em>in 360°</em>",
    tourSub: "Bewegen Sie sich frei durch unsere Räumlichkeiten. Klicken und ziehen Sie, um jede Ecke zu erkunden.",
    tabFacadeText: "Fassade & Nacht", tabInteriorText: "Wohnung", tabPoolText: "Pool & Gärten", tabBeachText: "Strand von Mrezgua",
    hintText: "Klicken und ziehen zum Umschauen",
    galTag: "Fotogalerie",
    galTitle: "Die Residenz<br /><em>in Bildern</em>",
    galFilterAll: "Alle", galFilterExt: "Außenbereich", galFilterInt: "Innenräume", galFilterNight: "Pool & Nacht", galFilterCommon: "Gemeinschaftsbereiche", galFilterBeach: "Strand & Meer",
    galCap1: "Zeitgenössische Fassade", galCap2: "Nachtansicht", galCap3: "Marmoraufzüge & Foyer", galCap4: "Tiefgarage",
    galCap5: "Elegante Korridore", galCap6: "Panoramablick", galCap7: "Pool & Lobby", galCap8: "Große Halle & Kronleuchter",
    galCap9: "Erdgeschossfoyer", galCap10: "Pool & Gärten",
    galCapBeach1: "Mrezgua Strand & Sonnenschirme", galCapBeach2: "Goldenes Ufer & Smaragdmeer", galCapBeach3: "Mediterranes Kristallklares Wasser", galCapBeach4: "Küstenhorizont & Weißer Sand",
    quartierTag: "Mediterraner Lebensstil",
    quartierTitle: "Mrezgua & Seine Schätze<br /><em>Zwischen Meer, Kultur und Erholung</em>",
    quartierSub: "Eine privilegierte Lage zwischen Nabeul und Hammamet, die mediterrane Ruhe mit urbaner Lebensqualität verbindet.",
    qCard1Title: "Strand von Mrezgua", qCard1Desc: "Feiner weißer Sand, ruhiges türkisfarbenes Wasser und zauberhafte Sonnenuntergänge über dem Golf von Hammamet.",
    qCard2Title: "Nabeul & Kunsthandwerk", qCard2Desc: "Tunesische Hauptstadt der Keramik, traditionelle Gewürzmärkte und historische Orangenblüten-Destillerien.",
    qCard3Title: "Nord-Hammamet & Marina", qCard3Desc: "Exklusive Restaurants am Meer, traditionsreiche Cafés in der Medina und erstklassige Wassersport-Clubs.",
    qCard4Title: "Golfplätze Citrus & Yasmine", qCard4Desc: "Internationale 45-Loch-Meisterschaftsplätze inmitten von Olivenhainen und sanften Hügeln.",
    appTag: "Vernetztes Ökosystem",
    appTitle: "Verwalten Sie Ihr Zuhause<br /><em>direkt per Smartphone</em>",
    appBody: "Schadensmeldungen mit einem Klick, direkter Kontakt zur Hausverwaltung und zum Concierge, offizielle Mitteilungen in Echtzeit und Statusverfolgung.",
    appFeatures: ["Echtzeit-Verfolgung von Anfragen & Vorschlägen", "Direkter Chat mit Verwaltung & Concierge", "Zahlungserinnerungen & geteilte PDF-Berichte", "Prioritäre Benachrichtigungen der Residenz"],
    appStoreSub: "Laden im", playStoreSub: "Jetzt bei",
    locTag: "Strategische Lage",
    locTitle: "Mrezgua, Nabeul<br /><em>300m vom Meer entfernt</em>",
    locBadge1Val: "300m",   locBadge1Lbl: "Feiner Sandstrand (3 Min. zu Fuß)",
    locBadge2Val: "5 Min.", locBadge2Lbl: "Stadtzentrum Nabeul & Märkte",
    locBadge3Val: "45 Min.", locBadge3Lbl: "Flughafen Enfidha / Tunis",
    mapPinTitle: "Résidence Le Jacaranda",
    mapPinAddr: "Mrezgua, Nabeul, Tunesien · 300m vom Strand",
    gpsLabel: "Route von meinem Standort",
    conTag: "Verkaufsbüro & Verwaltung",
    conTitle: "Schreiben Sie uns,<br /><em>Lernen wir uns kennen</em>",
    conSub: "Unser Vertriebs- und Verwaltungsteam steht Ihnen gerne zur Seite, um eine private Besichtigung zu vereinbaren oder Ihre Fragen zu beantworten.",
    conLabel1: "Offizielle E-Mail", conLabel2: "Direktrufnummer", conLabel3: "Adresse", conLabel4: "Strandzugang",
    conAddr: "Avenue Habib Bourguiba, Mrezgua, Nabeul", conBeach: "300 Meter vom Meer entfernt",
    fnameLabel: "Vorname", lnameLabel: "Nachname", emailLabel: "E-Mail", phoneLabel: "Telefon / WhatsApp", msgLabel: "Nachricht / Gewünschter Wohnungstyp",
    fnamePh: "Ihr Vorname", lnamePh: "Ihr Nachname", emailPh: "ihre@email.de", phonePh: "+216 ...", msgPh: "Ihre Nachricht...",
    formSubmit: "Nachricht Senden",
    successMsg: "Nachricht erfolgreich gesendet. Unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.",
    footerTagline: "Exzellenz bis ins kleinste Detail.",
    footerCopy: "© 2024 - 2026 Résidence Le Jacaranda. Alle Rechte vorbehalten.",
    navAbout: "Über Uns", navAmen: "Ausstattung", navTour: "360° Rundgang", navGal: "Galerie", navQuartier: "Quartier", navApp: "Bewohner-App", navCon: "Kontakt",
    heroCta1: "Residenz entdecken", heroCta2: "360° Rundgang"
  }
};

/* ═══════════════════════════════════════════════════
   APPLY TRANSLATION
═══════════════════════════════════════════════════ */
let currentLang = 'fr';

function applyTranslation(lang) {
  const t  = translations[lang];
  const lm = langMeta[lang];
  if (!t || !lm) return;
  currentLang = lang;

  /* document dir + lang */
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('dir', lm.dir);
  document.body.classList.toggle('rtl', lm.dir === 'rtl');

  /* update dropdown button */
  const langCurrentEl = document.getElementById('langCurrent');
  if (langCurrentEl) {
    const flagEl = langCurrentEl.querySelector('.lang-flag');
    const codeEl = langCurrentEl.querySelector('.lang-code');
    if (flagEl) flagEl.textContent = lm.flag;
    if (codeEl) codeEl.textContent = lm.code;
  }
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* simple text IDs */
  const textIds = [
    'heroBadgeText','heroEyebrowText','heroTagline','scrollText',
    'stat1','stat2','stat3','stat4',
    'badgeLabel','floatTitle','floatSub','aboutCtaText',
    'amen1','amen1d','amen2','amen2d','amen3','amen3d',
    'amen4','amen4d','amen5','amen5d','amen6','amen6d',
    'typoSub','tourSub','tabFacadeText','tabInteriorText','tabPoolText','tabBeachText','hintText',
    'galFilterAll','galFilterExt','galFilterInt','galFilterNight','galFilterCommon','galFilterBeach',
    'galCap1','galCap2','galCap3','galCap4','galCap5','galCap6','galCap7','galCap8','galCap9','galCap10',
    'galCapBeach1','galCapBeach2','galCapBeach3','galCapBeach4',
    'quartierSub','qCard1Title','qCard1Desc','qCard2Title','qCard2Desc','qCard3Title','qCard3Desc','qCard4Title','qCard4Desc',
    'appBody','appStoreSub','playStoreSub',
    'locBadge1Val','locBadge1Lbl','locBadge2Val','locBadge2Lbl','locBadge3Val','locBadge3Lbl',
    'mapPinTitle','mapPinAddr','gpsLabel',
    'conSub','conLabel1','conLabel2','conLabel3','conLabel4','conAddr','conBeach',
    'fnameLabel','lnameLabel','emailLabel','phoneLabel','msgLabel',
    'formSubmit','successMsg','footerTagline','footerCopy',
    'aboutTag','amenTag','typoTag','tourTag','galTag','quartierTag','appTag','locTag','conTag',
    'heroCta1','heroCta2',
    'navAbout','navAmen','navTour','navGal','navQuartier','navApp','navCon'
  ];
  textIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id] !== undefined) el.textContent = t[id];
  });

  /* innerHTML titles */
  ['aboutTitle','amenTitle','typoTitle','tourTitle','galTitle','quartierTitle','appTitle','locTitle','conTitle'].forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id]) el.innerHTML = t[id];
  });

  /* about body */
  const ab = document.getElementById('aboutBody');
  const ab2 = document.getElementById('aboutBody2');
  if (ab && t.aboutBody)   ab.textContent  = t.aboutBody;
  if (ab2 && t.aboutBody2) ab2.textContent = t.aboutBody2;

  /* about features */
  const featureItems = document.querySelectorAll('#aboutFeatures li');
  featureItems.forEach((li, i) => {
    if (!t.aboutFeatures || !t.aboutFeatures[i]) return;
    const icon = li.querySelector('.feat-icon');
    li.textContent = '';
    if (icon) li.appendChild(icon);
    li.appendChild(document.createTextNode(' ' + t.aboutFeatures[i]));
  });

  /* app features */
  const appFeatureItems = document.querySelectorAll('#appFeatures li');
  appFeatureItems.forEach((li, i) => {
    if (!t.appFeatures || !t.appFeatures[i]) return;
    const icon = li.querySelector('.feat-icon');
    li.textContent = '';
    if (icon) li.appendChild(icon);
    li.appendChild(document.createTextNode(' ' + t.appFeatures[i]));
  });

  /* form placeholders */
  [['fname', 'fnamePh'], ['lname','lnamePh'], ['email','emailPh'], ['phone','phonePh'], ['message','msgPh']].forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && t[key]) el.placeholder = t[key];
  });
}

/* ═══════════════════════════════════════════════════
   LANGUAGE DROPDOWN
═══════════════════════════════════════════════════ */
const langDropdown = document.getElementById('langDropdown');
const langCurrent  = document.getElementById('langCurrent');
const langMenu     = document.getElementById('langMenu');

if (langCurrent && langMenu) {
  langCurrent.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
    langCurrent.setAttribute('aria-expanded', langDropdown.classList.contains('open'));
  });

  langMenu.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTranslation(btn.dataset.lang);
      langDropdown.classList.remove('open');
      langCurrent.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!langDropdown.contains(e.target)) {
      langDropdown.classList.remove('open');
      langCurrent.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      langDropdown.classList.remove('open');
      langCurrent.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('.mob-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTranslation(btn.dataset.lang);
      if (typeof mobileMenu !== 'undefined') {
        mobileMenu.classList.remove('open');
      }
    });
  });
}

/* ═══════════════════════════════════════════════════
   NAVBAR SCROLL
═══════════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════
   HAMBURGER MENU
═══════════════════════════════════════════════════ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    hamburger.setAttribute('aria-expanded', menuOpen);
  });
  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => { menuOpen = false; mobileMenu.classList.remove('open'); });
  });
}

/* ═══════════════════════════════════════════════════
   SMOOTH NAV CLICKS
═══════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.getElementById(a.getAttribute('href').slice(1));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* ═══════════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════════ */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('formSubmit');
    if (btn) {
      btn.style.opacity = '0.6';
      btn.style.pointerEvents = 'none';
    }
    setTimeout(() => {
      const formSuccess = document.getElementById('formSuccess');
      if (formSuccess) formSuccess.classList.add('visible');
      contactForm.reset();
      if (btn) {
        btn.style.opacity = '';
        btn.style.pointerEvents = '';
      }
    }, 900);
  });
}

/* ═══════════════════════════════════════════════════
   LIGHTBOX
═══════════════════════════════════════════════════ */
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxCount = document.getElementById('lightboxCounter');
let currentGalIdx   = 0;
const galImages     = [];

document.querySelectorAll('.gallery-item').forEach((item, i) => {
  const img = item.querySelector('img');
  if (img) galImages.push({ src: img.src, alt: img.alt });
  item.addEventListener('click', () => { currentGalIdx = i; openLightbox(i); });
});

function openLightbox(idx) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = galImages[idx].src;
  lightboxImg.alt = galImages[idx].alt;
  if (lightboxCount) lightboxCount.textContent = (idx + 1) + ' / ' + galImages.length;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

const lbClose = document.getElementById('lightboxClose');
if (lbClose) lbClose.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

const lbPrev = document.getElementById('lightboxPrev');
if (lbPrev) {
  lbPrev.addEventListener('click', () => {
    if (galImages.length === 0) return;
    currentGalIdx = (currentGalIdx - 1 + galImages.length) % galImages.length;
    openLightbox(currentGalIdx);
  });
}

const lbNext = document.getElementById('lightboxNext');
if (lbNext) {
  lbNext.addEventListener('click', () => {
    if (galImages.length === 0) return;
    currentGalIdx = (currentGalIdx + 1) % galImages.length;
    openLightbox(currentGalIdx);
  });
}

document.addEventListener('keydown', e => {
  if (!lightbox || !lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft' && galImages.length > 0)  { currentGalIdx = (currentGalIdx - 1 + galImages.length) % galImages.length; openLightbox(currentGalIdx); }
  if (e.key === 'ArrowRight' && galImages.length > 0) { currentGalIdx = (currentGalIdx + 1) % galImages.length; openLightbox(currentGalIdx); }
});

/* ═══════════════════════════════════════════════════
   PARALLAX HERO
═══════════════════════════════════════════════════ */
const heroImg = document.querySelector('#heroParallaxImg');
if (heroImg) {
  window.addEventListener('scroll', () => {
    heroImg.style.transform = 'translateY(' + (window.scrollY * 0.25) + 'px)';
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════
   ANIMATED STAT COUNTERS
═══════════════════════════════════════════════════ */
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-number[data-target]').forEach(el => {
          animateCounter(el, parseInt(el.dataset.target, 10));
        });
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  counterObserver.observe(statsSection);
}

/* ═══════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .tilt-card').forEach(el => {
  revealObserver.observe(el);
});

/* ═══════════════════════════════════════════════════
   3D TILT ON AMENITY CARDS
═══════════════════════════════════════════════════ */
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect   = card.getBoundingClientRect();
    const x      = e.clientX - rect.left - rect.width  / 2;
    const y      = e.clientY - rect.top  - rect.height / 2;
    const rotY   = (x / rect.width)  * 12;
    const rotX   = -(y / rect.height) * 12;
    card.style.transform = 'perspective(800px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) translateY(-6px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s ease';
    setTimeout(() => { card.style.transition = ''; }, 500);
  });
});

/* ═══════════════════════════════════════════════════
   SCROLL PROGRESS BAR
═══════════════════════════════════════════════════ */
const progressBar = document.getElementById('scrollProgress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = ((scrollTop / docHeight) * 100) + '%';
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════════════ */
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
if (cursor && cursorFollower && window.innerWidth > 768) {
  let mouseX = 0, mouseY = 0, follX = 0, follY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });
  function animateCursor() {
    follX += (mouseX - follX) * 0.1;
    follY += (mouseY - follY) * 0.1;
    cursorFollower.style.left = follX + 'px';
    cursorFollower.style.top  = follY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  document.querySelectorAll('a, button, .gallery-item, .tilt-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); cursorFollower.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); cursorFollower.classList.remove('hover'); });
  });
}

/* ═══════════════════════════════════════════════════
   ROBUST 360° VR PANORAMA VIEWER (PANNELLUM + CANVAS ENGINE)
═══════════════════════════════════════════════════ */
const scenes = {
  facade:   { src: 'panorama_facade_night.jpg', title: 'Façade & Nuit' },
  interior: { src: 'panorama_interior.jpg',     title: 'Appartement' },
  pool:     { src: 'panorama_pool.jpg',         title: 'Piscine & Jardins' },
  beach:    { src: 'panorama_beach.jpg',        title: 'Plage de Mrezgua' },
};

let currentSceneKey = 'facade';
let pnlViewer = null;
let custom360Engine = null;

class Canvas360Engine {
  constructor(containerId, initialSrc) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.container.innerHTML = '';
    
    this.canvas = document.createElement('canvas');
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.display = 'block';
    this.canvas.style.cursor = 'grab';
    this.container.appendChild(this.canvas);
    
    this.ctx = this.canvas.getContext('2d');
    this.img = new Image();
    this.isLoaded = false;
    this.yaw = 0;
    this.pitch = 0;
    this.fov = 95;
    this.autoRotate = -0.06;
    this.isUserInteracting = false;
    this.startX = 0;
    this.startY = 0;
    this.startYaw = 0;
    this.startPitch = 0;
    this.rafId = null;

    this.initEvents();
    this.load(initialSrc);
    this.render();
  }

  load(src) {
    this.isLoaded = false;
    this.img = new Image();
    this.img.crossOrigin = 'anonymous';
    this.img.onload = () => {
      this.isLoaded = true;
    };
    this.img.src = src;
  }

  resize() {
    const rect = this.container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const targetW = Math.floor(rect.width * dpr);
    const targetH = Math.floor(rect.height * dpr);
    if (this.canvas.width !== targetW || this.canvas.height !== targetH) {
      this.canvas.width = targetW || 800;
      this.canvas.height = targetH || 500;
    }
  }

  initEvents() {
    const onDown = (x, y) => {
      this.isUserInteracting = true;
      this.startX = x;
      this.startY = y;
      this.startYaw = this.yaw;
      this.startPitch = this.pitch;
      this.canvas.style.cursor = 'grabbing';
    };

    const onMove = (x, y) => {
      if (!this.isUserInteracting) return;
      const dx = x - this.startX;
      const dy = y - this.startY;
      const sensitivity = 0.22;
      this.yaw = (this.startYaw - dx * sensitivity) % 360;
      this.pitch = Math.max(-45, Math.min(45, this.startPitch + dy * sensitivity * 0.6));
    };

    const onUp = () => {
      this.isUserInteracting = false;
      this.canvas.style.cursor = 'grab';
    };

    this.canvas.addEventListener('mousedown', e => onDown(e.clientX, e.clientY));
    window.addEventListener('mousemove', e => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onUp);

    this.canvas.addEventListener('touchstart', e => {
      if (e.touches.length === 1) onDown(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener('touchmove', e => {
      if (e.touches.length === 1) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener('touchend', onUp);

    this.canvas.addEventListener('wheel', e => {
      e.preventDefault();
      this.fov = Math.max(50, Math.min(120, this.fov + e.deltaY * 0.05));
    }, { passive: false });
  }

  render() {
    this.resize();
    const ctx = this.ctx;
    const cw = this.canvas.width;
    const ch = this.canvas.height;

    if (!this.isUserInteracting) {
      this.yaw = (this.yaw + this.autoRotate) % 360;
    }

    if (this.isLoaded && this.img.naturalWidth > 0) {
      const iw = this.img.naturalWidth;
      const ih = this.img.naturalHeight;

      const normalizedYaw = ((this.yaw % 360) + 360) % 360;
      const srcCenterX = (normalizedYaw / 360) * iw;
      const fovFraction = this.fov / 360;
      const srcWidth = iw * fovFraction;
      
      const pitchRatio = this.pitch / 90;
      const srcCenterY = (ih / 2) - (pitchRatio * (ih * 0.25));
      const srcHeight = ih * (fovFraction * (ch / cw));

      const sx = srcCenterX - srcWidth / 2;
      const sy = srcCenterY - srcHeight / 2;

      ctx.clearRect(0, 0, cw, ch);
      
      if (sx < 0) {
        const leftPart = -sx;
        ctx.drawImage(this.img, iw - leftPart, sy, leftPart, srcHeight, 0, 0, (leftPart / srcWidth) * cw, ch);
        ctx.drawImage(this.img, 0, sy, srcWidth - leftPart, srcHeight, (leftPart / srcWidth) * cw, 0, ((srcWidth - leftPart) / srcWidth) * cw, ch);
      } else if (sx + srcWidth > iw) {
        const rightPart = (sx + srcWidth) - iw;
        const mainPart = srcWidth - rightPart;
        ctx.drawImage(this.img, sx, sy, mainPart, srcHeight, 0, 0, (mainPart / srcWidth) * cw, ch);
        ctx.drawImage(this.img, 0, sy, rightPart, srcHeight, (mainPart / srcWidth) * cw, 0, (rightPart / srcWidth) * cw, ch);
      } else {
        ctx.drawImage(this.img, sx, sy, srcWidth, srcHeight, 0, 0, cw, ch);
      }
    } else {
      ctx.fillStyle = '#13171f';
      ctx.fillRect(0, 0, cw, ch);
      ctx.fillStyle = '#d4af37';
      ctx.font = '16px Montserrat, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Chargement de la visite 360°...', cw / 2, ch / 2);
    }

    this.rafId = requestAnimationFrame(() => this.render());
  }

  destroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}

function initPanorama(sceneKey) {
  currentSceneKey = sceneKey || 'facade';
  const s = scenes[currentSceneKey];
  if (!s) return;

  const container = document.getElementById('panorama360');
  if (!container) return;

  if (typeof pannellum !== 'undefined') {
    try {
      if (pnlViewer) {
        try { pnlViewer.destroy(); } catch(e){}
      }
      container.innerHTML = '';
      pnlViewer = pannellum.viewer('panorama360', {
        type: 'equirectangular',
        panorama: s.src,
        autoLoad: true,
        autoRotate: -2,
        compass: false,
        showControls: false,
        mouseZoom: true,
        hfov: 100,
        minHfov: 60,
        maxHfov: 120,
        pitch: 0,
        yaw: 0,
      });
      return;
    } catch(err) {
      console.warn('Pannellum fallback to custom 360 engine:', err);
    }
  }

  if (!custom360Engine) {
    custom360Engine = new Canvas360Engine('panorama360', s.src);
  } else {
    custom360Engine.load(s.src);
  }
}

document.querySelectorAll('.tour-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tour-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    initPanorama(tab.dataset.scene);
    const hint = document.getElementById('viewerHint');
    if (hint) { hint.style.display = 'flex'; setTimeout(() => hint.style.opacity = '0', 2500); }
  });
});

// Immediately initialize 360 Tour on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initPanorama('facade'));
} else {
  initPanorama('facade');
}

/* ═══════════════════════════════════════════════════
   GOLD PARTICLES CANVAS
═══════════════════════════════════════════════════ */
const canvas = document.getElementById('particles');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 30), 45);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1,
      opacity: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * 0.02,
    });
  }

  function renderParticles() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.opacity += Math.sin(Date.now() * p.pulse) * 0.005;

      if (p.y < 0) { p.y = height; p.x = Math.random() * width; }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.fillStyle = 'hsla(43, 68%, 52%, ' + Math.max(0.05, Math.min(0.7, p.opacity)) + ')';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(renderParticles);
  }
  renderParticles();
}

/* ═══════════════════════════════════════════════════
   MAGNETIC BUTTONS
═══════════════════════════════════════════════════ */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = 'translate(' + (x * 0.22) + 'px, ' + (y * 0.22) + 'px)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
    btn.style.transition = 'transform 0.3s ease';
    setTimeout(() => { btn.style.transition = ''; }, 300);
  });
});

/* ═══════════════════════════════════════════════════
   GALLERY FILTERING
═══════════════════════════════════════════════════ */
const galFilterBtns = document.querySelectorAll('.gal-filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
if (galFilterBtns.length > 0) {
  galFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 20);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

/* ═══════════════════════════════════════════════════
   AMBIENCE (DAY / NIGHT) MODE
═══════════════════════════════════════════════════ */
const ambienceToggle = document.getElementById('ambienceToggle');
const ambienceIcon = document.getElementById('ambienceIcon');
if (ambienceToggle) {
  ambienceToggle.addEventListener('click', () => {
    document.body.classList.toggle('theme-day');
    const isDay = document.body.classList.contains('theme-day');
    if (ambienceIcon) ambienceIcon.textContent = isDay ? '☀️' : '🌙';
  });
}

/* ═══════════════════════════════════════════════════
   BACK TO TOP BUTTON
═══════════════════════════════════════════════════ */
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ═══════════════════════════════════════════════════
   INTERACTIVE RESIDENT SIMULATOR MODAL
═══════════════════════════════════════════════════ */
const appDemoModal = document.getElementById('appDemoModal');
const modalClose = document.getElementById('modalClose');
const btnTryAppModal = document.getElementById('btnTryAppModal');
const simClaimBtn = document.getElementById('simClaimBtn');
const simPropBtn = document.getElementById('simPropBtn');
const btnSimulateSubmit = document.getElementById('btnSimulateSubmit');
const demoResult = document.getElementById('demoResult');

function openDemoModal() {
  if (appDemoModal) appDemoModal.classList.add('open');
}
function closeDemoModal() {
  if (appDemoModal) appDemoModal.classList.remove('open');
  if (demoResult) demoResult.classList.remove('visible');
}

[btnTryAppModal, simClaimBtn, simPropBtn].forEach(btn => {
  if (btn) btn.addEventListener('click', openDemoModal);
});
if (modalClose) modalClose.addEventListener('click', closeDemoModal);
if (appDemoModal) {
  appDemoModal.addEventListener('click', (e) => {
    if (e.target === appDemoModal) closeDemoModal();
  });
}

document.querySelectorAll('.demo-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.demo-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
  });
});

if (btnSimulateSubmit) {
  btnSimulateSubmit.addEventListener('click', () => {
    btnSimulateSubmit.textContent = 'Transmission en cours...';
    setTimeout(() => {
      btnSimulateSubmit.textContent = 'Transmettre au Syndic (Démo)';
      if (demoResult) demoResult.classList.add('visible');
    }, 600);
  });
}

/* ═══════════════════════════════════════════════════
   GPS — DIRECTIONS FROM CURRENT POSITION
   Destination: Résidence Le Jacaranda, Mrezgua Nabeul
═══════════════════════════════════════════════════ */
const DEST_LAT  = 36.4508;
const DEST_LNG  = 10.7370;
const DEST_NAME = 'Résidence Le Jacaranda, Mrezgua, Nabeul, Tunisie';

const btnGps    = document.getElementById('btnGpsDirections');
const gpsSpinner = document.getElementById('gpsSpinner');
const gpsIconWrap = document.getElementById('gpsIconWrap');
const gpsLabel  = document.getElementById('gpsLabel');
const gpsStatus = document.getElementById('gpsStatus');
const mapIframe = document.getElementById('googleMap');
const mapOpenBtn = document.getElementById('mapOpenBtn');

function setGpsState(state, msg) {
  if (!btnGps) return;
  btnGps.classList.remove('loading', 'success', 'error');
  if (gpsSpinner)  gpsSpinner.hidden   = (state !== 'loading');
  if (gpsIconWrap) gpsIconWrap.hidden  = (state === 'loading');
  if (state === 'loading') {
    btnGps.classList.add('loading');
    if (gpsLabel) gpsLabel.textContent = 'Localisation en cours…';
    if (gpsStatus) { gpsStatus.className = 'gps-status'; gpsStatus.textContent = "Veuillez autoriser l'accès à votre position."; }
  } else if (state === 'success') {
    btnGps.classList.add('success');
    if (gpsLabel) gpsLabel.textContent = '✓ Itinéraire ouvert dans Google Maps';
    if (gpsStatus) { gpsStatus.className = 'gps-status ok'; gpsStatus.textContent = msg || ''; }
    setTimeout(() => {
      btnGps.classList.remove('success');
      if (gpsLabel) gpsLabel.textContent = "M'y rendre depuis ma position";
      if (gpsStatus) { gpsStatus.className = 'gps-status'; gpsStatus.textContent = ''; }
    }, 4000);
  } else if (state === 'error') {
    btnGps.classList.add('error');
    if (gpsLabel) gpsLabel.textContent = 'Impossible de localiser';
    if (gpsStatus) { gpsStatus.className = 'gps-status err'; gpsStatus.textContent = msg || 'Permission refusée ou GPS indisponible.'; }
    setTimeout(() => {
      btnGps.classList.remove('error');
      if (gpsLabel) gpsLabel.textContent = "M'y rendre depuis ma position";
      if (gpsStatus) { gpsStatus.className = 'gps-status'; gpsStatus.textContent = ''; }
    }, 5000);
  } else {
    if (gpsLabel) gpsLabel.textContent = "M'y rendre depuis ma position";
  }
}

if (btnGps) {
  btnGps.addEventListener('click', () => {
    if (!navigator.geolocation) {
      setGpsState('error', 'Géolocalisation non supportée par ce navigateur.');
      return;
    }
    setGpsState('loading');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(6);
        const lng = pos.coords.longitude.toFixed(6);

        const dirEmbed =
          `https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d50000!2d${DEST_LNG}!3d${DEST_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s!2sMA+position!3m2!1d${lat}!2d${lng}!4m5!1s0x12fd4a2b3e8d9f05%3A0x7e1c3a5b4f20a681!2s${encodeURIComponent(DEST_NAME)}!3m2!1d${DEST_LAT}!2d${DEST_LNG}!5e0!3m2!1sfr!2sfr!4v1724000000001!5m2!1sfr!2sfr`;

        if (mapIframe) mapIframe.src = dirEmbed;

        const dirUrl = `https://www.google.com/maps/dir/${lat},${lng}/${DEST_LAT},${DEST_LNG}`;
        if (mapOpenBtn) {
          mapOpenBtn.href = dirUrl;
          mapOpenBtn.textContent = '';
          mapOpenBtn.insertAdjacentHTML('afterbegin',
            `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> Voir l'itinéraire complet`);
        }

        setGpsState('success', `Position détectée · Itinéraire vers Mrezgua, Nabeul`);
        window.open(dirUrl, '_blank', 'noopener,noreferrer');
      },
      (err) => {
        const msgs = {
          1: 'Permission d\'accès à la position refusée.',
          2: 'Position indisponible (GPS hors portée).',
          3: 'La demande de position a expiré.',
        };
        setGpsState('error', msgs[err.code] || 'Erreur de géolocalisation.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  });
}

/* ═══════════════════════════════════════════════════
   TYPOLOGIES INTERACTIVE HANDLER
═══════════════════════════════════════════════════ */
const typoData = {
  s1: {
    name: "Appartement S+1 — Grand Confort",
    area: "65 m²",
    desc: "Idéal pour un pied-à-terre luxueux ou un investissement locatif à forte rentabilité. Salon lumineux avec baie vitrée ouverte sur terrasse, cuisine contemporaine entièrement équipée, chambre spacieuse avec dressing intégré et salle d'eau à l'italienne.",
    specArea: "65 m²",
    specRooms: "1 Chambre + Dressing",
    specBaths: "1 Italienne en Marbre",
    specBalcony: "Terrasse vue Jardin / Bassin",
    svg: `<svg viewBox="0 0 500 350" class="blueprint-svg" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(212,175,55,0.08)" stroke-width="1"/></pattern></defs>
      <rect width="500" height="350" fill="#13171f"/><rect width="500" height="350" fill="url(#grid1)" />
      <rect x="40" y="40" width="240" height="180" fill="rgba(212,175,55,0.06)" stroke="#d4af37" stroke-width="2" stroke-dasharray="4 2"/>
      <text x="160" y="135" fill="#f5d77f" font-family="'Montserrat',sans-serif" font-size="14" text-anchor="middle" font-weight="600">SALON &amp; SÉJOUR (32 m²)</text>
      <rect x="290" y="40" width="170" height="180" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="375" y="135" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="13" text-anchor="middle">SUITE PARENTALE (18 m²)</text>
      <rect x="40" y="230" width="140" height="80" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="110" y="275" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="12" text-anchor="middle">CUISINE (10 m²)</text>
      <rect x="190" y="230" width="90" height="80" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="235" y="275" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="11" text-anchor="middle">S.D.B (5 m²)</text>
      <rect x="290" y="230" width="170" height="80" fill="rgba(212,175,55,0.12)" stroke="#d4af37" stroke-width="2"/>
      <text x="375" y="275" fill="#d4af37" font-family="'Montserrat',sans-serif" font-size="12" text-anchor="middle" font-weight="600">TERRASSE (12 m²)</text>
    </svg>`
  },
  s2: {
    name: "Appartement S+2 — Prestige Familial",
    area: "115 m²",
    desc: "Équilibre d'espace et d'intimité. Vaste pièce de réception baignée de lumière avec accès direct sur grande terrasse, suite parentale avec salle d'eau privative, seconde chambre avec placards intégrés, cuisine séparée avec séchoir et salle d'eau invités.",
    specArea: "115 m²",
    specRooms: "2 Chambres (Suite parentale + Chambre)",
    specBaths: "2 Salles d'Eau complètes",
    specBalcony: "Grande Terrasse vue Mer & Piscine",
    svg: `<svg viewBox="0 0 500 350" class="blueprint-svg" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(212,175,55,0.08)" stroke-width="1"/></pattern></defs>
      <rect width="500" height="350" fill="#13171f"/><rect width="500" height="350" fill="url(#grid2)" />
      <rect x="30" y="30" width="220" height="190" fill="rgba(212,175,55,0.06)" stroke="#d4af37" stroke-width="2"/>
      <text x="140" y="130" fill="#f5d77f" font-family="'Montserrat',sans-serif" font-size="13" text-anchor="middle" font-weight="600">DOUBLE SALON (42 m²)</text>
      <rect x="260" y="30" width="120" height="130" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="320" y="100" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="11" text-anchor="middle">SUITE (20 m²)</text>
      <rect x="390" y="30" width="80" height="130" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="430" y="100" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">CH. 2 (14 m²)</text>
      <rect x="30" y="230" width="130" height="90" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="95" y="280" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="11" text-anchor="middle">CUISINE &amp; SÉCHOIR</text>
      <rect x="170" y="230" width="80" height="90" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="210" y="280" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">2x S.D.B</text>
      <rect x="260" y="170" width="210" height="150" fill="rgba(212,175,55,0.12)" stroke="#d4af37" stroke-width="2"/>
      <text x="365" y="250" fill="#d4af37" font-family="'Montserrat',sans-serif" font-size="13" text-anchor="middle" font-weight="600">TERRASSE PANORAMIQUE (24 m²)</text>
    </svg>`
  },
  s3: {
    name: "Appartement S+3 — Résidence d'Exception",
    area: "165 m²",
    desc: "Le summum du confort familial. Majestueux salon et salle à manger avec triple exposition et terrasse d'angle vue mer, suite parentale royale avec dressing aménagé et salle de bain marbre, deux chambres enfants avec rangements, cuisine gastronomique avec cellier.",
    specArea: "165 m²",
    specRooms: "3 Chambres (Master Suite + 2 Chambres)",
    specBaths: "2 Salles de bain + Salle d'eau invités",
    specBalcony: "Terrasse d'angle panoramique 38 m²",
    svg: `<svg viewBox="0 0 500 350" class="blueprint-svg" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="grid3" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(212,175,55,0.08)" stroke-width="1"/></pattern></defs>
      <rect width="500" height="350" fill="#13171f"/><rect width="500" height="350" fill="url(#grid3)" />
      <rect x="20" y="20" width="230" height="210" fill="rgba(212,175,55,0.06)" stroke="#d4af37" stroke-width="2"/>
      <text x="135" y="130" fill="#f5d77f" font-family="'Montserrat',sans-serif" font-size="13" text-anchor="middle" font-weight="600">GRAND SALON &amp; SÉJOUR (55 m²)</text>
      <rect x="260" y="20" width="110" height="150" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="315" y="100" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">MASTER SUITE (26 m²)</text>
      <rect x="380" y="20" width="100" height="150" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="430" y="100" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">CH. 2 &amp; 3 (28 m²)</text>
      <rect x="20" y="240" width="150" height="90" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="95" y="290" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="11" text-anchor="middle">CUISINE GASTRONOMIQUE</text>
      <rect x="180" y="240" width="70" height="90" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="215" y="290" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="9" text-anchor="middle">3x S.D.B</text>
      <rect x="260" y="180" width="220" height="150" fill="rgba(212,175,55,0.12)" stroke="#d4af37" stroke-width="2"/>
      <text x="370" y="260" fill="#d4af37" font-family="'Montserrat',sans-serif" font-size="12" text-anchor="middle" font-weight="600">TERRASSE ANGLE MER (38 m²)</text>
    </svg>`
  },
  penthouse: {
    name: "Penthouse / Duplex — Le Sommet du Luxe",
    area: "245 m²",
    desc: "Un joyau suspendu entre ciel et mer. Dernier étage avec ascenseur à accès privé direct, hauteur sous plafond remarquable, salon de réception avec baies vitrées toute hauteur, solarium et rooftop panoramique à 360° sur toute la baie de Nabeul et Hammamet.",
    specArea: "245 m² (170 m² couvert + 75 m² Roof)",
    specRooms: "4 Suites Privatives avec Dressing",
    specBaths: "4 Salles de Bain en Marbre Noir & Doré",
    specBalcony: "Rooftop Solarium 360° avec Jacuzzi option",
    svg: `<svg viewBox="0 0 500 350" class="blueprint-svg" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="grid4" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(212,175,55,0.08)" stroke-width="1"/></pattern></defs>
      <rect width="500" height="350" fill="#13171f"/><rect width="500" height="350" fill="url(#grid4)" />
      <rect x="20" y="20" width="200" height="160" fill="rgba(212,175,55,0.08)" stroke="#d4af37" stroke-width="2"/>
      <text x="120" y="105" fill="#f5d77f" font-family="'Montserrat',sans-serif" font-size="12" text-anchor="middle" font-weight="700">SALON CATHÉDRALE (65 m²)</text>
      <rect x="230" y="20" width="120" height="160" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="290" y="105" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">SUITES ROYAL (45 m²)</text>
      <rect x="360" y="20" width="120" height="160" fill="rgba(212,175,55,0.04)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="420" y="105" fill="#f5d77f" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">ACCÈS PRIVÉ ASCENSEUR</text>
      <rect x="20" y="190" width="460" height="140" fill="rgba(212,175,55,0.18)" stroke="#d4af37" stroke-width="2.5"/>
      <circle cx="410" cy="260" r="35" fill="rgba(43,68,52,0.3)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="410" y="265" fill="#d4af37" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">JACUZZI</text>
      <text x="210" y="265" fill="#f5d77f" font-family="'Montserrat',sans-serif" font-size="14" text-anchor="middle" font-weight="700">ROOFTOP &amp; SOLARIUM PANORAMIQUE 360° (75 m²)</text>
    </svg>`
  }
};

function initTypologies() {
  const tabs = document.querySelectorAll('.typo-tab-btn');
  const nameEl = document.getElementById('currentTypoName');
  const areaEl = document.getElementById('currentTypoArea');
  const descEl = document.getElementById('currentTypoDesc');
  const specAreaEl = document.getElementById('specArea');
  const specRoomsEl = document.getElementById('specRooms');
  const specBathsEl = document.getElementById('specBaths');
  const specBalconyEl = document.getElementById('specBalcony');
  const graphicEl = document.getElementById('blueprintGraphic');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const type = tab.dataset.type;
      const data = typoData[type];
      if (!data) return;

      if (nameEl) nameEl.textContent = data.name;
      if (areaEl) areaEl.textContent = data.area;
      if (descEl) descEl.textContent = data.desc;
      if (specAreaEl) specAreaEl.textContent = data.specArea;
      if (specRoomsEl) specRoomsEl.textContent = data.specRooms;
      if (specBathsEl) specBathsEl.textContent = data.specBaths;
      if (specBalconyEl) specBalconyEl.textContent = data.specBalcony;
      if (graphicEl) graphicEl.innerHTML = data.svg;
    });
  });
}

/* ═══════════════════════════════════════════════════
   SMOOTH CLASSY JAZZ LOUNGE AUDIO SYSTEM
═══════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════
   LUXURY ENTRY OVERLAY — Garantit la lecture automatique
═══════════════════════════════════════════════════ */
(function() {
  const overlay  = document.getElementById('entryOverlay');
  const enterBtn = document.getElementById('entryBtn');
  const skipBtn  = document.getElementById('entrySkip');

  if (!overlay) return;

  function dismissOverlay(withMusic) {
    overlay.classList.add('hidden');
    // remove from DOM after animation
    setTimeout(() => overlay.remove(), 950);

    if (withMusic) {
      jazzPlayer.play();
    }
  }

  if (enterBtn) enterBtn.addEventListener('click', () => dismissOverlay(true));
  if (skipBtn)  skipBtn.addEventListener('click',  () => dismissOverlay(false));
})();

/* ═══════════════════════════════════════════════════
   JAZZ LOUNGE AUDIO PLAYER
═══════════════════════════════════════════════════ */
class JazzLoungeAudio {
  constructor() {
    this.isPlaying = false;
    this.audio = new Audio('jazz_lounge.mp3');
    this.audio.loop = true;
    this.audio.volume = 0.45;
    this.audio.preload = 'auto';
    this.toggleBtn = document.getElementById('soundscapeToggle');
    this.init();
  }

  init() {
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.isPlaying ? this.pause() : this.play();
      });
    }

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      if (this.toggleBtn) {
        this.toggleBtn.classList.add('active');
        this.toggleBtn.title = 'Mettre en pause la musique Jazz';
      }
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      if (this.toggleBtn) {
        this.toggleBtn.classList.remove('active');
        this.toggleBtn.title = 'Lancer l\'ambiance Jazz Lounge';
      }
    });
  }

  fadeInVolume(targetVol = 0.45, duration = 2000) {
    this.audio.volume = 0.02;
    const stepTime = 60;
    const steps = duration / stepTime;
    const step = (targetVol - 0.02) / steps;
    const iv = setInterval(() => {
      if (this.audio.volume + step >= targetVol) {
        this.audio.volume = targetVol;
        clearInterval(iv);
      } else {
        this.audio.volume = Math.min(targetVol, this.audio.volume + step);
      }
    }, stepTime);
  }

  play() {
    this.audio.play().then(() => {
      this.fadeInVolume();
    }).catch(err => {
      console.warn('Audio play blocked:', err);
    });
  }

  pause() {
    this.audio.pause();
  }
}

const jazzPlayer = new JazzLoungeAudio();

/* ═══════════════════════════════════════════════════
   LIVE MREZGUA WEATHER & REAL-TIME CLOCK
═══════════════════════════════════════════════════ */
function updateLiveClock() {
  const timeEl = document.getElementById('resortTime');
  if (!timeEl) return;
  try {
    const now = new Date();
    const tunisTime = new Intl.DateTimeFormat('fr-FR', {
      timeZone: 'Africa/Tunis',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(now);
    timeEl.textContent = tunisTime;
  } catch(e) {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    timeEl.textContent = `${h}:${m}:${s}`;
  }
}

async function fetchLiveWeather() {
  const tempEl = document.getElementById('resortTemp');
  const humEl = document.getElementById('resortHumidity');
  try {
    // Mrezgua, Nabeul coordinates: 36.45° N, 10.74° E
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=36.45&longitude=10.74&current=temperature_2m,relative_humidity_2m,weather_code,is_day&timezone=Africa%2FTunis');
    if (!res.ok) throw new Error('Weather API error');
    const data = await res.json();
    if (data && data.current) {
      if (tempEl && data.current.temperature_2m !== undefined) {
        tempEl.textContent = `${Math.round(data.current.temperature_2m)}°C`;
      }
      if (humEl && data.current.relative_humidity_2m !== undefined) {
        humEl.textContent = `💧 ${Math.round(data.current.relative_humidity_2m)}%`;
      }
    }
  } catch (err) {
    console.warn('Live weather fallback:', err);
    if (tempEl) tempEl.textContent = '26°C';
    if (humEl) humEl.textContent = '💧 85%';
  }
}

/* ═══════════════════════════════════════════════════
   INIT ALL
═══════════════════════════════════════════════════ */
applyTranslation('fr');
initTypologies();
fetchLiveWeather();
setInterval(fetchLiveWeather, 600000); // refresh weather every 10 min
updateLiveClock();
setInterval(updateLiveClock, 1000); // refresh clock every second
