#!/bin/bash
set -e

cd /polly/app
python3 manage.py db upgrade
cd /polly

exec "$@"
