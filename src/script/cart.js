//调用第三方模块，首页效果


//调用config配置模块
require(['config'], function () {
    require(['jquery', 'jqcookie'], function () { //加载模块
        // 效果的自执行函数
        return {
            // 全选
            allselect: (function () {
                // 顶部全选按钮
                $allselect = $('.SelectCheck input');//全选按钮

                // 底部全选按钮
                $bothselect = $('.w-chkbox input');
                //console.log($allselect)
                //console.log($bothselect);
                $inputs = $('.IsSelected input');//所有的选择框除去全选的一个

                //console.log($inputs)


                //点击全选按钮，给所有的复选框添加选中属性
                $('.InfoTableHead').on('click', '.SelectCheck input', function () {

                    if ($(this).prop('checked')) { //全选被选中
                        $inputs.prop('checked', true); //设置属性
                        $bothselect.prop('checked', true);

                    } else {
                        $inputs.prop('checked', false); //设置属性
                        $bothselect.prop('checked', false);
                    }
                });

                // 底部全选
                $('.CartDone').on('click', '.w-chkbox input', function () {

                    if ($(this).prop('checked')) { //全选被选中
                        $inputs.prop('checked', true); //设置属性
                        $allselect.prop('checked', true);

                    } else {
                        $inputs.prop('checked', false); //设置属性
                        $allselect.prop('checked', false);
                    }
                });







                var inputslength = $inputs.length; //复选框的个数(不包括全选按钮)
                //console.log(inputslength)

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
                });
            })(),

            // 总计金额
            price: (function () {
                // 总金额——priceNum

                // 总金额的数字为所有商品的和
                // 对商品盒子遍历得到其中的SumPrice的内容
                $price = $('.CartTotal .SumPrice');//商品价格的所有盒子
                // console.log($price);
                // console.log($price.length)



                // var text = $price.text();
                // console.log(text)

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
                $totalprice.text(sum);



            })(),

            // 数量增减
            number: (function () {

                // 事件绑定(减少)
                $('.cartProductList ').on('click', '.NumChange .NumLess', function () {
                   //当前点击的盒子索引
                    let index = $(this).index('.NumChange .NumLess');
                    //与索引一致的输入框
                    let $input = $('.NumChange .NumInput').eq(index);
                    //输入框的value值
                    let num= $input.attr("value");
                    num--;
                    //把结果重新给input
                    $input.val(num);
                });

                $('.cartProductList ').on('click', '.NumChange .NumMore', function () {
                  
                    let index = $(this).index('.NumChange .NumMore');
                    let $input = $('.NumChange .NumInput').eq(index);
                    let num= $input.attr("value");
                    num++;
                    $input.val(num);
                    
                });









            })()



        }
    });
});

