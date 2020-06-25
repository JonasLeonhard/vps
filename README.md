Website Project:

Contains Dockerfile & DockerCompose for 
- nginx + amplify ? + ssl cert (lets encrypt?)
- Frontend
- Backend
- Database


To start get certbot .pem installed - run:
````
    sudo certbot --nginx --certonly
````
These certs land in 
````            
    ssl_certificate /etc/letsencrypt/live/jonasleonhard.de/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/jonasleonhard.de/privkey.pem;
````

Start the certbot renewal with
````
    sudo certbot renew --dry-run // dry-run for testing!
````

Now start the containers with:
````
    docker-compose up
````

Now start the non-containerized nginx server with:
````
    /usr/bin/nginx -c ./nginx/nginx.conf
````