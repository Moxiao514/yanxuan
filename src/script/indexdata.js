// 定义首页数据渲染模块
//调用config配置模块
require(['config'], function () {
    require(['jquery', 'jqcookie'], function () { //加载模块
        return {
            // 新品首发渲染
            newdata: (function () {
                const newProduct = document.querySelector('.allSlickImg');
                const phpurl = 'http://10.31.155.25/yanxuan/php/';

                //1.渲染商品列表
                $.ajax({
                    url: phpurl + 'new.php',
                    dataType: 'json'
                }).done(function (newpro) {
                    for ($i = 0; $i < 8; $i++) {
                        var strhtml = "";
                        for (let value of newpro) {
                            strhtml += `
                        <div class='newProduct'>
                        <div class='hd'>
                        <a class="newlink"
                            href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}">
                            <!-- 鼠标划过之前展示的图片 -->
                            <div style="width:100%;height:100%;" class="behover">
                                <img alt="${value.title}" style="opacity: 1;" class="lazy" data-original="${value.url}"
                                    src="${value.url}">
                            </div>
                            <!-- 鼠标划过时展示的图片 -->
                            <div style="width:100%;height:100%;" class="afhover">
                                <img style="opacity: 1;" class="lazy" data-original="${value.src}"
                                    src="${value.src}">
                            </div>
                        </a>
                    </div>
                  
                    <div class="bd">
                        <div class="prdtTags"></div>
                        <!-- 商品名 -->
                        <h4 class="name">
                            <a title="${value.title}" target="_blank"
                                href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}">
                                <span>&nbsp;</span>
                                <span>${value.title}</span>
                            </a>
                        </h4>
                        <!-- 商品价格 -->
                        <p class="newprice">
                            <span class="retailPrice">
                                <span>¥</span>
                                <span>${value.price}</span>
                            </span>
                        </p>
                    </div>
                    </div>
                        `;

                        }

                    }

                    newProduct.innerHTML = strhtml;
                });

            })(),
            // 人气推荐
            popular: (function () {
                const popProduct = document.querySelector('.SH-1');
                const phpurl = 'http://10.31.155.25/yanxuan/php/';
                $.ajax({
                    url: phpurl + 'popular.php',
                    dataType: 'json'
                }).done(function (poppro) {
                   
                        var strhtml = "";

                        for (let value of poppro) {
                            strhtml += `
                                <div class="popularItem p-items">
                                <div class="hd">
                                    <a title="${value.title}" target="_blank" class="imgWrap"
                                        href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}">
                                        <div style="width:100%;height:100%;">
                                            <img alt="${value.title}" class="lazy" data-original="${value.url}"
                                                src="${value.url}">
                                        </div>
                                        <div class="colorNum" style="display:none;"></div>
                                    </a>
                                </div>
                                <div class="bd">
                                    <div class="prdtTags" style="margin-bottom:0"></div>
                                    <h4 class="name">
                                        <a href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}" title="${value.title}" target="_blank">
                                            <span>&nbsp;</span>
                                            <span>${value.title}</span>
                                        </a>
                                    </h4>
                                    <p class="price">
                                        <span class="retailPrice">
                                            <span>¥</span>
                                            <span>${value.price}</span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            `;
    
                        }
                       
                        popProduct.innerHTML += strhtml;
                   
                    
                   
                });

            })(),
            //   热销总榜
            hotsale: (function () {
                const hotProduct = document.querySelector('.SH-2');
                const phpurl = 'http://10.31.155.25/yanxuan/php/';
                $.ajax({
                    url: phpurl + 'hot.php',
                    dataType: 'json'
                }).done(function (hotpro) {
                   
                        var strhtml = "";

                        for (let value of hotpro) {
                            strhtml += `
                                <div class="popularItem p-items">
                                <div class="hd">
                                    <a title="${value.title}" target="_blank" class="imgWrap"
                                        href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}">
                                        <div style="width:100%;height:100%;">
                                            <img alt="${value.title}" class="lazy" data-original="${value.url}"
                                                src="${value.url}">
                                        </div>
                                        <div class="colorNum" style="display:none;"></div>
                                    </a>
                                </div>
                                <div class="bd">
                                    <div class="prdtTags" style="margin-bottom:0"></div>
                                    <h4 class="name">
                                        <a href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}" title="${value.title}" target="_blank">
                                            <span>&nbsp;</span>
                                            <span>${value.title}</span>
                                        </a>
                                    </h4>
                                    <p class="price">
                                        <span class="retailPrice">
                                            <span>¥</span>
                                            <span>${value.price}</span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            `;
    
                        }
                       
                        hotProduct.innerHTML += strhtml;
                   
                    
                   
                });

            })(),
            // 限时抢购
            time: (function () {
                const popProduct = document.querySelector('.timeProducttop');
                const phpurl = 'http://10.31.155.25/yanxuan/php/';
                $.ajax({
                    url: phpurl + 'time.php',
                    dataType: 'json'
                }).done(function (timepro) {

                    var strhtml = "";

                    for (let value of timepro) {
                        strhtml += `
                        <div class="timeSalePro">
                        <!-- 左边图片 -->
                        <div class="time-left">
                            <a href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}"
                                target="_blank" class="picIn" title="${value.title}">
                                <div style="width:100%;height:100%;">
                                    <img  class="lazy" data-original="${value.url}"
                                        src="${value.url}">
                                </div>
                            </a>
                        </div>
                        <!-- 右边介绍 -->
                        <div class="time-right">
                            <!-- 商品名 -->
                            <h2 class="timeProName">
                                <a href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}"
                                    target="_blank" class="link">${value.title}
                                </a>
                            </h2>
                            <!-- 商品功效 -->
                            <p class="timeProDes">${value.info}</p>
                            <!-- 商品数目 -->
                            <div class="timeProNum">
                                <!-- 售卖进度 -->
                                <div class="timeProBar">
                                    <div class="timeProBarIn" style="width:144px;"></div>
                                </div>
                                <!-- 剩余数目 -->
                                <div class="timeProTips">
                                    <span>还剩</span>
                                    <span>${value.num}</span>
                                    <span>件</span>
                                </div>
                            </div>
                            <!-- 商品价格 -->
                            <div class="timeProPrice">
                                <span class="timePro-1">限时价
                                    <span class="yuan">¥</span>
                                    <span class="timeProIn bold">${value.price}</span>
                                </span>
                                <span class="timePro-2">&nbsp;¥1088</span>

                            </div>
                            <!-- 立即抢购 -->
                            <a class="justbuybtn" target="_blank"
                                href="">立即抢购</a>
                        </div>
                    </div>
                        `;

                    }

                    popProduct.innerHTML = strhtml;
                });

            })(),
            // 福利社
            good: (function () {
                const popProduct = document.querySelector('.moduleBd');
                const phpurl = 'http://10.31.155.25/yanxuan/php/';
                $.ajax({
                    url: phpurl + 'good.php',
                    dataType: 'json'
                }).done(function (goodpro) {

                    var strhtml = "";

                    for (let value of goodpro) {
                        strhtml += `
                      <div class="moduleBditem">
                                <!-- 左侧商品图片 -->
                                <div class="moduleBd-left">
                                    <a href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}" target="_blank">
                                        <img class="lazy" data-original="${value.url}"
                                            src="${value.url}">
                                    </a>
                                </div>
                                <!-- 右侧商品描述 -->
                                <div class="moduleBd-right">
                                    <!-- 商品名 -->
                                    <div class="name">
                                        <a href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}">${value.title}</a>
                                    </div>
                                    <!-- 商品限时价格 -->
                                    <div class="limitPrice">
                                        <span>限时价&nbsp;</span>
                                        <span class="yen">¥</span>
                                        <span>&nbsp;</span>
                                        <span class="num">${value.price}</span>
                                    </div>
                                    <!-- 商品原价 -->
                                    <div class="beforePrice">
                                        <span class="num">
                                            <span>¥</span>
                                            <span>129</span>
                                        </span>
                                    </div>
                                    <!-- 立即购买 -->
                                    <div class="nowSale">
                                        <a href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}" target="_blank">立即抢购</a>
                                    </div>
                                </div>
                            </div>
                        `;

                    }

                    popProduct.innerHTML = strhtml;
                });

            })(),
            // 居家生活
           home: (function () {
                const homeProduct = document.querySelector('.homeLive');
                const phpurl = 'http://10.31.155.25/yanxuan/php/';
                $.ajax({
                    url: phpurl + 'home.php',
                    dataType: 'json'
                }).done(function (homepro) {

                    var strhtml = "";

                    for (let value of homepro) {
                        strhtml += `
                        <div class="newProduct">
                        <div class='hd'>
                            <a class="newlink"
                                href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}">
                                <!-- 鼠标划过之前展示的图片 -->
                                <div style="width:100%;height:100%;" class="behover">
                                    <img alt="${value.title}" style="opacity: 1;" class="lazy" data-original="${value.url}"
                                        src="${value.url}">
                                </div>
                                <!-- 鼠标划过时展示的图片 -->
                                <div style="width:100%;height:100%;" class="afhover">
                                    <img style="opacity: 1;" class="lazy" data-original="${value.src}"
                                        src="${value.src}">
                                </div>
                            </a>
                        </div>
                        <!-- 商品描述部分 -->
                        <div class="bd">
                            <div class="prdtTags"></div>
                            <!-- 商品名 -->
                            <h4 class="name">
                                <a title="${value.title}" target="_blank"
                                    href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}">
                                    <span>&nbsp;</span>
                                    <span>${value.title}</span>
                                </a>
                            </h4>
                            <!-- 商品价格 -->
                            <p class="newprice">
                                <span class="retailPrice">
                                    <span>¥</span>
                                    <span>${value.price}</span>
                                </span>
                            </p>
                        </div>
                    </div>
                        `;

                    }

                    homeProduct.innerHTML = strhtml;
                });

            })(),
              // 服饰鞋包
           shoes: (function () {
            const shoesProduct = document.querySelector('.shoesbox');
            const phpurl = 'http://10.31.155.25/yanxuan/php/';
            $.ajax({
                url: phpurl + 'shoes.php',
                dataType: 'json'
            }).done(function (shoespro) {

                var strhtml = "";

                for (let value of shoespro) {
                    strhtml += `
                    <div class="newProduct">
                    <div class='hd'>
                        <a class="newlink"
                            href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}">
                            <!-- 鼠标划过之前展示的图片 -->
                            <div style="width:100%;height:100%;" class="behover">
                                <img alt="${value.title}" style="opacity: 1;" class="lazy" data-original="${value.url}"
                                    src="${value.url}">
                            </div>
                            <!-- 鼠标划过时展示的图片 -->
                            <div style="width:100%;height:100%;" class="afhover">
                                <img style="opacity: 1;" class="lazy" data-original="${value.src}"
                                    src="${value.src}">
                            </div>
                        </a>
                    </div>
                    <!-- 商品描述部分 -->
                    <div class="bd">
                        <div class="prdtTags"></div>
                        <!-- 商品名 -->
                        <h4 class="name">
                            <a title="${value.title}" target="_blank"
                                href="http://10.31.155.25/yanxuan/src/details.html?sid=${value.sid}">
                                <span>&nbsp;</span>
                                <span>${value.title}</span>
                            </a>
                        </h4>
                        <!-- 商品价格 -->
                        <p class="newprice">
                            <span class="retailPrice">
                                <span>¥</span>
                                <span>${value.price}</span>
                            </span>
                        </p>
                    </div>
                </div>
                    `;

                }

                shoesProduct.innerHTML = strhtml;
            });

        })(),
        }

    });
});
