# How to Update Your Personal Data

Your portfolio now uses a safe config system that keeps personal data out of GitHub!

## Quick Start

### 1. Edit Your Personal Data (Locally Only)

Open: `src/config/personal-data.ts`

```typescript
export const personalData = {
  contact: {
    email: 'your.real@email.com',           // ← Add your real email
    linkedin: 'https://linkedin.com/in/your-profile',  // ← Your LinkedIn
    github: 'https://github.com/yourusername',         // ← Your GitHub
  },

  impressum: {
    street: 'Your Street 123',              // ← Your real address
    city: '12345 Your City',                // ← Your city
    country: 'Germany',                     // ← Your country
  },
};
```

### 2. Build for Production

```bash
npm run build
```

### 3. Deploy

Upload the `dist/` folder to Hetzner via FTP.

---

## What's Protected

✅ **NEVER committed to GitHub:**
- `src/config/personal-data.ts` (your real data)
- `.env` (password hash)

✅ **Safe on GitHub:**
- `src/config/personal-data.example.ts` (template only)
- All component code (imports the config)

---

## Where Your Data Appears

Your data from `personal-data.ts` automatically appears in:

- **Contact section:** Email, LinkedIn, GitHub links
- **Impressum modal:** Address and email

---

## Continue Development Safely

You can now:
1. Edit code freely
2. Commit to Git normally
3. Push to GitHub anytime

Your personal data stays on your computer only!

---

## Update Process

**When you change your personal info:**

1. Edit `src/config/personal-data.ts`
2. Run `npm run build`
3. Upload new `dist/` folder to Hetzner
4. Done!

No need to commit anything to GitHub.

---

## Verify Protection

Check that personal-data.ts is ignored:

```bash
git check-ignore src/config/personal-data.ts
```

Should output: `src/config/personal-data.ts` ✅

---

**Your personal data is now safe!** 🔒
