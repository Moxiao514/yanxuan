<?php

include "conn.php"; //引入数据库连接文件
// 获取用户名
if (isset($_POST['userinfo']) || isset($_POST['submit']) || isset($_POST['address']) || isset($_POST['telephone'])) {
    $name = @$_POST['userinfo']; //取用户名
    $address = @$_POST['address']; //取邮箱
    $telephone = @$_POST['telephone']; //手机号
    $username = $conn->query("select * from register where username='$name'"); //用户名
    $email = $conn->query("select * from register where email='$address'"); //邮箱
    $phone = $conn->query("select * from register where email='$address'"); //手机号
    if ($username->fetch_assoc()) { //判断用户名是否存在
        echo true; //1 存在
    } else {
        echo false;
    }

    if ($email->fetch_assoc()) { //判断邮箱是否存在
        echo true; //1 存在
    } else {
        echo false;
    }
    if ($phone->fetch_assoc()) { //判断手机号是否存在
        echo true; //1 存在
    } else {
        echo false;
    }
} else {
    exit('非法操作'); //输出非法操作，终止程序
}























//将表单的值接收，放入数据库。
if (isset($_POST['submit'])) { //点击了注册按钮
    $user = $_POST['username'];
    $pass = sha1($_POST['password']);
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $conn->query("insert register values(null,'$user','$email','$phone','$pass')");

    header('location:http://10.31.155.25/yanxuan/src/login.html'); //php的跳转

}
