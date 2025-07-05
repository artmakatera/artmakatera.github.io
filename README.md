# Artem Makatera - Personal Website

A modern, responsive personal portfolio website featuring smooth animations, dark mode support, and mobile-first design.

## ✨ Features

- **🚀 Fast & Modern**: Built with Astro for optimal performance and SEO
- **📱 Responsive Design**: Mobile-first approach with hamburger menu navigation
- **🌙 Dark Mode**: Seamless light/dark theme switching with system preference detection
- **⚡ Interactive UI**: Smooth animations and transitions using Framer Motion
- **🎨 Beautiful Components**: Custom-designed cards, badges, and UI elements
- **♿ Accessible**: Keyboard navigation, ARIA labels, and semantic HTML
- **📊 Skills Showcase**: Interactive skills section with technology logos
- **📬 Contact Integration**: Easy-to-find contact information and social links

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **UI Library**: [React](https://reactjs.org/) - Component-based UI
- **Styling**: [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Animation library
- **Icons**: [Lucide React](https://lucide.dev/) & [MDI](https://materialdesignicons.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Headless UI primitives
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/) - Static type checking

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/artmakatera/artmakatera.github.io.git
cd personal-website-astro
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## 🧞 Available Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start local development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro ...` | Run Astro CLI commands |

## 📁 Project Structure

```
/
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── Artem Makatera Resume.pdf
├── src/
│   ├── assets/            # Images and graphics
│   │   ├── tools-logo/    # Technology logos
│   │   └── *.{png,jpg,svg}
│   ├── components/        # Reusable components
│   │   ├── Header.astro   # Main navigation
│   │   ├── Banner/        # Hero section components
│   │   └── ui/            # UI primitives
│   ├── hooks/             # Custom React hooks
│   │   ├── useTheme.ts    # Theme management
│   │   └── useDimensions.ts
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Route pages
│   │   └── index.astro
│   ├── styles/            # Global styles
│   │   └── global.css
│   └── utils/             # Utility functions
│       └── cn.ts          # Class name utilities
├── astro.config.mjs       # Astro configuration
├── tailwind.config.js     # TailwindCSS configuration
└── tsconfig.json          # TypeScript configuration
```



## 📄 License

This is a personal portfolio website. All rights reserved.

## � Contact

**Artem Makatera**
- Portfolio: https://artmakatera.github.io/
- LinkedIn: https://www.linkedin.com/in/artem-makatera-a19769a0/
- Email: artmakatera@gmail.com
- GitHub: https://github.com/artmakatera

---

Built with ❤️ using Astro and modern web technologies.
