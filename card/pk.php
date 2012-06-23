<?php
//建立pk表信息
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('common.php');
if($_GET['operation']=="room"){
$sq="SELECT * FROM pk where ready='0'";
$res = mysql_query($sq);
while($row = mysql_fetch_array($res))
 {
    echo "<div class='room' onclick='p2login(".$row['room'].")'>".$row['p1']."的房间，点击加入</div>";
 }
}else if($_GET['operation']=="start"){
	$r=$_COOKIE['room'];
	$t=time();
	$sql="update pk set time='$t',ready='3' where room='$r';";
	$result = mysql_query($sql);

}else if($_GET['operation']=="getp1"){
	$r=$_COOKIE['room'];
	$sql="SELECT * FROM pk where room='$r'";
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
{
		$id= $row['p1'];
}
	$sql="SELECT * FROM pcard,card,cskill where id='$id' and pcard.cid=card.cid and card.skillid=cskill.skillid and checked='1'";
	$result = mysql_query($sql);
		while($row = mysql_fetch_array($result))
{
		$skill="skill('".$row['skill']."')";
 		echo "<a title='".$row['des']."'><img src='images/".$row['pic'].".png'><span>结晶点：".$row['value']."</span></a>";
}

}else if($_GET['operation']=="getp2"){
	$r=$_COOKIE['room'];
	$sql="SELECT * FROM pk where room='$r'";
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
{
		$id= $row['p2'];
}
	$sql="SELECT * FROM pcard,card,cskill where id='$id' and pcard.cid=card.cid and card.skillid=cskill.skillid and checked='1'";
	$result = mysql_query($sql);
		while($row = mysql_fetch_array($result))
{
		$skill="skill('".$row['skill']."')";
 		echo "<a title='".$row['des']."'><img src='images/".$row['pic'].".png'><span>结晶点：".$row['value']."</span></a>";
}

}else{
$p=$_COOKIE['player'];
$r=$_COOKIE['room'];
$sql="SELECT * FROM pk where room='$r'";
$result = mysql_query($sql);
while($row = mysql_fetch_array($result))
 {
	 	if($p=='p1'){ //p1主视角时，p1的牌在pk区右边，反之，p2主视角p2在右边
			echo "<img src='images/".$row['p1pic'].".png'><span>结晶点：".$row['p1val']."</span>".":"."<img src='images/".$row['p2pic'].".png'><span>结晶点：".$row['p2val']."</span>";
		}else{
			echo "<img src='images/".$row['p2pic'].".png'><span>结晶点：".$row['p2val']."</span>".":"."<img src='images/".$row['p1pic'].".png'><span>结晶点：".$row['p1val']."</span>";
		}
}
}
mysql_close($con);
?>