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
		$v1=$row['p2val'];
		$v2=$row['p1val'];		
		$sql="update pk set p1val='$v1',p2val='$v2' where room='$r';";
		$result = mysql_query($sql);
		echo "使用技能";
	 }
}

mysql_close($con);
?>