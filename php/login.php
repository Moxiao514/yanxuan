<?php

include "conn.php";//连接数据库

if(isset($_POST['email']) && isset($_POST['password'])){
    $useremail=$_POST['email'];
    $pass=sha1($_POST['password']);

    $result=$conn->query("select * from register where email='$useremail' and password='$pass' ");

    if($result->fetch_assoc()){
        echo true;//用户名和密码存在
    }else{
        echo false;
    }

}else{
    exit('非法操作');
}