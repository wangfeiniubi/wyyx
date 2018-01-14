<?php
//data/getBanners.php
header("Content-Type:application/json");
$conn = mysqli_connect("127.0.0.1","root","root","wyyx",3306);
$cg=$_REQUEST["category"];
$sql="SELECT * FROM yx_banners WHERE category='$cg' ORDER BY bid DESC limit 10";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
?>