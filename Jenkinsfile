pipeline {
    agent any

    tools {
        nodejs 'NodeJS 22'
    }

    environment {
        TEST_PORT = '3001'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        always {
            echo 'Build completed!'
        }
    }
}
