# Marvin Espeter - Portfolio

A modern, minimalist portfolio website built with Astro, TypeScript, and Tailwind CSS. Features password protection, responsive design, and a professional layout perfect for showcasing IT projects and skills.

## Features

- **Password Protected** - Secure environment-based password management with SHA-256 hashing
- **Brute Force Protection** - Rate limiting (5 attempts, 15-minute lockout)
- **Bilingual Support** - Instant EN/DE language switching without page reload
- **Dark Mode** - Light/Dark theme toggle with localStorage persistence
- **Modern Tech Stack** - Built with Astro, TypeScript, and Tailwind CSS v3
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Fast Performance** - Static site generation for optimal loading speed
- **Minimalist Design** - Clean, professional aesthetic
- **Single Page Layout** - Smooth scrolling between sections
- **Legal Compliance** - Impressum modal for German/EU legal requirements
- **SEO Friendly** - Optimized meta tags and semantic HTML
- **Privacy First** - Personal data protected via gitignored config files

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
| `./build.sh`           | Build with environment variables properly loaded |
| `npm run preview`      | Preview build locally before deploying           |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## Configuration

### Password Management

The portfolio uses environment variables for secure password management:

**Local Development:**
1. Copy the example file:
   ```bash
   cp .env.example .env
   ```
2. Generate your password hash:
   ```bash
   echo -n "your-password" | sha256sum
   ```
3. Update `.env` with your hash:
   ```env
   PUBLIC_PASSWORD_HASH=your-generated-hash-here
   ```

**Production Deployment:**
Set `PUBLIC_PASSWORD_HASH` in your deployment platform's environment variables:
- **Vercel**: Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **Cloudflare Pages**: Settings → Environment Variables

⚠️ **Important**: Never commit `.env` to git (already in `.gitignore`)

### Customizing Content

#### Personal Data (Contact & Impressum)
The portfolio uses a secure configuration system to keep your personal information out of Git:

1. **Create your personal data file:**
   ```bash
   cp src/config/personal-data.example.ts src/config/personal-data.ts
   ```

2. **Edit `src/config/personal-data.ts`** with your actual information:
   ```typescript
   export const personalData = {
     contact: {
       email: 'your.email@example.com',
       linkedin: 'https://linkedin.com/in/yourprofile',
       github: 'https://github.com/yourusername',
     },
     impressum: {
       street: 'Your Street 123',
       city: '12345 Your City',
       country: 'Your Country',
     },
   };
   ```

3. **That's it!** This file is gitignored and will never be committed to GitHub.

#### Other Content

- **Hero Section**: Edit `src/components/Hero.astro` for name and tagline
- **About Section**: Edit `src/components/About.astro` for bio and personal story
- **Projects**: Update the `projects` array in `src/components/Projects.astro`
- **Skills**: Edit the `skillCategories` array in `src/components/Skills.astro`

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

### Deploy to Shared Hosting (FTP/SFTP)

For traditional shared hosting (like Hetzner, HostGator, etc.):

1. **Build your site:**
   ```bash
   ./build.sh
   ```

2. **Connect via FTP/SFTP:**
   - Use an FTP client like FileZilla
   - Host: Your hosting provider's FTP address
   - Port: 21 (FTP) or 22 (SFTP)
   - Username/Password: From your hosting provider

3. **Upload the `dist/` folder contents:**
   - Navigate to your public_html or web root directory
   - Upload all files from the `dist/` folder (not the folder itself)

4. **Enable HTTPS/SSL:**
   - Log into your hosting control panel
   - Enable Let's Encrypt SSL certificate (usually free and automatic)
   - This is **required** for the password system to work (Web Crypto API needs HTTPS)

5. **Test your site:**
   - Visit `https://yourdomain.com` (note the "s" in https)
   - Test password login and all features

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

## Advanced: 1Password Secrets Management

For multiple projects or team collaboration, consider using 1Password CLI for automated secret injection:

```bash
# Install 1Password CLI
brew install 1password-cli

# Store secrets in 1Password and use references
# .env.template:
PUBLIC_PASSWORD_HASH=op://portfolio/password/hash

# Run with automatic secret injection
op run --env-file=.env.template -- npm run dev
```

This eliminates plaintext secrets entirely. See [1Password Developer Docs](https://developer.1password.com/docs/cli/) for details.

## Future Enhancements

Potential improvements you might want to add:
- [ ] Blog section for technical articles
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
