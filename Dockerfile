FROM node:lts-alpine3.23

WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY . .

RUN mkdir -p /app/data


EXPOSE 5000

CMD ["node", "index.js"]