#!/bin/bash

export PATH="/home/ubuntu/.local/share/fnm:$PATH"
fnm use 20.5.1

# Setup (workdir + update repo)
cd /var/www/html/vps
git pull origin master
git pull origin live
git push

# Backend (build)
cd /var/www/html/vps/backend
composer install

# Frontend (build)
cd /var/www/html/vps/frontend
pnpm i
pnpm run build

# Deploy (Restart with pm2)
cd /var/www/html/vps
make pm2-restart
