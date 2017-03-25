// 注意区别我这里用了as ctrl
angular.module('myApp')
    .controller('MainCtrl', ['$timeout', function($timeout) {
        var self = this;
        $timeout(function() {
            $('.bg_banner').css({
                display: 'none'
            })
        }, 100);

        // 封装个方法
        let aboutBgSize = function (str) {

            switch (str) {
                case 0:
                    $sections.eq(str).css({
                        backgroundSize: `.75rem .64rem`,
                    })
                    break;
                case 1:
                    $sections.eq(str).css({
                        backgroundSize: `.48rem .64rem`,
                    })
                    break;
                case 2:
                    $sections.eq(str).css({
                        backgroundSize: `.67 rem .64 rem`,
                    })
                    break;
                case 3:
                    $sections.eq(str).css({
                        backgroundSize: `.48 rem .64 rem`,
                    })
                    break;
                case 4:
                    $sections.eq(str).css({
                        backgroundSize: `.63rem .68rem`,
                    })
                    break;
            }


        }

        let $sections = $('.footer section');
        this.changeIconBg = function(str1, str2) {
            // console.log(str1);
            // console.log(str2);
            // console.log($sections.eq(str2));
            //
            // 先让所有的背景都变成01
            // 再让点击的当前对象的背景变成02
            //
            //
            $sections.eq(str2).css({
                background: `url('./images/footer/${ str1 }02.png') no-repeat top center`,
                backgroundSize: `.75rem .64rem`,
            })
            aboutBgSize(str2)
            // console.log(`'${ str1 }02.png'`);
            // background: url('../images/footer/home02.png') no-repeat top center;
        }
    }])
