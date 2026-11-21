# Rideway product requirements

## Pilot scope

Launch in one region with invited organizers, public clubs, and free rides
and events. Visitors can browse without signing in. Signed-in riders can join
a club and register for a ride as separate actions.

## Clubs

- Visitors can browse active clubs by location and open a shareable club page.
- A club page shows its name, description, location, and upcoming published
  rides and events. A signed-in rider can join or leave an active club.
- Admins create, edit, and archive clubs and assign a club manager from the
  organizer accounts. Start with one manager per club.
- A club manager can edit their assigned club's profile, view its member list,
  and submit rides on its behalf. Other clubs' member lists are private.
- Leaving a club does not withdraw a rider from any booked ride. Archiving a
  club stops new memberships and new club listings. Existing published rides
  remain visible until an admin updates or cancels them.

## Rides and events

- Visitors can filter upcoming listings by type and location. Event details
  show the date and local time, meeting point, map link, organizer, and optional
  capacity. Ride details also show a route summary. A listing may belong to a
  club or be standalone.
- Riders sign in with an email code, register for an open event, withdraw,
  and see confirmed and cancelled registrations in My Rides.
- Organizers create drafts, submit them for review, and see participant rosters
  for their own events. Admins can publish, return for changes, edit, or cancel.
- The API prevents duplicate registrations and overbooking. Withdrawing frees
  a seat. A cancelled event stops new registrations and shows its status on
  the public detail page and in My Rides.
- During the pilot, admins coordinate direct rider contact for cancellations
  and material changes. Push notifications can follow later.

## Roles and access

- Rider manages their own memberships and registrations.
- Organizer manages their own event drafts and rosters. Club manager access
  grants additional permissions only within the assigned club.
- Admin manages clubs, invites organizers, reviews events, and handles
  cancellation.
- Super Admin manages roles and permissions, can override records, and can
  review the audit log. Require MFA and protect the last active Super Admin.
- Enforce permissions in the GraphQL API, including list queries and nested
  fields. Keep membership lists, rosters, and contact details private.

## Launch experience

- Mobile-first public pages and dashboards with clear empty, error, full,
  and cancelled states.
- Installable PWA with a basic offline screen. Joining, leaving, and RSVP
  actions require a live connection.
- Verify organizer submission through rider registration and withdrawal,
  including two riders competing for the last seat. Verify that club managers
  cannot access other clubs' member lists or unrelated event rosters.
- Verify production sign-in email, backup restoration, and installation on
  Android and iPhone before opening the pilot.

## After the pilot

Consider private clubs, membership approval, multiple club managers,
members-only rides, waitlists, attendance check-in, push notifications,
payments, and the riding-products store. Use pilot feedback to prioritize them.