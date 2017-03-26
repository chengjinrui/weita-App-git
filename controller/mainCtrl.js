
// 注意区别我这里用了as ctrl
angular.module('myApp')
    .controller('MainCtrl', ['$timeout', function ($timeout) {
        var self = this;
        $timeout(function () {
            $('.bg_banner').css({display:'none'})
        }, 100);
    }])
