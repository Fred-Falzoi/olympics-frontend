### **2. Documentation technique**

#### **2.1 Architecture de l'application**

L'architecture de l'application est basée sur une approche distribuée pour garantir la scalabilité et la haute disponibilité. Elle se compose de trois parties :
- **Front-end** : Interface utilisateur développée en **React.js** pour offrir une expérience fluide et interactive.
- **Back-end** : Serveur **Symfony** gérant la logique métier et les interactions avec la base de données.
- **Base de données** : Utilisation de **PostgreSQL** pour stocker les informations des utilisateurs, des offres de billets, et des achats effectués.

**Schéma simplifié de l'architecture** :

- Front-end (React.js)
  - Gère l'affichage des pages et les interactions utilisateur.
  - Communication avec le back-end via Axios pour les requêtes API.
  
- Back-end (Symfony)
  - Gère les requêtes API, les transactions, la génération des e-billets et des clés de sécurité.
  
- Base de données (PostgreSQL)
  - Stocke les informations sur les utilisateurs, les billets, et les offres.

#### **2.2 Sécurité**

La sécurité est un élément clé de cette application, surtout pour la gestion des paiements et des informations utilisateur. Voici les mesures mises en place :
- **Authentification à deux facteurs (2FA)** : Utilisée pour garantir que seuls les utilisateurs authentifiés peuvent accéder à leur compte.
- **Cryptage des données** : Les mots de passe sont hachés et toutes les transactions sont sécurisées via SSL.
- **Clés de sécurité** : Chaque billet est sécurisé par une clé unique générée lors de l'achat, combinée à la clé de l'utilisateur pour garantir l'intégrité du billet.

#### **2.3 Gestion des erreurs**

Les erreurs possibles, telles que les échecs de paiement ou les problèmes d'authentification, sont gérées de manière robuste via des messages d'erreur clairs pour l'utilisateur. Un système de logs est également en place pour enregistrer les erreurs côté serveur.

#### **2.4 Test et validation**

- **Tests unitaires** : Les fonctionnalités critiques comme l'authentification et la réservation de billets ont été testées à l'aide de **Jest** pour le front-end et **PHPUnit** pour le back-end.
- **Tests fonctionnels** : Les flux principaux ont été validés pour s'assurer que les utilisateurs peuvent effectuer une réservation complète sans erreur.

### **3. Manuel d'utilisation (tuto)**

#### **3.1 Connexion/Inscription**

- Pour créer un compte, cliquez sur "Connexion/Inscription" dans le menu principal. Remplissez vos informations (nom, prénom, email, mot de passe) et validez.
- Une fois connecté, vous pouvez consulter vos réservations et ajouter des billets au panier.

#### **3.2 Réservation de billets**

- Allez sur la page "Offres" pour consulter les billets disponibles. Sélectionnez l'offre qui vous intéresse, ajoutez-la au panier, puis validez l'achat.
- Vous recevrez un e-billet sécurisé que vous pourrez présenter le jour de l'événement.

#### **3.3 Gestion des e-billets**

- Une fois l'achat terminé, vos billets seront disponibles dans votre espace personnel. Chaque billet est sécurisé par un **QR Code** unique.

---

### **4. Plan de tests**

#### **Tests unitaires**

- **Front-end** : Vérification que chaque composant React fonctionne correctement et que les requêtes API renvoient les bonnes données.
- **Back-end** : Validation que les routes API sont accessibles et retournent les réponses attendues (ex: création de compte, ajout de billets, etc.).

#### **Tests fonctionnels**

- **Scénario de test** :
  - Création d'un compte utilisateur.
  - Connexion avec des identifiants corrects.
  - Ajout d'une offre de billets au panier.
  - Validation du panier et paiement fictif.
  - Confirmation de l'achat avec e-billet généré.

---

### **5. Lien vers l'outil de gestion de projet**

- **Tableau Kanban sur Trello** : https://trello.com/invite/b/6710ceb3b3e0c8a9912afd57/ATTId762ebb544a1cd6883e25e6c6886e3c741877FE7/projet-jo-2024
