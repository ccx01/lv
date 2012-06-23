<?php
//建立pk表信息
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');

$r = $_COOKIE['room'];
$id = $_COOKIE['player'];
$t=time();

$sql="SELECT * FROM pk where rid='$r' and player='$id'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{
	if($row['hp']<=0){        //pc对战不能用这种方法判断
		$udtsql="update pk set win='1' where rid='$r' and  player='$id';"; //失去资格
		$udtresult = mysql_query($udtsql);
		}
	$arr['player'] = array( 
		'hp' => $row['hp'], 
		'sp' => $row['sp'],
		'val'=> $row['val'],
		'atk'=> $row['atk'],
		'hit'=> $row['hit'],
		'time'=> $t-$row['time'],
		'win'=>$row['win']
	); 
}

$sql1="SELECT * FROM pk where rid='$r' and player!='$id'";
$result1 = mysql_query($sql1);
while($row = mysql_fetch_array($result1))
{							//pc对战能用下面这种方法，不过可能会比较麻烦
	if($row['hp']<=0){        
		$aid=$row['player'];
		$udtsql="update pk set win='1' where rid='$r' and  player='$aid';"; //失去资格
		$udtresult = mysql_query($udtsql);
		}
	$arr['another'][] = array( 
		'hp' => $row['hp'], 
		'sp' => $row['sp'],
		'bio' => $row['bio'],
		'val'=> $row['val'],
		'atk'=> $row['atk'],
		'hit'=> $row['hit'],
		'time'=> $t-$row['time']
	); 
}

$json_string = json_encode($arr); 
echo $json_string;

mysql_close($con);
?>