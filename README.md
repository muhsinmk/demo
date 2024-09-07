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

1. Clone the repository:

```bash
git  clone  https://github.com/muhsinmk/demo.git

cd  demo
```

2. Install dependencies:

```bash
# Using npm
npm  install

# OR using yarn
yarn  install
```

# Running the Project

To run the project in development mode, you have two options: running with Next.js or using Vite.

### Running with Next.js (default)

Run the Next.js development server:

```bash
# Using npm
npm  run  dev

# OR using yarn
yarn  dev
```

The project will be available at http://localhost:3000.

### Running with Vite

If you prefer to use Vite's dev server for faster HMR:

1. Install Vite's dependencies and plugins for Next.js.

2. Run Vite development server

## Building the Project

To build the project for production:

```bash
# Using npm
npm  run  build

# OR using yarn
yarn  build
```

This will create an optimized production build in the `.next` directory.

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. Vitest is a fast and modern testing framework that integrates seamlessly with Vite.

### Getting Started

Follow these steps to set up and run tests in your Vitest project.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Install Vitest and Related Dependencies

First, navigate to your project directory in your terminal. Then, install Vitest and its peer dependencies. If you are using `npm` or `yarn`, you can use the following commands:

```bash
# Using npm
npm install vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom --save-dev

# OR using yarn
yarn add vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom --dev
```

### Configuration

Vitest works with Vite and should be configured in your `vite.config.ts` or `vite.config.js` file. Ensure you have the following configuration in place:

```bash
// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Adjust 'src' if your base directory is different
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts', // Path to setup files if any
  },
});
```

### Writing Tests

Vitest uses a syntax similar to Jest and other testing libraries. Here is an example of a test file:

```bash
// src/tests/Example.test.tsx

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExampleComponent from '../components/ExampleComponent'; // Adjust the path as needed

describe('ExampleComponent', () => {
  it('renders correctly', () => {
    render(<ExampleComponent />);
    expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument();
  });
});

```

### Run Unit Tests

```bash
# Using npm
npm test

# OR using yarn
yarn  test
```

### Run Tests in Watch Mode

```bash
# Using npm
npm test -- --watch

# OR using yarn
yarn test --watch
```

### Debugging Tests

Vitest supports debugging with popular IDEs. You can start your tests with the `--inspect` flag to enable debugging:

```bash
# Using npm
npm test -- --inspect

# OR using yarn
yarn test --inspect
```

### Adding New Tests

1.  Create a new file in the `src/tests` directory.
2.  Use the same format as shown in the example test file.
3.  Ensure your test files follow the `.test.tsx` or `.test.ts` naming convention.

### Setup and Teardown

You can add setup and teardown logic by creating a setup file (e.g., `src/test/setup.ts`) and specifying it in your `vite.config.ts`:

```bash
// src\vitest.setup.ts

import  "@testing-library/jest-dom/vitest";
import { cleanup } from  "@testing-library/react";
import { afterEach } from  "vitest";

afterEach(() => {
cleanup();
});
```

### Troubleshooting

- **Test Failures**: Check the console output for errors and verify that your tests are correctly written.
- **Configuration Issues**: Ensure your `vite.config.ts` is properly set up and that Vitest is installed and configured correctly.

## Technologies Used

- **Next.js**: React framework for building server-side rendered and static web applications.

- **TypeScript**: Static type checking for JavaScript.

- **Tailwind CSS**: Utility-first CSS framework.

- **Vite**: Fast development and build tool for modern web projects.

- **ESLint & Prettier**: Code linting and formatting.

- **Vitest**: Vitest is a fast and modern testing framework that integrates seamlessly with Vite.

- **React Testing Library**: Testing utilities for React components.
