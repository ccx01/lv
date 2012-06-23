<?php

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
		$newtime=$row['time']-5;
		$sql="update pk set time='$newtime' where room='$r';";
		$result = mysql_query($sql);
		echo "使用技能";
	 }
}

mysql_close($con);
?>