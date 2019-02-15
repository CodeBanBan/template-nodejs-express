# NodeJS + Express Development Template

- **Development** use express run on local
- **Test** use Mocha/Chai


# Detail for Dynamodb
- Develop use docker for dynamodb
    - on memory :
    `docker run --name dynamodb-dev -p 8000:8000 amazon/dynamodb-local`
    - save data on disk :
    `docker run -d --name dynamodb-dev -p 8000:8000 -v /Users/Shared/dynamodb-dev:/database amazon/dynamodb-local -jar DynamoDBLocal.jar -dbPath /database`


# Reference

### DynamoDB + Dynamoose
- https://hub.docker.com/r/amazon/dynamodb-local/
