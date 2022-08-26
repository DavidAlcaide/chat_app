FROM node:latest

WORKDIR /home/node/chat_api

COPY package.json .

COPY .env.example .

RUN npm install --production

WORKDIR /home/node/chat_api/src

USER node

CMD ["node", "./index.js"]
