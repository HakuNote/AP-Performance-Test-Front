FROM node:14

WORKDIR /app

COPY package*.json ./
COPY .env ./
COPY vite.config.ts ./

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]
