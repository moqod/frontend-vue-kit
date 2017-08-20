#! /bin/bash
# DO NOT FORGET TO REPLACE LOGIN_TOKEN and PROJECT_KEY
docker run --user $(id -u):$(id -g) --rm -v ${PWD}:/code -i moqod/sonar-scanner-js -Dsonar.login=${LOGIN_TOKEN}-Dsonar.host.url=https://dumy.mqd.me -Dsonar.projectKey=${PROJECT-KEY} -Dsonar.language=js -Dsonar.projectVersion=0.1 -Dsonar.sources=src/app
