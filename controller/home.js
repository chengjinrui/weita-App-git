// 注意看   angular.module('myApp') 括号里面没有第二个参数了 不然要GG
angular.module('myApp')
    .controller('homeCtrl', ['$scope', 'menuStepService', '$state', function($scope, menuStepService, $state){
        $scope.name = '味他!HOME';
        menuStepService.then(function(response){
            $scope.data = response.data.data;
            console.log(response.data.data);
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
        $scope.showHowToDo = function (str) {
            $state.go('showHowToDo', str);
        }
    }])
