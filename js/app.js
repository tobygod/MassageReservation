'use strict';

angular.module('massageReserve', ['ui.router', 'ngResource'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    
    .state('app.admin', {
        url:'/',
        views: {
            'admin': {
                templateUrl: 'views/header.html',
            }
        }
    })
    
    $urlRouterProvider.otherwise('/');
})
;