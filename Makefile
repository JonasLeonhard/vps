dev:
	make -j 2 backend-dev frontend-dev

install:
	make -j 3 backend-install frontend-install kirby-cli-install

frontend-dev: 
	@cd frontend && yarn dev
frontend-install:
	@cd frontend && yarn && cp .env.example .env

backend-dev:
	@cd backend && composer run start
backend-install:
	@cd backend && composer install && cp .env.example .env

kirby-cli-install:
	@composer global require getkirby/cli

nginx-update:
	sudo rsync -a ./nginx/** /etc/nginx/sites-enabled
	sudo nginx -s reload

