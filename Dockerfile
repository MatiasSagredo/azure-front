FROM node:24-slim AS builder

WORKDIR /data

COPY *.json .

RUN npm install

COPY src/ ./src

RUN npm run build

FROM nginx:alpine AS runner

COPY nginx.conf /etc/nginx/http.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf


COPY --from=builder /data/dist/VidalStoreFront/browser /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
