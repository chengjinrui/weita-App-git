
angular.module('myApp')
    .controller('mineSettingCtrl', ['$scope', function ($scope) {
        $scope.skipToPre = function () {
            window.history.back();
        }
    }])
