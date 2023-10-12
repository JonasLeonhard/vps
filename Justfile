set shell := ["nu", "-c"]

default:
	@just --choose

# dev:start backend & frontend servers
dev:
	[{ just backend-dev }, { just frontend-dev }] | par-each { |c| do $c }

# start backend & frontend servers
start:
	[{ just backend-start }, { just frontend-start }] | par-each { |c| do $c }

# install composer and pnpm packages
install:
	[{ just backend-install }, { just frontend-install }] | par-each { |c| do $c }

# install composer and pnpm packages, copy example env files, install global kirby cli
init:
	[{ just backend-init }, { just frontend-init }, { just kirby-cli-install }] | par-each { |c| do $c }

# start frontend dev:server
frontend-dev:
	@cd frontend; pnpm run dev

# start frontend server
frontend-start:
	@cd frontend; pnpm run start

# install frontend pnpm packages
frontend-install:
	@cd frontend; pnpm i;

# install frontend pnpm packages, copy example env
frontend-init:
	@cd frontend; pnpm i; cp .env.example .env

# start backend dev:server
backend-dev:
	@cd backend; composer run start

# start backend server
backend-start:
	@cd backend; composer run start

# install backend composer packages, copy example env
backend-init:
	@cd backend; composer install; cp .env.example .env

# install backend composer packages
backend-install:
	@cd backend; composer install;

# install global kirby cli
kirby-cli-install:
	@composer global require getkirby/cli

# start pm2 process "vps:frontend"
pm2-start:
	pm2 start "just frontend-start" --name vps:frontend

# stop pm2 process "vps:frontend"
pm2-stop:
	pm2 stop vps:frontend

# delete pm2 process "vps:frontend"
pm2-delete:
	pm2 delete vps:frontend

# restart pm2 process "vps:frontend"
pm2-restart:
	pm2 restart vps:frontend

