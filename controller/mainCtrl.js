
// 注意区别我这里用了as ctrl
angular.module('myApp')
    .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.changeIconBg = function () {
            console.log($location);
            // 实现底部的改变背景还未实现
        }
    }])
