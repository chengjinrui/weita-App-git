angular.module('myApp')
    .controller('informationCtrl', ['$scope', function($scope){
        $scope.name = '消息';
        $scope.tabFlag = true;
    }])
