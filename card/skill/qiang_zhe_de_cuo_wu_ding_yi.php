﻿<?php

header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');

$p=$_COOKIE['player'];
$r=$_COOKIE['room'];
$sql="SELECT * FROM pk where room='$r'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
 {
	 if($row['ready']==3){
	 	$p=rand(0,1);
	 	if($p=='p1'){ 
		if($p==0){
		$newval=$row['p1val']+2;
		}else{
		$newval=$row['p1val']-1;		
		}
		$sql="update pk set p1val='$newval' where room='$r';";
		$result = mysql_query($sql);
		}else{
		if($p==0){
		$newval=$row['p2val']+2;
		}else{
		$newval=$row['p2val']-1;		
		}
		$sql="update pk set p2val='$newval' where room='$r';";
		$result = mysql_query($sql);
		}
		echo "使用技能";
	 }
}

mysql_close($con);
?>