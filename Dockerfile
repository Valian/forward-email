FROM node:9-alpine

WORKDIR /srv

COPY yarn.lock package.json ./
RUN apk add --no-cache git && yarn install

COPY . .

CMD ["node", "docker-entrypoint.js"]
