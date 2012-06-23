<?php

header('content-type:text/html;charset=utf-8');

//如果PHP设置的自动转义函数未开启，就转义这些值

if(!get_magic_quotes_gpc()){

	foreach ($_POST as &$items){

		$items = addslashes($items);

	}

}


$name = $_POST['name'];

$post = $_POST['post'];


if($name==""||$name=="名字"||strlen($name)>10){

	echo <<<tem

	<script language="javascript">

	alert('请输入正确的有户名');

	history.go(-1);
	</script>
tem;
exit();

}


if(strlen($post)>300){

	echo <<<tem

	<script>

	alert("输入的留言内容太长！");

	history.go(-1);

	</script>
tem;

exit();
}


//链接数据库

include('common.php');


//把客户信息插入guest表

$insertSql="insert into guest (name) values ('$name')";

if(mysql_query($insertSql)){

	$guestid = mysql_insert_id();

}

else{

	echo $insertSql;

	echo mysql_error();

	echo "数据插入失败!";

	exit();

}


//把以上插入取得的客户id和留言信息插入到post表中

$post_time = time();

$insertPostSql = "insert into post(guest_id,post,post_time) values('$guestid','$post','$post_time')";

if(mysql_query($insertPostSql)){

	echo <<<tem

	<script>

	/*alert("留言成功");*/

	location.href="mes.php";

	</script>
tem;

}

else{

	echo <<<tem

	<script>

	alert("留言失败");

	location.href="mes.php";

	</script>
tem;

}
?>
