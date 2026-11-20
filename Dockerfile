FROM node:24-slim AS builder

WORKDIR /data

COPY *.json .

RUN npm ci --include=dev

COPY src/ ./src
COPY public/ ./public

RUN npm run build && npm prune --omit=dev

FROM caddy:2-alpine AS runner

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /data/dist/VidalStoreFront/browser /srv/

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
