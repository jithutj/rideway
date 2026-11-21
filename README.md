# Rideway

Dockerized starter for Rideway's first development slice. The public Astro app reads an upcoming motorcycle ride from **NestJS GraphQL → Prisma → PostgreSQL**. A separate staff dashboard app is scaffolded for organizers and administrators.

## Open in VS Code

Extract the archive and open the `rideway` folder in VS Code. Install Docker with the Compose plugin and start the Docker daemon. Use Node.js 22 if you want to run the smoke script from the host.

```sh
docker compose up --build --wait
node scripts/smoke.mjs
```

## Local apps

| App | URL | Purpose |
| --- | --- | --- |
| `web` | [localhost:4321](http://localhost:4321/rides) | Public rider pages |
| `admin` | [localhost:4322](http://localhost:4322) | Staff/admin dashboard |
| `api` | [localhost:4000/graphql](http://localhost:4000/graphql) | NestJS GraphQL API |

The GraphQL endpoint accepts POST requests. Compose applies migrations and refreshes the local sample ride date at API startup. The database volume persists across `docker compose down`. The example credentials and seed are for local development.

After code changes run `docker compose up --build --wait` again. Use `docker compose logs api web admin` to inspect startup failures. To stop the stack, run `docker compose down`.

## Push to GitHub

Create an empty GitHub repository, then run these from the extracted `rideway` folder:

```sh
git init -b main
git add .
git commit -m "Scaffold Rideway local ride discovery"
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Hand off to a coding agent

Open this folder in your coding agent and ask it to read [AGENTS.md](AGENTS.md), [development context](docs/development-context.md) and [the launch brief](docs/Rideway_MVP_Launch_Brief.md), then work on one Linear issue. The initial slice covers public ride discovery. Sign-in, dashboards, RSVP, PWA installation and production deployment are upcoming work.
