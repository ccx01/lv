<?php
header("Cache-Control: no-cache");
header("Pragma: no-cache");
if($_COOKIE['user']){
$name = $_COOKIE['user'];
$file_url = 'data/'.$name.'/from.html';
$msg = array_reverse(file($file_url));
$vnum=count($msg);
	for($num=0;$num<=$vnum-1;$num++){
	echo iconv('gb2312','utf-8',$msg[$num]);
	}
}
?>
