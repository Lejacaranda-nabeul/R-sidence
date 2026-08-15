/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   Rأ‰SIDENCE LE JACARANDA â€” App Logic (FR آ· AR آ· EN آ· ES)
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */

/* ── Language Config ── */
const langMeta = {
  fr: { flag: '🇫🇷', code: 'FR', label: 'Français', dir: 'ltr', fontClass: '' },
  en: { flag: '🇬🇧', code: 'EN', label: 'English',  dir: 'ltr', fontClass: '' },
  es: { flag: '🇪🇸', code: 'ES', label: 'Español',  dir: 'ltr', fontClass: '' },
  it: { flag: '🇮🇹', code: 'IT', label: 'Italiano', dir: 'ltr', fontClass: '' },
  de: { flag: '🇩🇪', code: 'DE', label: 'Deutsch',  dir: 'ltr', fontClass: '' },
  ar: { flag: '🇹🇳', code: 'AR', label: 'عربي',     dir: 'rtl', fontClass: 'rtl' },
};

/* â”€â”€ Translations â”€â”€ */
const translations = {

  /* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ FRANأ‡AIS â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
  fr: {
    heroEyebrow: 'Mrezgua آ· Nabeul آ· Tunisie',
    heroTagline: "L'art de vivre dans sa plus belle expression",
    scrollText: 'Dأ©filer',
    stat1: 'Blocs', stat2: 'Piscines', stat3: 'de la Plage', stat4: 'Conciergerie',
    aboutTag: 'أ€ Propos',
    aboutTitle: 'Un Art de Vivre<br /><em>Exceptionnel</em>',
    aboutBody: "Nichأ©e au cإ“ur de Mrezgua, أ  300 mأ¨tres de la plage de Nabeul, la Rأ©sidence Le Jacaranda est le fruit d'une vision architecturale ambitieuse : offrir un cadre de vie alliant modernitأ©, أ©lأ©gance et sأ©rأ©nitأ©.",
    aboutBody2: 'Ses faأ§ades en blanc immaculأ©, ses balcons gأ©nأ©reux et ses espaces communs soigneusement amأ©nagأ©s font de cette rأ©sidence un havre de paix au design contemporain.',
    aboutFeatures: ['Architecture contemporaine haut de gamme', 'Finitions de premier choix', 'Espaces verts paysagأ©s', 'أ€ 300m de la mer'],
    badgeLabel: 'Livraison', floatTitle: 'Architecture Premium', floatSub: 'Design contemporain de prestige',
    aboutCtaText: 'Explorer en 360آ°',
    amenTag: 'Prestations',
    amenTitle: 'Tout le Luxe<br /><em>Rأ©uni en un Lieu</em>',
    amen1: 'Piscines',          amen1d: 'Deux bassins cristallins illuminأ©s, pour des moments de dأ©tente incomparables أ  toute heure.',
    amen2: 'Sأ©curitأ© 24h/24',  amen2d: 'Accأ¨s sأ©curisأ©, surveillance permanente et systأ¨me de contrأ´le avancأ© pour votre tranquillitأ©.',
    amen3: 'Parking Privأ©',    amen3d: 'Espaces de stationnement couverts et sأ©curisأ©s, أ  disposition exclusive des rأ©sidents.',
    amen4: 'Espaces Verts',    amen4d: 'Jardins paysagأ©s et vأ©gأ©tation mأ©diterranأ©enne pour une atmosphأ¨re douce et ressourأ§ante.',
    amen5: 'Finitions Premium', amen5d: "Matأ©riaux nobles, carrelage grand format, menuiserie aluminium â€” des prestations d'exception.",
    amen6: 'Conciergerie',     amen6d: 'Service disponible pour rأ©pondre أ  toutes vos demandes avec la plus grande discrأ©tion.',
    tourTag: 'Visite Virtuelle',
    tourTitle: 'Explorez la Rأ©sidence<br /><em>en 360آ°</em>',
    tourSub: 'Naviguez librement dans nos espaces. Cliquez et faites glisser pour explorer chaque recoin.',
    tabInteriorText: 'Appartement', tabPoolText: 'Piscine & Jardins',
    hintText: 'Cliquez et faites glisser pour explorer',
    galTag: 'Galerie',
    galTitle: 'La Rأ©sidence<br /><em>en Images</em>',
    galCap1: 'Vue Extأ©rieure', galCap2: 'Appartements', galCap3: 'Piscine de Nuit', galCap4: 'Vue Aأ©rienne',
    appTag: 'Application Mobile',
    appTitle: 'Gأ©rez votre rأ©sidence<br /><em>depuis votre poche</em>',
    appBody: "Rأ©servez la piscine, contactez la conciergerie, accأ©dez aux informations et recevez les notifications importantes â€” tout depuis l'application officielle Le Jacaranda.",
    appFeatures: ["Accأ¨s et contrأ´le de l'entrأ©e", 'Rأ©servation piscine & espaces communs', 'Chat direct avec la conciergerie', 'Notifications et annonces rأ©sidence'],
    appStoreSub: 'Tأ©lأ©charger sur', playStoreSub: 'Disponible sur',
    locTag: 'Localisation',
    locTitle: 'Mrezgua, Nabeul<br /><em>أ€ 300m de la Mer</em>',
    locBadge1Val: '300m',  locBadge1Lbl: 'de la plage',
    locBadge2Val: 'Nabeul', locBadge2Lbl: 'Centre-ville',
    locBadge3Val: 'Enfidha', locBadge3Lbl: 'Aأ©roport proche',
    mapPinTitle: 'Rأ©sidence Le Jacaranda',
    mapPinAddr: 'Mrezgua, Nabeul, Tunisie آ· 300m de la plage',
    conTag: 'Contact',
    conTitle: 'أ‰crivez-nous,<br /><em>Rencontrons-nous</em>',
    conSub: 'Notre أ©quipe est أ  votre disposition pour vous accompagner dans votre projet de vie au sein de la Rأ©sidence Le Jacaranda.',
    conLabel1: 'Email', conLabel2: 'Tأ©lأ©phone', conLabel3: 'Adresse', conLabel4: 'Accأ¨s Plage',
    conAddr: 'Mrezgua, Nabeul, Tunisie', conBeach: 'أ€ 300 mأ¨tres de la mer',
    fnameLabel: 'Prأ©nom', lnameLabel: 'Nom', emailLabel: 'Email', phoneLabel: 'Tأ©lأ©phone', msgLabel: 'Message',
    fnamePh: 'Votre prأ©nom', lnamePh: 'Votre nom', emailPh: 'votre@email.com', phonePh: '+216 ...', msgPh: 'Votre message...',
    formSubmit: 'Envoyer le Message',
    successMsg: 'Message envoyأ© avec succأ¨s. Nous vous contacterons trأ¨s prochainement.',
    footerTagline: "L'excellence أ  chaque dأ©tail.",
    footerCopy: 'آ© 2024 - 2026 Rأ©sidence Le Jacaranda. Tous droits rأ©servأ©s.',
    navAbout: 'À Propos', navAmen: 'Prestations', navTypo: 'Logements', navTour: 'Visite 360°', navGal: 'Galerie', navQuartier: 'Quartier', navApp: 'App Résidents', navLoc: 'Localisation', navCon: 'Contact',
    typoTag: 'Logements & Plans', typoTitle: 'Espaces de Vie<br /><em>Conçus pour l\'Excellence</em>',
    quartierTag: 'Art de Vivre Méditerranéen', quartierTitle: 'Mrezgua & Ses Trésors<br /><em>Entre Mer, Culture & Détente</em>',
    ctaNav: 'Prendre Rendez-vous',
    heroCta1: 'Découvrir', heroCta2: 'Visite 360°',
  },

  /* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ ARABIC â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
  ar: {
    heroEyebrow: 'ظ…ط±ط²ع¤ط© آ· ظ†ط§ط¨ظ„ آ· طھظˆظ†ط³',
    heroTagline: 'ظپظ† ط§ظ„ط¹ظٹط´ ظپظٹ ط£ط¨ظ‡ظ‰ طھط¬ظ„ظٹط§طھظ‡',
    scrollText: 'ط§ظ†طھظ‚ظ„ ظ„ط£ط³ظپظ„',
    stat1: 'ظ…ط¨ط§ظ†ظچ', stat2: 'ظ…ط³ط§ط¨ط­', stat3: 'ظ…ظ† ط§ظ„ط´ط§ط·ط¦', stat4: 'ظƒظˆظ†ط³ظٹط±ط¬',
    aboutTag: 'ط¹ظ† ط§ظ„ظ…ط´ط±ظˆط¹',
    aboutTitle: 'ط£ط³ظ„ظˆط¨ ط­ظٹط§ط©<br /><em>ط§ط³طھط«ظ†ط§ط¦ظٹ</em>',
    aboutBody: 'طھظ‚ط¹ ط¥ظ‚ط§ظ…ط© ظ„ظˆ ط®ط§ظƒط§ط±ط§ظ†ط¯ط§ ظپظٹ ظ‚ظ„ط¨ ظ…ط±ط²ع¤ط©طŒ ط¹ظ„ظ‰ ط¨ظڈط¹ط¯ 300 ظ…طھط± ظ…ظ† ط´ط§ط·ط¦ ظ†ط§ط¨ظ„. ظˆظ‡ظٹ ط«ظ…ط±ط© ط±ط¤ظٹط© ظ…ط¹ظ…ط§ط±ظٹط© ط·ظ…ظˆط­ط© طھط¬ظ…ط¹ ط¨ظٹظ† ط§ظ„ط­ط¯ط§ط«ط© ظˆط§ظ„ط£ظ†ط§ظ‚ط© ظˆط§ظ„ظ‡ط¯ظˆط،.',
    aboutBody2: 'ظˆط§ط¬ظ‡ط§طھظ‡ط§ ط§ظ„ط¨ظٹط¶ط§ط، ط§ظ„ظ†ط§طµط¹ط©طŒ ط´ط±ظپط§طھظ‡ط§ ط§ظ„ظپط³ظٹط­ط©طŒ ظˆظپط¶ط§ط،ط§طھظ‡ط§ ط§ظ„ظ…ط´طھط±ظƒط© ط§ظ„ط£ظ†ظٹظ‚ط© طھط¬ط¹ظ„ ظ…ظ†ظ‡ط§ ظ…ط³ظƒظ†ط§ظ‹ ط§ط³طھط«ظ†ط§ط¦ظٹط§ظ‹ ط°ط§ طھطµظ…ظٹظ… ط¹طµط±ظٹ.',
    aboutFeatures: ['ظ‡ظ†ط¯ط³ط© ظ…ط¹ظ…ط§ط±ظٹط© ط±ط§ظ‚ظٹط© ظˆظ…ط¹ط§طµط±ط©', 'طھط´ط·ظٹط¨ط§طھ ظ…ظ† ط§ظ„ط¯ط±ط¬ط© ط§ظ„ط£ظˆظ„ظ‰', 'ظ…ط³ط§ط­ط§طھ ط®ط¶ط±ط§ط، ظ…ظ†ط³ظ‚ط©', 'ط¹ظ„ظ‰ ط¨ظڈط¹ط¯ 300ظ… ظ…ظ† ط§ظ„ط¨ط­ط±'],
    badgeLabel: 'طھط³ظ„ظٹظ…', floatTitle: 'ظ‡ظ†ط¯ط³ط© ظ…طھظ…ظٹط²ط©', floatSub: 'طھطµظ…ظٹظ… ط¹طµط±ظٹ ط±ط§ظ‚ظچ',
    aboutCtaText: 'ط§ط³طھظƒط´ط§ظپ 360آ°',
    amenTag: 'ط§ظ„ظ…ظ…ظٹط²ط§طھ',
    amenTitle: 'ظƒظ„ ط§ظ„ظپط®ط§ظ…ط©<br /><em>ظپظٹ ظ…ظƒط§ظ† ظˆط§ط­ط¯</em>',
    amen1: 'ط§ظ„ظ…ط³ط§ط¨ط­',    amen1d: 'ط­ظˆط¶ط§ظ† ط¨ظ„ظˆط±ظٹط§ظ† ظ…ط¶ط§ط،ط§ظ† ظ„ط­ط¸ط§طھ ط§ط³طھط±ط®ط§ط، ظ„ط§ ظ…ط«ظٹظ„ ظ„ظ‡ط§ ظپظٹ ظƒظ„ ظˆظ‚طھ.',
    amen2: 'ط£ظ…ظ† 24/24',  amen2d: 'ط¯ط®ظˆظ„ ط¢ظ…ظ† ظˆظ…ط±ط§ظ‚ط¨ط© ط¯ط§ط¦ظ…ط© ظˆظ†ط¸ط§ظ… طھط­ظƒظ… ظ…طھظ‚ط¯ظ… ظ„ط±ط§ط­ط© ط¨ط§ظ„ظƒظ….',
    amen3: 'ظ…ظˆظ‚ظپ ط®ط§طµ',  amen3d: 'ط£ظ…ط§ظƒظ† ط±ظƒظ† ظ…ط؛ط·ط§ط© ظˆط¢ظ…ظ†ط© ط­طµط±ط§ظ‹ ظ„ط³ظƒط§ظ† ط§ظ„ط¥ظ‚ط§ظ…ط©.',
    amen4: 'ظ…ط³ط§ط­ط§طھ ط®ط¶ط±ط§ط،', amen4d: 'ط­ط¯ط§ط¦ظ‚ ظ…ظ†ط³ظ‚ط© ظˆظ†ط¨ط§طھط§طھ ظ…طھظˆط³ط·ظٹط© ظ„ط£ط¬ظˆط§ط، ظ‡ط§ط¯ط¦ط© ظˆظ…ظ†ط¹ط´ط©.',
    amen5: 'طھط´ط·ظٹط¨ط§طھ ظپط§ط®ط±ط©', amen5d: 'ظ…ظˆط§ط¯ ظ†ط¨ظٹظ„ط©طŒ ط¨ظ„ط§ط· ظƒط¨ظٹط± ط§ظ„ط­ط¬ظ…طŒ ظ†ط¬ط§ط±ط© ط£ظ„ظ…ظ†ظٹظˆظ… â€” ط®ط¯ظ…ط§طھ ط§ط³طھط«ظ†ط§ط¦ظٹط©.',
    amen6: 'ظƒظˆظ†ط³ظٹط±ط¬',   amen6d: 'ط®ط¯ظ…ط© ظ…طھط§ط­ط© ظ„ظ„ط±ط¯ ط¹ظ„ظ‰ ط·ظ„ط¨ط§طھظƒظ… ط¨ظƒظ„ طھظƒطھظ… ظˆظ…ظ‡ظ†ظٹط©.',
    tourTag: 'ط¬ظˆظ„ط© ط§ظپطھط±ط§ط¶ظٹط©',
    tourTitle: 'ط§ط³طھظƒط´ظپ ط§ظ„ط¥ظ‚ط§ظ…ط©<br /><em>ط¨ط²ط§ظˆظٹط© 360آ°</em>',
    tourSub: 'طھط¬ظˆظ‘ظ„ ط¨ط­ط±ظٹط© ظپظٹ ظپط¶ط§ط،ط§طھظ†ط§. ط§ظ†ظ‚ط± ظˆط§ط³ط­ط¨ ظ„ط§ط³طھظƒط´ط§ظپ ظƒظ„ ط²ط§ظˆظٹط©.',
    tabInteriorText: 'ط§ظ„ط´ظ‚ط©', tabPoolText: 'ط§ظ„ظ…ط³ط¨ط­ ظˆط§ظ„ط­ط¯ط§ط¦ظ‚',
    hintText: 'ط§ظ†ظ‚ط± ظˆط§ط³ط­ط¨ ظ„ظ„ط§ط³طھظƒط´ط§ظپ',
    galTag: 'ظ…ط¹ط±ط¶ ط§ظ„طµظˆط±',
    galTitle: 'ط§ظ„ط¥ظ‚ط§ظ…ط©<br /><em>ط¨ط§ظ„طµظˆط±</em>',
    galCap1: 'ط§ظ„ظ…ظ†ط¸ط± ط§ظ„ط®ط§ط±ط¬ظٹ', galCap2: 'ط§ظ„ط´ظ‚ظ‚', galCap3: 'ط§ظ„ظ…ط³ط¨ط­ ظ„ظٹظ„ط§ظ‹', galCap4: 'ظ…ظ†ط¸ط± ط¬ظˆظٹ',
    appTag: 'ط§ظ„طھط·ط¨ظٹظ‚ ط§ظ„ط±ط³ظ…ظٹ',
    appTitle: 'ط£ط¯ظگط± ط¥ظ‚ط§ظ…طھظƒ<br /><em>ظ…ظ† ظ‡ط§طھظپظƒ</em>',
    appBody: 'ط§ط­ط¬ط² ط§ظ„ظ…ط³ط¨ط­طŒ طھظˆط§طµظ„ ظ…ط¹ ط§ظ„ظƒظˆظ†ط³ظٹط±ط¬طŒ ط§ط·ظ‘ظ„ط¹ ط¹ظ„ظ‰ ظ…ط¹ظ„ظˆظ…ط§طھ ط§ظ„ط¥ظ‚ط§ظ…ط© ظˆطھظ„ظ‚ظژظ‘ ط§ظ„ط¥ط´ط¹ط§ط±ط§طھ ط§ظ„ظ…ظ‡ظ…ط© â€” ظƒظ„ ط°ظ„ظƒ ظ…ظ† طھط·ط¨ظٹظ‚ ظ„ظˆ ط®ط§ظƒط§ط±ط§ظ†ط¯ط§ ط§ظ„ط±ط³ظ…ظٹ.',
    appFeatures: ['ط§ظ„طھط­ظƒظ… ظپظٹ ط§ظ„ط¯ط®ظˆظ„', 'ط­ط¬ط² ط§ظ„ظ…ط³ط¨ط­ ظˆط§ظ„ظ…ط³ط§ط­ط§طھ ط§ظ„ظ…ط´طھط±ظƒط©', 'ط¯ط±ط¯ط´ط© ظ…ط¨ط§ط´ط±ط© ظ…ط¹ ط§ظ„ظƒظˆظ†ط³ظٹط±ط¬', 'ط¥ط´ط¹ط§ط±ط§طھ ظˆط¥ط¹ظ„ط§ظ†ط§طھ ط§ظ„ط¥ظ‚ط§ظ…ط©'],
    appStoreSub: 'طھظ†ط²ظٹظ„ ط¹ظ„ظ‰', playStoreSub: 'ظ…طھط§ط­ ط¹ظ„ظ‰',
    locTag: 'ط§ظ„ظ…ظˆظ‚ط¹',
    locTitle: 'ظ…ط±ط²ع¤ط©طŒ ظ†ط§ط¨ظ„<br /><em>300ظ… ظ…ظ† ط§ظ„ط¨ط­ط±</em>',
    locBadge1Val: '300ظ…',  locBadge1Lbl: 'ظ…ظ† ط§ظ„ط´ط§ط·ط¦',
    locBadge2Val: 'ظ†ط§ط¨ظ„',  locBadge2Lbl: 'ظˆط³ط· ط§ظ„ظ…ط¯ظٹظ†ط©',
    locBadge3Val: 'ط£ظ†ظپط¶ط©', locBadge3Lbl: 'ظ…ط·ط§ط± ظ‚ط±ظٹط¨',
    mapPinTitle: 'ط¥ظ‚ط§ظ…ط© ظ„ظˆ ط®ط§ظƒط§ط±ط§ظ†ط¯ط§',
    mapPinAddr: 'ظ…ط±ط²ع¤ط©طŒ ظ†ط§ط¨ظ„طŒ طھظˆظ†ط³ آ· 300ظ… ظ…ظ† ط§ظ„ط´ط§ط·ط¦',
    conTag: 'طھظˆط§طµظ„ ظ…ط¹ظ†ط§',
    conTitle: 'ط±ط§ط³ظ„ظˆظ†ط§طŒ<br /><em>طھظ‚ط§ط¨ظ„ظˆظ†ط§</em>',
    conSub: 'ظپط±ظٹظ‚ظ†ط§ ط±ظ‡ظ† ط¥ط´ط§ط±طھظƒظ… ظ„ظ…ط±ط§ظپظ‚طھظƒظ… ظپظٹ ظ…ط´ط±ظˆط¹ ط­ظٹط§طھظƒظ… ط¯ط§ط®ظ„ ط¥ظ‚ط§ظ…ط© ظ„ظˆ ط®ط§ظƒط§ط±ط§ظ†ط¯ط§.',
    conLabel1: 'ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ', conLabel2: 'ط§ظ„ظ‡ط§طھظپ', conLabel3: 'ط§ظ„ط¹ظ†ظˆط§ظ†', conLabel4: 'ط§ظ„ظˆطµظˆظ„ ظ„ظ„ط´ط§ط·ط¦',
    conAddr: 'ظ…ط±ط²ع¤ط©طŒ ظ†ط§ط¨ظ„طŒ طھظˆظ†ط³', conBeach: 'ط¹ظ„ظ‰ ط¨ظڈط¹ط¯ 300 ظ…طھط± ظ…ظ† ط§ظ„ط¨ط­ط±',
    fnameLabel: 'ط§ظ„ط§ط³ظ… ط§ظ„ط£ظˆظ„', lnameLabel: 'ط§ظ„ظ„ظ‚ط¨', emailLabel: 'ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ', phoneLabel: 'ط§ظ„ظ‡ط§طھظپ', msgLabel: 'ط§ظ„ط±ط³ط§ظ„ط©',
    fnamePh: 'ط§ط³ظ…ظƒ ط§ظ„ط£ظˆظ„', lnamePh: 'ظ„ظ‚ط¨ظƒ', emailPh: 'ط¨ط±ظٹط¯ظƒ@ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ', phonePh: '+216 ...', msgPh: 'ط±ط³ط§ظ„طھظƒ...',
    formSubmit: 'ط¥ط±ط³ط§ظ„ ط§ظ„ط±ط³ط§ظ„ط©',
    successMsg: 'طھظ… ط¥ط±ط³ط§ظ„ ط±ط³ط§ظ„طھظƒ ط¨ظ†ط¬ط§ط­. ط³ظ†طھظˆط§طµظ„ ظ…ط¹ظƒظ… ظ‚ط±ظٹط¨ط§ظ‹ ط¬ط¯ط§ظ‹.',
    footerTagline: 'ط§ظ„طھظ…ظٹط² ظپظٹ ظƒظ„ طھظپطµظٹظ„.',
    footerCopy: 'آ© 2024 - 2026 ط¥ظ‚ط§ظ…ط© ظ„ظˆ ط®ط§ظƒط§ط±ط§ظ†ط¯ط§. ط¬ظ…ظٹط¹ ط§ظ„ط­ظ‚ظˆظ‚ ظ…ط­ظپظˆط¸ط©.',
    navAbout: 'ط¹ظ† ط§ظ„ظ…ط´ط±ظˆط¹', navAmen: 'ط§ظ„ظ…ظ…ظٹط²ط§طھ', navTour: 'ط¬ظˆظ„ط© 360آ°', navGal: 'ظ…ط¹ط±ط¶ ط§ظ„طµظˆط±', navApp: 'ط§ظ„طھط·ط¨ظٹظ‚', navLoc: 'ط§ظ„ظ…ظˆظ‚ط¹', navCon: 'طھظˆط§طµظ„',
    ctaNav: 'طھظˆط§طµظ„ ظ…ط¹ظ†ط§',
    heroCta1: 'ط§ظƒطھط´ظپ', heroCta2: 'ط¬ظˆظ„ط© 360آ°',
  },

  /* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ ENGLISH â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
  en: {
    heroEyebrow: 'Mrezgua آ· Nabeul آ· Tunisia',
    heroTagline: 'The art of living at its finest',
    scrollText: 'Scroll',
    stat1: 'Blocks', stat2: 'Pools', stat3: 'from the Beach', stat4: 'Concierge',
    aboutTag: 'About',
    aboutTitle: 'A Lifestyle<br /><em>Beyond Compare</em>',
    aboutBody: 'Nestled in the heart of Mrezgua, just 300 metres from the beach in Nabeul, Rأ©sidence Le Jacaranda is the product of an ambitious architectural vision: a living space that blends modernity, elegance and serenity.',
    aboutBody2: 'Its pristine white faأ§ades, generous balconies and beautifully appointed common areas make this residence a contemporary sanctuary of unmatched style.',
    aboutFeatures: ['High-end contemporary architecture', 'Premium quality finishes', 'Landscaped green spaces', '300m from the sea'],
    badgeLabel: 'Delivery', floatTitle: 'Premium Architecture', floatSub: 'Prestigious contemporary design',
    aboutCtaText: 'Explore in 360آ°',
    amenTag: 'Amenities',
    amenTitle: 'All the Luxury<br /><em>In One Place</em>',
    amen1: 'Swimming Pools', amen1d: 'Two illuminated crystal-clear pools for incomparable moments of relaxation at any hour.',
    amen2: '24/7 Security',  amen2d: 'Secure access, permanent surveillance and an advanced control system for your peace of mind.',
    amen3: 'Private Parking', amen3d: 'Covered, secure parking spaces exclusively for residents.',
    amen4: 'Green Spaces',   amen4d: 'Landscaped gardens and Mediterranean vegetation for a gentle, restorative atmosphere.',
    amen5: 'Premium Finishes', amen5d: 'Noble materials, large-format tiling, aluminium joinery â€” exceptional standards throughout.',
    amen6: 'Concierge',      amen6d: 'Concierge service available to fulfil all your requests with the utmost discretion.',
    tourTag: 'Virtual Tour',
    tourTitle: 'Explore the Residence<br /><em>in 360آ°</em>',
    tourSub: 'Navigate freely through our spaces. Click and drag to explore every corner.',
    tabInteriorText: 'Apartment', tabPoolText: 'Pool & Gardens',
    hintText: 'Click and drag to explore',
    galTag: 'Gallery',
    galTitle: 'The Residence<br /><em>in Pictures</em>',
    galCap1: 'Exterior View', galCap2: 'Apartments', galCap3: 'Pool at Night', galCap4: 'Aerial View',
    appTag: 'Mobile App',
    appTitle: 'Manage your residence<br /><em>from your pocket</em>',
    appBody: 'Book the pool, contact concierge, access residence information and receive important notifications â€” all from the official Le Jacaranda app.',
    appFeatures: ['Building access & entry control', 'Pool & shared space booking', 'Direct chat with concierge', 'Residence notifications & announcements'],
    appStoreSub: 'Download on the', playStoreSub: 'Get it on',
    locTag: 'Location',
    locTitle: 'Mrezgua, Nabeul<br /><em>300m from the Sea</em>',
    locBadge1Val: '300m',   locBadge1Lbl: 'from the beach',
    locBadge2Val: 'Nabeul', locBadge2Lbl: 'City centre',
    locBadge3Val: 'Enfidha', locBadge3Lbl: 'Airport nearby',
    mapPinTitle: 'Rأ©sidence Le Jacaranda',
    mapPinAddr: 'Mrezgua, Nabeul, Tunisia آ· 300m from the beach',
    conTag: 'Contact',
    conTitle: 'Write to Us,<br /><em>Let\'s Meet</em>',
    conSub: 'Our team is at your disposal to guide you through your journey at Rأ©sidence Le Jacaranda.',
    conLabel1: 'Email', conLabel2: 'Phone', conLabel3: 'Address', conLabel4: 'Beach Access',
    conAddr: 'Mrezgua, Nabeul, Tunisia', conBeach: '300 metres from the sea',
    fnameLabel: 'First Name', lnameLabel: 'Last Name', emailLabel: 'Email', phoneLabel: 'Phone', msgLabel: 'Message',
    fnamePh: 'Your first name', lnamePh: 'Your last name', emailPh: 'your@email.com', phonePh: '+216 ...', msgPh: 'Your message...',
    formSubmit: 'Send Message',
    successMsg: 'Message sent successfully. We will contact you very soon.',
    footerTagline: 'Excellence in every detail.',
    footerCopy: 'آ© 2024 - 2026 Rأ©sidence Le Jacaranda. All rights reserved.',
    navAbout: 'About', navAmen: 'Amenities', navTypo: 'Apartments', navTour: '360° Tour', navGal: 'Gallery', navCalc: 'Simulator', navQuartier: 'Neighborhood', navApp: 'Resident App', navFaq: 'FAQ', navLoc: 'Location', navCon: 'Contact',
    typoTag: 'Floor Plans & Residences', typoTitle: 'Living Spaces<br /><em>Designed for Excellence</em>',
    calcTag: 'Investment & Financing', calcTitle: 'Simulate Your Project<br /><em>& Rental Yield</em>',
    quartierTag: 'Mediterranean Lifestyle', quartierTitle: 'Mrezgua & Its Wonders<br /><em>Between Sea, Culture & Leisure</em>',
    faqTag: 'Frequently Asked Questions', faqTitle: 'Everything You Need<br /><em>To Know About The Residence</em>',
    ctaNav: 'Contact Us',
    heroCta1: 'Discover', heroCta2: '360° Tour',
  },

  /* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ ESPAأ‘OL â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
  es: {
    heroEyebrow: 'Mrezgua آ· Nabeul آ· Tأ؛nez',
    heroTagline: 'El arte de vivir en su mأ،s bella expresiأ³n',
    scrollText: 'Desplazar',
    stat1: 'Bloques', stat2: 'Piscinas', stat3: 'de la Playa', stat4: 'Conserjerأ­a',
    aboutTag: 'Acerca de',
    aboutTitle: 'Un Arte de Vivir<br /><em>Excepcional</em>',
    aboutBody: 'Ubicada en el corazأ³n de Mrezgua, a tan solo 300 metros de la playa de Nabeul, la Residencia Le Jacaranda es fruto de una ambiciosa visiأ³n arquitectأ³nica: un espacio de vida que combina modernidad, elegancia y serenidad.',
    aboutBody2: 'Sus fachadas de blanco inmaculado, sus amplios balcones y sus zonas comunes cuidadosamente diseأ±adas hacen de esta residencia un remanso de paz con diseأ±o contemporأ،neo.',
    aboutFeatures: ['Arquitectura contemporأ،nea de alta gama', 'Acabados de primera calidad', 'Espacios verdes ajardinados', 'A 300m del mar'],
    badgeLabel: 'Entrega', floatTitle: 'Arquitectura Premium', floatSub: 'Diseأ±o contemporأ،neo de prestigio',
    aboutCtaText: 'Explorar en 360آ°',
    amenTag: 'Servicios',
    amenTitle: 'Todo el Lujo<br /><em>en un Solo Lugar</em>',
    amen1: 'Piscinas',       amen1d: 'Dos piscinas cristalinas iluminadas para momentos de relax incomparables a cualquier hora.',
    amen2: 'Seguridad 24h',  amen2d: 'Acceso seguro, vigilancia permanente y sistema de control avanzado para su tranquilidad.',
    amen3: 'Parking Privado', amen3d: 'Plazas de aparcamiento cubiertas y seguras de uso exclusivo para los residentes.',
    amen4: 'Zonas Verdes',   amen4d: 'Jardines ajardinados y vegetaciأ³n mediterrأ،nea para un ambiente tranquilo y revitalizante.',
    amen5: 'Acabados Premium', amen5d: 'Materiales nobles, pavimento de gran formato, carpinterأ­a de aluminio â€” prestaciones de excepciأ³n.',
    amen6: 'Conserjerأ­a',    amen6d: 'Servicio de conserjerأ­a disponible para atender todas sus solicitudes con la mayor discreciأ³n.',
    tourTag: 'Visita Virtual',
    tourTitle: 'Explore la Residencia<br /><em>en 360آ°</em>',
    tourSub: 'Navegue libremente por nuestros espacios. Haga clic y arrastre para explorar cada rincأ³n.',
    tabInteriorText: 'Apartamento', tabPoolText: 'Piscina y Jardines',
    hintText: 'Haga clic y arrastre para explorar',
    galTag: 'Galerأ­a',
    galTitle: 'La Residencia<br /><em>en Imأ،genes</em>',
    galCap1: 'Vista Exterior', galCap2: 'Apartamentos', galCap3: 'Piscina de Noche', galCap4: 'Vista Aأ©rea',
    appTag: 'Aplicaciأ³n Mأ³vil',
    appTitle: 'Gestione su residencia<br /><em>desde su bolsillo</em>',
    appBody: 'Reserve la piscina, contacte a la conserjerأ­a, acceda a la informaciأ³n de la residencia y reciba notificaciones importantes â€” todo desde la app oficial Le Jacaranda.',
    appFeatures: ['Acceso y control de entrada', 'Reserva piscina y zonas comunes', 'Chat directo con conserjerأ­a', 'Notificaciones y anuncios de la residencia'],
    appStoreSub: 'Descargar en', playStoreSub: 'Disponible en',
    locTag: 'Localizaciأ³n',
    locTitle: 'Mrezgua, Nabeul<br /><em>A 300m del Mar</em>',
    locBadge1Val: '300m',   locBadge1Lbl: 'de la playa',
    locBadge2Val: 'Nabeul', locBadge2Lbl: 'Centro ciudad',
    locBadge3Val: 'Enfidha', locBadge3Lbl: 'Aeropuerto cercano',
    mapPinTitle: 'Rأ©sidence Le Jacaranda',
    mapPinAddr: 'Mrezgua, Nabeul, Tأ؛nez آ· 300m de la playa',
    conTag: 'Contacto',
    conTitle: 'Escrأ­banos,<br /><em>Reunأ،monos</em>',
    conSub: 'Nuestro equipo estأ، a su disposiciأ³n para acompaأ±arle en su proyecto de vida en la Residencia Le Jacaranda.',
    conLabel1: 'Correo', conLabel2: 'Telأ©fono', conLabel3: 'Direcciأ³n', conLabel4: 'Acceso Playa',
    conAddr: 'Mrezgua, Nabeul, Tأ؛nez', conBeach: 'A 300 metros del mar',
    fnameLabel: 'Nombre', lnameLabel: 'Apellido', emailLabel: 'Correo', phoneLabel: 'Telأ©fono', msgLabel: 'Mensaje',
    fnamePh: 'Su nombre', lnamePh: 'Su apellido', emailPh: 'su@correo.com', phonePh: '+216 ...', msgPh: 'Su mensaje...',
    formSubmit: 'Enviar Mensaje',
    successMsg: 'Mensaje enviado con أ©xito. Nos pondremos en contacto muy pronto.',
    footerTagline: 'La excelencia en cada detalle.',
    footerCopy: 'آ© 2024 - 2026 Rأ©sidence Le Jacaranda. Todos los derechos reservados.',
    navAbout: 'Acerca de', navAmen: 'Servicios', navTour: 'Tour 360آ°', navGal: 'Galerأ­a', navApp: 'Aplicaciأ³n', navLoc: 'Localizaciأ³n', navCon: 'Contacto',
    ctaNav: 'Contأ،ctenos',
    heroCta1: 'Descubrir', heroCta2: 'Tour 360آ°',
  },

  /* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ ITALIANO â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
  it: {
    heroEyebrow: 'Mrezgua آ· Nabeul آ· Tunisia',
    heroTagline: "L'arte di vivere nella sua piأ¹ bella espressione",
    scrollText: 'Scorri',
    stat1: 'Edifici', stat2: 'Piscine', stat3: 'dalla Spiaggia', stat4: 'Portineria',
    aboutTag: 'Chi Siamo',
    aboutTitle: 'Un\'Arte di Vivere<br /><em>Eccezionale</em>',
    aboutBody: "Immersa nel cuore di Mrezgua, a 300 metri dalla spiaggia di Nabeul, la Rأ©sidence Le Jacaranda nasce da una visione architettonica ambiziosa: offrire uno spazio abitativo che unisce modernitأ , eleganza e serenitأ .",
    aboutBody2: 'Le sue facciate bianche immacolate, i suoi ampi balconi e le aree comuni curate nei minimi dettagli fanno di questo residence un\'oasi di pace dal design contemporaneo.',
    aboutFeatures: ['Architettura contemporanea di alto livello', 'Finiture di prima qualitأ ', 'Spazi verdi e giardini curati', 'A 300m dal mare'],
    badgeLabel: 'Consegna', floatTitle: 'Architettura Premium', floatSub: 'Design contemporaneo di prestigio',
    aboutCtaText: 'Esplora a 360آ°',
    amenTag: 'Servizi',
    amenTitle: 'Tutto il Lusso<br /><em>in un Solo Luogo</em>',
    amen1: 'Piscine',          amen1d: 'Due piscine cristalline illuminate per momenti di relax senza pari a qualsiasi ora.',
    amen2: 'Sicurezza 24h/24',  amen2d: 'Accesso protetto, videosorveglianza continua e sistema di controllo avanzato per la massima tranquillitأ .',
    amen3: 'Parcheggio Privato', amen3d: 'Posti auto coperti e custoditi ad uso esclusivo dei residenti.',
    amen4: 'Aree Verdi',       amen4d: 'Giardini paesaggistici e flora mediterranea per un\'atmosfera distensiva e rigenerante.',
    amen5: 'Finiture di Pregio', amen5d: 'Materiali nobili, pavimentazione di grande formato, infissi in alluminio â€” standard d\'eccellenza.',
    amen6: 'Concierge',        amen6d: 'Servizio di portineria dedicato per soddisfare ogni richiesta con la massima discrezione.',
    tourTag: 'Visita Virtuale',
    tourTitle: 'Esplora la Residenza<br /><em>a 360آ°</em>',
    tourSub: 'Naviga liberamente negli spazi. Clicca e trascina per esplorare ogni dettaglio.',
    tabInteriorText: 'Appartamento', tabPoolText: 'Piscina & Giardini',
    hintText: 'Clicca e trascina per esplorare',
    galTag: 'Galleria',
    galTitle: 'La Residenza<br /><em>in Immagini</em>',
    galCap1: 'Vista Esterna', galCap2: 'Appartamenti', galCap3: 'Piscina Notturna', galCap4: 'Vista Aerea',
    appTag: 'App Mobile',
    appTitle: 'Gestisci la residenza<br /><em>dal tuo smartphone</em>',
    appBody: "Prenota la piscina, contatta il custode, accedi a tutte le informazioni e ricevi le notifiche importanti â€” tutto dall'app ufficiale Le Jacaranda.",
    appFeatures: ["Controllo accessi e varchi", 'Prenotazione piscina e aree comuni', 'Chat diretta con la portineria', 'Notifiche e comunicazioni condominiali'],
    appStoreSub: 'Scarica su', playStoreSub: 'Disponibile su',
    locTag: 'Posizione',
    locTitle: 'Mrezgua, Nabeul<br /><em>A 300m dal Mare</em>',
    locBadge1Val: '300m',   locBadge1Lbl: 'dalla spiaggia',
    locBadge2Val: 'Nabeul', locBadge2Lbl: 'Centro cittأ ',
    locBadge3Val: 'Enfidha', locBadge3Lbl: 'Aeroporto vicino',
    mapPinTitle: 'Rأ©sidence Le Jacaranda',
    mapPinAddr: 'Mrezgua, Nabeul, Tunisia آ· 300m dalla spiaggia',
    conTag: 'Contatti',
    conTitle: 'Scrivici,<br /><em>Incontriamoci</em>',
    conSub: 'Il nostro team أ¨ a tua completa disposizione per accompagnarti nel tuo progetto di vita alla Rأ©sidence Le Jacaranda.',
    conLabel1: 'Email', conLabel2: 'Telefono', conLabel3: 'Indirizzo', conLabel4: 'Accesso Spiaggia',
    conAddr: 'Mrezgua, Nabeul, Tunisia', conBeach: 'A 300 metri dal mare',
    fnameLabel: 'Nome', lnameLabel: 'Cognome', emailLabel: 'Email', phoneLabel: 'Telefono', msgLabel: 'Messaggio',
    fnamePh: 'Il tuo nome', lnamePh: 'Il tuo cognome', emailPh: 'tua@email.com', phonePh: '+216 ...', msgPh: 'Il tuo messaggio...',
    formSubmit: 'Invia il Messaggio',
    successMsg: 'Messaggio inviato con successo. Ti ricontatteremo a breve.',
    footerTagline: "L'eccellenza in ogni dettaglio.",
    footerCopy: 'آ© 2024 - 2026 Rأ©sidence Le Jacaranda. Tutti i diritti riservati.',
    navAbout: 'Chi Siamo', navAmen: 'Servizi', navTour: 'Visita 360آ°', navGal: 'Galleria', navApp: 'App Residenti', navLoc: 'Posizione', navCon: 'Contatti',
    ctaNav: 'Contattaci',
    heroCta1: 'Scopri', heroCta2: 'Visita 360آ°',
  },

  /* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ DEUTSCH â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
  de: {
    heroEyebrow: 'Mrezgua آ· Nabeul آ· Tunesien',
    heroTagline: 'Die Kunst des Wohnens in schأ¶nster Vollendung',
    scrollText: 'Scrollen',
    stat1: 'Gebأ¤ude', stat2: 'Pools', stat3: 'vom Strand', stat4: 'Concierge',
    aboutTag: 'أœber Uns',
    aboutTitle: 'Ein Auأںergewأ¶hnliches<br /><em>Lebensgefأ¼hl</em>',
    aboutBody: 'Im Herzen von Mrezgua, nur 300 Meter vom Strand von Nabeul entfernt, ist die Rأ©sidence Le Jacaranda das Ergebnis einer anspruchsvollen architektonischen Vision: Modernitأ¤t, Eleganz und Ruhe harmonisch zu vereinen.',
    aboutBody2: 'Strahlend weiأںe Fassaden, groأںzأ¼gige Balkone und liebevoll gestaltete Gemeinschaftsbereiche machen diese Residenz zu einer Oase im zeitgenأ¶ssischen Design.',
    aboutFeatures: ['Hochwertige zeitgenأ¶ssische Architektur', 'Erstklassige Ausstattungsqualitأ¤t', 'Mediterran gestaltete Grأ¼nflأ¤chen', 'Nur 300 m vom Meer entfernt'],
    badgeLabel: 'أœbergabe', floatTitle: 'Premium-Architektur', floatSub: 'Prestigetrأ¤chtiges Design',
    aboutCtaText: '360آ° Rundgang',
    amenTag: 'Ausstattung',
    amenTitle: 'Exklusiver Luxus<br /><em>an einem Ort</em>',
    amen1: 'Schwimmbأ¤der',   amen1d: 'Zwei beleuchtete, kristallklare Pools fأ¼r unvergleichliche Entspannungsmomente zu jeder Tageszeit.',
    amen2: '24/7 Sicherheit', amen2d: 'Gesicherter Zugang, permanente أœberwachung und modernste Kontrollsysteme fأ¼r Ihre vollkommene Ruhe.',
    amen3: 'Privatparkplatz', amen3d: 'أœberdachte und gesicherte Stellplأ¤tze exklusiv fأ¼r die Bewohner der Residenz.',
    amen4: 'Grأ¼nanlagen',    amen4d: 'Angelegte Gأ¤rten und mediterrane Bepflanzung fأ¼r eine wohltuende, erholsame Atmosphأ¤re.',
    amen5: 'Edle Materialien', amen5d: 'Hochwertige Baustoffe, groأںformatige Fliesen, Aluminium-Fensterelemente â€” auأںergewأ¶hnliche Standards.',
    amen6: 'Concierge-Service', amen6d: 'Verlأ¤sslicher Service zur diskreten Erfأ¼llung all Ihrer Anliegen.',
    tourTag: 'Virtueller Rundgang',
    tourTitle: 'Entdecken Sie die Residenz<br /><em>in 360آ°</em>',
    tourSub: 'Bewegen Sie sich frei durch unsere Rأ¤umlichkeiten. Klicken und ziehen Sie, um jede Ecke zu erkunden.',
    tabInteriorText: 'Wohnung', tabPoolText: 'Pool & Gأ¤rten',
    hintText: 'Klicken und ziehen zum Umschauen',
    galTag: 'Galerie',
    galTitle: 'Die Residenz<br /><em>in Bildern</em>',
    galCap1: 'Auأںenansicht', galCap2: 'Wohnungen', galCap3: 'Pool bei Nacht', galCap4: 'Luftaufnahme',
    appTag: 'Mobile App',
    appTitle: 'Verwalten Sie Ihr Zuhause<br /><em>direkt per Smartphone</em>',
    appBody: 'Pool reservieren, Concierge kontaktieren, wichtige Hausmitteilungen und Benachrichtigungen empfangen â€” alles in der offiziellen Le Jacaranda App.',
    appFeatures: ['Zugangskontrolle & Eingangstأ¼r', 'Reservierung von Pool & Gemeinschaftsbereichen', 'Direktkontakt mit der Hausverwaltung', 'Hausmitteilungen in Echtzeit'],
    appStoreSub: 'Laden im', playStoreSub: 'Jetzt bei',
    locTag: 'Lage',
    locTitle: 'Mrezgua, Nabeul<br /><em>300m vom Meer entfernt</em>',
    locBadge1Val: '300m',   locBadge1Lbl: 'vom Strand',
    locBadge2Val: 'Nabeul', locBadge2Lbl: 'Stadtzentrum',
    locBadge3Val: 'Enfidha', locBadge3Lbl: 'Flughafen in der Nأ¤he',
    mapPinTitle: 'Rأ©sidence Le Jacaranda',
    mapPinAddr: 'Mrezgua, Nabeul, Tunesien آ· 300m vom Strand',
    conTag: 'Kontakt',
    conTitle: 'Schreiben Sie uns,<br /><em>Lernen wir uns kennen</em>',
    conSub: 'Unser Team steht Ihnen gerne zur Seite, um Ihr Wohnprojekt in der Rأ©sidence Le Jacaranda zu verwirklichen.',
    conLabel1: 'E-Mail', conLabel2: 'Telefon', conLabel3: 'Adresse', conLabel4: 'Strandzugang',
    conAddr: 'Mrezgua, Nabeul, Tunesien', conBeach: '300 Meter vom Meer entfernt',
    fnameLabel: 'Vorname', lnameLabel: 'Nachname', emailLabel: 'E-Mail', phoneLabel: 'Telefon', msgLabel: 'Nachricht',
    fnamePh: 'Ihr Vorname', lnamePh: 'Ihr Nachname', emailPh: 'ihre@email.de', phonePh: '+216 ...', msgPh: 'Ihre Nachricht...',
    formSubmit: 'Nachricht Senden',
    successMsg: 'Nachricht erfolgreich gesendet. Wir werden uns schnellstmأ¶glich bei Ihnen melden.',
    footerTagline: 'Exzellenz bis ins kleinste Detail.',
    footerCopy: 'آ© 2024 - 2026 Rأ©sidence Le Jacaranda. Alle Rechte vorbehalten.',
    navAbout: 'أœber Uns', navAmen: 'Ausstattung', navTour: '360آ° Rundgang', navGal: 'Galerie', navApp: 'Bewohner-App', navLoc: 'Lage', navCon: 'Kontakt',
    ctaNav: 'Kontaktieren Sie Uns',
    heroCta1: 'Entdecken', heroCta2: '360آ° Rundgang',
  },
};

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   APPLY TRANSLATION
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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
    langCurrentEl.querySelector('.lang-flag').textContent = lm.flag;
    langCurrentEl.querySelector('.lang-code').textContent = lm.code;
  }
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* â”€â”€ simple text IDs â”€â”€ */
  const textIds = [
    'heroEyebrowText','heroTagline','scrollText',
    'stat1','stat2','stat3','stat4',
    'badgeLabel','floatTitle','floatSub','aboutCtaText',
    'amen1','amen1d','amen2','amen2d','amen3','amen3d',
    'amen4','amen4d','amen5','amen5d','amen6','amen6d',
    'tourSub','tabInteriorText','tabPoolText','hintText',
    'galCap1','galCap2','galCap3','galCap4',
    'appBody','appStoreSub','playStoreSub',
    'locBadge1Val','locBadge1Lbl','locBadge2Val','locBadge2Lbl','locBadge3Val','locBadge3Lbl',
    'mapPinTitle','mapPinAddr',
    'conSub','conLabel1','conLabel2','conLabel3','conLabel4','conAddr','conBeach',
    'fnameLabel','lnameLabel','emailLabel','phoneLabel','msgLabel',
    'formSubmit','successMsg','footerTagline','footerCopy',
    'aboutTag','amenTag','typoTag','tourTag','galTag','calcTag','quartierTag','appTag','locTag','faqTag','conTag',
    'ctaNav','heroCta1','heroCta2',
    'navAbout','navAmen','navTypo','navTour','navGal','navCalc','navQuartier','navApp','navFaq','navCon'
  ];
  textIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id] !== undefined) el.textContent = t[id];
  });

  /* ── innerHTML titles ── */
  ['aboutTitle','amenTitle','typoTitle','tourTitle','galTitle','calcTitle','quartierTitle','appTitle','locTitle','faqTitle','conTitle'].forEach(id => {
    const el = document.getElementById(id);
    if (el && t[id]) el.innerHTML = t[id];
  });

  /* ── about body ── */
  const ab = document.getElementById('aboutBody');
  const ab2 = document.getElementById('aboutBody2');
  if (ab)  ab.textContent  = t.aboutBody;
  if (ab2) ab2.textContent = t.aboutBody2;

  /* ── about features ── */
  const featureItems = document.querySelectorAll('#aboutFeatures li');
  featureItems.forEach((li, i) => {
    if (!t.aboutFeatures || !t.aboutFeatures[i]) return;
    const icon = li.querySelector('.feat-icon');
    li.textContent = '';
    if (icon) li.appendChild(icon);
    li.appendChild(document.createTextNode(' ' + t.aboutFeatures[i]));
  });

  /* ── app features ── */
  const appFeatureItems = document.querySelectorAll('#appFeatures li');
  appFeatureItems.forEach((li, i) => {
    if (!t.appFeatures || !t.appFeatures[i]) return;
    const icon = li.querySelector('.feat-icon');
    li.textContent = '';
    if (icon) li.appendChild(icon);
    li.appendChild(document.createTextNode(' ' + t.appFeatures[i]));
  });

  /* ── form placeholders ── */
  [['fname', 'fnamePh'], ['lname','lnamePh'], ['email','emailPh'], ['phone','phonePh'], ['message','msgPh']].forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && t[key]) el.placeholder = t[key];
  });
}

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   LANGUAGE DROPDOWN
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   NAVBAR SCROLL
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   HAMBURGER MENU
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  hamburger.setAttribute('aria-expanded', menuOpen);
});
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => { menuOpen = false; mobileMenu.classList.remove('open'); });
});

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   SMOOTH NAV CLICKS
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.getElementById(a.getAttribute('href').slice(1));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});


