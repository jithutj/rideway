FROM node:22-bookworm-slim AS base
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package.json package-lock.json ./
COPY apps/admin/package.json apps/admin/package.json
COPY apps/api/package.json apps/api/package.json
COPY apps/web/package.json apps/web/package.json
RUN npm ci

FROM base AS api
COPY apps/api apps/api
RUN npm run build -w @rideway/api
USER node
CMD ["npm", "run", "start", "-w", "@rideway/api"]

FROM base AS web
COPY apps/web apps/web
RUN npm run build -w @rideway/web
USER node
CMD ["npm", "run", "start", "-w", "@rideway/web"]

FROM base AS admin
COPY apps/admin apps/admin
RUN npm run build -w @rideway/admin
USER node
CMD ["npm", "run", "start", "-w", "@rideway/admin"]
