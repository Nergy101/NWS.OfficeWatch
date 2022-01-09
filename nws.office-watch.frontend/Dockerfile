# https://hub.docker.com/_/node
# build stage
FROM node:16-alpine3.14 as build-stage

RUN apk add --update --no-cache curl py-pip
RUN apk add make g++

WORKDIR /app
COPY package*.json ./
RUN npm ci
# RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]