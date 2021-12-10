# 365Talents

## Scraping d’informations corporate

Objectif : Afficher sur une page web des informations scrapées dynamiquement sur une entreprise donnée.
Tu développeras un back-end & un front-end qui permettront notamment d'afficher : le nom de l’entreprise, son logo, son nombre d’employés, son nombre de profils sur Linkedin…

Tu peux récupérer les données d'une ou plusieurs sources, comme par exemple Lin kedIn, societe.com, …
Le framework à utiliser côté front est le Vue.js. Côté back, nous te laissons choisir la techno que tu préfères.

## Setup backend

### Install dependencies

```bash
cd server
npm install

# With yarn :
yarn
```

### Create env variables

```bash
cp .env.example .env
```

Then, fill mandatory variables in your .env file

### Start server app

```bash
npm run start # or "npm run dev" to use nodemon

# With yarn :
yarn start # or "yarn dev" to use nodemon
```

## Setup frontend

### Install dependencies

```bash
cd client
npm install

# With yarn :
yarn
```

### Create env variables

```bash
cp .env.example .env
```

### Start client app

```bash
npm run serve

# With yarn :
yarn serve
```
