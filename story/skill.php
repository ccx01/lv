<?php
//建立pk表信息
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');

$r = $_COOKIE['room'];
$id = $_COOKIE['player'];
$t=time();
$enemy=$_POST['enemy'];
$skill=$_POST['skill']; //技能以cid进行区别
$sp=$_POST['sp'];   //技能消耗

  		$sql="SELECT * FROM pk where rid='$r' and player='$id'";
		$result1 = mysql_query($sql);
			while($row = mysql_fetch_array($result1))
			{
				$p1v=$row['val'];
				$p1t=$row['time'];
			}
		 $sql="SELECT * FROM pk where rid='$r' and player='$enemy'";
		$result2 = mysql_query($sql);
			while($row = mysql_fetch_array($result2))
			{
				$p2v=$row['val'];
			}
		$over=$t-$p1t;

  switch($skill)
  {
	case '1': //诈欺师
  		$q=rand(0,4);
		$udtsql="update pk set val='$q',sp=sp-$sp where rid='$r' and  player='$id';"; 
		$udtresult = mysql_query($udtsql);
  		break;
	case '2': //时间管理人
  		$udtsql="update pk set time=time-5,sp=sp-$sp where rid='$r' and  player='$id';"; 
		$udtresult = mysql_query($udtsql);
  		break;
	case '3':	//死神的巡游
		if($p1v+$p2v>4){
			$udtsql="update pk set val='0' where rid='$r' and  player='$enemy';"; 
			$udtresult = mysql_query($udtsql);
			$udtsql="update pk set sp=sp-$sp where rid='$r' and  player='$id';"; 
			$udtresult = mysql_query($udtsql);
			}
  		break;
	case '4': //潘多拉魔盒
  		$udtsql="update pk set val=val-1,sp=sp-$sp where rid='$r' and  player='$id';"; 
		$udtresult = mysql_query($udtsql);
  		break;
	case '5': //弱者的推卸责任
  		$udtsql="update pk set val=val-1 where rid='$r' and  player='$enemy';"; 
		$udtresult = mysql_query($udtsql);
  		$udtsql="update pk set sp=sp-$sp where rid='$r' and  player='$id';"; 
		$udtresult = mysql_query($udtsql);
  		break;	
	case '6': //偏执狂的抉择
		if($p1v%2==0||$p2v%2==0){
  		$udtsql="update pk set val='9',sp=sp-$sp where rid='$r' and  player='$id';"; 
		$udtresult = mysql_query($udtsql);
		}
  		break;
	case '7': //命运窥视者
  		$udtsql="update pk set val='$over',sp=sp-$sp where rid='$r' and  player='$id';"; 
		$udtresult = mysql_query($udtsql);	
  		break;
	case '8': //强者的错误定义
  		break;	
	case '9': //迷雾森林
  		$udtsql="update pk set val='$p2v',sp=sp-$sp where rid='$r' and  player='$id';"; 
		$udtresult = mysql_query($udtsql);
  		$udtsql="update pk set val='$p1v' where rid='$r' and  player='$enemy';"; 
		$udtresult = mysql_query($udtsql);		
  		break;		
	default:
  		echo "未定义卡片";
  }
  
	$udtsql="update pk set atk='2' where rid='$r' and  player='$id';"; 
	$udtresult = mysql_query($udtsql);

mysql_close($con);
?>