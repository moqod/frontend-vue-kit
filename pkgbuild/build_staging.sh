#!/usr/bin/env bash

docker run --rm -v "$PWD":/usr/src -w /usr/src node:6 /bin/sh -c "npm install --no-optional && API_HOST='http://site.com/api' URL_DIRECTORY='/dist/' npm run build"
