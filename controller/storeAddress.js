

angular.module('myApp')
    .controller('storeAddressCtrl', ['$scope', function ($scope) {
        $scope.skipToPre = function () {
            window.history.back();
        }
    }])
