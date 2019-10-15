<?php

    include "conn.php";

    $result=$conn->query("select * from product where demo='shoes'");
    $shoespro=array();

    // 服饰鞋包数据接口
    for($i=0;$i<$result->num_rows;$i++){
        $shoespro[$i]=$result->fetch_assoc();
    }

    // 返回接口数据
    echo json_encode($shoespro);

