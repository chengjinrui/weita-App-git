angular.module('myApp')
    .controller('classifyMatCtrl', ['$scope', 'classifyService', function ($scope, classifyService) {
        // 服务获取数据
        classifyService.then(function (response) {
            $scope.data = response.data.data.material;
        }, function (response) {
            console.log(response);
        })

        $(function () {
            let item_as = $('.classify_content a');

            for(let i = 0; i < item_as.length; i++){
                $(item_as[i]).css({
                    background: `url('../images/clssify_material/${ i }.png') no-repeat .69rem center`,
                    backgroundSize: '1.13rem 1.13rem'
                })
            }
        })


    }])
//
//
//
// 动态请求数据 还未完成
