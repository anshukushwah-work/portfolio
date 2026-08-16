# Fonts

| Family          | Used for                                     | File               |
| --------------- | -------------------------------------------- | ------------------ |
| **Pricedown**   | All display headings (the GTA logo type)      | `Pricedown.ttf`    |
| **Rage Italic** | Project titles on the cards                   | `RageItalic.ttf`   |
| Intel One Mono  | All body copy, nav, badges                    | Google Fonts (CDN) |

Both self-hosted faces are wired up in `src/index.css` via `@font-face`. To
swap a file, keep the same filename and the site picks it up.

## Optional: shrink them

The two TTFs are ~168KB combined. Converting to WOFF2 cuts that roughly in
half:

```bash
npx ttf2woff2 < src/assets/fonts/RageItalic.ttf > src/assets/fonts/RageItalic.woff2
```

If you do, add the woff2 to the `src:` list in `src/index.css` *before* the
TTF so browsers prefer it:

```css
src:
  url('./assets/fonts/RageItalic.woff2') format('woff2'),
  url('./assets/fonts/RageItalic.ttf') format('truetype');
```

## Licensing

Pricedown and Rage Italic are not open-licensed web fonts. They're fine for a
personal portfolio, but check the licence before using them on anything
commercial.
