# syntax=docker/dockerfile:1

# Build stage: install dependencies and create production build
FROM node:20-alpine AS build
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

WORKDIR /app

# Install dependencies using lockfile for reproducible builds
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code and build the Astro site
COPY . .
RUN pnpm build

# Final stage: serve the built site with Nginx
FROM nginx:alpine AS runtime

# Remove default nginx assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
