<?php
header('content-type:text/html;charset=utf-8');
include('../common.php');

if($_POST['sort']){
	$sort=$_POST['sort'];
	if($sort=="random"){
		$sql="SELECT * FROM wtow ORDER BY id  DESC limit 7";
		$result = mysql_query($sql);
		while($row = mysql_fetch_array($result))
		{
			echo '<div class="item '.$row["sort"].'">
					<div class="tip">
						<div class="line"/>
						<div class="line2"/>
						<span class="tipText">'.$row["sort"].'</span>
					</div>
					<input type="hidden" class="id" value="'.$row["id"].'" />
				</div>';
		}

		for($i=0;$i<70;$i++){
			$x=rand(0,3);
			switch ($x)
			{
			case 1:
			  $sort="words";
			  break;
			case 2:
			  $sort="game";
			  break;
			case 3:
			  $sort="video";
			  break;
			default:
			  $sort="article";
			}
			// the random record ,for the efficiency of MYSQL
			$sql='SELECT * FROM wtow where sort="'.$sort.'"';
			$result = mysql_query($sql);
			$max=mysql_num_rows($result)-1;
			$rand=rand(0,$max);
			$sql='SELECT * FROM wtow where sort="'.$sort.'" limit '.$rand.',1';
			$result = mysql_query($sql);

			while($row = mysql_fetch_array($result))
			{
				echo '<div class="item '.$row["sort"].'">
						<div class="tip">
							<div class="line"/>
							<div class="line2"/>
							<span class="tipText">'.$row["sort"].'</span>
						</div>
						<input type="hidden" class="id" value="'.$row["id"].'" />
					</div>';			
			}
		}
	}
}else{
	if($_POST['id']){
		$sql="SELECT * FROM wtow where id='".$_POST['id']."'";

		$result = mysql_query($sql);
		while($row = mysql_fetch_array($result))
		{
			echo '<div class='.$row["sort"].'>
					<span class="time">'.$row["time"].'</span>
					<p class="name">'.$row["name"].'</p>
					<p class="title">'.$row["words"].'</p>
					<div class="more">'.$row["other"].'</div>
				</div>';
		}

		$sql="SELECT * FROM wtow where tid='".$_POST['id']."' ORDER BY id  DESC";

		$result = mysql_query($sql);
		while($row = mysql_fetch_array($result))
		{
			echo '<div class="comment">
					<span class="time">'.$row["time"].'</span>
					<p class="name">'.$row["name"].'</p>
					<p class="title">'.$row["words"].'</p>
					<div class="more">'.$row["other"].'</div>
				</div>';
		}
		echo '<div class="leavemessage">
				<textarea></textarea><a class="submit" title="卖萌可耻">>.<</a>
				<input type="hidden" class="id" value="'.$_POST['id'].'" />
			</div>';
	}
}
mysql_close($con);
?>
