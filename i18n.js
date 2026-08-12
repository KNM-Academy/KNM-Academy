/* ══════════════════════════════════════════════════════════════════════════
   KNM Academy — traduction fr / en / de
   ──────────────────────────────────────────────────────────────────────────
   Un seul fichier HTML par page, trois langues. Le balisage porte des clés
   (`data-i18n`), le texte vit ici. Aucune page n'est dupliquée, donc aucune
   traduction ne peut diverger d'une autre en silence.

   Choix de la langue, par ordre de priorité :
     1. ?lang=en dans l'URL        (lien direct, partageable)
     2. le choix précédent          (localStorage)
     3. la langue du navigateur     (navigator.languages)
     4. français

   Les valeurs contiennent du HTML (liens, <strong>, listes) et sont injectées
   via innerHTML. C'est volontaire et sans risque : tout le texte ci-dessous
   est écrit ici, rien ne provient de l'extérieur.
   ══════════════════════════════════════════════════════════════════════════ */

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.mkamdem.tchekcard';
const MAIL = 'kmnacademy50@gmail.com';

const I18N = {

  /* ════════════════════════════════════════════════════════════ FRANÇAIS ══ */
  fr: {
    'lang.name': 'Français',

    /* ── Navigation & pied de page ─────────────────────────────────────── */
    'nav.apps': 'Applications',
    'nav.about': 'À propos',
    'nav.support': 'Support',
    'nav.privacy': 'Confidentialité',
    'nav.contact': 'Contact',

    'footer.brand': 'Studio Android indépendant. Des jeux premium conçus avec passion, accessibles à tous.',
    'footer.colApps': 'Applications',
    'footer.colLegal': 'Légal &amp; Support',
    'footer.privacy': 'Politique de confidentialité',
    'footer.delete': 'Suppression de compte',
    'footer.support': 'Support',
    'footer.contact': 'Contact',
    'footer.home': 'Accueil',
    'footer.rights': '© 2026 KNM Academy · Tous droits réservés',
    'footer.made': 'Fait avec ❤️ pour Android',
    'footer.short': '© 2026 KNM Academy',

    /* ── Accueil ───────────────────────────────────────────────────────── */
    'home.title': 'KNM Academy — Studio de jeux mobiles',
    'home.desc': 'KNM Academy — Studio de développement Android. Découvrez TchekCard, le jeu de cartes stratégique multijoueur.',
    'home.ogDesc': 'Applications mobiles premium — Android. Découvrez TchekCard, jeu de cartes multijoueur.',

    'home.badge': '🎮 Studio de jeux mobiles',
    // `.hero-title span` porte le dégradé or : le span entoure la marque, rien d'autre.
    'home.heroTitle': '<span>KNM Academy</span><br/>Studio de jeux mobiles',
    'home.tagline': 'Du code à Google Play — des jeux qui marquent.',
    'home.b1': '🎮 Multijoueur temps réel',
    'home.b2': '🎨 Design premium &amp; animations fluides',
    'home.b3': '🏆 Progression, missions &amp; boutique',
    'home.availOn': 'Disponible sur',
    'home.compat': 'Compatible',
    'home.ctaApps': '🚀 Voir nos applications',
    'home.ctaSupport': 'Support',
    'home.badgeMulti': 'Multijoueur',

    'home.statLaunch': 'Lancé en',
    'home.statModes': 'Modes de jeu',
    'home.statPlatform': 'Plateforme',
    'home.statSignature': 'Mode signature',

    'home.appsEyebrow': 'Nos Applications',
    'home.appsTitle': 'Disponibles sur <span class="gold">Google Play</span>',
    'home.appsSub': '1 application disponible · Android · Google Play',

    'home.tcGenre': 'Jeu de cartes stratégique',
    'home.tcBadge': 'Disponible',
    'home.tcDesc': "Jeu de cartes multijoueur en temps réel. Affrontez des IA ou d'autres joueurs en 1v1, 1v2, 1v3 ou 1v4. Annoncez TCHEK au bon moment pour gagner !",
    'home.tagStrategy': 'Stratégie',
    'home.tagMulti': 'Multijoueur',
    'home.tagSolo': 'Solo',
    'home.tagCards': 'Cartes',
    'home.tagAndroid': 'Android',
    'home.free': '✓ Gratuit',
    'home.iap': 'In-app optionnel',
    'home.getOn': 'Télécharger sur',
    'home.getAria': 'Télécharger TchekCard sur Google Play',

    'home.soonName': 'Prochain projet',
    'home.soonBadge': 'Bientôt',
    'home.soonDesc': 'Quelque chose arrive. Notre prochain jeu est en cours de conception — design, gameplay, et quelques surprises.',
    'home.notify': "🔔 M'avertir au lancement →",
    'home.notifyHref': 'mailto:' + MAIL + '?subject=' + encodeURIComponent('Notification — Prochain jeu KNM Academy'),

    'home.aboutEyebrow': 'À propos',
    'home.aboutTitle': 'Passionné de <span class="gold" style="white-space:nowrap;">mobile gaming</span>',
    'home.aboutP1': "KNM Academy est un studio indépendant spécialisé dans les applications mobiles Android premium. Chaque projet est conçu avec une attention particulière au design, à la fluidité et à l'expérience joueur.",
    'home.aboutP2': 'Notre objectif : des expériences qui rivalisent avec les grandes productions, accessibles à tous.',
    'home.features': '<li>Design dark premium &amp; animations fluides</li><li>Multijoueur temps réel via Firebase</li><li>Progression, missions et boutique in-app</li><li>Support actif et mises à jour régulières</li>',
    'home.devRole': 'Développeur de jeux mobiles · Android',
    'home.devBio': 'Fondateur &amp; développeur solo',

    'home.contactEyebrow': 'Contact',
    'home.ctaTitle': 'Une question ? <span class="gold">Écrivez-nous.</span>',
    'home.ctaDesc': 'Support, bug, partenariat ou suggestion — réponse sous 48h.',
    'home.helpCenter': "Centre d'aide →",

    /* ── Support ───────────────────────────────────────────────────────── */
    'sup.title': 'Support — KNM Academy',
    'sup.desc': 'Support et aide pour les applications KNM Academy. FAQ TchekCard, contact, signalement de bug.',
    'sup.badge': 'Support',
    'sup.h1': 'Comment pouvons-nous <span class="gold">vous aider ?</span>',
    'sup.lead': 'Trouvez des réponses rapides ou contactez notre équipe — réponse sous 48h.',

    'sup.bugT': 'Signaler un bug',
    'sup.bugP': "Un problème technique ? Une carte qui disparaît ? Dites-nous tout, on corrige rapidement.",
    'sup.bugBtn': 'Signaler →',
    'sup.bugHref': 'mailto:' + MAIL + '?subject=' + encodeURIComponent('Bug TchekCard'),

    'sup.ideaT': 'Retour &amp; suggestions',
    'sup.ideaP': 'Vous avez une idée pour améliorer TchekCard ? On est à l’écoute de la communauté.',
    'sup.ideaBtn': 'Écrire →',
    'sup.ideaHref': 'mailto:' + MAIL + '?subject=' + encodeURIComponent('Suggestion TchekCard'),

    'sup.dataT': 'Données personnelles',
    'sup.dataP': 'Demande d’accès, de modification ou de suppression de vos données (RGPD).',
    'sup.dataBtn': 'Supprimer mes données →',

    'sup.faqEyebrow': 'FAQ',
    'sup.faqTitle': 'Questions fréquentes — <span class="gold">TchekCard</span>',
    'sup.faqSub': 'Cliquez sur une question pour afficher la réponse.',

    'sup.q1': 'Comment jouer à TchekCard ?',
    'sup.a1': "TchekCard est un jeu de cartes inspiré des classiques. Le but est de vider sa main avant les adversaires. À votre tour, posez une carte de même couleur ou même valeur que la carte sur la défausse. Quand il vous reste 1 carte, appuyez sur le bouton <strong>TCHEK</strong> pour l'annoncer — sinon vous prenez des cartes de pénalité !",
    'sup.q2': 'Comment fonctionne le mode multijoueur ?',
    'sup.a2': "Le mode multijoueur utilise Firebase pour des parties en temps réel. Connectez-vous avec votre compte Google, créez ou rejoignez une salle, et invitez jusqu'à 3 autres joueurs. La connexion internet est nécessaire. Les parties 1v1, 1v2, 1v3 sont disponibles.",
    'sup.q3': 'À quoi servent les pièces et les diamants ?',
    'sup.a3': "Les <strong>pièces 🪙</strong> servent à rejoindre les parties (mise d'entrée). Vous en gagnez en jouant, en complétant des missions et en vous connectant chaque jour.<br/><br/>Les <strong>diamants 💎</strong> servent à acheter des skins de cartes et des règles personnalisées dans la boutique. Ils s'obtiennent via les missions ou en achat optionnel.",
    'sup.q4': "Je n'ai plus de pièces, que faire ?",
    'sup.a4': 'Plusieurs façons de récupérer des pièces : complétez les missions journalières, réclamez votre récompense de connexion quotidienne, terminez des parties (même en perdant vous gagnez un peu), ou achetez un pack de pièces optionnel dans la boutique.',
    'sup.q5': 'Le mode 1v4 avec règles premium ne fonctionne pas ?',
    'sup.a5': "Assurez-vous d'activer les règles premium <strong>avant</strong> de lancer la partie (et non pendant). Rendez-vous dans la boutique → onglet Règles, achetez et activez les règles souhaitées, puis démarrez une nouvelle partie. Les règles actives sont sauvegardées automatiquement.",
    'sup.q6': 'Comment supprimer mon compte et mes données ?',
    'sup.a6': 'Ouvrez <strong>Réglages → Centre de compte</strong> dans l’application, ou écrivez à <a href="mailto:' + MAIL + '">' + MAIL + '</a>. La marche à suivre complète est détaillée sur notre <a href="delete-account.html">page de suppression de compte</a>. Les demandes sont traitées sous 30 jours au maximum.',
    'sup.q7': "L'application plante ou se ferme toute seule ?",
    'sup.a7': "Essayez d'abord de vider le cache de l'application (Paramètres Android → Applications → TchekCard → Vider le cache), puis relancez. Si le problème persiste, signalez-le avec la version Android et le modèle de votre appareil à <a href=\"mailto:" + MAIL + '?subject=Crash%20TchekCard">' + MAIL + '</a>.',
    'sup.q8': 'Comment désactiver la musique ou les vibrations ?',
    'sup.a8': "Appuyez sur l'icône ⚙️ (engrenage) dans la couverture ou pendant une partie. La fenêtre des paramètres vous permet d'activer/désactiver indépendamment : la <strong>musique</strong>, les <strong>effets sonores</strong> et les <strong>vibrations</strong>. Ces préférences sont sauvegardées automatiquement.",
    'sup.q9': "Mes achats ne s'affichent pas ?",
    'sup.a9': 'Vérifiez votre connexion internet et redémarrez l’application. Si le problème persiste après 5 minutes, Google Play synchronise les achats automatiquement. En cas de problème persistant, contactez <a href="mailto:' + MAIL + '?subject=Achat%20manquant%20TchekCard">' + MAIL + '</a> avec votre preuve d’achat Google Play.',

    'sup.contactH3': "Vous n'avez pas trouvé votre réponse ?",
    'sup.contactP': 'Je réponds généralement sous 24 à 48 heures ouvrées.',
    'sup.contactBtn': 'Contacter le support',

    /* ── Confidentialité ───────────────────────────────────────────────── */
    'pp.title': 'Politique de confidentialité — KNM Academy',
    'pp.desc': "Politique de confidentialité de KNM Academy et de l'application TchekCard.",
    'pp.badge': 'Légal',
    'pp.h1': 'Politique de <span class="gold">confidentialité</span>',
    'pp.updated': 'Applicable à toutes les applications KNM Academy — Dernière mise à jour : 15 juin 2026',
    'pp.summary': '<strong>Résumé :</strong> KNM Academy ne vend pas vos données personnelles. Nous ne collectons que les informations strictement nécessaires au fonctionnement de l’application. Vous pouvez demander la suppression de vos données à tout moment.',
    'pp.tocTitle': 'Sommaire',
    'pp.toc': '<li><a href="#section-1">Qui sommes-nous ?</a></li><li><a href="#section-2">Champ d’application</a></li><li><a href="#section-3">Données collectées</a></li><li><a href="#section-4">Finalités du traitement</a></li><li><a href="#section-5">Partage des données</a></li><li><a href="#section-6">Conservation des données</a></li><li><a href="#section-7">Vos droits (RGPD)</a></li><li><a href="#section-8">Protection des données</a></li><li><a href="#section-9">Confidentialité des enfants</a></li><li><a href="#section-10">Modifications de cette politique</a></li><li><a href="#section-11">Contact</a></li>',

    'pp.s1t': '1. Qui sommes-nous ?',
    'pp.s1b': '<p>KNM Academy est un studio de développement d’applications mobiles indépendant. Nous développons et publions des applications Android sur Google Play Store.</p><p><strong>Contact :</strong> <a href="mailto:' + MAIL + '">' + MAIL + '</a></p><p><strong>Site web :</strong> <a href="https://knm-academy.github.io/KNM-Academy/">knm-academy.github.io/KNM-Academy</a></p><p><strong>Code source :</strong> <a href="https://github.com/KNM-Academy" target="_blank" rel="noopener">github.com/KNM-Academy</a></p>',

    'pp.s2t': "2. Champ d'application",
    'pp.s2b': '<p>Cette politique de confidentialité s’applique à l’ensemble des applications publiées par KNM Academy, notamment <strong>TchekCard</strong>, et à ce site web.</p>',

    'pp.s3t': '3. Données collectées',
    'pp.s3b': '<h3>3.1 Données d’identification (optionnelles)</h3><p>Si vous choisissez de vous connecter avec votre compte Google (fonctionnalité optionnelle), nous accédons aux informations suivantes via <strong>Google Sign-In</strong> :</p><ul><li>Nom d’affichage (pseudo Google)</li><li>Adresse e-mail</li><li>Photo de profil (URL publique)</li><li>Identifiant Google unique (pour vous identifier dans les parties multijoueur)</li></ul><p>Ces données sont utilisées <strong>uniquement</strong> pour afficher votre profil dans l’application et vous identifier dans les sessions multijoueur. Elles ne sont pas partagées avec des tiers.</p><h3>3.2 Données de jeu</h3><p>Dans le cadre du mode multijoueur, les données suivantes sont transmises et stockées via <strong>Firebase Realtime Database</strong> (Google, hébergé en europe-west1) :</p><ul><li>Votre identifiant de joueur (pseudonyme)</li><li>État de la partie en cours (cartes jouées, score, tour)</li><li>Résultats des parties (victoires/défaites)</li></ul><p>Ces données sont temporaires et liées aux sessions de jeu. Elles ne contiennent aucune information personnelle sensible.</p><h3>3.3 Données de progression (stockage local)</h3><p>Votre progression dans l’application (niveau, XP, pièces, diamants, missions, skins débloqués, préférences de son/musique/vibration) est stockée <strong>localement</strong> sur votre appareil via Android DataStore et SharedPreferences. Ces données ne quittent pas votre appareil sauf dans le cadre du mode multijoueur.</p><h3>3.4 Achats intégrés</h3><p>Les achats in-app sont gérés par <strong>Google Play Billing</strong>. KNM Academy ne collecte ni ne stocke vos informations de paiement. Toutes les transactions sont traitées directement par Google selon leur politique de confidentialité : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p><h3>3.5 Publicités (Google AdMob)</h3><p>TchekCard utilise <strong>Google AdMob</strong> pour afficher des publicités, notamment des annonces vidéo récompensées (regarder une publicité pour obtenir des pièces) et des annonces interstitielles (entre les parties).</p><p>AdMob peut collecter les données suivantes pour diffuser des publicités pertinentes :</p><ul><li>Identifiant publicitaire Android (GAID / Advertising ID)</li><li>Adresse IP et données de réseau</li><li>Interactions avec les publicités (clics, vues)</li></ul><p><strong>Consentement (RGPD) :</strong> si vous résidez dans l’Espace Économique Européen, au Royaume-Uni ou en Suisse, un écran de consentement officiel Google (UMP) vous est présenté au premier lancement. Vous pouvez accepter, refuser ou personnaliser le partage de vos données publicitaires sans perdre l’accès au jeu.</p><p>Vous pouvez à tout moment désactiver la personnalisation des publicités dans les paramètres de votre appareil Android : <em>Paramètres → Google → Publicités → Désactiver la personnalisation</em>. La politique de confidentialité de Google AdMob est disponible à : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p><h3>3.6 Statistiques d’usage (Firebase Analytics)</h3><p>TchekCard utilise <strong>Firebase Analytics</strong> pour collecter des statistiques anonymisées d’utilisation, dans le seul but d’améliorer l’expérience de jeu. Aucune donnée n’est rattachée à votre identité réelle.</p><p>Les événements suivants sont collectés :</p><ul><li>Début et fin de partie (mode joué, durée, résultat, nombre de tours)</li><li>Tentatives d’achat in-app (sans les informations de paiement)</li><li>Visionnage de publicités récompensées</li><li>Progression dans le tutoriel</li><li>Cartes jouées (type de carte, sans contexte personnel)</li><li>Connexions quotidiennes et progression de série (streak)</li><li>Temps d’attente en matchmaking</li></ul><p>Firebase collecte également des métadonnées techniques automatiques (modèle d’appareil, version Android, langue, pays approximatif). Ces données sont conservées 14 mois maximum selon la politique Firebase Analytics.</p><h3>3.7 Diagnostic des plantages (Firebase Crashlytics)</h3><p>En cas de plantage de l’application, <strong>Firebase Crashlytics</strong> collecte automatiquement des données techniques pour nous permettre de corriger les bugs :</p><ul><li>Trace technique de l’erreur (stack trace)</li><li>État de l’appareil au moment du plantage (mémoire, version OS, modèle)</li><li>Identifiant d’installation anonyme (Firebase Installation ID)</li></ul><p>Aucune donnée personnelle identifiante n’est transmise. Les rapports de crash sont conservés 90 jours puis supprimés automatiquement.</p><h3>3.8 Données techniques additionnelles</h3><p>Firebase peut collecter automatiquement certaines données techniques minimales pour assurer le bon fonctionnement des services (identifiant d’instance Firebase, logs réseau).</p>',

    'pp.s4t': '4. Finalités du traitement',
    'pp.s4b': '<p>Nous utilisons vos données aux fins suivantes :</p><ul><li>Vous identifier dans les parties multijoueur en temps réel</li><li>Sauvegarder et synchroniser votre progression de jeu</li><li>Traiter vos achats intégrés (délégué à Google Play)</li><li>Assurer le bon fonctionnement et la sécurité des services</li><li>Répondre à vos demandes de support</li></ul><p><strong>KNM Academy</strong> n’exploite pas elle-même vos données à des fins de profilage ou de marketing. La diffusion de publicités personnalisées est assurée par <strong>Google AdMob</strong>, un tiers indépendant, selon votre consentement (voir section 3.5).</p>',

    'pp.s5t': '5. Partage des données',
    'pp.s5b': '<p>Nous ne vendons ni ne louons vos données personnelles. On distingue deux types de transferts :</p><h3>5.1 Sous-traitants (traitement pour notre compte)</h3><p>Les services suivants traitent des données <strong>pour le compte de KNM Academy</strong>, ce qui correspond à une <strong>collecte</strong> et non à un partage avec un tiers indépendant :</p><ul><li><strong>Google / Firebase</strong> : hébergement multijoueur (Realtime Database), authentification (Auth), statistiques anonymisées (Analytics) et diagnostic des plantages (Crashlytics)</li><li><strong>Google Play Billing</strong> : traitement des achats intégrés</li></ul><p>Firebase est soumis à la politique de confidentialité de Google : <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a>.</p><h3>5.2 Partage avec des tiers indépendants</h3><p><strong>Google AdMob</strong> agit en tant que tiers indépendant pour la diffusion de publicités. Selon votre consentement (voir section 3.5), certaines données (identifiant publicitaire, adresse IP, interactions avec les publicités) sont <strong>partagées</strong> avec AdMob à des fins de publicité personnalisée.</p><p>Nous pouvons également partager des données si la loi nous y oblige.</p>',

    'pp.s6t': '6. Conservation des données',
    'pp.s6b': '<ul><li><strong>Données de compte Google</strong> : conservées tant que vous utilisez l’application. Supprimées sur demande.</li><li><strong>Données multijoueur</strong> : les données de session sont supprimées à la fin de chaque partie.</li><li><strong>Statistiques d’usage (Firebase Analytics)</strong> : 14 mois maximum.</li><li><strong>Rapports de plantage (Firebase Crashlytics)</strong> : 90 jours.</li><li><strong>Données locales</strong> : supprimées lorsque vous désinstallez l’application.</li><li><strong>Historique d’achat</strong> : conservé par Google Play Billing selon sa propre politique.</li></ul>',

    'pp.s7t': '7. Vos droits (RGPD)',
    'pp.s7b': '<p>Si vous résidez dans l’Union européenne, vous disposez des droits suivants concernant vos données personnelles :</p><ul><li><strong>Droit d’accès</strong> : obtenir une copie de vos données</li><li><strong>Droit de rectification</strong> : corriger des données inexactes</li><li><strong>Droit à l’effacement</strong> : demander la suppression de vos données</li><li><strong>Droit d’opposition</strong> : vous opposer à certains traitements</li><li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format lisible</li></ul><p>Pour exercer ces droits, contactez-nous à : <a href="mailto:' + MAIL + '">' + MAIL + '</a></p><p>Vous avez également le droit d’introduire une réclamation auprès de l’autorité de protection des données de votre pays (en France, la <a href="https://www.cnil.fr" target="_blank" rel="noopener">CNIL</a>).</p>',

    'pp.s8t': '8. Protection des données',
    'pp.s8b': '<p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Les communications avec Firebase sont chiffrées via TLS/HTTPS.</p>',

    'pp.s9t': '9. Confidentialité des enfants',
    'pp.s9b': '<p>TchekCard est destiné à un public de 12 ans et plus (classification PEGI 12 — descripteur « Simulated Gambling » en raison du système de mise compétitive avec monnaie virtuelle). L’application n’est pas conçue pour les enfants de moins de 13 ans et nous ne collectons pas sciemment de données personnelles auprès d’eux.</p><p>Le système de mise multijoueur utilise exclusivement de la monnaie virtuelle interne (pièces) qui n’a aucune valeur réelle, ne peut être convertie en argent réel et ne peut être échangée contre des biens ou services hors de l’application.</p><p>Si vous êtes parent et pensez que votre enfant nous a fourni des données personnelles, contactez-nous à <a href="mailto:' + MAIL + '">' + MAIL + '</a> pour en demander la suppression immédiate.</p>',

    'pp.s10t': '10. Modifications de cette politique',
    'pp.s10b': '<p>Nous pouvons mettre à jour cette politique de confidentialité à tout moment. La date de « dernière mise à jour » en haut de cette page indique la version en vigueur. Nous vous encourageons à consulter cette page régulièrement pour rester informé des éventuelles modifications.</p>',

    'pp.s11t': '11. Contact',
    'pp.s11b': '<p>Pour toute question concernant cette politique de confidentialité ou le traitement de vos données :</p>',
    'pp.s11box': '<strong>E-mail :</strong> <a href="mailto:' + MAIL + '">' + MAIL + '</a><br/><strong>Site web :</strong> <a href="https://knm-academy.github.io/KNM-Academy/">knm-academy.github.io/KNM-Academy</a><br/><strong>Studio :</strong> KNM Academy',

    /* ── Suppression de compte ─────────────────────────────────────────── */
    'del.title': 'Suppression de compte et de données — TchekCard | KNM Academy',
    'del.desc': 'Comment supprimer votre compte TchekCard et les données associées.',
    'del.badge': 'Légal',
    'del.h1': 'Suppression de <span class="gold">compte et de données</span>',
    'del.updated': 'Application TchekCard, éditée par KNM Academy — Dernière mise à jour : 15 juillet 2026',
    'del.summary': '<strong>Résumé :</strong> vous pouvez supprimer votre compte <strong>TchekCard</strong> et les données associées à tout moment, directement depuis l’application ou par e-mail. Les demandes sont traitées sous 30 jours au maximum.',

    'del.s1t': '1. Depuis l’application (recommandé)',
    'del.s1b': '<ol><li>Ouvrez <strong>TchekCard</strong> sur votre appareil</li><li>Allez dans <strong>Réglages</strong> (icône engrenage)</li><li>Touchez <strong>Centre de compte — Gérer ou supprimer mes données</strong></li><li>Votre application e-mail s’ouvre avec une <strong>demande de suppression pré-remplie</strong> (objet : « Demande de suppression de données — TchekCard ») — complétez votre identifiant de compte et envoyez</li></ol><p>La suppression est ensuite effectuée par notre équipe et confirmée par e-mail, au plus tard sous <strong>30 jours</strong>.</p><p>Si vous étiez connecté avec Google, vous pouvez également vous déconnecter et révoquer l’accès de TchekCard à votre compte Google depuis <a href="https://myaccount.google.com/connections" target="_blank" rel="noopener">myaccount.google.com/connections</a>.</p>',

    'del.s2t': '2. Par e-mail',
    'del.s2b': '<p>Envoyez votre demande à <a href="mailto:' + MAIL + '?subject=Suppression%20de%20compte%20TchekCard">' + MAIL + '</a> avec pour objet « <strong>Suppression de compte TchekCard</strong> », depuis l’adresse e-mail associée à votre compte Google (ou en indiquant votre pseudo en jeu si vous jouiez sans compte Google).</p><p>Nous confirmons la suppression par retour d’e-mail, au plus tard sous <strong>30 jours</strong>.</p>',

    'del.s3t': '3. Données supprimées',
    'del.s3b': '<ul><li><strong>Données de compte</strong> : lien avec votre compte Google (nom d’affichage, adresse e-mail, photo de profil), identifiant Firebase</li><li><strong>Données multijoueur</strong> : pseudo et avatar utilisés en ligne, ainsi que toute donnée de partie encore associée à votre identifiant (les sessions de jeu sont par ailleurs supprimées automatiquement en fin de partie)</li></ul><p>Votre progression (niveau, pièces, diamants, skins) est stockée <strong>localement sur votre appareil</strong> : elle n’est pas détenue par nos serveurs et disparaît en désinstallant l’application.</p>',

    'del.s4t': '4. Données conservées (durées limitées)',
    'del.s4b': '<ul><li><strong>Rapports de plantage (Firebase Crashlytics)</strong> : anonymes, purgés automatiquement sous 90 jours</li><li><strong>Statistiques d’usage agrégées (Firebase Analytics)</strong> : anonymisées, non rattachables à votre identité, conservées 14 mois maximum</li><li><strong>Historique d’achats</strong> : conservé par Google Play Billing selon la politique de Google (obligations comptables) — KNM Academy n’y stocke aucune information de paiement</li><li><strong>Progression locale</strong> : stockée uniquement sur votre appareil, supprimée en désinstallant l’application</li></ul>',

    'del.s5t': '5. Questions',
    'del.s5b': '<p>Pour en savoir plus sur les données que nous traitons, consultez notre <a href="privacy-policy.html">politique de confidentialité</a>, ou écrivez-nous à <a href="mailto:' + MAIL + '">' + MAIL + '</a>.</p>',
  },

  /* ═════════════════════════════════════════════════════════════ ENGLISH ══ */
  en: {
    'lang.name': 'English',

    'nav.apps': 'Apps',
    'nav.about': 'About',
    'nav.support': 'Support',
    'nav.privacy': 'Privacy',
    'nav.contact': 'Contact',

    'footer.brand': 'Independent Android studio. Premium games built with care, for everyone.',
    'footer.colApps': 'Apps',
    'footer.colLegal': 'Legal &amp; Support',
    'footer.privacy': 'Privacy Policy',
    'footer.delete': 'Account deletion',
    'footer.support': 'Support',
    'footer.contact': 'Contact',
    'footer.home': 'Home',
    'footer.rights': '© 2026 KNM Academy · All rights reserved',
    'footer.made': 'Made with ❤️ for Android',
    'footer.short': '© 2026 KNM Academy',

    'home.title': 'KNM Academy — Mobile Gaming Studio',
    'home.desc': 'KNM Academy — Android development studio. Discover TchekCard, the strategic multiplayer card game.',
    'home.ogDesc': 'Premium mobile apps — Android. Discover TchekCard, a multiplayer card game.',

    'home.badge': '🎮 Mobile Gaming Studio',
    'home.heroTitle': '<span>KNM Academy</span><br/>Mobile Gaming Studio',
    'home.tagline': 'From code to Google Play — games that stick.',
    'home.b1': '🎮 Real-time multiplayer',
    'home.b2': '🎨 Premium design &amp; smooth animations',
    'home.b3': '🏆 Progression, missions &amp; shop',
    'home.availOn': 'Available on',
    'home.compat': 'Compatible',
    'home.ctaApps': '🚀 See our apps',
    'home.ctaSupport': 'Support',
    'home.badgeMulti': 'Multiplayer',

    'home.statLaunch': 'Launched',
    'home.statModes': 'Game modes',
    'home.statPlatform': 'Platform',
    'home.statSignature': 'Signature mode',

    'home.appsEyebrow': 'Our Apps',
    'home.appsTitle': 'Available on <span class="gold">Google Play</span>',
    'home.appsSub': '1 app available · Android · Google Play',

    'home.tcGenre': 'Strategic card game',
    'home.tcBadge': 'Available',
    'home.tcDesc': 'Real-time multiplayer card game. Take on AI opponents or other players in 1v1, 1v2, 1v3 or 1v4. Call TCHEK at the right moment to win!',
    'home.tagStrategy': 'Strategy',
    'home.tagMulti': 'Multiplayer',
    'home.tagSolo': 'Single player',
    'home.tagCards': 'Cards',
    'home.tagAndroid': 'Android',
    'home.free': '✓ Free',
    'home.iap': 'Optional in-app',
    'home.getOn': 'Get it on',
    'home.getAria': 'Get TchekCard on Google Play',

    'home.soonName': 'Next project',
    'home.soonBadge': 'Soon',
    'home.soonDesc': 'Something is coming. Our next game is in design — visuals, gameplay, and a few surprises.',
    'home.notify': '🔔 Notify me at launch →',
    'home.notifyHref': 'mailto:' + MAIL + '?subject=' + encodeURIComponent('Notify me — next KNM Academy game'),

    'home.aboutEyebrow': 'About',
    'home.aboutTitle': 'Passionate about <span class="gold" style="white-space:nowrap;">mobile gaming</span>',
    'home.aboutP1': 'KNM Academy is an independent studio specialised in premium Android mobile apps. Every project is built with particular attention to design, smoothness and player experience.',
    'home.aboutP2': 'Our goal: experiences that rival the big productions, accessible to everyone.',
    'home.features': '<li>Premium dark design &amp; smooth animations</li><li>Real-time multiplayer via Firebase</li><li>Progression, missions and in-app shop</li><li>Active support and regular updates</li>',
    'home.devRole': 'Mobile Game Developer · Android',
    'home.devBio': 'Founder &amp; solo developer',

    'home.contactEyebrow': 'Contact',
    'home.ctaTitle': 'Got a question? <span class="gold">Write to us.</span>',
    'home.ctaDesc': 'Support, bugs, partnerships or ideas — we reply within 48h.',
    'home.helpCenter': 'Help centre →',

    'sup.title': 'Support — KNM Academy',
    'sup.desc': 'Support and help for KNM Academy apps. TchekCard FAQ, contact, bug reports.',
    'sup.badge': 'Support',
    'sup.h1': 'How can we <span class="gold">help you?</span>',
    'sup.lead': 'Find quick answers or contact our team — we reply within 48h.',

    'sup.bugT': 'Report a bug',
    'sup.bugP': 'A technical problem? A card that vanishes? Tell us everything, we fix fast.',
    'sup.bugBtn': 'Report →',
    'sup.bugHref': 'mailto:' + MAIL + '?subject=' + encodeURIComponent('TchekCard bug'),

    'sup.ideaT': 'Feedback &amp; ideas',
    'sup.ideaP': 'Got an idea to make TchekCard better? We listen to the community.',
    'sup.ideaBtn': 'Write →',
    'sup.ideaHref': 'mailto:' + MAIL + '?subject=' + encodeURIComponent('TchekCard suggestion'),

    'sup.dataT': 'Personal data',
    'sup.dataP': 'Request access to, correction of, or deletion of your data (GDPR).',
    'sup.dataBtn': 'Delete my data →',

    'sup.faqEyebrow': 'FAQ',
    'sup.faqTitle': 'Frequently asked questions — <span class="gold">TchekCard</span>',
    'sup.faqSub': 'Click a question to reveal the answer.',

    'sup.q1': 'How do I play TchekCard?',
    'sup.a1': 'TchekCard is a card game inspired by the classics. The goal is to empty your hand before your opponents. On your turn, play a card matching the suit or the value of the card on the discard pile. When you have 1 card left, press the <strong>TCHEK</strong> button to call it — otherwise you draw penalty cards!',
    'sup.q2': 'How does multiplayer work?',
    'sup.a2': 'Multiplayer uses Firebase for real-time games. Sign in with your Google account, create or join a room, and invite up to 3 other players. An internet connection is required. 1v1, 1v2 and 1v3 games are available.',
    'sup.q3': 'What are coins and diamonds for?',
    'sup.a3': '<strong>Coins 🪙</strong> are used to join games (entry stake). You earn them by playing, completing missions and signing in each day.<br/><br/><strong>Diamonds 💎</strong> are used to buy card skins and custom rules in the shop. You get them through missions or as an optional purchase.',
    'sup.q4': "I'm out of coins, what can I do?",
    'sup.a4': 'Several ways to get coins back: complete the daily missions, claim your daily sign-in reward, finish games (you earn a little even when losing), or buy an optional coin pack in the shop.',
    'sup.q5': "1v4 with premium rules isn't working?",
    'sup.a5': 'Make sure you enable the premium rules <strong>before</strong> starting the game (not during). Go to the shop → Rules tab, buy and enable the rules you want, then start a new game. Active rules are saved automatically.',
    'sup.q6': 'How do I delete my account and my data?',
    'sup.a6': 'Open <strong>Settings → Account Centre</strong> in the app, or write to <a href="mailto:' + MAIL + '">' + MAIL + '</a>. The full procedure is described on our <a href="delete-account.html">account deletion page</a>. Requests are handled within 30 days at most.',
    'sup.q7': 'The app crashes or closes by itself?',
    'sup.a7': 'First try clearing the app cache (Android Settings → Apps → TchekCard → Clear cache), then relaunch. If the problem persists, report it with your Android version and device model to <a href="mailto:' + MAIL + '?subject=TchekCard%20crash">' + MAIL + '</a>.',
    'sup.q8': 'How do I turn off music or vibration?',
    'sup.a8': 'Tap the ⚙️ (gear) icon on the cover screen or during a game. The settings panel lets you independently toggle <strong>music</strong>, <strong>sound effects</strong> and <strong>vibration</strong>. These preferences are saved automatically.',
    'sup.q9': "My purchases aren't showing up?",
    'sup.a9': 'Check your internet connection and restart the app. If the problem persists after 5 minutes, Google Play syncs purchases automatically. If it still fails, contact <a href="mailto:' + MAIL + '?subject=TchekCard%20missing%20purchase">' + MAIL + '</a> with your Google Play receipt.',

    'sup.contactH3': "Didn't find your answer?",
    'sup.contactP': 'I usually reply within 24 to 48 working hours.',
    'sup.contactBtn': 'Contact support',

    'pp.title': 'Privacy Policy — KNM Academy',
    'pp.desc': 'Privacy policy for KNM Academy and the TchekCard app.',
    'pp.badge': 'Legal',
    'pp.h1': '<span class="gold">Privacy</span> Policy',
    'pp.updated': 'Applies to all KNM Academy apps — Last updated: 15 June 2026',
    'pp.summary': '<strong>Summary:</strong> KNM Academy does not sell your personal data. We only collect the information strictly necessary for the app to work. You can request deletion of your data at any time.',
    'pp.tocTitle': 'Contents',
    'pp.toc': '<li><a href="#section-1">Who we are</a></li><li><a href="#section-2">Scope</a></li><li><a href="#section-3">Data we collect</a></li><li><a href="#section-4">Purposes of processing</a></li><li><a href="#section-5">Data sharing</a></li><li><a href="#section-6">Data retention</a></li><li><a href="#section-7">Your rights (GDPR)</a></li><li><a href="#section-8">Data protection</a></li><li><a href="#section-9">Children’s privacy</a></li><li><a href="#section-10">Changes to this policy</a></li><li><a href="#section-11">Contact</a></li>',

    'pp.s1t': '1. Who we are',
    'pp.s1b': '<p>KNM Academy is an independent mobile app development studio. We build and publish Android apps on the Google Play Store.</p><p><strong>Contact:</strong> <a href="mailto:' + MAIL + '">' + MAIL + '</a></p><p><strong>Website:</strong> <a href="https://knm-academy.github.io/KNM-Academy/">knm-academy.github.io/KNM-Academy</a></p><p><strong>Source code:</strong> <a href="https://github.com/KNM-Academy" target="_blank" rel="noopener">github.com/KNM-Academy</a></p>',

    'pp.s2t': '2. Scope',
    'pp.s2b': '<p>This privacy policy applies to all apps published by KNM Academy, notably <strong>TchekCard</strong>, and to this website.</p>',

    'pp.s3t': '3. Data we collect',
    'pp.s3b': '<h3>3.1 Identification data (optional)</h3><p>If you choose to sign in with your Google account (an optional feature), we access the following information through <strong>Google Sign-In</strong>:</p><ul><li>Display name (Google username)</li><li>Email address</li><li>Profile picture (public URL)</li><li>Unique Google identifier (to identify you in multiplayer games)</li></ul><p>This data is used <strong>only</strong> to display your profile in the app and identify you in multiplayer sessions. It is not shared with third parties.</p><h3>3.2 Game data</h3><p>In multiplayer mode, the following data is transmitted and stored through <strong>Firebase Realtime Database</strong> (Google, hosted in europe-west1):</p><ul><li>Your player identifier (nickname)</li><li>State of the current game (cards played, score, turn)</li><li>Game results (wins/losses)</li></ul><p>This data is temporary and tied to game sessions. It contains no sensitive personal information.</p><h3>3.3 Progression data (local storage)</h3><p>Your progression in the app (level, XP, coins, diamonds, missions, unlocked skins, sound/music/vibration preferences) is stored <strong>locally</strong> on your device via Android DataStore and SharedPreferences. This data does not leave your device except in multiplayer mode.</p><h3>3.4 In-app purchases</h3><p>In-app purchases are handled by <strong>Google Play Billing</strong>. KNM Academy neither collects nor stores your payment information. All transactions are processed directly by Google under their privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p><h3>3.5 Advertising (Google AdMob)</h3><p>TchekCard uses <strong>Google AdMob</strong> to display ads, in particular rewarded video ads (watch an ad to get coins) and interstitial ads (between games).</p><p>AdMob may collect the following data to serve relevant ads:</p><ul><li>Android advertising identifier (GAID / Advertising ID)</li><li>IP address and network data</li><li>Ad interactions (clicks, views)</li></ul><p><strong>Consent (GDPR):</strong> if you live in the European Economic Area, the United Kingdom or Switzerland, an official Google consent screen (UMP) is shown to you on first launch. You can accept, refuse or customise the sharing of your advertising data without losing access to the game.</p><p>You can disable ad personalisation at any time in your Android device settings: <em>Settings → Google → Ads → Opt out of Ads Personalisation</em>. The Google AdMob privacy policy is available at: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p><h3>3.6 Usage statistics (Firebase Analytics)</h3><p>TchekCard uses <strong>Firebase Analytics</strong> to collect anonymised usage statistics, for the sole purpose of improving the game experience. No data is tied to your real identity.</p><p>The following events are collected:</p><ul><li>Game start and end (mode played, duration, result, number of turns)</li><li>In-app purchase attempts (without payment information)</li><li>Rewarded ad views</li><li>Tutorial progress</li><li>Cards played (card type, without personal context)</li><li>Daily sign-ins and streak progress</li><li>Matchmaking wait times</li></ul><p>Firebase also automatically collects technical metadata (device model, Android version, language, approximate country). This data is retained for a maximum of 14 months under the Firebase Analytics policy.</p><h3>3.7 Crash diagnostics (Firebase Crashlytics)</h3><p>If the app crashes, <strong>Firebase Crashlytics</strong> automatically collects technical data so we can fix bugs:</p><ul><li>Technical error trace (stack trace)</li><li>Device state at the time of the crash (memory, OS version, model)</li><li>Anonymous installation identifier (Firebase Installation ID)</li></ul><p>No identifying personal data is transmitted. Crash reports are kept for 90 days then deleted automatically.</p><h3>3.8 Additional technical data</h3><p>Firebase may automatically collect certain minimal technical data to keep services working correctly (Firebase instance identifier, network logs).</p>',

    'pp.s4t': '4. Purposes of processing',
    'pp.s4b': '<p>We use your data for the following purposes:</p><ul><li>Identifying you in real-time multiplayer games</li><li>Saving and syncing your game progression</li><li>Processing your in-app purchases (delegated to Google Play)</li><li>Keeping the services working correctly and securely</li><li>Answering your support requests</li></ul><p><strong>KNM Academy</strong> does not itself use your data for profiling or marketing. Personalised advertising is delivered by <strong>Google AdMob</strong>, an independent third party, subject to your consent (see section 3.5).</p>',

    'pp.s5t': '5. Data sharing',
    'pp.s5b': '<p>We do not sell or rent your personal data. There are two distinct kinds of transfer:</p><h3>5.1 Processors (processing on our behalf)</h3><p>The following services process data <strong>on behalf of KNM Academy</strong>, which counts as <strong>collection</strong> rather than sharing with an independent third party:</p><ul><li><strong>Google / Firebase</strong>: multiplayer hosting (Realtime Database), authentication (Auth), anonymised statistics (Analytics) and crash diagnostics (Crashlytics)</li><li><strong>Google Play Billing</strong>: in-app purchase processing</li></ul><p>Firebase is subject to Google’s privacy policy: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a>.</p><h3>5.2 Sharing with independent third parties</h3><p><strong>Google AdMob</strong> acts as an independent third party for ad delivery. Subject to your consent (see section 3.5), certain data (advertising identifier, IP address, ad interactions) is <strong>shared</strong> with AdMob for personalised advertising purposes.</p><p>We may also share data where the law requires it.</p>',

    'pp.s6t': '6. Data retention',
    'pp.s6b': '<ul><li><strong>Google account data</strong>: kept for as long as you use the app. Deleted on request.</li><li><strong>Multiplayer data</strong>: session data is deleted at the end of each game.</li><li><strong>Usage statistics (Firebase Analytics)</strong>: 14 months maximum.</li><li><strong>Crash reports (Firebase Crashlytics)</strong>: 90 days.</li><li><strong>Local data</strong>: deleted when you uninstall the app.</li><li><strong>Purchase history</strong>: kept by Google Play Billing under its own policy.</li></ul>',

    'pp.s7t': '7. Your rights (GDPR)',
    'pp.s7b': '<p>If you live in the European Union, you have the following rights regarding your personal data:</p><ul><li><strong>Right of access</strong>: obtain a copy of your data</li><li><strong>Right to rectification</strong>: correct inaccurate data</li><li><strong>Right to erasure</strong>: request deletion of your data</li><li><strong>Right to object</strong>: object to certain processing</li><li><strong>Right to portability</strong>: receive your data in a readable format</li></ul><p>To exercise these rights, contact us at: <a href="mailto:' + MAIL + '">' + MAIL + '</a></p><p>You also have the right to lodge a complaint with the data protection authority in your country.</p>',

    'pp.s8t': '8. Data protection',
    'pp.s8b': '<p>We implement appropriate technical and organisational measures to protect your data against unauthorised access, alteration, disclosure or destruction. Communications with Firebase are encrypted via TLS/HTTPS.</p>',

    'pp.s9t': '9. Children’s privacy',
    'pp.s9b': '<p>TchekCard is intended for players aged 12 and over (PEGI 12 rating — "Simulated Gambling" descriptor, due to the competitive staking system using virtual currency). The app is not designed for children under 13 and we do not knowingly collect personal data from them.</p><p>The multiplayer staking system uses exclusively internal virtual currency (coins) which has no real-world value, cannot be converted into real money and cannot be exchanged for goods or services outside the app.</p><p>If you are a parent and believe your child has provided us with personal data, contact us at <a href="mailto:' + MAIL + '">' + MAIL + '</a> to request its immediate deletion.</p>',

    'pp.s10t': '10. Changes to this policy',
    'pp.s10b': '<p>We may update this privacy policy at any time. The "last updated" date at the top of this page indicates the version in force. We encourage you to check this page regularly to stay informed of any changes.</p>',

    'pp.s11t': '11. Contact',
    'pp.s11b': '<p>For any question about this privacy policy or the processing of your data:</p>',
    'pp.s11box': '<strong>Email:</strong> <a href="mailto:' + MAIL + '">' + MAIL + '</a><br/><strong>Website:</strong> <a href="https://knm-academy.github.io/KNM-Academy/">knm-academy.github.io/KNM-Academy</a><br/><strong>Studio:</strong> KNM Academy',

    'del.title': 'Account and data deletion — TchekCard | KNM Academy',
    'del.desc': 'How to delete your TchekCard account and the associated data.',
    'del.badge': 'Legal',
    'del.h1': '<span class="gold">Account and data</span> deletion',
    'del.updated': 'TchekCard app, published by KNM Academy — Last updated: 15 July 2026',
    'del.summary': '<strong>Summary:</strong> you can delete your <strong>TchekCard</strong> account and the associated data at any time, either directly from the app or by email. Requests are handled within 30 days at most.',

    'del.s1t': '1. From the app (recommended)',
    'del.s1b': '<ol><li>Open <strong>TchekCard</strong> on your device</li><li>Go to <strong>Settings</strong> (gear icon)</li><li>Tap <strong>Account Centre — Manage or delete my data</strong></li><li>Your email app opens with a <strong>pre-filled deletion request</strong> (subject: "Data deletion request — TchekCard") — add your account identifier and send it</li></ol><p>Deletion is then carried out by our team and confirmed by email, within <strong>30 days</strong> at most.</p><p>If you were signed in with Google, you can also sign out and revoke TchekCard’s access to your Google account at <a href="https://myaccount.google.com/connections" target="_blank" rel="noopener">myaccount.google.com/connections</a>.</p>',

    'del.s2t': '2. By email',
    'del.s2b': '<p>Send your request to <a href="mailto:' + MAIL + '?subject=TchekCard%20account%20deletion">' + MAIL + '</a> with the subject "<strong>TchekCard account deletion</strong>", from the email address linked to your Google account (or stating your in-game nickname if you played without a Google account).</p><p>We confirm the deletion by return email, within <strong>30 days</strong> at most.</p>',

    'del.s3t': '3. Data that is deleted',
    'del.s3b': '<ul><li><strong>Account data</strong>: the link to your Google account (display name, email address, profile picture), Firebase identifier</li><li><strong>Multiplayer data</strong>: the nickname and avatar used online, plus any game data still associated with your identifier (game sessions are in any case deleted automatically at the end of each game)</li></ul><p>Your progression (level, coins, diamonds, skins) is stored <strong>locally on your device</strong>: it is not held on our servers and disappears when you uninstall the app.</p>',

    'del.s4t': '4. Data that is retained (limited periods)',
    'del.s4b': '<ul><li><strong>Crash reports (Firebase Crashlytics)</strong>: anonymous, automatically purged within 90 days</li><li><strong>Aggregated usage statistics (Firebase Analytics)</strong>: anonymised, not attributable to your identity, kept for a maximum of 14 months</li><li><strong>Purchase history</strong>: kept by Google Play Billing under Google’s policy (accounting obligations) — KNM Academy stores no payment information</li><li><strong>Local progression</strong>: stored only on your device, deleted when you uninstall the app</li></ul>',

    'del.s5t': '5. Questions',
    'del.s5b': '<p>To find out more about the data we process, see our <a href="privacy-policy.html">privacy policy</a>, or write to us at <a href="mailto:' + MAIL + '">' + MAIL + '</a>.</p>',
  },

  /* ══════════════════════════════════════════════════════════════ DEUTSCH ══ */
  de: {
    'lang.name': 'Deutsch',

    'nav.apps': 'Apps',
    'nav.about': 'Über uns',
    'nav.support': 'Support',
    'nav.privacy': 'Datenschutz',
    'nav.contact': 'Kontakt',

    'footer.brand': 'Unabhängiges Android-Studio. Premium-Spiele mit Sorgfalt entwickelt, für alle zugänglich.',
    'footer.colApps': 'Apps',
    'footer.colLegal': 'Rechtliches &amp; Support',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.delete': 'Kontolöschung',
    'footer.support': 'Support',
    'footer.contact': 'Kontakt',
    'footer.home': 'Startseite',
    'footer.rights': '© 2026 KNM Academy · Alle Rechte vorbehalten',
    'footer.made': 'Mit ❤️ für Android gemacht',
    'footer.short': '© 2026 KNM Academy',

    'home.title': 'KNM Academy — Mobile-Gaming-Studio',
    'home.desc': 'KNM Academy — Android-Entwicklungsstudio. Entdecke TchekCard, das strategische Multiplayer-Kartenspiel.',
    'home.ogDesc': 'Premium-Apps für Android. Entdecke TchekCard, das Multiplayer-Kartenspiel.',

    'home.badge': '🎮 Mobile-Gaming-Studio',
    'home.heroTitle': '<span>KNM Academy</span><br/>Mobile-Gaming-Studio',
    'home.tagline': 'Vom Code zu Google Play — Spiele, die bleiben.',
    'home.b1': '🎮 Multiplayer in Echtzeit',
    'home.b2': '🎨 Premium-Design &amp; flüssige Animationen',
    'home.b3': '🏆 Fortschritt, Missionen &amp; Shop',
    'home.availOn': 'Erhältlich bei',
    'home.compat': 'Kompatibel',
    'home.ctaApps': '🚀 Unsere Apps ansehen',
    'home.ctaSupport': 'Support',
    'home.badgeMulti': 'Multiplayer',

    'home.statLaunch': 'Gestartet',
    'home.statModes': 'Spielmodi',
    'home.statPlatform': 'Plattform',
    'home.statSignature': 'Signature-Modus',

    'home.appsEyebrow': 'Unsere Apps',
    'home.appsTitle': 'Erhältlich bei <span class="gold">Google Play</span>',
    'home.appsSub': '1 App verfügbar · Android · Google Play',

    'home.tcGenre': 'Strategisches Kartenspiel',
    'home.tcBadge': 'Verfügbar',
    'home.tcDesc': 'Multiplayer-Kartenspiel in Echtzeit. Tritt gegen KI-Gegner oder andere Spieler an — 1v1, 1v2, 1v3 oder 1v4. Rufe TCHEK im richtigen Moment und gewinne!',
    'home.tagStrategy': 'Strategie',
    'home.tagMulti': 'Multiplayer',
    'home.tagSolo': 'Einzelspieler',
    'home.tagCards': 'Karten',
    'home.tagAndroid': 'Android',
    'home.free': '✓ Kostenlos',
    'home.iap': 'Optionale In-App-Käufe',
    'home.getOn': 'Jetzt bei',
    'home.getAria': 'TchekCard bei Google Play herunterladen',

    'home.soonName': 'Nächstes Projekt',
    'home.soonBadge': 'Bald',
    'home.soonDesc': 'Da kommt etwas. Unser nächstes Spiel ist in der Konzeption — Design, Gameplay und ein paar Überraschungen.',
    'home.notify': '🔔 Zum Start benachrichtigen →',
    'home.notifyHref': 'mailto:' + MAIL + '?subject=' + encodeURIComponent('Benachrichtigung — nächstes Spiel von KNM Academy'),

    'home.aboutEyebrow': 'Über uns',
    'home.aboutTitle': 'Begeistert von <span class="gold" style="white-space:nowrap;">Mobile Gaming</span>',
    'home.aboutP1': 'KNM Academy ist ein unabhängiges Studio, spezialisiert auf hochwertige Android-Apps. Jedes Projekt entsteht mit besonderem Augenmerk auf Design, Flüssigkeit und Spielerlebnis.',
    'home.aboutP2': 'Unser Ziel: Spielerlebnisse auf Augenhöhe mit den großen Produktionen — und für alle zugänglich.',
    'home.features': '<li>Premium-Dark-Design &amp; flüssige Animationen</li><li>Multiplayer in Echtzeit über Firebase</li><li>Fortschritt, Missionen und In-App-Shop</li><li>Aktiver Support und regelmäßige Updates</li>',
    'home.devRole': 'Mobile-Game-Entwickler · Android',
    'home.devBio': 'Gründer &amp; Solo-Entwickler',

    'home.contactEyebrow': 'Kontakt',
    'home.ctaTitle': 'Eine Frage? <span class="gold">Schreib uns.</span>',
    'home.ctaDesc': 'Support, Fehler, Partnerschaft oder Vorschlag — Antwort innerhalb von 48 Stunden.',
    'home.helpCenter': 'Hilfecenter →',

    'sup.title': 'Support — KNM Academy',
    'sup.desc': 'Support und Hilfe zu den Apps von KNM Academy. TchekCard-FAQ, Kontakt, Fehlermeldung.',
    'sup.badge': 'Support',
    'sup.h1': 'Wie können wir <span class="gold">dir helfen?</span>',
    'sup.lead': 'Finde schnelle Antworten oder wende dich an unser Team — Antwort innerhalb von 48 Stunden.',

    'sup.bugT': 'Fehler melden',
    'sup.bugP': 'Ein technisches Problem? Eine Karte, die verschwindet? Sag uns Bescheid, wir beheben es schnell.',
    'sup.bugBtn': 'Melden →',
    'sup.bugHref': 'mailto:' + MAIL + '?subject=' + encodeURIComponent('TchekCard Fehler'),

    'sup.ideaT': 'Feedback &amp; Vorschläge',
    'sup.ideaP': 'Du hast eine Idee, wie TchekCard besser wird? Wir hören der Community zu.',
    'sup.ideaBtn': 'Schreiben →',
    'sup.ideaHref': 'mailto:' + MAIL + '?subject=' + encodeURIComponent('TchekCard Vorschlag'),

    'sup.dataT': 'Personenbezogene Daten',
    'sup.dataP': 'Auskunft, Berichtigung oder Löschung deiner Daten beantragen (DSGVO).',
    'sup.dataBtn': 'Meine Daten löschen →',

    'sup.faqEyebrow': 'FAQ',
    'sup.faqTitle': 'Häufige Fragen — <span class="gold">TchekCard</span>',
    'sup.faqSub': 'Klicke auf eine Frage, um die Antwort anzuzeigen.',

    'sup.q1': 'Wie spiele ich TchekCard?',
    'sup.a1': 'TchekCard ist ein Kartenspiel, inspiriert von den Klassikern. Ziel ist es, die eigene Hand vor den Gegnern zu leeren. Lege in deinem Zug eine Karte, die in Farbe oder Wert zur obersten Karte des Ablagestapels passt. Wenn dir nur noch 1 Karte bleibt, drücke die <strong>TCHEK</strong>-Taste, um sie anzusagen — sonst musst du Strafkarten ziehen!',
    'sup.q2': 'Wie funktioniert der Multiplayer-Modus?',
    'sup.a2': 'Der Multiplayer-Modus nutzt Firebase für Partien in Echtzeit. Melde dich mit deinem Google-Konto an, erstelle oder betritt einen Raum und lade bis zu 3 weitere Spieler ein. Eine Internetverbindung ist erforderlich. Verfügbar sind 1v1, 1v2 und 1v3.',
    'sup.q3': 'Wofür sind Münzen und Diamanten da?',
    'sup.a3': '<strong>Münzen 🪙</strong> dienen dem Beitritt zu Partien (Einsatz). Du verdienst sie durch Spielen, durch das Abschließen von Missionen und durch tägliches Anmelden.<br/><br/><strong>Diamanten 💎</strong> dienen dem Kauf von Karten-Skins und individuellen Regeln im Shop. Du erhältst sie über Missionen oder als optionalen Kauf.',
    'sup.q4': 'Ich habe keine Münzen mehr, was nun?',
    'sup.a4': 'Es gibt mehrere Wege zu neuen Münzen: schließe die Tagesmissionen ab, hole dir deine tägliche Anmeldebelohnung, beende Partien (auch bei einer Niederlage bekommst du etwas) oder kaufe im Shop ein optionales Münzpaket.',
    'sup.q5': 'Der 1v4-Modus mit Premium-Regeln funktioniert nicht?',
    'sup.a5': 'Achte darauf, die Premium-Regeln <strong>vor</strong> dem Start der Partie zu aktivieren (nicht währenddessen). Gehe in den Shop → Reiter Regeln, kaufe und aktiviere die gewünschten Regeln und starte dann eine neue Partie. Aktive Regeln werden automatisch gespeichert.',
    'sup.q6': 'Wie lösche ich mein Konto und meine Daten?',
    'sup.a6': 'Öffne in der App <strong>Einstellungen → Kontocenter</strong> oder schreibe an <a href="mailto:' + MAIL + '">' + MAIL + '</a>. Das vollständige Vorgehen steht auf unserer <a href="delete-account.html">Seite zur Kontolöschung</a>. Anfragen werden innerhalb von höchstens 30 Tagen bearbeitet.',
    'sup.q7': 'Die App stürzt ab oder schließt sich von selbst?',
    'sup.a7': 'Versuche zuerst, den App-Cache zu leeren (Android-Einstellungen → Apps → TchekCard → Cache leeren) und starte die App neu. Bleibt das Problem bestehen, melde es mit deiner Android-Version und deinem Gerätemodell an <a href="mailto:' + MAIL + '?subject=TchekCard%20Absturz">' + MAIL + '</a>.',
    'sup.q8': 'Wie schalte ich Musik oder Vibration aus?',
    'sup.a8': 'Tippe auf das Symbol ⚙️ (Zahnrad) auf dem Startbildschirm oder während einer Partie. Im Einstellungsfenster kannst du <strong>Musik</strong>, <strong>Soundeffekte</strong> und <strong>Vibration</strong> unabhängig voneinander ein- und ausschalten. Diese Einstellungen werden automatisch gespeichert.',
    'sup.q9': 'Meine Käufe werden nicht angezeigt?',
    'sup.a9': 'Prüfe deine Internetverbindung und starte die App neu. Besteht das Problem nach 5 Minuten weiter: Google Play synchronisiert Käufe automatisch. Falls es dennoch bestehen bleibt, wende dich mit deinem Google-Play-Kaufbeleg an <a href="mailto:' + MAIL + '?subject=TchekCard%20fehlender%20Kauf">' + MAIL + '</a>.',

    'sup.contactH3': 'Keine Antwort gefunden?',
    'sup.contactP': 'Ich antworte in der Regel innerhalb von 24 bis 48 Werkstunden.',
    'sup.contactBtn': 'Support kontaktieren',

    'pp.title': 'Datenschutzerklärung — KNM Academy',
    'pp.desc': 'Datenschutzerklärung von KNM Academy und der App TchekCard.',
    'pp.badge': 'Rechtliches',
    'pp.h1': '<span class="gold">Datenschutz</span>erklärung',
    'pp.updated': 'Gültig für alle Apps von KNM Academy — Letzte Aktualisierung: 15. Juni 2026',
    'pp.summary': '<strong>Kurzfassung:</strong> KNM Academy verkauft deine personenbezogenen Daten nicht. Wir erheben nur die Informationen, die für den Betrieb der App zwingend erforderlich sind. Du kannst jederzeit die Löschung deiner Daten verlangen.',
    'pp.tocTitle': 'Inhalt',
    'pp.toc': '<li><a href="#section-1">Wer wir sind</a></li><li><a href="#section-2">Geltungsbereich</a></li><li><a href="#section-3">Erhobene Daten</a></li><li><a href="#section-4">Zwecke der Verarbeitung</a></li><li><a href="#section-5">Weitergabe von Daten</a></li><li><a href="#section-6">Speicherdauer</a></li><li><a href="#section-7">Deine Rechte (DSGVO)</a></li><li><a href="#section-8">Datensicherheit</a></li><li><a href="#section-9">Datenschutz für Kinder</a></li><li><a href="#section-10">Änderungen dieser Erklärung</a></li><li><a href="#section-11">Kontakt</a></li>',

    'pp.s1t': '1. Wer wir sind',
    'pp.s1b': '<p>KNM Academy ist ein unabhängiges Entwicklungsstudio für mobile Anwendungen. Wir entwickeln und veröffentlichen Android-Apps im Google Play Store.</p><p><strong>Kontakt:</strong> <a href="mailto:' + MAIL + '">' + MAIL + '</a></p><p><strong>Website:</strong> <a href="https://knm-academy.github.io/KNM-Academy/">knm-academy.github.io/KNM-Academy</a></p><p><strong>Quellcode:</strong> <a href="https://github.com/KNM-Academy" target="_blank" rel="noopener">github.com/KNM-Academy</a></p>',

    'pp.s2t': '2. Geltungsbereich',
    'pp.s2b': '<p>Diese Datenschutzerklärung gilt für sämtliche von KNM Academy veröffentlichten Apps, insbesondere <strong>TchekCard</strong>, sowie für diese Website.</p>',

    'pp.s3t': '3. Erhobene Daten',
    'pp.s3b': '<h3>3.1 Identifikationsdaten (optional)</h3><p>Wenn du dich mit deinem Google-Konto anmeldest (optionale Funktion), greifen wir über <strong>Google Sign-In</strong> auf folgende Informationen zu:</p><ul><li>Anzeigename (Google-Nutzername)</li><li>E-Mail-Adresse</li><li>Profilbild (öffentliche URL)</li><li>Eindeutige Google-Kennung (zur Identifikation in Multiplayer-Partien)</li></ul><p>Diese Daten werden <strong>ausschließlich</strong> dazu verwendet, dein Profil in der App anzuzeigen und dich in Multiplayer-Sitzungen zu identifizieren. Sie werden nicht an Dritte weitergegeben.</p><h3>3.2 Spieldaten</h3><p>Im Multiplayer-Modus werden folgende Daten über die <strong>Firebase Realtime Database</strong> (Google, Hosting in europe-west1) übertragen und gespeichert:</p><ul><li>Deine Spielerkennung (Spitzname)</li><li>Stand der laufenden Partie (gespielte Karten, Punktestand, Zug)</li><li>Partieergebnisse (Siege/Niederlagen)</li></ul><p>Diese Daten sind temporär und an die Spielsitzungen gebunden. Sie enthalten keine sensiblen personenbezogenen Informationen.</p><h3>3.3 Fortschrittsdaten (lokale Speicherung)</h3><p>Dein Fortschritt in der App (Level, XP, Münzen, Diamanten, Missionen, freigeschaltete Skins, Einstellungen für Ton/Musik/Vibration) wird <strong>lokal</strong> auf deinem Gerät über Android DataStore und SharedPreferences gespeichert. Diese Daten verlassen dein Gerät nicht, außer im Rahmen des Multiplayer-Modus.</p><h3>3.4 In-App-Käufe</h3><p>In-App-Käufe werden über <strong>Google Play Billing</strong> abgewickelt. KNM Academy erhebt und speichert keine Zahlungsinformationen. Alle Transaktionen werden direkt von Google gemäß dessen Datenschutzerklärung verarbeitet: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p><h3>3.5 Werbung (Google AdMob)</h3><p>TchekCard nutzt <strong>Google AdMob</strong> zur Anzeige von Werbung, insbesondere belohnte Videoanzeigen (Werbung ansehen, um Münzen zu erhalten) und Interstitial-Anzeigen (zwischen den Partien).</p><p>AdMob kann folgende Daten erheben, um relevante Werbung auszuliefern:</p><ul><li>Android-Werbe-ID (GAID / Advertising ID)</li><li>IP-Adresse und Netzwerkdaten</li><li>Interaktionen mit Werbung (Klicks, Aufrufe)</li></ul><p><strong>Einwilligung (DSGVO):</strong> wenn du im Europäischen Wirtschaftsraum, im Vereinigten Königreich oder in der Schweiz wohnst, wird dir beim ersten Start ein offizieller Google-Einwilligungsdialog (UMP) angezeigt. Du kannst die Weitergabe deiner Werbedaten annehmen, ablehnen oder anpassen, ohne den Zugang zum Spiel zu verlieren.</p><p>Du kannst die Personalisierung von Werbung jederzeit in den Einstellungen deines Android-Geräts deaktivieren: <em>Einstellungen → Google → Werbung → Personalisierte Werbung deaktivieren</em>. Die Datenschutzerklärung von Google AdMob findest du unter: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p><h3>3.6 Nutzungsstatistiken (Firebase Analytics)</h3><p>TchekCard nutzt <strong>Firebase Analytics</strong>, um anonymisierte Nutzungsstatistiken zu erheben — einzig zu dem Zweck, das Spielerlebnis zu verbessern. Keine Daten werden mit deiner realen Identität verknüpft.</p><p>Folgende Ereignisse werden erfasst:</p><ul><li>Beginn und Ende einer Partie (gespielter Modus, Dauer, Ergebnis, Anzahl der Züge)</li><li>Versuche von In-App-Käufen (ohne Zahlungsinformationen)</li><li>Ansehen belohnter Werbung</li><li>Fortschritt im Tutorial</li><li>Gespielte Karten (Kartentyp, ohne persönlichen Kontext)</li><li>Tägliche Anmeldungen und Serienfortschritt (Streak)</li><li>Wartezeit im Matchmaking</li></ul><p>Firebase erhebt zudem automatisch technische Metadaten (Gerätemodell, Android-Version, Sprache, ungefähres Land). Diese Daten werden gemäß den Richtlinien von Firebase Analytics höchstens 14 Monate gespeichert.</p><h3>3.7 Absturzdiagnose (Firebase Crashlytics)</h3><p>Stürzt die App ab, erhebt <strong>Firebase Crashlytics</strong> automatisch technische Daten, damit wir Fehler beheben können:</p><ul><li>Technische Fehlerspur (Stack Trace)</li><li>Gerätezustand zum Zeitpunkt des Absturzes (Speicher, OS-Version, Modell)</li><li>Anonyme Installationskennung (Firebase Installation ID)</li></ul><p>Es werden keine identifizierenden personenbezogenen Daten übermittelt. Absturzberichte werden 90 Tage aufbewahrt und danach automatisch gelöscht.</p><h3>3.8 Weitere technische Daten</h3><p>Firebase kann automatisch bestimmte minimale technische Daten erheben, um den ordnungsgemäßen Betrieb der Dienste sicherzustellen (Firebase-Instanzkennung, Netzwerkprotokolle).</p>',

    'pp.s4t': '4. Zwecke der Verarbeitung',
    'pp.s4b': '<p>Wir verwenden deine Daten zu folgenden Zwecken:</p><ul><li>Dich in Multiplayer-Partien in Echtzeit zu identifizieren</li><li>Deinen Spielfortschritt zu sichern und zu synchronisieren</li><li>Deine In-App-Käufe abzuwickeln (an Google Play delegiert)</li><li>Den ordnungsgemäßen und sicheren Betrieb der Dienste zu gewährleisten</li><li>Deine Supportanfragen zu beantworten</li></ul><p><strong>KNM Academy</strong> nutzt deine Daten nicht selbst zu Profiling- oder Marketingzwecken. Die Auslieferung personalisierter Werbung erfolgt durch <strong>Google AdMob</strong>, einen unabhängigen Dritten, nach Maßgabe deiner Einwilligung (siehe Abschnitt 3.5).</p>',

    'pp.s5t': '5. Weitergabe von Daten',
    'pp.s5b': '<p>Wir verkaufen oder vermieten deine personenbezogenen Daten nicht. Zu unterscheiden sind zwei Arten der Übermittlung:</p><h3>5.1 Auftragsverarbeiter (Verarbeitung in unserem Auftrag)</h3><p>Die folgenden Dienste verarbeiten Daten <strong>im Auftrag von KNM Academy</strong>; dies gilt als <strong>Erhebung</strong> und nicht als Weitergabe an einen unabhängigen Dritten:</p><ul><li><strong>Google / Firebase</strong>: Multiplayer-Hosting (Realtime Database), Authentifizierung (Auth), anonymisierte Statistiken (Analytics) und Absturzdiagnose (Crashlytics)</li><li><strong>Google Play Billing</strong>: Abwicklung der In-App-Käufe</li></ul><p>Für Firebase gilt die Datenschutzerklärung von Google: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a>.</p><h3>5.2 Weitergabe an unabhängige Dritte</h3><p><strong>Google AdMob</strong> handelt bei der Auslieferung von Werbung als unabhängiger Dritter. Nach Maßgabe deiner Einwilligung (siehe Abschnitt 3.5) werden bestimmte Daten (Werbe-ID, IP-Adresse, Interaktionen mit Werbung) zum Zweck personalisierter Werbung an AdMob <strong>weitergegeben</strong>.</p><p>Darüber hinaus können wir Daten weitergeben, wenn wir gesetzlich dazu verpflichtet sind.</p>',

    'pp.s6t': '6. Speicherdauer',
    'pp.s6b': '<ul><li><strong>Daten des Google-Kontos</strong>: gespeichert, solange du die App nutzt. Auf Anfrage gelöscht.</li><li><strong>Multiplayer-Daten</strong>: Sitzungsdaten werden am Ende jeder Partie gelöscht.</li><li><strong>Nutzungsstatistiken (Firebase Analytics)</strong>: höchstens 14 Monate.</li><li><strong>Absturzberichte (Firebase Crashlytics)</strong>: 90 Tage.</li><li><strong>Lokale Daten</strong>: gelöscht, sobald du die App deinstallierst.</li><li><strong>Kaufhistorie</strong>: von Google Play Billing gemäß dessen eigener Richtlinie aufbewahrt.</li></ul>',

    'pp.s7t': '7. Deine Rechte (DSGVO)',
    'pp.s7b': '<p>Wenn du in der Europäischen Union wohnst, stehen dir hinsichtlich deiner personenbezogenen Daten folgende Rechte zu:</p><ul><li><strong>Auskunftsrecht</strong>: eine Kopie deiner Daten erhalten</li><li><strong>Recht auf Berichtigung</strong>: unrichtige Daten korrigieren lassen</li><li><strong>Recht auf Löschung</strong>: die Löschung deiner Daten verlangen</li><li><strong>Widerspruchsrecht</strong>: bestimmten Verarbeitungen widersprechen</li><li><strong>Recht auf Datenübertragbarkeit</strong>: deine Daten in einem lesbaren Format erhalten</li></ul><p>Zur Ausübung dieser Rechte wende dich an: <a href="mailto:' + MAIL + '">' + MAIL + '</a></p><p>Außerdem hast du das Recht, dich bei der Datenschutzaufsichtsbehörde deines Landes zu beschweren.</p>',

    'pp.s8t': '8. Datensicherheit',
    'pp.s8b': '<p>Wir setzen geeignete technische und organisatorische Maßnahmen ein, um deine Daten vor unbefugtem Zugriff, Veränderung, Offenlegung oder Zerstörung zu schützen. Die Kommunikation mit Firebase ist über TLS/HTTPS verschlüsselt.</p>',

    'pp.s9t': '9. Datenschutz für Kinder',
    'pp.s9b': '<p>TchekCard richtet sich an ein Publikum ab 12 Jahren (Einstufung PEGI 12 — Deskriptor „Simulated Gambling“ aufgrund des kompetitiven Einsatzsystems mit virtueller Währung). Die App ist nicht für Kinder unter 13 Jahren konzipiert, und wir erheben wissentlich keine personenbezogenen Daten von ihnen.</p><p>Das Einsatzsystem im Multiplayer verwendet ausschließlich interne virtuelle Währung (Münzen). Diese hat keinen realen Wert, lässt sich nicht in echtes Geld umwandeln und kann außerhalb der App nicht gegen Waren oder Dienstleistungen eingetauscht werden.</p><p>Wenn du Elternteil bist und vermutest, dass dein Kind uns personenbezogene Daten übermittelt hat, wende dich an <a href="mailto:' + MAIL + '">' + MAIL + '</a>, um deren sofortige Löschung zu verlangen.</p>',

    'pp.s10t': '10. Änderungen dieser Erklärung',
    'pp.s10b': '<p>Wir können diese Datenschutzerklärung jederzeit aktualisieren. Das Datum der „letzten Aktualisierung“ oben auf dieser Seite gibt die jeweils geltende Fassung an. Wir empfehlen dir, diese Seite regelmäßig aufzurufen, um über etwaige Änderungen informiert zu bleiben.</p>',

    'pp.s11t': '11. Kontakt',
    'pp.s11b': '<p>Bei Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung deiner Daten:</p>',
    'pp.s11box': '<strong>E-Mail:</strong> <a href="mailto:' + MAIL + '">' + MAIL + '</a><br/><strong>Website:</strong> <a href="https://knm-academy.github.io/KNM-Academy/">knm-academy.github.io/KNM-Academy</a><br/><strong>Studio:</strong> KNM Academy',

    'del.title': 'Konto- und Datenlöschung — TchekCard | KNM Academy',
    'del.desc': 'So löschst du dein TchekCard-Konto und die zugehörigen Daten.',
    'del.badge': 'Rechtliches',
    'del.h1': '<span class="gold">Konto- und Daten</span>löschung',
    'del.updated': 'App TchekCard, herausgegeben von KNM Academy — Letzte Aktualisierung: 15. Juli 2026',
    'del.summary': '<strong>Kurzfassung:</strong> du kannst dein <strong>TchekCard</strong>-Konto und die zugehörigen Daten jederzeit löschen — direkt in der App oder per E-Mail. Anfragen werden innerhalb von höchstens 30 Tagen bearbeitet.',

    'del.s1t': '1. In der App (empfohlen)',
    'del.s1b': '<ol><li>Öffne <strong>TchekCard</strong> auf deinem Gerät</li><li>Gehe zu <strong>Einstellungen</strong> (Zahnrad-Symbol)</li><li>Tippe auf <strong>Kontocenter — Meine Daten verwalten oder löschen</strong></li><li>Deine E-Mail-App öffnet sich mit einer <strong>vorausgefüllten Löschanfrage</strong> (Betreff: „Antrag auf Datenlöschung — TchekCard“) — ergänze deine Kontokennung und sende sie ab</li></ol><p>Die Löschung wird anschließend von unserem Team durchgeführt und per E-Mail bestätigt, spätestens innerhalb von <strong>30 Tagen</strong>.</p><p>Wenn du mit Google angemeldet warst, kannst du dich außerdem abmelden und den Zugriff von TchekCard auf dein Google-Konto widerrufen unter <a href="https://myaccount.google.com/connections" target="_blank" rel="noopener">myaccount.google.com/connections</a>.</p>',

    'del.s2t': '2. Per E-Mail',
    'del.s2b': '<p>Sende deine Anfrage an <a href="mailto:' + MAIL + '?subject=TchekCard%20Kontol%C3%B6schung">' + MAIL + '</a> mit dem Betreff „<strong>TchekCard Kontolöschung</strong>“, und zwar von der E-Mail-Adresse, die mit deinem Google-Konto verknüpft ist (oder unter Angabe deines Spielernamens, falls du ohne Google-Konto gespielt hast).</p><p>Wir bestätigen die Löschung per Antwort-E-Mail, spätestens innerhalb von <strong>30 Tagen</strong>.</p>',

    'del.s3t': '3. Gelöschte Daten',
    'del.s3b': '<ul><li><strong>Kontodaten</strong>: die Verknüpfung mit deinem Google-Konto (Anzeigename, E-Mail-Adresse, Profilbild), Firebase-Kennung</li><li><strong>Multiplayer-Daten</strong>: online verwendeter Spitzname und Avatar sowie sämtliche noch mit deiner Kennung verknüpften Partiedaten (Spielsitzungen werden ohnehin am Ende jeder Partie automatisch gelöscht)</li></ul><p>Dein Fortschritt (Level, Münzen, Diamanten, Skins) wird <strong>lokal auf deinem Gerät</strong> gespeichert: Er liegt nicht auf unseren Servern und verschwindet, wenn du die App deinstallierst.</p>',

    'del.s4t': '4. Aufbewahrte Daten (begrenzte Dauer)',
    'del.s4b': '<ul><li><strong>Absturzberichte (Firebase Crashlytics)</strong>: anonym, automatisch innerhalb von 90 Tagen gelöscht</li><li><strong>Aggregierte Nutzungsstatistiken (Firebase Analytics)</strong>: anonymisiert, deiner Identität nicht zuordenbar, höchstens 14 Monate gespeichert</li><li><strong>Kaufhistorie</strong>: von Google Play Billing gemäß der Richtlinie von Google aufbewahrt (buchhalterische Pflichten) — KNM Academy speichert dort keinerlei Zahlungsinformationen</li><li><strong>Lokaler Fortschritt</strong>: ausschließlich auf deinem Gerät gespeichert, gelöscht beim Deinstallieren der App</li></ul>',

    'del.s5t': '5. Fragen',
    'del.s5b': '<p>Mehr über die Daten, die wir verarbeiten, erfährst du in unserer <a href="privacy-policy.html">Datenschutzerklärung</a>, oder schreibe uns an <a href="mailto:' + MAIL + '">' + MAIL + '</a>.</p>',
  },
};

