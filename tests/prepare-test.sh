#!/bin/sh

sleepTime=0
checkContainer=`docker ps -a | grep dynamodb-test`;

if [ -z "$checkContainer" ]; then
    echo 'container not found!!!'
    sleepTime=10
    docker run -d --name dynamodb-test -p 8100:8000 amazon/dynamodb-local
fi

checkRunning=`docker ps | grep dynamodb-test`;

if [ -z "$checkRunning" ]; then
    echo 'container not run'
    sleepTime=10
fi

docker start dynamodb-test
sleep $sleepTime