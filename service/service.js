angular.module('myApp')
// 主页showMenu
    .service('myService', ['$http', function($http){
        return $http.get('http://localhost:8888/data/01.json')
    }])
// 菜谱详情
    .service('menuDetailService', ['$http', function($http){
        return $http.get('http://localhost:8888/data/menuDetails.json')
    }])
