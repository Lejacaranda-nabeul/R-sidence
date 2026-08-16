/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   Rأ‰SIDENCE LE JACARANDA â€” App Logic (FR آ· EN آ· ES آ· IT آ· DE آ· AR)
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */

/* â”€â”€ Language Config â”€â”€ */
const langMeta = {
  fr: { flag: 'ًں‡«ًں‡·', code: 'FR', label: 'Franأ§ais', dir: 'ltr', fontClass: '' },
  en: { flag: 'ًں‡¬ًں‡§', code: 'EN', label: 'English',  dir: 'ltr', fontClass: '' },
  es: { flag: 'ًں‡ھًں‡¸', code: 'ES', label: 'Espaأ±ol',  dir: 'ltr', fontClass: '' },
  it: { flag: 'ًں‡®ًں‡¹', code: 'IT', label: 'Italiano', dir: 'ltr', fontClass: '' },
  de: { flag: 'ًں‡©ًں‡ھ', code: 'DE', label: 'Deutsch',  dir: 'ltr', fontClass: '' },
  ar: { flag: 'ًں‡¸ًں‡¦', code: 'AR', label: 'ط¹ط±ط¨ظٹ',     dir: 'rtl', fontClass: 'rtl' },
};

/* â”€â”€ Translations â”€â”€ */
const translations = {

  /* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ FRANأ‡AIS â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
  fr: {
    heroBadgeText: "Rأ©sidence d'Exception آ· Mrezgua Nabeul آ· أ€ 300m de la Plage",
    heroEyebrowText: "Mrezgua آ· Nabeul آ· Tunisie",
    heroTagline: "L'art de vivre dans sa plus belle expression",
    scrollText: "Dأ©filer pour explorer",
    stat1: "Blocs Rأ©sidentiels", stat2: "Piscines d'Eau Cristalline", stat3: "de la Plage Mأ©diterranأ©e", stat4: "Conciergerie & Sأ©curitأ©",
    badgeLabel: "Livraison Immأ©diate", floatTitle: "Architecture Contemporaine", floatSub: "Design mأ©diterranأ©en & finitions haut de gamme",
    aboutTag: "أ€ Propos du Projet",
    aboutTitle: "Un Art de Vivre<br /><em>Exceptionnel</em>",
    aboutBody: "Nichأ©e au cإ“ur de Mrezgua, أ  seulement 300 mأ¨tres de la magnifique plage de Nabeul, la Rأ©sidence Le Jacaranda est le fruit d'une vision architecturale ambitieuse : offrir un cadre de vie alliant modernitأ©, أ©lأ©gance et sأ©rأ©nitأ©.",
    aboutBody2: "Ses faأ§ades en blanc immaculأ©, ses balcons gأ©nأ©reux et ses espaces communs soigneusement paysagأ©s font de cette rأ©sidence un havre de paix au design contemporain haut de gamme.",
    aboutFeatures: ["Architecture contemporaine de prestige", "Finitions de premier choix en marbre et aluminium", "Espaces verts et jardins paysagers mأ©diterranأ©ens", "Rأ©sidence clأ´turأ©e, gardأ©e 24h/24 avec contrأ´le d'accأ¨s"],
    aboutCtaText: "Explorer en 360آ°",
    amenTag: "Prestations",
    amenTitle: "Tout le Luxe<br /><em>Rأ©uni en un Lieu</em>",
    amen1: "Piscines",          amen1d: "Deux bassins cristallins illuminأ©s, pour des moments de dأ©tente incomparables أ  toute heure.",
    amen2: "Sأ©curitأ© 24h/24",  amen2d: "Accأ¨s sأ©curisأ©, surveillance permanente et systأ¨me de contrأ´le avancأ© pour votre tranquillitأ©.",
    amen3: "Parking Privأ©",    amen3d: "Espaces de stationnement couverts et sأ©curisأ©s, أ  disposition exclusive des rأ©sidents.",
    amen4: "Espaces Verts",    amen4d: "Jardins paysagأ©s et vأ©gأ©tation mأ©diterranأ©enne pour une atmosphأ¨re douce et ressourأ§ante.",
    amen5: "Finitions Premium", amen5d: "Matأ©riaux nobles, carrelage grand format, menuiserie aluminium â€” des prestations d'exception.",
    amen6: "Conciergerie",     amen6d: "Service disponible pour rأ©pondre أ  toutes vos demandes avec la plus grande discrأ©tion.",
    typoTag: "Logements & Plans",
    typoTitle: "Espaces de Vie<br /><em>Conأ§us pour l'Excellence</em>",
    typoSub: "Des typologies harmonieuses allant du S+1 optimisأ© au Penthouse d'exception avec vue panoramique mer.",
    tourTag: "Visite Virtuelle",
    tourTitle: "Explorez la Rأ©sidence<br /><em>en 360آ°</em>",
    tourSub: "Naviguez librement dans nos espaces. Cliquez et faites glisser pour explorer chaque recoin.",
    tabFacadeText: "Faأ§ade & Nuit", tabInteriorText: "Appartement", tabPoolText: "Piscine & Jardins", tabBeachText: "Plage de Mrezgua",
    hintText: "Cliquez et faites glisser pour explorer",
    galTag: "Galerie Photographique",
    galTitle: "La Rأ©sidence<br /><em>en Images</em>",
    galFilterAll: "Toutes", galFilterExt: "Extأ©rieur", galFilterInt: "Intأ©rieurs", galFilterNight: "Piscine & Nuit", galFilterCommon: "Espaces Communs", galFilterBeach: "Plage & Mer", galFilterNabeul: "Nabeul & Ville", galFilterHammamet: "Hammamet & Loisirs",
    galCap1: "Faأ§ade Contemporaine", galCap2: "Vue Nocturne", galCap3: "Ascenseurs & Marbre", galCap4: "Parking Souterrain",
    galCap5: "Couloirs أ©lأ©gants", galCap6: "Angle Panoramique", galCap7: "Piscine & Lobby", galCap8: "Grand Hall & Lustre",
    galCap9: "Hall Rez-de-Chaussأ©e", galCap10    galCapHam1: "Mأ©dina Yasmine & Chevaux Dorأ©s", galCapHam2: "Souk Couvert & Artisanat", galCapHam3: "Carthage Land Aquapark", galCapHam4: "Safari Aventure & Parcs",
    galCapGolf1: "Golf Citrus & Fairways Palmأ©s", galCapGolf2: "Golf Yasmine & Lac Panoramique",
    quartierTag: "Art de Vivre Mأ©diterranأ©en",
    quartierTitle: "Mrezgua & Ses Trأ©sors<br /><em>Entre Mer, Culture & Dأ©tente</em>",
    quartierSub: "Une situation d'exception أ  la croisأ©e de Nabeul et d'Hammamet, alliant sأ©rأ©nitأ© cأ´tiأ¨re et dynamisme.",
    qCard1Title: "Plage de Mrezgua", qCard1Desc: "Sable blanc, eaux turquoise calmes et couchers de soleil fأ©eriques face au golfe d'Hammamet.",
    qCard2Title: "Nabeul & Artisanat", qCard2Desc: "Capitale tunisienne de la cأ©ramique, jarre monumentale et ateliers d'art.",
    qCard3Title: "Souk & Marchأ©s de Nabeul", qCard3Desc: "Allأ©es piأ©tonnes bordأ©es de palmiers, poteries traditionnelles, tapis et animation authentique.",
    qCard4Title: "Mأ©dina & Ruelles Historiques", qCard4Desc: "Maroquinerie fine, ruelles blanches et bleues, minarets et trأ©sors du patrimoine tunisien.",
    appTag: "أ‰cosystأ¨me Connectأ©",
    appTitle: "Gأ©rez votre rأ©sidence<br /><em>depuis votre smartphone</em>",
    appBody: "Signalez un incident en un clic, contactez le syndic et la conciergerie, recevez les annonces officielles en temps rأ©el et suivez vos demandes directement depuis l'application dأ©diأ©e.",
    appFeatures: ["Suivi des rأ©clamations & propositions en temps rأ©el", "Messagerie instantanأ©e avec le Syndic & Concierge", "Rappels de cotisations & rapports PDF partagأ©s", "Notifications prioritaires et annonces de rأ©sidence"],
    appStoreSub: "Tأ©lأ©charger sur", playStoreSub: "Disponible sur",
    locTag: "Emplacement Stratأ©gique",
    locTitle: "Mrezgua, Nabeul<br /><em>أ€ 300m de la Mer</em>",
    locBadge1Val: "300m",   locBadge1Lbl: "Plage de sable fin (3 min أ  pied)",
    locBadge2Val: "5 min",  locBadge2Lbl: "Centre-ville Nabeul & Marchأ©s",
    locBadge3Val: "45 min", locBadge3Lbl: "Aأ©roport Enfidha / Tunis",
    mapPinTitle: "Rأ©sidence Le Jacaranda",
    mapPinAddr: "Mrezgua, Nabeul, Tunisie آ· أ€ 300m de la plage",
    gpsLabel: "M'y rendre depuis ma position",
    conTag: "Service Commercial & Syndic",
    conTitle: "أ‰crivez-nous,<br /><em>Rencontrons-nous</em>",
    conSub: "Notre أ©quipe commerciale et de gestion est أ  votre entiأ¨re disposition pour organiser une visite privأ©e ou rأ©pondre أ  vos questions.",
    conLabel1: "Email Officiel", conLabel2: "Ligne Directe", conLabel3: "Adresse", conLabel4: "Accأ¨s Plage",
    conAddr: "Avenue Habib Bourguiba, Mrezgua, Nabeul", conBeach: "أ€ 300 mأ¨tres de la mer",
    fnameLabel: "Prأ©nom", lnameLabel: "Nom", emailLabel: "Email", phoneLabel: "Tأ©lأ©phone / WhatsApp", msgLabel: "Message / Type de bien recherchأ©",
    fnamePh: "Votre prأ©nom", lnamePh: "Votre nom", emailPh: "votre@email.com", phonePh: "+216 ...", msgPh: "Je souhaite obtenir des informations sur le S+2 ou planifier une visite...",
    formSubmit: "Envoyer le Message",
    successMsg: "Message envoyأ© avec succأ¨s. Notre أ©quipe vous contactera sous 24 heures.",
    footerTagline: "L'excellence أ  chaque dأ©tail.",
    footerCopy: "آ© 2024 - 2026 Rأ©sidence Le Jacaranda. Tous droits rأ©servأ©s.",
    navAbout: "أ€ Propos", navAmen: "Prestations", navTour: "Visite 360آ°", navGal: "Galerie", navQuartier: "Quartier", navApp: "Application", navCon: "Contact",
    heroCta1: "Dأ©couvrir la Rأ©sidence", heroCta2: "Visite 360آ° Virtuelle"
  },

  /* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ ENGLISH â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
  en: {
    heroBadgeText: "Exceptional Residence آ· Mrezgua Nabeul آ· 300m from the Beach",
    heroEyebrowText: "Mrezgua آ· Nabeul آ· Tunisia",
    heroTagline: "The art of living at its finest",
    scrollText: "Scroll to explore",
    stat1: "Residential Blocks", stat2: "Crystal-Clear Pools", stat3: "from the Mediterranean Beach", stat4: "24/7 Concierge & Security",
    badgeLabel: "Immediate Delivery", floatTitle: "Contemporary Architecture", floatSub: "Mediterranean design & luxury finishes",
    aboutTag: "About the Project",
    aboutTitle: "An Exceptional<br /><em>Living Experience</em>",
    aboutBody: "Nestled in the heart of Mrezgua, just 300 meters from Nabeul's stunning beach, Rأ©sidence Le Jacaranda is born from an ambitious architectural vision: offering a living environment blending modernity, elegance, and serenity.",
    aboutBody2: "With pristine white facades, generous balconies, and meticulously landscaped common areas, the residence is a haven of peace featuring upscale contemporary design.",
    aboutFeatures: ["Prestigious contemporary architecture", "First-choice finishes in noble marble & aluminum", "Lush Mediterranean gardens and landscaping", "Gated, 24/7 guarded residence with secured access"],
    aboutCtaText: "Explore in 360آ°",
    amenTag: "Amenities & Services",
    amenTitle: "All Luxury<br /><em>in One Place</em>",
    amen1: "Swimming Pools",      amen1d: "Two illuminated crystal pools for unmatched relaxation moments day or night.",
    amen2: "24/7 Security",       amen2d: "Secured access, continuous CCTV and advanced monitoring for absolute peace of mind.",
    amen3: "Private Parking",     amen3d: "Covered and secured parking spaces exclusively reserved for residents.",
    amen4: "Landscaped Gardens",  amen4d: "Mediterranean flora and landscaped green areas for a soothing, refreshing atmosphere.",
    amen5: "Premium Finishes",    amen5d: "Noble materials, large format tiles, premium aluminum joinery â€” exceptional standards.",
    amen6: "Dedicated Concierge", amen6d: "Full concierge service catering to every resident's need with utmost discretion.",
    typoTag: "Homes & Floor Plans",
    typoTitle: "Living Spaces<br /><em>Crafted for Excellence</em>",
    typoSub: "Harmonious layouts ranging from optimized 1-bedroom apartments to exclusive Penthouses with panoramic sea views.",
    tourTag: "Virtual Tour",
    tourTitle: "Explore the Residence<br /><em>in 360آ°</em>",
    tourSub: "Navigate freely through our spaces. Click and drag to explore every corner.",
    tabFacadeText: "Faأ§ade & Night", tabInteriorText: "Apartment", tabPoolText: "Pool & Gardens", tabBeachText: "Mrezgua Beach",
    hintText: "Click and drag to explore",
    galTag: "Photo Gallery",
    galTitle: "The Residence<br /><em>in Pictures</em>",
    galFilterAll: "All", galFilterExt: "Exterior", galFilterInt: "Interiors", galFilterNight: "Pool & Night", galFilterCommon: "Common Areas", galFilterBeach: "Beach & Sea", galFilterNabeul: "Nabeul & City", galFilterHammamet: "Hammamet & Leisure",
    galCap1: "Contemporary Faأ§ade", galCap2: "Night View", galCap3: "Marble Elevators & Lobby", galCap4: "Underground Parking",
    galCap5: "Elegant Corridors", galCap6: "Panoramic Corner", galCap7: "Pool & Lobby", galCap8: "Grand Hall & Chandelier",
    galCap9: "Ground Floor Hall", galCap10: "Pool & Gardens",
    galCapBeach1: "Mrezgua Beach & Parasols", galCapBeach2: "Golden Shore & Emerald Sea", galCapBeach3: "Mediterranean Crystal Waters", galCapBeach4: "Coastal Horizon & White Sand",
    galCapNabeul1: "Monumental Jar of Nabeul", galCapNabeul2: "Artisan Souk & Palm Trees", galCapNabeul3: "Medina & Leather Craft Alleys", galCapNabeul4: "Orange Monument & Mosaic",
    galCapHam1: "Yasmine Medina & Golden Horses", galCapHam2: "Covered Souk & Crafts", galCapHam3: "Carthage Land Aquapark", galCapHam4: "Safari Adventure & Parks",
    galCapGolf1: "Golf Citrus & Palm Fairways", galCapGolf2: "Golf Yasmine & Scenic Lake",
    quartierTag: "Mediterranean Lifestyle",
    quartierTitle: "Mrezgua & Its Treasures<br /><em>Between Sea, Culture & Leisure</em>",
    quartierSub: "An exceptional location bridging Nabeul and Hammamet, combining coastal serenity and vibrant culture.",
    qCard1Title: "Mrezgua Beach", qCard1Desc: "White sand, calm turquoise waters and magical sunsets overlooking the Gulf of Hammamet.",
    qCard2Title: "Nabeul & Crafts", qCard2Desc: "Tunisian capital of pottery and ceramics, monumental jar and art workshops.",
    qCard3Title: "Souks & Markets of Nabeul", qCard3Desc: "Pedestrian palm-lined promenade, traditional handicrafts, spices and authentic vibrancy.",
    qCard4Title: "Medina & Historic Alleys", qCard4Desc: "Fine leather craft, whitewashed alleys with blue shutters, minarets and rich heritage.",
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
    mapPinTitle: "Rأ©sidence Le Jacaranda",
    mapPinAddr: "Mrezgua, Nabeul, Tunisia آ· 300m from the beach",
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
    footerCopy: "آ© 2024 - 2026 Rأ©sidence Le Jacaranda. All rights reserved.",
    navAbout: "About", navAmen: "Amenities", navTour: "360آ° Tour", navGal: "Gallery", navQuartier: "Neighborhood", navApp: "Resident App", navCon: "Contact",
    heroCta1: "Discover the Residence", heroCta2: "Virtual Tour 360آ°"
  },

  /* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ ARABIC â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
  ar: {
    heroBadgeText: "ط¥ظ‚ط§ظ…ط© ط§ط³طھط«ظ†ط§ط¦ظٹط© ظپط§ط®ط±ط© آ· ظ…ظ€ط±ط²ظ‚ط© ظ†ظ€ط§ط¨ظ€ظ„ آ· 300ظ… ط¹ظ† ط§ظ„ط´ط§ط·ط¦",
    heroEyebrowText: "ظ…ظ€ط±ط²ظ‚ط© آ· ظ†ظ€ط§ط¨ظ€ظ„ آ· طھظ€ظˆظ†ظ€ط³",
    heroTagline: "ظپظ€ظ† ط§ظ„ط¹ظٹظ€ط´ ظپظ€ظٹ ط£ط±ظ‚ظ€ظ‰ طھظ€ط¬ظ€ظ„ظ€ظٹظ€ط§طھظ€ظ‡",
    scrollText: "ظ…ط±ط± ظ„ظ„ط§ط³طھظƒط´ط§ظپ",
    stat1: "ظ…ط¨ط§ظ†ظچ ط³ظƒظ†ظٹط© ظپط§ط®ط±ط©", stat2: "ظ…ط³ط§ط¨ط­ ظ…ظٹط§ظ‡ ظ†ظ‚ظٹط©", stat3: "ط¹ظ† ط§ظ„ط´ط§ط·ط¦ ط§ظ„ظ…طھظˆط³ط·ظٹ", stat4: "ط­ط±ط§ط³ط© ظˆظƒظˆظ†ط³ظٹط±ط¬ 24/7",
    badgeLabel: "طھط³ظ„ظٹظ… ظپظˆط±ظٹ", floatTitle: "ظ‡ظ†ط¯ط³ط© ظ…ط¹ظ…ط§ط±ظٹط© ط¹طµط±ظٹط©", floatSub: "ط·ط§ط¨ط¹ ظ…طھظˆط³ط·ظٹ ظˆطھط´ط·ظٹط¨ط§طھ ط±ط§ظ‚ظٹط©",
    aboutTag: "ط¹ظ† ط§ظ„ظ…ط´ط±ظˆط¹ ط§ظ„ظپط§ط®ط±",
    aboutTitle: "ط£ط³ظ€ظ„ظ€ظˆط¨ ط­ظ€ظٹظ€ط§ط©<br /><em>ط§ط³ظ€طھظ€ط«ظ€ظ†ظ€ط§ط¦ظ€ظٹ</em>",
    aboutBody: "طھظ‚ط¹ ط¥ظ‚ط§ظ…ط© ظ„ظˆ ط®ط§ظƒط§ط±ط§ظ†ط¯ط§ ظپظٹ ظ‚ظ„ط¨ ظ…ظ†ط·ظ‚ط© ظ…ظ€ط±ط²ظ‚ط©طŒ ط¹ظ„ظ‰ ط¨ظڈط¹ط¯ 300 ظ…طھط± ظپظ‚ط· ظ…ظ† ط´ط§ط·ط¦ ظ†ط§ط¨ظ„ ط§ظ„ط³ط§ط­ط±. طھط¬ط³ط¯ ط§ظ„ط¥ظ‚ط§ظ…ط© ط±ط¤ظٹط© ظ…ط¹ظ…ط§ط±ظٹط© ظپط±ظٹط¯ط© طھط¬ظ…ط¹ ط¨ظٹظ† ط§ظ„ط­ط¯ط§ط«ط© ظˆط§ظ„ط£ظ†ط§ظ‚ط© ظˆط§ظ„ط³ظƒظٹظ†ط© ط§ظ„ظ…ط·ظ„ظ‚ط©.",
    aboutBody2: "ط¨ظˆط§ط¬ظ‡ط§طھظ‡ط§ ط§ظ„ط¨ظٹط¶ط§ط، ط§ظ„ظ†ط§طµط¹ط©طŒ ظˆط´ط±ظپط§طھظ‡ط§ ط§ظ„ظˆط§ط³ط¹ط© ظˆظ…ط³ط§ط­ط§طھظ‡ط§ ط§ظ„ط®ط¶ط±ط§ط، ط§ظ„ظ…ظ†ط³ظ‚ط© ط¨ط¹ظ†ط§ظٹط©طŒ طھظ…ط«ظ„ ط§ظ„ط¥ظ‚ط§ظ…ط© ظ…ظ„ط§ط°ط§ظ‹ ظ‡ط§ط¯ط¦ط§ظ‹ ط¨طھطµظ…ظٹظ… ط¹طµط±ظٹ ظپط§ط¦ظ‚ ط§ظ„ط¬ظˆط¯ط©.",
    aboutFeatures: ["ظ‡ظ†ط¯ط³ط© ظ…ط¹ظ…ط§ط±ظٹط© ط¹طµط±ظٹط© ط±ط§ظ‚ظٹط© ظˆظپط®ظ…ط©", "طھط´ط·ظٹط¨ط§طھ ظ…ظ† ط§ظ„ط±ط®ط§ظ… ظˆط§ظ„ط£ظ„ظ…ظ†ظٹظˆظ… ط¹ط§ظ„ظٹ ط§ظ„ط¬ظˆط¯ط©", "ظ…ط³ط§ط­ط§طھ ط®ط¶ط±ط§ط، ظˆط­ط¯ط§ط¦ظ‚ ظ…طھظˆط³ط·ظٹط© ط®ظ„ط§ط¨ط©", "ط¥ظ‚ط§ظ…ط© ظ…ط³ظٹط¬ط© ظˆظ…ط­ط±ظˆط³ط© 24/24 ظ…ط¹ ظ…ط±ط§ظ‚ط¨ط© ط°ظƒظٹط©"],
    aboutCtaText: "ط§ط³طھظƒط´ط§ظپ 360آ°",
    amenTag: "ط§ظ„ط®ط¯ظ…ط§طھ ظˆط§ظ„ظ…ط±ط§ظپظ‚",
    amenTitle: "ظƒظ„ ط§ظ„ظ€ظپظ€ط®ظ€ط§ظ…ظ€ط©<br /><em>ظپظ€ظٹ ظ…ظ€ظƒظ€ط§ظ† ظˆط§ط­ظ€ط¯</em>",
    amen1: "ط§ظ„ظ…ط³ط§ط¨ط­",          amen1d: "ط­ظˆط¶ط§ظ† ط¨ظ„ظˆط±ظٹط§ظ† ظ…ط¶ط§ط،ط§ظ† ظ„ظ‚ط¶ط§ط، ظ„ط­ط¸ط§طھ ط§ط³طھط±ط®ط§ط، ظ„ط§ طھظڈط¶ط§ظ‡ظ‰ ظپظٹ ط£ظٹ ظˆظ‚طھ.",
    amen2: "ط£ظ…ظ† ظˆط­ط±ط§ط³ط© 24/24", amen2d: "ط¯ط®ظˆظ„ ظ…ط¤ظ…ظ† ظˆظ…ط±ط§ظ‚ط¨ط© ظ…ط³طھظ…ط±ط© ط¨ط§ظ„ظƒط§ظ…ظٹط±ط§طھ ظ„ط±ط§ط­طھظƒظ… ظˆط·ظ…ط£ظ†ظٹظ†طھظƒظ….",
    amen3: "ظ…ظˆظ‚ظپ ط³ظٹط§ط±ط§طھ ط®ط§طµ", amen3d: "ط£ظ…ط§ظƒظ† ط±ظƒظ† ط³ظٹط§ط±ط§طھ ظ…ط؛ط·ط§ط© ظˆط¢ظ…ظ†ط© طھط­طھ ط§ظ„ط£ط±ط¶ ظ…ط®طµطµط© ط­طµط±ظٹط§ظ‹ ظ„ظ„ظ…ظ‚ظٹظ…ظٹظ†.",
    amen4: "ظ…ط³ط§ط­ط§طھ ط®ط¶ط±ط§ط،",    amen4d: "ط­ط¯ط§ط¦ظ‚ ظ…ظ†ط³ظ‚ط© ظˆظ†ط¨ط§طھط§طھ ظ…طھظˆط³ط·ظٹط© طھظ…ظ†ط­ظƒ ط£ط¬ظˆط§ط، ظ…ظ† ط§ظ„ظ‡ط¯ظˆط، ظˆط§ظ„ط§ظ†طھط¹ط§ط´.",
    amen5: "طھط´ط·ظٹط¨ط§طھ ط¨ط±ظٹظ…ظٹظˆظ…", amen5d: "ظ…ظˆط§ط¯ ط±ط§ظ‚ظٹط©طŒ ط£ط±ط¶ظٹط§طھ ط±ط®ط§ظ…ظٹط© ظپط§ط®ط±ط© ظˆظ†ط¬ط§ط±ط© ط£ظ„ظ…ظ†ظٹظˆظ… ط¨ط£ط¹ظ„ظ‰ ط§ظ„ظ…ط¹ط§ظٹظٹط±.",
    amen6: "ط®ط¯ظ…ط© ط§ظ„ظƒظˆظ†ط³ظٹط±ط¬",   amen6d: "ط®ط¯ظ…ط© ط§ط³طھظ‚ط¨ط§ظ„ ظˆط§ط³طھط¬ط§ط¨ط© ظ…طھط§ط­ط© ظ„طھظ„ط¨ظٹط© ط¬ظ…ظٹط¹ ط§ط­طھظٹط§ط¬ط§طھظƒظ… ط¨ط£ط¹ظ„ظ‰ ط¯ط±ط¬ط§طھ ط§ظ„ظƒظپط§ط،ط©.",
    typoTag: "ط§ظ„ط´ظ‚ظ‚ ظˆط§ظ„ظ…ط®ط·ط·ط§طھ",
    typoTitle: "ظ…ط³ط§ط­ط§طھ ط¹ظٹط´<br /><em>طµظڈظ…ظ…طھ ظ„ظ„طھظ…ظٹط²</em>",
    typoSub: "ط´ظ‚ظ‚ ظ…طھظ†ط§ط³ظ‚ط© ط¨طھطµط§ظ…ظٹظ… ط±ط­ط¨ط© ظ…ظ† ط؛ط±ظپط© ظˆطµط§ظ„ط© ط­طھظ‰ ط§ظ„ط¨ظ†طھظ‡ط§ظˆط³ ط§ظ„ظپط§ط®ط± ط¨ط¥ط·ظ„ط§ظ„ط© ط¨ط­ط±ظٹط© ط¨ط§ظ†ظˆط±ط§ظ…ظٹط© ط³ط§ط­ط±ط©.",
    tourTag: "ط¬ظˆظ„ط© ط§ظپطھط±ط§ط¶ظٹط©",
    tourTitle: "ط§ط³طھظƒط´ظپ ط§ظ„ط¥ظ‚ط§ظ…ط©<br /><em>ط¨ط²ط§ظˆظٹط© 360آ°</em>",
    tourSub: "طھط¬ظˆظ„ ط¨ط­ط±ظٹط© ط¯ط§ط®ظ„ ط§ظ„ط¥ظ‚ط§ظ…ط©. ط§ظ†ظ‚ط± ظˆط§ط³ط­ط¨ ظ„ظ„طھظ†ظ‚ظ„ ظپظٹ ط¬ظ…ظٹط¹ ط§ظ„ط£ط±ط¬ط§ط،.",
    tabFacadeText: "ط§ظ„ظˆط§ط¬ظ‡ط© ظˆط§ظ„ظ…ط´ظ‡ط¯ ط§ظ„ظ„ظٹظ„ظٹ", tabInteriorText: "ط§ظ„ط´ظ‚ظ‚", tabPoolText: "ط§ظ„ظ…ط³ط¨ط­ ظˆط§ظ„ط­ط¯ط§ط¦ظ‚", tabBeachText: "ط´ط§ط·ط¦ ظ…ظ€ط±ط²ظ‚ط©",
    hintText: "ط§ظ†ظ‚ط± ظˆط§ط³ط­ط¨ ظ„ظ„ط§ط³طھظƒط´ط§ظپ",
    galTag: "ظ…ط¹ط±ط¶ ط§ظ„طµظˆط±",
    galTitle: "ط§ظ„ط¥ظ‚ظ€ط§ظ…ظ€ط©<br /><em>ط¨ظ€ط§ظ„ظ€طµظ€ظˆط±</em>",
    galFilterAll: "ط§ظ„ظƒظ„", galFilterExt: "ط§ظ„ط®ط§ط±ط¬", galFilterInt: "ط§ظ„طھطµظ…ظٹظ… ط§ظ„ط¯ط§ط®ظ„ظٹ", galFilterNight: "ط§ظ„ظ…ط³ط¨ط­ ظˆظ„ظٹظ„ط§ظ‹", galFilterCommon: "ط§ظ„ظ…ط³ط§ط­ط§طھ ط§ظ„ظ…ط´طھط±ظƒط©", galFilterBeach: "ط§ظ„ط´ط§ط·ط¦ ظˆط§ظ„ط¨ط­ط±", galFilterNabeul: "ظ†ط§ط¨ظ„ ظˆط§ظ„ظ…ط¯ظٹظ†ط©", galFilterHammamet: "ط§ظ„ط­ظ…ط§ظ…ط§طھ ظˆط§ظ„طھط±ظپظٹظ‡",
    galCap1: "ط§ظ„ظˆط§ط¬ظ‡ط© ط§ظ„ط¹طµط±ظٹط©", galCap2: "ظ…ط´ظ‡ط¯ ظ„ظٹظ„ظٹ", galCap3: "ط§ظ„ظ…طµط§ط¹ط¯ ظˆط§ظ„ط¨ظ‡ظˆ ط§ظ„ط±ط®ط§ظ…ظٹ", galCap4: "ظ…ظˆظ‚ظپ ط§ظ„ط³ظٹط§ط±ط§طھ ط§ظ„ط³ظپظ„ظٹ",
    galCap5: "ط£ط±ظˆظ‚ط© ظپط§ط®ط±ط©", galCap6: "ط¥ط·ظ„ط§ظ„ط© ط¨ط§ظ†ظˆط±ط§ظ…ظٹط©", galCap7: "ط§ظ„ظ…ط³ط¨ط­ ظˆط§ظ„ط¨ظ‡ظˆ", galCap8: "ط§ظ„ط¨ظ‡ظˆ ط§ظ„ط±ط¦ظٹط³ظٹ ظˆط§ظ„ط«ط±ظٹط§",
    galCap9: "ط¨ظ‡ظˆ ط§ظ„ط·ط§ط¨ظ‚ ط§ظ„ط£ط±ط¶ظٹ", galCap10: "ط§ظ„ظ…ط³ط¨ط­ ظˆط§ظ„ط­ط¯ط§ط¦ظ‚",
    galCapBeach1: "ط´ط§ط·ط¦ ط§ظ„ظ…ط±ط§ط²ظ‚ط© ظˆظ…ط¸ظ„ط§طھ ط§ظ„ظ‚ط´", galCapBeach2: "ط§ظ„ط±ظ…ط§ظ„ ط§ظ„ط°ظ‡ط¨ظٹط© ظˆط§ظ„ظ…ظٹط§ظ‡ ط§ظ„ظپظٹط±ظˆط²ظٹط©", galCapBeach3: "ظ…ظٹط§ظ‡ ط§ظ„ط¨ط­ط± ط§ظ„ط£ط¨ظٹط¶ ط§ظ„ظ…طھظˆط³ط· ط§ظ„ظƒط±ظٹط³طھط§ظ„ظٹط©", galCapBeach4: "ط§ظ„ط£ظپظ‚ ط§ظ„ط¨ط­ط±ظٹ ظˆط§ظ„ط±ظ…ط§ظ„ ط§ظ„ط¨ظٹط¶ط§ط،",
    galCapNabeul1: "ط¬ط±ط© ظ†ط§ط¨ظ„ ط§ظ„طھط°ظƒط§ط±ظٹط© ط§ظ„ط¹ط±ظٹظ‚ط©", galCapNabeul2: "ط§ظ„ط³ظˆظ‚ ط§ظ„ط­ط±ظپظٹ ظˆط´ط§ط±ط¹ ط§ظ„ظ†ط®ظٹظ„", galCapNabeul3: "ط§ظ„ظ…ط¯ظٹظ†ط© ط§ظ„ط¹طھظٹظ‚ط© ظˆط§ظ„طµظ†ط§ط¹ط§طھ ط§ظ„ط¬ظ„ط¯ظٹط©", galCapNabeul4: "ظ…ط¹ظ„ظ… ط§ظ„ط¨ط±طھظ‚ط§ظ„ ظˆط§ظ„ظ…ظˆط²ط§ظٹظٹظƒ",
    galCapHam1: "ظ…ط¯ظٹظ†ط© ظٹط§ط³ظ…ظٹظ† ط§ظ„ط­ظ…ط§ظ…ط§طھ ظˆط§ظ„ط®ظٹظˆظ„ ط§ظ„ط°ظ‡ط¨ظٹط©", galCapHam2: "ط§ظ„ط³ظˆظ‚ ط§ظ„ظ…ط³ظ‚ظˆظپ ظˆط§ظ„ط­ط±ظپ ط§ظ„طھظ‚ظ„ظٹط¯ظٹط©", galCapHam3: "ظ…ط¯ظٹظ†ط© ظ‚ط±ط·ط§ط¬ ظ„ط§ظ†ط¯ ط§ظ„ظ…ط§ط¦ظٹط©", galCapHam4: "ظ…ظ†طھط²ظ‡ ط³ظپط§ط±ظٹ ظˆط§ظ„ظ…ط؛ط§ظ…ط±ط§طھ ط§ظ„ظ…ط§ط¦ظٹط©",
    galCapGolf1: "ظ…ظ„ط¹ط¨ ط³ظٹطھط±ط§ط³ ظ„ظ„ط¬ظˆظ„ظپ ظˆط§ظ„ظ†ط®ظٹظ„", galCapGolf2: "ظ…ظ„ط¹ط¨ ظٹط§ط³ظ…ظٹظ† ظ„ظ„ط¬ظˆظ„ظپ ظˆط§ظ„ط¨ط­ظٹط±ط© ط§ظ„ط¨ط§ظ†ظˆط±ط§ظ…ظٹط©",
    quartierTag: "ط£ط³ظ„ظˆط¨ ط§ظ„ط¹ظٹط´ ط§ظ„ظ…طھظˆط³ط·ظٹ",
    quartierTitle: "ظ…ظ€ط±ط²ظ‚ط© ظˆط§ظ„ظ€ظ…ظ€ظ†ظ€ط·ظ€ظ‚ظ€ط©<br /><em>ط¨ظٹظ† ط§ظ„ط¨ط­ط±طŒ ط§ظ„ط«ظ‚ط§ظپط© ظˆط§ظ„ط§ط³طھط±ط®ط§ط،</em>",
    quartierSub: "ظ…ظˆظ‚ط¹ ط§ط³طھط«ظ†ط§ط¦ظٹ ط¨ظٹظ† ظ†ط§ط¨ظ„ ظˆط§ظ„ط­ظ…ط§ظ…ط§طھطŒ ظٹط¬ظ…ط¹ ط¨ظٹظ† ظ‡ط¯ظˆط، ط§ظ„ط³ط§ط­ظ„ ظˆط­ظٹظˆظٹط© ط§ظ„ط«ظ‚ط§ظپط© ط§ظ„ظ…طھظˆط³ط·ظٹط©.",
    qCard1Title: "ط´ط§ط·ط¦ ظ…ظ€ط±ط²ظ‚ط©", qCard1Desc: "ط±ظ…ط§ظ„ ط¨ظٹط¶ط§ط، ظ†ط§ط¹ظ…ط©طŒ ظ…ظٹط§ظ‡ ظپظٹط±ظˆط²ظٹط© ظ‡ط§ط¯ط¦ط© ظˆط؛ط±ظˆط¨ ط³ط§ط­ط± ظ„ظ„ط´ظ…ط³ ظٹط·ظ„ ط¹ظ„ظ‰ ط®ظ„ظٹط¬ ط§ظ„ط­ظ…ط§ظ…ط§طھ.",
    qCard2Title: "ظ†ط§ط¨ظ„ ظˆط§ظ„طµظ†ط§ط¹ط§طھ ط§ظ„طھظ‚ظ„ظٹط¯ظٹط©", qCard2Desc: "ط¹ط§طµظ…ط© ط§ظ„ط®ط²ظپ ظˆط§ظ„ظپط®ط§ط± ط§ظ„طھظˆظ†ط³ظٹطŒ ط§ظ„ط¬ط±ط© ط§ظ„طھط°ظƒط§ط±ظٹط© ظˆظ…ط´ط§ط؛ظ„ ط§ظ„ظپظ†ظˆظ† ط§ظ„ط£طµظٹظ„ط©.",
    qCard3Title: "ط£ط³ظˆط§ظ‚ ظ†ط§ط¨ظ„ ظˆط³ظˆظ‚ ط§ظ„ط¬ظ…ط¹ط©", qCard3Desc: "ط£ط±ظˆظ‚ط© ظ…ط®طµطµط© ظ„ظ„ظ…ط´ط§ط© ظ…ط­ط§ط·ط© ط¨ط£ط´ط¬ط§ط± ط§ظ„ظ†ط®ظٹظ„طŒ ظپط®ط§ط± طھظ‚ظ„ظٹط¯ظٹ ظˆظ…طµظ†ظˆط¹ط§طھ طھط±ط§ط«ظٹط©.",
    qCard4Title: "ط§ظ„ظ…ط¯ظٹظ†ط© ط§ظ„ط¹طھظٹظ‚ط© ظˆط§ظ„ط£ط²ظ‚ط© ط§ظ„طھط§ط±ظٹط®ظٹط©", qCard4Desc: "ظ…طµظ†ظˆط¹ط§طھ ط¬ظ„ط¯ظٹط© ط±ط§ظ‚ظٹط©طŒ ط¬ط¯ط±ط§ظ† ط¨ظٹط¶ط§ط، ط¨ظ†ظˆط§ظپط° ط²ط±ظ‚ط§ط، ظˆطھط±ط§ط« طھظˆظ†ط³ظٹ ط£طµظٹظ„.",
    appTag: "ط§ظ„ظ…ظ†ط¸ظˆظ…ط© ط§ظ„ط°ظƒظٹط©",
    appTitle: "طھط­ظƒظ‘ظ… ظپظٹ ط¥ظ‚ط§ظ…طھظƒ<br /><em>ظ…ط¨ط§ط´ط±ط© ظ…ظ† ظ‡ط§طھظپظƒ</em>",
    appBody: "ط£ط¨ظ„ط؛ ط¹ظ† ط§ظ„ط£ط¹ط·ط§ظ„ ط¨ط¶ط؛ط·ط© ط²ط±طŒ طھظˆط§طµظ„ ظ…ط¨ط§ط´ط±ط© ظ…ط¹ ط§ظ„ط³ظ†ط¯ظٹظƒ ظˆط§ظ„ظƒظˆظ†ط³ظٹط±ط¬طŒ ظˆط§ط·ظ„ط¹ ط¹ظ„ظ‰ ط§ظ„ط¥ط¹ظ„ط§ظ†ط§طھ ط§ظ„ط±ط³ظ…ظٹط© ظˆطھطھط¨ط¹ ط·ظ„ط¨ط§طھظƒ ظپظٹ ط§ظ„ظˆظ‚طھ ط§ظ„ظپط¹ظ„ظٹ.",
    appFeatures: ["ظ…طھط§ط¨ط¹ط© ط§ظ„ط¨ظ„ط§ط؛ط§طھ ظˆط§ظ„ط§ظ‚طھط±ط§ط­ط§طھ ظپظٹ ط§ظ„ظˆظ‚طھ ط§ظ„ظپط¹ظ„ظٹ", "ظ…ط±ط§ط³ظ„ط© ظپظˆط±ظٹط© ظ…ط¹ ط¥ط¯ط§ط±ط© ط§ظ„ط³ظ†ط¯ظٹظƒ ظˆط§ظ„ظƒظˆظ†ط³ظٹط±ط¬", "طھط°ظƒظٹط± ط¨ط§ظ„ظ…ط³ط§ظ‡ظ…ط§طھ ظˆطھظ‚ط§ط±ظٹط± PDF ظ…ط´طھط±ظƒط©", "ط¥ط´ط¹ط§ط±ط§طھ ظˆط¥ط¹ظ„ط§ظ†ط§طھ ظپظˆط±ظٹط© ظ„ظ„ط¥ظ‚ط§ظ…ط©"],
    appStoreSub: "طھظ†ط²ظٹظ„ ظ…ظ†", playStoreSub: "ظ…طھظˆظپط± ط¹ظ„ظ‰",
    locTag: "ظ…ظˆظ‚ط¹ ط§ط³طھط±ط§طھظٹط¬ظٹ ظ…ظ…طھط§ط²",
    locTitle: "ظ…ظ€ط±ط²ظ‚ط©طŒ ظ†ظ€ط§ط¨ظ€ظ„<br /><em>ط¹ظ„ظ‰ ط¨ط¹ط¯ 300ظ… ظ…ظ† ط§ظ„ط¨ط­ط±</em>",
    locBadge1Val: "300ظ…",   locBadge1Lbl: "ط´ط§ط·ط¦ ط±ظ…ظ„ظٹ (3 ط¯ظ‚ط§ط¦ظ‚ ظ…ط´ظٹط§ظ‹)",
    locBadge2Val: "5 ط¯ظ‚ط§ط¦ظ‚", locBadge2Lbl: "ظˆط³ط· ظ…ط¯ظٹظ†ط© ظ†ط§ط¨ظ„ ظˆط§ظ„ط£ط³ظˆط§ظ‚",
    locBadge3Val: "45 ط¯ظ‚ظٹظ‚ط©", locBadge3Lbl: "ظ…ط·ط§ط± ط§ظ„ظ†ظپظٹط¶ط© / طھظˆظ†ط³ ظ‚ط±ط·ط§ط¬",
    mapPinTitle: "ط¥ظ‚ط§ظ…ط© ظ„ظˆ ط®ط§ظƒط§ط±ط§ظ†ط¯ط§",
    mapPinAddr: "ظ…ط±ط²ظ‚ط©طŒ ظ†ط§ط¨ظ„طŒ طھظˆظ†ط³ آ· ط¹ظ„ظ‰ ط¨ط¹ط¯ 300ظ… ظ…ظ† ط§ظ„ط´ط§ط·ط¦",
    gpsLabel: "ط§ظ„ط§طھط¬ط§ظ‡ط§طھ ظ…ظ† ظ…ظˆظ‚ط¹ظٹ ط§ظ„ط­ط§ظ„ظٹ",
    conTag: "ط§ظ„ظ…ظƒطھط¨ ط§ظ„طھط¬ط§ط±ظٹ ظˆط¥ط¯ط§ط±ط© ط§ظ„ط³ظ†ط¯ظٹظƒ",
    conTitle: "طھظˆط§طµظ„ظˆط§ ظ…ط¹ظ†ط§طŒ<br /><em>ظٹط³ط¹ط¯ظ†ط§ ط§ط³طھظ‚ط¨ط§ظ„ظƒظ…</em>",
    conSub: "ظپط±ظٹظ‚ظ†ط§ ط§ظ„طھط¬ط§ط±ظٹ ظˆط§ظ„ط¥ط¯ط§ط±ظٹ ظپظٹ ط®ط¯ظ…طھظƒظ… ظ„طھظ†ط¸ظٹظ… ط²ظٹط§ط±ط© ط®ط§طµط© ط£ظˆ ط§ظ„ط¥ط¬ط§ط¨ط© ط¹ظ† ظƒط§ظپط© ط§ط³طھظپط³ط§ط±ط§طھظƒظ….",
    conLabel1: "ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط±ط³ظ…ظٹ", conLabel2: "ط§ظ„ط®ط· ط§ظ„ظ…ط¨ط§ط´ط±", conLabel3: "ط§ظ„ط¹ظ†ظˆط§ظ†", conLabel4: "ط§ظ„ظˆطµظˆظ„ ظ„ظ„ط´ط§ط·ط¦",
    conAddr: "ط´ط§ط±ط¹ ط§ظ„ط­ط¨ظٹط¨ ط¨ظˆط±ظ‚ظٹط¨ط©طŒ ظ…ط±ط²ظ‚ط©طŒ ظ†ط§ط¨ظ„", conBeach: "ط¹ظ„ظ‰ ط¨ط¹ط¯ 300 ظ…طھط± ظ…ظ† ط§ظ„ط¨ط­ط±",
    fnameLabel: "ط§ظ„ط§ط³ظ… ط§ظ„ط£ظˆظ„", lnameLabel: "ط§ظ„ظ„ظ‚ط¨", emailLabel: "ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ", phoneLabel: "ط§ظ„ظ‡ط§طھظپ / ظˆط§طھط³ط§ط¨", msgLabel: "ط§ظ„ط±ط³ط§ظ„ط© / ظ†ظˆط¹ ط§ظ„ط¹ظ‚ط§ط± ط§ظ„ظ…ط·ظ„ظˆط¨",
    fnamePh: "ط§ط³ظ…ظƒ ط§ظ„ط£ظˆظ„", lnamePh: "ظ„ظ‚ط¨ظƒ", emailPh: "your@email.com", phonePh: "+216 ...", msgPh: "ط±ط³ط§ظ„طھظƒ...",
    formSubmit: "ط¥ط±ط³ط§ظ„ ط§ظ„ط±ط³ط§ظ„ط©",
    successMsg: "طھظ… ط¥ط±ط³ط§ظ„ ط±ط³ط§ظ„طھظƒ ط¨ظ†ط¬ط§ط­. ط³ظٹطھظˆط§طµظ„ ظپط±ظٹظ‚ظ†ط§ ظ…ط¹ظƒ ط®ظ„ط§ظ„ 24 ط³ط§ط¹ط©.",
    footerTagline: "ط§ظ„طھظ…ظٹط² ظپظٹ ط£ط¯ظ‚ ط§ظ„طھظپط§طµظٹظ„.",
    footerCopy: "آ© 2024 - 2026 ط¥ظ‚ط§ظ…ط© ظ„ظˆ ط®ط§ظƒط§ط±ط§ظ†ط¯ط§. ط¬ظ…ظٹط¹ ط§ظ„ط­ظ‚ظˆظ‚ ظ…ط­ظپظˆط¸ط©.",
    navAbout: "ط¹ظ† ط§ظ„ظ…ط´ط±ظˆط¹", navAmen: "ط§ظ„ظ…ظ…ظٹط²ط§طھ", navTour: "ط¬ظˆظ„ط© 360آ°", navGal: "ط§ظ„طµظˆط±", navQuartier: "ط§ظ„ظ…ظ†ط·ظ‚ط©", navApp: "طھط·ط¨ظٹظ‚ ط§ظ„ظ…ظ‚ظٹظ…ظٹظ†", navCon: "طھظˆط§طµظ„ ظ…ط¹ظ†ط§",
    heroCta1: "ط§ظƒطھط´ظپ ط§ظ„ط¥ظ‚ط§ظ…ط©", heroCta2: "ط¬ظˆظ„ط© ط§ظپطھط±ط§ط¶ظٹط© 360آ°"
  },

  /* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ ESPAأ‘OL â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
  es: {
    heroBadgeText: "Residencia Excepcional آ· Mrezgua Nabeul آ· A 300m de la Playa",
    heroEyebrowText: "Mrezgua آ· Nabeul آ· Tأ؛nez",
    heroTagline: "El arte de vivir en su mأ،s bella expresiأ³n",
    scrollText: "Desplazar para explorar",
    stat1: "Bloques Residenciales", stat2: "Piscinas de Agua Cristalina", stat3: "de la Playa Mediterrأ،nea", stat4: "Conserjerأ­a & Seguridad 24/7",
    badgeLabel: "Entrega Inmediata", floatTitle: "Arquitectura Contemporأ،nea", floatSub: "Diseأ±o mediterrأ،neo y acabados de lujo",
    aboutTag: "Acerca del Proyecto",
    aboutTitle: "Un Arte de Vivir<br /><em>Excepcional</em>",
    aboutBody: "Ubicada en el corazأ³n de Mrezgua, a solo 300 metros de la magnأ­fica playa de Nabeul, la Residencia Le Jacaranda es fruto de una ambiciosa visiأ³n arquitectأ³nica: un espacio que combina modernidad, elegancia y serenidad.",
    aboutBody2: "Sus fachadas de blanco inmaculado, sus amplios balcones y sus zonas comunes cuidadosamente ajardinadas hacen de esta residencia un remanso de paz con diseأ±o contemporأ،neo de alta gama.",
    aboutFeatures: ["Arquitectura contemporأ،nea de prestigio", "Acabados de primera calidad en mأ،rmol y aluminio", "Espacios verdes y jardines mediterrأ،neos", "Residencia cerrada, vigilada 24h/24 con control de acceso"],
    aboutCtaText: "Explorar en 360آ°",
    amenTag: "Servicios & Prestaciones",
    amenTitle: "Todo el Lujo<br /><em>en un Solo Lugar</em>",
    amen1: "Piscinas",          amen1d: "Dos piscinas cristalinas iluminadas para momentos de relax incomparables a cualquier hora.",
    amen2: "Seguridad 24h/24",  amen2d: "Acceso seguro, videovigilancia continua y sistema de control avanzado para su tranquilidad.",
    amen3: "Parking Privado",   amen3d: "Plazas de aparcamiento cubiertas y seguras, exclusivas para los residentes.",
    amen4: "Zonas Verdes",      amen4d: "Jardines mediterrأ،neos para un ambiente tranquilo y revitalizante.",
    amen5: "Acabados Premium",  amen5d: "Materiales nobles, suelos de gran formato, carpinterأ­a de aluminio â€” prestaciones de excepciأ³n.",
    amen6: "Conserjerأ­a",       amen6d: "Servicio de conserjerأ­a disponible para atender todas sus solicitudes con mأ،xima discreciأ³n.",
    typoTag: "Viviendas & Planos",
    typoTitle: "Espacios de Vida<br /><em>Diseأ±ados para la Excelencia</em>",
    typoSub: "Viviendas armoniosas desde apartamentos optimizados de 1 dormitorio hasta أ،ticos exclusivos con vistas panorأ،micas al mar.",
    tourTag: "Visita Virtual",
    tourTitle: "Explore la Residencia<br /><em>en 360آ°</em>",
    tourSub: "Navegue libremente por nuestros espacios. Haga clic y arrastre para explorar cada rincأ³n.",
    tabFacadeText: "Fachada y Noche", tabInteriorText: "Apartamento", tabPoolText: "Piscina y Jardines", tabBeachText: "Playa de Mrezgua",
    hintText: "Haga clic y arrastre para explorar",
    galTag: "Galerأ­a Fotogrأ،fica",
    galTitle: "La Residencia<br /><em>en Imأ،genes</em>",
    galFilterAll: "Todas", galFilterExt: "Exterior", galFilterInt: "Interiores", galFilterNight: "Piscina y Noche", galFilterCommon: "Zonas Comunes", galFilterBeach: "Playa y Mar", galFilterNabeul: "Nabeul y Ciudad", galFilterHammamet: "Hammamet y Ocio",
    galCap1: "Fachada Contemporأ،nea", galCap2: "Vista Nocturna", galCap3: "Ascensores & Mأ،rmol", galCap4: "Parking Subterrأ،neo",
    galCap5: "Pasillos Elegantes", galCap6: "أپngulo Panorأ،mico", galCap7: "Piscina & Lobby", galCap8: "Gran Vestأ­bulo & Lأ،mpara",
    galCap9: "Vestأ­bulo Planta Baja", galCap10: "Piscina & Jardines",
    galCapBeach1: "Playa de Mrezgua y Sombrillas", galCapBeach2: "Costa Dorada y Mar Esmeralda", galCapBeach3: "Aguas Cristalinas Mediterrأ،neas", galCapBeach4: "Horizonte Costero y Arena Blanca",
    galCapNabeul1: "Jarra Monumental de Nabeul", galCapNabeul2: "Zoco Artesanal y Palmeras", galCapNabeul3: "Medina y Callejuelas de Cuero", galCapNabeul4: "Monumento de las Naranjas y Mosaico",
    galCapHam1: "Medina Yasmine y Caballos Dorados", galCapHam2: "Zoco Cubierto y Artesanأ­a", galCapHam3: "Carthage Land Aquapark", galCapHam4: "Safari Aventura y Parques",
    galCapGolf1: "Golf Citrus y Calles con Palmeras", galCapGolf2: "Golf Yasmine y Lago Panorأ،mico",
    quartierTag: "Estilo de Vida Mediterrأ،neo",
    quartierTitle: "Mrezgua y sus Tesoros<br /><em>Entre Mar, Cultura y Ocio</em>",
    quartierSub: "Una ubicaciأ³n excepcional entre Nabeul y Hammamet, que combina la tranquilidad costera con una cultura vibrante.",
    qCard1Title: "Playa de Mrezgua", qCard1Desc: "Arena blanca, aguas turquesas y puestas de sol mأ،gicas frente al golfo de Hammamet.",
    qCard2Title: "Nabeul y Artesanأ­a", qCard2Desc: "Capital tunecina de la cerأ،mica, jarra monumental y talleres de arte.",
    qCard3Title: "Zocos y Mercados de Nabeul", qCard3Desc: "Avenida peatonal de palmeras, cerأ،mica tradicional, alfombras y ambiente autأ©ntico.",
    qCard4Title: "Medina y Calles Histأ³ricas", qCard4Desc: "Marroquinerأ­a de cuero, callejuelas blancas y azules, minaretes y patrimonio histأ³rico.",
    appTag: "Ecosistema Conectado",
    appTitle: "Gestione su residencia<br /><em>desde su smartphone</em>",
    appBody: "Notifique incidencias en un clic, contacte con el administrador y la conserjerأ­a, reciba avisos oficiales y siga sus trأ،mites en tiempo real.",
    appFeatures: ["Seguimiento de reclamaciones y sugerencias en tiempo real", "Mensajerأ­a directa con la administraciأ³n y conserjerأ­a", "Recordatorios de cuotas e informes en PDF", "Notificaciones prioritarias de la residencia"],
    appStoreSub: "Descargar en", playStoreSub: "Disponible en",
    locTag: "Ubicaciأ³n Estratأ©gica",
    locTitle: "Mrezgua, Nabeul<br /><em>A 300m del Mar</em>",
    locBadge1Val: "300m",   locBadge1Lbl: "Playa de arena fina (3 min a pie)",
    locBadge2Val: "5 min",  locBadge2Lbl: "Centro de Nabeul y Mercados",
    locBadge3Val: "45 min", locBadge3Lbl: "Aeropuerto de Enfidha / Tأ؛nez",
    mapPinTitle: "Residencia Le Jacaranda",
    mapPinAddr: "Mrezgua, Nabeul, Tأ؛nez آ· A 300m de la playa",
    gpsLabel: "Cأ³mo llegar desde mi ubicaciأ³n",
    conTag: "Oficina Comercial & Gestiأ³n",
    conTitle: "Escrأ­banos,<br /><em>Reunأ،monos</em>",
    conSub: "Nuestro equipo comercial y de gestiأ³n estأ، a su entera disposiciأ³n para organizar una visita privada o responder a sus dudas.",
    conLabel1: "Correo Oficial", conLabel2: "Lأ­nea Directa", conLabel3: "Direcciأ³n", conLabel4: "Acceso Playa",
    conAddr: "Avenida Habib Bourguiba, Mrezgua, Nabeul", conBeach: "A 300 metros del mar",
    fnameLabel: "Nombre", lnameLabel: "Apellido", emailLabel: "Correo electrأ³nico", phoneLabel: "Telأ©fono / WhatsApp", msgLabel: "Mensaje / Tipo de inmueble deseado",
    fnamePh: "Su nombre", lnamePh: "Su apellido", emailPh: "su@correo.com", phonePh: "+216 ...", msgPh: "Su mensaje...",
    formSubmit: "Enviar Mensaje",
    successMsg: "Mensaje enviado con أ©xito. Nuestro equipo se pondrأ، en contacto en 24 horas.",
    footerTagline: "La excelencia en cada detalle.",
    footerCopy: "آ© 2024 - 2026 Residencia Le Jacaranda. Todos los derechos reservados.",
    navAbout: "Acerca de", navAmen: "Servicios", navTour: "Visita 360آ°", navGal: "Galerأ­a", navQuartier: "Barrio", navApp: "App Residentes", navCon: "Contacto",
    heroCta1: "Descubrir la Residencia", heroCta2: "Visita Virtual 360آ°"
  },

  /* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ ITALIANO â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
  it: {
    heroBadgeText: "Residenza d'Eccezione آ· Mrezgua Nabeul آ· A 300m dalla Spiaggia",
    heroEyebrowText: "Mrezgua آ· Nabeul آ· Tunisia",
    heroTagline: "L'arte di vivere nella sua piأ¹ bella espressione",
    scrollText: "Scorri per esplorare",
    stat1: "Edifici Residenziali", stat2: "Piscine di Acqua Cristallina", stat3: "dalla Spiaggia del Mediterraneo", stat4: "Portineria & Sicurezza 24/7",
    badgeLabel: "Consegna Immediata", floatTitle: "Architettura Contemporanea", floatSub: "Design mediterraneo & finiture di lusso",
    aboutTag: "Informazioni sul Progetto",
    aboutTitle: "Un'Arte di Vivere<br /><em>Eccezionale</em>",
    aboutBody: "Immersa nel cuore di Mrezgua, a soli 300 metri dalla splendida spiaggia di Nabeul, la Rأ©sidence Le Jacaranda nasce da una visione ambiziosa: offrire uno spazio abitativo che unisce modernitأ , eleganza e serenitأ .",
    aboutBody2: "Le sue facciate bianche immacolate, i suoi ampi balconi e le aree comuni curate fanno di questa residenza un'oasi di pace dal design contemporaneo di alto livello.",
    aboutFeatures: ["Architettura contemporanea di prestigio", "Finiture di prima scelta in marmo e alluminio", "Spazi verdi e giardini mediterranei curati", "Residenza recintata, custodita 24/7 con controllo accessi"],
    aboutCtaText: "Esplora a 360آ°",
    amenTag: "Servizi & Comfort",
    amenTitle: "Tutto il Lusso<br /><em>in un Solo Luogo</em>",
    amen1: "Piscine",          amen1d: "Due piscine cristalline illuminate per momenti di relax senza pari a qualsiasi ora.",
    amen2: "Sicurezza 24h/24",  amen2d: "Accesso protetto, videosorveglianza continua e sistema di controllo avanzato per la vostra tranquillitأ .",
    amen3: "Parcheggio Privato", amen3d: "Posti auto coperti e custoditi ad uso esclusivo dei residenti.",
    amen4: "Aree Verdi",       amen4d: "Giardini paesaggistici e flora mediterranea per un'atmosfera distensiva e rigenerante.",
    amen5: "Finiture di Pregio", amen5d: "Materiali nobili, pavimenti in grande formato, infissi in alluminio â€” standard d'eccellenza.",
    amen6: "Concierge",        amen6d: "Servizio di portineria dedicato per soddisfare ogni richiesta con la massima discrezione.",
    typoTag: "Alloggi & Piante",
    typoTitle: "Spazi Abitativi<br /><em>Progettati per l'Eccellenza</em>",
    typoSub: "Alloggi armoniosi da bilocali ottimizzati a prestigiosi attici con vista panoramica sul mare.",
    tourTag: "Visita Virtuale",
    tourTitle: "Esplora la Residenza<br /><em>a 360آ°</em>",
    tourSub: "Naviga liberamente negli spazi. Clicca e trascina per esplorare ogni dettaglio.",
    tabFacadeText: "Facciata & Notte", tabInteriorText: "Appartamento", tabPoolText: "Piscina & Giardini", tabBeachText: "Spiaggia di Mrezgua",
    hintText: "Clicca e trascina per esplorare",
    galTag: "Galleria Fotografica",
    galTitle: "La Residenza<br /><em>in Immagini</em>",
    galFilterAll: "Tutte", galFilterExt: "Esterno", galFilterInt: "Interni", galFilterNight: "Piscina & Notte", galFilterCommon: "Spazi Comuni", galFilterBeach: "Spiaggia e Mare", galFilterNabeul: "Nabeul & Cittأ ", galFilterHammamet: "Hammamet & Svago",
    galCap1: "Facciata Contemporanea", galCap2: "Vista Notturna", galCap3: "Ascensori in Marmo", galCap4: "Parcheggio Sotterraneo",
    galCap5: "Corridoi Eleganti", galCap6: "Angolo Panoramico", galCap7: "Piscine & Lobby", galCap8: "Grande Atrio & Lampadario",
    galCap9: "Atrio Piano Terra", galCap10: "Piscina & Giardini",
    galCapBeach1: "Spiaggia di Mrezgua e Ombrelloni", galCapBeach2: "Riva Dorata e Mare Smeraldo", galCapBeach3: "Acque Cristalline del Mediterraneo", galCapBeach4: "Orizzonte Costiero e Sabbia Bianca",
    galCapNabeul1: "Giara Monumentale di Nabeul", galCapNabeul2: "Souk Artigianale e Palme", galCapNabeul3: "Medina e Vicoli del Cuoio", galCapNabeul4: "Monumento delle Arance & Mosaico",
    galCapHam1: "Medina Yasmine & Cavalli Dorati", galCapHam2: "Souk Coperto & Artigianato", galCapHam3: "Carthage Land Aquapark", galCapHam4: "Safari Avventura & Parchi",
    galCapGolf1: "Golf Citrus & Fairway con Palme", galCapGolf2: "Golf Yasmine & Lago Panoramico",
    quartierTag: "Stile di Vita Mediterraneo",
    quartierTitle: "Mrezgua & i Suoi Tesori<br /><em>Tra Mare, Cultura e Relax</em>",
    quartierSub: "Una posizione privilegiata tra Nabeul e Hammamet, che unisce la quiete marina alla vivacitأ  culturale.",
    qCard1Title: "Spiaggia di Mrezgua", qCard1Desc: "Sabbia bianca, acque cristalline calme e tramonti indimenticabili sul Golfo di Hammamet.",
    qCard2Title: "Nabeul & Artigianato", qCard2Desc: "Capitale tunisina della ceramica, giara monumentale e laboratori d'arte.",
    qCard3Title: "Souk & Mercati di Nabeul", qCard3Desc: "Viale pedonale alberato da palme, ceramiche tradizionali, spezie e atmosfera autentica.",
    qCard4Title: "Medina & Vicoli Storici", qCard4Desc: "Pelletteria artigianale, vicoli bianchi e blu, minareti e patrimonio tunisino.",
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
    mapPinTitle: "Rأ©sidence Le Jacaranda",
    mapPinAddr: "Mrezgua, Nabeul, Tunisia آ· A 300m dalla spiaggia",
    gpsLabel: "Indicazioni dalla mia posizione",
    conTag: "Ufficio Commerciale & Amministrazione",
    conTitle: "Scrivici,<br /><em>Incontriamoci</em>",
    conSub: "Il nostro team commerciale e di gestione أ¨ a vostra disposizione per organizzare una visita privata o rispondere a ogni domanda.",
    conLabel1: "Email Ufficiale", conLabel2: "Telefono Diretto", conLabel3: "Indirizzo", conLabel4: "Accesso Spiaggia",
    conAddr: "Avenue Habib Bourguiba, Mrezgua, Nabeul", conBeach: "A 300 metri dal mare",
    fnameLabel: "Nome", lnameLabel: "Cognome", emailLabel: "Email", phoneLabel: "Telefono / WhatsApp", msgLabel: "Messaggio / Tipologia richiesta",
    fnamePh: "Il tuo nome", lnamePh: "Il tuo cognome", emailPh: "tua@email.com", phonePh: "+216 ...", msgPh: "Il tuo messaggio...",
    formSubmit: "Invia il Messaggio",
    successMsg: "Messaggio inviato con successo. Il nostro team vi contatterأ  entro 24 ore.",
    footerTagline: "L'eccellenza in ogni dettaglio.",
    footerCopy: "آ© 2024 - 2026 Rأ©sidence Le Jacaranda. Tutti i diritti riservati.",
    navAbout: "Chi Siamo", navAmen: "Servizi", navTour: "Visita 360آ°", navGal: "Galleria", navQuartier: "Quartiere", navApp: "App Residenti", navCon: "Contatti",
    heroCta1: "Scopri la Residenza", heroCta2: "Visita Virtuale 360آ°"
  },

  /* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ DEUTSCH â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
  de: {
    heroBadgeText: "Auأںergewأ¶hnliche Residenz آ· Mrezgua Nabeul آ· 300m vom Strand",
    heroEyebrowText: "Mrezgua آ· Nabeul آ· Tunesien",
    heroTagline: "Die Kunst des Wohnens in schأ¶nster Vollendung",
    scrollText: "Scrollen zum Erkunden",
    stat1: "Wohnblأ¶cke", stat2: "Kristallklare Pools", stat3: "vom Mittelmeerstrand", stat4: "24/7 Concierge & Sicherheit",
    badgeLabel: "Sofortige أœbergabe", floatTitle: "Zeitgenأ¶ssische Architektur", floatSub: "Mediterranes Design & Luxusausstattung",
    aboutTag: "أœber das Projekt",
    aboutTitle: "Ein Auأںergewأ¶hnliches<br /><em>Lebensgefأ¼hl</em>",
    aboutBody: "Im Herzen von Mrezgua, nur 300 Meter vom herrlichen Strand von Nabeul entfernt, vereint die Rأ©sidence Le Jacaranda Modernitأ¤t, Eleganz und Ruhe in hأ¶chster Vollendung.",
    aboutBody2: "Strahlend weiأںe Fassaden, groأںzأ¼gige Balkone und liebevoll gestaltete Grأ¼nanlagen machen diese Residenz zu einer friedvollen Oase im gehobenen zeitgenأ¶ssischen Design.",
    aboutFeatures: ["Prestigetrأ¤chtige zeitgenأ¶ssische Architektur", "Erstklassige Ausfأ¼hrungen in Marmor und Aluminium", "Mediterrane Grأ¼nflأ¤chen und angelegte Gأ¤rten", "Umzأ¤unte, rund um die Uhr bewachte Residenz mit Zutrittskontrolle"],
    aboutCtaText: "360آ° Rundgang",
    amenTag: "Ausstattung & Service",
    amenTitle: "Exklusiver Luxus<br /><em>an einem Ort</em>",
    amen1: "Schwimmbأ¤der",   amen1d: "Zwei beleuchtete, kristallklare Pools fأ¼r unvergleichliche Entspannungsmomente zu jeder Tageszeit.",
    amen2: "24/7 Sicherheit", amen2d: "Gesicherter Zugang, permanente أœberwachung und modernste Kontrollsysteme fأ¼r Ihre vollkommene Ruhe.",
    amen3: "Privatparkplatz", amen3d: "أœberdachte und gesicherte Stellplأ¤tze exklusiv fأ¼r die Bewohner der Residenz.",
    amen4: "Grأ¼nanlagen",    amen4d: "Angelegte Gأ¤rten und mediterrane Bepflanzung fأ¼r eine wohltuende, erholsame Atmosphأ¤re.",
    amen5: "Edle Materialien", amen5d: "Hochwertige Baustoffe, groأںformatige Fliesen, Aluminiumelemente â€” auأںergewأ¶hnliche Standards.",
    amen6: "Concierge-Service", amen6d: "Verlأ¤sslicher Service zur diskreten Erfأ¼llung all Ihrer Anliegen.",
    typoTag: "Wohnungen & Grundrisse",
    typoTitle: "Lebensrأ¤ume<br /><em>Fأ¼r Exzellenz gestaltet</em>",
    typoSub: "Harmonische Grundrisse von optimierten 2-Zimmer-Wohnungen bis hin zu exklusiven Penthouses mit Panoramablick auf das Meer.",
    tourTag: "Virtueller Rundgang",
    tourTitle: "Entdecken Sie die Residenz<br /><em>in 360آ°</em>",
    tourSub: "Bewegen Sie sich frei durch unsere Rأ¤umlichkeiten. Klicken und ziehen Sie, um jede Ecke zu erkunden.",
    tabFacadeText: "Fassade & Nacht", tabInteriorText: "Wohnung", tabPoolText: "Pool & Gأ¤rten", tabBeachText: "Strand von Mrezgua",
    hintText: "Klicken und ziehen zum Umschauen",
    galTag: "Fotogalerie",
    galTitle: "Die Residenz<br /><em>in Bildern</em>",
    galFilterAll: "Alle", galFilterExt: "Auأںenbereich", galFilterInt: "Innenrأ¤ume", galFilterNight: "Pool & Nacht", galFilterCommon: "Gemeinschaftsbereiche", galFilterBeach: "Strand & Meer", galFilterNabeul: "Nabeul & Stadt", galFilterHammamet: "Hammamet & Freizeit",
    galCap1: "Zeitgenأ¶ssische Fassade", galCap2: "Nachtansicht", galCap3: "Marmoraufzأ¼ge & Foyer", galCap4: "Tiefgarage",
    galCap5: "Elegante Korridore", galCap6: "Panoramablick", galCap7: "Pool & Lobby", galCap8: "Groأںe Halle & Kronleuchter",
    galCap9: "Erdgeschossfoyer", galCap10: "Pool & Gأ¤rten",
    galCapBeach1: "Mrezgua Strand & Sonnenschirme", galCapBeach2: "Goldenes Ufer & Smaragdmeer", galCapBeach3: "Mediterranes Kristallklares Wasser", galCapBeach4: "Kأ¼stenhorizont & Weiأںer Sand",
    galCapNabeul1: "Monumentale Vase von Nabeul", galCapNabeul2: "Kunsthandwerksmarkt & Palmen", galCapNabeul3: "Medina & Lederhandwerker-Gassen", galCapNabeul4: "Orangen-Monument & Mosaik",
    galCapHam1: "Medina Yasmine & Goldene Pferde", galCapHam2: "أœberdachter Souk & Kunsthandwerk", galCapHam3: "Carthage Land Aquapark", galCapHam4: "Safari-Abenteuer & Freizeitparks",
    galCapGolf1: "Golf Citrus & Palmen-Fairways", galCapGolf2: "Golf Yasmine & Panoramasee",
    quartierTag: "Mediterraner Lebensstil",
    quartierTitle: "Mrezgua & Seine Schأ¤tze<br /><em>Zwischen Meer, Kultur und Erholung</em>",
    quartierSub: "Eine privilegierte Lage zwischen Nabeul und Hammamet, die mediterrane Ruhe mit urbaner Lebensqualitأ¤t verbindet.",
    qCard1Title: "Strand von Mrezgua", qCard1Desc: "Feiner weiأںer Sand, ruhiges tأ¼rkisfarbenes Wasser und zauberhafte Sonnenuntergأ¤nge أ¼ber dem Golf von Hammamet.",
    qCard2Title: "Nabeul & Kunsthandwerk", qCard2Desc: "Tunesische Hauptstadt der Keramik, monumentale Vase und Kunsthandwerksateliers.",
    qCard3Title: "Souks & Mأ¤rkte von Nabeul", qCard3Desc: "Palmenpromenade fأ¼r Fuأںgأ¤nger, traditionelle Keramik, Teppiche und authentische Atmosphأ¤re.",
    qCard4Title: "Medina & Historische Gassen", qCard4Desc: "Feine Lederwaren, weiأں-blaue Gassen, Minarette und reiches tunesisches Kulturerbe.",
    appTag: "Vernetztes أ–kosystem",
    appTitle: "Verwalten Sie Ihr Zuhause<br /><em>direkt per Smartphone</em>",
    appBody: "Schadensmeldungen mit einem Klick, direkter Kontakt zur Hausverwaltung und zum Concierge, offizielle Mitteilungen in Echtzeit und Statusverfolgung.",
    appFeatures: ["Echtzeit-Verfolgung von Anfragen & Vorschlأ¤gen", "Direkter Chat mit Verwaltung & Concierge", "Zahlungserinnerungen & geteilte PDF-Berichte", "Prioritأ¤re Benachrichtigungen der Residenz"],
    appStoreSub: "Laden im", playStoreSub: "Jetzt bei",
    locTag: "Strategische Lage",
    locTitle: "Mrezgua, Nabeul<br /><em>300m vom Meer entfernt</em>",
    locBadge1Val: "300m",   locBadge1Lbl: "Feiner Sandstrand (3 Min. zu Fuأں)",
    locBadge2Val: "5 Min.", locBadge2Lbl: "Stadtzentrum Nabeul & Mأ¤rkte",
    locBadge3Val: "45 Min.", locBadge3Lbl: "Flughafen Enfidha / Tunis",
    mapPinTitle: "Rأ©sidence Le Jacaranda",
    mapPinAddr: "Mrezgua, Nabeul, Tunesien آ· 300m vom Strand",
    gpsLabel: "Route von meinem Standort",
    conTag: "Verkaufsbأ¼ro & Verwaltung",
    conTitle: "Schreiben Sie uns,<br /><em>Lernen wir uns kennen</em>",
    conSub: "Unser Vertriebs- und Verwaltungsteam steht Ihnen gerne zur Seite, um eine private Besichtigung zu vereinbaren oder Ihre Fragen zu beantworten.",
    conLabel1: "Offizielle E-Mail", conLabel2: "Direktrufnummer", conLabel3: "Adresse", conLabel4: "Strandzugang",
    conAddr: "Avenue Habib Bourguiba, Mrezgua, Nabeul", conBeach: "300 Meter vom Meer entfernt",
    fnameLabel: "Vorname", lnameLabel: "Nachname", emailLabel: "E-Mail", phoneLabel: "Telefon / WhatsApp", msgLabel: "Nachricht / Gewأ¼nschter Wohnungstyp",
    fnamePh: "Ihr Vorname", lnamePh: "Ihr Nachname", emailPh: "ihre@email.de", phonePh: "+216 ...", msgPh: "Ihre Nachricht...",
    formSubmit: "Nachricht Senden",
    successMsg: "Nachricht erfolgreich gesendet. Unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.",
    footerTagline: "Exzellenz bis ins kleinste Detail.",
    footerCopy: "آ© 2024 - 2026 Rأ©sidence Le Jacaranda. Alle Rechte vorbehalten.",
    navAbout: "أœber Uns", navAmen: "Ausstattung", navTour: "360آ° Rundgang", navGal: "Galerie", navQuartier: "Quartier", navApp: "Bewohner-App", navCon: "Kontakt",
    heroCta1: "Residenz entdecken", heroCta2: "360آ° Rundgang"
  }
};

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   APPLY TRANSLATION
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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
    'galFilterAll','galFilterExt','galFilterInt','galFilterNight','galFilterCommon','galFilterBeach','galFilterNabeul','galFilterHammamet',
    'galCap1','galCap2','galCap3','galCap4','galCap5','galCap6','galCap7','galCap8','galCap9','galCap10',
    'galCapBeach1','galCapBeach2','galCapBeach3','galCapBeach4',
    'galCapNabeul1','galCapNabeul2','galCapNabeul3','galCapNabeul4',
    'galCapHam1','galCapHam2','galCapHam3','galCapHam4',
    'galCapGolf1','galCapGolf2',
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
  ];¤rkte",
    locBadge3Val: "45 Min.", locBadge3Lbl: "Flughafen Enfidha / Tunis",
    mapPinTitle: "Rأ©sidence Le Jacaranda",
    mapPinAddr: "Mrezgua, Nabeul, Tunesien آ· 300m vom Strand",
    gpsLabel: "Route von meinem Standort",
    conTag: "Verkaufsbأ¼ro & Verwaltung",
    conTitle: "Schreiben Sie uns,<br /><em>Lernen wir uns kennen</em>",
    conSub: "Unser Vertriebs- und Verwaltungsteam steht Ihnen gerne zur Seite, um eine private Besichtigung zu vereinbaren oder Ihre Fragen zu beantworten.",
    conLabel1: "Offizielle E-Mail", conLabel2: "Direktrufnummer", conLabel3: "Adresse", conLabel4: "Strandzugang",
    conAddr: "Avenue Habib Bourguiba, Mrezgua, Nabeul", conBeach: "300 Meter vom Meer entfernt",
    fnameLabel: "Vorname", lnameLabel: "Nachname", emailLabel: "E-Mail", phoneLabel: "Telefon / WhatsApp", msgLabel: "Nachricht / Gewأ¼nschter Wohnungstyp",
    fnamePh: "Ihr Vorname", lnamePh: "Ihr Nachname", emailPh: "ihre@email.de", phonePh: "+216 ...", msgPh: "Ihre Nachricht...",
    formSubmit: "Nachricht Senden",
    successMsg: "Nachricht erfolgreich gesendet. Unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.",
    footerTagline: "Exzellenz bis ins kleinste Detail.",
    footerCopy: "آ© 2024 - 2026 Rأ©sidence Le Jacaranda. Alle Rechte vorbehalten.",
    navAbout: "أœber Uns", navAmen: "Ausstattung", navTour: "360آ° Rundgang", navGal: "Galerie", navQuartier: "Quartier", navApp: "Bewohner-App", navCon: "Kontakt",
    heroCta1: "Residenz entdecken", heroCta2: "360آ° Rundgang"
  }
};

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   APPLY TRANSLATION
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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
    'galFilterAll','galFilterExt','galFilterInt','galFilterNight','galFilterCommon','galFilterBeach','galFilterNabeul','galFilterHammamet',
    'galCap1','galCap2','galCap3','galCap4','galCap5','galCap6','galCap7','galCap8','galCap9','galCap10',
    'galCapBeach1','galCapBeach2','galCapBeach3','galCapBeach4',
    'galCapNabeul1','galCapNabeul2','galCapNabeul3','galCapNabeul4',
    'galCapHam1','galCapHam2','galCapHam3','galCapHam4',
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   LANGUAGE DROPDOWN
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   NAVBAR SCROLL
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   HAMBURGER MENU
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   SMOOTH NAV CLICKS
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.getElementById(a.getAttribute('href').slice(1));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   CONTACT FORM
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   LIGHTBOX
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   PARALLAX HERO
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
const heroImg = document.querySelector('#heroParallaxImg');
if (heroImg) {
  window.addEventListener('scroll', () => {
    heroImg.style.transform = 'translateY(' + (window.scrollY * 0.25) + 'px)';
  }, { passive: true });
}

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   ANIMATED STAT COUNTERS
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   SCROLL REVEAL
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   3D TILT ON AMENITY CARDS
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   SCROLL PROGRESS BAR
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
const progressBar = document.getElementById('scrollProgress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = ((scrollTop / docHeight) * 100) + '%';
  }, { passive: true });
}

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   CUSTOM CURSOR
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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


/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   VIEWER 360 WEBGL - PURE SPHERE PROJECTION (NO DEPS)
   Fonctionne sur GitHub Pages sans CORS ni CDN externe
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */

const scenes = {
  facade:   { src: 'panorama_facade_night.jpg', title: 'Façade & Nuit' },
  interior: { src: 'panorama_interior.jpg',     title: 'Appartement' },
  pool:     { src: 'panorama_pool.jpg',         title: 'Piscine & Jardins' },
  beach:    { src: 'panorama_beach.jpg',        title: 'Plage de Mrezgua' },
};

let currentSceneKey = 'facade';
let viewer360 = null;

class WebGL360Viewer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.container.innerHTML = '';

    // Canvas setup
    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = 'width:100%;height:100%;display:block;cursor:grab;touch-action:none;';
    this.container.appendChild(this.canvas);

    // Try WebGL first, fallback to 2D canvas
    this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
    if (this.gl) {
      this._initWebGL();
    } else {
      this.ctx2d = this.canvas.getContext('2d');
    }

    // State
    this.yaw = 0;
    this.pitch = 0;
    this.fov = 90;
    this.isInteracting = false;
    this.autoRotateSpeed = 0.03;
    this.lastX = 0;
    this.lastY = 0;
    this.startYaw = 0;
    this.startPitch = 0;
    this.texture = null;
    this.image = null;
    this.rafId = null;
    this.isLoaded = false;

    this._initEvents();
    this._loop();
  }

  _initWebGL() {
    const gl = this.gl;
    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;
    const fsSource = `
      precision mediump float;
      varying vec2 v_uv;
      uniform sampler2D u_texture;
      uniform float u_yaw;
      uniform float u_pitch;
      uniform float u_fov;
      uniform vec2 u_resolution;

      const float PI = 3.14159265358979;

      void main() {
        // Convert screen coords to ray direction
        vec2 uv = v_uv;
        float aspect = u_resolution.x / u_resolution.y;
        float fovRad = u_fov * PI / 180.0;

        // Ray in camera space
        vec3 ray;
        ray.x = uv.x * aspect * tan(fovRad * 0.5);
        ray.y = uv.y * tan(fovRad * 0.5);
        ray.z = -1.0;
        ray = normalize(ray);

        // Apply pitch (rotation around X)
        float pitchRad = u_pitch * PI / 180.0;
        float cp = cos(pitchRad), sp = sin(pitchRad);
        vec3 rp;
        rp.x = ray.x;
        rp.y = ray.y * cp - ray.z * sp;
        rp.z = ray.y * sp + ray.z * cp;

        // Apply yaw (rotation around Y)
        float yawRad = u_yaw * PI / 180.0;
        float cy = cos(yawRad), sy = sin(yawRad);
        vec3 r;
        r.x = rp.x * cy + rp.z * sy;
        r.y = rp.y;
        r.z = -rp.x * sy + rp.z * cy;

        // Equirectangular projection
        float lon = atan(r.x, -r.z);
        float lat = asin(clamp(r.y, -1.0, 1.0));

        float tx = (lon / (2.0 * PI)) + 0.5;
        float ty = (lat / PI) + 0.5;

        gl_FragColor = texture2D(u_texture, vec2(tx, ty));
      }
    `;

    // Compile shaders
    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vsSource);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fsSource);
    gl.compileShader(fs);

    this.program = gl.createProgram();
    gl.attachShader(this.program, vs);
    gl.attachShader(this.program, fs);
    gl.linkProgram(this.program);
    gl.useProgram(this.program);

    // Full-screen quad
    const positions = new Float32Array([-1,-1, 1,-1, -1,1, 1,1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(this.program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    this.uYaw = gl.getUniformLocation(this.program, 'u_yaw');
    this.uPitch = gl.getUniformLocation(this.program, 'u_pitch');
    this.uFov = gl.getUniformLocation(this.program, 'u_fov');
    this.uResolution = gl.getUniformLocation(this.program, 'u_resolution');
    this.uTexture = gl.getUniformLocation(this.program, 'u_texture');
  }

  load(src) {
    this.isLoaded = false;
    const img = new Image();
    img.onload = () => {
      this.image = img;
      this.isLoaded = true;
      if (this.gl) {
        const gl = this.gl;
        if (this.texture) gl.deleteTexture(this.texture);
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
      }
    };
    img.onerror = () => {
      console.warn('360 image load error:', src);
    };
    img.src = src;
  }

  _resize() {
    const rect = this.container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.floor(rect.width * dpr));
    const h = Math.max(1, Math.floor(rect.height * dpr));
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
      if (this.gl) this.gl.viewport(0, 0, w, h);
    }
  }

  _initEvents() {
    const el = this.canvas;

    // Mouse
    el.addEventListener('mousedown', e => {
      this.isInteracting = true;
      this.lastX = e.clientX;
      this.lastY = e.clientY;
      this.startYaw = this.yaw;
      this.startPitch = this.pitch;
      el.style.cursor = 'grabbing';
      e.preventDefault();
    });
    window.addEventListener('mousemove', e => {
      if (!this.isInteracting) return;
      const dx = e.clientX - this.lastX;
      const dy = e.clientY - this.lastY;
      this.yaw = this.startYaw - dx * 0.25;
      this.pitch = Math.max(-85, Math.min(85, this.startPitch + dy * 0.25));
    });
    window.addEventListener('mouseup', () => {
      this.isInteracting = false;
      el.style.cursor = 'grab';
    });

    // Touch
    let touchStartX = 0, touchStartY = 0;
    el.addEventListener('touchstart', e => {
      if (e.touches.length === 1) {
        this.isInteracting = true;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        this.lastX = touchStartX;
        this.lastY = touchStartY;
        this.startYaw = this.yaw;
        this.startPitch = this.pitch;
      }
    }, { passive: true });
    window.addEventListener('touchmove', e => {
      if (!this.isInteracting || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - this.lastX;
      const dy = e.touches[0].clientY - this.lastY;
      this.yaw = this.startYaw - dx * 0.25;
      this.pitch = Math.max(-85, Math.min(85, this.startPitch + dy * 0.25));
    }, { passive: true });
    window.addEventListener('touchend', () => { this.isInteracting = false; });

    // Wheel zoom
    el.addEventListener('wheel', e => {
      e.preventDefault();
      this.fov = Math.max(40, Math.min(120, this.fov + e.deltaY * 0.05));
    }, { passive: false });

    // Resize
    window.addEventListener('resize', () => this._resize());
  }

  _renderWebGL() {
    const gl = this.gl;
    if (!this.texture || !this.isLoaded) {
      gl.clearColor(0.075, 0.09, 0.12, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      return;
    }
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.uniform1f(this.uYaw, this.yaw);
    gl.uniform1f(this.uPitch, this.pitch);
    gl.uniform1f(this.uFov, this.fov);
    gl.uniform2f(this.uResolution, this.canvas.width, this.canvas.height);
    gl.uniform1i(this.uTexture, 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  _render2D() {
    const ctx = this.ctx2d;
    const cw = this.canvas.width;
    const ch = this.canvas.height;
    if (!this.isLoaded || !this.image) {
      ctx.fillStyle = '#13171f';
      ctx.fillRect(0, 0, cw, ch);
      ctx.fillStyle = '#d4af37';
      ctx.font = `${Math.max(14, cw * 0.02)}px Montserrat, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('Chargement...', cw / 2, ch / 2);
      return;
    }
    const iw = this.image.naturalWidth;
    const ih = this.image.naturalHeight;
    const yawNorm = ((this.yaw % 360) + 360) % 360;
    const fovFraction = this.fov / 360;
    const srcW = iw * fovFraction;
    const srcH = ih * (fovFraction * (ch / cw));
    const pitchFrac = this.pitch / 90;
    const srcCX = (yawNorm / 360) * iw;
    const srcCY = (ih / 2) - (pitchFrac * (ih * 0.3));
    let sx = srcCX - srcW / 2;
    const sy = Math.max(0, Math.min(ih - srcH, srcCY - srcH / 2));
    ctx.clearRect(0, 0, cw, ch);
    if (sx < 0) {
      const lp = -sx;
      ctx.drawImage(this.image, iw + sx, sy, lp, srcH, 0, 0, (lp / srcW) * cw, ch);
      ctx.drawImage(this.image, 0, sy, srcW - lp, srcH, (lp / srcW) * cw, 0, ((srcW - lp) / srcW) * cw, ch);
    } else if (sx + srcW > iw) {
      const rp = (sx + srcW) - iw;
      ctx.drawImage(this.image, sx, sy, srcW - rp, srcH, 0, 0, ((srcW - rp) / srcW) * cw, ch);
      ctx.drawImage(this.image, 0, sy, rp, srcH, ((srcW - rp) / srcW) * cw, 0, (rp / srcW) * cw, ch);
    } else {
      ctx.drawImage(this.image, sx, sy, srcW, srcH, 0, 0, cw, ch);
    }
  }

  _loop() {
    this._resize();
    if (!this.isInteracting) {
      this.yaw = (this.yaw + this.autoRotateSpeed) % 360;
    }
    if (this.gl) {
      this._renderWebGL();
    } else {
      this._render2D();
    }
    this.rafId = requestAnimationFrame(() => this._loop());
  }

  destroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.gl && this.texture) this.gl.deleteTexture(this.texture);
  }
}

function initPanorama(sceneKey) {
  currentSceneKey = sceneKey || 'facade';
  const s = scenes[currentSceneKey];
  if (!s) return;

  const container = document.getElementById('panorama360');
  if (!container) return;

  if (!viewer360) {
    viewer360 = new WebGL360Viewer('panorama360');
  }
  viewer360.load(s.src);
}

document.querySelectorAll('.tour-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tour-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    initPanorama(tab.dataset.scene);
    const hint = document.getElementById('viewerHint');
    if (hint) { hint.style.opacity = '1'; hint.style.display = 'flex'; setTimeout(() => { hint.style.opacity = '0'; }, 2500); }
  });
});

// Initialisation 360 au chargement
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initPanorama('facade'));
} else {
  initPanorama('facade');
}


/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   GOLD PARTICLES CANVAS
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   MAGNETIC BUTTONS
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   GALLERY FILTERING
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   AMBIENCE (DAY / NIGHT) MODE
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
const ambienceToggle = document.getElementById('ambienceToggle');
const ambienceIcon = document.getElementById('ambienceIcon');
if (ambienceToggle) {
  ambienceToggle.addEventListener('click', () => {
    document.body.classList.toggle('theme-day');
    const isDay = document.body.classList.contains('theme-day');
    if (ambienceIcon) ambienceIcon.textContent = isDay ? 'âک€ï¸ڈ' : 'ًںŒ™';
  });
}

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   BACK TO TOP BUTTON
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   INTERACTIVE RESIDENT SIMULATOR MODAL
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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
      btnSimulateSubmit.textContent = 'Transmettre au Syndic (Dأ©mo)';
      if (demoResult) demoResult.classList.add('visible');
    }, 600);
  });
}

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   GPS â€” DIRECTIONS FROM CURRENT POSITION
   Destination: Rأ©sidence Le Jacaranda, Mrezgua Nabeul
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
const DEST_LAT  = 36.4508;
const DEST_LNG  = 10.7370;
const DEST_NAME = 'Rأ©sidence Le Jacaranda, Mrezgua, Nabeul, Tunisie';

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
    if (gpsLabel) gpsLabel.textContent = 'Localisation en coursâ€¦';
    if (gpsStatus) { gpsStatus.className = 'gps-status'; gpsStatus.textContent = "Veuillez autoriser l'accأ¨s أ  votre position."; }
  } else if (state === 'success') {
    btnGps.classList.add('success');
    if (gpsLabel) gpsLabel.textContent = 'âœ“ Itinأ©raire ouvert dans Google Maps';
    if (gpsStatus) { gpsStatus.className = 'gps-status ok'; gpsStatus.textContent = msg || ''; }
    setTimeout(() => {
      btnGps.classList.remove('success');
      if (gpsLabel) gpsLabel.textContent = "M'y rendre depuis ma position";
      if (gpsStatus) { gpsStatus.className = 'gps-status'; gpsStatus.textContent = ''; }
    }, 4000);
  } else if (state === 'error') {
    btnGps.classList.add('error');
    if (gpsLabel) gpsLabel.textContent = 'Impossible de localiser';
    if (gpsStatus) { gpsStatus.className = 'gps-status err'; gpsStatus.textContent = msg || 'Permission refusأ©e ou GPS indisponible.'; }
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
      setGpsState('error', 'Gأ©olocalisation non supportأ©e par ce navigateur.');
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
            `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> Voir l'itinأ©raire complet`);
        }

        setGpsState('success', `Position dأ©tectأ©e آ· Itinأ©raire vers Mrezgua, Nabeul`);
        window.open(dirUrl, '_blank', 'noopener,noreferrer');
      },
      (err) => {
        const msgs = {
          1: 'Permission d\'accأ¨s أ  la position refusأ©e.',
          2: 'Position indisponible (GPS hors portأ©e).',
          3: 'La demande de position a expirأ©.',
        };
        setGpsState('error', msgs[err.code] || 'Erreur de gأ©olocalisation.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  });
}

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   TYPOLOGIES INTERACTIVE HANDLER
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
const typoData = {
  s1: {
    name: "Appartement S+1 â€” Grand Confort",
    area: "65 mآ²",
    desc: "Idأ©al pour un pied-أ -terre luxueux ou un investissement locatif أ  forte rentabilitأ©. Salon lumineux avec baie vitrأ©e ouverte sur terrasse, cuisine contemporaine entiأ¨rement أ©quipأ©e, chambre spacieuse avec dressing intأ©grأ© et salle d'eau أ  l'italienne.",
    specArea: "65 mآ²",
    specRooms: "1 Chambre + Dressing",
    specBaths: "1 Italienne en Marbre",
    specBalcony: "Terrasse vue Jardin / Bassin",
    svg: `<svg viewBox="0 0 500 350" class="blueprint-svg" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(212,175,55,0.08)" stroke-width="1"/></pattern></defs>
      <rect width="500" height="350" fill="#13171f"/><rect width="500" height="350" fill="url(#grid1)" />
      <rect x="40" y="40" width="240" height="180" fill="rgba(212,175,55,0.06)" stroke="#d4af37" stroke-width="2" stroke-dasharray="4 2"/>
      <text x="160" y="135" fill="#f5d77f" font-family="'Montserrat',sans-serif" font-size="14" text-anchor="middle" font-weight="600">SALON &amp; Sأ‰JOUR (32 mآ²)</text>
      <rect x="290" y="40" width="170" height="180" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="375" y="135" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="13" text-anchor="middle">SUITE PARENTALE (18 mآ²)</text>
      <rect x="40" y="230" width="140" height="80" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="110" y="275" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="12" text-anchor="middle">CUISINE (10 mآ²)</text>
      <rect x="190" y="230" width="90" height="80" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="235" y="275" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="11" text-anchor="middle">S.D.B (5 mآ²)</text>
      <rect x="290" y="230" width="170" height="80" fill="rgba(212,175,55,0.12)" stroke="#d4af37" stroke-width="2"/>
      <text x="375" y="275" fill="#d4af37" font-family="'Montserrat',sans-serif" font-size="12" text-anchor="middle" font-weight="600">TERRASSE (12 mآ²)</text>
    </svg>`
  },
  s2: {
    name: "Appartement S+2 â€” Prestige Familial",
    area: "115 mآ²",
    desc: "أ‰quilibre d'espace et d'intimitأ©. Vaste piأ¨ce de rأ©ception baignأ©e de lumiأ¨re avec accأ¨s direct sur grande terrasse, suite parentale avec salle d'eau privative, seconde chambre avec placards intأ©grأ©s, cuisine sأ©parأ©e avec sأ©choir et salle d'eau invitأ©s.",
    specArea: "115 mآ²",
    specRooms: "2 Chambres (Suite parentale + Chambre)",
    specBaths: "2 Salles d'Eau complأ¨tes",
    specBalcony: "Grande Terrasse vue Mer & Piscine",
    svg: `<svg viewBox="0 0 500 350" class="blueprint-svg" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(212,175,55,0.08)" stroke-width="1"/></pattern></defs>
      <rect width="500" height="350" fill="#13171f"/><rect width="500" height="350" fill="url(#grid2)" />
      <rect x="30" y="30" width="220" height="190" fill="rgba(212,175,55,0.06)" stroke="#d4af37" stroke-width="2"/>
      <text x="140" y="130" fill="#f5d77f" font-family="'Montserrat',sans-serif" font-size="13" text-anchor="middle" font-weight="600">DOUBLE SALON (42 mآ²)</text>
      <rect x="260" y="30" width="120" height="130" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="320" y="100" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="11" text-anchor="middle">SUITE (20 mآ²)</text>
      <rect x="390" y="30" width="80" height="130" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="430" y="100" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">CH. 2 (14 mآ²)</text>
      <rect x="30" y="230" width="130" height="90" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="95" y="280" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="11" text-anchor="middle">CUISINE &amp; Sأ‰CHOIR</text>
      <rect x="170" y="230" width="80" height="90" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="210" y="280" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">2x S.D.B</text>
      <rect x="260" y="170" width="210" height="150" fill="rgba(212,175,55,0.12)" stroke="#d4af37" stroke-width="2"/>
      <text x="365" y="250" fill="#d4af37" font-family="'Montserrat',sans-serif" font-size="13" text-anchor="middle" font-weight="600">TERRASSE PANORAMIQUE (24 mآ²)</text>
    </svg>`
  },
  s3: {
    name: "Appartement S+3 â€” Rأ©sidence d'Exception",
    area: "165 mآ²",
    desc: "Le summum du confort familial. Majestueux salon et salle أ  manger avec triple exposition et terrasse d'angle vue mer, suite parentale royale avec dressing amأ©nagأ© et salle de bain marbre, deux chambres enfants avec rangements, cuisine gastronomique avec cellier.",
    specArea: "165 mآ²",
    specRooms: "3 Chambres (Master Suite + 2 Chambres)",
    specBaths: "2 Salles de bain + Salle d'eau invitأ©s",
    specBalcony: "Terrasse d'angle panoramique 38 mآ²",
    svg: `<svg viewBox="0 0 500 350" class="blueprint-svg" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="grid3" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(212,175,55,0.08)" stroke-width="1"/></pattern></defs>
      <rect width="500" height="350" fill="#13171f"/><rect width="500" height="350" fill="url(#grid3)" />
      <rect x="20" y="20" width="230" height="210" fill="rgba(212,175,55,0.06)" stroke="#d4af37" stroke-width="2"/>
      <text x="135" y="130" fill="#f5d77f" font-family="'Montserrat',sans-serif" font-size="13" text-anchor="middle" font-weight="600">GRAND SALON &amp; Sأ‰JOUR (55 mآ²)</text>
      <rect x="260" y="20" width="110" height="150" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="315" y="100" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">MASTER SUITE (26 mآ²)</text>
      <rect x="380" y="20" width="100" height="150" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="430" y="100" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">CH. 2 &amp; 3 (28 mآ²)</text>
      <rect x="20" y="240" width="150" height="90" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="95" y="290" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="11" text-anchor="middle">CUISINE GASTRONOMIQUE</text>
      <rect x="180" y="240" width="70" height="90" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="215" y="290" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="9" text-anchor="middle">3x S.D.B</text>
      <rect x="260" y="180" width="220" height="150" fill="rgba(212,175,55,0.12)" stroke="#d4af37" stroke-width="2"/>
      <text x="370" y="260" fill="#d4af37" font-family="'Montserrat',sans-serif" font-size="12" text-anchor="middle" font-weight="600">TERRASSE ANGLE MER (38 mآ²)</text>
    </svg>`
  },
  penthouse: {
    name: "Penthouse / Duplex â€” Le Sommet du Luxe",
    area: "245 mآ²",
    desc: "Un joyau suspendu entre ciel et mer. Dernier أ©tage avec ascenseur أ  accأ¨s privأ© direct, hauteur sous plafond remarquable, salon de rأ©ception avec baies vitrأ©es toute hauteur, solarium et rooftop panoramique أ  360آ° sur toute la baie de Nabeul et Hammamet.",
    specArea: "245 mآ² (170 mآ² couvert + 75 mآ² Roof)",
    specRooms: "4 Suites Privatives avec Dressing",
    specBaths: "4 Salles de Bain en Marbre Noir & Dorأ©",
    specBalcony: "Rooftop Solarium 360آ° avec Jacuzzi option",
    svg: `<svg viewBox="0 0 500 350" class="blueprint-svg" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="grid4" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(212,175,55,0.08)" stroke-width="1"/></pattern></defs>
      <rect width="500" height="350" fill="#13171f"/><rect width="500" height="350" fill="url(#grid4)" />
      <rect x="20" y="20" width="200" height="160" fill="rgba(212,175,55,0.08)" stroke="#d4af37" stroke-width="2"/>
      <text x="120" y="105" fill="#f5d77f" font-family="'Montserrat',sans-serif" font-size="12" text-anchor="middle" font-weight="700">SALON CATHأ‰DRALE (65 mآ²)</text>
      <rect x="230" y="20" width="120" height="160" fill="rgba(255,255,255,0.03)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="290" y="105" fill="#ffffff" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">SUITES ROYAL (45 mآ²)</text>
      <rect x="360" y="20" width="120" height="160" fill="rgba(212,175,55,0.04)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="420" y="105" fill="#f5d77f" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">ACCأˆS PRIVأ‰ ASCENSEUR</text>
      <rect x="20" y="190" width="460" height="140" fill="rgba(212,175,55,0.18)" stroke="#d4af37" stroke-width="2.5"/>
      <circle cx="410" cy="260" r="35" fill="rgba(43,68,52,0.3)" stroke="#d4af37" stroke-width="1.5"/>
      <text x="410" y="265" fill="#d4af37" font-family="'Montserrat',sans-serif" font-size="10" text-anchor="middle">JACUZZI</text>
      <text x="210" y="265" fill="#f5d77f" font-family="'Montserrat',sans-serif" font-size="14" text-anchor="middle" font-weight="700">ROOFTOP &amp; SOLARIUM PANORAMIQUE 360آ° (75 mآ²)</text>
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   JAZZ LOUNGE â€” AUTOPLAY SILENCIEUX + Dأ‰MUETTAGE AU 1er GESTE
   Technique : muted autoplay (autorisأ© par tous les navigateurs)
   â†’ dأ¨s le 1er scroll/clic/toucher : dأ©muettage progressif
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
(function() {
  const audio = document.getElementById('jazzAudio');
  const btn   = document.getElementById('soundscapeToggle');
  if (!audio) return;

  // L'audio dأ©marre dأ©jأ  en boucle muette (attributs HTML : autoplay muted loop)
  // S'assurer qu'il tourne
  audio.play().catch(() => {});

  let unmuteTriggered = false;

  function unmuteFadeIn() {
    if (unmuteTriggered) return;
    unmuteTriggered = true;

    // Dأ©muetter et monter le volume en fondu sur 2.5 secondes
    audio.volume = 0;
    audio.muted  = false;

    const target   = 0.45;
    const duration = 2500; // ms
    const interval = 60;
    const steps    = duration / interval;
    const stepVol  = target / steps;

    const iv = setInterval(() => {
      if (audio.volume + stepVol >= target) {
        audio.volume = target;
        clearInterval(iv);
        if (btn) { btn.classList.add('active'); btn.title = 'Mettre en pause la musique Jazz'; }
      } else {
        audio.volume += stepVol;
      }
    }, interval);

    // Retirer les listeners aprأ¨s le premier dأ©clenchement
    ['mousemove','click','scroll','touchstart','keydown','pointerdown'].forEach(evt => {
      window.removeEventListener(evt, unmuteFadeIn, { passive: true });
      document.removeEventListener(evt, unmuteFadeIn, { passive: true });
    });
  }

  // أ‰couter le premier geste de l'utilisateur
  ['mousemove','click','scroll','touchstart','keydown','pointerdown'].forEach(evt => {
    window.addEventListener(evt, unmuteFadeIn,  { once: true, passive: true });
    document.addEventListener(evt, unmuteFadeIn, { once: true, passive: true });
  });

  // Bouton toggle dans la navbar
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (audio.paused) {
        audio.muted = false;
        audio.play().catch(() => {});
        btn.classList.add('active');
        btn.title = 'Mettre en pause la musique Jazz';
        unmuteTriggered = true;
      } else if (audio.muted) {
        unmuteFadeIn();
      } else {
        audio.pause();
        btn.classList.remove('active');
        btn.title = 'Lancer l\'ambiance Jazz Lounge';
      }
    });
  }

  // Sync bouton selon أ©tat audio
  audio.addEventListener('play',  () => { if (!audio.muted && btn) btn.classList.add('active'); });
  audio.addEventListener('pause', () => { if (btn) btn.classList.remove('active'); });

})();



/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   LIVE MREZGUA WEATHER & REAL-TIME CLOCK
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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
    // Mrezgua, Nabeul coordinates: 36.45آ° N, 10.74آ° E
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=36.45&longitude=10.74&current=temperature_2m,relative_humidity_2m,weather_code,is_day&timezone=Africa%2FTunis');
    if (!res.ok) throw new Error('Weather API error');
    const data = await res.json();
    if (data && data.current) {
      if (tempEl && data.current.temperature_2m !== undefined) {
        tempEl.textContent = `${Math.round(data.current.temperature_2m)}آ°C`;
      }
      if (humEl && data.current.relative_humidity_2m !== undefined) {
        humEl.textContent = `ًں’§ ${Math.round(data.current.relative_humidity_2m)}%`;
      }
    }
  } catch (err) {
    console.warn('Live weather fallback:', err);
    if (tempEl) tempEl.textContent = '26آ°C';
    if (humEl) humEl.textContent = 'ًں’§ 85%';
  }
}

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   INIT ALL
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
applyTranslation('fr');
initTypologies();
fetchLiveWeather();
setInterval(fetchLiveWeather, 600000); // refresh weather every 10 min
updateLiveClock();
setInterval(updateLiveClock, 1000); // refresh clock every second
