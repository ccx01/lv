<?php
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');
$t=time();

setcookie('player','p1',time()+3600);
$sql="INSERT INTO room (ready, time) VALUES ('0', '$t');";
$result = mysql_query($sql);
	
$newRID = mysql_insert_id();
setcookie('room',$newRID,time()+3600);

$sql="INSERT INTO pk (rid, player,hp,sp,val,pic) VALUES ('".$newRID."', 'p1','3','1','0','001.png'),('".$newRID."', 'p2','3','1','0','002.png');";
$result = mysql_query($sql);

mysql_close($con);
?>