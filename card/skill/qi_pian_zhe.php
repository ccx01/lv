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
		$q=rand(0,4);
		if($p=='p1'){
		$sql="update pk set p1val='$q' where room='$r';";
		}else{
		$sql="update pk set p2val='$q' where room='$r';";
		}
		$result = mysql_query($sql);
		echo "使用技能";
	 }
}

mysql_close($con);
?>