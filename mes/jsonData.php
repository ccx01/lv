<?php
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');
$sort=$_POST['sort'];
$sql="SELECT * FROM wtow WHERE sort='$sort' ORDER BY id DESC limit 8";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{
		$arr[]  = array(
			'id' => $row['id'],
			'tid' => $row['tid'],
			'name' => $row['name'], 
			'time' => $row['time'],
			'sort' => $row['sort'],
			'words' => $row['words'],
			'other' => $row['other']
		); 
}

$json_string = json_encode($arr); 
echo $json_string;

mysql_close($con);
?>