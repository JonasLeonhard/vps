dev:
	make -j 2 frontend-dev backend-dev

install:
	make -j 2 frontend-install backend-install

frontend-dev: 
	@cd frontend && yarn dev
frontend-install:
	@cd frontend && yarn && cp .env.example .env

backend-dev:
	@cd backend && composer run start
backend-install:
	@cd backend && composer install && cp .env.example .env

