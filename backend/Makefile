build:
	docker-compose build

# usage: make migrate message="commit message"
migrate:
	docker exec -i -t `docker ps -q --filter status=running --filter ancestor=polly/backend:latest` /bin/bash -c "python3 manage.py db migrate --message '$(message)'"

upgrade:
	docker exec -i -t `docker ps -q --filter status=running --filter ancestor=polly/backend:latest` /bin/bash -c "python3 manage.py db upgrade"

run:
	docker-compose up

clean:
	docker volume rm ucla-cs-130_polly-data
