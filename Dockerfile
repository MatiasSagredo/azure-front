FROM node:24-slim AS builder

WORKDIR /data

COPY *.json .

RUN npm ci --include=dev

COPY src/ ./src
COPY public/ ./public

RUN npm run build && npm prune --omit=dev

FROM nginx:alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /data/dist/VidalStoreFront/browser /usr/share/nginx/html/

RUN chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx \
    && touch /var/run/nginx.pid \
    && chown nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 8080

ENTRYPOINT []
CMD ["nginx", "-g", "daemon off;"]
