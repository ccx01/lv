<?php
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');
$tid=$_POST['tid'];
$words=$_POST['words'];
$name=$_POST['name'];
$t=date("Y-m-d G:i:s");
$sort=$_POST['sort'];
$other=$_POST['other'];
$sql="insert into wtow (tid,words,name,time,sort,other) values ('$tid','$words','$name','$t','$sort','$other')";
$result = mysql_query($sql);

mysql_close($con);
?>
