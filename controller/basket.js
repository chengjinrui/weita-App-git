angular.module('myApp')
    .controller('basketCtrl', ['$scope', 'basketStoreFactory', '$state', function ($scope, basketStoreFactory, $state) {
        // 返回首页
        $scope.backToPre = function () {
            $state.go('home');
        }
        // console.log(basketStoreFactory.get());
        if (basketStoreFactory.get().length == 0) {
            $state.go('basket.defaultBasket');
        }else{
            $state.go('basket.basket_specific');
        }

        $scope.deleBasket = function () {
            if (confirm('are u sure?')) {
                basketStoreFactory.clearAll();
                // have the same result
                    // $('.basket_specific').text('');
                    // $('.basket_specific').html('');
                $('.basket_specific').empty();
            }
        }
    }])
