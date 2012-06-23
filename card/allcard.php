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
<form action = "loginout.php" method = "post" name="form1"   onsubmit="return postform()">
_html;

include('common.php');

$p=$_COOKIE['user'];
$sql="SELECT * FROM card,cskill where card.skillid=cskill.skillid";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
 {
		echo "<div style='border:1px'><a class='scard' title='".$row['des']."'><img src='images/".$row['pic'].".png'><span>结晶点：".$row['value']."</span><p>".$row['name']."</p></a></div>";
		

}

mysql_close($con);
?>
</body>
</html>
