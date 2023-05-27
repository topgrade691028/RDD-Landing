#!groovy
//@Library('pipeline-shared-library') _

pipeline {
  agent { node { label 'worker-docker' } }
  options {
        disableConcurrentBuilds()
        ansiColor('xterm')
        }
  environment {
    ANSIBLE_COLLECTIONS_PATH = "${WORKSPACE}/collections"
    ANSIBLE_ROLES_PATH = "${WORKSPACE}/deploy/roles"
    ECR = "754069317055.dkr.ecr.eu-central-1.amazonaws.com"
    BRANCH_NAME = "${GIT_BRANCH.toLowerCase().replaceAll('^[0-9]', '').replaceAll('[^a-z0-9]', '-').replaceAll('-+', '-').replaceAll('(^-+|-+$)', '').take(63)}"
    IMAGEVERSION = "0.0.1-${BRANCH_NAME}-${BUILD_ID}"
    ENV="${GIT_BRANCH.equalsIgnoreCase('master') ? 'prod' : 'dev'}"
    DOCKER_TAG = "rdd-landing:${BRANCH_NAME}-${IMAGEVERSION}"
  }
  stages {
      stage('Prepare') {
        steps {
          script {
             sh 'export ANSIBLE_COLLECTIONS_PATHS="${WORKSPACE}/collections"'
             sh 'ansible-galaxy collection install -r requirements.yml -p ${WORKSPACE}/collections'
          }
        }
      }
	  stage('Docker build App') {
	      steps {
              script {
                currentBuild.displayName = "${IMAGEVERSION}"
                currentBuild.description = "${IMAGEVERSION}"
              }
              sh 'docker build --no-cache --target rdd-landing-build -t rdd-admin-build:build .'
	      }
	  }
	  stage('Docker build Runtime') {
	      steps {
	          sh 'docker build --no-cache --target rdd-landing-runtime -t ${ECR}/${DOCKER_TAG} .'
          }
	  }
	  stage('Publish to ECR') {
	      when { branch 'master' }
	      steps {
          script
            {
                  docker.withRegistry("https://754069317055.dkr.ecr.eu-central-1.amazonaws.com", "ecr:eu-central-1:Jenkins-ECR")
                  {
	                sh 'docker push ${ECR}/${DOCKER_TAG}'
                  }
            }
	      }
	  }
      stage('Deploy') {
       when { branch 'master' }
        steps {
          script {
          //   timeout(time: 600, unit: 'SECONDS') {
          //        input 'Do you want to proceed to the Deployment?'
          //   }
              echo "Deploying Landing ${DOCKER_TAG} to ${ENV}"
              ansiblePlaybook([colorized: true,
                               credentialsId: 'RDD-devops',
                               extraVars:[env: "${ENV}",
                                          DOCKER_TAG: "${DOCKER_TAG}",
                                          DOCKER_REGISTRY: "${ECR}"],
                               inventory: 'deploy/inventory/hosts',
                               disableHostKeyChecking: true ,
                               playbook: 'main.yml'])
          }
        }
     }
}
  post {
          always {
            cleanWs deleteDirs: true, notFailBuild: true
          }
      }
}