/* ══════════════════════════════════════════════════════════════════════════
   Moteur
   ══════════════════════════════════════════════════════════════════════════ */

const SUPPORTED = ['fr', 'en', 'de'];
const STORE_KEY = 'knm-lang';

function pickLanguage() {
  const asked = new URLSearchParams(location.search).get('lang');
  if (asked && SUPPORTED.includes(asked)) return asked;

  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch (e) { /* navigation privée : on continue sans mémoire */ }

  for (const tag of (navigator.languages || [navigator.language || ''])) {
    const base = String(tag).slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(base)) return base;
  }
  return 'fr';
}

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.fr;
  const fallback = I18N.fr;
  const t = (key) => (key in dict ? dict[key] : fallback[key]);

  document.documentElement.lang = lang;

  // Contenu : data-i18n="clé"
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = t(el.getAttribute('data-i18n'));
    if (value !== undefined) el.innerHTML = value;
  });

  // Attributs : data-i18n-attr="content:home.desc, aria-label:home.getAria"
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.getAttribute('data-i18n-attr').split(',').forEach((pair) => {
      const idx = pair.indexOf(':');
      if (idx < 0) return;
      const attr = pair.slice(0, idx).trim();
      const value = t(pair.slice(idx + 1).trim());
      if (value !== undefined) el.setAttribute(attr, value);
    });
  });

  // Titre de l'onglet
  const titleKey = document.body.getAttribute('data-title-key');
  if (titleKey && t(titleKey) !== undefined) document.title = t(titleKey);

  // Lien Play Store dans la langue courante
  document.querySelectorAll('[data-play-link]').forEach((el) => {
    el.setAttribute('href', PLAY_URL + '&hl=' + lang);
  });

  // État visuel du sélecteur
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const on = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}

function setLanguage(lang) {
  if (!SUPPORTED.includes(lang)) return;
  try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* sans mémoire */ }

  // L'URL reflète la langue : le lien reste partageable tel quel.
  const url = new URL(location.href);
  url.searchParams.set('lang', lang);
  history.replaceState(null, '', url);

  applyLanguage(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(pickLanguage());
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });
});
