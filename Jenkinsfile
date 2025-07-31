pipeline {
    agent any

    stages {
        stage('Clone GitHub Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/Ajithkumar377/Practice.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ajithkumar377/flaskapp:latest ./app'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push ajithkumar377/flaskapp:latest'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 5000:5000 ajithkumar377/flaskapp:latest'
            }
        }
    }
}

