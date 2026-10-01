FROM node:24 AS builder

WORKDIR /data

COPY *.json .

RUN npm install

COPY src/ ./src

RUN npm run build

FROM alpine:latest AS runner

RUN apk add nginx

WORKDIR /app

COPY --from=builder /data/dist/VidalStoreFront/browser /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]