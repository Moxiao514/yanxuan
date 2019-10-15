
    <?php

    // 详情页数据接口
    include "conn.php";
    if (isset($_GET['id'])) {
        $sid = $_GET['id'];
        $result = $conn->query("select * from product where sid='$sid'");
        echo json_encode($result->fetch_assoc());
    }

