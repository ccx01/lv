<html>
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link type="text/css" rel="stylesheet" href="css/playbg.css">
<link type="text/css" rel="stylesheet" href="css/card.css">
<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="js/card.js"></script>  
<script type="text/javascript" src="js/play.js"></script>
<script type="text/javascript">
//konami code
var k=[];
document.onkeydown = function(e){
    e = e||window.event;
    k.push(e.keyCode);
    if(k.toString().indexOf("38,38,40,40,37,39,37,39,66,65")>=0) {
        k=[];
		location.href='allcard.php';
    }
}
</script>
</head>
<body>
<div id="gameField">
<div id="duishou">    <!--对手的牌-->
<div class="focus-pic" id="duishoucard"><img src="images/beimian.png"/></div>
<div id="duishoupic"><img src="images/player2.gif"/></div>
<div id="duishouhp"><strong>能量点 </strong><input type=image src="images/hp.png" value="2" id="p2hp"/></div>
<!--<div id="p2db">对白，打字框，只显示最新的话，另外利用jq来加载onload</div>-->
<div id="topbox"></div>
</div>

<iframe src="pk.html" id="pk"></iframe>

<div id="player">    
<div class="focus-pic" id="playercard"></div>
<div id="playerpic"><img src="images/player1.gif"/></div>
<div id="playerhp">
<button id="getp1" onClick="getp1();">刷新对手信息</button>
<button id="getp2" onClick="getp2();">刷新对手信息</button>
<strong>能量点 </strong><input type=image src="images/hp.png" value="2" id="p1hp"/></div>
<!--<div id="p1db">对白，打字框，只显示最新的话，可以在数据库里加一列，作为心情使用</div>-->
<div id="bottombox"></div>
</div>

</div>

<?php
if(!$_COOKIE['user'])
echo <<<_html
<form action="loginout.php" method="post">
用户 ：<input type="text" id="user" name="user" value="" onclick="this.value=''" />
<input type="submit" value="提交" onclick="return checkInput();" />
<input name="operation" type="hidden" value="login">
</form>
_html;
else
echo <<<_html
<div id="tiaozhan">
<div id="nowroom">暂无游戏</div>
<button onClick="room()">刷新战斗列表</button>
<button onClick="c_room()">发起挑战</button>
<form action="getcard.php" method="post">
<input type="submit" value="更换卡片" />
</form>
<form action="loginout.php" method="post">
<input type="submit" value="退出" />
<input name="operation" type="hidden" value="logout">
</form>
</div>
_html;
?>



</body>
</html>
