# Rideway MVP launch brief

## 1. Basic business analysis

**Goal.** Help motorcycle riders find upcoming rides and events nearby, join in a few taps, and see their registrations. Give organizers one place to manage events and see who is coming.

**Launch assumptions.** Start in one city or region, with a small group of invited organizers and free registrations. Treat rides and events as two types of the same listing. Start with real listings from confirmed organizers before sharing the link with riders.

| Role | First release |
| --- | --- |
| Visitor | Browse published upcoming listings, filter by type and location, open and share a detail page. |
| Rider | Sign in with an email code, join or withdraw, and see registrations and cancellations in My Rides. |
| Organizer | Create and edit their own drafts, submit them for review, and view the roster for their own events. Request changes to published events through the admin. |
| Admin | Invite organizers, review and publish listings, update or cancel any event, and view rosters. Use the main dashboard to see pending reviews and upcoming events. |
| Super Admin | Manage all users, roles, and permission assignments. Edit and override any event, and review the audit log. |

**Listing essentials.** Title, ride or event type, date and local time, meeting point and map link, description, organizer and optional capacity. Add a route summary for rides. Show cancellation clearly on shared event pages and in My Rides. For the pilot, the admin coordinates with the organizer to notify registered riders directly about cancellations or material changes.

**Pilot measures.** Track published events, confirmed RSVPs per event and repeat participation. If organizers record actual attendance, compare turnout with RSVP counts. Review results before expanding to more regions.

**Later.** Add riding products through a separate commerce backend under a `/shop` section. Choose the commerce platform when catalog, payments and fulfillment requirements are known. Paid events, push notifications, live GPS, chat and waitlists can follow pilot feedback.

## 2. Architecture

| Layer | MVP decision |
| --- | --- |
| Frontend | One mobile-first Astro PWA using TypeScript, Tailwind and Astro’s Vite build. Use separate routes and layouts for riders, organizers and administrators. |
| Backend | One headless NestJS application on Node.js with a central GraphQL API for all interfaces. Keep authorization and business rules in backend services. |
| Data | PostgreSQL and Prisma ORM. Version the Prisma schema and migrations in Git. Use foreign keys and a unique event/rider registration constraint. |
| Hosting | One VPS and one HTTPS reverse proxy for Astro and GraphQL. Use Docker Compose locally and in production. No Supabase or serverless hosting. |

**Roles and record access.** RBAC controls which actions a role grants. Resource-level ACL checks which records the actor can access, including list queries and nested GraphQL fields. Organizers work on their own events and see their own rosters. Riders access their own registrations. Admins can invite users as Organizers. Super Admin manages privileged roles and permission assignments across all roles, with MFA and audit logging for sensitive changes. Prevent removal of the last active Super Admin. Start with a fixed set of permission keys.

**Security and registration.** Use same-origin secure session cookies, CSRF protection for writes, short-lived single-use email codes, and sign-in rate limits. Deny access by default and cap GraphQL query cost and page sizes. Serialize joins, withdrawals and changes affecting availability on the event row in a PostgreSQL transaction via Prisma. Check status, time and capacity before confirming an RSVP.

**Mobile and performance.** Use minimal layouts with shared Tailwind components, single-column forms and stacked roster rows for phones. Verify touch and keyboard interactions. Add indexes for upcoming events and rosters, batch related GraphQL reads, optimize images and cache versioned static assets. Use a manifest and a small service worker with a generic offline screen. Keep private responses and live registration status out of shared or offline caches. Add Redis for public listings if measured read latency warrants it, with invalidation on publish, edit and cancellation.

**Future push.** Record a notification job transactionally with the event change and deliver it asynchronously with retries. Evaluate Redis for queueing when push ships.

## 3. Delivery and release

1. **Track the pilot.** Use one Rideway project and one MVP milestone in Linear. Record acceptance criteria and link implementation issues to Git pull requests.
2. **Develop locally.** Run Astro, NestJS and PostgreSQL in Docker Compose, with a local mail catcher for sign-in. Keep secrets outside Git. Use plain Markdown, an `AGENTS.md` entry point, the GraphQL schema and runnable commands so coding agents can work with different LLMs, including open-weight models.
3. **Deploy simply.** Run type checks, tests, builds and migration checks in CI. Deploy tagged container images to the VPS, apply backward-compatible Prisma migrations, verify health and email delivery, and retain the previous release for rollback. Keep PostgreSQL private and verify restoration from an off-host backup.
4. **Run one real event before opening the pilot.** Confirm organizer submission, admin publication, rider registration and withdrawal, and cancellation visibility. Check that concurrent riders cannot both claim the last seat, that organizers cannot access other rosters, and that role changes are audited. Verify narrow-screen dashboards and PWA installation on Android Chrome and iPhone Safari.
