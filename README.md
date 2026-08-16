# Anshu Kushwah — Portfolio

A GTA Vice City–themed portfolio, built to match the Figma design pixel-for-pixel
on desktop and reflow sensibly below that.

[Figma source](https://www.figma.com/design/AhHwc9eyvRd9M5D4CwrQHm/Portfolio?node-id=0-1)

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the build locally
```

Requires Node 18+.

## Pages

| Route              | Figma frame               | Size       |
| ------------------ | ------------------------- | ---------- |
| `/`                | **Work**                  | 1285×4482  |
| `/about`           | **About**                 | 1280×2978  |
| `/work/oncosearch` | **OncoSearch Case Study** | 1280×9635  |

The "Case Study" button on the OncoSearch card routes to the case study page.

**One deliberate addition to the design:** the case study has no nav of its own
in Figma, which would leave no way back to the portfolio. `BackLink` in
[caseStudyParts.jsx](src/components/caseStudyParts.jsx) adds a quiet pinned
"Back to work" pill in the top-left. It's `position: fixed`, so it sits outside
the pinned page geometry and doesn't shift anything.

## Editing content

**Everything you'd want to change lives in two files** — no component edits
needed:

- [`src/data/links.js`](src/data/links.js) — contact details, resume link,
  project titles/blurbs/art, and the experience table.
- [`src/data/caseStudy.js`](src/data/caseStudy.js) — all OncoSearch copy.

The `#` placeholders are the links still to be filled in: the resume, the Yard
Management case study, seven Figma files, and the case study's *View Prototype*
and *View Designs* buttons.

> **Known typo:** the PROBLEM heading on the case study reads `PROLEM` because
> that is what the Figma file says. It's one string — `problem.heading` in
> `caseStudy.js`.

### Swapping project art

Each "UI ONLY" card takes an `image` (centred in the black well) and optionally
an `overlay` (a second shot pinned bottom-left — only the fitness card uses
one). Drop a file in `src/assets/img/` and name it:

```js
{ id: 'team-management', title: 'Team Management', image: 'team-management.webp', … }
```

## How the design was matched

A few things in the Figma file don't survive its CSS export, and were pulled out
of the SVG export instead:

- **Card borders** are a 4-stop gradient (`#4B70DB → #DA48D1 → #FE8276 → #FEC460`),
  not the flat `#4b70db` the CSS panel reports.
- **Pricedown headings** have a solid black *outside* stroke.
- **Script (Rage Italic) titles** have a purple → cyan gradient outside stroke.
- **The page background** is a 5-stop vertical wash (`.sky-gradient`).

Because Figma strokes are drawn inside a frame and don't displace content, the
1px borders are inset `box-shadow` rings (`.figma-border`, `.gradient-border`)
rather than CSS `border`, which would shift every child by 1px and make each
experience row 6px too tall.

Text uses `line-height: normal` globally — Tailwind's default of `1.5` made
every text block several px taller than the design.

On the case study, two line-heights are pinned rather than left to the browser,
because Figma and the browser disagree: **Inclusive Sans** is laid out at `1.2`
(a 64px heading measures 77px, not 81) via `.font-inclusive`, and **Intel One
Mono** body copy at `1.389` (18px → 25, 24px → 33) in the `Body` component.

The isometric cover is a flattened PNG export. Figma builds it from
3D-transformed containers using `hypot()` and container queries, which don't
translate to reliable CSS — the export is pixel-accurate and far more robust.

## Images

Figma exports the art at up to 4096px wide (~36MB for one page). `npm run` isn't
wired to it, but the originals are preserved and re-optimised with:

```bash
node scripts/optimize-images.mjs
```

That rewrites each PNG in `src/assets/img/original/` as a WebP sized for a 2x
display — currently 57MB → 3.2MB. **The originals are the source of truth**;
never delete `original/`. When you add a new export, give it a target size in
the `TARGETS` map or the script will warn and skip it.

## Responsive behaviour

Desktop (≥1024px) is the exact Figma layout, absolutely positioned. Below that,
sections fall into a single flow column: the nav stacks, the interleaved
"UI ONLY" columns become one, and the fixed-size device mockups scale down
inside `.mockup-shell`. The case study's nine blocks use the same trick
(`.cs-flow`), and the user-flow diagram scrolls sideways rather than reflowing —
a site map only reads correctly at its drawn proportions.

Verified with no horizontal overflow on all three pages at 375px, 768px, and
1320px.

## Verifying against Figma

Rather than eyeballing screenshots, geometry is checked numerically — measure
`getBoundingClientRect()` in the browser and diff against the Figma frame
coordinates. All three pages currently match within 1px:

| Page       | Expected     | Measured     |
| ---------- | ------------ | ------------ |
| Work       | 1285×4482    | 1285×4482    |
| About      | 1280×2978    | 1280×2978    |
| Case study | 1280×9635    | 1280×9635    |
