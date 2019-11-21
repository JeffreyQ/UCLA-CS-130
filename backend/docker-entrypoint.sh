#!/bin/bash
set -e

cd /polly/app
alembic upgrade head
cd /polly

exec "$@"
