# Dockerfile for Building an express Webserver
# 'docker build -t <dockerImageName>:tag .' << 'docker build -t backend_express:express .'   <- builds the image
# 'docker run --name <NAME> -p 80:80 <dockerImageName>:tag << 'docker run -p 80:80 backend_express:express' <- run image
FROM node:13

# 1. Backend
WORKDIR /app/
COPY ./package*.json ./
RUN npm install
COPY . ./

# 3. Start Server
EXPOSE 3200
CMD [ "node", "server.js" ]