# Portfolio Maintenance

This doc tracks where the portfolio numbers come from and how to add new projects without hunting through the page every time.

## Install Counts

Use these sources when refreshing theme and extension numbers.

### VSCode Marketplace

Marketplace pages expose the visible install count near the extension title.

Base URL:

```text
https://marketplace.visualstudio.com/items?itemName=<publisher>.<extension-name>
```

Current theme links:

| Project | Marketplace URL |
| --- | --- |
| Supabase Theme | https://marketplace.visualstudio.com/items?itemName=enbonnet.supabase-theme |
| Orange Flavor Theme | https://marketplace.visualstudio.com/items?itemName=enbonnet.orange-flavor-theme |
| TanStack Theme | https://marketplace.visualstudio.com/items?itemName=enbonnet.tanstack-theme |
| Orange Ocean Theme | https://marketplace.visualstudio.com/items?itemName=enbonnet.orange-ocean |
| Bumble Coffee | https://marketplace.visualstudio.com/items?itemName=enbonnet.bumble-coffee-theme |
| Humans Theme | https://marketplace.visualstudio.com/items?itemName=enbonnet.humans-theme |
| Svelte Theme | https://marketplace.visualstudio.com/items?itemName=enbonnet.svelte-theme |
| Green Night Theme | https://marketplace.visualstudio.com/items?itemName=enbonnet.green-night-theme |
| Lilo Theme | https://marketplace.visualstudio.com/items?itemName=enbonnet.lilo-theme |

Current developer extension links:

| Project | Marketplace URL |
| --- | --- |
| RTK Map Hook Navigator | https://marketplace.visualstudio.com/items?itemName=enbonnet.rtk-map |
| Routes React Router | https://marketplace.visualstudio.com/items?itemName=enbonnet.routes-react-router |

### Open VSX

Open VSX has a simple JSON API. The field to update is `downloadCount`.

Base API URL:

```text
https://open-vsx.org/api/<namespace>/<extension-name>
```

Current theme API links:

| Project | Open VSX API |
| --- | --- |
| Supabase Theme | https://open-vsx.org/api/enBonnet/supabase-theme |
| Orange Flavor Theme | https://open-vsx.org/api/enBonnet/orange-flavor-theme |
| TanStack Theme | https://open-vsx.org/api/enBonnet/tanstack-theme |
| Orange Ocean Theme | https://open-vsx.org/api/enBonnet/orange-ocean |
| Bumble Coffee | https://open-vsx.org/api/enBonnet/bumble-coffee-theme |
| Humans Theme | https://open-vsx.org/api/enBonnet/humans-theme |
| Svelte Theme | https://open-vsx.org/api/enBonnet/svelte-theme |
| Green Night Theme | https://open-vsx.org/api/enBonnet/green-night-theme |
| Lilo Theme | https://open-vsx.org/api/enBonnet/lilo-theme |

Current developer extension API links:

| Project | Open VSX API |
| --- | --- |
| RTK Map Hook Navigator | https://open-vsx.org/api/enBonnet/rtk-map |
| Routes React Router | https://open-vsx.org/api/enBonnet/routes-react-router |

## GitHub Project Data

Use GitHub CLI for repository metadata.

List public repos:

```sh
gh repo list enBonnet --visibility=public --limit 100 --json name,description,url,homepageUrl,primaryLanguage,repositoryTopics,stargazerCount,forkCount,updatedAt,isFork,isArchived
```

Inspect one repo:

```sh
gh repo view enBonnet/<repo-name> --json name,description,url,homepageUrl,stargazerCount,forkCount,primaryLanguage,repositoryTopics,createdAt,updatedAt
```

Read a repo README:

```sh
gh api repos/enBonnet/<repo-name>/readme -H "Accept: application/vnd.github.raw"
```

## Updating Counts On The Site

The portfolio data lives in `src/pages/index.astro`.

Update these arrays:

| Data | Array |
| --- | --- |
| Main project cards | `featuredProjects` |
| Published themes | `themes` |
| Smaller supporting projects | `smallTools` |
| Social links | `socials` |

When refreshing theme stats:

1. Open each Marketplace URL and copy the install count.
2. Open each Open VSX API URL and copy `downloadCount`.
3. Add both numbers together for the `installs` field in `themes`.
4. Update the hero/theme section totals if the combined number changed enough to affect the rounded headline.
5. Run `pnpm build`.

## Adding A New Featured Project

Add a new object to `featuredProjects` in `src/pages/index.astro`.

Template:

```js
{
  name: "Project Name",
  eyebrow: "Project Type",
  description: "One sentence focused on what the project does and why it matters.",
  image: "/images/project-screenshot.png",
  imageAlt: "Project screenshot description",
  links: [
    { label: "Site", href: "https://example.com" },
    { label: "GitHub", href: "https://github.com/enBonnet/project" },
  ],
  tags: ["TypeScript", "CLI", "DX"],
  metric: "Optional proof point",
}
```

If there is no screenshot, omit `image` and `imageAlt`.

## Adding A New Theme

Add a new object to `themes` in `src/pages/index.astro`.

Template:

```js
{
  name: "Theme Name",
  installs: "1,234",
  marketplace: "123",
  openVsx: "1,111",
  href: "https://marketplace.visualstudio.com/items?itemName=enbonnet.theme-name",
  color: "#ff8a3d",
}
```

Then update this doc with:

1. The Marketplace link.
2. The Open VSX API link.
3. Any new headline total if needed.

## Adding A Small Tool

Add a new object to `smallTools` in `src/pages/index.astro`.

Template:

```js
{
  name: "Tool Name",
  description: "Short practical description.",
  href: "https://github.com/enBonnet/tool-name",
}
```

## Validation

Always run:

```sh
pnpm build
```

If the numbers were changed, check the rendered page to make sure the totals still read well on mobile.
