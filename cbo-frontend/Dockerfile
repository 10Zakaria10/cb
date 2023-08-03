FROM node:lts as dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as composer
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=composer /app/next.config.js ./
COPY --from=composer /app/public ./public
COPY --from=composer /app/.next ./.next
COPY --from=composer /app/node_modules ./node_modules
COPY --from=composer /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]