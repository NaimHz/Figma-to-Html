# Projet Figma-to-Html

## Description
Ce projet est une conversion d'une maquette Figma en un site web interactif. Il inclut des fonctionnalités de gestion de présences, d'évaluation et d'affichage de QR codes. La navigation au sein du site se fait par la barre de navigation sur le header ou footer.

## Démarrage du projet

### Prérequis
- La bonne version de Node.js ou NVM installé sur votre machine.

### Étapes
1. Clonez le dépôt ou téléchargez les fichiers.
2. Installez les dépendances avec la commande :
   ```bash
   npm install
   ```
3. Lancez le serveur de développement avec :
   ```bash
   npm run dev
   ```
4. Ouvrez votre navigateur et accédez à l'URL fournie (par défaut : `http://localhost:3000`).

## Fonctionnalités et interactions
- **Consulter les présences** : Affiche les participants et leur statut (présent/absent).
- **Modifier le statut des participants** : Annuler la signature / Déclarer absent / Signer à la place d'un participant.
- **Historique des séances** : Voir l'historique des séances d'un intervenant.
- **Formulaire d'évaluation** : Permet de répondre à des questions sur les bases de Figma.
- **QR Code** : Afficher une modale en grand écran pour scanner / Copier le QR Code d'un formulaire.
- **Emarger** : Emarger pour un participant.
- **Validez le formulaire** : Affichage d'une modale de remerciement à la fin du formulaire.


## Technologies utilisées
- **HTML5** et **CSS3** : Structure et styles du site.
- **JavaScript** : Interactivité et logique.
- **Alpine.js** : Gestion des états et interactions dynamiques.
- **Tailwind CSS** : Framework CSS pour le design.
- **Vite** : Outil de build et serveur de développement rapide.
- **Flowbite** : Bibliotèque de composants tailwind.

## Stockage

La plupart des données traité sur le site sont générées via des tableau javascript modifiable directement dans le html afin d'ajouter/supprimer des données.
