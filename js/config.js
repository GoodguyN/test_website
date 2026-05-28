/* ============================================================
   CONFIG — Tout modifier ici pour chaque nouveau client
   ============================================================ */

const SITE = {

  /* ── Identité ─────────────────────────────────────── */
  nom:           "Dupont Plomberie",
  metier:        "Plombier",          // affiché partout
  slogan:        "Artisan plombier à Lyon depuis 18 ans — Interventions rapides 7j/7",
  description:   "Artisan plombier indépendant à Lyon et sa banlieue. Dépannages en urgence, remplacement de chauffe-eau, débouchage, rénovation salle de bain. Certifié RGE. Devis gratuit.",
  anneeCreation: 2006,

  /* ── Contact ──────────────────────────────────────── */
  tel:           "04 72 00 00 00",
  telHref:       "tel:+33472000000",
  email:         "contact@dupont-plomberie.fr",
  adresse:       "Lyon, Rhône (69)",
  horaires:      "Lun–Sam 8h–19h · Urgences 24h/24",

  /* ── Localisation ─────────────────────────────────── */
  ville:         "Lyon",
  departement:   "Rhône",
  region:        "Auvergne-Rhône-Alpes",

  /* ── SEO ──────────────────────────────────────────── */
  metaDesc:      "Dupont Plomberie — Artisan plombier à Lyon, 18 ans d'expérience. Interventions 7j/7. RGE certifié. Devis gratuit. Appelez le 04 72 00 00 00.",

  /* ── Stats hero ───────────────────────────────────── */
  stats: [
    { valeur: "18 ans",   label: "d'expérience" },
    { valeur: "+800",     label: "chantiers réalisés" },
    { valeur: "24h/24",   label: "disponibilité urgence" },
  ],

  /* ── Certifications ───────────────────────────────── */
  certifications: [
    "Certifié RGE Qualibat",
    "Assurance décennale",
    "Devis gratuit",
  ],

  /* ── Services (utilisés sur /services et home) ────── */
  services: [
    {
      slug:   "urgence",
      titre:  "Dépannage & urgence",
      resume: "Intervention sous 1 heure sur Lyon et sa banlieue, 7 jours sur 7.",
      texte:  "Une fuite, une canalisation qui éclate, un chauffe-eau qui lâche un dimanche soir — nous répondons présent. Notre astreinte couvre l'ensemble de l'agglomération lyonnaise 24h/24.",
    },
    {
      slug:   "chauffe-eau",
      titre:  "Remplacement chauffe-eau",
      resume: "Diagnostic, conseil et installation du modèle adapté à votre logement.",
      texte:  "Chauffe-eau électrique, thermodynamique ou chaudière — nous diagnostiquons votre installation et vous proposons le remplacement le plus adapté à votre consommation et votre budget.",
    },
    {
      slug:   "debouchage",
      titre:  "Débouchage & curage",
      resume: "Canalisations, WC, baignoire — élimination complète des bouchons.",
      texte:  "Grâce à notre matériel de curage haute pression, nous éliminons durablement les bouchons les plus résistants. Intervention propre, sans démolition.",
    },
    {
      slug:   "sanitaires",
      titre:  "Sanitaires & robinetterie",
      resume: "Pose, réparation et remplacement de tous équipements sanitaires.",
      texte:  "Du simple joint qui fuit à la rénovation complète de votre salle de bain, nous intervenons sur tous types de sanitaires et robinetteries, toutes marques.",
    },
    {
      slug:   "chauffage",
      titre:  "Chauffage & chaudière",
      resume: "Installation, remplacement et entretien de systèmes de chauffage.",
      texte:  "Chaudière gaz, pompe à chaleur, plancher chauffant — nous concevons et installons des systèmes performants et conformes aux normes en vigueur.",
    },
    {
      slug:   "renovation",
      titre:  "Rénovation salle de bain",
      resume: "Conception et réalisation de votre projet de salle de bain, de A à Z.",
      texte:  "Nous prenons en charge l'ensemble des travaux de plomberie pour votre rénovation : douche, baignoire, vasque, WC suspendus. Travail soigné, délais respectés.",
    },
  ],

  /* ── Avis clients ─────────────────────────────────── */
  avis: [
    {
      prenom:    "Marie-Claire",
      initiales: "MC",
      ville:     "Lyon 3e",
      note:      5,
      texte:     "Intervention le samedi matin pour une fuite importante. Réactif, soigneux, prix honnête. Je recommande sans hésitation.",
    },
    {
      prenom:    "Thomas",
      initiales: "TB",
      ville:     "Villeurbanne",
      note:      5,
      texte:     "Chauffe-eau remplacé en 2 heures chrono. Bon conseil sur le modèle, travail propre. Rien à redire.",
    },
    {
      prenom:    "Isabelle",
      initiales: "IR",
      ville:     "Lyon 7e",
      note:      5,
      texte:     "Canalisation débouchée un dimanche. Ponctuel, efficace et très professionnel. Je garde précieusement le numéro.",
    },
    {
      prenom:    "François",
      initiales: "FM",
      ville:     "Caluire-et-Cuire",
      note:      5,
      texte:     "Rénovation complète de notre salle de bain. Travail impeccable, délais respectés, équipe sérieuse. Très satisfait.",
    },
    {
      prenom:    "Sophie",
      initiales: "SL",
      ville:     "Bron",
      note:      5,
      texte:     "Dépannage chaudière en urgence un soir de semaine. Problème résolu en 45 minutes. Tarif conforme au devis. Merci.",
    },
    {
      prenom:    "Laurent",
      initiales: "LB",
      ville:     "Lyon 9e",
      note:      5,
      texte:     "Artisan sérieux, à l'écoute et compétent. Il prend le temps d'expliquer et propose des solutions adaptées. À recommander.",
    },
  ],
  noteGlobale: "4,9",
  nbAvis:      "247",

  /* ── Zone d'intervention ──────────────────────────── */
  zones: [
    "Lyon (tous arrondissements)",
    "Villeurbanne", "Caluire-et-Cuire", "Bron",
    "Vénissieux", "Saint-Priest", "Décines-Charpieu",
    "Meyzieu", "Rillieux-la-Pape", "Écully",
  ],

  /* ── Réseaux sociaux (laisser vide si inexistant) ─── */
  facebook:  "",
  instagram: "",

  /* ── Couleur principale (hex) ─────────────────────── */
  // Changer uniquement cette valeur pour adapter à chaque métier
  couleur:     "#1C3D5A",   // bleu marine — plombier
  couleurVive: "#E05C2A",   // orange accent — appels à l'action

};
