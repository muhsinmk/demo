# Next.js TypeScript Tailwind Vite Project

This project is a [Next.js](https://nextjs.org/) application bootstrapped with [TypeScript](https://www.typescriptlang.org/), styled using [Tailwind CSS](https://tailwindcss.com/), and uses [Vite](https://vitejs.dev/) for a fast development and build experience.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Running the Project](#running-the-project)
3. [Building the Project](#building-the-project)
4. [Testing](#testing)
5. [Technologies Used](#technologies-used)
6. [License](#license)

---

## Project Setup

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/download/) (v16.x or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/) (npm v7 or yarn v1.22.0 or higher)
- [Vite](https://vitejs.dev/) (optional: installed globally for development convenience)

To install Vite globally, run:

```bash

npm  install  -g  vite

```

## Installation

1.  Clone the repository:

```bash

git clone https://github.com/muhsinmk/demo.git
cd demo

```

2.  Install dependencies:

```bash

# Using npm
npm install

# OR using yarn
yarn install


```

# Running the Project

To run the project in development mode, you have two options: running with Next.js or using Vite.

### Running with Next.js (default)

Run the Next.js development server:

```bash

# Using npm
npm run dev

# OR using yarn
yarn dev


```

The project will be available at http://localhost:3000.

### Running with Vite

If you prefer to use Vite's dev server for faster HMR:

1.  Install Vite's dependencies and plugins for Next.js.
2.  Run Vite development server

## Building the Project

To build the project for production:

```bash

# Using npm
npm run build

# OR using yarn
yarn build


```

This will create an optimized production build in the `.next` directory.

## Testing

If your project includes tests, run them with the following commands. This example assumes you're using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/).

### Run Unit Tests

```bash

# Using npm
npm run test

# OR using yarn
yarn test


```

### Run Tests in Watch Mode

```bash

# Using npm
npm run test:watch

# OR using yarn
yarn test:watch


```

## Technologies Used

- **Next.js**: React framework for building server-side rendered and static web applications.
- **TypeScript**: Static type checking for JavaScript.
- **Tailwind CSS**: Utility-first CSS framework.
- **Vite**: Fast development and build tool for modern web projects.
- **ESLint & Prettier**: Code linting and formatting.
- **Jest**: JavaScript testing framework.
- **React Testing Library**: Testing utilities for React components.
