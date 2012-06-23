<?php
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('../common.php');
$r = $_COOKIE['room'];
$id = $_COOKIE['player'];
$t=time();
	
$sql="SELECT * FROM room where rid='$r';";
$result1 = mysql_query($sql);
while($row = mysql_fetch_array($result1))
{	
		$over=$t-$row['time'];
}
  switch($over)
  {
	case '4': //诈欺师
		$sql="update pk set bio='zha_qi_shi',val='2',time='$t',atk='1',sp=sp-1 where rid='$r' and player='p2';";    //宣布进攻
		$result = mysql_query($sql);
  		break;
	case '12': //诈欺师
		$sql="update pk set bio='pan_duo_la_de_he_zi',val='3',time='$t',atk='1',sp=sp-1 where rid='$r' and player='p2';";    //宣布进攻
		$result = mysql_query($sql);
  		break;
	case '22': //诈欺师
		$sql="update pk set bio='qiang_zhe_de_cuo_wu_ding_yi',val='5',time='$t',atk='1',sp=sp-1 where rid='$r' and player='p2';";    //宣布进攻
		$result = mysql_query($sql);
  		break;
	case '33': //诈欺师
		$sql="update pk set bio='pan_duo_la_de_he_zi',val='3',time='$t',atk='1',sp=sp-1 where rid='$r' and player='p2';";    //宣布进攻
		$result = mysql_query($sql);
  		break;
	case '40': //诈欺师
		$sql="update pk set bio='qiang_zhe_de_cuo_wu_ding_yi',val='5',time='$t',atk='1',sp=sp-1 where rid='$r' and player='p2';";    //宣布进攻
		$result = mysql_query($sql);
  		break;
	case '50': //诈欺师
		$sql="update pk set bio='qiang_zhe_de_cuo_wu_ding_yi',val='5',time='$t',atk='1',sp=sp-1 where rid='$r' and player='p2';";    //宣布进攻
		$result = mysql_query($sql);
  		break;
	case '55': //诈欺师
		$sql="update pk set bio='qiang_zhe_de_cuo_wu_ding_yi',val='5',time='$t',atk='1',sp=sp-1 where rid='$r' and player='p2';";    //宣布进攻
		$result = mysql_query($sql);
  		break;
	default:
  		echo "未定义卡片";
  }

$sql="SELECT * FROM pk where rid='$r' and player='p2'";
$result2 = mysql_query($sql);
while($row = mysql_fetch_array($result2))
{	
	$atkt= $row['time'];
	$p1v=$row['val'];
	$atk=$row['atk'];
}

if($t-$atkt>5&&$atkt!=0){
	$sql="SELECT * FROM pk where rid='$r' and player='p1'";
$result3 = mysql_query($sql);
while($row = mysql_fetch_array($result3))
{
	$p2v=$row['val'];
}
if($p1v>=$p2v){
	$udtsql="update pk set hp=hp-1,hit=hit+1 where rid='$r' and player='p1';";
	$udtresult = mysql_query($udtsql);

}
	$udtsql="update pk set val='0',time='0',atk='0' where rid='$r' and player='p2';";
	$udtresult2 = mysql_query($udtsql);
}

mysql_close($con);
?>