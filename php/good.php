<?php

    include "conn.php";

    $result=$conn->query("select * from product where demo='fuli'");
    $goodpro=array();

    // 新品首发数据接口
    for($i=0;$i<$result->num_rows;$i++){
        $goodpro[$i]=$result->fetch_assoc();
    }



    // 返回接口数据
    echo json_encode($goodpro);

