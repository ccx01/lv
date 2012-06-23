<?php
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('common.php');
$id = $_COOKIE['user'];
$cid = $_POST['card'];
if($_POST['operation']=="login"){
	$id = $_POST['user'];
	setcookie('user',$id,time()+3600);
	$sql="select * from pcard where id='$id'";
	$result = mysql_query($sql);
	$num = mysql_num_rows($result);
	if($num == 0)
	header("location: select.php");
	else
	header("location: card.php");
}else if($_POST['operation']=="logout"){
setcookie('user','',time()+0);
header("location: select.php");
}else if($_POST['operation']=="del"){//移除已得到的所有卡片
$sql="delete from pcard where id='$id'";
$result = mysql_query($sql);
header("location: select.php");
}else{
$sql="select * from pcard where id='$id'";
$result = mysql_query($sql);
$num = mysql_num_rows($result);
if(!$num == 0)
echo "<script>alert('目前一个id只能选择一张卡');</script>";
else{
$sql="insert into pcard (id,cid,checked) values ('$id','$cid','1')";
$result = mysql_query($sql);
}
$sql="select * from pcard,card where id='$id' and pcard.cid=card.cid";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result)){
echo "<script>
	alert('id:".$row['id']."  持有卡:".$row['name']."');
	location.href='card.php';
    </script>";
}
}

mysql_close($con);

?>