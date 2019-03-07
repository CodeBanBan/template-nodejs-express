#!/bin/sh

checkContainer=`docker ps -a | grep mysql-test`;

if [ -z "$checkContainer" ]; then
    echo 'container not found!!!'
    docker run --name mysql-test -e MYSQL_ROOT_PASSWORD=root -d -p 8999:3306 mysql:5.6.42

    RET=1
    while [[ RET -ne 0 ]]; do
        echo "=> Waiting for confirmation of MySQL service startup"
        sleep 2
        docker exec mysql-test sh -c 'mysql -uroot -proot -e "status" > /dev/null 2>&1'
        RET=$?
    done

    docker exec mysql-test sh -c 'mysql -u root -proot -e "CREATE DATABASE node_mysql_test"'
fi

docker start mysql-test

RET=1
while [[ RET -ne 0 ]]; do
    echo "=> Waiting for confirmation of MySQL service startup"
    sleep 2
    docker exec mysql-test sh -c 'mysql -uroot -proot -e "status" > /dev/null 2>&1'
    RET=$?
done
