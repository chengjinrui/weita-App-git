angular.module('myApp')
    .controller('classifyMatCtrl', ['$scope', function ($scope) {
        $(function () {
            let item_as = $('.classify_content a')
            for(let i = 0; i < item_as.length; i++){
                $(item_as[i]).css({
                    background: `url('../images/clssify_material/${ i }.png') no-repeat .69rem center`,
                    backgroundSize: '1.13rem 1.13rem'
                })
            }
        })
    }])
