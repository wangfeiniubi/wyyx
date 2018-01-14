<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/1/13
 * Time: 15:24
 */
@$pid=$_REQUEST["pid"];
$conn = mysqli_connect("localhost","root","root","wyyx",3306);
$sql="SELECT * FROM yx_products WHERE pid = $pid";
$result=mysqli_query($conn,$sql);
$resAry = mysqli_fetch_all($result,1)[0];

$sql="SELECT * FROM yx_products_detail WHERE pid = $pid";
$pds=mysqli_query($conn,$sql);
$pdsAry = mysqli_fetch_all($pds,1);

//spec
$sql="SELECT DISTINCT spec FROM  yx_products_detail WHERE pid = $pid";
$specs=mysqli_query($conn,$sql);
$specsAry = mysqli_fetch_all($specs,1);

//
$arr = array();
foreach($specsAry as $key => $val){
    $ary = [];
    foreach($pdsAry as $k => $v){
        if($val['spec'] == $v['spec']){
            array_push($ary,$v);
        }
    }
    array_push($arr,['spec'=>$val['spec'],'data'=>$ary]);
}
$resAry['details'] = $arr;
echo json_encode($resAry);