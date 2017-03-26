angular.module('myApp')
    .controller('informationCtrl', ['$scope', '$location', function($scope, $location){
        $scope.name = '消息';
        $location.$$path=='/information/chat'?$scope.tabFlag = false:$scope.tabFlag = true;
        $scope.tab_passHash = function(hash) {
            switch (hash) {
                case 'notice':
                    $scope.tabFlag = true;
                    break;
                case 'chat':
                    $scope.tabFlag = false;
                    break;
            }
        }
    }])
