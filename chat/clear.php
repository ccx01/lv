<?php
ini_set('date.timezone','Asia/Shanghai');
if($_COOKIE['user']){
$from ='data/'.$_COOKIE['user'].'/from.html';
$fp = fopen($from,'w');
fwrite($fp,"");
fclose($fp);
}
?>