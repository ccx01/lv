<?php
//p1创建游戏
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('common.php');
if($_GET['p1']){  //p1加入
$id= $_COOKIE['user'];
$sql="SELECT * FROM pcard,card,cskill where id='$id' and pcard.cid=card.cid and card.skillid=cskill.skillid and checked='1'";
$result = mysql_query($sql);

while($row = mysql_fetch_array($result))
 {
	 $skill="skill('".$row['skill']."')";
 echo "<a id='skill' onclick=$skill title='".$row['des']."'><img src='images/".$row['pic'].".png'><span>结晶点：".$row['value']."</span></a>";
$val = $row['value'];
$pic = $row['pic'];
 }
	$sql="insert into pk (p1,p1val,p1pic)VALUES ( '$id','$val','$pic');";
	$result = mysql_query($sql);
	$sql="select * from pk where p1='$id';";
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
 {
	 $room = $row['room'];
 }
setcookie('player','p1',time()+3600);
setcookie('room',$room,time()+3600);
}else if($_GET['p2']){  //p2加入
	$p2 =  $_COOKIE['user'];
	$room = $_GET['room'];
	$sql="SELECT * FROM pcard,card,cskill where id='$p2' and pcard.cid=card.cid and card.skillid=cskill.skillid and checked='1'";
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
 {
	$val = $row['value'];
	$pic = $row['pic'];
	$skl = $row['skill'];
	$des = $row['des'];
 }
 	$sql="SELECT * FROM pk where room='$room';";
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
 {
	$noseat = $row['p2'];
 }
 if($noseat==""){
	$sql="update pk set p2='$p2',p2val='$val',p2pic='$pic',ready=1 where room='$room';";
	$result = mysql_query($sql);
	setcookie('player','p2',time()+3600);
	setcookie('room',$room,time()+3600);
	$skill="skill('".$skl."')";
	echo "<a id='skill' onclick=$skill title='".$des."'><img src='images/".$pic.".png'><span>结晶点：".$val."</span></a>";
 }
 else{
 	echo "游戏已存在";
 }
}
mysql_close($con);
?>