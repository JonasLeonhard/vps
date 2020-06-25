Website Project:

Contains Dockerfile & DockerCompose for 
- nginx + amplify ? + ssl cert (lets encrypt?)
- Frontend
- Backend
- Database


Now start the containers with:
````
    docker-compose up -d
````

Now start the non-containerized nginx server with:
````
    sudo cp ./nginx/nginx.conf /etc/nginx/nginx.conf && sudo nginx
````

To start get certbot .pem installed - run:
````
    sudo certbot --nginx
````

Start the certbot renewal with
````
    sudo certbot renew --dry-run // dry-run for testing!
````