# Deployment Guide - Hetzner Shared Hosting

## Current Status: Protected from Google

✅ **robots.txt** added - blocks all search engines
✅ **Meta tags** added - noindex, nofollow
✅ **Password protected** - visitors need password

Your site is **triple protected** from being indexed!

---

## Overview

- **GitHub Repo:** Public (employers can see code)
- **Live Site:** On Hetzner (password protected, not indexed)
- **Personal Data:** Using placeholders (safe for GitHub)

---

## When Ready to Be Indexed by Google

1. **Remove meta tags from `src/layouts/Layout.astro`:**
   - Delete lines 16-18 (the noindex meta tags)

2. **Update `public/robots.txt`:**
   - Replace content with:
     ```
     User-agent: *
     Allow: /
     ```

3. **Rebuild and redeploy:**
   ```bash
   npm run build
   # Upload dist/ folder via FTP
   ```

---

## Deployment Process

### Step 1: Prepare Production Build

**Update password in code (temporary, for build only):**

Edit `src/components/PasswordGate.astro` line 68:
```javascript
const PASSWORD_HASH = "YOUR_PRODUCTION_HASH_HERE";
```

**Generate production password hash:**
```bash
echo -n "your-secure-password" | sha256sum
```

**Build:**
```bash
npm run build
```

**Test locally:**
```bash
npm run preview
# Visit http://localhost:4321
```

---

### Step 2: Connect to Hetzner via FTP

**You'll need:**
- FTP Host: (from Hetzner control panel)
- Username: (from Hetzner)
- Password: (from Hetzner)
- Port: 21 (FTP) or 22 (SFTP)

**FTP Clients (choose one):**
- FileZilla: https://filezilla-project.org/download.php
- Cyberduck: https://cyberduck.io/download/
- WinSCP (Windows): https://winscp.net/

---

### Step 3: Upload Files

**Important:** Upload the **contents** of `dist/` folder, NOT the folder itself.

**Correct structure on Hetzner:**
```
/public_html/ (or /html/)
├── index.html
├── _astro/
├── robots.txt
├── favicon.svg
└── (other files)
```

**Incorrect structure:**
```
/public_html/
└── dist/
    ├── index.html
    └── ...
```

---

### Step 4: Test Your Site

Visit your domain and verify:
- [ ] Password gate appears
- [ ] Password works
- [ ] Language toggle (EN/DE) works
- [ ] Dark mode toggle works
- [ ] All sections load correctly
- [ ] Links work (email, LinkedIn, etc.)
- [ ] Mobile responsive
- [ ] Impressum modal opens

---

## Updating Personal Information (Later)

When ready to add real contact info:

1. **Edit source files:**
   - `src/components/Contact.astro` - email, LinkedIn, GitHub
   - `src/components/Impressum.astro` - address

2. **Rebuild:**
   ```bash
   npm run build
   ```

3. **Re-upload via FTP:**
   - Upload new `dist/` contents
   - Overwrite existing files

---

## Production Password Management

**Current development password:** "Bewerbung1"
**Hash:** `2e7ed9022197a7f7a6af67f2e4d0b9075429a5aca92df9859c7a5220cee9d11e`

**For production deployment:**
1. Choose a secure password
2. Generate hash: `echo -n "your-password" | sha256sum`
3. Update `PasswordGate.astro` line 68 before building
4. Build and deploy

**Security Note:** The hash will be visible in the browser's JavaScript bundle. This is acceptable for basic privacy (not high security). The password itself is never stored or transmitted.

---

## Troubleshooting

**Site not loading:**
- Check files are in correct location (not in a `dist/` subfolder)
- Verify `index.html` is in web root
- Check Hetzner DNS settings

**Password not working:**
- Verify you used the correct hash
- Clear browser cache
- Check browser console for errors

**Styles not loading:**
- Ensure `_astro/` folder uploaded correctly
- Check file permissions (755 for folders, 644 for files)

**404 errors:**
- Verify all files from `dist/` were uploaded
- Check folder structure matches expected layout

---

## Quick Reference

**Build command:**
```bash
npm run build
```

**Test locally:**
```bash
npm run preview
```

**Generate password hash:**
```bash
echo -n "password-here" | sha256sum
```

**Web root locations (common):**
- `/public_html/`
- `/html/`
- `/httpdocs/`
- Check your Hetzner control panel for exact path

---

## Support

- **Astro Docs:** https://docs.astro.build
- **Hetzner Help:** https://docs.hetzner.com
- **FileZilla Guide:** https://wiki.filezilla-project.org/Using

---

**Last Updated:** December 3, 2025
**Build Status:** ✅ Production Ready
