# NodeJS + Express Development Template

- **Development** use express run on local
- **Test** use Mocha/Chai


# Detail for Dynamodb
- Use command `npm run start:dynamodb-admin` for run WebGUI tool manage dynamodb-local
- Develop use docker for dynamodb
    - on memory :
    `docker run --name dynamodb-dev -p 8000:8000 amazon/dynamodb-local`
    - save data on disk :
    `docker run -d --name dynamodb-dev -p 8000:8000 -v /Users/Shared/dynamodb-dev:/database amazon/dynamodb-local -jar DynamoDBLocal.jar -dbPath /database`

    ### Prepare to your project
    - App.js
        - review your aws config (line 18)

# Reference

### DynamoDB + Dynamoose
- https://hub.docker.com/r/amazon/dynamodb-local/
