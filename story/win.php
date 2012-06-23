<?php
//建立pk表信息
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');

$r = $_COOKIE['room'];
$id = $_COOKIE['player'];
$t=time();

$sql="SELECT * FROM pk where rid='$r' and win='0'";
$result = mysql_query($sql);
$num=mysql_num_rows($result);
if($num==1){ //只有一个获胜者，另，有种情况，失败者最后一次攻击，唯一的获胜者没有承受住的时候也归为失败
	$sql="update room set ready='2' where rid='$r';";  
	$result = mysql_query($sql);

}

$sql="SELECT * FROM room where rid='$r';";
$result1 = mysql_query($sql);
while($row = mysql_fetch_array($result1))
{	
		$over=$t-$row['time'];
		if($over%8==0&&$over!=0){
			$sql="update pk set sp=sp+1 where rid='$r';";
			$result = mysql_query($sql);
			}
		if($over==60){
			$sql="update room set ready='3' where rid='$r';";
			$result = mysql_query($sql);
			}
		$arr = array(
		'end'=>$row['ready'],
		'time'=> $over
		); 
}

$sql="SELECT * FROM pk where rid='$r' and player='$id'";
$result2 = mysql_query($sql);
while($row = mysql_fetch_array($result2))
{
		$arr['win']= $row['win'];
}

$json_string = json_encode($arr); 
echo $json_string;

mysql_close($con);
?>