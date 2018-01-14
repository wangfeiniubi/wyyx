<?php
//查询商品分类名称
header("Content-Type:application/json");
$conn = mysqli_connect("127.0.0.1","root","root","wyyx",3306);
$cid = $_REQUEST['cid'];
if(!$cid){
    $cid = 1;
}
$sql="SELECT * FROM yx_products_family WHERE cid = " . $cid;
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));