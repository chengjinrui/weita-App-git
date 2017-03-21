angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.when('', '/home')

        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/view/home.html',
            controller: 'homeCtrl'
        })
        .state('information', {
            url: '/information',
            templateUrl: '/view/information.html',
            controller: 'informationCtrl'
        })
        .state('news', {
            url: '/news',
            templateUrl: '/view/news.html',
            controller: 'newsCtrl'
        })
        .state('activity', {
            url: '/activity',
            templateUrl: '/view/activity.html',
            controller: 'activityCtrl'
        })
        .state('mine', {
            url: '/mine',
            templateUrl: '/view/mine.html',
            controller: 'mineCtrl'
        })
    }])
