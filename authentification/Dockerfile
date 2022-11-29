FROM node:14

WORKDIR /app .

COPY package.json .

RUN npm install

COPY . . 

EXPOSE 5700

CMD ["node", "index.js"]