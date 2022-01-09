# https://blog.logrocket.com/containerized-development-nestjs-docker/
# https://hub.docker.com/_/node
FROM node:16-alpine3.14 as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:16-alpine3.14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]