<?php 
$tfile= 'data/'.date('Y-m').'.html';
if(!file_exists($tfile))
file_put_contents($tfile,'<h2>����������</h2>');
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
	//��֤�û��������ܳ���10���ַ���5�����֣�����������Ƿ��ַ�������Ϊ��
	nameValue = name.value.replace(/\s+/g,"");
	var SPECIAL_STR = "~!%^&*();\"?><[]{}\\|,:/=+��";
	var nameflag=true;
	for(i=0;i<nameValue.lenght;i++){
		if (SPECIAL_STR.indexOf(nameValue.charAt(i)) !=-1)
		nameflag=false;
	}
	if(nameValue==''){
		alert('����д�û����ƣ�');	
		return false;
	}
	if(nameValue.length>10){
		alert('�û��������10���ַ���5�����֣���');
		return false;
	}
	
	if(nameflag===false){
		alert('�û����Ʋ��ܰ����Ƿ��ַ�����ģ�');
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
ѡ��ͷ��
<label><input type="radio" name="pics" value="00" checked="checked"/><img src="/images/00.png"/></label>
<label><input type="radio" name="pics" value="01"/><img src="/images/01.png"/></label>
<label><input type="radio" name="pics" value="02"/><img src="/images/02.png"/></label>
<label><input type="radio" name="pics" value="03"/><img src="/images/03.png"/></label>
<br/>
�ǳ� ��<input type="text" id="user" name="user" value="" onclick="this.value=''" />
<input type="submit" value="�ύ" onclick="return checkInput();" />
<input name="operation" type="hidden" value="login">
</form>
_html;
else
echo <<<_html
<textarea name="nmsg" id="nmsg"></textarea>
&nbsp;<button onclick="save()" id="update">����</button>
<form action="loginout.php" method="post">
<input type="submit" value="ע��" />
<input name="operation" type="hidden" value="logout">
</form>
_html;
?>
</div>
</body>
</html>
