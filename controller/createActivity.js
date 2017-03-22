angular.module('myApp')
    .controller('createActivityCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.backToPre = function () {
            $state.go('activity');
        }
        $scope.flag = true;
        $scope.tabLine = function () {
            $scope.flag = !$scope.flag;
            console.log($scope.flag);
            $scope.flag?$state.go('createActivity.createOnlineAc'):$state.go('createActivity.createOfflineAc')
        }
    }])
