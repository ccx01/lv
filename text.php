<?php
include('common.php');
$sql="SELECT * FROM wtow where sort='video'";
$result = mysql_query($sql);
$max=mysql_num_rows($result)-1;
$x=rand(0,3);
switch ($x)
{
case 1:
  $sort="article";
  break;
case 2:
  $sort="game";
  break;
case 3:
  $sort="video";
  break;
default:
  $sort="words";
}
$test=$rand;
$t=date("Y-m-d G:i:s");
echo($t);
?>