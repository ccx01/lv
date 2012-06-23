<html>
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
<!--改为匹配模式-->
<!--暂时设定为电脑对战-->
<?php
include('../common.php');

if($_COOKIE['player']&&$_COOKIE['room']){
	$r=$_COOKIE['room'];
	$sql="SELECT * FROM pk where rid='$r'";
	$result = mysql_query($sql);
	$num=mysql_num_rows($result);
	if($num>1){echo '<div>开始</div>';}
	while($row = mysql_fetch_array($result))
	{
		$pic=$row['pic'];
		$name=$row['player'];
		echo '<div><img src="'.$pic.'"><p>'.$name.'</p></div>';
	}
	echo <<<_html
<form action="loginout.php" method="post">
<input type="submit" value="开始" />
</form>
</div>
_html;
}
else if($_COOKIE['player']){
echo '<form method="post" action="loginout.php">';
$sql="SELECT * FROM room where ready='0'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
{
	echo '<label><input type="radio" name="room" value="'.$row['rid'].'">房间'.$row['rid'].'点击进入</label><br>';
}

echo '<input type="submit" value="加入房间" onclick="return checkInput();" />';
echo '</form>';

echo <<<_html
<form action="loginout.php" method="post"> //暂未开放
<input type="submit" value="创建房间" />
<input name="operation" type="hidden" value="croom">
</form>
<form action="loginout.php" method="post">
<input type="submit" value="退出" />
<input name="operation" type="hidden" value="logout">
</form>
</div>
_html;
}
else
echo <<<_html
<form action="loginout.php" method="post">
用户 ：<input type="text" name="player" value="" onclick="this.value=''" />
<input type="submit" value="提交" onclick="return checkInput();" />
<input name="operation" type="hidden" value="login">
</form>
_html;

mysql_close($con);
?>

</body>
</html>
