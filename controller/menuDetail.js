angular.module('myApp')
    .controller('menuDetailCtrl', ['$scope', '$stateParams', 'menuDetailService', function($scope, $stateParams, menuDetailService) {
        $scope.name = $stateParams.materialName
        $scope.backToPre = function() {
            window.history.back();
        }
        menuDetailService.then(function (response) {
            response.data.data.forEach(function (item) {
                if (item.materialName == $stateParams.materialName) {
                    $scope.currentMenu = item.data;
                    // console.log(item.data);
                }
            })
        }, function (response) {
            console.log(response);
        })

    }])

    // pieces 模板
    .directive('picesOfMenu', [function() {
        return {
            replace: true,
            template: `<div class="pices" ng-repeat="item in currentMenu">
                    <div class="content">
                        <div class="content-left">
                            <img ng-src="{{ item.menuPic }}" />
                        </div>
                        <div class="content-right">
                            <div class="content-right1">
                                <h2>{{ item.menuTitle }}</h2>
                                <p>{{ item.menuMaterial }}</p>
                            </div>
                            <div class="content-right2">
                                <ul>
                                    <li><span>{{ item.makeNum }}</span>人做过</li>
                                    <li><img src="../images/menuDetail/xx.jpg"> {{ item.collectNum }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`
        }
    }])
