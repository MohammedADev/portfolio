# Modern Portfolio Website

## Overview

A modern, minimalist portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4. Features a unique camera/viewfinder-inspired design with smooth animations and interactive elements.

## Key Features

- Custom cursor with interactive animations
- Camera viewfinder-inspired interface
- Responsive design with Tailwind CSS
- Dynamic project showcase
- Photography gallery with filtering
- Contact form with modern UI components
- Loading screen animations
- SEO optimized with Next.js metadata

## Core Technologies

- Next.js 15
- TypeScript
- React 19
- Tailwind CSS v4
- Lucide Icons
- Radix UI Components
- Motion for animations
- Geist Font Family

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/MohammedADev/portfolio.git
```

2. Install dependencies with Bun

```bash
bun install
```

3. Start the development server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## Project Structure

```
portfolio/
├── app/                  # Next.js app router pages and layouts
│   ├── about/           # About page with skills and experience
│   ├── projects/        # Project showcase page
│   ├── gallery/         # Photography portfolio
│   └── contact/         # Contact form page
├── components/          # Reusable React components
│   ├── ui/             # UI components (buttons, inputs, etc.)
│   └── layout/         # Layout components
├── lib/                # Utility functions and metadata configuration
└── public/            # Static assets and images
```

## Key Components

- `Layout`: Main layout component with custom cursor and viewfinder overlay
- `Navigation`: Side navigation with animated icons
- `CustomCursor`: Interactive cursor animation
- `ViewfinderOverlay`: Camera-inspired UI overlay
- `LoadingScreen`: Animated loading transitions

## Styling

The project uses Tailwind CSS v4 with custom animations and a dark theme. Key features include:

- Custom color schemes with CSS variables
- Responsive design patterns
- Interactive hover states
- Smooth transitions and animations
- Gradient text effects
- Glass-morphism elements

## Customization

1. Update metadata in `lib/metadata.ts`
2. Modify theme colors in `app/globals.css`
3. Add/edit projects in `app/projects/page.tsx`
4. Customize gallery categories in `app/gallery/page.tsx`

## Development

```bash
# Format code
bun run format

# Run linting
bun run lint

# Build for production
bun run build

# Start production server
bun start
```

## License

This project is licensed under the MIT License with Attribution Requirement - see the [LICENSE.md](LICENSE.md) file for details.

**Attribution Requirement:** If you use or modify this portfolio template, you must include a visible attribution link to the original author in your website's footer or about section.

## Contact

Mohammed A. - work@mohammedabdelaziz.com

Project Link: [https://github.com/MohammedADev/portfolio](https://github.com/MohammedADev/portfolio)

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [Geist Font](https://vercel.com/font)
- [Bun](https://bun.sh/)
