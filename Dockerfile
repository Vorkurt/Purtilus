FROM node:14-alpine as development

WORKDIR /app

COPY package.json ./
COPY npm-shrinkwrap.json ./
COPY .npmrc ./

RUN npm i -g npm@7
RUN npm ci

COPY src ./src
COPY tsconfig* ./
COPY angular.json ./

CMD [ "npm", "start"]

FROM development as builder

RUN npm run build

FROM development as compliance

RUN npm run lint

FROM nginx:1.21-alpine as production

COPY --from=builder /app/build/ /usr/share/nginx/html
