angular.module('myApp')
    .controller('breakfastCtrl', ['$scope', function ($scope) {
        $scope.name = "早餐";
        $scope.backToPre = function () {
            window.history.back();
        }
    }])
