angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        $urlRouterProvider
        .when('', '/home')
        .when('/activity', '/activity/onLine')
        .when('/basket', '/basket/defaultBasket')
        .when('/createActivity', '/createActivity/createOnlineAc')

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
        .state('activity.onLine', {
            url: '/onLine',
            templateUrl: '/view/onLine.html',
            controller: 'onLineCtrl'
        })
        .state('activity.offLine', {
            url: '/offLine',
            templateUrl: '/view/offLine.html',
            controller: 'offLineCtrl'
        })
        .state('mine', {
            url: '/mine',
            templateUrl: '/view/mine.html',
            controller: 'mineCtrl'
        })
        .state('basket', {
            url: '/basket',
            templateUrl: '/view/basket.html',
            controller: 'basketCtrl'
        })
        .state('basket.defaultBasket', {
            url: '/defaultBasket',
            templateUrl: '/view/defaultBasket.html',
        })
        .state('breakfast', {
            url: '/breakfast',
            templateUrl: '/view/breakfast.html',
            controller: 'breakfastCtrl'
        })
        .state('createActivity', {
            url: '/createActivity',
            templateUrl: '/view/createActivity.html',
            controller: 'createActivityCtrl'
        })
        .state('createActivity.createOnlineAc', {
            url: '/createOnlineAc',
            templateUrl: '/view/createOnlineAc.html'
        })
        .state('createActivity.createOfflineAc', {
            url: '/createOfflineAc',
            templateUrl: '/view/createOfflineAc.html'
        })
    }])
