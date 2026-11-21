import assert from 'node:assert/strict';

const api = process.env.SMOKE_GRAPHQL_URL ?? 'http://127.0.0.1:4000/graphql';
const web = process.env.SMOKE_WEB_URL ?? 'http://127.0.0.1:4321/rides';

const response = await fetch(api, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ query: '{ upcomingRides { id title startsAt } }' }),
  signal: AbortSignal.timeout(5000),
});
assert.equal(response.status, 200);
const result = await response.json();
assert.equal(result.errors, undefined, JSON.stringify(result.errors));
const ride = result.data.upcomingRides.find(({ id }) => id === 'demo-weekend-ride');
assert.ok(ride, 'Expected the seeded ride in GraphQL');
assert.ok(Date.parse(ride.startsAt) > Date.now());
const page = await fetch(web, { signal: AbortSignal.timeout(5000) });
assert.equal(page.status, 200);
assert.ok((await page.text()).includes(ride.title), 'Expected the seeded ride on /rides');
console.log('Rideway smoke check passed: seeded ride found in GraphQL and /rides.');
