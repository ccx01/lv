<?php
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');

$sql="SELECT * FROM wtow ORDER BY rand() limit 9";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{
		$arr[]  = array( 
			'name' => $row['name'], 
			'time' => $row['time'],
			'words' => $row['words']
		); 
}

$json_string = json_encode($arr); 
echo $json_string;

mysql_close($con);
?>