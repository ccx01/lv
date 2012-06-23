<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<link type="text/css" rel="stylesheet" href="css/css.css">
<!--<script type="text/javascript" src="jquery.js"></script>-->
<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
<script type="text/javascript">
 $(function() {
 $('#postForm input.clear').each(function(){
   $(this).data( "txt", $.trim($(this).val()) );
 }).focus(function(){
   if ( $.trim($(this).val()) === $(this).data("txt") ) {
     $(this).val("");
   }
 }).blur(function(){
   if ( $.trim($(this).val()) === "" && !$(this).hasClass("once") ) {
     $(this).val( $(this).data("txt") );
   }
 });
});

</script>
<?php
session_start();
include('common.php');

$pagesize = 15;//每一页显示多少留言记录
if(isset($_GET['page'])&&$_GET['page']!='')
 $page=$_GET['page'];
else $page=0;

$sql = "SELECT a . * , b.name
		FROM post a, guest b
		WHERE a.guest_id = b.id
		ORDER BY a.id DESC";
$numRecord = mysql_num_rows(mysql_query($sql));
$totalpage = ceil($numRecord/$pagesize);

$recordSql = $sql. " LIMIT ".$page*$pagesize.",".$pagesize;
$result = mysql_query($recordSql);
?>
<script language="javascript">
function checkInput(){
	var name = document.getElementById('name');
	var post = document.getElementById('post');
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
<body>
<table width="100%" border="0" align="center" bgcolor="#fefefe">
<?php
$num=0;
while($rs=mysql_fetch_object($result)){
	$num++;

if($num%2==1)
 echo "<tr class=\"tr1\">";
else
 echo "<tr class=\"tr2\">";
?>

    <td width="100%">
    <div id="ltime">
	<?php 
	  $t=$rs->post_time;
	  $ts =time()-$t;
	  	if($ts>=(60*60*24*30)){
	    echo("很久很久以前");
	}
	else if($ts>=(60*60*24)){
		$ts=floor($ts/(60*60*24));
	    echo($ts."天前");
	}
	else if($ts>=(60*60)){
		$ts=floor($ts/(60*60));
	    echo($ts."小时前");
	}
	else if($ts>=60){
		$ts=floor($ts/60);
	    echo($ts."分钟前");
	}
	else
	    echo($ts."秒前");
	  ?>
	</div>
	<span style="font-weight:bold"><?php echo $rs->name?> ：</span><?php echo nl2br(htmlspecialchars($rs->post))?>
	
	</td>
  </tr>
<?php
}
mysql_close($con);
?>
  <tr bgcolor="#B1C3D9">
    <td >
<?php 
if($page<$totalpage-1) echo "<a href='mes.php?page=".($page+1)."'>下一页 </a>&nbsp;&nbsp;&nbsp;" ;
if($page>0) echo "<a href='mes.php?page=".($page-1)."'>上一页  </a>" ;
?>
   </td>
  </tr>
</table>
<form action="post.php" method="post" id="postForm" name="postForm">
<table width="100%" border="0" align="center" cellspacing="0" bgcolor="#efefef">
  
  <tr>
    <td bgcolor="#FFFFFF" width="15%">
      <input name="name" type="text" id="name" style= "width:98%;"  class="clear" value="名字"/>
    </td>
    <td bgcolor="#FFFFFF" width="5%"></td>
    <td bgcolor="#FFFFFF" width="80%">
      <input name="post" type="text" id="post" style="width:98%;" class="clear" value="信息" />
    </td>
  </tr>
  <tr>
    <td colspan="2" bgcolor="#FFFFFF">
      <input type="submit" name="Submit" value="提交" onclick="return checkInput();"/>
      </td>
      <td bgcolor="#FFFFFF">
      <input type="reset" name="Submit2" value="重置" />
    </td>
  </tr>
</table></form>
</body>
</html>

