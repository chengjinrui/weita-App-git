// 注意看   angular.module('myApp') 括号里面没有第二个参数了 不然要GG
angular.module('myApp')
    .controller('mineCtrl', ['$scope', function($scope){
        $scope.name = '味他!MINE';
    }])
