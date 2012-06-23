<?php
//建立pk表信息
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');

$r = $_COOKIE['room'];
$id = $_COOKIE['player'];


$sql="SELECT * FROM pk where rid='$r' and pk.player='$id'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{
	$arr['player'] = array( 
		'name'=> $row['player'],
		'ppic'=> $row['pic'],
	); 
}

$sql="SELECT card.cid pcid,card.pic cpic FROM pk,pcard,card where rid='$r' and pk.player='$id' and pk.player=pcard.player and pcard.cid=card.cid";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{
	$arr['player']['card'][] = array($row['cpic'],$row['pcid']);
	
}

$sql1="SELECT * FROM pk where rid='$r' and player!='$id'";
$result1 = mysql_query($sql1);
while($row = mysql_fetch_array($result1))
{	
	$arr['another'][] = array( 
		'name'=> $row['player'],
		'ppic'=> $row['pic'],
	); 		
}



$json_string = json_encode($arr); 
echo $json_string;

mysql_close($con);
?>