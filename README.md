# NodeJS + Express Development Template

- **Development** use express run on local
- **Test** use Mocha/Chai


# Detail for Claudia + AWS-Lambda

- **Production** use claudia to deploy on AWS-Lambda

## Prepare to your project
File: package.json
- "api:create": "claudia create --name **_`sample-express-lambda`_** --region **_`ap-northeast-1`_** --handler lambda.handler --deploy-proxy-api --config **_`claudia-api.json`_** **_`--policies claudia-policy/*.json`_** --set-env NODE_ENV=production",
- "api:update": "claudia update --config **_`claudia-api.json`_** --set-env NODE_ENV=production",
- "api:destroy": "claudia destroy --config **_`claudia-api.json`_**"


# Reference

### Claudia + AWS-Lambda
- https://github.com/claudiajs/claudia/blob/master/docs/create.md ***
- https://claudiajs.com/news/2016/10/05/claudia-2.1.html
- https://claudiajs.com/tutorials/serverless-express.html
- https://github.com/awslabs/aws-serverless-express
