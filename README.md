# 📝 Todo List Backend — NestJS, MongoDB & Mongoose

## Présentation

Ce projet représente l’API backend du système de gestion de tâches **Todo List**.  
Il a été développé avec **NestJS**, **MongoDB** et **Mongoose** afin de fournir une API REST performante et maintenable.

L’API permet la création, la modification, l’affichage et la suppression de tâches. Elle intègre également la validation des données, une architecture modulaire claire et des tests unitaires.

---

## Fonctionnalités

- Création d’une tâche  
- Récupération de toutes les tâches  
- Récupération d’une tâche par son identifiant  
- Mise à jour d’une tâche (partielle ou complète)  
- Suppression d’une tâche  
- Validation des données via DTO et class-validator  
- Modélisation avec Mongoose  
- Gestion des erreurs (NotFoundException, validations…)  
- Tests unitaires de la logique métier  

---

## Technologies utilisées

- NestJS 11  
- TypeScript  
- MongoDB / MongoDB Atlas  
- Mongoose 8  
- class-validator & class-transformer  
- Jest (tests unitaires)  

---

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/massalyjr9/to_do_list_backend.git
cd todo-backend
```

### 2. Installer les dépendances
```bash
    npm install
```

### 3. Configuration des variables d’environnement
Créer un fichier nommé :

```bash
    .env
```
Ajouter ces ligne pour la connexion à la Base et notifier le port de connexion

```bash
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todo
    PORT=4000
```
Remplacer les identifiants par ceux de votre base MongoDB.
Le port peut être modifié selon l’environnement de déploiement.

### 3. Démarrer le projet
```bash
   npm run start:dev
```
L'API sera accessible à l’adresse :
http://localhost:4000

Structure du projet 
```bash
src/
  app.module.ts
  main.ts
  tasks/
    tasks.module.ts
    tasks.controller.ts
    tasks.service.ts
    dto/
      create-task.dto.ts
      update-task.dto.ts
    schemas/
      task.schema.ts
test/
  tasks/
    tasks.service.spec.ts
  app.e2e-spec.ts


```
### ENDPOINTS
| Méthode | Route      | Description                  |
|:-------:|:----------:|------------------------------|
| GET     | /tasks     | Récupérer toutes les tâches  |
| GET     | /tasks/:id | Récupérer une tâche précise  |
| POST    | /tasks     | Créer une nouvelle tâche     |
| PUT     | /tasks/:id | Modifier une tâche existante |
| DELETE  | /tasks/:id | Supprimer une tâche          |

### Exemple de playload pour la création d'une tache
```bash 
    {
  "title": "Créer une API",
  "description": "Développer le backend NestJS",
  "startDate": "2025-11-20",
  "endDate": "2025-11-22",
  "duration": 2,
  "responsible": "Idrissa",
  "status": "to do"
}
```

### TESTS 
Lancer les tests
```bash
    npm run test
```
Tests incluent :  
Test unitaire du TasksService  
Test unitaire du AppController  
Mocks Mongoose via getModelToken  

### Déploiment
Hébergement possible :
Render  
Railway  
Heroku  
Serveur VPS (Docker recommandé)  

Étapes de déploiement recommandées  
Pousser le code sur GitHub  
Déployer MongoDB sur MongoDB Atlas  
Configurer les variables d’environnement  
Construire et lancer l’application :   

```bash
  npm run build
  npm run start

```

Améliorations possibles:  
Pagination des résultats  
Système d’authentification JWT  
Rôles utilisateurs  
Documentation Swagger  
Tests E2E plus complets  
WebSockets pour mises à jour en temps réel  

Auteur  
Idrissa Massaly  
Développeur Fullstack — Next.js, React, TypeScript, NestJs  


