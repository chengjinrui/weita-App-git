
angular.module('myApp')
    .controller('showHowToDoCtrl', ['$stateParams', 'menuStepService', '$scope', function ($stateParams, menuStepService, $scope) {

        menuStepService.then(function (response) {
            $scope.temp = response.data.data;
            $scope.temp.forEach(function (item) {
                if (item.menuName == $stateParams.menuName) {
                    $scope.currentMenu = item;
                }
            })
        }, function (response) {
            console.log(response);
        })


    }])
