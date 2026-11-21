---
name: rideway-deliver-feature
description: Implement one Rideway feature or Linear issue across Astro, NestJS GraphQL, Prisma, and PostgreSQL. Use for Clubs, event moderation, or ride registration work.
---
# Deliver one Rideway feature

1. Read AGENTS.md, the relevant product requirements, and development context. Inspect git status and the code. Preserve existing work and use the current issue's acceptance criteria.
2. Trace the user action through Astro, GraphQL, the NestJS service, and Prisma. Implement only the layers needed for the issue. Keep domain rules in the API and include a migration with schema changes.
3. Keep club membership and event registration independent. Scope club management to assigned clubs and event access to the appropriate actor and record. For capacity changes or RSVPs, use a transaction that serializes availability changes and preserves the unique event/rider constraint.
4. Run the relevant builds, migrations, and smoke checks from the README. For data changes, verify the migration against disposable development data. Report commands actually run, failures, and remaining checks.
