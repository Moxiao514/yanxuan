<?php

    include "conn.php";

    $result=$conn->query("select * from product where demo='live'");
    $homepro=array();

    // 居家生活数据接口
    for($i=0;$i<$result->num_rows;$i++){
        $homepro[$i]=$result->fetch_assoc();
    }



    // 返回接口数据
    echo json_encode($homepro);

