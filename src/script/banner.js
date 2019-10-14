(function(){
        //1.获取元素对象。
        const banner = document.querySelector('.slick-list'); //获取最大的盒子banner
        const piclist = document.querySelectorAll('.img-wrap'); //获取5张图片
        const btnlist = document.querySelectorAll('.slick-slide'); //获取5个按钮
        const arrowLeft = document.querySelector('.slick-prev'); //左右切换箭头
        const arrowRight = document.querySelector('.slick-next');
        let currentindex = 0; //当前的索引 全局
        let timer = null; //定时器的返回值

        //2.点击小圆圈，实现图片的切换
        for (let i = 0; i < btnlist.length; i++) {
            btnlist[i].onclick = function () {
                currentindex = i; //循环的索引给当前的按钮的索引。
                tabswich();
            }
        }

        //3.显示隐藏左右箭头
        banner.onmouseenter = function () {
            clearInterval(timer);
        };

        banner.onmouseleave = function () {
            //重新开启定时器轮播
            timer = setInterval(() => {
                arrowRight.onclick();
            }, 2000);
        }

        //4.通过箭头切换图片
        arrowRight.onclick = function () {
            currentindex++;
            if (currentindex > btnlist.length - 1) {
                currentindex = 0;
            }
            tabswich()
        };


        arrowLeft.onclick = function () {
            currentindex--;
            if (currentindex < 0) {
                currentindex = btnlist.length - 1;
            }
            tabswich()
        };

        //5.图片自动轮播
        timer = setInterval(() => {
            arrowRight.onclick();
        }, 2000);


        function tabswich() {
            for (let j = 0; j < btnlist.length; j++) {
                btnlist[j].className = '';
                bufferMove(piclist[j], {
                    opacity: 0
                });
            }
            btnlist[currentindex].className = 'active';
            bufferMove(piclist[currentindex], {
                opacity: 100
            });
        }
})();