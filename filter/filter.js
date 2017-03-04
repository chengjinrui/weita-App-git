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

    .filter('timeStampTurnFilter', [ function () {
        var newDate = new Date();

        return function (timeStamp) {
            // console.log(timeStamp);
            newDate.setTime(timeStamp * 1000)
            // console.log(newDate.toISOString());
            return newDate.toISOString();
        }

    }])


    .filter('textWrapFilter', [ function () {
        return function (str) {
            console.log(str.split('<br />'));
            return str.split('<br />')
        }
    }])
