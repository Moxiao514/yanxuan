// 定义首页数据渲染模块
//调用config配置模块
require(['config'], function () {
    require(['jquery', 'jqcookie'], function () { //加载模块
        return {
            // 新品首发渲染
            detailspro: (function () {
                let sid = location.search.substring(1).split('=')[1];
                const smallpic = document.querySelector('.thumbImg');
                const ProductName = document.querySelector('.pro-name span');
                const ProductInfo = document.querySelector('.desc');
                const ProductPrice = document.querySelector('.rmbnum .num');
                const ProductList = document.querySelector('.piclist');
                const ProductCrumb = document.querySelector('.CrumbName');
                const phpurl = 'http://10.31.155.25/yanxuan/php/';

                //1.渲染商品列表
                $.ajax({
                    url: phpurl + 'details.php',
                    data: {
                        id: sid
                    },
                   dataType: 'json'
                    
                }).done(function (objdata) {

                    smallpic.src = objdata.url;
                    // bpic.src = objdata.url;
                    ProductName.innerHTML = objdata.title;
                    ProductInfo.innerHTML = objdata.info;
                    ProductPrice.innerHTML = objdata.price;
                    ProductCrumb.innerHTML = objdata.title;
                    //渲染小图下面的产品列表
                    let piclist = objdata.urls.split(','); //数组
                    let pichtml = '<ul>';
                    for (let value of piclist) {
                        pichtml += `
                        <li>
                        <a href="javascript:;">
                            <img  class="lazy" data-original="${value}"
                                src="${value}"></a>
                    </li>
                        `;
                    }
                    pichtml+='</ul>'
                    ProductList.innerHTML = pichtml;
                });
              
            })(),
        }
    });
});