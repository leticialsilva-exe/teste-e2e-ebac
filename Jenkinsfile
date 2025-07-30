pipeline {
    agent any

    tools {
        nodejs 'NodeJS_23' // Ensure NodeJS is installed and configured in Jenkins
    }

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
                sh 'NO_COLOR=1 npm run cy:run'
            }
        }
        stage ('Deploy') {
            steps {
                echo 'Deploying....'
                publishHTML([allowMissing: false,
                    alwaysLinkToLastBuild: false, 
                    icon: '', keepAll: false, 
                    reportDir: '/mochawesome-report', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Test Report', 
                    reportTitles: '', 
                    useWrapperFileDirectly: true ])
            }
        }
}}