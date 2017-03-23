angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        $urlRouterProvider
        .when('', '/home')
        .when('/activity', '/activity/onLine')
        .when('/basket', '/basket/defaultBasket')
        .when('/createActivity', '/createActivity/createOnlineAc')
        .when('/classify', '/classify/subject')

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
        .state('menuDetail', {
            url: '/menuDetail:materialName',
            templateUrl: '/view/menuDetail.html',
            controller: 'menuDetailCtrl'
        })

        // 创建活动
        .state('createActivity', {
            url: '/createActivity',
            templateUrl: '/view/createActivity.html',
            controller: 'createActivityCtrl'
        })
        // 线上
        .state('createActivity.createOnlineAc', {
            url: '/createOnlineAc',
            templateUrl: '/view/createOnlineAc.html'
        })
        // 线下
        .state('createActivity.createOfflineAc', {
            url: '/createOfflineAc',
            templateUrl: '/view/createOfflineAc.html'
        })


        // 分类
        .state('classify', {
            url: '/classify',
            templateUrl: '/view/classify.html',
            controller: 'classifyCtrl'
        })
        // 专题分类
        .state('classify.subject', {
            url: '/subject',
            templateUrl: '/view/classify_subject.html',
            controller: 'classifySubCtrl'
        })
        // 食材分类
        .state('classify.material', {
            url: '/material',
            templateUrl: '/view/classify_material.html',
            controller: 'classifyMatCtrl'
        })

        // 动态 展示怎么去做的页面
        .state('showHowToDo', {
            url: '/showHowToDo:menuName',
            templateUrl: '/view/showHowToDo.html',
            controller: 'showHowToDoCtrl'
        })
    }])
