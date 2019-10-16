<?php
    include "conn.php";
    $result=$conn->query("select * from product");
    $product=array();
    for($i=0;$i<$result->num_rows;$i++){
        $product[$i]=$result->fetch_assoc();
    }

    echo json_encode($product);