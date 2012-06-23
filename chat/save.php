<?php
ini_set('date.timezone','Asia/Shanghai');
if($_POST['nmsg'] && $_COOKIE['user']){
	$name = urldecode($_COOKIE['user']);
	$to = urldecode($_COOKIE['touser']);
	if($_COOKIE['from']){
		$file_url = $_COOKIE['from'];
	}else if($_COOKIE['goo']){
		$file_url = 'data/'.date('Y-m').'.html';
	}else{
		$file_url = 'data/'.$name.'/to/'.$to.'.html';
	}
$dd = date('Y年m月d日 H:i:s');


$new_msg = str_replace("&","&amp;",$_POST['nmsg']);
$new_msg = str_replace("<","&lt;",$new_msg);
$new_msg = str_replace(">","&gt;",$new_msg);
$new_msg = str_replace("\n","<br />",$new_msg);
$new_msg = str_replace("\r","",$new_msg);
$new_msg = iconv('utf-8','gb2312',$new_msg);

$fp = fopen($file_url,'a');
fwrite($fp,"<div><b>$name</b><small>$dd</small><pre>$new_msg</pre></div>\n");
fclose($fp);

if($to!=""){
$from ='data/'.$to.'/from.html';
$fp = fopen($from,'a');
$click="from('".$file_url."')";
$str="<a href=# target='notice' onclick=".$click.">来自".$name."的信息！点击查看</a><br/>";
fwrite($fp,$str);
fclose($fp);
}
}
?>