This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Important Project Information

Project for Regeneron. The Ontology Department needs CRUD ability and viewing ability for dataset of clinical concepts. This application displays this data in a customizable wiki format. Existing clinical concepts can be edited in the regular viewing portal. Clinical concepts can also be created and/or edited in the admin portal, located at baseUrl + /admin (example: http://localhost:3000/admin). Login as an admin to access this functionality.

## Known Issues

-The frontend communicates with a backend that accesses a variable named mockData which serves as the "database". CRUD functionality is scaffolded but is not yet fully implemented. The endpoints and services have all been created.

-This website is only partially responsive. If the window is small enough, some components may not look good.

-I have not incorporated error handlers in the UI.

-TypeScript is included but not properly implemented. I would need to spend some time creating models for the data transfer objects.

## Next Steps

-I would build out a database and complete the backend services.

-I would add better responsiveness to the front end by having breakpoints for different layouts.

-I would use Mantine's notification components to notify the user with error and success messages.

-With TypeScript, I would create proper Types for the data, to ensure that data comes in as expected.

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

## Learn More

## Deploy on Vercel
