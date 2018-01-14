<?php
@$pid=$_REQUEST["pid"];
$conn = mysqli_connect("localhost","root","root","wyyx",3306);
$sql="select * from yx_products WHERE pid='$pid'";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));