angular.module('myApp')
// 主页showMenu
    .service('myService', ['$http', function($http){
        return $http.get('http://localhost:8888/data/01.json')
    }])
// 菜谱详情
    .service('menuStepService', ['$http', function($http){
        return $http.get('http://localhost:8888/data/menuDetails.json')
    }])
// 线上活动
    .service('onLineService', ['$http', function ($http) {
        return $http.get('http://localhost:8888/data/onLineActivity.json')
    }])
// 菜单详情拿数据  这里包含了七个菜单里面的所有东西  更多分类那些还不全
    .service('menuDetailService', ['$http', function ($http) {
        return $http.get('http://localhost:8888/data/allMenu_showHome.json')
    }])
// classify 拿数据
    .service('classifyService', ['$http', function ($http) {
        return $http.get('http://localhost:8888/data/classify.json')
    }])
// basket tempStore
    .factory('basketStoreFactory', [ function () {
        let store = [];
        return {
            get : function () {
                return store;
            },
            add : function (obj) {
                store.push(obj);
            },
            clearAll : function (obj) {
                store = [];
            }
        }
    }])
