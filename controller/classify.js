

angular.module('myApp')
    .controller('classifyCtrl', ['$scope', '$location', '$state', function ($scope, $location, $state) {
        $scope.backToPre = function () {
            $state.go('home');
        }
        // 初始化$tabFlag的值的时候也有坑 解决刷新之后有bug的情况
        $location.$$path=='/classify/material'?$scope.tabFlag = false:$scope.tabFlag = true;
        $scope.tab_passHash = function(hash) {
            switch (hash) {
                case 'subject':
                    $scope.tabFlag = true;
                    break;
                case 'material':
                    $scope.tabFlag = false;
                    break;
            }
        }
    }])
