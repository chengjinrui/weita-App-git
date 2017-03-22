angular.module('myApp')
// 主页showMenu
    .service('myService', ['$http', function($http){
        return $http.get('http://localhost:8888/data/01.json')
    }])
// 菜谱详情
    .service('menuDetailService', ['$http', function($http){
        return $http.get('http://localhost:8888/data/menuDetails.json')
    }])
// 线上活动
    .service('onLineService', ['$http', function ($http) {
        return $http.get('http://localhost:8888/data/onLineActivity.json')
    }])
// 菜单详情拿数据
    .service('menuDetailService', ['$http', function ($http) {
        return $http.get('http://localhost:8888/data/allMenu_showHome.json')
    }])
// 测试拿数据
    .service('testService', [ '$http', function($http){
        return $http.get('http://proxy.e12e.com/?http://wap.chufang001.com/wapdata/homepage.asp')
    }])
