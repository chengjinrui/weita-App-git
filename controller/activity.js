angular.module('myApp')
    .controller('activityCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
        $scope.name = '活动';
        // 初始化$tabFlag的值的时候也有坑
        $location.$$path=='/activity/offLine'?$scope.tabFlag = false:$scope.tabFlag = true;
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
