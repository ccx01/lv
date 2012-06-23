<?php
//聊天主界面所读取的页面，cookie from基本上就是聊天发送方to下对应的网页
header("Cache-Control: no-cache");
header("Pragma: no-cache");
if($_POST['from']){
	setcookie('from',$_POST['from'],time()+3600);
}
else if($_COOKIE['from'] && $_COOKIE['user']){
$from = $_COOKIE['from'];
$name = $_COOKIE['user'];
$msg = array_reverse(file($from));
$vnum=count($msg);
	for($num=0;$num<=$vnum-1;$num++){
	echo iconv('gb2312','utf-8',$msg[$num]);
	}	
}else if($_COOKIE['user']){
	$gonggong = 'data/'.date('Y-m').'.html';
	setcookie('goo',$gonggong,time()+36000);
	$tfile= 'data/'.date('Y-m').'.html';
	$msg = array_reverse(file($tfile));
	$vnum=count($msg);
	for($num=0;$num<=$vnum-1;$num++){
	echo iconv('gb2312','utf-8',$msg[$num]);
	}
}else{
	echo "<p id='jieshao'>____使用方法：在下方输入英文名登陆（中文容易出错），上面是当前在线的人头像，点击头像，可以对其发送信息（包括给自己发信息），另外，有人对你发送信息时，右边会有通知显示。右上角公共聊天室内聊天为所有人可见。<br/>____目前聊天系统暂时先这个样子，由于聊天系统预计的逻辑系统太混乱，目前很多功能不知道如何添加，总之目前就是这种山寨webQQ未遂的程度。接下来是游戏的即时功能添加，不过这个聊天系统，依然会想办法完善的。预期的目标是完成基于6人理论的社交即时聊天系统。<br/>____辟艾斯：ie下无法主动对别人发送信息，不过可以接受并回复别人的信息____</p>";
}
?>
