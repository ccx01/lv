<?php
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');

$sort=$_POST['sort'];

$sql="SELECT * FROM wtow WHERE sort='".$sort."' ORDER BY id DESC limit 7";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{
	echo '<a  href="#modal" class="second" alt="'.$row["id"].'"><div alt="'.$row["tid"].'" class="'.$row["sort"].'"><span>'.$row["time"].'</span><p class="name">'.$row["name"].'</p><p class="word">'.$row["words"].'</p></div><div class="other">'.$row["other"].'</div></a>';
}

mysql_close($con);
?>
