# Dockerfile for Building an nginx Webserver with volume logging
# 'docker build -t <dockerImageName>:tag .' << 'docker build -t frontend_nginx:prod .'   <- builds the image
# 'docker run --name <NAME> -p 80:80 --volume="<COPY_ABS_PATH>" <dockerImageName>:tag << 'docker run -p 80:80 --volume="<COPY_ABS_PATH>" nginx:prod' <- run image

# Root_Stage
FROM nginx:latest

# Create Volume folder, on host /logs mount volume should contain: [access.log ,error.log ,nginx.pid] ? VOLUME ./etc/nginx/logs 
RUN mkdir /etc/nginx/logs
RUN cd /etc/nginx/logs && touch access.log && touch error.log && touch nginx.pid && cd

# 1. Nginx config & dist copy
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./nginx.html /usr/share/nginx.html
