#!/bin/bash

# fnm
export PATH="/home/ubuntu/.local/share/fnm:$PATH"
eval "$(fnm env)"
fnm use 20.5.1

# pnpm
export PNPM_HOME="/home/ubuntu/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac

# bun
export BUN_INSTALL = "$HOME/.bun"
export PATH = "$BUN_INSTALL/bin:$PATH"

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
