# Development context

The current slice is public ride discovery. Astro renders /rides on demand through the NestJS GraphQL API. The API reads published upcoming events via Prisma and PostgreSQL. The first migration creates the Event model and the local seed inserts a sample Kochi ride. Dates display in Asia/Kolkata for this pilot example.

The launch brief describes the target, including some features that are still pending. Recommended issue order after reviewing this slice:

1. Rider sign-in, sessions, Super Admin bootstrap, RBAC and record-level access.
2. Organizer submission and admin event publishing and cancellation.
3. RSVP and withdrawal with transactional capacity enforcement.
4. PWA installation, mobile dashboard checks and pilot deployment.

Track acceptance criteria and progress in Linear. Keep API behavior, migrations and verification commands alongside the code in Git.
