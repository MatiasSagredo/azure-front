FROM node:24-slim AS builder

WORKDIR /data

COPY *.json .

RUN npm ci --include=dev

COPY src/ ./src

RUN npm run build && npm prune --omit=dev

FROM nginx:alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /data/dist/VidalStoreFront/browser /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
