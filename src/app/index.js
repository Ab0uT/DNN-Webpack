const angular = require('angular'); // import 'angular' from 'angular';
require('@uirouter/angularjs'); // import '@uirouter/angularjs';

'user strict';

let app = angular.module('testApp',['ui.router']);

app.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
    $urlRouterProvider.otherwise('', '/');

    $stateProvider
    .state('root',{
        url:'/',
        template: require('../root/index.html')
    });
}]);

