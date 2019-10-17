require(['config'], function () {
    require(['jquery', 'jqcookie'], function () { //加载模块
        // 效果的自执行函数
        return {


            // tab切换
            tab: (function () {
                $('.SH-2').hide();
                $('.logina').click(function () {
                    $(this).css('color', '#000').siblings('.logina').css('color', '#999');
                    $('.phonelogin').eq($(this).index()).show().siblings('.phonelogin').hide();
                });
            })(),
            login: (function () {
                const useremail = document.querySelector('.useremail');
                const password = document.querySelector('.password');
                const loginbtn = document.querySelector('.emailloginbtn');

                loginbtn.onclick = function () {
                    let ajax = new XMLHttpRequest();
                    ajax.open('post', 'http://10.31.155.25/yanxuan/php/login.php', true);
                    ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
                    ajax.send(`email=${useremail.value}&password=${password.value}`);
                    ajax.onreadystatechange = function () {
                        if (ajax.readyState === 4) {
                            console.log(ajax.responseText);
                            if (ajax.responseText) {//登录成功
                                location.href = 'index.html';
                                //存储用户信息
                                localStorage.setItem('userinfo', useremail.value);
                            } else {
                                alert('用户名或者密码错误');
                            }
                        }
                    }
                };
            })(),


        }
    });
});