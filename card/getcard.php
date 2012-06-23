<html>
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link rel="stylesheet" href="/css/contents.css" type="text/css" />
<link type="text/css" rel="stylesheet" href="css/card.css">
<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="/js/tooltip.js"></script>
</head>
<body>
<?php

echo <<<_html
<div id="contents">
_html;

include('common.php');

$p=$_COOKIE['user'];
$sql="SELECT * FROM pcard,card,cskill where pcard.cid=card.cid and card.skillid=cskill.skillid and id='$p'";
$result = mysql_query($sql);
		echo "<p><strong>".$p."</strong>所持有的卡片</p>";
while($row = mysql_fetch_array($result))
 {
		echo "<div><a class='scard' title='".$row['des']."'><img src='images/".$row['pic'].".png'><span>结晶点：".$row['value']."</span><p>".$row['name']."</p></a></div>";
		

}

mysql_close($con);
?>
<div><a class='scard' title='达到一定条件后可解锁'><img src='images/beimian.png'><span>结晶点</span><p>锁定中</p></a></div>
<div><a class='scard' title='达到一定条件后可解锁'><img src='images/beimian.png'><span>结晶点</span><p>锁定中</p></a></div>
<form action="loginout.php" method="post">
<input type="submit" value="更换卡片" />
<input name="operation" type="hidden" value="del">
</form>
<form action="card.php" method="post">
<input type="submit" value="取消" />
</form>
</body>
</html>