/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   CONTACT FORM
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = document.getElementById('formSubmit');
  btn.style.opacity = '0.6';
  btn.style.pointerEvents = 'none';
  setTimeout(() => {
    document.getElementById('formSuccess').classList.add('visible');
    document.getElementById('contactForm').reset();
    btn.style.opacity = '';
    btn.style.pointerEvents = '';
  }, 900);
});

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   LIGHTBOX
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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
  lightboxImg.src = galImages[idx].src;
  lightboxImg.alt = galImages[idx].alt;
  if (lightboxCount) lightboxCount.textContent = `${idx + 1} / ${galImages.length}`;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.getElementById('lightboxPrev').addEventListener('click', () => {
  currentGalIdx = (currentGalIdx - 1 + galImages.length) % galImages.length;
  openLightbox(currentGalIdx);
});
document.getElementById('lightboxNext').addEventListener('click', () => {
  currentGalIdx = (currentGalIdx + 1) % galImages.length;
  openLightbox(currentGalIdx);
});
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft')  { currentGalIdx = (currentGalIdx - 1 + galImages.length) % galImages.length; openLightbox(currentGalIdx); }
  if (e.key === 'ArrowRight') { currentGalIdx = (currentGalIdx + 1) % galImages.length; openLightbox(currentGalIdx); }
});

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   PARALLAX HERO
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
const heroImg = document.querySelector('#heroParallaxImg');
window.addEventListener('scroll', () => {
  if (heroImg) heroImg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
}, { passive: true });

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   ANIMATED STAT COUNTERS
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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
          animateCounter(el, parseInt(el.dataset.target));
        });
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  counterObserver.observe(statsSection);
}

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   SCROLL REVEAL
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   3D TILT ON AMENITY CARDS
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect   = card.getBoundingClientRect();
    const x      = e.clientX - rect.left - rect.width  / 2;
    const y      = e.clientY - rect.top  - rect.height / 2;
    const rotY   = (x / rect.width)  * 12;
    const rotX   = -(y / rect.height) * 12;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s ease';
    setTimeout(() => { card.style.transition = ''; }, 500);
  });
});

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   SCROLL PROGRESS BAR
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
const progressBar = document.getElementById('scrollProgress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${(scrollTop / docHeight) * 100}%`;
  }, { passive: true });
}

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   CUSTOM CURSOR
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   PANNELLUM 360آ° VIEWER
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
const scenes = {
  interior: { src: 'panorama_interior.jpg', title: 'Appartement' },
  pool:     { src: 'panorama_pool.jpg',     title: 'Piscine & Jardins' },
};

let pnlViewer = null;
function initPanorama(sceneKey) {
  if (pnlViewer) { try { pnlViewer.destroy(); } catch(e){} }
  const s = scenes[sceneKey];
  if (!s || typeof pannellum === 'undefined') return;
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

/* init 360 when section enters viewport */
const tour360Section = document.getElementById('tour360');
if (tour360Section) {
  const tourObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !pnlViewer) {
        initPanorama('interior');
        const hint = document.getElementById('viewerHint');
        if (hint) setTimeout(() => { hint.style.opacity = '0'; }, 3500);
      }
    });
  }, { threshold: 0.3 });
  tourObserver.observe(tour360Section);
}

/* â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ
   GOLD PARTICLES CANVAS
â•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گâ•گ */
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

      ctx.fillStyle = `hsla(43, 68%, 52%, ${Math.max(0.05, Math.min(0.7, p.opacity))})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(renderParticles);
  }
  renderParticles();
}

/* ═══════════════════════════════════════════════════
   INIT ALL
═══════════════════════════════════════════════════ */
applyTranslation('fr');



