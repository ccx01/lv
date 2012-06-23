<html>
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link rel="stylesheet" href="/css/contents.css" type="text/css" />
<link type="text/css" rel="stylesheet" href="css/card.css">
<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="/js/tooltip.js"></script>
<script language = javascript>
function postform(){
var radio=document.getElementsByName("card");

for(var i=0;i<radio.length;i++){
	if(radio[i].checked==true){
	temp=1;
	break;
	}else{
	temp=0;
	}
}
if(temp==0){alert("请选择");return false;}
}
</script>
</head>
<body>
<?php
if(!$_COOKIE['user'])
echo <<<_html
<form action="loginout.php" method="post">
用户 ：<input type="text" id="user" name="user" value="" onclick="this.value=''" />
<input type="submit" value="提交" onclick="return checkInput();" />
<input name="operation" type="hidden" value="login">
</form>
_html;
else{
echo <<<_html
<div id="contents">
<form action = "loginout.php" method = "post" name="form1"   onsubmit="return postform()">
_html;

include('common.php');

$p=$_COOKIE['user'];
$sql="SELECT * FROM card,cskill where card.skillid=cskill.skillid
ORDER BY RAND( ) 
LIMIT 3";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
 {
		echo "<label><a class='scard' title='".$row['des']."'><img src='images/".$row['pic'].".png'><span>结晶点：".$row['value']."</span><p><input type='radio' name='card' value='".$row['cid']."'/>".$row['name']."</p></a></label>";
		

}

mysql_close($con);
echo <<<_html
<input type="submit" value="确认">
</form>
</div>
<form action="loginout.php" method="post">
<input type="submit" value="退出" />
<input name="operation" type="hidden" value="logout">
</form>
_html;
}?>

</body>
</html>
