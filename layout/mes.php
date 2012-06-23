<?php
//建立pk表信息
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');

$sql="SELECT * FROM post ORDER BY id DESC";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{
	$arr[] = array( 
		'post'=> $row['post'],
	); 	
}

$json_string = json_encode($arr); 
echo $json_string;

mysql_close($con);
?>
