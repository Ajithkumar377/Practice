pipeline {
    agent any

    environment {
        IMAGE_NAME = "ajithkumar377/flaskapp:latest"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME ./app'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker rm -f flask-container || true
                    docker run -d --name flask-container -p 5000:5000 $IMAGE_NAME
                '''
            }
        }
    }
}

