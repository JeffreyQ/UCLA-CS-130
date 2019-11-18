#!/bin/bash
set -e

cd /app/src
alembic upgrade head
cd /app

exec "$@"
