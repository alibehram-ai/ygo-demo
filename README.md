# YGO Demo - SvelteKit with Tailwind CSS

A SvelteKit demo application with Tailwind CSS integration, featuring a showcase app with a word guessing game (Sverdle) that works without JavaScript.

## Features

- ✨ **SvelteKit** - Modern web framework with TypeScript support
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🎮 **Sverdle Game** - A Wordle-like word guessing game
- 🧮 **Interactive Counter** - Demonstrates reactive state management
- 📱 **Responsive Design** - Mobile-friendly layout
- ⚡ **Fast Development** - Hot module replacement and instant updates

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

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

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Main layout component
│   ├── +page.svelte             # Home page with Tailwind demo
│   ├── Counter.svelte           # Interactive counter component
│   ├── Header.svelte            # Navigation header
│   ├── about/                   # About page
│   └── sverdle/                 # Sverdle game pages
├── lib/                         # Shared utilities and components
├── app.html                     # HTML template
└── app.css                      # Global styles with Tailwind directives
```

## Tailwind CSS Integration

This project includes a fully configured Tailwind CSS setup:

- **Configuration**: `tailwind.config.js` - Content paths and theme customization
- **PostCSS**: `postcss.config.js` - PostCSS configuration with Tailwind plugin
- **Styles**: `src/app.css` - Global styles with Tailwind directives

### Example Tailwind Usage

The home page includes a demonstration card showing various Tailwind utility classes:

```svelte
<div class="mt-8 p-6 bg-white rounded-lg shadow-lg border-2 border-blue-200 max-w-md">
  <h3 class="text-xl font-bold text-blue-800 mb-4">🎉 Tailwind CSS is working!</h3>
  <p class="text-gray-600 mb-4">Tailwind CSS is successfully integrated.</p>
  <div class="flex space-x-2">
    <span class="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">Responsive</span>
    <span class="inline-block px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">Utility-first</span>
    <span class="inline-block px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full">Fast</span>
  </div>
</div>
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run Svelte type checking
- `npm run check:watch` - Run type checking in watch mode

## Learn More

- [SvelteKit Documentation](https://svelte.dev/docs/kit)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Svelte Documentation](https://svelte.dev/docs)

---

This demo showcases the power of combining SvelteKit's developer experience with Tailwind CSS's utility-first approach for rapid UI development.
