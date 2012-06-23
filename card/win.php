<?php
//建立pk表信息
header("Cache-Control: no-cache");
header("Pragma: no-cache");
header('content-type:text/html;charset=utf-8');
include('common.php');

$p=$_COOKIE['player'];
$r=$_COOKIE['room'];
$sq="SELECT * FROM pk where room='$r'";
$res = mysql_query($sq);
while($row = mysql_fetch_array($res))
 {
	 		if($row['time']<=0){
			if($p=='p1'){ 
			if($row['p2']==''){
				echo "等待其他玩家加入，鼠标停留右下角卡片上可查看技能介绍，点击卡片使用技能";
				}else{
echo "<div id='start'>有玩家加入点击确认<button onClick='start()'>开始</button></div>";
				}
}else{
	echo "等待房主开始，鼠标停留右下角卡片上可查看技能介绍，点击卡片使用技能";}

}else{//进入pk
			$over =time()-$row['time'];
	 		if($over>5){
				if($row['p1val']>$row['p2val']){
					$sql="update pk set win='p1' where room='$r';";
				$result = mysql_query($sql);
					 	if($p=='p1'){ 
			echo "你赢了，目前还没开放经验值及碎片系统，点击右上角关闭游戏";
		}else{
			echo "你输了，目前还没开放经验值及碎片系统，点击右上角关闭游戏";
		}
				}else if($row['p2val']>$row['p1val']){
					$sql="update pk set win='p2' where room='$r';";
				$result = mysql_query($sql);
						 if($p=='p2'){ 
			echo "你赢了，目前还没开放经验值及碎片系统，点击右上角关闭游戏";
		}else{
			echo "你输了，目前还没开放经验值及碎片系统，点击右上角关闭游戏";
		}
				}else{
					$sql="update pk set win='no' where room='$r';";
				$result = mysql_query($sql);
					echo "平手，目前还没开放经验值及碎片系统，点击右上角关闭游戏";
					}
		 		$sql="update pk set ready='2' where room='$r';";
				$result = mysql_query($sql);
		 	}else{
				$l=5-$over;
				echo "pk中!<br/>时间剩余：".$l;}
		
		}
}
mysql_close($con);
?>