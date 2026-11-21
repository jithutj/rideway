---
name: rideway-figma-to-astro
description: Implement or review Rideway screens from Figma in Astro and Tailwind. Use for ride discovery, club pages, responsive dashboards, and design handoff.
---
# Implement a Rideway screen

1. Read the repository's AGENTS.md and the relevant product requirements. Inspect the target route and existing components before editing.
2. Use the exact Figma frame URL and read it through Figma MCP when available. If the read is blocked, use a supplied PNG or the written design brief. Call out any design details you infer.
3. Identify the layout, typography, shared components, and UI states. Reuse existing Astro and Tailwind components. Preserve working GraphQL queries, routes, and permissions. Keep sample Figma data out of production rendering.
4. Check narrow and wide layouts, keyboard operation, visible focus, and relevant empty, loading, and error states. Include full, cancelled, or archived states when the issue calls for them.
5. Run the frontend build and relevant verification from the README. Summarize the screens checked and any visual checks you could not run.
