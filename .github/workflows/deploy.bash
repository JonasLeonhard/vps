#!/bin/bash

source ~/.bashrc
echo "after.. sourced bashrc"
which fnm
echo "after.. which fnm"
eval $(fnm env)
echo "after ... fnm env"

export PATH="/home/ubuntu/.local/share/fnm:$PATH"
echo "after path"
eval "$(fnm env)"
echo "after fnm env 2"

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
