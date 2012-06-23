<?php
//不停的操作数据库，暂时不知道有什么好的方法代替
header('content-type:text/html;charset=utf-8');
include('common.php');
if($_POST['operation']=="login"){
	$ol = $_POST['user'];
	$t=time();
	$pic=$_POST['pics'];
	setcookie('user',$ol,time()+3600);
	$sql="INSERT INTO  online (user,time,pic)VALUES ( '$ol','$t','$pic');";
	$result = mysql_query($sql);
	
$name = urlencode($_POST['user']);
$tfile= 'data/'.$name;            
if(!is_dir($tfile))
mkdir($tfile);             //创建用户名文件夹
$mfile=$tfile.'/from.html';
if(!file_exists($mfile))
file_put_contents($mfile,'');
}
else if($_POST['operation']=="logout"){
$name = $_COOKIE['user'];
setcookie('user',$name,time()+0);
$sql="delete from online where user='$name';";
$result = mysql_query($sql);
}
mysql_close($con);
header("location: chat.php");
?>
