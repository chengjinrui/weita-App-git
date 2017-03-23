angular.module('myApp')
    .controller('createActivityCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.backToPre = function () {
            $state.go('activity');
            // 原先隐藏的footer出现
            document.querySelector('.footer').style.bottom = "0";
        }
        $scope.flag = true;
        tabLine = function (e) {
            $scope.flag = !$scope.flag;
            // console.log($scope.flag);
            // console.log(e);
            $scope.flag?$state.go('createActivity.createOnlineAc'):$state.go('createActivity.createOfflineAc')
        	$scope.flag?e.innerHTML='线上<img src="../images/activity/sj.jpg">':e.innerHTML='线下<img src="../images/activity/sj.jpg">';
        }
    }])
