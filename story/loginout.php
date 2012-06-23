<?php
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');


if($_POST['player']){
	setcookie('player',$_POST['player'],time()+3600);
	header("location: room.php");
}

if($_POST['room']){   //加入游戏
	$id = $_COOKIE['player'];
	$r=$_POST['room'];
	setcookie('room',$r,time()+3600);
	
	$sql="INSERT INTO pk (rid, player,hp,sp,val) VALUES ('".$r."', '".$id."','3','1','0');";
	$result = mysql_query($sql);
	
	$udtsql="update room set ready='1' where rid='$r';";//开始
	$udtresult = mysql_query($udtsql);
	header("location: card.php");
}
	
if($_POST['operation']=="croom"){ //创建游戏
$id = $_COOKIE['player'];

$sql="INSERT INTO room (ready, time) VALUES ('0', '0');";
$result = mysql_query($sql);
	
$newRID = mysql_insert_id();
setcookie('room',$newRID,time()+3600);

$sql="INSERT INTO pk (rid, player,hp,sp,val) VALUES ('".$newRID."', '".$id."','3','1','0');";
$result = mysql_query($sql);
header("location: room.php");

}

mysql_close($con);
?>