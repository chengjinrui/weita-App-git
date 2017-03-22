angular.module('myApp')
    .filter('dataFilter', [ function () {
        // 补零
        function addZero(str){
            if (parseInt(str)>=10) {
                return str;
            }else{
                return 0 + "" + str;
            }
        }
        // 返回值
        return function (str) {
            var result = "";
            var arr = [];
            arr = str.split('/');
            result = addZero(arr[1]) + ".";
            result += addZero(arr[2]);
            return result;
        }
    }])
