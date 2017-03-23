angular.module('myApp')
    .controller('onLineCtrl', ['onLineService', '$scope', '$state', function(onLineService, $scope, $state){
        // 处理数据
        onLineService.then(function (response) {
            $scope.onLineDate = response.data.data;
        }, function (response) {
            console.log(response);
        })
        // 切换页面 showHowToJoin
        $scope.showHowToJoin = function (str) {
            $state.go('showHowToJoin', str)
        }
    }])
