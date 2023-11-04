# Notion Clone

## Overview

A note taking web application. This web application is a clone of Notion so the information generated is not genuine. This application is **not intended** for commercial use.

Visit the website from [here](https://motion.karimwael.com).

This project is inspired by this [video](https://www.youtube.com/watch?v=0OaDyjB9Ib8) ❤️

## Features

- To be added.

## Technologies

- [React.js](https://react.dev)
- [Next.js 14](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Zod](https://zod.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Prisma](https://www.prisma.io)
- [NextAuth.js](https://next-auth.js.org)
- [Zustand](https://github.com/pmndrs/zustand)
- [react-hook-form](https://react-hook-form.com)
- [react-toastify](https://fkhadra.github.io/react-toastify)
- [shadcn/ui](https://ui.shadcn.com)

## Prerequisites

#### - Node 18.17.1

### Cloning this repo

Clone the repo and navigate to it:

- `git clone https://github.com/devkarim/notion-clone.git`
- `cd notion-clone`

### Install required packages

Use one of the following commands to install the packages:

- `npm i`
- `yarn`
- `pnpm i`

### Setup .env file

These environment variables are required for the app to work:

```
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

You can check [.env.example](https://github.com/devkarim/notion-clone/blob/main/.env.example) for more information.

### Push changes to database and generate PrismaClient

Use this to push and generate PrismaClient:

`npx prisma db push`

### Start development server

Use one of the following commands to start the development server:

- `npm run dev`
- `yarn dev`
- `pnpm dev`

## Author

This project is made by [@devkarim](https://github.com/devkarim).

## License

This project is licensed under the [MIT](https://github.com/devkarim/notion-clone/blob/main/LICENSE.md) License - feel free to explore, modify, and share.
