FROM node:16-alpine

WORKDIR /app

ENV VITE_API_URL=http://localhost:5000

COPY package*.json .
COPY vite.config.js .

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start" ]