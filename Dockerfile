FROM node:hydrogen-alpine

ARG VITE_DUMMY_JSON_BASE_URL

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm build

ENV VITE_DUMMY_JSON_BASE_URL=$VITE_DUMMY_JSON_BASE_URL

CMD ["pnpm", "preview"]