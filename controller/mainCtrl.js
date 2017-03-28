// 注意区别我这里用了as ctrl
console.log(angular.module('myApp'));
angular.module('myApp')
    .controller('MainCtrl', ['$timeout', '$rootScope', '$stateParams', '$scope', '$timeout', function($timeout, $rootScope, $stateParams, $scope, $timeout) {
        var self = this;
        $timeout(function() {
            $('.bg_banner').css({
                display: 'none'
            })
        }, 10);

        // 监听路由变化 专注与footer底部样式的改变
        $rootScope.$on('$locationChangeSuccess', function (event, msg) {
            // console.log([event, msg]);
            // console.log(event);
            // console.log(msg);
            var str1 =  new RegExp('home');
            var str2 = new RegExp('information');
            var str3 = new RegExp('news');
            var str4 = new RegExp('activity');
            var str5 = new RegExp('mine');
            var str6 = new RegExp('showHowToDo');
            $rootScope.homeFlag = str1.test(msg);
            $rootScope.informationFlag = str2.test(msg);
            $rootScope.newsFlag = str3.test(msg);
            if (!str3.test(msg)) {
                $rootScope.newsFlag = str6.test(msg)
            }
            $rootScope.activityFlag = str4.test(msg);
            $rootScope.mineFlag = str5.test(msg);

            $rootScope.homeFlag?$scope.homeSrcIndex='1':$scope.homeSrcIndex='0';
            $rootScope.informationFlag?$scope.informationSrcIndex='1':$scope.informationSrcIndex='0';
            $rootScope.newsFlag?$scope.newsSrcIndex='1':$scope.newsSrcIndex='0';
            $rootScope.activityFlag?$scope.activitySrcIndex='1':$scope.activitySrcIndex='0';
            $rootScope.mineFlag?$scope.mineSrcIndex='1':$scope.mineSrcIndex='0';
        })
    }])
