FROM node:14

WORKDIR /usr/src/app

ENV APP_PORT=3000

COPY package.json .
COPY package-lock.json .

RUN ls
RUN npm ci
COPY ./dist ./dist

RUN ls -a

EXPOSE 3000/tcp
EXPOSE 3000/udp

CMD npm start