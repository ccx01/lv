<?php
header('content-type:text/html;charset=utf-8');
include('../common.php');

if($_POST['sort']){
	$sort=$_POST['sort'];
	if($sort=="random"){
		$n=rand(5,10);
		for($i=0;$i<$n;$i++){
			$x=rand(0,3);
			switch ($x)
			{
			case 1:
			  $sort="article";
			  break;
			case 2:
			  $sort="game";
			  break;
			case 3:
			  $sort="video";
			  break;
			default:
			  $sort="words";
			}
			// the random record ,for the efficiency of MYSQL
			$sql="SELECT * FROM wtow";
			$result = mysql_query($sql);
			$max=mysql_num_rows($result)-1;
			$rand=rand(0,$max);
			$sql="SELECT * FROM wtow limit $rand,1";
			$result = mysql_query($sql);

			while($row = mysql_fetch_array($result))
			{
				echo '<li class="'.$row["sort"].'">
							<span class="time">'.$row["time"].'</span>
							<p class="name">'.$row["name"].'</p>
							<p class="word">'.$row["words"].'</p>';
				if($row["other"]){
					echo '<div class="more">>></div>
							<div class="hide">'
							.$row["other"]
							."</div>";
				}
				echo '<div class="relate"><div class="to"><span>'.$row["tid"].'</span>prev</div>
					<div class="from"><span>'.$row["id"].'</span>next</div></div>
					</li>';
			}
		}
	}else{
		$sql="SELECT * FROM wtow where sort='".$sort."' ORDER BY id  DESC limit 7";
		$result = mysql_query($sql);
		while($row = mysql_fetch_array($result))
		{
			echo '<li class="'.$row["sort"].'">
						<span class="time">'.$row["time"].'</span>
						<p class="name">'.$row["name"].'</p>
						<p class="word">'.$row["words"].'</p>';
			if($row["other"]){
				echo '<div class="more">>></div>
						<div class="hide">'
						.$row["other"]
						."</div>";
			}
			echo '<div class="relate"><div class="to"><span>'.$row["tid"].'</span>prev</div>
				<div class="from"><span>'.$row["id"].'</span>next</div></div>
				</li>';
		}
	}
}else{
	if($_POST['tid']){
			$sql="SELECT * FROM wtow where id='".$_POST['tid']."' ORDER BY id  DESC";
	}

	if($_POST['id']){
			$sql="SELECT * FROM wtow where tid='".$_POST['id']."' ORDER BY id  DESC";
	}
	$result = mysql_query($sql);
	while($row = mysql_fetch_array($result))
	{
		echo '<li class="'.$row["sort"].'" style="width:80%;">
					<span class="time">'.$row["time"].'</span>
					<p class="name">'.$row["name"].'</p>
					<p class="word">'.$row["words"].'</p>';
		if($row["other"]){
			echo '<div class="more">>></div>
					<div class="hide">'
					.$row["other"]
					."</div>";
		}
		echo '<div class="relate"><div class="to"><span>'.$row["tid"].'</span>prev</div>
			<div class="from"><span>'.$row["id"].'</span>next</div></div>
			</li>';
	}
}
mysql_close($con);
?>
