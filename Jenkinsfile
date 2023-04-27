pipeline {
    agent any
    stages {
        stage('Submit Stack') {
            steps {
            sh "aws cloudformation create-stack --stack-name s3bucket --template-body file://FirstBucket.json --region 'us-east-1'"
              }
             }
            }
            }

