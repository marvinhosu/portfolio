# Remaining Components to Update for i18n

## Summary
You have 4 components left to update:
- Projects.astro (126 lines)
- Experience.astro (136 lines)
- Contact.astro (101 lines)
- Impressum.astro (152 lines)

Each needs the same pattern:
1. Add imports at the top
2. Replace hardcoded text with translation keys

## Pattern to Follow

### 1. Add to the top of each component:
```astro
---
import { getTranslations, getCurrentLanguage } from '../i18n/utils';

const currentLang = getCurrentLanguage();
const t = getTranslations(currentLang);
---
```

### 2. Replace text with translation keys:
- Projects: Use `t.projects.*`
- Experience: Use `t.experience.*`
- Contact: Use `t.contact.*`
- Impressum: Use `t.impressum.*`

## Quick Reference - Translation Keys

Check `/src/i18n/translations.ts` for the exact structure and available keys for each section.

---

**Current Status:**
✅ Password Gate
✅ Hero
✅ About
✅ Skills
⏳ Projects
⏳ Experience
⏳ Contact
⏳ Impressum

I can continue updating these now, or you can do it following the pattern above.
