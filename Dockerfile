# syntax=docker/dockerfile:1
FROM node:16 AS builder
RUN npm i -g pnpm
ENV NODE_ENV=development
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:16-stretch-slim AS runner
RUN npm i -g pnpm
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY --from=builder /app/dist ./dist
CMD ["pnpm", "start:prod"]