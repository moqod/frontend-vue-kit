#!/usr/bin/env bash

API_KEY='YOUR_API_KEY'
TARGET_DIRECTORY='YOUR_FOLDER_PATH'

curl -o localise.zip "https://localise.biz/api/export/archive/json.zip?key=$API_KEY"
unzip -j -o localise.zip -d $TARGET_DIRECTORY
rm -f localise.zip
