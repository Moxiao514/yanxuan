// 定义详情页数据渲染模块
//调用config配置模块
require(['cookie'],function(){
    require(['config'], function () {
        require(['jquery'], function () { //加载模块
            return {
                // 渲染
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
    
    
                    const addcart = document.querySelector('.addcart');
                    const goodsnum = document.querySelector('.u-selnum input');
                    let sidarr = []; //存放sid 
                    let numarr = []; //存放数量
                  
        
                    //提前预定cookie的key值，才能应用判断
                    if (getcookie('cookiesid') && getcookie('cookienum')) {
                        sidarr = getcookie('cookiesid').split(',');
                        numarr = getcookie('cookienum').split(',');
                    }
        
                    addcart.onclick = function () {
                       
                        if (sidarr.indexOf(sid) !== -1) { 
                            let index=sidarr.indexOf(sid)
                            numarr[index] = parseInt(numarr[index])+ parseInt(goodsnum.value);
                            addcookie('cookienum', numarr.toString(), 10);
                        } else { 
                            sidarr.push(sid);
                            addcookie('cookiesid', sidarr.toString(), 10);
                            numarr.push(goodsnum.value);
                            addcookie('cookienum', numarr.toString(), 10);
                        }
                    }
        
    
    
    
    
                  
                })(),
            }
        });
    });
})
