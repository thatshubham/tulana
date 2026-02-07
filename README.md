> **Tulana** (Hindi: तुलना) — *The act of comparing; to weigh or balance*

Tulana is meant to showcase neutral data visualization, it is designed to provide an economic scale to the unprecedented capital expenditure (CapEx) currently flowing into artificial intelligence by the big tech. 

The goal is simply to map the projected 2026 big tech AI spending against national budgets, departmental allocations of big countries and inflation-adjusted historic megaprojects (like the Apollo Program or ending food insecurity). The platform itself does not argue for or against AI, it merely visualizes the math.



## The how
This project is built using the following:
- SvelteKit (SSG) and served from the Cloudflare global edge.
- Utilizes the simple design system with dynamic light/dark mode for the visualization card.
- Integrated export engine to download social-ready PNG comparison assets.


## Contributions welcome
Tulana aims to rely on high-quality, sourced data. I welcome contributions for national budgets, specific departmental spends (eg, Space, Defense, Education), or historic infrastructure projects. With sources is always better. If you find an error in the numbers, feel free to point that out as well.

### Where to find the data:
1. Open `src/lib/data.js`.
2. Add your entry to the `countryData` array.


---

## Where is it deployed?
This site is configured for **Cloudflare Pages**. 
- Built using `@sveltejs/adapter-static`.
- Deployments are triggered automatically on push to `main`.
- The caching is handled via Cloudflare's Edge Network.
