<?php
header("Content-Type:application/json");
$conn = mysqli_connect("127.0.0.1","root","root","wyyx",3306);
$sql="select * from yx_products WHERE (fid is not NULL OR fid <> '') ORDER BY fid ASC";
$result=mysqli_query($conn,$sql);
$sql="select DISTINCT fid from yx_products WHERE (fid is not NULL OR fid <> '')";
$floors=mysqli_query($conn,$sql);
$data = array();

$allData = mysqli_fetch_all($result,1);
foreach($floors as $key => $val){
    $rows = array();
    foreach($allData as $k => $row){
        if($val['fid'] == $row['fid']){
            array_push($rows,$row);
            continue;
        }
    }
    array_push($data,["fid"=>$val['fid'],"data"=>$rows]);
}
echo json_encode($data);
