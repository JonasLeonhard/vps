# 1. Build base image -> 'docker build -t frontend_angular:dev .'
FROM node:13
WORKDIR /usr/src/app
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend .

# 2. install nginx to serve index angular file

# 2. build angular index file to serve
RUN npm run build:docker



