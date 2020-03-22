# Dockerfile for Building an express Webserver
# 'docker build -t <dockerImageName>:tag .' << 'docker build -t backend_express:express .'   <- builds the image
# 'docker run --name <NAME> -p 80:80 <dockerImageName>:tag << 'docker run -p 80:80 backend_express:express' <- run image
FROM node:13

# 1. Frontend build dist
WORKDIR /app/frontend
COPY ./server/package*.json ./
RUN npm install
COPY ./frontend ./
RUN npm run build:docker

# 2. Backend
WORKDIR /app/server
COPY ./server/package*.json ./
RUN npm install
COPY ./server ./

# 3. Start Server
EXPOSE 4200
CMD [ "node", "server.js" ]