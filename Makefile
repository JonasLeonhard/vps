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
	sudo pm2 start "make start" --name vps

pm2-stop:
	sudo pm2 stop vps

pm2-delete:
	sudo pm2 delete vps

pm2-restart:
	sudo pm2 restart vps

