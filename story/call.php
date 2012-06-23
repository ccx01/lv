<?php
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');

$r = $_COOKIE['room'];
$id = $_COOKIE['player'];
$t=time();

$cid=$_POST['cid'];
$sql="SELECT * FROM card where cid='$cid'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{
		$pic= $row['pic'];
		$val= $row['value'];
}


$arr = array( 
'pic' => $pic, 
'val'=>$val,
); 
$json_string = json_encode($arr); 
echo $json_string;


$sql="update pk set bio='$pic',val='$val',time='$t',atk='1',sp=sp-1 where rid='$r' and player='$id';";    //宣布进攻
$result = mysql_query($sql);


mysql_close($con);
?>