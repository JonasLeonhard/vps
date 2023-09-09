#!/bin/bash

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

# brew
export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"

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
just pm2-restart
