<?php 
$tfile= 'data/'.date('Y-m').'.html';
if(!file_exists($tfile))
file_put_contents($tfile,'<h2>公共聊天室</h2>');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<link rel="stylesheet" href="css/liaotian.css" type="text/css" media="all" />
<script type="text/javascript" src="js/liaotian.js"></script>
<script language="javascript">
function checkInput(){
	var name = document.getElementById('user');
	//验证用户名：不能超过10个字符（5个汉字），不能输入非法字符，不能为空
	nameValue = name.value.replace(/\s+/g,"");
	var SPECIAL_STR = "~!%^&*();\"?><[]{}\\|,:/=+—";
	var nameflag=true;
	for(i=0;i<nameValue.lenght;i++){
		if (SPECIAL_STR.indexOf(nameValue.charAt(i)) !=-1)
		nameflag=false;
	}
	if(nameValue==''){
		alert('请填写用户名称！');	
		return false;
	}
	if(nameValue.length>10){
		alert('用户名称最多10个字符（5个汉字）！');
		return false;
	}
	
	if(nameflag===false){
		alert('用户名称不能包含非法字符请更改！');
		return false;
	}
}
</script>
</head>

<body onload="frs()">
<div id="show">
<div id="words">
</div>
</div> 

<div id="edit">
<?php
if(!$_COOKIE['user'])
echo <<<_html
<form action="loginout.php" method="post">
选择头像
<label><input type="radio" name="pics" value="00" checked="checked"/><img src="/images/00.png"/></label>
<label><input type="radio" name="pics" value="01"/><img src="/images/01.png"/></label>
<label><input type="radio" name="pics" value="02"/><img src="/images/02.png"/></label>
<label><input type="radio" name="pics" value="03"/><img src="/images/03.png"/></label>
<br/>
昵称 ：<input type="text" id="user" name="user" value="" onclick="this.value=''" />
<input type="submit" value="提交" onclick="return checkInput();" />
<input name="operation" type="hidden" value="login">
</form>
_html;
else
echo <<<_html
<textarea name="nmsg" id="nmsg"></textarea>
&nbsp;<button onclick="save()" id="update">发送</button>
<form action="loginout.php" method="post">
<input type="submit" value="注销" />
<input name="operation" type="hidden" value="logout">
</form>
_html;
?>
</div>
</body>
</html>
