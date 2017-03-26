// angular.module('myApp', ['ui.router', 'me-lazyload'])
angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        $urlRouterProvider
        .when('', '/home')
        .when('/activity', '/activity/onLine')
        .when('/createActivity', '/createActivity/createOnlineAc')
        .when('/classify', '/classify/subject')

        $stateProvider
        // 主页 home
        .state('home', {
            url: '/home',
            templateUrl: '/view/home/home.html',
            controller: 'homeCtrl'
        })
        .state('skipUpload', {
            url: '/skipUpload',
            templateUrl: '/view/home/skipUpload.html',
        })
        .state('skipShowPic', {
            url: '/skipShowPic',
            templateUrl: '/view/home/skipShowPic.html',
        })
            // 主页 菜篮子
        .state('basket', {
            url: '/basket',
            templateUrl: '/view/home/basket.html',
            controller: 'basketCtrl'
        })
        .state('basket.defaultBasket', {
            url: '/defaultBasket',
            templateUrl: '/view/home/defaultBasket.html'
        })
        .state('basket.basket_specific', {
            url: '/basket_specific',
            templateUrl: '/view/home/basket_specific.html',
            controller: 'basketSpecificCtrl'
        })
            // 主页 七个分菜单点进去
        .state('menuDetail', {
            url: '/menuDetail:materialName',
            templateUrl: '/view/home/menuDetail.html',
            controller: 'menuDetailCtrl'
        })

            // 主页更多
        .state('classify', {
            url: '/classify',
            templateUrl: '/view/home/classify.html',
            controller: 'classifyCtrl'
        })
                // 专题分类
        .state('classify.subject', {
            url: '/subject',
            templateUrl: '/view/home/classify_subject.html',
            controller: 'classifySubCtrl'
        })
                // 食材分类
        .state('classify.material', {
            url: '/material',
            templateUrl: '/view/home/classify_material.html',
            controller: 'classifyMatCtrl'
        })


        // 消息 information
        .state('information', {
            url: '/information',
            templateUrl: '/view/information/information.html',
            controller: 'informationCtrl'
        })

        // 动态 news
        .state('news', {
            url: '/news',
            templateUrl: '/view/news/news.html',
            controller: 'newsCtrl'
        })

        // 活动activity
        .state('activity', {
            url: '/activity',
            templateUrl: '/view/activity/activity.html',
            controller: 'activityCtrl'
        })
        .state('activity.onLine', {
            url: '/onLine',
            templateUrl: '/view/activity/onLine.html',
            controller: 'onLineCtrl'
        })
        .state('activity.offLine', {
            url: '/offLine',
            templateUrl: '/view/activity/offLine.html',
            controller: 'offLineCtrl'
        })
            // 创建活动
        .state('createActivity', {
            url: '/createActivity',
            templateUrl: '/view/activity/createActivity.html',
            controller: 'createActivityCtrl'
        })
            // 线上
        .state('createActivity.createOnlineAc', {
            url: '/createOnlineAc',
            templateUrl: '/view/activity/createOnlineAc.html'
        })
            // 展示活动详情 如何参加到这个活动 属于线上活动的板块
        .state('showHowToJoin', {
            url: '/showHowToJoin:activeId',
            templateUrl: '/view/activity/showHowToJoin.html',
            controller: 'showHowToJoinCtrl'
        })
            // 线下
        .state('createActivity.createOfflineAc', {
            url: '/createOfflineAc',
            templateUrl: '/view/activity/createOfflineAc.html'
        })

        // 个人 mine
        .state('mine', {
            url: '/mine',
            templateUrl: '/view/mine/mine.html',
            controller: 'mineCtrl'
        })



//
//
//
// 待修正
        // 动态 展示怎么去做的页面
        .state('showHowToDo', {
            url: '/showHowToDo:menuName',
            templateUrl: '/view/showHowToDo.html',
            controller: 'showHowToDoCtrl'
        })


    }])
