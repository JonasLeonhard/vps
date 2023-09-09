set shell := ["nu", "-c"]

default:
	@just --choose

# dev:start backend & frontend servers
dev:
	[{ just backend-dev }, { just frontend-dev }] | par-each { |c| do $c }

# start backend & frontend servers
start:
	[{ just backend-start }, { just frontend-start }] | par-each { |c| do $c }

# install composer and jspackages, copy example env files, install global kirby cli
install:
	[{ just backend-install }, { just frontend-install }, { just kirby-cli-install }] | par-each { |c| do $c }

# start frontend dev:server
frontend-dev:
	@cd frontend; bun run dev

# start frontend server
frontend-start:
	@cd frontend; bun run start

# install frontend jspackages, copy example env
frontend-install:
	@cd frontend; bun install; cp .env.example .env

# start backend dev:server
backend-dev:
	@cd backend; composer run start

# start backend server
backend-start:
	@cd backend; composer run start

# install backend composer packages, copy example env
backend-install:
	@cd backend; composer install; cp .env.example .env

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

