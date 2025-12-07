# MotionDevis
Tu es un assistant développeur expert en HTML5, CSS3 et JavaScript vanilla (sans framework, sans build tooling). 

🎯 OBJECTIF GÉNÉRAL  
Concevoir et coder une application web monopage (SPA légère) de calcul de devis pour un motion designer, appelée provisoirement « MotionDevis ».  
L’application doit être :
- 100 % HTML5 / CSS3 / JS vanilla
- Responsive (desktop, tablette, mobile)
- Entièrement côté client (MVP), avec stockage local (LocalStorage)
- Structurée, modulaire et facilement extensible

L’objectif fonctionnel est de permettre à un motion designer de créer des devis modulables, cohérents et rentables en combinant différentes prestations (pré-prod, prod, post-prod, suppléments) avec un système de calcul configurable.

---

## 1. STRUCTURE DU PROJET

Implémente :

1. Une structure de fichiers simple :
   - `index.html`
   - `assets/css/styles.css`
   - `assets/js/app.js`
   - (optionnel) `assets/js/storage.js`, `assets/js/ui.js`, etc. si besoin de modulariser

2. Intégration dans `index.html` :
   - Inclusion de `styles.css`
   - Inclusion de `app.js` en bas de page
   - Aucune librairie externe (pas de React, pas de Vue, pas de Bootstrap, seulement HTML/CSS/JS)

---

## 2. DESIGN & LAYOUT GÉNÉRAL

Implémente dans `index.html` et `styles.css` :

1. Un layout type application SaaS :
   - Un header avec le nom de l’app (« MotionDevis ») et éventuellement un petit sous-titre
   - Un menu simple (ou des onglets) avec :
     - Dashboard
     - Nouveau devis
     - Devis / Clients
     - Paramètres
   - Un contenu central qui change selon l’onglet sélectionné (via JS, pas de rechargement de page)

2. Design :
   - Style moderne, minimaliste, lisible
   - Utiliser CSS Flexbox / Grid
   - Palette sobre (fond clair, cartes, boutons stylés, champs bien espacés)
   - Responsive : le contenu doit s’adapter correctement en dessous de 768px

---

## 3. VUES PRINCIPALES À CODER

### 3.1. Vue « Dashboard »

Implémente :
- Une section montrant :
  - Bouton « Nouveau devis »
  - Liste des 3–5 derniers devis (titre projet, client, date, total, statut)
- Les données sont chargées depuis LocalStorage

### 3.2. Vue « Nouveau devis »

C’est la vue principale, la plus importante. Elle doit être découpée en sections / étapes.

Implémente un formulaire en plusieurs blocs (pas besoin de wizard compliqué, mais des sections claires) :

#### Bloc A – Infos Client & Projet
Champs :
- Nom du client
- Société (optionnel)
- Email
- Titre du projet
- Description courte (textarea)
- Type de vidéo (select : explicative, pub, réseaux sociaux, corporate, autre)
- Deadline souhaitée (date)
  
Les données doivent être stockées dans un objet JS représentant le devis en cours.

#### Bloc B – Paramètres vidéo
Champs :
- Durée de la vidéo (en secondes ou minutes – tu peux choisir une UI pratique)
- Complexité d’animation (select : simple / standard / avancé / premium)
- Style graphique (select : flat / isométrique / illustration détaillée / 3D / autre)

Ces paramètres serviront au moteur de calcul pour certaines prestations (ex : animation).

#### Bloc C – Prestations

Implémente un système de **catalogue de prestations configurables** :

1. Un panneau latéral ou une section « Ajouter une prestation » listant les prestations typiques :
   - Storyboard
   - Direction artistique / moodboard
   - Illustration / character design
   - Animation 2D
   - Animation 3D (optionnel)
   - Voix off
   - Sound design / musique
   - Sous-titres
   - Adaptations formats (9:16, 1:1, etc.)
   - Livrables supplémentaires (exports, fichiers sources…)

2. Quand on clique sur « Ajouter » sur une prestation :
   - Elle s’ajoute dans un tableau « Détail du devis »
   - Chaque ligne de prestation contient :
     - Nom de la prestation
     - Catégorie (Pré-prod / Prod / Post-prod / Suppléments)
     - Mode de calcul (forfait, temps, unitaire)
     - Quantité (heures, jours, unités, scènes, personnages, etc. selon le type)
     - Prix unitaire (calculé automatiquement mais modifiable)
     - Montant total ligne
     - Icône/bouton pour supprimer la ligne

3. Le catalogue de prestations et leurs paramètres par défaut seront définis dans une structure JS (ex : un tableau d’objets).

#### Bloc D – Résumé & Totaux

Implémente :

- Affichage global :
  - Sous-totaux par catégorie (Pré-prod, Prod, Post-prod, Suppléments)
  - Total HT
  - TVA (en %, configurable dans les paramètres)
  - Total TTC

- Champs additionnels :
  - Remise globale (en % ou montant) → recalcul automatique
  - Coefficient d’urgence (select : aucune, +20 %, +30 %, etc.) → appliqué au total HT

Affichage en temps réel à chaque modification d’une prestation.

#### Bloc E – Actions Devis

Boutons :
- Enregistrer le devis (dans LocalStorage)
- Dupliquer (si le devis existe déjà)
- Générer une vue « imprimable » (nouvelle fenêtre ou mode print CSS)
- Bouton « Export PDF » (tu peux implémenter soit :
  - une simple fenêtre d’impression avec un style dédié, soit 
  - l’intégration d’une librairie JS simple comme jsPDF si tu veux, mais ce n’est pas obligatoire pour le MVP)

---

## 4. VUE « PARAMÈTRES »

Implémente une vue / section Paramètres permettant de configurer :

1. Paramètres globaux :
   - Taux horaire (€/h)
   - Taux journalier (€/jour)
   - Nombre d’heures par jour (ex : 7h)
   - TVA (en %)
   - Monnai
