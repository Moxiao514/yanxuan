// 定义详情页数据渲染模块
//调用config配置模块
require(['cookie'], function () {
    require(['config'], function () {
        require(['jquery'], function () { //加载模块
            return {

                detailspro: (function () {

                    const phpurl = 'http://10.31.155.25/yanxuan/php/';

                    //商品渲染
                    function goodslist(sid, num) {

                        $.ajax({
                            url: phpurl + 'product.php',
                            data: {
                                id: sid
                            },
                            dataType: 'json'

                        }).done(function (objdata) {
                            //渲染

                            const CartProduct = document.querySelector('.CartList');
                            for (let i = 0; i < objdata.length; i++) {
                                if (objdata[i].sid === sid) {
                                    let carthtml = '';
                                    carthtml += `
                                   <div class="cartProductList" data-sid='${objdata[i].sid}'>
                                    <!-- 内框架 -->
                                    <div class="ListWrap">
                                        <!-- 选择按钮 -->
                                        <div class="IsSelected">
                                            <input type="checkbox" class="choosebox" title="${objdata[i].url}" >
                                        </div>
                                        <!-- 图片名称 -->
                                        <div class="ImgName">
                                            <!-- 图片 -->
                                            <div class="CartPic">
                                                <a href="${objdata[i].url}" target="_blank">
                                                    <img src="${objdata[i].url}" alt="${objdata[i].title}" class="lazy" data-origin='${objdata[i].url}'>
                                                </a>
                                            </div>
                                            <!-- 名字描述 -->
                                            <div class="CartInfo">
                                                <a class="MingZi" href="" target="_blank">${objdata[i].title}</a>
                                                <div class="CartStyle">${objdata[i].info}</div>
                                            </div>
                                        </div>
            
                                        <!-- 价格 -->
            
                                        <div class="CartPrice">
                                            <p class="price">
                                                <span class="aprice">
                                                    <span>¥</span>
                                                    <span>${objdata[i].price}</span>
                                                </span>
                                            </p>
                                        </div>
            
                                        <!-- 数量 -->
                                        <div class="CartNum">
                                            <div class="NumChange">
                                                <span class="NumLess">
                                                    <i class="hx"></i>
                                                </span>
                                                <input class="NumInput" type="text" value='${num}'>
                                                <span class="NumMore">
                                                    <i class="hx"></i>
                                                    <i class="sx"></i>
                                                </span>
                                            </div>
                                        </div>
            
                                        <!-- 小计 -->
                                        <div class="CartTotal">
                                            <p class="SumPrice">${objdata[i].price * num}</p>
                                        </div>
                                        <!-- 删除 -->
                                        <div class="DeleteCart">
                                            <a >删除</a>
                                        </div>
            
            
                                    </div>
                                </div>
                                `;
                                    CartProduct.innerHTML += carthtml;
                                }
                            }

                        });


                    }

                    //获取cookie
                    if (getcookie('cookiesid') && getcookie('cookienum')) {
                        let arrsid = getcookie('cookiesid').split(',');
                        let arrnum = getcookie('cookienum').split(',');
                        for (let i = 0; i < arrsid.length; i++) {
                            goodslist(arrsid[i], arrnum[i]);
                        }
                    }


                    //删除cookie
                    //遍历存在的cookie，找到与获取到的盒子sid一致的值删除
                    $('.CartList').on('click', '.DeleteCart', function (ev) {
                        //当前盒子的索引
                        let index = $(this).index('.DeleteCart');
                        //删掉当前的盒子
                        $('.cartProductList').eq(index).remove();


                        //获取到cookie去掉索引一样的cookie
                        if (getcookie('cookiesid') && getcookie('cookienum')) {
                            let arrsid = getcookie('cookiesid').split(',');
                            let arrnum = getcookie('cookienum').split(',');

                            //删掉sid
                            arrsid.splice(index, 1);
                            // 重新加入
                            addcookie('cookiesid', arrsid, 10);

                            arrnum.splice(index, 1);
                            addcookie('cookienum', arrnum, 10);

                        }



                    });


























                })(),



            }
        });
    });
})
