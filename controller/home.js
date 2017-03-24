// 注意看   angular.module('myApp') 括号里面没有第二个参数了 不然要GG
angular.module('myApp')
    .controller('homeCtrl', ['$scope', 'myService', '$state', function($scope, myService, $state){
        $scope.name = '味他!HOME';
        myService.then(function(response){
            $scope.data = response.data.data.hotMenu;
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

        $scope.showTwoMenu = function () {
            $('.leftMenu_main').toggleClass('rotate');
            $('.leftTopMenu').toggleClass('show');
            $('.leftBottomMenu').toggleClass('show');
        }
        $scope.skipUpload = function () {
            $state.go('skipUpload');
        }
        $scope.skipShowPic = function () {
            $state.go('skipShowPic');
        }


//  这里有问题 要确定一下数据 数据不对
        $scope.showHowToDo = function (str) {
            console.log(str);
        }


    }])
