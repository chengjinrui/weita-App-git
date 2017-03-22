angular.module('myApp')
    .controller('createActivityCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.backToPre = function () {
            $state.go('activity');
            // 原先隐藏的footer出现
            document.querySelector('.footer').style.bottom = "0";
        }
        $scope.flag = true;
        $scope.tabLine = function () {
            $scope.flag = !$scope.flag;
            console.log($scope.flag);
            $scope.flag?$state.go('createActivity.createOnlineAc'):$state.go('createActivity.createOfflineAc');
        }
    }])
