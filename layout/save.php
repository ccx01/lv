<?php
//建立pk表信息
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');
$c = $_POST['content'];
$t = time();
$sql="insert into post (post,post_time) values ('".$c."','".$t."')";
$result = mysql_query($sql);

mysql_close($con);
?>
