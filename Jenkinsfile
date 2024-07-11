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
                sh 'npm ci'
            }
        }
        stage('Run Security Check') {
            steps {
                sh 'npm audit --audit-level=moderate'
            }
        }
        stage('Static Code Analysis') {
            steps {
                sh 'npx eslint .'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            echo 'Build completed!'
        }
    }
}