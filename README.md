Start the Application: then go to localhost:3000
````shell
    docker-compose up -d
````

# Strapi Admin
```text
    go to localhost:1337/admin
```

# Nginx-Letsencrypt Proxy Root Server:
```text
# Root Nginx Installation:
https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04
https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04#step-5-%E2%80%93-setting-up-server-blocks-(recommended)
```
```bash
echo Root: Config Directory: /etc/nginx/sites-enabled/jonasleonhard.de
cd /etc/nginx/sites-enabled/jonasleonhard.de
echo Static Directory: /var/www
cd /var/www
echo Make sure to have docker container exposed only to localhost:PORT <ports: - 127.0.0.1:3000:3000>
echo Edit config files to contain <proxy_pass http://127.0.0.1:3000;> location
echo Restart nginx after config edit
sudo systemctl restart nginx
```

```text
# Root Postgres installation
https://thenucleargeeks.com/2020/09/06/install-postgresql-on-aws-ec2/
```