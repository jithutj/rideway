# Rideway coding agent instructions

Read [the MVP launch brief](docs/Rideway_MVP_Launch_Brief.md) for the agreed product scope and [development context](docs/development-context.md) for the state of this repository. Use the current Linear issue and its acceptance criteria as the task scope when available.

- Keep the frontend in Astro with Tailwind and the backend in NestJS GraphQL with Prisma and PostgreSQL. Business rules and authorization belong to the API.
- Keep changes scoped to one issue. Preserve mobile and keyboard usability. Keep secrets and real rider data out of Git.
- Commit schema changes with Prisma migrations. Add role and record-level checks in the API when implementing private operations.
- Before handing back a change, build the affected workspace and run the relevant checks from the README. Report the commands actually run and any blocked verification.
- Use a branch and leave the diff for review unless the owner explicitly asks for publication or deployment. Record durable decisions in plain Markdown so another coding agent can take over.
