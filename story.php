<?php
header('content-type:text/html;charset=utf-8');
include('common.php');
$id=$_GET['id'];
$sql="SELECT * FROM story where id='$id'";

$result = mysql_query($sql);

while($row = mysql_fetch_array($result))
 {
 echo $row['pic'].":".$row['name'].":". $row['color'].":". $row['talk'];

 }

mysql_close($con);
?>