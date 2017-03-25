angular.module('myApp')
    .controller('newsCtrl', ['$scope', '$rootScope', 'menuStepService', '$state', function($scope, $rootScope, menuStepService, $state){
        $scope.name = '动态';
        $scope.count = 10;
        // 数据
        menuStepService.then(function (response) {
            // console.log(response.data.data);
            $scope.data = response.data.data;
        }, function (response) {
            console.log(response);
        })


        $scope.showHowToDo = function (str) {
            $state.go('showHowToDo', str);
            // console.log(str);
        }
    }])
