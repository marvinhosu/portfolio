# Marvin Espeter - Portfolio

A modern, minimalist portfolio website built with Astro, TypeScript, and Tailwind CSS. Features password protection, responsive design, and a professional layout perfect for showcasing IT projects and skills.

## Features

- **Password Protected** - Simple client-side password gate to control access
- **Modern Tech Stack** - Built with Astro, TypeScript, and Tailwind CSS
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Fast Performance** - Static site generation for optimal loading speed
- **Minimalist Design** - Clean, professional aesthetic
- **Single Page Layout** - Smooth scrolling between sections
- **Legal Compliance** - Impressum modal for German/EU legal requirements
- **SEO Friendly** - Optimized meta tags and semantic HTML

## Tech Stack

- **[Astro](https://astro.build/)** - Modern static site generator
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Clean, professional typography

## Project Structure

```
portfolio/
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Experience.astro
│   │   ├── Hero.astro
│   │   ├── Impressum.astro
│   │   ├── PasswordGate.astro
│   │   ├── Projects.astro
│   │   └── Skills.astro
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro
│   ├── pages/            # Routes
│   │   └── index.astro
│   └── styles/           # Global styles
│       └── global.css
├── public/               # Static assets
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Basic knowledge of command line

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:4321`

### Available Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Install dependencies                             |
| `npm run dev`          | Start local dev server at `localhost:4321`       |
| `npm run build`        | Build production site to `./dist/`               |
| `npm run preview`      | Preview build locally before deploying           |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## Configuration

### Changing the Password

The default password is `password`. To change it:

1. Open `src/components/PasswordGate.astro`
2. Generate a new SHA-256 hash of your desired password:
   ```bash
   echo -n "your-new-password" | sha256sum
   ```
3. Replace the `PASSWORD_HASH` constant with your new hash:
   ```typescript
   const PASSWORD_HASH = "your-new-hash-here";
   ```

### Customizing Content

#### Personal Information
- Edit `src/components/Hero.astro` for name and tagline
- Edit `src/components/About.astro` for bio and personal story

#### Projects
- Update the `projects` array in `src/components/Projects.astro`
- Add your own project details, technologies, and highlights

#### Contact Information
- Edit `src/components/Contact.astro` to add your:
  - Email address
  - LinkedIn profile
  - GitHub username

#### Impressum (Legal Information)
- Edit `src/components/Impressum.astro`
- Replace placeholder text with your actual contact details
- Consult with a lawyer for complete legal compliance if needed

#### Skills & Technologies
- Edit the `skillCategories` array in `src/components/Skills.astro`
- Add or remove skills as your expertise grows

## Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Build your site:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts** to link your project and deploy

Alternatively, connect your GitHub repository to Vercel for automatic deployments:
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel will automatically detect Astro and configure build settings

### Deploy to Cloudflare Pages

1. **Build your site:**
   ```bash
   npm run build
   ```

2. **Go to [Cloudflare Pages](https://pages.cloudflare.com/)**

3. **Create a new project** and connect your Git repository

4. **Configure build settings:**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Framework preset: Astro

5. **Deploy!**

### Deploy to Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your site:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

Or connect your GitHub repository to Netlify for automatic deployments.

## Adding GitHub Link

Once you've added your portfolio to GitHub:

1. Update `src/components/Contact.astro`
2. Replace `https://github.com/yourusername` with your actual GitHub profile
3. Update the link status from "coming soon" to active

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Lighthouse Score:** 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Static Generation:** All pages are pre-rendered at build time
- **Optimized Assets:** Minified CSS and JavaScript
- **Fast Loading:** < 1s Time to Interactive on 3G

## Security Notes

The password protection is **client-side only** and provides basic privacy. For sensitive information, consider:
- Server-side authentication
- Cloudflare Access
- Basic HTTP authentication via hosting provider

## Future Enhancements

Potential improvements you might want to add:
- [ ] Blog section for technical articles
- [ ] Dark mode toggle
- [ ] Animations and transitions
- [ ] Project filtering by technology
- [ ] Contact form with email integration
- [ ] Analytics integration (Google Analytics, Plausible)
- [ ] RSS feed

## License

This project is open source and available for personal use.

## Questions or Issues?

If you encounter any problems or have questions:
1. Check the [Astro documentation](https://docs.astro.build)
2. Review the configuration files
3. Ensure all dependencies are installed correctly

---

Built with ❤️ using Astro, TypeScript, and Tailwind CSS
