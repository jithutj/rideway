# Development context

The current slice is public ride discovery. Astro renders /rides on demand through the NestJS GraphQL API. The API reads published upcoming events via Prisma and PostgreSQL. The first migration creates the Event model and the local seed inserts a sample Kochi ride. Dates display in Asia/Kolkata for this pilot example.

The repository now has three apps:
- `apps/web` — public rider surfaces (e.g., `/rides`, upcoming `/clubs`)
- `apps/admin` — staff/admin dashboard on its own Astro build and Compose service
- `apps/api` — NestJS GraphQL backend for both frontends

Recommended issue order after reviewing this slice:

1. **Scaffold the independent `apps/admin` service.** Separate build, Compose service, and minimal dashboard shell on port 4322.
2. Shared email-code sign-in, sessions, RBAC and record-level access for both `web` and `admin`.
3. Clubs: public club discovery and rider membership in `web`; club management in `admin`.
4. Organizer submission and admin event publishing and cancellation.
5. RSVP and withdrawal with transactional capacity enforcement.
6. PWA installation, mobile dashboard checks and pilot deployment.

Club membership and event registration are independent. Staff screens, private member lists, and manager assignments live in `apps/admin` and use separate authorized staff operations.

Track acceptance criteria and progress in Linear. Keep API behavior, migrations and verification commands alongside the code in Git.
