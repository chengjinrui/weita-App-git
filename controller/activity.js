angular.module('myApp')
    .controller('activityCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.name = '活动';
        $scope.tabFlag = true;
        $scope.tab_passHash = function(hash) {
            switch (hash) {
                case 'onLine':
                    $scope.tabFlag = true;
                    break;
                case 'offLine':
                    $scope.tabFlag = false;
                    break;
            }
        }
    }])
