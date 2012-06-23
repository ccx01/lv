<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Untitled Document</title>
<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
<script src="js/selectuser.js"></script>
<script type="text/javascript">
$(document).ready(function(){
$('#oluser').delegate('li','click',function(){

	$(this).stop().fadeTo(500,0.5);
	$(this).siblings().stop().fadeTo(500,1);
});
});
</script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body onload="frs()">
<div style="float:right"><div><img src="/images/00.png" onclick="goo()" /></div>公共聊天室</div>
<ul id="oluser"></ul>
</body>
</html>