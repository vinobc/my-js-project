pipeline {
    agent any

    tools {
        nodejs 'NodeJS 22'
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
