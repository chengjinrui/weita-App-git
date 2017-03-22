angular.module('myApp')
    .controller('basketCtrl', ['$scope', function ($scope) {
        // 返回首页
        $scope.backToPre = function () {
            window.history.back();
        }
    }])
