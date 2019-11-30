FROM ubuntu:16.04

RUN apt-get update -y && \
    apt-get install -y python3 python3-pip python3-dev libpq-dev

COPY ./requirements.txt /polly/requirements.txt

WORKDIR /polly

RUN pip3 install -r requirements.txt

COPY ./app /polly/app

COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh /

COPY ./manage.py /polly

# start server use run for dev and deploy for prod
ENTRYPOINT ["docker-entrypoint.sh"]
CMD [ "python3", "manage.py", "run" ]
