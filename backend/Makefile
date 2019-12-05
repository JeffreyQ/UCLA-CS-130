.PHONY: test


build:
	docker-compose build

build-test:
	docker-compose -f docker-compose.test.yml build

# usage: make migrate message="commit message"
migrate:
	docker exec -i -t `docker ps -q --filter status=running --filter ancestor=polly/backend:latest` /bin/bash -c "python3 manage.py db migrate --message '$(message)'"

upgrade:
	docker exec -i -t `docker ps -q --filter status=running --filter ancestor=polly/backend:latest` /bin/bash -c "python3 manage.py db upgrade"

doc:
	docker exec -i -t `docker ps -q --filter status=running --filter ancestor=polly/backend:latest` /bin/bash -c "python3 manage.py generate_json"
	swagger2markup convert -i ./polly_api.json -f ./polly_api_documentation

run:
	docker-compose up

clean:
	docker volume rm polly_polly-data

test:
	docker-compose -p polly-test -f docker-compose.test.yml up --abort-on-container-exit

coverage:
	docker-compose -p polly-test -f docker-compose.test.yml up 
