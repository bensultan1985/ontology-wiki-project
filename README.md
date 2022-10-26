This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Important Project Information

Project for Regeneron. Task: The Ontology Department needs CRUD and viewing abilities for dataset of clinical concepts.

The user application displays data in a customizable wiki format. Existing clinical concepts can be edited in the user portal if logged in as "admin". Clinical concepts can also be created, edited, and deleted in the admin portal, located at baseUrl + /admin (example: http://localhost:3000/admin). Login as an admin to access this functionality.

This app was built with Next.js, Node, React, TypeScript, and Mantine (for components and theming).

This app is hosted on Heroku: https://ontology-wiki-project.herokuapp.com

## Known Issues

-The backend accesses an object, "mockData" which serves as the mockup database. CRUD actions are scaffolded but not yet fully implemented. The frontend services that call backend endpoints are all functional and will trigger success and error messages in the UI. However, the backend does not truly update the "mockData".

-This website is only partially responsive. If the window is small enough, some components may not look great.

-TypeScript is included, but not utilized fully in all files.

## Next Steps

-I would build out a database and complete the backend services.

-I would add better responsiveness to the frontend by having breakpoints for different layouts.

-With TypeScript, I would create proper Types for all data, to ensure that all DTOs are as expected.

-I would Separate out large components into cleaner, smaller components.

-Organize style data to create an app that is more thematically customizable.

-The concept edit modal allows parentIds and child Ids to be linked to concepts, but ideally, we would link these by display name instead of the actual IDs. This is more user friendly.

-I would add a config file to allow for simpler customization of data like website title, company name, wiki name, logo, etc.

## Getting Started

Install all packages using:

```bash
yarn install
```

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
