<?php
//建立pk表信息
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');

$r = $_COOKIE['room'];
$id = $_COOKIE['player'];
$t=time();
$enemy=$_POST['enemy'];

$sql="SELECT * FROM pk where rid='$r' and player='$id'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{
	$atkt= $row['time'];
	$p1v=$row['val'];
	$atk=$row['atk'];
}
if($t-$atkt>3&&$atkt!=0){
	$sql="SELECT * FROM pk where rid='$r' and player='$enemy'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{
	$p2v=$row['val'];
}
if($p1v>=$p2v){
	$udtsql="update pk set hp=hp-1,hit=hit+1 where rid='$r' and player='$enemy';";
	$udtresult = mysql_query($udtsql);
	
$arr = array(  
'end'=>'win'
); 
		//	you win
}else{
$arr = array( 
'end'=>'lose'
); 
	//攻击未遂
}
	$udtsql="update pk set val='0',time='0',atk='0' where rid='$r' and player='$id';";
	$udtresult = mysql_query($udtsql);
	
	$json_string = json_encode($arr); 
	echo $json_string;
}

mysql_close($con);
?>