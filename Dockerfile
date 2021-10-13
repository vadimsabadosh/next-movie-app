FROM node:14-alpine

WORKDIR /app

ARG NEXT_PUBLIC_API_HOST

ENV NEXT_PUBLIC_API_HOST="${NEXT_PUBLIC_API_HOST}"
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/

RUN npm ci

COPY . /app/

EXPOSE 3000

CMD ["npm", "start"]