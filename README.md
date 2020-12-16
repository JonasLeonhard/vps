Start the Application
````shell
    docker-compose up -d
````
# Nginx-Letsencrypt Proxy Root Server:
```bash
echo Root: Config Directory: /etc/nginx/sites-enabled/jonasleonhard.de
cd /etc/nginx/sites-enabled/jonasleonhard.de
echo Static Directory: /var/www
cd /var/www
```

```text
# Root Nginx Installation:
https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04
https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04#step-5-%E2%80%93-setting-up-server-blocks-(recommended)
```