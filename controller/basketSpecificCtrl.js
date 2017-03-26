

angular.module('myApp')
    .controller('basketSpecificCtrl', ['$scope', 'basketStoreFactory', function ($scope, basketStoreFactory) {
        console.log(basketStoreFactory.get());
        $scope.dataArr = basketStoreFactory.get();
        $scope.ifDele = function (index) {
            let $ps = $('.basket_specific p');
            console.log(index);
            $ps.eq(index).children().eq(1).toggleClass('hide');
        }
    }])
