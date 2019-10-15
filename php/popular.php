<?php

    include "conn.php";


     // 人气推荐数据接口
    $popular=$conn->query("select * from product where demo='popular'");
    $poppro=array();
    for($i=0;$i<$popular->num_rows;$i++){
        $poppro[$i]=$popular->fetch_assoc();
    }

    // 返回接口数据
    echo json_encode($poppro);

