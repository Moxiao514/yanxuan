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
                    let $loucengtop = _this.$('.indexcates .g-row').not('.m-expert').eq( $(this).index()).offset().top;

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



        }
    });
});

