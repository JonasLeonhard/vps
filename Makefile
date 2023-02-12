dev:
	make -j 2 backend-dev frontend-dev

start:
	make -j 2 backend-start frontend-start

install:
	make -j 3 backend-install frontend-install kirby-cli-install

frontend-dev: 
	@cd frontend && yarn dev

frontend-start:
	@cd frontend && yarn start

frontend-install:
	@cd frontend && yarn && cp .env.example .env

backend-dev:
	@cd backend && composer run start

backend-start:
	@cd backend && composer run start

backend-install:
	@cd backend && composer install && cp .env.example .env

kirby-cli-install:
	@composer global require getkirby/cli

nginx-update:
	sudo rsync -a ./nginx/** /etc/nginx/sites-enabled
	sudo nginx -s reload

pm2-start: 
	pm2 start "make backend-start" --name vps:backend
	pm2 start "make frontend-start" --name vps:frontend

pm2-stop:
	pm2 stop vps:backend
	pm2 stop vps:frontend

pm2-delete:
	pm2 delete vps:backend
	pm2 delete vps:frontend

pm2-restart:
	pm2 restart vps:backend
	pm2 restart vps:frontend

