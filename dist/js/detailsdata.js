//命名空间的方式：
const cookie = {
    addcookie: function (key, value, day) {
        var d = new Date();
        d.setDate(d.getDate() + day);
        document.cookie = key + '=' + value + ';expires=' + d;
    },
    getcookie: function (key) {
        var arr = document.cookie.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var newarr = arr[i].split('=');
            if (newarr[0] === key) {
                return newarr[1];
            }
        }
    },
    delcookie: function (key) {
        addcookie(key, '', -1);
    }
}

function addcookie(key, value, day) {
    var d = new Date();
    d.setDate(d.getDate() + day);
    document.cookie = key + '=' + value + ';expires=' + d;
}

function getcookie(key) {
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
        var newarr = arr[i].split('=');
        if (newarr[0] === key) {
            return newarr[1];
        }
    }
}

function delcookie(key) {
    addcookie(key, '', -1);
};
define("cookie", function(){});

// 定义详情页数据渲染模块
//调用config配置模块
require(['cookie'], function () {
    require(['config'], function () {
        require(['jquery'], function () { //加载模块
            return {
                // 渲染
                detailspro: (function () {
                    let sid = location.search.substring(1).split('=')[1];
                    // 商品名
                    const ProductName = document.querySelector('.pro-name span');
                    // 商品描述
                    const ProductInfo = document.querySelector('.desc');
                    // 商品价格
                    const ProductPrice = document.querySelector('.rmbnum .num');
                    //待展示小图片列表
                    const ProductList = document.querySelector('.piclist ');
                    // 导航的商品名
                    const ProductCrumb = document.querySelector('.CrumbName');
                    // 待放大的小图片
                    const smallpic = document.querySelector('.thumbImg');
                   
                    // 放大的图片
                    const bpic = document.querySelector('#big');
                 




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
                        bpic.src = objdata.url;
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
                        pichtml += '</ul>'
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
                        alert('商品添加成功');
                        if (sidarr.indexOf(sid) !== -1) {
                            let index = sidarr.indexOf(sid)
                            numarr[index] = parseInt(numarr[index]) + parseInt(goodsnum.value);
                            addcookie('cookienum', numarr.toString(), 10);
                        } else {
                            sidarr.push(sid);
                            addcookie('cookiesid', sidarr.toString(), 10);
                            numarr.push(goodsnum.value);
                            addcookie('cookienum', numarr.toString(), 10);
                        }
                    }






                })(),
                // 数量更改
                numchange: (function () {

                    $input = $('.u-selnum input');
                    // 减少数量
                    $('.u-selnum  .less').click(function () {

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

                        }
                    });
                    // 添加数量
                    $('.u-selnum  .more').click(function () {
                        $input.val(parseInt($input.val()) + 1);
                        if (getcookie('cookiesid') && getcookie('cookienum')) {
                            let arrsid = getcookie('cookiesid').split(',');
                            let arrnum = getcookie('cookienum').split(',');

                            arrnum.splice(index, 1, $input.val());
                            addcookie('cookienum', arrnum, 10);

                        }

                    });







                })(),
                // 放大镜
                magnifier: (function () {

                    // 待放大的小图片
                    const smallpic = document.querySelector('.thumbImg');
                    // 小图片的外框架
                    const spic = document.querySelector('.smallpic');
                    // 放大的图片
                    const bpic = document.querySelector('#big');
                    // 小放大镜区域
                    const sf = document.querySelector('#small');
                    // 放大区域
                    const bf = document.querySelector('.BigPic');
                    // 左侧放大镜和下方小图片列表
                    const wrap = document.querySelector('.m-slide');
                    //待展示小图片列表
                    $listul=$('.piclist ul');

                    spic.onmouseover = function () {
                        sf.style.visibility = 'visible';
                        bf.style.visibility = 'visible';
                        //计算小放的尺寸
                        sf.style.width = spic.offsetWidth * bf.offsetWidth / bpic.offsetWidth + 'px';
                        sf.style.height = spic.offsetHeight * bf.offsetHeight / bpic.offsetHeight + 'px';
                        //求比例
                        let bili = bpic.offsetWidth / spic.offsetWidth;
                        this.onmousemove = function (ev) {
                            var ev = ev || window.event;
                            let l = ev.clientX - wrap.offsetLeft - sf.offsetWidth / 2;
                            let t = ev.clientY - wrap.offsetTop - sf.offsetHeight / 2;
                            if (l <= 0) {
                                l = 0;
                            } else if (l >= spic.offsetWidth - sf.offsetWidth) {
                                l = spic.offsetWidth - sf.offsetWidth - 2;
                            }

                            if (t <= 0) {
                                t = 0;
                            } else if (t >= spic.offsetHeight - sf.offsetHeight) {
                                t = spic.offsetHeight - sf.offsetHeight - 2;
                            }
                            sf.style.left = l + 'px';
                            sf.style.top = t + 'px';

                            bpic.style.left = -bili * l + 'px';
                            bpic.style.top = -bili * t + 'px';
                        }
                    };

                    spic.onmouseout = function () {
                        sf.style.visibility = 'hidden';
                        bf.style.visibility = 'hidden';
                    };

                    //点击缩略图实现图片的切换
                    //存储1个li的宽度

                    $listul.onclick = function (ev) {
                        var ev = ev || window.event;
                        let element = ev.target || ev.srcElement;
                        if (element.parentNode.tagName === 'LI') {
                            spic.querySelector('img').src = element.src; //小图下面的图片
                            bpic.src = element.src; //大图
                        }

                    };
                })(),

            }
        });
    });
})
;
define("detailsdata", function(){});

