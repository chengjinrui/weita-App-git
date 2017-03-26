angular.module('myApp')
    .controller('showHowToDoCtrl', ['$stateParams', 'menuStepService', '$scope', 'basketStoreFactory', function($stateParams, menuStepService, $scope ,basketStoreFactory) {

        menuStepService.then(function(response) {
            $scope.temp = response.data.data;
            $scope.temp.forEach(function(item) {
                if (item.menuName == $stateParams.menuName) {
                    $scope.currentMenu = item;

                    // 注意每次打开showHowToDo这个网页的时候都要去确定菜篮子中有没有该物品
                    // 有的话  页面的按钮要变成已加入且禁用按钮功能
                    // 这里就是判断
                    if (basketStoreFactory.get().length > 0) {
                        basketStoreFactory.get().forEach(function (tempObj) {
                            if (tempObj.menuName == $scope.currentMenu.menuName) {
                                $('.oBasket').addClass('alreadyAdded');
                                $('.oBasket').html('√ 已加入');
                                $('.oBasket').attr('disabled', 'disabled');
                            }
                        })
                    }
                    // else{
                    //     console.log("@@@");
                    // }
                }
            })
        }, function(response) {
            console.log(response);
        })

        // addToBasket 加入菜篮子中
        $scope.addToBasket = function(menuName) {
            menuStepService.then(function(response) {
                $scope.temp = response.data.data;
                $scope.temp.forEach(function(item) {
                    if (item.menuName == menuName) {
                        // console.log(menuName);
                        // console.log(item);
                        basketStoreFactory.add(item);
                        // console.log(basketStoreFactory.get());
                    }
                })
            }, function(response) {
                console.log(response);
            })

            $('.oBasket').addClass('alreadyAdded');
            $('.oBasket').html('√ 已加入');
            $('.oBasket').attr('disabled', 'disabled');
        }
            // 要注意每次打开showHowToDo这个网页的时候都要去确定菜篮子中有没有该物品 有的话 页面的按钮要变成已加入且禁用按钮功能
            // 仔细想一想  应该是在初始化showHowToDo的时候 所以应该在最上面


    }])
