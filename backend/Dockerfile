FROM node:16.13-alpine

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN npm install

COPY . /app/

EXPOSE 8000

CMD ["npm", "run", "start"]