<?php
ini_set('date.timezone','Asia/Shanghai');
if($_POST['touser'] && $_COOKIE['user']){
$name = urldecode($_COOKIE['user']);
$to = $_POST['touser'];

setcookie('touser',$to,time()+3600);

$tfile = 'data/'.$name.'/to';
if(!is_dir($tfile))
mkdir($tfile);

$file_url = 'data/'.$name.'/to/'.$to.'.html';
$str = '<h2>'.$name.'->'.$to.'</h2>';
if(!file_exists($file_url))
file_put_contents($file_url,$str);

setcookie('from',$file_url,time()+3600);

}else if($_POST['goo']){
	setcookie('goo','1',time()+36000);
	setcookie('from','',time()+0);
}
?>