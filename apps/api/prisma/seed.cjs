const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  const startsAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  await prisma.event.upsert({
    where: { id: 'demo-weekend-ride' },
    create: {
      id: 'demo-weekend-ride',
      title: 'Weekend Coffee Ride',
      location: 'Kochi, Kerala',
      status: 'PUBLISHED',
      startsAt,
    },
    update: { startsAt },
  });
}

seed()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
