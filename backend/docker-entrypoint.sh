#!/bin/bash
set -e

cd /polly
python3 manage.py db upgrade

exec "$@"
