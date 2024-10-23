# Plateforme de billetterie J.O 2024

## Description

Cette application est une plateforme de billetterie développée pour les Jeux Olympiques de 2024. Elle permet aux utilisateurs de :
- Consulter les différentes offres de billets (solo, duo, familial).
- Ajouter des billets au panier et les réserver.
- Créer un compte, se connecter, et gérer leurs achats.
- Bénéficier d'une sécurité renforcée grâce à l'authentification à deux facteurs.

Le projet inclut un **front-end** développé en **React.js**, un **back-end** en **Symfony**, ainsi qu'une base de données relationnelle en **PostgreSQL**.

## Fonctionnalités

- Affichage des offres de billets.
- Gestion du panier.
- Authentification et création de compte utilisateur.
- Sécurisation des achats avec génération de clés et QR Code.
- E-billet sécurisé et scannable le jour de l'événement.

## Technologies utilisées

- **Front-end** : React.js
- **Back-end** : Symfony
- **Base de données** : PostgreSQL
- **API** : Axios pour les requêtes HTTP
- **Hébergement** : Github (front-end) et Render (back-end)

## Installation

### Pré-requis

- Node.js (v14 ou supérieure)
- PHP (v7.4 ou supérieure)
- PostgreSQL (ou toute autre base de données relationnelle)

### Étapes d'installation

1. Clonez ce dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/Fred-Falzoi/olympics-frontend.git

2. Installez les dépendances pour le front-end :
   ```bash
   cd olympics-frontend
   npm install

3. Lancez l'application front-end localement :
   ```bash
   npm start
