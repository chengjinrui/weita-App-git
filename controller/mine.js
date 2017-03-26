angular.module('myApp')
    .controller('mineCtrl', ['$scope', '$state', function($scope, $state){
        $scope.name = '登录';
        $scope.skipToSystem = function () {
            $state.go('systemSetting');
        }
    }])
