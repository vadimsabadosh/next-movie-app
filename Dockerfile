FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/

RUN npm ci

COPY . /app/

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]