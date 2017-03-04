

angular.module('myApp')
    .controller('showHowToJoinCtrl', ['onLineService', '$stateParams', '$scope', function (onLineService, $stateParams, $scope) {
        onLineService.then(function (response) {
            response.data.data.forEach(function (item) {
                if (item.activeId == $stateParams.activeId) {
                    $scope.currentActivity = item;
                    console.log(item);
                }
            })
        }, function (response) {
            console.log(response);
        })
    } ])
