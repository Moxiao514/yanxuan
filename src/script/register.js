
require(['config'], function () {
    require(['jquery'], function () { //加载模块
        return {

            uesr: (function () {

                const username = document.querySelector('.username');
                const span = document.querySelector('.text1');
                const registerform = document.querySelector('#registerform');
                let repeatlock = true;

                username.onblur = function () {
                    let ajax = new XMLHttpRequest();
                    ajax.open('post', 'http://10.31.155.25/yanxuan/php//register.php', true);
                    ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
                    ajax.send('userinfo=' + username.value);
                    ajax.onreadystatechange = function () {
                        //console.log(username.value)
                        if (ajax.readyState === 4) {
                            console.log(ajax.responseText);//1
                            if (!ajax.responseText) {
                                //用户不存在进行表单验证

                                var reg = /^[\u4e00-\u9fa5]{2,4}$/;//用户姓名验证规则
                                if (username.value !== '') {
                                   // console.log(1)
                                    if (reg.test(username.value)) {
                                        span.innerHTML = '√';
                                        span.style.color = 'green';

                                    } else {
                                        span.innerHTML = '×';
                                        span.style.color = 'red';

                                    }
                                } else {
                                    span.innerHTML = '×';
                                    span.style.color = 'red';

                                }


                            } else {//存在
                                span.innerHTML = '×';
                                span.style.color = 'red';

                            }
                        }
                    }
                };

                registerform.onsubmit = function () {
                    if (!repeatlock) {
                        return false;
                    }
                }





            })(),
            email: (function () {

                const useremail = document.querySelector('.address');
                const span = document.querySelector('.text2');
                const registerform = document.querySelector('#registerform');
                let repeatlock = true;

                useremail.onblur = function () {
                    let ajax = new XMLHttpRequest();
                    ajax.open('post', 'http://10.31.155.25/yanxuan/php//register.php', true);
                    ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
                    ajax.send('address=' + useremail.value);
                    ajax.onreadystatechange = function () {
                        //console.log(username)
                        if (ajax.readyState === 4) {
                           // console.log(ajax.responseText);//1
                            if (!ajax.responseText) {
                                //邮箱不存在进行表单验证

                                var reg = /^(\w[\w\-\+]*\w)\@(\w[\w\-\+]*\w)\.(\w[\w\-\+]*\w)$/;//电子邮箱验证规则
                                if (useremail.value !== '') {
                                    if (reg.test(useremail.value)) {
                                        span.innerHTML = '√';
                                        span.style.color = 'green';
                                        chinalock = true;
                                    } else {
                                        span.innerHTML = '×';
                                        span.style.color = 'red';
                                        chinalock = false;
                                    }
                                } else {
                                    span.innerHTML = '×';
                                    span.style.color = 'red';
                                    chinalock = false;
                                }


                            } else {//存在
                                span.innerHTML = '×';
                                span.style.color = 'red';
                                repeatlock = false;
                            }
                        }
                    }
                };

                registerform.onsubmit = function () {
                    if (!repeatlock) {
                        return false;
                    }
                }





            })(),
            phone: (function () {

                const userphone = document.querySelector('.telephone');
                const span = document.querySelector('.text3');
                const registerform = document.querySelector('#registerform');
                let repeatlock = true;

                userphone.onblur = function () {
                    let ajax = new XMLHttpRequest();
                    ajax.open('post', 'http://10.31.155.25/yanxuan/php//register.php', true);
                    ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
                    ajax.send('telephone=' + userphone.value);
                    ajax.onreadystatechange = function () {
                        //console.log(username)
                        if (ajax.readyState === 4) {
                            //console.log(ajax.responseText);//1
                            if (!ajax.responseText) {
                                //手机号不存在进行表单验证

                                var reg = /^1[3578]\d{9}$/;//手机号码验证规则
                                if (userphone.value !== '') {
                                    if (reg.test(userphone.value)) {
                                        span.innerHTML = '√';
                                        span.style.color = 'green';
                                    } else {
                                        span.innerHTML = '×';
                                        span.style.color = 'red';
                                    }
                                } else {
                                    span.innerHTML = '×';
                                    span.style.color = 'red';
                                }


                            } else {//存在
                                span.innerHTML = '×';
                                span.style.color = 'red';
                                repeatlock = false;
                            }
                        }
                    }
                };

                registerform.onsubmit = function () {
                    if (!repeatlock) {
                        return false;
                    }
                }





            })(),
            password: (function () {

                const userpass = document.querySelector('.password');
                const span = document.querySelector('.text4');
                const registerform = document.querySelector('#registerform');
                let repeatlock = true;
                userpass.oninput = function () {
                    if (this.value.length >= 6 && this.value.length <= 12) {
                        var regnum = /[0-9]+/g;  //数字
                        var reguppercase = /[A-Z]+/g;  //大写字母
                        var reglowercase = /[a-z]+/g;  //小写字母
                        var other = /[\W\_]+/g;  //其他字符
                        var count = 0;//计算种类
                        if (regnum.test(this.value)) {
                            count++;
                        }
                        if (reguppercase.test(this.value)) {
                            count++;
                        }
                        if (reglowercase.test(this.value)) {
                            count++;
                        }
                        if (other.test(this.value)) {
                            count++;
                        }
                        switch (count) {
                            case 1:
                                span.innerHTML = '弱';
                                span.style.color = 'red';

                                break;
                            case 2:
                            case 3:
                                span.innerHTML = '中';
                                span.style.color = 'orange';

                                break;
                            case 4:
                                span.innerHTML = '强';
                                span.style.color = 'green';

                                break;
                        }
                    } else {
                        span.innerHTML = '×';
                        span.style.color = 'red';
                        passlock = false;
                    }
                }

                userpass.onblur = function () {
                    if (this.value !== '') {
                        if (passlock) {
                            span.innerHTML = '√';
                            span.style.color = 'green';
                        } else {
                            span.innerHTML = '×';
                            span.style.color = 'red';

                        }

                    } else {
                        span.innerHTML = '×';
                        span.style.color = 'red';

                    }
                };


            })(),
    










        }

    });
});
