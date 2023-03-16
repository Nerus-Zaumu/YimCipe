#Build for Local Development

FROM node:18-alpine  as development

WORKDIR /usr/src/app

COPY --chown=node:node package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY --chown=node:node . ./

#Build for app build

FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY --chown=node:node package.json pnpm-lock.yaml ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm install -g pnpm

RUN pnpm run build

ENV NODE_ENV production

EXPOSE 3333

#Build for production

USER node

FROM node:18-alpine as production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules

COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD ["node", "dist/main.js"]

