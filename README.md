# Portfolio

A modern, minimalist portfolio website built with Astro, TypeScript, and Tailwind CSS. Features server-side password protection via PHP, responsive design, and a professional layout perfect for showcasing IT projects and skills.

## Features

- **Server-Side Password Protection** - PHP login gate with bcrypt hashing; content is never sent to unauthenticated visitors
- **Brute Force Protection** - Server-side rate limiting (5 attempts, 15-minute lockout)
- **Security Headers** - CSP, X-Frame-Options, Referrer-Policy, and more via .htaccess
- **CSRF Protection** - Token-based form protection against cross-site request forgery
- **Bilingual Support** - Instant EN/DE language switching without page reload
- **Dark Mode** - Light/Dark theme toggle with localStorage persistence
- **Modern Tech Stack** - Built with Astro, TypeScript, and Tailwind CSS v3
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Fast Performance** - Static site generation for optimal loading speed
- **Minimalist Design** - Clean, professional aesthetic
- **Single Page Layout** - Smooth scrolling between sections
- **Legal Compliance** - Impressum modal for German/EU legal requirements
- **GDPR Compliant Fonts** - Self-hosted Inter font (no Google Fonts requests)
- **Privacy First** - Personal data and password hash protected via gitignored config files

## Tech Stack

- **[Astro](https://astro.build/)** - Modern static site generator
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PHP](https://www.php.net/)** - Server-side authentication gate
- **[Inter Font](https://rsms.me/inter/)** - Self-hosted, clean typography

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
│   │   ├── LanguageToggle.astro
│   │   ├── ThemeToggle.astro
│   │   ├── Projects.astro
│   │   └── Skills.astro
│   ├── i18n/             # Translation infrastructure
│   │   ├── translations.ts
│   │   └── utils.ts
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro
│   ├── pages/            # Routes
│   │   └── index.astro
│   └── styles/           # Global styles
│       └── global.css
├── public/               # Static assets (copied to dist/)
│   ├── .htaccess         # Apache security config
│   ├── index.php         # PHP login gate
│   ├── config.php        # Password hash (gitignored)
│   ├── config.example.php# Template for config.php
│   ├── fonts/            # Self-hosted Inter font
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- PHP (for local testing of the login gate)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up personal data:**
   ```bash
   cp src/config/personal-data.example.ts src/config/personal-data.ts
   ```
   Edit `src/config/personal-data.ts` with your real information.

3. **Set up password:**
   ```bash
   cp public/config.example.php public/config.php
   ```
   Generate a bcrypt hash and add it to `config.php` (see [Password Management](#password-management)).

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   This runs the Astro dev server at `http://localhost:4321` (no PHP login gate).

5. **Test with PHP login gate (optional):**
   ```bash
   npm run build
   php -S localhost:8080 -t dist
   ```
   Visit `http://localhost:8080` to test the full login flow.

### Available Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Install dependencies                             |
| `npm run dev`          | Start Astro dev server at `localhost:4321`        |
| `npm run build`        | Build production site to `./dist/`               |
| `php -S localhost:8080 -t dist` | Test PHP login gate locally              |

## Configuration

### Password Management

The portfolio uses a PHP login gate with bcrypt password hashing. The hash is stored in `public/config.php` (gitignored).

**Setting up your password:**

1. Copy the example config:
   ```bash
   cp public/config.example.php public/config.php
   ```

2. Generate a bcrypt hash using one of these methods:

   **With PHP CLI:**
   ```bash
   php -r "echo password_hash('your-password', PASSWORD_DEFAULT) . PHP_EOL;"
   ```

   **With Python:**
   ```bash
   python3 -c "import bcrypt; print(bcrypt.hashpw(b'your-password', bcrypt.gensalt()).decode())"
   ```

   **Via temporary web script:**
   Create a temporary `generate_hash.php`, upload it, use it once, then delete it immediately.

3. Paste the hash into `public/config.php`:
   ```php
   define('PASSWORD_HASH', '$2y$10$your-generated-hash-here');
   ```

**Security notes:**
- `config.php` is gitignored and blocked from direct web access via `.htaccess`
- The hash never leaves the server; PHP processes it server-side
- bcrypt is intentionally slow, making brute-force attacks impractical

### Customizing Content

#### Personal Data (Contact & Impressum)

1. **Create your personal data file:**
   ```bash
   cp src/config/personal-data.example.ts src/config/personal-data.ts
   ```

2. **Edit `src/config/personal-data.ts`** with your actual information.

3. This file is gitignored and will never be committed to GitHub.

#### Other Content

- **Hero Section**: Edit `src/components/Hero.astro`
- **About Section**: Edit `src/components/About.astro`
- **Projects**: Update the `projects` array in `src/components/Projects.astro`
- **Skills**: Edit the `skillCategories` array in `src/components/Skills.astro`
- **Translations**: Edit `src/i18n/translations.ts` for EN/DE content

## Deployment (Hetzner Webhosting)

This site is designed for Hetzner Webhosting S (or any Apache + PHP shared hosting).

1. **Build your site:**
   ```bash
   npm run build
   ```

2. **Upload `dist/` contents to your web root via FTP/SFTP:**
   ```
   /your-web-root/
   ├── .htaccess         # Security headers + access rules
   ├── index.php         # PHP login gate (entry point)
   ├── index.html        # Portfolio (served by PHP after auth)
   ├── config.php        # Password hash (upload manually!)
   ├── config.example.php
   ├── fonts/
   ├── _astro/
   ├── favicon.svg
   └── robots.txt
   ```

   **Important:** `config.php` is gitignored and not in the build output. You must upload it separately or create it on the server.

3. **Verify it works:**
   - Visit your domain — you should see the login page
   - Enter your password — portfolio should load
   - Try accessing `/index.html` directly — should get 403 Forbidden
   - Try viewing page source on login page — no portfolio content visible

### How the Authentication Works

1. Apache serves `index.php` (via `DirectoryIndex` in `.htaccess`)
2. PHP checks for a valid session
3. If not authenticated: only the login form HTML is sent (portfolio content stays on server)
4. If password is correct: PHP sets a server-side session and serves `index.html` via `readfile()`
5. Direct access to `index.html` and `config.php` is blocked by `.htaccess`

## Security

### What's Protected

| File | Protection |
|------|-----------|
| `config.php` | Gitignored + blocked by .htaccess |
| `personal-data.ts` | Gitignored |
| `index.html` | Blocked by .htaccess (only served via PHP) |
| Session cookie | HttpOnly, Secure, SameSite=Strict |
| Login form | CSRF token protection |
| Password hash | bcrypt with salt (server-side only) |

### Security Headers (via .htaccess)

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy: default-src 'self'; ...`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

---

Built with Astro, TypeScript, Tailwind CSS, and PHP
