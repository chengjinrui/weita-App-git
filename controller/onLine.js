angular.module('myApp')
    .controller('onLineCtrl', ['onLineService', '$scope', function(onLineService, $scope){
        onLineService.then(function (response) {
            $scope.onLineDate = response.data.data;
        }, function (response) {
            console.log(response);
        })
    }])
