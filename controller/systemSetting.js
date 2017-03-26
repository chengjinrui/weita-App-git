

angular.module('myApp')
    .controller('systemSettingCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.skipToAddress = function () {
            $state.go('storeAddress');
        }
        $scope.skipToPre = function () {
            window.history.back();
        }
        $scope.skipToMineSetting = function () {
            $state.go('mineSetting');
        }
    }])
