# Template Artisan — Guide de déploiement

## Structure des fichiers

```
artisan-template/
├── index.html              ← Page d'accueil
├── css/
│   └── style.css           ← Design system complet (ne pas modifier)
├── js/
│   ├── config.js           ← ★ SEUL FICHIER À MODIFIER PAR CLIENT
│   └── main.js             ← Injection automatique (ne pas modifier)
└── pages/
    ├── services.html       ← Page services complète
    ├── avis.html           ← Page avis clients
    └── contact.html        ← Page contact + formulaire
```

---

## Déployer un nouveau client en 10 minutes

### Étape 1 — Copier le dossier
```bash
cp -r artisan-template/ mon-client-nom/
```

### Étape 2 — Ouvrir js/config.js et remplir le CONFIG
Modifier **uniquement** les valeurs dans `js/config.js` :

```javascript
const SITE = {
  nom:           "Martin Électricité",
  metier:        "Électricien",
  ville:         "Bordeaux",
  couleur:       "#1A3A5C",   // bleu marine
  couleurVive:   "#D4A017",   // or pour électricien
  tel:           "05 56 00 00 00",
  // ...etc
};
```

### Étape 3 — Remplacer les placeholders images
Dans chaque page, chercher les `<div class="img-placeholder">` et remplacer par :
```html
<img src="../images/photo-chantier.jpg" alt="...">
```

### Étape 4 — Mettre en ligne
Uploader le dossier sur n'importe quel hébergeur (OVH, o2switch, Infomaniak...).
Aucune dépendance serveur — 100% HTML/CSS/JS statique.

---

## Adapter par métier

| Métier | couleur | couleurVive |
|---|---|---|
| Plombier | `#1C3D5A` marine | `#E05C2A` orange |
| Électricien | `#1A3A5C` bleu foncé | `#D4A017` or |
| Peintre | `#2D4A3E` vert foncé | `#E8B84B` jaune |
| Carreleur | `#3D2B1F` brun | `#C0602A` terre |
| Couvreur | `#2C2C2C` anthracite | `#B85C38` brique |
| Serrurier | `#1F2D3D` acier | `#7B8FA1` argent |
| Maçon | `#3A3028` brun pierre | `#D4882A` ocre |
| Menuisier | `#2A1F14` bois foncé | `#8B6914` chêne |

---

## Personnalisation avancée

- **Logo** : Remplacer `.header-logo` par une balise `<img>` dans chaque header
- **Font** : Modifier `--f-display` et `--f-body` dans `:root` dans `style.css`
- **Sections supplémentaires** : Copier un bloc existant dans `index.html`
- **Formulaire fonctionnel** : Connecter à Formspree, Netlify Forms, ou EmailJS
