# YGO Demo - SvelteKit Project

A Yu-Gi-Oh! frontend demo application built with SvelteKit and TypeScript.

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ygo-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Your app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint and Prettier checks
- `npm run format` - Format code with Prettier
- `npm run check` - Run type checking
- `npm run test` - Run tests (requires Playwright installation)

## Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.com/)
- **Styling**: CSS
- **Testing**: [Vitest](https://vitest.dev/) with [Playwright](https://playwright.dev/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)

## Project Structure

```
src/
├── lib/          # Reusable components and utilities
├── routes/       # App routes (file-based routing)
│   ├── +layout.svelte
│   └── +page.svelte
├── app.html      # HTML template
└── app.d.ts      # Type definitions
```

## Testing

To run tests, you'll need to install Playwright browsers first:

```bash
npx playwright install
npm run test
```

## Building for Production

```bash
npm run build
```

The built app will be in the `build` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## License

See [LICENSE](LICENSE) file for details.
