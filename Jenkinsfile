pipeline {
    agent any

    stages {
        stage ('Setup') {
            steps {
                echo 'Setting up...'
                sh 'npm install'
            }
        }
        stage ('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run cy:run'
            }
        }
        stage ('Deploy') {
            steps {
                echo 'Deploying....'
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: false, reportDir: '/mochawesome-report', reportFiles: 'mochawesome.html', reportName: 'Test Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
}