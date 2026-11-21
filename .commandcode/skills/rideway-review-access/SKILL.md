---
name: rideway-review-access
description: Review Rideway role, ownership, and privacy rules in GraphQL and Prisma. Use for authorization changes, club member lists, event rosters, role assignment, or code review.
---
# Review Rideway access

1. Read AGENTS.md and the applicable product rules. Identify the allowed roles, ownership or assignment scope, and data fields for each changed operation.
2. Inspect authorization from the GraphQL entry point through the service and Prisma query. Check lists, individual records, nested fields, and mutations. Treat frontend visibility as a usability feature.
3. Confirm riders access their own registrations and memberships, club managers access only assigned clubs, and organizers access only permitted event rosters. Check that Admin invitations cannot grant privileged roles. For Super Admin changes, check MFA, audit records, and protection of the last active Super Admin where applicable.
4. Verify expected allowed and denied requests with disposable test accounts. Report findings with file references, affected roles, and suggested fixes. State which checks were run and which remain unverified.
