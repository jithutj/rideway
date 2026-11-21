CREATE TYPE "EventStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'CANCELLED');

CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "startsAt" TIMESTAMPTZ(3) NOT NULL,
    "status" "EventStatus" NOT NULL DEFAULT 'DRAFT',
    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "Event_status_startsAt_id_idx" ON "Event"("status", "startsAt", "id");
