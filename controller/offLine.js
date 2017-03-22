
angular.module('myApp')
    .controller('offLineCtrl', ['$scope', function ($scope) {
        $scope.hideFooter = function () {
            // 隐藏footer
            document.querySelector('.footer').style.bottom = "-10%";
            // 改变index.html中ui-view的高度
            // console.log(document.querySelector('#indexFooter'));
            // document.querySelector('#indexFooter').style.height = "auto";
        }
    }])
