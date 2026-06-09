# Agent Instructions: Update Metrics and Stats

## Goal
Periodically update the user/install/download counts and key stats across the enbonnet.com portfolio. This keeps the numbers honest and shows real traction.

## File to edit
- `src/pages/index.astro` — all data lives in this single file.

## Data to update

### 1. VSCode Extensions (`featuredProjects`)
Find the `featuredProjects` array. For each VSCode Extension, update: `metric`.

**Extensions:** `rtk-map`, `routes-react-router`.

**Open VSX:**
- API: `GET https://open-vsx.org/api/enBonnet/{EXTENSION}`
- Read field: `downloadCount`.

**Microsoft Marketplace (VSCode):**
- Method: Scrape the HTML page: `https://marketplace.visualstudio.com/items?itemName=enbonnet.{EXTENSION}`.
- Look for: `.installs-text` or text matching `N installs`.
- Marketplace also rate-limits; if scraping fails, fallback to Open VSX only or keep the last known value.

**When updating:**
- If **Marketplace** install count is available: format as `"X,XXX total installs"` (includes both stores).
- If **only Open VSX** is available: format as `"X,XXX Open VSX downloads"`.

### 2. Themes (`themes`)
Find the `themes` array. For each theme, update:
- `marketplace` — VSCode Marketplace installs.
- `openVsx` — Open VSX downloads.
- `installs` — total (`marketplace` + `openVsx`).

**Themes (10 total):**
| Theme Name      | Marketplace ext ID       | Open VSX ID (API)     |
|-----------------|--------------------------|-----------------------|
| Supabase Theme  | `enbonnet.supabase-theme`| `enBonnet/supabase-theme` |
| Orange Flavor   | `enbonnet.orange-flavor` | `enBonnet/orange-flavor-theme` |
| TanStack Theme  | `enbonnet.tanstack-theme`| `enBonnet/tanstack-theme` |
| Orange Ocean    | `enbonnet.orange-ocean`  | `enBonNet/orange-ocean` (capital N) |
| Bumble Coffee   | `enbonnet.bumble-coffee` | `enBonNet/bumble-coffee-theme` |
| Humans Theme    | `enbonnet.humans-theme`  | `enBonNet/humans-theme` |
| Svelte Theme    | `enbonnet.svelte-theme`  | `enBonNet/svelte-theme` |
| Green Night     | `enbonnet.green-night`   | `enBonNet/green-night-theme` |
| Lilo Theme      | `enbonnet.lilo`          | `enBonNet/lilo-theme` |

> **Important ID matching:**
> - Open VSX extension IDs may differ from Marketplace IDs. Some themes use a `-theme` suffix on Open VSX (e.g., `orange-flavor-theme`, `bumble-coffee-theme`, `green-night-theme`, `lilo-theme`).
> - The publisher namespace on Open VSX can be either `enBonnet` or `enBonNet` (case-sensitive). If one fails, try the other variation.

**After updating all themes:**
1. Re-sum all `marketplace` values → update the `"marketplace"` total span.
2. Re-sum all `openVsx` values → update the `"openVsx"` total span.
3. Re-sum all `installs` values → compute the new combined total.

### 3. Stats cards (`stat-grid` and `theme-stats`)
After updating themes:
- `statPublishedThemes` — count of items in the `themes` array. Update the `<strong>` number.
- `statThemeInstalls` / `themesInstalls` — combined total from all themes. Format as `X.Xk+` if over 1,000. There are **two** places to update this number (the `bureau-card` grid and the theme panel `theme-stats`).
- `statVscodeExts` — count of VSCode dev extensions on Open VSX (count the extensions under `enBonnet` publisher).
- `statMergedPRs` — check `https://github.com/search?q=author%3AenBonnet+is%3Apr+is%3Amerged+-user%3AenBonnet&type=pullrequests` and round up to nearest 5 or 10.

### 4. GitHub project metrics
- `Migrazed`: Stars from `https://github.com/enBonnet/migrazed`.
- `Frontend-Tools`: Stars and forks from `https://github.com/enBonnet/Frontend-Tools`.
- Format: `"X GitHub stars"` or `"X stars / Y forks"`.

### 5. Small tools / other projects
Check `https://github.com/enbonnet?tab=repositories` for new repos worth surfacing. If a project has grown significantly (new stars, downloads, or installs), consider adding it to:
- `featuredProjects` (if major), or
- `smallTools` (if smaller but notable).

When adding new projects, ensure the `metric` field uses the same formatting rules as existing entries.

## Sorting rules

### Theme list (`themes`)
The `themes` array must remain **sorted by total installs descending** (highest first). After updating `installs`, sort the array:
```js
const themesByInstalls = [...themes].sort(
  (a, b) => Number(b.installs.replace(/,/g, "")) - Number(a.installs.replace(/,/g, "")),
);
```
Ensure the `themesByInstalls` array is generated from the sorted `themes` array.

### Featured projects (`featuredProjects`)
Keep the current visual order/layout (`rtk`, `routes`, `cli`, `mail`, `catalog`, `bread`). Do not reorder these unless a new major project is added.

### Small tools (`smallTools`)
Alphabetical order by `name` is preferred when adding new entries.

## Numbers formatting rules

### Thousands separator
- Use commas: `1,126`, `5,733`, `13,599`.
- Never round in the detailed breakdowns (themes, extensions, small tools).

### Abbreviated stats (summary cards)
- Under 10,000: round to nearest 100, append `+`: `5,700+`.
- 10,000+: round to nearest 1,000, append `k+`: `14.5k+`.

### Zero handling
- If an extension/theme shows `0` on a marketplace, verify the ext ID. If the marketplace truly has 0, show `0`.
- If a fetch fails due to rate limiting, preserve the previous number and note it.

## Translation keys
The page uses `data-i18n` attributes for i18n. When updating text that has a `data-i18n` key:
1. Update the English text in the HTML attribute.
2. Also update `public/translations.json` to keep translations in sync.

## Build verification
After all edits, build the project to make sure there are no syntax errors:
```bash
pnpm build
# or
npx astro build
```

## Summary checklist before finishing
- [ ] All 9+ themes have updated `marketplace`, `openVsx`, and `installs` totals.
- [ ] `themes` array is sorted by total installs descending.
- [ ] Combined stats (total installs, theme count, VSCode extensions count, PR count) are recalculated and updated in **both** the bureau-card and the theme panel.
- [ ] `featuredProjects` metrics are updated (extensions, GitHub stars/forks).
- [ ] `smallTools` checked for new entries.
- [ ] Any new text with `data-i18n` keys is also updated in `public/translations.json`.
- [ ] Build passes (`pnpm build`).
- [ ] The new totals make sense mathematically (cross-check `marketplace + openVsx = installs`).

## Quick reference: all data sources
| Data point               | Source URL / API                                                                 |
|--------------------------|-----------------------------------------------------------------------------------|
| Open VSX downloads       | `https://open-vsx.org/api/enBonNet/{extension-id}`                                |
| VSCode Marketplace       | `https://marketplace.visualstudio.com/items?itemName=enbonnet.{extension-id}`     |
| GitHub stars/forks       | `https://github.com/enBonnet/{repo}` (read from page or GitHub API)              |
| Merged PRs count         | `https://github.com/search?q=author%3AenBonnet+is%3Apr+is%3Amerged+-user%3AenBonnet&type=pullrequests` |
| Publisher extensions     | `https://marketplace.visualstudio.com/publishers/enbonnet`                       |
| GitHub repos list        | `https://github.com/enbonnet?tab=repositories`                                     |
