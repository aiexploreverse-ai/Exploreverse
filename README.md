# Exploreverse Website

Modern, responsive website built with Next.js, React, and Tailwind CSS.

## Design System

The design system follows a **blue/purple tech gradient** aesthetic inspired by modern tech companies like GitHub and Next.js. Full design documentation is available in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).

### Key Features
- 🎨 Modern blue/purple gradient color scheme
- ⚡ Built with Next.js 16 and React 19
- 💅 Styled with Tailwind CSS
- 🎯 Responsive design (mobile-first)
- ✨ Lucide Icons integration
- 🚀 Optimized for performance

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd website
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
website/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## Design Tokens

All design tokens are configured in `tailwind.config.ts`:
- Color palette (primary, secondary, neutral, accent)
- Typography scale
- Spacing (8px grid system)
- Border radius
- Shadows
- Gradients

## Pages

- **Hero Section**: Eye-catching landing with CTA buttons
- **Features Grid**: Showcase of key features (6 cards)
- **About Section**: Company information and statistics
- **Contact/Footer**: Contact info and social links

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Language**: TypeScript

## License

MIT
