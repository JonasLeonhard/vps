# Dockerfile for Building an express Webserver
# 'docker build -t <dockerImageName>:tag .' << 'docker build -t backend_express:express .'   <- builds the image
# 'docker run --name <NAME> -p 80:80 <dockerImageName>:tag << 'docker run -p 80:80 backend_express:express' <- run image
FROM node:13

# Create app directory
WORKDIR /usr/src/app/backend  

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./backend/package*.json ./

# If you are building your code for production
# RUN npm ci --only=production
RUN npm install

# Copy from <source> to <dest> (bundles whole app)
COPY ./backend .

EXPOSE 80
CMD [ "node", "server.js" ]