FROM node:21-alpine

WORKDIR /app

COPY . .

VOLUME [ "/data" ]

RUN npm install

CMD ["npm", "start"]