FROM node:12.8.0-alpine

RUN mkdir -p /work

WORKDIR /work/

COPY package.json /work/

RUN yarn install

COPY . /work/
