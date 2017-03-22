// 注意看   angular.module('myApp') 括号里面没有第二个参数了 不然要GG
angular.module('myApp')
    .controller('homeCtrl', ['$scope', 'myService', 'testService', function($scope, myService, testService){
        $scope.name = '味他!HOME';
        myService.then(function(response){
            $scope.data = response.data.data.hotMenu
        },function(response){
            console.log(response);
        })
        // 轮播
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 1000,
            autoplayDisableOnInteraction : false,
            loop: false
        });

        //测试拿数据
        testService.then(function(response){
            // console.log(response);
        }, function(response){
            console.log(response);
        })
    }])
