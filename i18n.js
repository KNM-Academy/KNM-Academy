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
// Le responsable du traitement : KNM Academy est un nom commercial, pas une societe.
const OWNER = 'Moise Kamdem';

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
    'sup.a3': "Les <strong>pièces 🪙</strong> sont la monnaie courante du jeu. Elles paient la <strong>mise d'entrée</strong> des parties, les <strong>skins de table</strong> et les <strong>recharges d'usage</strong> des règles.<br/><br/>Les <strong>diamants 💎</strong> servent à une seule chose : <strong>débloquer définitivement</strong> une règle personnalisée.<br/><br/>⚠️ Les skins ne s'achètent donc <strong>pas</strong> avec des diamants, mais avec des pièces. Les deux monnaies se gagnent en jouant, via les missions, la connexion quotidienne et la roue — ou s'achètent séparément.",
    'sup.q4': "Je n'ai plus de pièces, que faire ?",
    'sup.a4': 'Plusieurs façons de récupérer des pièces : complétez les missions journalières, réclamez votre récompense de connexion quotidienne, faites tourner la roue quotidienne (gratuite, et un tour de plus en regardant une publicité), terminez des parties (même en perdant vous gagnez un peu), ou achetez un pack de pièces optionnel dans la boutique.',
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
    'pp.updated': "Applicable aux applications KNM Academy — Dernière mise à jour : 5 octobre 2026",
    'pp.summary': '<strong>Résumé :</strong> KNM Academy ne vend pas vos données personnelles. Nous ne collectons que les informations strictement nécessaires au fonctionnement de l’application. Vous pouvez demander la suppression de vos données à tout moment.',
    'pp.tocTitle': 'Sommaire',
    'pp.toc': '<li><a href="#section-1">Qui sommes-nous ?</a></li><li><a href="#section-2">Champ d’application</a></li><li><a href="#section-3">Données collectées</a></li><li><a href="#section-4">Finalités du traitement</a></li><li><a href="#section-5">Partage des données</a></li><li><a href="#section-6">Conservation des données</a></li><li><a href="#section-7">Vos droits (RGPD)</a></li><li><a href="#section-8">Protection des données</a></li><li><a href="#section-9">Confidentialité des enfants</a></li><li><a href="#section-10">Modifications de cette politique</a></li><li><a href="#section-11">Contact</a></li>',

    'pp.s1t': '1. Qui sommes-nous ?',
    'pp.s1b': '<p>KNM Academy est le nom sous lequel <strong>' + OWNER + '</strong>, développeur indépendant, conçoit et publie ses applications mobiles pour Android et iOS. KNM Academy n’est pas une société : ' + OWNER + ' est le responsable du traitement de vos données au sens du RGPD.</p><p><strong>Contact :</strong> <a href="mailto:' + MAIL + '">' + MAIL + '</a></p><p><strong>Site web :</strong> <a href="https://knm-academy.github.io/KNM-Academy/">knm-academy.github.io/KNM-Academy</a></p><p><strong>Code source :</strong> <a href="https://github.com/KNM-Academy" target="_blank" rel="noopener">github.com/KNM-Academy</a></p>',

    'pp.s2t': "2. Champ d'application",
    'pp.s2b': "<p>Cette politique couvre TchekCard sur Android et iOS, y compris les versions TestFlight, ainsi que ce site. Les fonctions et les services intégrés diffèrent selon la plateforme.</p>",

    'pp.s3t': '3. Données collectées',
    'pp.s3b': "<h3>3.1 Compte et connexion</h3><p>Firebase Authentication crée un identifiant de joueur, y compris pour le jeu en invité connecté. La connexion Google est facultative. Sur iOS, Sign in with Apple est également proposé. Selon le fournisseur et votre choix, Firebase reçoit un identifiant, un nom et une adresse e-mail, qui peut être une adresse relais Apple. Nous ne recevons pas votre mot de passe Google ou Apple.</p><h3>3.2 Jeu et progression</h3><p>Nous traitons le pseudonyme, l’avatar, les données des parties en ligne, les soldes de monnaie virtuelle, les achats débloqués et la progression nécessaires au service. Les données du multijoueur et les registres de soldes sont traités sur Firebase. Les préférences et un miroir local de la progression sont aussi conservés sur l’appareil : DataStore sur Android, UserDefaults sur iOS. Une désinstallation ne supprime pas à elle seule le compte serveur. Votre pseudonyme et votre avatar sont visibles des joueurs qui partagent votre partie.</p><h3>3.3 Achats</h3><p>Google Play Billing traite les paiements Android et Apple StoreKit les paiements iOS. Nos serveurs vérifient les jetons Google Play ou les transactions signées Apple et enregistrent les identifiants de transaction, le produit, l’environnement de test ou de production et leur rattachement au joueur pour créditer, restaurer et empêcher les doubles crédits. Les tests Apple Sandbox utilisent un registre de soldes distinct. Nous ne recevons pas les coordonnées de votre carte bancaire.</p><h3>3.4 Publicités et consentement</h3><p>Sur Android, Google AdMob peut traiter l’identifiant publicitaire, l’adresse IP, des informations techniques et les interactions publicitaires. Google UMP présente les choix de consentement applicables ; les options de confidentialité publicitaire sont accessibles dans les réglages lorsqu’elles sont requises. La version iOS distribuée reste sans publicité : le pont publicitaire est désactivé et aucune permission de suivi ATT n’est demandée. Les offres dépendantes des publicités ne sont pas proposées sur iOS.</p><h3>3.5 Mesure et diagnostic</h3><p>Sur Android, Firebase Analytics et Crashlytics traitent des événements d’utilisation et des diagnostics techniques, selon la configuration de collecte et le consentement applicables. Ces données peuvent inclure des identifiants d’installation ; elles ne doivent pas être considérées comme entièrement anonymes. Sur iOS, Firebase Analytics n’est pas intégré ; Crashlytics l’est dans les versions distribuées, pour le seul diagnostic des plantages. Firebase traite néanmoins les données techniques nécessaires à la connexion, à la sécurité et au multijoueur sur les deux plateformes.</p>",

    'pp.s4t': '4. Finalités du traitement',
    'pp.s4b': "<p>Nous utilisons ces données pour gérer le compte, assurer les parties multijoueur, conserver les soldes et la progression, vérifier et restaurer les achats, empêcher les fraudes et répondre aux demandes. La publicité et la mesure Android sont décrites à la section 3 ; elles ne s’appliquent pas à la version iOS actuelle.</p>" + "<h3>4.1 Bases légales (RGPD, article 6)</h3><ul><li><strong>Exécution du service</strong> que vous utilisez (art. 6.1.b) : compte, parties en ligne, soldes, progression, achats.</li><li><strong>Votre consentement</strong> (art. 6.1.a) : publicités personnalisées et statistiques d’usage sur Android. Vous pouvez le retirer à tout moment dans les réglages du jeu.</li><li><strong>Notre intérêt légitime</strong> (art. 6.1.f) : sécurité du service, prévention de la fraude et de la triche, diagnostic des plantages.</li><li><strong>Obligations légales</strong> (art. 6.1.c) : conservation des preuves de transaction lorsque la loi l’exige.</li></ul>",

    'pp.s5t': '5. Partage des données',
    'pp.s5b': "<p>Nous ne vendons ni ne louons vos données personnelles. Google/Firebase fournit l’authentification, le stockage et les fonctions serveur. Google Play traite les achats Android. Apple traite la connexion Sign in with Apple et les achats App Store iOS ; les preuves de transaction sont vérifiées par nos serveurs. Sur Android, AdMob traite les données publicitaires selon vos choix de consentement.</p><p>Consultez les politiques de <a href=\"https://firebase.google.com/support/privacy\">Firebase</a>, <a href=\"https://policies.google.com/privacy\">Google</a> et <a href=\"https://www.apple.com/legal/privacy/\">Apple</a>. Des données peuvent également être communiquées lorsque la loi l’exige.</p>" + "<h3>5.1 Transferts hors de l’Union européenne</h3><p>La base de données et les fonctions serveur du jeu sont hébergées dans l’Union européenne (Belgique). Google et Apple peuvent néanmoins traiter certaines données en dehors de l’Union européenne, notamment aux États-Unis. Ces transferts reposent sur les mécanismes prévus par le RGPD : le cadre de protection des données UE–États-Unis et les clauses contractuelles types de la Commission européenne.</p>",

    'pp.s6t': '6. Conservation des données',
    'pp.s6b': "<p>Les données du compte, des soldes et des droits d’achat sont conservées pour fournir le service et traiter les demandes de suppression. Les salles inactives sont nettoyées périodiquement : après 5 minutes pour une partie terminée, 10 minutes pour un salon en attente ou 2 heures pour une partie inactive, sous réserve des reprises techniques nécessaires au règlement.</p><p>Les registres de transactions et marqueurs anti-rejeu nécessaires à la prévention de la fraude peuvent être conservés après suppression du profil ; ils ne contiennent pas de coordonnées bancaires. Google Play et Apple conservent aussi leur propre historique selon leurs politiques et obligations. Les données locales disparaissent lors de leur effacement sur l’appareil. Les durées configurées pour Analytics et Crashlytics Android sont respectivement de 14 mois et 90 jours.</p>",

    'pp.s7t': '7. Vos droits (RGPD)',
    'pp.s7b': '<p>Si vous résidez dans l’Union européenne, vous disposez des droits suivants concernant vos données personnelles :</p><ul><li><strong>Droit d’accès</strong> : obtenir une copie de vos données</li><li><strong>Droit de rectification</strong> : corriger des données inexactes</li><li><strong>Droit à l’effacement</strong> : demander la suppression de vos données</li><li><strong>Droit d’opposition</strong> : vous opposer à certains traitements</li><li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format lisible</li><li><strong>Droit à la limitation</strong> : demander la suspension d’un traitement</li><li><strong>Droit de retirer votre consentement</strong> à tout moment, sans effet sur ce qui a été fait avant</li></ul><p>Pour exercer ces droits, contactez-nous à : <a href="mailto:' + MAIL + '">' + MAIL + '</a></p><p>Vous avez également le droit d’introduire une réclamation auprès de l’autorité de protection des données de votre pays (en France, la <a href="https://www.cnil.fr" target="_blank" rel="noopener">CNIL</a> ; en Allemagne, l’autorité de protection des données de votre Land).</p>' + "<p>Sur iOS, ouvrez Réglages → Compte pour demander la suppression du compte et des données associées. L’application peut demander une nouvelle authentification pour confirmer votre identité. Vous pouvez aussi utiliser notre <a href=\"delete-account.html\">page de suppression</a> ou nous contacter par e-mail.</p>",

    'pp.s8t': '8. Protection des données',
    'pp.s8b': '<p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction. Les communications avec Firebase sont chiffrées via TLS/HTTPS.</p>',

    'pp.s9t': '9. Confidentialité des enfants',
    'pp.s9b': '<p>TchekCard n’est pas conçu pour les enfants de moins de 13 ans et nous ne collectons pas sciemment de données personnelles auprès d’eux.</p><p>Si vous avez moins de 16 ans, demandez l’accord d’un parent ou d’un tuteur avant de donner un consentement dans le jeu (publicités personnalisées, statistiques) ou d’y connecter un compte.</p><p>La classification par âge de l’application est attribuée par les organismes membres de l’IARC et <strong>varie selon les territoires</strong> : celle qui vous concerne est affichée sur la fiche Google Play de votre pays. Certains territoires appliquent un descripteur « jeux d’argent simulés » en raison du système de mise compétitive décrit ci-dessous.</p><p>Ce système utilise exclusivement de la monnaie virtuelle interne (pièces) qui n’a aucune valeur réelle, ne peut être convertie en argent réel et ne peut être échangée contre des biens ou services hors de l’application.</p><p>Si vous êtes parent et pensez que votre enfant nous a fourni des données personnelles, contactez-nous à <a href="mailto:' + MAIL + '">' + MAIL + '</a> pour en demander la suppression immédiate.</p>',

    'pp.s10t': '10. Modifications de cette politique',
    'pp.s10b': '<p>Nous pouvons mettre à jour cette politique de confidentialité à tout moment. La date de « dernière mise à jour » en haut de cette page indique la version en vigueur. Nous vous encourageons à consulter cette page régulièrement pour rester informé des éventuelles modifications.</p>',

    'pp.s11t': '11. Contact',
    'pp.s11b': '<p>Pour toute question concernant cette politique de confidentialité ou le traitement de vos données :</p>',
    'pp.s11box': '<strong>E-mail :</strong> <a href="mailto:' + MAIL + '">' + MAIL + '</a><br/><strong>Site web :</strong> <a href="https://knm-academy.github.io/KNM-Academy/">knm-academy.github.io/KNM-Academy</a><br/><strong>Responsable :</strong> ' + OWNER + ' (KNM Academy)',

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
    'sup.a3': '<strong>Coins 🪙</strong> are the everyday currency. They pay the <strong>entry stake</strong> for games, <strong>table skins</strong> and <strong>usage recharges</strong> for rules.<br/><br/><strong>Diamonds 💎</strong> do exactly one thing: <strong>permanently unlock</strong> a custom rule.<br/><br/>⚠️ So skins are <strong>not</strong> bought with diamonds, but with coins. Both currencies are earned by playing, through missions, the daily sign-in and the wheel — or bought separately.',
    'sup.q4': "I'm out of coins, what can I do?",
    'sup.a4': 'Several ways to get coins back: complete the daily missions, claim your daily sign-in reward, spin the daily wheel (free, plus an extra spin for watching an ad), finish games (you earn a little even when losing), or buy an optional coin pack in the shop.',
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
    'pp.updated': "Applies to KNM Academy apps — Last updated: 5 October 2026",
    'pp.summary': '<strong>Summary:</strong> KNM Academy does not sell your personal data. We only collect the information strictly necessary for the app to work. You can request deletion of your data at any time.',
    'pp.tocTitle': 'Contents',
    'pp.toc': '<li><a href="#section-1">Who we are</a></li><li><a href="#section-2">Scope</a></li><li><a href="#section-3">Data we collect</a></li><li><a href="#section-4">Purposes of processing</a></li><li><a href="#section-5">Data sharing</a></li><li><a href="#section-6">Data retention</a></li><li><a href="#section-7">Your rights (GDPR)</a></li><li><a href="#section-8">Data protection</a></li><li><a href="#section-9">Children’s privacy</a></li><li><a href="#section-10">Changes to this policy</a></li><li><a href="#section-11">Contact</a></li>',

    'pp.s1t': '1. Who we are',
    'pp.s1b': '<p>KNM Academy is the name under which <strong>' + OWNER + '</strong>, an independent developer, designs and publishes mobile apps for Android and iOS. KNM Academy is not a company: ' + OWNER + ' is the controller of your personal data within the meaning of the GDPR.</p><p><strong>Contact:</strong> <a href="mailto:' + MAIL + '">' + MAIL + '</a></p><p><strong>Website:</strong> <a href="https://knm-academy.github.io/KNM-Academy/">knm-academy.github.io/KNM-Academy</a></p><p><strong>Source code:</strong> <a href="https://github.com/KNM-Academy" target="_blank" rel="noopener">github.com/KNM-Academy</a></p>',

    'pp.s2t': '2. Scope',
    'pp.s2b': "<p>This policy covers TchekCard on Android and iOS, including TestFlight builds, and this website. Features and integrated services differ by platform.</p>",

    'pp.s3t': '3. Data we collect',
    'pp.s3b': "<h3>3.1 Account and sign-in</h3><p>Firebase Authentication creates a player ID, including for connected guest play. Google sign-in is optional. iOS also offers Sign in with Apple. Depending on your provider and choices, Firebase receives an identifier, name and email address, which may be an Apple relay address. We do not receive your Google or Apple password.</p><h3>3.2 Gameplay and progression</h3><p>We process the nickname, avatar, online game data, virtual currency balances, entitlements and progression needed to provide the service. Multiplayer data and balance ledgers are processed on Firebase. Preferences and a local progression mirror are also stored on the device: DataStore on Android and UserDefaults on iOS. Uninstalling alone does not delete the server account. Your nickname and avatar are visible to the players who share your game.</p><h3>3.3 Purchases</h3><p>Google Play Billing handles Android payments; Apple StoreKit handles iOS payments. Our servers verify Google Play tokens or signed Apple transactions and record transaction IDs, products, test or production environment and player association to grant purchases, restore entitlements and prevent duplicate credits. Apple Sandbox tests use a separate balance ledger. We do not receive your payment card details.</p><h3>3.4 Advertising and consent</h3><p>On Android, Google AdMob may process the advertising ID, IP address, technical information and ad interactions. Google UMP presents applicable consent choices; advertising privacy options are accessible in settings when required. The distributed iOS version has no advertising: the advertising bridge is disabled and no ATT tracking permission is requested. Ad-dependent offers are not available on iOS.</p><h3>3.5 Measurement and diagnostics</h3><p>On Android, Firebase Analytics and Crashlytics process usage events and technical diagnostics according to the collection configuration and applicable consent. This data may include installation identifiers and should not be treated as completely anonymous. On iOS, Firebase Analytics is not integrated; Crashlytics is, in distributed builds, for crash diagnostics only. Firebase still processes technical data needed for authentication, security and multiplayer on both platforms.</p>",

    'pp.s4t': '4. Purposes of processing',
    'pp.s4b': "<p>We use this data to manage accounts, run multiplayer games, maintain balances and progression, verify and restore purchases, prevent fraud and respond to requests. Android advertising and measurement are described in section 3 and do not apply to the current iOS version.</p>" + "<h3>4.1 Legal bases (GDPR, Article 6)</h3><ul><li><strong>Performance of the service</strong> you use (Art. 6(1)(b)): account, online games, balances, progress, purchases.</li><li><strong>Your consent</strong> (Art. 6(1)(a)): personalised ads and usage statistics on Android. You can withdraw it at any time in the game settings.</li><li><strong>Our legitimate interest</strong> (Art. 6(1)(f)): service security, fraud and cheat prevention, crash diagnostics.</li><li><strong>Legal obligations</strong> (Art. 6(1)(c)): keeping transaction records where the law requires it.</li></ul>",

    'pp.s5t': '5. Data sharing',
    'pp.s5b': "<p>We do not sell or rent personal data. Google/Firebase provides authentication, storage and server functions. Google Play processes Android purchases. Apple processes Sign in with Apple and iOS App Store purchases; our servers verify transaction evidence. On Android, AdMob processes advertising data according to your consent choices.</p><p>See the privacy policies of <a href=\"https://firebase.google.com/support/privacy\">Firebase</a>, <a href=\"https://policies.google.com/privacy\">Google</a> and <a href=\"https://www.apple.com/legal/privacy/\">Apple</a>. Data may also be disclosed when required by law.</p>" + "<h3>5.1 Transfers outside the European Union</h3><p>The game’s database and server functions are hosted in the European Union (Belgium). Google and Apple may nevertheless process some data outside the European Union, notably in the United States. These transfers rely on the mechanisms provided by the GDPR: the EU–US Data Privacy Framework and the European Commission’s standard contractual clauses.</p>",

    'pp.s6t': '6. Data retention',
    'pp.s6b': "<p>Account, balance and entitlement data is retained to provide the service and process deletion requests. Inactive rooms are cleaned periodically: after 5 minutes for finished games, 10 minutes for waiting rooms or 2 hours for inactive games, subject to technical retries needed for settlement.</p><p>Transaction ledgers and replay-prevention records needed to prevent fraud may remain after profile deletion; they contain no bank card details. Google Play and Apple also retain their own history under their policies and obligations. Local data is removed when erased on the device. Configured retention periods for Android Analytics and Crashlytics are 14 months and 90 days respectively.</p>",

    'pp.s7t': '7. Your rights (GDPR)',
    'pp.s7b': '<p>If you live in the European Union, you have the following rights regarding your personal data:</p><ul><li><strong>Right of access</strong>: obtain a copy of your data</li><li><strong>Right to rectification</strong>: correct inaccurate data</li><li><strong>Right to erasure</strong>: request deletion of your data</li><li><strong>Right to object</strong>: object to certain processing</li><li><strong>Right to portability</strong>: receive your data in a readable format</li><li><strong>Right to restriction</strong>: ask for a processing operation to be suspended</li><li><strong>Right to withdraw your consent</strong> at any time, without affecting what was done before</li></ul><p>To exercise these rights, contact us at: <a href="mailto:' + MAIL + '">' + MAIL + '</a></p><p>You also have the right to lodge a complaint with the data protection authority in your country.</p>' + "<p>On iOS, open Settings → Account to request deletion of the account and associated data. The app may require reauthentication to confirm your identity. You may also use our <a href=\"delete-account.html\">deletion page</a> or contact us by email.</p>",

    'pp.s8t': '8. Data protection',
    'pp.s8b': '<p>We implement appropriate technical and organisational measures to protect your data against unauthorised access, alteration, disclosure or destruction. Communications with Firebase are encrypted via TLS/HTTPS.</p>',

    'pp.s9t': '9. Children’s privacy',
    'pp.s9b': '<p>TchekCard is not designed for children under 13 and we do not knowingly collect personal data from them.</p><p>If you are under 16, ask a parent or guardian for permission before giving any consent in the game (personalised ads, statistics) or connecting an account.</p><p>The app\'s age rating is assigned by the IARC member bodies and <strong>varies by territory</strong>: the one that applies to you is shown on the Google Play listing for your country. Some territories apply a "simulated gambling" descriptor because of the competitive staking system described below.</p><p>That system uses exclusively internal virtual currency (coins) which has no real-world value, cannot be converted into real money and cannot be exchanged for goods or services outside the app.</p><p>If you are a parent and believe your child has provided us with personal data, contact us at <a href="mailto:' + MAIL + '">' + MAIL + '</a> to request its immediate deletion.</p>',

    'pp.s10t': '10. Changes to this policy',
    'pp.s10b': '<p>We may update this privacy policy at any time. The "last updated" date at the top of this page indicates the version in force. We encourage you to check this page regularly to stay informed of any changes.</p>',

    'pp.s11t': '11. Contact',
    'pp.s11b': '<p>For any question about this privacy policy or the processing of your data:</p>',
    'pp.s11box': '<strong>Email:</strong> <a href="mailto:' + MAIL + '">' + MAIL + '</a><br/><strong>Website:</strong> <a href="https://knm-academy.github.io/KNM-Academy/">knm-academy.github.io/KNM-Academy</a><br/><strong>Controller:</strong> ' + OWNER + ' (KNM Academy)',

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
    'sup.a3': '<strong>Münzen 🪙</strong> sind die alltägliche Währung. Sie bezahlen den <strong>Einsatz</strong> für Partien, <strong>Tisch-Skins</strong> und das <strong>Aufladen von Nutzungen</strong> bei Regeln.<br/><br/><strong>Diamanten 💎</strong> haben genau eine Aufgabe: eine individuelle Regel <strong>dauerhaft freizuschalten</strong>.<br/><br/>⚠️ Skins werden also <strong>nicht</strong> mit Diamanten gekauft, sondern mit Münzen. Beide Währungen verdienst du durch Spielen, über Missionen, die tägliche Anmeldung und das Glücksrad — oder du kaufst sie separat.',
    'sup.q4': 'Ich habe keine Münzen mehr, was nun?',
    'sup.a4': 'Es gibt mehrere Wege zu neuen Münzen: schließe die Tagesmissionen ab, hole dir deine tägliche Anmeldebelohnung, drehe das tägliche Glücksrad (kostenlos, plus eine weitere Drehung für das Ansehen einer Werbung), beende Partien (auch bei einer Niederlage bekommst du etwas) oder kaufe im Shop ein optionales Münzpaket.',
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
    'pp.updated': "Gültig für KNM Academy Apps — Letzte Aktualisierung: 5. Oktober 2026",
    'pp.summary': '<strong>Kurzfassung:</strong> KNM Academy verkauft deine personenbezogenen Daten nicht. Wir erheben nur die Informationen, die für den Betrieb der App zwingend erforderlich sind. Du kannst jederzeit die Löschung deiner Daten verlangen.',
    'pp.tocTitle': 'Inhalt',
    'pp.toc': '<li><a href="#section-1">Wer wir sind</a></li><li><a href="#section-2">Geltungsbereich</a></li><li><a href="#section-3">Erhobene Daten</a></li><li><a href="#section-4">Zwecke der Verarbeitung</a></li><li><a href="#section-5">Weitergabe von Daten</a></li><li><a href="#section-6">Speicherdauer</a></li><li><a href="#section-7">Deine Rechte (DSGVO)</a></li><li><a href="#section-8">Datensicherheit</a></li><li><a href="#section-9">Datenschutz für Kinder</a></li><li><a href="#section-10">Änderungen dieser Erklärung</a></li><li><a href="#section-11">Kontakt</a></li>',

    'pp.s1t': '1. Wer wir sind',
    'pp.s1b': '<p>KNM Academy ist der Name, unter dem <strong>' + OWNER + '</strong> als unabhängiger Entwickler mobile Apps für Android und iOS entwickelt und veröffentlicht. KNM Academy ist kein Unternehmen: ' + OWNER + ' ist der Verantwortliche für die Verarbeitung deiner personenbezogenen Daten im Sinne der DSGVO.</p><p><strong>Kontakt:</strong> <a href="mailto:' + MAIL + '">' + MAIL + '</a></p><p><strong>Website:</strong> <a href="https://knm-academy.github.io/KNM-Academy/">knm-academy.github.io/KNM-Academy</a></p><p><strong>Quellcode:</strong> <a href="https://github.com/KNM-Academy" target="_blank" rel="noopener">github.com/KNM-Academy</a></p>',

    'pp.s2t': '2. Geltungsbereich',
    'pp.s2b': "<p>Diese Erklärung gilt für TchekCard auf Android und iOS, einschließlich TestFlight-Versionen, sowie für diese Website. Funktionen und eingebundene Dienste unterscheiden sich je nach Plattform.</p>",

    'pp.s3t': '3. Erhobene Daten',
    'pp.s3b': "<h3>3.1 Konto und Anmeldung</h3><p>Firebase Authentication erstellt eine Spielerkennung, auch für angemeldete Gäste. Die Google-Anmeldung ist freiwillig. iOS bietet außerdem Sign in with Apple an. Je nach Anbieter und Auswahl erhält Firebase eine Kennung, einen Namen und eine E-Mail-Adresse, gegebenenfalls eine Apple-Relay-Adresse. Wir erhalten dein Google- oder Apple-Passwort nicht.</p><h3>3.2 Spiel und Fortschritt</h3><p>Wir verarbeiten den Spitznamen, Avatar, Daten der Online-Partien, virtuelle Guthaben, erworbene Rechte und den für den Dienst benötigten Fortschritt. Mehrspielerdaten und Guthabenregister werden auf Firebase verarbeitet. Einstellungen und eine lokale Kopie des Fortschritts liegen auch auf dem Gerät: DataStore auf Android, UserDefaults auf iOS. Eine Deinstallation allein löscht das Serverkonto nicht. Dein Spielername und dein Avatar sind für die Mitspieler deiner Partie sichtbar.</p><h3>3.3 Käufe</h3><p>Google Play Billing verarbeitet Android-Zahlungen, Apple StoreKit iOS-Zahlungen. Unsere Server prüfen Google-Play-Tokens oder signierte Apple-Transaktionen und speichern Transaktionskennungen, Produkte, Test- oder Produktionsumgebung und die Zuordnung zum Spieler, um Käufe gutzuschreiben, Rechte wiederherzustellen und doppelte Gutschriften zu verhindern. Apple-Sandbox-Tests verwenden ein getrenntes Guthabenregister. Wir erhalten keine Bankkartendaten.</p><h3>3.4 Werbung und Einwilligung</h3><p>Auf Android kann Google AdMob die Werbekennung, IP-Adresse, technische Daten und Werbeinteraktionen verarbeiten. Google UMP zeigt die entsprechenden Einwilligungsoptionen; erforderliche Werbedatenschutzoptionen sind in den Einstellungen erreichbar. Die ausgelieferte iOS-Version enthält keine Werbung: Die Werbeanbindung ist deaktiviert und es wird keine ATT-Tracking-Erlaubnis angefordert. Werbeabhängige Angebote werden auf iOS nicht angeboten.</p><h3>3.5 Messung und Diagnose</h3><p>Auf Android verarbeiten Firebase Analytics und Crashlytics Nutzungsereignisse und technische Diagnosedaten entsprechend der Erfassungskonfiguration und geltenden Einwilligung. Diese Daten können Installationskennungen enthalten und sind nicht als vollständig anonym anzusehen. Unter iOS ist Firebase Analytics nicht eingebunden; Crashlytics ist es in den verteilten Versionen, ausschließlich zur Absturzdiagnose. Firebase verarbeitet auf beiden Plattformen weiterhin technische Daten für Anmeldung, Sicherheit und Mehrspielerfunktionen.</p>",

    'pp.s4t': '4. Zwecke der Verarbeitung',
    'pp.s4b': "<p>Wir verwenden diese Daten für Kontoverwaltung, Mehrspielerpartien, Guthaben und Fortschritt, Prüfung und Wiederherstellung von Käufen, Betrugsprävention und die Bearbeitung von Anfragen. Android-Werbung und Nutzungsmessung sind in Abschnitt 3 beschrieben und gelten nicht für die aktuelle iOS-Version.</p>" + "<h3>4.1 Rechtsgrundlagen (DSGVO, Artikel 6)</h3><ul><li><strong>Erfüllung des Dienstes</strong>, den du nutzt (Art. 6 Abs. 1 lit. b): Konto, Online-Partien, Guthaben, Fortschritt, Käufe.</li><li><strong>Deine Einwilligung</strong> (Art. 6 Abs. 1 lit. a): personalisierte Werbung und Nutzungsstatistiken unter Android. Du kannst sie jederzeit in den Spieleinstellungen widerrufen.</li><li><strong>Unser berechtigtes Interesse</strong> (Art. 6 Abs. 1 lit. f): Sicherheit des Dienstes, Schutz vor Betrug und Cheating, Absturzdiagnose.</li><li><strong>Gesetzliche Pflichten</strong> (Art. 6 Abs. 1 lit. c): Aufbewahrung von Transaktionsnachweisen, soweit gesetzlich vorgeschrieben.</li></ul>",

    'pp.s5t': '5. Weitergabe von Daten',
    'pp.s5b': "<p>Wir verkaufen oder vermieten keine personenbezogenen Daten. Google/Firebase stellt Anmeldung, Speicherung und Serverfunktionen bereit. Google Play verarbeitet Android-Käufe. Apple verarbeitet Sign in with Apple und iOS-App-Store-Käufe; unsere Server prüfen die Transaktionsnachweise. Auf Android verarbeitet AdMob Werbedaten entsprechend deiner Einwilligung.</p><p>Weitere Informationen: <a href=\"https://firebase.google.com/support/privacy\">Firebase</a>, <a href=\"https://policies.google.com/privacy\">Google</a> und <a href=\"https://www.apple.com/legal/privacy/\">Apple</a>. Daten können auch aufgrund gesetzlicher Verpflichtungen übermittelt werden.</p>" + "<h3>5.1 Übermittlungen außerhalb der Europäischen Union</h3><p>Die Datenbank und die Serverfunktionen des Spiels werden in der Europäischen Union (Belgien) betrieben. Google und Apple können bestimmte Daten dennoch außerhalb der Europäischen Union verarbeiten, insbesondere in den USA. Diese Übermittlungen stützen sich auf die in der DSGVO vorgesehenen Mechanismen: das EU-US-Datenschutzrahmenabkommen und die Standardvertragsklauseln der Europäischen Kommission.</p>",

    'pp.s6t': '6. Speicherdauer',
    'pp.s6b': "<p>Konto-, Guthaben- und Berechtigungsdaten werden zur Bereitstellung des Dienstes und Bearbeitung von Löschanfragen gespeichert. Inaktive Räume werden regelmäßig bereinigt: nach 5 Minuten für beendete Spiele, 10 Minuten für wartende Räume oder 2 Stunden für inaktive Partien, vorbehaltlich technischer Wiederholungen zur Abrechnung.</p><p>Zur Betrugsprävention benötigte Transaktionsregister und Wiederholungssperren können nach der Profillöschung erhalten bleiben; sie enthalten keine Bankkartendaten. Google Play und Apple bewahren eigene Kaufhistorien nach ihren Richtlinien und Pflichten auf. Lokale Daten werden beim Löschen auf dem Gerät entfernt. Für Android Analytics und Crashlytics sind Aufbewahrungszeiten von 14 Monaten beziehungsweise 90 Tagen konfiguriert.</p>",

    'pp.s7t': '7. Deine Rechte (DSGVO)',
    'pp.s7b': '<p>Wenn du in der Europäischen Union wohnst, stehen dir hinsichtlich deiner personenbezogenen Daten folgende Rechte zu:</p><ul><li><strong>Auskunftsrecht</strong>: eine Kopie deiner Daten erhalten</li><li><strong>Recht auf Berichtigung</strong>: unrichtige Daten korrigieren lassen</li><li><strong>Recht auf Löschung</strong>: die Löschung deiner Daten verlangen</li><li><strong>Widerspruchsrecht</strong>: bestimmten Verarbeitungen widersprechen</li><li><strong>Recht auf Datenübertragbarkeit</strong>: deine Daten in einem lesbaren Format erhalten</li><li><strong>Recht auf Einschränkung</strong>: die Aussetzung einer Verarbeitung verlangen</li><li><strong>Recht auf Widerruf deiner Einwilligung</strong>, jederzeit und ohne Wirkung für die Vergangenheit</li></ul><p>Zur Ausübung dieser Rechte wende dich an: <a href="mailto:' + MAIL + '">' + MAIL + '</a></p><p>Außerdem hast du das Recht, dich bei der Datenschutzaufsichtsbehörde deines Landes zu beschweren.</p>' + "<p>Auf iOS kannst du unter Einstellungen → Konto die Löschung des Kontos und der zugehörigen Daten anfordern. Zur Bestätigung deiner Identität kann eine erneute Anmeldung nötig sein. Alternativ nutze unsere <a href=\"delete-account.html\">Löschseite</a> oder kontaktiere uns per E-Mail.</p>",

    'pp.s8t': '8. Datensicherheit',
    'pp.s8b': '<p>Wir setzen geeignete technische und organisatorische Maßnahmen ein, um deine Daten vor unbefugtem Zugriff, Veränderung, Offenlegung oder Zerstörung zu schützen. Die Kommunikation mit Firebase ist über TLS/HTTPS verschlüsselt.</p>',

    'pp.s9t': '9. Datenschutz für Kinder',
    'pp.s9b': '<p>TchekCard ist nicht für Kinder unter 13 Jahren konzipiert, und wir erheben wissentlich keine personenbezogenen Daten von ihnen.</p><p>Wenn du jünger als 16 Jahre bist, bitte einen Elternteil oder Erziehungsberechtigten um Erlaubnis, bevor du im Spiel eine Einwilligung erteilst (personalisierte Werbung, Statistiken) oder ein Konto verbindest.</p><p>Die Alterseinstufung der App wird von den Mitgliedsorganisationen der IARC vergeben und <strong>unterscheidet sich je nach Region</strong>: die für dich geltende Einstufung steht auf der Google-Play-Seite deines Landes. Manche Regionen vergeben den Deskriptor „simuliertes Glücksspiel“ wegen des unten beschriebenen kompetitiven Einsatzsystems.</p><p>Dieses System verwendet ausschließlich interne virtuelle Währung (Münzen). Diese hat keinen realen Wert, lässt sich nicht in echtes Geld umwandeln und kann außerhalb der App nicht gegen Waren oder Dienstleistungen eingetauscht werden.</p><p>Wenn du Elternteil bist und vermutest, dass dein Kind uns personenbezogene Daten übermittelt hat, wende dich an <a href="mailto:' + MAIL + '">' + MAIL + '</a>, um deren sofortige Löschung zu verlangen.</p>',

    'pp.s10t': '10. Änderungen dieser Erklärung',
    'pp.s10b': '<p>Wir können diese Datenschutzerklärung jederzeit aktualisieren. Das Datum der „letzten Aktualisierung“ oben auf dieser Seite gibt die jeweils geltende Fassung an. Wir empfehlen dir, diese Seite regelmäßig aufzurufen, um über etwaige Änderungen informiert zu bleiben.</p>',

    'pp.s11t': '11. Kontakt',
    'pp.s11b': '<p>Bei Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung deiner Daten:</p>',
    'pp.s11box': '<strong>E-Mail:</strong> <a href="mailto:' + MAIL + '">' + MAIL + '</a><br/><strong>Website:</strong> <a href="https://knm-academy.github.io/KNM-Academy/">knm-academy.github.io/KNM-Academy</a><br/><strong>Verantwortlicher:</strong> ' + OWNER + ' (KNM Academy)',

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
