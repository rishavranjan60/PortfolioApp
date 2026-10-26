# PortfolioApp

A personal portfolio frontend built with Angular 16 and TypeScript. The source includes components for about, experience, projects, skills, services and contact sections.

## Local development

The Angular application lives in `frontend/`. With Node.js and npm installed:

```bash
cd frontend
npm ci
npm start
```

Open the URL printed by Angular (normally http://localhost:4200).

## Build and test

Run from `frontend/`:

```bash
npm run build
npm test
```

The test command uses Karma and requires a browser. Angular configuration is in [frontend/angular.json](frontend/angular.json).

## Customize

Edit the section components under `frontend/src/app/components/`, image assets under `frontend/src/assets/images/`, and global styles in `frontend/src/styles.css`.
