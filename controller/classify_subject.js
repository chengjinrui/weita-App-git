
angular.module('myApp')
    .controller('classifySubCtrl', ['$scope', 'classifyService', function ($scope,classifyService) {
        // 服务获取数据
        classifyService.then(function (response) {
            $scope.data = response.data.data.theme;
            // console.log(response.data.data.theme);
        }, function (response) {
            console.log(response);
        })

        // 动态添加背景图片 最后6个动态添加img
        $(function () {
            let item_as = $('.classify_content a')
            for(let i = 0; i < item_as.length; i++){
                $(item_as[i]).css({
                    background: `url('../images/classify/${ i+2 }.png') no-repeat .69rem center`,
                    backgroundSize: '1.13rem 1.13rem'
                })
                if (i >= 12) {
                    $(`<img src="../images/classify/20.png">`).appendTo(item_as[i])
                    let $oContainer = $(`<div class="oContainer"><div>`);
                    $scope.data.forEach(function (item) {
                        if (item.classifyName == $(item_as[i]).children()[0].innerHTML) {
                            item.classifyList.forEach(function (item) {
                                $(`
                                    <section><a href="#">${item.name}</a></section>
                                `).appendTo($oContainer);
                            })
                        }
                    })
                    $oContainer.insertAfter($(item_as[i]).parent());
                }
            }
        })

        // $scope.show_NextContent = function (index) {
        //     var $oContainers = $('.oContainer');
        //     $oContainers.css({display:'none'});
        //     $oContainers[index-1].style.display = 'block'
        // }

    }])
