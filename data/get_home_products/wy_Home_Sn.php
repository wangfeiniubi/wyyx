<?php
header("Content-Type:application/json");
$conn = mysqli_connect("127.0.0.1","root","root","wyyx",3306);
$sql="select * from yx_products WHERE fid=4";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
