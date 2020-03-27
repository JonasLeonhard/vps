# Dockerfile for Building an nginx Webserver with volume logging
# 'docker build -t <dockerImageName>:tag .' << 'docker build -t frontend_nginx:prod .'   <- builds the image
# 'docker run --name <NAME> -p 80:80 --volume="<COPY_ABS_PATH>" <dockerImageName>:tag << 'docker run -p 80:80 --volume="<COPY_ABS_PATH>" frontend:prod' <- run image

# STAGE_1 - Build Stage building application
FROM node:12 as build-stage

# 1. Frontend. Build dist
WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY ./frontend ./
RUN npm run build:docker

# STAGE_2 - Put dist into nginx
FROM nginx:latest

# Create Volume folder, on host /logs mount volume should contain: [access.log ,error.log ,nginx.pid] ? VOLUME ./etc/nginx/logs 
RUN mkdir /etc/nginx/logs
RUN cd /etc/nginx/logs && touch access.log && touch error.log && touch nginx.pid && cd
# 1. Nginx config & dist copy
COPY --from=build-stage /app/dist/frontend/ /usr/share/nginx/html
COPY ./server/nginx.conf /etc/nginx/nginx.conf
