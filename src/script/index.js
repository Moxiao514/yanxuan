//调用第三方模块，首页效果


//调用config配置模块
require(['config'], function () {
    require(['jquery', 'jqcookie'], function () { //加载模块
        // 效果的自执行函数
        return {


            // tab切换
            tab: (function () {
                $('.SH-2').hide();
                $('.tuijian').click(function () {
                    $(this).children('.tuijian a').addClass('Tabactive').parent('.tuijian').siblings('.tuijian ').children('.tuijian a').removeClass('Tabactive');
                    $('.showContainer').eq($(this).index()).show().siblings('.showContainer').hide();
                });
            })(),
            louti: (function () {
                // var leftlounav = $('.LeftLouTi');//楼梯整体

                // var returntop = $('.returntop');//回到顶部
                // var newproducts = $('.newproducts');//新品首发
                // var popular = $('.popular');//人气推荐
                // var falsesale = $('.falsesale');//限时购
                // var salecenter = $('.salecenter');//福利社
                // var indexcates = $('.indexcates');//中心商品部分
                var _this = this;
                var $top = $(window).scrollTop();//当前的scrolltop

                if ($top >= 600) {
                    this.$('.LeftLouTi').show();
                } else {
                    this.$('.LeftLouTi').hide();
                }
                //拖动到一定位置显示左侧楼梯导航
                $(window).on('scroll', function () {
                    let $top = $(this).scrollTop();
                    if ($top >= 600) {
                        _this.$('.LeftLouTi').show();
                    } else {
                        _this.$('.LeftLouTi').hide();
                    }





                });


                //点击楼梯，显示右侧对应的图层
                // console.log($('.indexcates .g-row').not('.m-expert'));
                // console.log($('.LeftLouTi li').not('.Scroll'));

                this.$('.LeftLouTi li').not('.Scroll').on('click', function () {
                    $(this).addClass('selectnow').siblings('li').removeClass('selectnow');
                    //获取每一个楼层的top值
                    let $loucengtop = _this.$('.indexcates .g-row').not('.m-expert').eq($(this).index()).offset().top;

                    $('html,body').animate({
                        scrollTop: $loucengtop
                    });
                });









                // 新品首发
                this.$('.LeftLouTi li:first-child').not('.returntop').on('click', function () {
                    $(this).addClass('selectnow').siblings('li').removeClass('selectnow');
                    //获取每一个楼层的top值
                    let $newtop = _this.$('.newproducts').offset().top;

                    $('html,body').animate({
                        scrollTop: $newtop
                    });
                });
                // 人气推荐
                this.$('.LeftLouTi li:nth-child(2)').not('.returntop').on('click', function () {
                    $(this).addClass('selectnow').siblings('li').removeClass('selectnow');
                    //获取每一个楼层的top值
                    let $newtop = _this.$('.popular').offset().top;

                    $('html,body').animate({
                        scrollTop: $newtop
                    });
                });
                // 限时购
                this.$('.LeftLouTi li:nth-child(3)').not('.returntop').on('click', function () {
                    $(this).addClass('selectnow').siblings('li').removeClass('selectnow');
                    //获取每一个楼层的top值
                    let $timetop = _this.$('.falsesale').offset().top;

                    $('html,body').animate({
                        scrollTop: $timetop
                    });
                });

                // 福利社
                this.$('.LeftLouTi li:nth-child(4)').not('.returntop').on('click', function () {
                    $(this).addClass('selectnow').siblings('li').removeClass('selectnow');
                    //获取每一个楼层的top值
                    let $fulitop = _this.$('.salecenter').offset().top;

                    $('html,body').animate({
                        scrollTop: $fulitop
                    });
                });

                //回到顶部
                this.$('.returntop').on('click', function () {
                    $('html,body').animate({
                        scrollTop: 0
                    });
                });








            })(),
            topnav: (function () {


                $(window).on('scroll', function () {
                    let $top = $(window).scrollTop();

                    if ($top >= 200) {
                        $('.hidden-nav').stop(true).animate({
                            top: 0
                        });

                    } else {
                        $('.hidden-nav').stop(true).animate({
                            top: -60
                        })
                    }
                });
            })(),
            lunbo: (function () {
                // 小按钮
                $lunbobtns = $('.banner-inner .slick-dots .slick-slide');
                //console.log($lunbobtns)
                // 轮播图片
                $lunbopics = $('.img-wrap');
                // 向上切换按钮
                $lunboPrev = $('.slick-prev');

                // 向下切换按钮
                $lunboNext = $('.slick-next');
                //console.log($lunboNext)
                var num = 0;
                var $timer = null;

                // 点击向上切换按钮
                $lunboPrev.click(function () {
                    num--;
                    if (num < 0) {
                        num = $lunbobtns.length - 1;
                    }
                    change();
                });


                // 点击向下切换按钮
                $lunboNext.click(function () {
                    num++;
                    if (num > $lunbobtns.length - 1) {
                        num = 0;
                    }
                    change();
                });



                // 点击小按钮
                $lunbobtns.click(function () {
                    num = $(this).index();
                    change();
                });



                // 自动轮播

                $timer = setInterval(function () {

                    $('.slick-next').click();
                }, 3000);



                // 封装透明度改变函数
                function change() {
                    $lunbobtns.eq(num).addClass('active').siblings().removeClass('active');
                    $lunbopics.eq(num).stop(true, true).animate({
                        opacity: 1
                    }).siblings('.img-wrap').stop(true, true).animate({
                        opacity: 0
                    });
                }



            })(),

            changepage: (function () {

                $lunboPrev = $('.newItemSlick .slickprev');
                //console.log($lunboPrev)
                $lunboNext = $('.newItemSlick .slicknext');

                $picbox = $('.allSlickImg');
                //console.log($picbox)
                $lunboNext.click(function () {
                    $picbox.css('left', '-1100px');
                });
                $lunboPrev.click(function () {
                    $picbox.css('left', '0px');
                });


            })(),
            time: (function () {

                function djs() {
                    var currenttime = new Date();
                    var futuretime = new Date('2019-10-30 18:00:00');//未来的时间
                    var time = parseInt((futuretime - currenttime) / 1000);//剩下的时间--s

                    var hour = parseInt(time % 86400 / 3600);//小时
                    var min = parseInt(time % 3600 / 60);//分
                    var sec = time % 60//秒
                    var times = hour + ':' + min + ':' + sec;
                    return times;
                }
                const timebox = document.querySelector('.m-countDown');
                timebox.innerHTML = djs();
                window.setInterval(function () {
                    timebox.innerHTML = djs();
                }, 1000);


            })(),

        }

    });
});

