angular.module('myApp')
    .controller('activityCtrl', ['$scope', function($scope){
        $scope.name = '活动';
        $scope.tabFlag = true;
    }])
