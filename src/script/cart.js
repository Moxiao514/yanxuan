define([], function () {
    function init() {
        //调用config配置模块
        require(['config'], function () {
            require(['jquery', 'jqcookie'], function () { //加载模块
                // 效果的自执行函数
                return {
                    // 全选
                    allselect: (function () {
                        // 顶部全选按钮
                        $allselect = $('.SelectCheck input');//全选按钮
                        $('.SelectCheck input').prop('checked', true);
                        // 底部全选按钮
                        $bothselect = $('.w-chkbox input');
                        $('.w-chkbox input').prop('checked', true);
                        //console.log($allselect)
                        //console.log($bothselect);
                        $inputs = $('.IsSelected input');//所有的选择框除去全选的一个
                        $('.IsSelected input').prop('checked', true);
                        //console.log($inputs)


                        //点击全选按钮，给所有的复选框添加选中属性
                        $('.InfoTableHead').on('click', '.SelectCheck input', function (ev) {

                            if ($(this).prop('checked')) { //全选被选中
                                $inputs.prop('checked', true); //设置属性
                                $bothselect.prop('checked', true);

                                $price = $('.choosebox:checked').parent('.IsSelected').siblings('.CartTotal').find('.SumPrice span:nth-child(2)');
                                // 选中盒子的商品价格数组

                                var result = [];
                                $price.each(function () {
                                    //将每个input的值放进结果集
                                    result.push($(this).text());
                                });

                                //console.log(result);
                                var sum = 0;
                                for (let i = 0; i < result.length; i++) {

                                    sum += parseFloat(result[i]);
                                }
                                //console.log(sum)
                                $totalprice = $('.moneyInfo .priceNum span:last');
                                //console.log($totalprice)
                                $totalprice.text(sum);

                            } else {
                                $inputs.prop('checked', false); //设置属性
                                $bothselect.prop('checked', false);
                                $totalprice = $('.moneyInfo .priceNum span:last');
                                //console.log($totalprice)
                                $totalprice.text('0.00');
                            }
                        });

                        // 底部全选
                        $('.CartDone').on('click', '.w-chkbox input', function () {

                            if ($(this).prop('checked')) { //全选被选中
                                $inputs.prop('checked', true); //设置属性
                                $allselect.prop('checked', true);
                                $price = $('.choosebox:checked').parent('.IsSelected').siblings('.CartTotal').find('.SumPrice span:nth-child(2)');
                                // 选中盒子的商品价格数组

                                var result = [];
                                $price.each(function () {
                                    //将每个input的值放进结果集
                                    result.push($(this).text());
                                });

                                //console.log(result);
                                var sum = 0;
                                for (let i = 0; i < result.length; i++) {

                                    sum += parseFloat(result[i]);
                                }
                                //console.log(sum)
                                $totalprice = $('.moneyInfo .priceNum span:last');
                                //console.log($totalprice)
                                $totalprice.text(sum);

                            } else {
                                $inputs.prop('checked', false); //设置属性
                                $allselect.prop('checked', false);
                                $totalprice = $('.moneyInfo .priceNum span:last');
                                //console.log($totalprice)
                                $totalprice.text('0.00');
                            }
                        });







                        var inputslength = $inputs.length; //复选框的个数(不包括全选按钮)
                        console.log(inputslength)

                        // 将事件绑定给当前最大的商品盒子
                        $('.CartList').on('click', '.IsSelected input', function () {


                            // console.log($('.IsSelected input:checked').length)
                            // console.log(inputslength)

                            //判断选中了的复选框个数是够为所有的复选框个数

                            if ($('.IsSelected input:checked').length === inputslength) {
                                $allselect.prop('checked', true);
                                $bothselect.prop('checked', true);

                            } else {
                                $allselect.prop('checked', false);
                                $bothselect.prop('checked', false);
                            }


                            $price = $('.choosebox:checked').parent('.IsSelected').siblings('.CartTotal').find('.SumPrice span:nth-child(2)');
                            // 选中盒子的商品价格数组
                            console.log($price)
                            var result = [];
                            $price.each(function () {
                                //将每个input的值放进结果集
                                result.push($(this).text());
                            });

                            //console.log(result);
                            var sum = 0;
                            for (let i = 0; i < result.length; i++) {

                                sum += parseFloat(result[i]);
                            }
                            //console.log(sum)
                            $totalprice = $('.moneyInfo .priceNum span:last');
                            //console.log($totalprice)
                            $totalprice.text(sum);





                        });
                    })(),

                    // 总计金额
                    price: (function () {
                        // 总金额——priceNum

                        // 总金额的数字为所有商品的和
                        // 对商品盒子遍历得到其中的SumPrice的内容
                        // 取被选中的盒子下的商品价格




                        $price = $('.choosebox:checked').parent('.IsSelected').siblings('.CartTotal').find('.SumPrice span:nth-child(2)');
                        // 选中盒子的商品价格数组
                        console.log($price)
                        var result = [];
                        $price.each(function () {
                            //将每个input的值放进结果集
                            result.push($(this).text());
                        });

                        //console.log(result);
                        var sum = 0;
                        for (let i = 0; i < result.length; i++) {

                            sum += parseFloat(result[i]);
                        }
                        //console.log(sum)
                        $totalprice = $('.moneyInfo .priceNum span:last');
                        //console.log($totalprice)
                        $totalprice.text(sum);




                    })(),





                    // 数量增减
                    number: (function () {

                        // 事件绑定(减少)
                        $('.cartProductList ').on('click', '.NumChange .NumLess', function () {
                            //当前点击的盒子索引
                            let index = $(this).index('.NumChange .NumLess');

                            let $input = $('.NumChange .NumInput').eq(index);
                            // 索引一致的小计显示框
                            $total = $('.SumPrice span:nth-child(2)').eq(index);
                            // 索引一致的单价显示框
                            $price = $('.aprice span:nth-child(2)').eq(index);


                            if ($input.val() <= 1) {
                                $input.val(1);
                            } else {
                                $input.val(parseInt($input.val()) - 1);
                            }


                            // 将新的数量值存入对应索引的cookie数组中
                            if (getcookie('cookiesid') && getcookie('cookienum')) {


                                let arrsid = getcookie('cookiesid').split(',');
                                let arrnum = getcookie('cookienum').split(',');

                                arrnum.splice(index, 1, $input.val());
                                addcookie('cookienum', arrnum, 10);

                                // 计算单个商品的总金额
                                // 取出对应索引的num
                                let num = arrnum[index];
                                console.log($price.text())

                                $total.html(num * ($price.text()));
                                // 刷新总额
                                $sumprice = $('.choosebox:checked').parent('.IsSelected').siblings('.CartTotal').find('.SumPrice span:nth-child(2)');
                                // 选中盒子的商品价格数组

                                var result = [];
                                $sumprice.each(function () {
                                    //将每个input的值放进结果集
                                    result.push($(this).text());
                                });

                                //console.log(result);
                                var sum = 0;
                                for (let i = 0; i < result.length; i++) {

                                    sum += parseFloat(result[i]);
                                }
                                //console.log(sum)
                                $totalprice = $('.moneyInfo .priceNum span:last');
                                //console.log($totalprice)
                                $totalprice.text(sum);

                            }


                        });

                        $('.cartProductList ').on('click', '.NumChange .NumMore', function () {

                            let index = $(this).index('.NumChange .NumMore');
                            let $input = $('.NumChange .NumInput').eq(index);
                            // 索引一致的小计显示框
                            $total = $('.SumPrice span:nth-child(2)').eq(index);
                            // 索引一致的单价显示框
                            $price = $('.aprice span:nth-child(2)').eq(index);


                            $input.val(parseInt($input.val()) + 1);
                            if (getcookie('cookiesid') && getcookie('cookienum')) {


                                let arrsid = getcookie('cookiesid').split(',');
                                let arrnum = getcookie('cookienum').split(',');

                                arrnum.splice(index, 1, $input.val());
                                addcookie('cookienum', arrnum, 10);

                                let num = arrnum[index];
                                //console.log(num)

                                $total.html(num * ($price.text()));
                                // 刷新总额
                                $sumprice = $('.choosebox:checked').parent('.IsSelected').siblings('.CartTotal').find('.SumPrice span:nth-child(2)');
                                // 选中盒子的商品价格数组

                                var result = [];
                                $sumprice.each(function () {
                                    //将每个input的值放进结果集
                                    result.push($(this).text());
                                });

                                //console.log(result);
                                var sum = 0;
                                for (let i = 0; i < result.length; i++) {

                                    sum += parseFloat(result[i]);
                                }
                                //console.log(sum)
                                $totalprice = $('.moneyInfo .priceNum span:last');
                                //console.log($totalprice)
                                $totalprice.text(sum);


                            }

                        });




                    })(),






                }
            });
        });
    }
    return init;
});
//调用第三方模块，首页效果




